package fr.inria.corese.w3c.junit.dynamic.loader;

import java.io.FileInputStream;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import com.apicatalog.jsonld.JsonLdVersion;
import com.apicatalog.jsonld.document.JsonDocument;
import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.IOOptions;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.io.option.TitaniumJSONLDProcessorOption;
import fr.inria.corese.core.next.impl.io.parser.ParserFactory;
import fr.inria.corese.core.next.impl.temp.CoreseModel;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.inria.corese.core.Graph;
import fr.inria.corese.core.kgram.core.Mapping;
import fr.inria.corese.core.kgram.core.Mappings;
import fr.inria.corese.core.load.Load;
import fr.inria.corese.core.query.QueryProcess;
import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.TestFileManager;

/**
 * Loads W3C test cases from manifest files and creates W3cTestCase objects.
 */
public class W3cTestLoader {

    private static final Logger logger = LoggerFactory.getLogger(W3cTestLoader.class);

    /**
     * constructor
     */
    public W3cTestLoader() {

    }

    /**
     * Loads W3C test cases from the given manifest URI.
     *
     * @param manifestUri The URI of the manifest file
     * @return A list of W3cTestCase objects loaded from the manifest
     */
    public static List<W3cTestCase> loadTestsFromManifest(URI manifestUri) {
        logger.debug("Loading W3C tests from manifest: {}", manifestUri);

        // Resolve manifest URI: prefer cached file, then remote URL
        try {
            manifestUri = resolveManifestUri(manifestUri);
        } catch (Exception e) {
            logger.warn("Failed to resolve manifest URI {}, will use given URI: {}", manifestUri, e.getMessage());
        }

        // Load the manifest into a graph
        CoreseModel model = (CoreseModel) loadManifest(manifestUri);
        QueryProcess queryProcess = QueryProcess.create(model.getCoreseGraph());

        List<W3cTestCase> testCases = new ArrayList<>();

        try {
            // Query for all tests in the manifest
            String testQuery = buildTestListQuery();
            Mappings testMappings = queryProcess.query(testQuery);
            logger.info("Found {} test mappings in manifest {}", testMappings.size(), manifestUri);

            for (Mapping mapping : testMappings) {
                String testUri = mapping.getValue("?test").getLabel();
                String typeUri = mapping.getValue("?type").getLabel();

                try {
                    W3cTestCase testCase = createTestCase(testUri, typeUri, queryProcess, manifestUri);
                    if (testCase != null) {
                        testCases.add(testCase);
                        logger.debug("Created test case: {} with type: {}", testUri, typeUri);
                    } else {
                        logger.warn("Skipped test case: {} with unsupported type: {}", testUri, typeUri);
                    }
                } catch (Exception e) {
                    logger.warn("Failed to create test case for {}: {}", testUri, e.getMessage());
                }
            }

        } catch (Exception e) {
            logger.error("Failed to load tests from manifest {}: {}", manifestUri, e.getMessage(), e);
        }

        logger.info("Loaded {} test cases from manifest {}", testCases.size(), manifestUri);
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
    private static URI resolveManifestUri(URI manifestUri) {
        if (manifestUri == null)
            return manifestUri;

        String scheme = manifestUri.getScheme();
        // Only attempt cache resolution for http(s) manifests
        if (scheme != null && (scheme.equals("http") || scheme.equals("https"))) {
            Path cached = TestFileManager.getLocalFilePath(manifestUri);
            if (Files.exists(cached)) {
                return cached.toUri();
            } else {
                try {
                    TestFileManager.loadFile(manifestUri);
                } catch (IOException | NoSuchAlgorithmException e) {
                    throw new RuntimeException(e);
                }
            }
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
    private static W3cTestCase createTestCase(String testUri, String typeUri,
                                              QueryProcess queryProcess, URI manifestUri) throws Exception {

        // Get test details
        String detailQuery = buildTestDetailQuery(testUri);
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
        String displayName = name.trim().toLowerCase(Locale.ROOT).replace("-", "").replace(" ", "_").replace("#", "")
                .replace(".", "");

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

        // Common properties
        addIfPresent(properties, details, "action");
        addIfPresent(properties, details, "result");
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
    private static TestType mapTestType(String typeUri) {
        return switch (typeUri) {
            case String s when s.contains("TestTurtleNegativeSyntax") -> TestType.TURTLE_NEGATIVE_SYNTAX;
            case String s when s.contains("TestTurtlePositiveSyntax") -> TestType.TURTLE_POSITIVE_SYNTAX;
            case String s when s.contains("TestTurtleEval") -> TestType.TURTLE_POSITIVE_EVAL;
            case String s when s.contains("TestTurtleNegativeEval") -> TestType.TURTLE_NEGATIVE_EVAL;
            case String s when s.contains("TestNTriplesNegativeSyntax") -> TestType.NTRIPLES_NEGATIVE_SYNTAX;
            case String s when s.contains("TestNTriplesPositiveSyntax") -> TestType.NTRIPLES_POSITIVE_SYNTAX;
            case String s when s.contains("TestTrigNegativeSyntax") -> TestType.TRIG_NEGATIVE_SYNTAX;
            case String s when s.contains("TestTrigPositiveSyntax") -> TestType.TRIG_POSITIVE_SYNTAX;
            case String s when s.contains("TestTrigEval") -> TestType.TRIG_POSITIVE_EVAL;
            case String s when s.contains("TestTrigNegativeEval") -> TestType.TRIG_NEGATIVE_EVAL;
            case String s when s.contains("TestNQuadsNegativeSyntax") -> TestType.NQUADS_NEGATIVE_SYNTAX;
            case String s when s.contains("TestNQuadsPositiveSyntax") -> TestType.NQUADS_POSITIVE_SYNTAX;
            case String s when s.contains("TestXMLNegativeSyntax") -> TestType.RDF_XML_NEGATIVE_SYNTAX;
            case String s when s.contains("TestXMLEval") -> TestType.RDF_XML_POSITIVE_EVAL;
            case String s when s.contains("json-ld-api/tests/vocab#PositiveEvaluationTest") ->
                    TestType.JSON_LD_POSITIVE_EVAL;
            case String s when s.contains("json-ld-api/tests/vocab#NegativeEvaluationTest") ->
                    TestType.JSON_LD_NEGATIVE_EVAL;
            case String s when s.contains("json-ld-api/tests/vocab#PositiveSyntaxTest") ->
                    TestType.JSON_LD_POSITIVE_SYNTAX;
            case String s when s.contains("json-ld-api/tests/vocab#NegativeSyntaxTest") ->
                    TestType.JSON_LD_NEGATIVE_SYNTAX;
            default -> throw new IllegalArgumentException(
                    "Unsupported or unknown test type URI: " + typeUri);
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
    public static Model loadManifest(URI manifestUri, Model model) {
        logger.debug("Loading manifest {}", manifestUri);

            try {
                // Only attempt to download/update manifests if the URI is remote (http/https).
                URI localManifestUri = resolveManifestUri(manifestUri);
                RDFFormat format = RDFTestUtils.guessFileFormat(localManifestUri);
                logger.debug("Format {} detected for {}", format, localManifestUri);
                RDFParser parser = RDFTestUtils.createParser(format, model);
                Path localManifestPath = Path.of(localManifestUri);

                FileInputStream fileInputStream = new FileInputStream(localManifestPath.toFile());
                if (format == RDFFormat.JSONLD) { // If it is JSON, we want to set up the baseURI and retrieve the context file
                    String baseUri = RDFTestUtils.getBaseUri(manifestUri);
                    logger.debug("Base URI detected: {}", baseUri);

                    FileInputStream documentInputStream = new FileInputStream(localManifestPath.toFile());
                    JsonDocument document = JsonDocument.of(documentInputStream);
                    String contextString = document.getJsonContent().get().getValue("/@context").asJsonArray().get(0).toString().replaceAll("\"", "");
                    URI localContextUri = localManifestUri.resolve(contextString);

                    logger.debug("Context raw {}", contextString);
                    logger.debug("Looking for {}", localManifestPath.resolve(contextString));
                    if (! localManifestPath.resolve("./" + contextString).toFile().exists()) {
                        URI contextRemoteUri = URI.create(baseUri).resolve(contextString);
                        logger.debug("Remote context is {}", contextRemoteUri);
                        logger.debug("Loading context {}", contextRemoteUri);
                        TestFileManager.loadFile(contextRemoteUri);
                    }

                    IOOptions option = new TitaniumJSONLDProcessorOption.Builder().base(baseUri).build();
                    parser.setConfig(option);
                }
                parser.parse(fileInputStream);
            } catch (Exception e) {
                logger.error("Error loading manifest file: {}", manifestUri, e);
                System.exit(1);
            }

            Graph manifestGraph = ((CoreseModel) model).getCoreseGraph();
            QueryProcess inclusionQueryExec = QueryProcess.create(manifestGraph);
            String inclusionQuery = buildInclusionQuery(manifestUri);
            try {
                Mappings inclusionMappings = inclusionQueryExec.query(inclusionQuery);
                for (Mapping mapping : inclusionMappings) {
                    String inclusion = mapping.getValue("?inclusion").getLabel();
                    loadManifest(URI.create(inclusion), model);
                }
            } catch (Exception e) {
                logger.error("Error executing inclusion query.", e);
            }

        return model;
    }

    /**
     * Builds SPARQL query to get the list of tests from a manifest.
     *
     * @return the SPARQL query string
     */
    private static String buildTestListQuery() {
        return """
                PREFIX mf: <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                
                SELECT DISTINCT ?test ?type WHERE {
                    ?manifest a mf:Manifest .
                    { ?manifest mf:entries/rdf:rest*/rdf:first ?test . }
                    UNION { ?manifest mf:entries ?test .}
                    ?test a ?type .
                    FILTER(?type != mf:Manifest)
                }
                ORDER BY ?test
                """;
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
                        
                        SELECT DISTINCT ?name ?comment ?action ?result ?query ?data ?dataGraph ?shapesGraph ?conformity ?hashAlgorithm WHERE {
                            OPTIONAL { <%s> mf:name ?name . }
                            OPTIONAL { <%s> rdfs:comment ?comment . }
                            OPTIONAL { <%s> mf:action ?action . }
                            OPTIONAL { <%s> mf:result ?result . }
                            OPTIONAL { <%s> mf:action/qt:query ?query . }
                            OPTIONAL { <%s> mf:action/qt:data ?data . }
                            OPTIONAL { <%s> mf:action/sht:dataGraph ?dataGraph . }
                            OPTIONAL { <%s> mf:action/sht:shapesGraph ?shapesGraph . }
                            OPTIONAL { <%s> mf:result/sh:conforms ?conformity . }
                            OPTIONAL { <%s> rdfc:hashAlgorithm ?hashAlgorithm . }
                        }
                        """,
                testUri, testUri, testUri, testUri, testUri, testUri, testUri, testUri, testUri, testUri);
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
        sb.append("    { ?manifest mf:include/rdf:rest*/rdf:first ?inclusion . }\n");
        sb.append("    UNION { ?manifest mf:include ?inclusion . FILTER(isIRI(?inclusion)) }\n");
        if (manifestUri != null) {
            sb.append("    FILTER(?manifest = <").append(manifestUri.toString()).append(">)\n");
        }
        sb.append("}");
        return sb.toString();
    }
}