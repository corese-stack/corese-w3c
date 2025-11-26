package fr.inria.corese.w3c.junit.dynamic.loader;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.StringWriter;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import com.apicatalog.jsonld.document.JsonDocument;
import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.IOOptions;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.api.io.serialization.RDFSerializer;
import fr.inria.corese.core.next.impl.io.common.JSONLDOptions;
import fr.inria.corese.core.next.impl.io.serialization.SerializerFactory;
import fr.inria.corese.core.next.impl.io.serialization.turtle.TurtleSerializerOptions;
import fr.inria.corese.core.next.impl.temp.CoreseModel;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.inria.corese.core.Graph;
import fr.inria.corese.core.kgram.core.Mapping;
import fr.inria.corese.core.kgram.core.Mappings;
import fr.inria.corese.core.query.QueryProcess;
import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.TestFileManager;

/**
 * Loads W3C test cases from manifest files and creates W3cTestCase objects.
 */
public class W3cTestLoader {

    private static final Logger logger = LoggerFactory.getLogger(W3cTestLoader.class);
    
    private static final String TEST_LIST_QUERY = """
                PREFIX mf: <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX td: <http://www.w3.org/2006/03/test-description#>
                
                SELECT DISTINCT ?test ?type WHERE {
                    {
                        ?manifest a mf:Manifest .
                        { ?manifest mf:entries/rdf:rest*/rdf:first ?test . }
                        UNION { ?manifest mf:entries ?test .}
                        ?test a ?type .
                        FILTER(?type != mf:Manifest)
                    } UNION {
                        ?test a ?type .
                        VALUES ?type { td:TestCase }
                    }
                }
                ORDER BY ?test
                """;

    /**
     * Default constructor.
     * This constructor is intentionally empty as the class contains only static methods.
     */
    private W3cTestLoader() {
        // Utility class - private constructor to prevent instantiation
    }

    /**
     * Loads W3C test cases from the given manifest URI.
     *
     * @param manifestUri The URI of the manifest file
     * @return A list of W3cTestCase objects loaded from the manifest
     */
    @SuppressWarnings({"java:S1141", "java:S112", "java:S2589"}) // Nested try-catch acceptable, generic exceptions, defensive null checks
    public static List<W3cTestCase> loadTestsFromManifest(URI manifestUri) {

        // Load the manifest into a graph
        CoreseModel model = (CoreseModel) loadManifest(manifestUri);
        QueryProcess queryProcess = QueryProcess.create(model.getCoreseGraph());

        SerializerFactory debugSerialFactory = new SerializerFactory();
        RDFSerializer debugSerializer = debugSerialFactory.createSerializer(RDFFormat.TURTLE, model, (new TurtleSerializerOptions.Builder()).build());
        StringWriter debugWriter = new StringWriter();
        debugSerializer.write(debugWriter);
        logger.info(debugWriter.toString());

        List<W3cTestCase> testCases = new ArrayList<>();

        try {
            // Query for all tests in the manifest
            String testQuery = buildTestListQuery();
            logger.info("Executing {}", testQuery);
            Mappings testMappings = queryProcess.query(testQuery);
            logger.info("Found {} tests", testMappings.size());
            logger.info("{}", testMappings);

            for (Mapping mapping : testMappings) {
                String testUri = mapping.getValue("?test").getLabel();
                String typeUri = mapping.getValue("?type").getLabel();

                try {
                    W3cTestCase testCase = createTestCase(testUri, typeUri, queryProcess, manifestUri);
                    testCases.add(testCase);
                } catch (Exception e) {
                    logger.warn("Failed to create test case for {}: {}", testUri, e.getMessage());
                }
            }

        } catch (Exception e) {
            logger.error("Failed to load tests from manifest {}: {}", manifestUri, e.getMessage(), e);
        }

        logger.debug("Loaded {} test cases from manifest {}", testCases.size(), manifestUri);
        return testCases;
    }

    /**
     * Resolve a manifest URI to a usable source. Preference order:
     * 1) local cached file on disk (TestFileManager.getLocalFilePath)
     * 2) the provided manifestUri (usually remote http(s) URL)
     *
     * @param manifestUri the original manifest URI (often a remote URL)
     * @return a resolved URI pointing to the chosen source
     */
    @SuppressWarnings("java:S112")
    private static URI resolveManifestUri(URI manifestUri) {
        if (manifestUri == null)
            return manifestUri;

        // Only attempt cache resolution for http(s) manifests
        if (! RDFTestUtils.isUriLocal(manifestUri)) {
            Path cached = TestFileManager.getLocalFilePath(manifestUri);
            if (!Files.exists(cached)) {
                try {
                    TestFileManager.loadFile(manifestUri);
                } catch (IOException | NoSuchAlgorithmException e) {
                    throw new RuntimeException(e);
                }
            }
            return cached.toUri();
        }

        // fallback to original manifestUri
        return manifestUri;
    }

    /**
     * Creates a W3cTestCase from the given test URI and type URI.
     *
     * @param testUri      The test URI
     * @param typeUri      The test type URI
     * @param queryProcess The QueryProcess for querying test details
     * @param manifestUri  The manifest URI the test belongs to
     * @return A W3cTestCase object, or null if the test type is unsupported
     * @throws Exception If an error occurs during test case creation
     */
    @SuppressWarnings({"java:S112", "java:S2589"}) // Generic exception acceptable, defensive null checks
    private static W3cTestCase createTestCase(String testUri, String typeUri,
                                              QueryProcess queryProcess, URI manifestUri) throws Exception {

        // Get test details
        String detailQuery = buildTestDetailQuery(testUri);
        logger.info("Looking for details: {}", detailQuery);
        Mappings detailMappings = queryProcess.query(detailQuery);

        if (detailMappings.isEmpty()) {
            throw new IllegalArgumentException("No test details found for: " + testUri);
        }

        Mapping details = detailMappings.get(0);

        // Extract basic properties
        String name = getStringValue(details, "name");
        String comment = getStringValue(details, "comment");

        // Map W3C test type URI to our TestType enum
        TestType testType = mapTestType(typeUri);

        // Extract test-specific properties
        Map<String, Object> properties = extractTestProperties(details);

        // Generate display name
        String displayName = name != null ? name.trim().toLowerCase(Locale.ROOT).replace("-", "").replace(" ", "_").replace("#", "")
                .replace(".", "") : "unknown_test";

        return new W3cTestCase(testUri, name, displayName, comment, testType, manifestUri, properties);
    }

    /**
     * Extracts test properties from the mapping.
     *
     * @param details The mapping containing test details
     * @return A map of extracted properties
     */
    private static Map<String, Object> extractTestProperties(Mapping details) {
        Map<String, Object> properties = new HashMap<>();

        for(W3cTestCase.Property property : W3cTestCase.Property.values()) {
            addIfPresent(properties, details, property.getKey());
        }

        return properties;
    }

    /**
     * Adds a property to the map if present in the mapping.
     *
     * @param properties The properties map to add to
     * @param mapping    The mapping to extract from
     * @param variable   The variable name (without '?')
     */
    private static void addIfPresent(Map<String, Object> properties, Mapping mapping, String variable) {
        String value = getStringValue(mapping, variable);
        if (value != null) {
            properties.put(variable, value);
        }
    }

    /**
     * Gets a string value from a mapping, handling null values.
     *
     * @param mapping  The mapping to extract from
     * @param variable The variable name (without '?')
     * @return The string value, or null if not present
     */
    private static String getStringValue(Mapping mapping, String variable) {
        return mapping.getValue("?" + variable) != null ? mapping.getValue("?" + variable).getLabel() : null;
    }

    /**
     * Maps a W3C test type URI to the local {@link TestType} enum.
     *
     * @param typeUri the W3C test type URI
     * @return the corresponding TestType
     * @throws IllegalArgumentException if the test type URI not recognised
     */
    @SuppressWarnings("unused")
    private static TestType mapTestType(String typeUri) {
        logger.debug("Mapping test type URI: {}", typeUri);

        // Convert to lowercase for case-insensitive matching
        String lowerUri = typeUri.toLowerCase();

        return switch (typeUri) {
            case "http://www.w3.org/2006/03/test-description#TestCase" -> TestType.ASK_BASED_EVAL;
            // RDF 1.1 Turtle tests
            case String s when lowerUri.contains("testturtlenegativesyntax") -> TestType.TURTLE_NEGATIVE_SYNTAX;
            case String s when lowerUri.contains("testturtlepositivesyntax") -> TestType.TURTLE_POSITIVE_SYNTAX;
            case String s when lowerUri.contains("testturtleeval") && !lowerUri.contains("negative") -> TestType.TURTLE_POSITIVE_EVAL;
            case String s when lowerUri.contains("testturtlenegativeeval") -> TestType.TURTLE_NEGATIVE_EVAL;

            // RDF 1.1 N-Triples tests
            case String s when lowerUri.contains("testntriplesegativesyntax") -> TestType.NTRIPLES_NEGATIVE_SYNTAX;
            case String s when lowerUri.contains("testntriplespositivesyntax") -> TestType.NTRIPLES_POSITIVE_SYNTAX;

            // RDF 1.1 TriG tests
            case String s when lowerUri.contains("testtriglnegativesyntax") -> TestType.TRIG_NEGATIVE_SYNTAX;
            case String s when lowerUri.contains("testtrigpositivesyntax") -> TestType.TRIG_POSITIVE_SYNTAX;
            case String s when lowerUri.contains("testtrigeval") && !lowerUri.contains("negative") -> TestType.TRIG_POSITIVE_EVAL;
            case String s when lowerUri.contains("testtrigegativeeval") -> TestType.TRIG_NEGATIVE_EVAL;

            // RDF 1.1 N-Quads tests
            case String s when lowerUri.contains("testnquadsegativesyntax") -> TestType.NQUADS_NEGATIVE_SYNTAX;
            case String s when lowerUri.contains("testnquadspositivesyntax") -> TestType.NQUADS_POSITIVE_SYNTAX;

            // RDF 1.1 RDF/XML tests
            case String s when lowerUri.contains("testxmlnegativesyntax") -> TestType.RDF_XML_NEGATIVE_SYNTAX;
            case String s when lowerUri.contains("testxmleval") -> TestType.RDF_XML_POSITIVE_EVAL;

            // RDF Canonicalization (RDFC-1.0)
            case String s when lowerUri.contains("rdfc10negativeevaltest") -> TestType.RDFC10_NEGATIVE_EVAL_TEST;
            case String s when lowerUri.contains("rdfc10maptest") -> TestType.RDFC10_MAP_TEST;
            case String s when lowerUri.contains("rdfc10evaltest") -> TestType.RDFC10_EVAL_TEST;

            // JSON-LD tests
            case String s when s.contains("json-ld-api/tests/vocab#PositiveEvaluationTest") -> TestType.JSON_LD_POSITIVE_EVAL;
            case String s when s.contains("json-ld-api/tests/vocab#NegativeEvaluationTest") -> TestType.JSON_LD_NEGATIVE_EVAL;
            case String s when s.contains("json-ld-api/tests/vocab#PositiveSyntaxTest") -> TestType.JSON_LD_POSITIVE_SYNTAX;
            case String s when s.contains("json-ld-api/tests/vocab#NegativeSyntaxTest") -> TestType.JSON_LD_NEGATIVE_SYNTAX;

            default -> throw new IllegalArgumentException("Unsupported or unknown test type URI: " + typeUri);
        };
    }

    /**
     * Loads a manifest file into a new {@link Model}.
     * This method recursively loads the main manifest and any included
     * sub-manifests.
     *
     * @param manifestUri The URI of the manifest file to load.
     * @return A {@link Model} containing the loaded manifest data.
     */
    public static Model loadManifest(URI manifestUri) {
        CoreseModel manifestModel = new CoreseModel();
        return loadManifest(manifestUri, manifestModel);
    }

    /**
     * Loads amanifest file into the given Model.
     * This method recursively loads the main manifest and any included
     * sub-manifests.
     *
     * @param manifestUri The uri of the manifest file to load. If it is remote, the file will be downloaded to the local resource folder.
     * @param model       /!\ Expected to be an instance of CoreseModel until implementation of the SPARQL API
     * @return The given model with the content of the manifest added to it.
     */
    @SuppressWarnings({"java:S1141", "java:S2589"}) // Nested try for resource management, defensive checks
    public static Model loadManifest(URI manifestUri, Model model) {
        URI baseUri = RDFTestUtils.getBaseUri(manifestUri);

        try {
            // Only attempt to download/update manifests if the URI is remote (http/https).
            URI localManifestUri = resolveManifestUri(manifestUri);
            RDFFormat format = RDFTestUtils.guessFileFormat(localManifestUri);
            RDFParser parser = RDFTestUtils.createParser(format, model);
            Path localManifestPath = Path.of(localManifestUri);

            FileInputStream fileInputStream = new FileInputStream(localManifestPath.toFile());
            if (format == RDFFormat.JSONLD) { // If it is JSON, we want to set up the baseURI and retrieve the context file

                FileInputStream documentInputStream = new FileInputStream(localManifestPath.toFile());
                JsonDocument document = JsonDocument.of(documentInputStream);
                if (document.getJsonContent().isPresent()) {
                    @SuppressWarnings("java:S3655") // getValue() is checked to be present in JSON-LD context
                    String contextString = document.getJsonContent().get().getValue("/@context").asJsonArray().get(0).toString().replace("\"", "");

                    if (!localManifestPath.resolve("./" + contextString).toFile().exists()) {
                        URI contextRemoteUri = baseUri.resolve(contextString);
                        TestFileManager.loadFile(contextRemoteUri);
                    }
                }

                IOOptions option = new JSONLDOptions.Builder().base(baseUri.toString()).build();
                parser.setConfig(option);

                documentInputStream.close();
            }
            parser.parse(fileInputStream, manifestUri.toString());

            fileInputStream.close();

            Graph manifestGraph = ((CoreseModel) model).getCoreseGraph();
            QueryProcess inclusionQueryExec = QueryProcess.create(manifestGraph);
            String inclusionQuery = buildInclusionQuery(manifestUri);
            try {
                Mappings inclusionMappings = inclusionQueryExec.query(inclusionQuery);
                for (Mapping mapping : inclusionMappings) {
                    String inclusion = mapping.getValue("?inclusion").getLabel();
                    URI inclusionUri = URI.create(inclusion);
                    // If the inclusion URI is local (because it is relative), the base uri is not and the local inclusion file does not exists, we should force the inclusion uri to be downloaded
                    if (RDFTestUtils.isUriLocal(inclusionUri) && ! RDFTestUtils.isUriLocal(baseUri) && ! Path.of(inclusionUri).toFile().exists()) {
                        inclusionUri = RDFTestUtils.swapBaseUri(inclusionUri, baseUri);
                    }
                    if(RDFTestUtils.isUriAFile(inclusionUri)) { // Inclusion should only be files
                        loadManifest(inclusionUri, model);
                    }
                }
            } catch (Exception e) {
                logger.error("Error executing inclusion query.", e);
            }
        } catch (Exception e) {
            logger.error("Error loading manifest file: {}", manifestUri, e);
            System.exit(1);
        }

        return model;
    }

    /**
     * Builds SPARQL query to get the list of tests from a manifest.
     *
     * @return the SPARQL query string
     */
    private static String buildTestListQuery() {
        return TEST_LIST_QUERY;
    }

    /**
     * Builds SPARQL query to get detailed properties of a specific test.
     *
     * @param testUri the URI of the test to query details for
     * @return the SPARQL query string
     */
    private static String buildTestDetailQuery(String testUri) {
        return String.format(
                """
                        PREFIX mf: <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#>
                        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                        PREFIX qt: <http://www.w3.org/2001/sw/DataAccess/tests/test-query#>
                        PREFIX sht: <http://www.w3.org/ns/shacl-test#>
                        PREFIX rdfc: <https://w3c.github.io/rdf-canon/tests/vocab#>
                        PREFIX sh: <http://www.w3.org/ns/shacl#>
                        PREFIX jld: <https://w3c.github.io/json-ld-api/tests/vocab#>
                        PREFIX td: <http://www.w3.org/2006/03/test-description#>
                        PREFIX dce: <http://purl.org/dc/elements/1.1/>
                        
                        SELECT DISTINCT ?name ?comment ?action ?result ?expectedBoolean ?query ?data ?dataGraph ?shapesGraph ?conformity ?hashAlgorithm ?baseUri ?specVersion ?useNativeTypes ?useRdfType WHERE {
                            <%s> ?nameProp ?name .
                            VALUES ?nameProp {
                                mf:name
                                dce:title
                            }
                            OPTIONAL {
                                <%s> ?commentProp ?comment .
                                VALUES ?commentProp {
                                    rdfs:comment
                                    td:purpose
                                }
                            }
                            <%s> ?actionProp ?action .
                            VALUES ?actionProp {
                                mf:action
                                td:informationResourceInput
                            }
                            OPTIONAL {
                                <%s> ?resultProp ?result .
                                VALUES ?resultProp {
                                    mf:result
                                    td:informationResourceResults
                                }
                            }
                            OPTIONAL { <%s> td:expectedResults ?expectedBoolean . }
                            OPTIONAL { <%s> mf:action/qt:query ?query . }
                            OPTIONAL { <%s> mf:action/qt:data ?data . }
                            OPTIONAL { <%s> mf:action/sht:dataGraph ?dataGraph . }
                            OPTIONAL { <%s> mf:action/sht:shapesGraph ?shapesGraph . }
                            OPTIONAL { <%s> mf:result/sh:conforms ?conformity . }
                            OPTIONAL { <%s> rdfc:hashAlgorithm ?hashAlgorithm . }
                            OPTIONAL { <%s> jld:option ?option . ?option jld:base ?baseUri }
                            OPTIONAL { <%s> jld:option ?option . ?option jld:specVersion ?specVersion }
                            OPTIONAL { <%s> jld:option ?option . ?option jld:useNativeTypes ?useNativeTypes }
                            OPTIONAL { <%s> jld:option ?option . ?option jld:useRdfType ?useRdfType }
                        }
                        """,
                testUri, testUri, testUri, testUri, testUri, testUri, testUri, testUri, testUri, testUri, testUri, testUri, testUri, testUri, testUri);
    }

    /**
     * Generates a SPARQL query that retrieves the list of manifests files listed as
     * inclusions.
     * This query looks for `mf:include` properties within the manifest.
     *
     * @param manifestUri If not null, the query will filter to only list inclusions
     *                    linked to the provided URI.
     * @return A SPARQL query string to retrieve manifest inclusions.
     */
    private static String buildInclusionQuery(URI manifestUri) {
        StringBuilder sb = new StringBuilder();
        sb.append("PREFIX mf: <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#>\n");
        sb.append("PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n");
        sb.append("SELECT DISTINCT ?inclusion WHERE {\n");
        sb.append("    ?manifest a mf:Manifest .\n");
        sb.append("    ?inclusion a mf:Manifest .\n");
        sb.append("    { ?manifest mf:include/rdf:rest*/rdf:first ?inclusion . }\n");
        sb.append("    UNION { \n");
        sb.append("        { ?manifest mf:entries/rdf:rest*/rdf:first ?inclusion . }\n");
        sb.append("        UNION { ?manifest mf:include ?inclusion . }\n");
        sb.append("        FILTER(isIRI(?inclusion)) \n");
        sb.append("    } \n");
        if (manifestUri != null) {
            String extension = RDFTestUtils.guessFileFormat(manifestUri).getDefaultExtension();
            String uriWithoutExtension = manifestUri.toString().replace("." + extension, "");
            sb.append("    FILTER(?manifest = <").append(manifestUri).append("> || ?manifest = <").append(uriWithoutExtension).append(">)\n");
        }
        sb.append("}");
        return sb.toString();
    }
}