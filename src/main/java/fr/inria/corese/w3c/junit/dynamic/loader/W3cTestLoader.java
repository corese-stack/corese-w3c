package fr.inria.corese.w3c.junit.dynamic.loader;

import com.apicatalog.jsonld.document.JsonDocument;
import com.apicatalog.jsonld.JsonLdError;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.core.next.data.api.io.JSONLDOptions;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.model.Statement;
import fr.inria.corese.core.next.data.api.term.BNode;
import fr.inria.corese.core.next.data.api.term.Resource;
import fr.inria.corese.core.next.data.api.term.Value;
import fr.inria.corese.core.next.query.Repositories;
import fr.inria.corese.core.next.query.api.repository.RepositoryConnection;
import fr.inria.corese.core.next.query.api.repository.Repository;
import fr.inria.corese.core.next.query.api.result.BindingSet;
import fr.inria.corese.core.next.query.api.result.TupleQueryResult;
import fr.inria.corese.core.next.storage.Storages;
import fr.inria.corese.core.next.storage.StorageModels;
import fr.inria.corese.core.next.storage.api.StorageManager;
import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import fr.inria.corese.w3c.junit.dynamic.utils.TestFileManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileInputStream;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.NoSuchAlgorithmException;
import java.util.*;

/**
 * Loads W3C test cases from manifest files and creates W3cTestCase objects.
 */
public class W3cTestLoader {

    private static final Logger logger = LoggerFactory.getLogger(W3cTestLoader.class);

    // The "next" SPARQL pipeline only supports plain BGPs (no OPTIONAL, UNION, FILTER, VALUES).
    // PREFIX declarations may also not be processed correctly, so all predicates are written
    // as full angle-bracket IRIs to avoid any prefix-expansion dependency.
    private static final String TYPE_QUERY =
            "SELECT ?uri ?type WHERE { ?uri <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> ?type . }";
    private static final String SELECT_URI_VALUE_PREFIX = "SELECT ?uri ?value WHERE { ?uri ";
    private static final String VALUE_PATTERN_SUFFIX = " ?value . }";
    private static final String VAR_VALUE = "value";
    private static final String VAR_URI = "uri";
    private static final String MANIFEST_ACTION = "<http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#action>";
    private static final String MANIFEST_RESULT = "<http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#result>";
    private static final String JSONLD_OPTION = "<https://w3c.github.io/json-ld-api/tests/vocab#option>";
    private static final String JSON_LD_API = "json-ld-api";
    // SPARQL 1.1 Update test vocabulary (ut:)
    private static final String UT_REQUEST    = "<http://www.w3.org/2009/sparql/tests/test-update#request>";
    private static final String UT_DATA       = "<http://www.w3.org/2009/sparql/tests/test-update#data>";
    private static final String UT_GRAPH_DATA = "<http://www.w3.org/2009/sparql/tests/test-update#graphData>";
    private static final String UT_GRAPH      = "<http://www.w3.org/2009/sparql/tests/test-update#graph>";
    private static final String RDFS_LABEL    = "<http://www.w3.org/2000/01/rdf-schema#label>";
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
    public static List<W3cTestCase> loadTestsFromManifest(URI manifestUri) {
        StorageManager storage = Storages.create();
        Model model = StorageModels.create(storage);
        try (Repository repo = Repositories.create(storage);
                RepositoryConnection conn = repo.getConnection()) {
            loadManifestInto(manifestUri, model);
            Map<String, Set<String>> uriToTypes = collectTestTypes(conn);
            ManifestProperties properties = loadManifestProperties(conn);
            List<W3cTestCase> testCases = createTestCases(uriToTypes, properties, manifestUri);
            logger.info("Loaded {} test cases", testCases.size());
            return testCases;
        } catch (RuntimeException e) {
            throw new RuntimeException("Failed to load tests from manifest " + manifestUri, e);
        }
    }

    private static Map<String, Set<String>> collectTestTypes(RepositoryConnection conn) {
        logger.info("Loading test types");
        Map<String, Set<String>> uriToTypes = new HashMap<>();
        try (TupleQueryResult result = conn.prepareTupleQuery(TYPE_QUERY).evaluate()) {
            while (result.hasNext()) {
                BindingSet binding = result.next();
                String uri = getStringValue(binding, VAR_URI);
                String type = getStringValue(binding, "type");
                if (isTestType(uri, type)) {
                    uriToTypes.computeIfAbsent(uri, key -> new HashSet<>()).add(type);
                }
            }
        }
        logger.info("Found {} test URIs", uriToTypes.size());
        return uriToTypes;
    }

    private static boolean isTestType(String uri, String type) {
        return uri != null && type != null
                && !type.equals("http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#Manifest");
    }

    private static ManifestProperties loadManifestProperties(RepositoryConnection conn) {
        Map<String, Map<String, String>> props = new HashMap<>();
        loadSingleValueProperties(conn, props);
        loadTwoHopProperties(conn, props);

        Map<String, List<String>> graphData = new HashMap<>();
        runMultiValue2HopPropQuery(conn, graphData, MANIFEST_ACTION,
                "<http://www.w3.org/2001/sw/DataAccess/tests/test-query#graphData>",
                W3cTestCase.Property.GRAPH_DATA.getKey());

        Map<String, List<String>> updateGraphData = new HashMap<>();
        runUpdateGraphDataQuery(conn, updateGraphData, MANIFEST_ACTION,
                W3cTestCase.Property.UPDATE_GRAPH_DATA.getKey());
        Map<String, List<String>> resultGraphData = new HashMap<>();
        runUpdateGraphDataQuery(conn, resultGraphData, MANIFEST_RESULT,
                W3cTestCase.Property.RESULT_GRAPH_DATA.getKey());
        return new ManifestProperties(props, graphData, updateGraphData, resultGraphData);
    }

    private static void loadSingleValueProperties(RepositoryConnection conn, Map<String, Map<String, String>> props) {
        runPropQuery(conn, props, "<http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#name>", "name");
        runPropQuery(conn, props, "<http://purl.org/dc/elements/1.1/title>", "nameAlt");
        runPropQuery(conn, props, "<http://www.w3.org/2000/01/rdf-schema#comment>", "comment");
        runPropQuery(conn, props, "<http://www.w3.org/2006/03/test-description#purpose>", "commentAlt");
        runPropQuery(conn, props, MANIFEST_ACTION, "action");
        runPropQuery(conn, props, "<http://www.w3.org/2006/03/test-description#informationResourceInput>", "actionAlt");
        runPropQuery(conn, props, MANIFEST_RESULT, "result");
        runPropQuery(conn, props, "<http://www.w3.org/2006/03/test-description#informationResourceResults>", "resultAlt");
        runPropQuery(conn, props, "<http://www.w3.org/2006/03/test-description#expectedResults>", "expectedBoolean");
        runPropQuery(conn, props, "<https://w3c.github.io/rdf-canon/tests/vocab#hashAlgorithm>", "hashAlgorithm");
        runPropQuery(conn, props, "<http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#resultCardinality>", "resultCardinality");
    }

    private static void loadTwoHopProperties(RepositoryConnection conn, Map<String, Map<String, String>> props) {
        run2HopPropQuery(conn, props, MANIFEST_ACTION,
                "<http://www.w3.org/2001/sw/DataAccess/tests/test-query#query>", "query");
        run2HopPropQuery(conn, props, MANIFEST_ACTION,
                "<http://www.w3.org/2001/sw/DataAccess/tests/test-query#data>", "data");
        run2HopPropQuery(conn, props, MANIFEST_ACTION,
                "<http://www.w3.org/ns/shacl-test#dataGraph>", "dataGraph");
        run2HopPropQuery(conn, props, MANIFEST_ACTION,
                "<http://www.w3.org/ns/shacl-test#shapesGraph>", "shapesGraph");
        run2HopPropQuery(conn, props, MANIFEST_RESULT,
                "<http://www.w3.org/ns/shacl#conforms>", "conformity");
        run2HopPropQuery(conn, props, JSONLD_OPTION,
                "<https://w3c.github.io/json-ld-api/tests/vocab#base>", "baseUri");
        run2HopPropQuery(conn, props, JSONLD_OPTION,
                "<https://w3c.github.io/json-ld-api/tests/vocab#specVersion>", "specVersion");
        run2HopPropQuery(conn, props, JSONLD_OPTION,
                "<https://w3c.github.io/json-ld-api/tests/vocab#processingMode>", "processingMode");
        run2HopPropQuery(conn, props, JSONLD_OPTION,
                "<https://w3c.github.io/json-ld-api/tests/vocab#produceGeneralizedRdf>", "produceGeneralizedRdf");
        run2HopPropQuery(conn, props, JSONLD_OPTION,
                "<https://w3c.github.io/json-ld-api/tests/vocab#rdfDirection>", "rdfDirection");
        run2HopPropQuery(conn, props, JSONLD_OPTION,
                "<https://w3c.github.io/json-ld-api/tests/vocab#expandContext>", "expandContext");
        run2HopPropQuery(conn, props, JSONLD_OPTION,
                "<https://w3c.github.io/json-ld-api/tests/vocab#useNativeTypes>", "useNativeTypes");
        run2HopPropQuery(conn, props, JSONLD_OPTION,
                "<https://w3c.github.io/json-ld-api/tests/vocab#useRdfType>", "useRdfType");
        run2HopPropQuery(conn, props, MANIFEST_ACTION, UT_REQUEST, W3cTestCase.Property.REQUEST.getKey());
        run2HopPropQuery(conn, props, MANIFEST_ACTION, UT_DATA, W3cTestCase.Property.UPDATE_DATA.getKey());
        run2HopPropQuery(conn, props, MANIFEST_RESULT, UT_DATA, W3cTestCase.Property.RESULT_DATA.getKey());
    }

    private static List<W3cTestCase> createTestCases(Map<String, Set<String>> uriToTypes,
                                                       ManifestProperties manifestProperties, URI manifestUri) {
        return uriToTypes.entrySet().stream()
                .map(entry -> createTestCase(entry, manifestProperties, manifestUri))
                .toList();
    }

    private static W3cTestCase createTestCase(Map.Entry<String, Set<String>> entry,
                                               ManifestProperties manifestProperties, URI manifestUri) {
        String testUri = entry.getKey();
        Map<String, String> props = manifestProperties.properties().getOrDefault(testUri, Map.of());
        String name = coalesce(props.get("name"), props.get("nameAlt"));
        String comment = coalesce(props.get("comment"), props.get("commentAlt"));
        String action = coalesce(props.get("action"), props.get("actionAlt"));
        String result = coalesce(props.get("result"), props.get("resultAlt"));
        Map<String, Object> properties = buildPropertiesFromMap(props, action, result);
        addMultiValueProperty(properties, W3cTestCase.Property.GRAPH_DATA, manifestProperties.graphData().get(testUri));
        addMultiValueProperty(properties, W3cTestCase.Property.UPDATE_GRAPH_DATA,
                manifestProperties.updateGraphData().get(testUri));
        addMultiValueProperty(properties, W3cTestCase.Property.RESULT_GRAPH_DATA,
                manifestProperties.resultGraphData().get(testUri));

        String displayName = name == null ? "unknown_test" : normalizedDisplayName(name);
        return new W3cTestCase(testUri, name == null ? testUri : name, displayName, comment,
                mapTestType(entry.getValue(), testUri), manifestUri, properties);
    }

    private static void addMultiValueProperty(Map<String, Object> properties, W3cTestCase.Property property,
                                              List<String> values) {
        if (values != null && !values.isEmpty()) {
            properties.put(property.getKey(), new ArrayList<>(values));
        }
    }

    private static String normalizedDisplayName(String name) {
        return name.trim().toLowerCase(Locale.ROOT)
                .replace("-", "").replace(" ", "_").replace("#", "").replace(".", "");
    }

    private record ManifestProperties(Map<String, Map<String, String>> properties,
                                      Map<String, List<String>> graphData,
                                      Map<String, List<String>> updateGraphData,
                                      Map<String, List<String>> resultGraphData) {
    }

    /**
     * Resolve a manifest URI to a usable source.
     */
    @SuppressWarnings("java:S112")
    private static URI resolveManifestUri(URI manifestUri) {
        if (manifestUri == null)
            return manifestUri;

        if (!RDFTestUtils.isUriLocal(manifestUri)) {
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

        return manifestUri;
    }

    private static String coalesce(String a, String b) {
        return a != null ? a : b;
    }

    /**
     * Runs a single-hop query {@code SELECT ?uri ?value WHERE { ?uri <predIri> ?value . }} and
     * populates {@code props} with the first value per URI under {@code propKey}.
     * {@code pred} must be a full angle-bracket IRI, e.g. {@code <http://...#action>}.
     */
    private static void runPropQuery(RepositoryConnection conn,
                                     Map<String, Map<String, String>> props,
                                     String pred, String propKey) {
        String q = SELECT_URI_VALUE_PREFIX + pred + VALUE_PATTERN_SUFFIX;
        try (TupleQueryResult r = conn.prepareTupleQuery(q).evaluate()) {
            while (r.hasNext()) {
                BindingSet bs = r.next();
                String uri = getStringValue(bs, VAR_URI);
                String val = getStringValue(bs, VAR_VALUE);
                if (uri != null && val != null) {
                    props.computeIfAbsent(uri, k -> new HashMap<>()).putIfAbsent(propKey, val);
                }
            }
        } catch (Exception e) {
            logger.warn("Property query failed for {}: {}", propKey, e.getMessage());
        }
    }

    /**
     * Runs a two-hop query {@code SELECT ?uri ?value WHERE { ?uri <pred1> ?node . ?node <pred2> ?value . }}
     * and populates {@code props} with the first value per URI under {@code propKey}.
     * Both {@code pred1} and {@code pred2} must be full angle-bracket IRIs.
     */
    private static void run2HopPropQuery(RepositoryConnection conn,
                                         Map<String, Map<String, String>> props,
                                         String pred1, String pred2, String propKey) {
        String q = SELECT_URI_VALUE_PREFIX + pred1 + " ?node . ?node " + pred2 + VALUE_PATTERN_SUFFIX;
        try (TupleQueryResult r = conn.prepareTupleQuery(q).evaluate()) {
            while (r.hasNext()) {
                BindingSet bs = r.next();
                String uri = getStringValue(bs, VAR_URI);
                String val = getStringValue(bs, VAR_VALUE);
                if (uri != null && val != null) {
                    props.computeIfAbsent(uri, k -> new HashMap<>()).putIfAbsent(propKey, val);
                }
            }
        } catch (Exception e) {
            logger.warn("2-hop property query failed for {}: {}", propKey, e.getMessage());
        }
    }

    /**
     * Runs a two-hop query and collects ALL values per URI into a list (no deduplication).
     * Used for multi-valued properties such as {@code qt:graphData}, which can appear
     * more than once in a single test's action blank node.
     */
    private static void runMultiValue2HopPropQuery(RepositoryConnection conn,
                                                   Map<String, List<String>> multiProps,
                                                   String pred1, String pred2, String propKey) {
        String q = SELECT_URI_VALUE_PREFIX + pred1 + " ?node . ?node " + pred2 + VALUE_PATTERN_SUFFIX;
        try (TupleQueryResult r = conn.prepareTupleQuery(q).evaluate()) {
            while (r.hasNext()) {
                BindingSet bs = r.next();
                String uri = getStringValue(bs, VAR_URI);
                String val = getStringValue(bs, VAR_VALUE);
                if (uri != null && val != null) {
                    multiProps.computeIfAbsent(uri, k -> new ArrayList<>()).add(val);
                }
            }
        } catch (Exception e) {
            logger.warn("Multi-value 2-hop property query failed for {}: {}", propKey, e.getMessage());
        }
    }

    /**
     * Collects SPARQL 1.1 Update named-graph entries for either the action or the result side.
     * <p>
     * Each entry is a blank node reachable via {@code mf:action/mf:result → ut:graphData} and
     * carries two properties:
     * <ul>
     *   <li>{@code ut:graph}    – URI of the RDF file that holds the graph triples</li>
     *   <li>{@code rdfs:label}  – URI used as the named-graph name in the dataset</li>
     * </ul>
     * Both pieces are needed together, so they are stored as a single
     * {@code "graphNameUri|fileUri"} string in the list under {@code propKey}.
     */
    private static void runUpdateGraphDataQuery(RepositoryConnection conn,
                                               Map<String, List<String>> multiProps,
                                               String pred1, String propKey) {
        String q = "SELECT ?uri ?graph ?label WHERE { "
                + "?uri " + pred1 + " ?node . "
                + "?node " + UT_GRAPH_DATA + " ?gd . "
                + "?gd " + UT_GRAPH + " ?graph . "
                + "?gd " + RDFS_LABEL + " ?label . }";
        try (TupleQueryResult r = conn.prepareTupleQuery(q).evaluate()) {
            while (r.hasNext()) {
                BindingSet bs = r.next();
                String uri   = getStringValue(bs, "uri");
                String graph = getStringValue(bs, "graph");
                String label = getStringValue(bs, "label");
                if (uri != null && graph != null && label != null) {
                    multiProps.computeIfAbsent(uri, k -> new ArrayList<>())
                              .add(label + "|" + graph);
                }
            }
        } catch (Exception e) {
            logger.warn("Update graph-data query failed for {}: {}", propKey, e.getMessage());
        }
    }

    private static Map<String, Object> buildPropertiesFromMap(Map<String, String> p, String action, String result) {
        Map<String, Object> properties = new HashMap<>();
        // action and result come from merged alternatives; add them explicitly
        if (action != null) properties.put(W3cTestCase.Property.ACTION.getKey(), action);
        if (result != null) properties.put(W3cTestCase.Property.RESULT.getKey(), result);
        for (W3cTestCase.Property property : W3cTestCase.Property.values()) {
            String key = property.getKey();
            if (key.equals(W3cTestCase.Property.ACTION.getKey()) || key.equals(W3cTestCase.Property.RESULT.getKey())) {
                continue; // already handled with merged values above
            }
            String val = p.get(key);
            if (val != null) properties.put(key, val);
        }
        return properties;
    }

    private static String getStringValue(BindingSet binding, String variable) {
        Value value = binding.getValue(variable);
        return value != null ? value.stringValue() : null;
    }

    /**
     * Maps a set of W3C test type URIs to the local {@link TestType} enum.
     */
    static TestType mapTestType(Set<String> typeUris) {
        return mapTestType(typeUris, null);
    }

    static TestType mapTestType(Set<String> typeUris, String testUri) {
        boolean isFromRdf = typeUris.stream().anyMatch(t -> t.toLowerCase(Locale.ROOT).contains("fromrdftest"));
        boolean isToRdf = typeUris.stream().anyMatch(t -> t.toLowerCase(Locale.ROOT).contains("tordftest"));

        for (String typeUri : typeUris) {
            String lowerUri = typeUri.toLowerCase(Locale.ROOT);
            TestType mapped = mapJsonLdTestType(lowerUri, isFromRdf, isToRdf);
            if (mapped != null) {
                return mapped;
            }
            mapped = mapStandardRdfTestType(typeUri, lowerUri, testUri);
            if (mapped != null) {
                return mapped;
            }
        }

        throw new IllegalArgumentException("Unsupported or unknown test type URIs: " + typeUris);
    }

    private static TestType mapJsonLdTestType(String lowerUri, boolean isFromRdf, boolean isToRdf) {
        TestType evalType = mapJsonLdEvalTestType(lowerUri, isFromRdf, isToRdf);
        if (evalType != null) {
            return evalType;
        }
        return mapJsonLdSyntaxTestType(lowerUri);
    }

    private static TestType mapJsonLdEvalTestType(String lowerUri, boolean isFromRdf, boolean isToRdf) {
        if (!lowerUri.contains("evaluationtest")) {
            return null;
        }
        boolean isApi = isToRdf || lowerUri.contains(JSON_LD_API);
        boolean isPositive = lowerUri.contains("positive");
        if (isFromRdf) {
            return isPositive ? TestType.JSON_LD_FROM_RDF_POSITIVE_EVAL : TestType.JSON_LD_FROM_RDF_NEGATIVE_EVAL;
        }
        if (isApi) {
            return isPositive ? TestType.JSON_LD_POSITIVE_EVAL : TestType.JSON_LD_NEGATIVE_EVAL;
        }
        return null;
    }

    private static TestType mapJsonLdSyntaxTestType(String lowerUri) {
        if (!lowerUri.contains(JSON_LD_API)) {
            return null;
        }
        if (lowerUri.contains("positivesyntaxtest")) {
            return TestType.JSON_LD_POSITIVE_SYNTAX;
        }
        if (lowerUri.contains("negativesyntaxtest")) {
            return TestType.JSON_LD_NEGATIVE_SYNTAX;
        }
        return null;
    }

    private static TestType mapStandardRdfTestType(String typeUri, String lowerUri, String testUri) {
        if ("http://www.w3.org/2006/03/test-description#TestCase".equalsIgnoreCase(typeUri)) {
            return TestType.ASK_BASED_EVAL;
        }
        TestType type = mapTurtleOrTrigTestType(lowerUri);
        if (type != null) {
            return type;
        }
        return mapOtherRdfTestType(lowerUri, testUri);
    }

    private static TestType mapTurtleOrTrigTestType(String lowerUri) {
        if (lowerUri.contains("testturtlenegativesyntax")) return TestType.TURTLE_NEGATIVE_SYNTAX;
        if (lowerUri.contains("testturtlepositivesyntax")) return TestType.TURTLE_POSITIVE_SYNTAX;
        if (lowerUri.contains("testturtleeval") && !lowerUri.contains("negative")) return TestType.TURTLE_POSITIVE_EVAL;
        if (lowerUri.contains("testturtlenegativeeval")) return TestType.TURTLE_NEGATIVE_EVAL;
        if (lowerUri.contains("testtrignegativesyntax")) return TestType.TRIG_NEGATIVE_SYNTAX;
        if (lowerUri.contains("testtrigpositivesyntax")) return TestType.TRIG_POSITIVE_SYNTAX;
        if (lowerUri.contains("testtrigeval") && !lowerUri.contains("negative")) return TestType.TRIG_POSITIVE_EVAL;
        if (lowerUri.contains("testtrignegativeeval")) return TestType.TRIG_NEGATIVE_EVAL;
        return null;
    }

    private static TestType mapOtherRdfTestType(String lowerUri, String testUri) {
        TestType type = mapNTriplesNQuadsOrRdfXmlTestType(lowerUri);
        if (type != null) {
            return type;
        }
        type = mapRdfCanonicalizationOrRdfaTestType(lowerUri);
        if (type != null) {
            return type;
        }
        return mapSparqlTestType(lowerUri, testUri);
    }

    private static TestType mapNTriplesNQuadsOrRdfXmlTestType(String lowerUri) {
        if (lowerUri.contains("testntriplesnegativesyntax")) return TestType.NTRIPLES_NEGATIVE_SYNTAX;
        if (lowerUri.contains("testntriplespositivesyntax")) return TestType.NTRIPLES_POSITIVE_SYNTAX;
        if (lowerUri.contains("testnquadsnegativesyntax")) return TestType.NQUADS_NEGATIVE_SYNTAX;
        if (lowerUri.contains("testnquadspositivesyntax")) return TestType.NQUADS_POSITIVE_SYNTAX;
        if (lowerUri.contains("testxmlnegativesyntax")) return TestType.RDF_XML_NEGATIVE_SYNTAX;
        if (lowerUri.contains("testxmleval")) return TestType.RDF_XML_POSITIVE_EVAL;
        return null;
    }

    private static TestType mapRdfCanonicalizationOrRdfaTestType(String lowerUri) {
        if (lowerUri.contains("rdfc10negativeevaltest")) return TestType.RDFC10_NEGATIVE_EVAL_TEST;
        if (lowerUri.contains("rdfc10maptest")) return TestType.RDFC10_MAP_TEST;
        if (lowerUri.contains("rdfc10evaltest")) return TestType.RDFC10_EVAL_TEST;
        if (lowerUri.contains("rdfa-test#positiveevaluationtest")) return TestType.RDFA_POSITIVE_EVAL;
        if (lowerUri.contains("rdfa-test#negativeevaluationtest")) return TestType.RDFA_NEGATIVE_EVAL;
        return null;
    }

    private static TestType mapSparqlTestType(String lowerUri, String testUri) {
        // mf:QueryEvaluationTest is shared by SPARQL 1.0 and 1.1 — use the test URI to distinguish.
        if (lowerUri.contains("test-manifest#queryevaluationtest")) {
            return testUri != null && testUri.contains("sparql11")
                    ? TestType.SPARQL11_QUERY_EVAL
                    : TestType.SPARQL10_QUERY_EVAL;
        }
        if (lowerUri.contains("test-manifest#updateevaluationtest")) return TestType.SPARQL11_UPDATE_EVAL;
        if (lowerUri.contains("test-manifest#csvresultformattest")) return TestType.SPARQL11_CSV_FORMAT;
        // SPARQL 1.1 syntax tests (suffix "11") must be checked before the SPARQL 1.0 variants
        if (lowerUri.contains("test-manifest#negativesyntaxtest11")) return TestType.SPARQL11_NEGATIVE_SYNTAX;
        if (lowerUri.contains("test-manifest#positivesyntaxtest11")) return TestType.SPARQL11_POSITIVE_SYNTAX;
        if (lowerUri.contains("test-manifest#negativeupdatesyntaxtest11")) return TestType.SPARQL11_NEGATIVE_UPDATE_SYNTAX;
        if (lowerUri.contains("test-manifest#positiveupdatesyntaxtest11")) return TestType.SPARQL11_POSITIVE_UPDATE_SYNTAX;
        // SPARQL 1.0 syntax tests (no suffix)
        if (lowerUri.contains("test-manifest#negativesyntaxtest")) return TestType.SPARQL10_NEGATIVE_SYNTAX;
        if (lowerUri.contains("test-manifest#positivesyntaxtest")) return TestType.SPARQL10_POSITIVE_SYNTAX;
        return null;
    }


    /**
     * Loads a manifest file into the given model, recursively following inclusions.
     *
     * @param manifestUri The URI of the manifest file to load.
     * @param model       Model to load into.
     */
    private static void loadManifestInto(URI manifestUri, Model model) {
        URI baseUri = RDFTestUtils.getBaseUri(manifestUri);
        try {
            URI localManifestUri = resolveManifestUri(manifestUri);
            parseManifest(localManifestUri, manifestUri, baseUri, model);
            loadIncludedManifests(findInclusions(model, manifestUri), baseUri, model);
        } catch (Exception e) {
            throw new RuntimeException("Error loading manifest file: " + manifestUri, e);
        }
    }

    private static void parseManifest(URI localManifestUri, URI manifestUri, URI baseUri, Model model)
            throws IOException, NoSuchAlgorithmException, JsonLdError {
        RDFFormat format = RDFTestUtils.guessFileFormat(localManifestUri);
        RDFParser parser = RDFTestUtils.createParser(format, model);
        Path localManifestPath = Path.of(localManifestUri);
        configureJsonLdParser(format, parser, localManifestPath, baseUri);
        try (FileInputStream inputStream = new FileInputStream(localManifestPath.toFile())) {
            parser.parse(inputStream, manifestUri.toString());
        }
    }

    private static void configureJsonLdParser(RDFFormat format, RDFParser parser, Path manifestPath, URI baseUri)
            throws IOException, NoSuchAlgorithmException, JsonLdError {
        if (format != RDFFormat.JSONLD) {
            return;
        }
        cacheJsonLdContext(manifestPath, baseUri);
        parser.setConfig(new JSONLDOptions.Builder().base(baseUri.toString()).build());
    }

    private static void cacheJsonLdContext(Path manifestPath, URI baseUri)
            throws IOException, NoSuchAlgorithmException, JsonLdError {
        try (FileInputStream inputStream = new FileInputStream(manifestPath.toFile())) {
            JsonDocument document = JsonDocument.of(inputStream);
            Optional<String> context = document.getJsonContent()
                    .map(content -> content.getValue("/@context").asJsonArray().getFirst().toString().replace("\"", ""));
            if (context.isPresent() && !manifestPath.resolve(context.orElseThrow()).toFile().exists()) {
                TestFileManager.loadFile(baseUri.resolve(context.orElseThrow()));
            }
        }
    }

    private static void loadIncludedManifests(List<String> inclusions, URI baseUri, Model model) {
        for (String inclusion : inclusions) {
            URI inclusionUri = resolveInclusionUri(URI.create(inclusion), baseUri);
            if (RDFTestUtils.isUriAFile(inclusionUri)) {
                loadManifestInto(inclusionUri, model);
            }
        }
    }

    private static URI resolveInclusionUri(URI inclusionUri, URI baseUri) {
        if (RDFTestUtils.isUriLocal(inclusionUri)
                && !RDFTestUtils.isUriLocal(baseUri)
                && !Path.of(inclusionUri).toFile().exists()) {
            return RDFTestUtils.swapBaseUri(inclusionUri, baseUri);
        }
        return inclusionUri;
    }

    private static final String MF_INCLUDE =
            "http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#include";
    private static final String RDF_FIRST =
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#first";
    private static final String RDF_REST =
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest";
    private static final String RDF_NIL =
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil";

    /**
     * Finds all sub-manifest URIs declared via {@code mf:include} for the given
     * manifest URI.
     * <p>
     * The manifest vocabulary allows both a direct IRI value and an RDF list
     * (the Turtle {@code ( ... )} shorthand). SPARQL-based traversal cannot
     * handle arbitrary-depth lists using plain BGPs, so we walk the model
     * directly, following {@code rdf:first} / {@code rdf:rest} links for as
     * many levels as needed.
     */
    private static List<String> findInclusions(Model model, URI manifestUri) {
        String manifestUriStr = manifestUri.toString();
        String manifestUriNoExt = manifestUriStr.replace(
                "." + RDFTestUtils.guessFileFormat(manifestUri).getDefaultExtension(), "");

        Set<String> inclusions = new LinkedHashSet<>();

        for (Statement stmt : model.filter(null, null, null)) {
            if (stmt.getContext() == null
                    && MF_INCLUDE.equals(stmt.getPredicate().stringValue())
                    && matchesManifest(stmt.getSubject(), manifestUriStr, manifestUriNoExt)) {
                Value obj = stmt.getObject();
                if (isIri(obj)) {
                    inclusions.add(obj.stringValue());
                } else if (obj instanceof BNode bnode) {
                    traverseRdfList(bnode, model, inclusions);
                }
            }
        }

        return new ArrayList<>(inclusions);
    }

    /**
     * Walks an RDF list rooted at {@code listHead} and adds every IRI-valued
     * {@code rdf:first} element to {@code items}.
     */
    private static void traverseRdfList(BNode listHead, Model model, Set<String> items) {
        Resource current = listHead;
        Set<String> visited = new HashSet<>();

        while (current != null && visited.add(current.stringValue())) {
            Value next = null;
            for (Statement stmt : model.filter(current, null, null)) {
                String pred = stmt.getPredicate().stringValue();
                Value obj = stmt.getObject();
                if (RDF_FIRST.equals(pred) && isIri(obj)) {
                    items.add(obj.stringValue());
                } else if (RDF_REST.equals(pred)) {
                    next = obj;
                }
            }
            current = (next instanceof Resource r && !RDF_NIL.equals(next.stringValue())) ? r : null;
        }
    }

    private static boolean matchesManifest(Value manifest, String uri, String uriWithoutExtension) {
        return manifest != null && (manifest.stringValue().equals(uri)
                || manifest.stringValue().equals(uriWithoutExtension));
    }

    private static boolean isIri(Value value) {
        return value != null && (value.stringValue().startsWith("http://")
                || value.stringValue().startsWith("https://") || value.stringValue().startsWith("file://"));
    }
}
