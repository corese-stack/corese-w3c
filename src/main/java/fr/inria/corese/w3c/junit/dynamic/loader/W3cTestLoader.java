package fr.inria.corese.w3c.junit.dynamic.loader;

import com.apicatalog.jsonld.document.JsonDocument;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.core.next.data.api.io.JSONLDOptions;
import fr.inria.corese.core.next.data.api.model.Model;
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
    private static final String MANIFEST_ACTION = "<http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#action>";
    private static final String JSONLD_OPTION = "<https://w3c.github.io/json-ld-api/tests/vocab#option>";
    private static final String JSON_LD_API = "json-ld-api";
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
    @SuppressWarnings({"java:S1141", "java:S112", "java:S2589"})
    public static List<W3cTestCase> loadTestsFromManifest(URI manifestUri) {

        // Create storage + model (pure next API, no legacy Graph)
        StorageManager storage = Storages.create();
        Model model = StorageModels.create(storage);

        Repository repo = Repositories.create(storage);

        // Load manifest (and sub-manifests) into the model
        loadManifestInto(manifestUri, model, repo);

        List<W3cTestCase> testCases = new ArrayList<>();

        try (RepositoryConnection conn = repo.getConnection()) {

            // Step 1: collect all (uri → type) pairs via a plain BGP.
            // The "next" pipeline crashes on OPTIONAL, UNION, FILTER, and VALUES;
            // only simple triple-pattern queries are safe.
            logger.info("Loading test types");
            // Step 1: find all test URIs and their rdf:type(s).
            // A single test may have multiple types (e.g. jld:PositiveEvaluationTest and jld:FromRDFTest).
            Map<String, Set<String>> uriToTypes = new HashMap<>();
            try (TupleQueryResult r = conn.prepareTupleQuery(TYPE_QUERY).evaluate()) {
                while (r.hasNext()) {
                    BindingSet bs = r.next();
                    String uri = getStringValue(bs, "uri");
                    String type = getStringValue(bs, "type");
                    if (uri != null && type != null
                            && !type.equals("http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#Manifest")) {
                        uriToTypes.computeIfAbsent(uri, k -> new HashSet<>()).add(type);
                    }
                }
            }
            logger.info("Found {} test URIs", uriToTypes.size());

            // Step 2: load each property via a separate plain-BGP query.
            // Predicates are full angle-bracket IRIs — no PREFIX declarations needed.
            // putIfAbsent keeps the first value per URI.
            Map<String, Map<String, String>> props = new HashMap<>();
            runPropQuery(conn, props, "<http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#name>", "name");
            runPropQuery(conn, props, "<http://purl.org/dc/elements/1.1/title>", "nameAlt");
            runPropQuery(conn, props, "<http://www.w3.org/2000/01/rdf-schema#comment>", "comment");
            runPropQuery(conn, props, "<http://www.w3.org/2006/03/test-description#purpose>", "commentAlt");
            runPropQuery(conn, props, MANIFEST_ACTION, "action");
            runPropQuery(conn, props, "<http://www.w3.org/2006/03/test-description#informationResourceInput>", "actionAlt");
            runPropQuery(conn, props, "<http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#result>", "result");
            runPropQuery(conn, props, "<http://www.w3.org/2006/03/test-description#informationResourceResults>", "resultAlt");
            runPropQuery(conn, props, "<http://www.w3.org/2006/03/test-description#expectedResults>", "expectedBoolean");
            runPropQuery(conn, props, "<https://w3c.github.io/rdf-canon/tests/vocab#hashAlgorithm>", "hashAlgorithm");
            run2HopPropQuery(conn, props,
                    MANIFEST_ACTION,
                    "<http://www.w3.org/2001/sw/DataAccess/tests/test-query#query>", "query");
            run2HopPropQuery(conn, props,
                    MANIFEST_ACTION,
                    "<http://www.w3.org/2001/sw/DataAccess/tests/test-query#data>", "data");
            run2HopPropQuery(conn, props,
                    MANIFEST_ACTION,
                    "<http://www.w3.org/ns/shacl-test#dataGraph>", "dataGraph");
            run2HopPropQuery(conn, props,
                    MANIFEST_ACTION,
                    "<http://www.w3.org/ns/shacl-test#shapesGraph>", "shapesGraph");
            run2HopPropQuery(conn, props,
                    "<http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#result>",
                    "<http://www.w3.org/ns/shacl#conforms>", "conformity");
            run2HopPropQuery(conn, props,
                    JSONLD_OPTION,
                    "<https://w3c.github.io/json-ld-api/tests/vocab#base>", "baseUri");
            run2HopPropQuery(conn, props,
                    JSONLD_OPTION,
                    "<https://w3c.github.io/json-ld-api/tests/vocab#specVersion>", "specVersion");
            run2HopPropQuery(conn, props,
                    JSONLD_OPTION,
                    "<https://w3c.github.io/json-ld-api/tests/vocab#processingMode>", "processingMode");
            run2HopPropQuery(conn, props,
                    JSONLD_OPTION,
                    "<https://w3c.github.io/json-ld-api/tests/vocab#produceGeneralizedRdf>", "produceGeneralizedRdf");
            run2HopPropQuery(conn, props,
                    JSONLD_OPTION,
                    "<https://w3c.github.io/json-ld-api/tests/vocab#rdfDirection>", "rdfDirection");
            run2HopPropQuery(conn, props,
                    JSONLD_OPTION,
                    "<https://w3c.github.io/json-ld-api/tests/vocab#expandContext>", "expandContext");
            run2HopPropQuery(conn, props,
                    JSONLD_OPTION,
                    "<https://w3c.github.io/json-ld-api/tests/vocab#useNativeTypes>", "useNativeTypes");
            run2HopPropQuery(conn, props,
                    JSONLD_OPTION,
                    "<https://w3c.github.io/json-ld-api/tests/vocab#useRdfType>", "useRdfType");

            // Step 3: build W3cTestCase objects
            for (Map.Entry<String, Set<String>> entry : uriToTypes.entrySet()) {
                String testUri = entry.getKey();
                Set<String> typeUris = entry.getValue();
                try {
                    Map<String, String> p = props.getOrDefault(testUri, Map.of());

                    String name = coalesce(p.get("name"), p.get("nameAlt"));
                    String comment = coalesce(p.get("comment"), p.get("commentAlt"));
                    String action = coalesce(p.get("action"), p.get("actionAlt"));
                    String result2 = coalesce(p.get("result"), p.get("resultAlt"));

                    TestType testType = mapTestType(typeUris);
                    Map<String, Object> properties = buildPropertiesFromMap(p, action, result2);
                    String displayName = name != null
                            ? name.trim().toLowerCase(Locale.ROOT).replace("-", "").replace(" ", "_").replace("#", "").replace(".", "")
                            : "unknown_test";

                    testCases.add(new W3cTestCase(
                            testUri,
                            name != null ? name : testUri,
                            displayName,
                            comment,
                            testType,
                            manifestUri,
                            properties));
                } catch (Exception e) {
                    throw new IllegalStateException("Failed to create test case for " + testUri, e);
                }
            }
            logger.info("Loaded {} test cases", testCases.size());

        } catch (Exception e) {
            throw new RuntimeException("Failed to load tests from manifest " + manifestUri, e);
        }

        logger.debug("Loaded {} test cases from manifest {}", testCases.size(), manifestUri);
        return testCases;
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
        String q = "SELECT ?uri ?value WHERE { ?uri " + pred + " ?value . }";
        try (TupleQueryResult r = conn.prepareTupleQuery(q).evaluate()) {
            while (r.hasNext()) {
                BindingSet bs = r.next();
                String uri = getStringValue(bs, "uri");
                String val = getStringValue(bs, "value");
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
        String q = "SELECT ?uri ?value WHERE { ?uri " + pred1 + " ?node . ?node " + pred2 + " ?value . }";
        try (TupleQueryResult r = conn.prepareTupleQuery(q).evaluate()) {
            while (r.hasNext()) {
                BindingSet bs = r.next();
                String uri = getStringValue(bs, "uri");
                String val = getStringValue(bs, "value");
                if (uri != null && val != null) {
                    props.computeIfAbsent(uri, k -> new HashMap<>()).putIfAbsent(propKey, val);
                }
            }
        } catch (Exception e) {
            logger.warn("2-hop property query failed for {}: {}", propKey, e.getMessage());
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
        boolean isFromRdf = typeUris.stream().anyMatch(t -> t.toLowerCase(Locale.ROOT).contains("fromrdftest"));
        boolean isToRdf = typeUris.stream().anyMatch(t -> t.toLowerCase(Locale.ROOT).contains("tordftest"));

        for (String typeUri : typeUris) {
            String lowerUri = typeUri.toLowerCase(Locale.ROOT);
            TestType mapped = mapJsonLdTestType(lowerUri, isFromRdf, isToRdf);
            if (mapped != null) {
                return mapped;
            }
            mapped = mapStandardRdfTestType(typeUri, lowerUri);
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

    private static TestType mapStandardRdfTestType(String typeUri, String lowerUri) {
        if ("http://www.w3.org/2006/03/test-description#TestCase".equalsIgnoreCase(typeUri)) {
            return TestType.ASK_BASED_EVAL;
        }
        TestType type = mapTurtleOrTrigTestType(lowerUri);
        if (type != null) {
            return type;
        }
        return mapOtherRdfTestType(lowerUri);
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

    private static TestType mapOtherRdfTestType(String lowerUri) {
        if (lowerUri.contains("testntriplesnegativesyntax")) return TestType.NTRIPLES_NEGATIVE_SYNTAX;
        if (lowerUri.contains("testntriplespositivesyntax")) return TestType.NTRIPLES_POSITIVE_SYNTAX;
        if (lowerUri.contains("testnquadsnegativesyntax")) return TestType.NQUADS_NEGATIVE_SYNTAX;
        if (lowerUri.contains("testnquadspositivesyntax")) return TestType.NQUADS_POSITIVE_SYNTAX;
        if (lowerUri.contains("testxmlnegativesyntax")) return TestType.RDF_XML_NEGATIVE_SYNTAX;
        if (lowerUri.contains("testxmleval")) return TestType.RDF_XML_POSITIVE_EVAL;
        if (lowerUri.contains("rdfc10negativeevaltest")) return TestType.RDFC10_NEGATIVE_EVAL_TEST;
        if (lowerUri.contains("rdfc10maptest")) return TestType.RDFC10_MAP_TEST;
        if (lowerUri.contains("rdfc10evaltest")) return TestType.RDFC10_EVAL_TEST;
        if (lowerUri.contains("rdfa-test#positiveevaluationtest")) return TestType.RDFA_POSITIVE_EVAL;
        if (lowerUri.contains("rdfa-test#negativeevaluationtest")) return TestType.RDFA_NEGATIVE_EVAL;
        return null;
    }


    /**
     * Loads a manifest file into the given model, recursively following inclusions.
     *
     * @param manifestUri The URI of the manifest file to load.
     * @param model       Model to load into.
     * @param repo        Repository backed by the same storage as {@code model}.
     */
    @SuppressWarnings({"java:S1141", "java:S2589"})
    private static void loadManifestInto(URI manifestUri, Model model, Repository repo) {
        URI baseUri = RDFTestUtils.getBaseUri(manifestUri);

        try {
            URI localManifestUri = resolveManifestUri(manifestUri);
            RDFFormat format = RDFTestUtils.guessFileFormat(localManifestUri);
            RDFParser parser = RDFTestUtils.createParser(format, model);
            Path localManifestPath = Path.of(localManifestUri);

            try (FileInputStream fileInputStream = new FileInputStream(localManifestPath.toFile())) {
                if (format == RDFFormat.JSONLD) {
                    try (FileInputStream documentInputStream = new FileInputStream(localManifestPath.toFile())) {
                        JsonDocument document = JsonDocument.of(documentInputStream);
                        if (document.getJsonContent().isPresent()) {
                            @SuppressWarnings("java:S3655")
                            String contextString = document.getJsonContent().get().getValue("/@context").asJsonArray().getFirst().toString().replace("\"", "");
                            if (!localManifestPath.resolve("./" + contextString).toFile().exists()) {
                                URI contextRemoteUri = baseUri.resolve(contextString);
                                TestFileManager.loadFile(contextRemoteUri);
                            }
                        }
                    }
                    JSONLDOptions option = new JSONLDOptions.Builder().base(baseUri.toString()).build();
                    parser.setConfig(option);
                }
                parser.parse(fileInputStream, manifestUri.toString());
            }

            // Collect inclusion URIs before recursing (avoids open cursor during model mutation).
            // FILTER expressions are not supported by the next pipeline, so manifest URI and
            // IRI filtering is done here in Java.
            List<String> inclusions = findInclusions(repo, manifestUri);

            for (String inclusion : inclusions) {
                URI inclusionUri = URI.create(inclusion);
                if (RDFTestUtils.isUriLocal(inclusionUri) && !RDFTestUtils.isUriLocal(baseUri) && !Path.of(inclusionUri).toFile().exists()) {
                    inclusionUri = RDFTestUtils.swapBaseUri(inclusionUri, baseUri);
                }
                if (RDFTestUtils.isUriAFile(inclusionUri)) {
                    loadManifestInto(inclusionUri, model, repo);
                }
            }
        } catch (Exception e) {
            throw new RuntimeException("Error loading manifest file: " + manifestUri, e);
        }

    }

    private static final String[] INCLUSION_QUERIES = {
            "SELECT ?manifest ?inclusion WHERE { ?manifest <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#include> ?inclusion . }",
            "SELECT ?manifest ?inclusion WHERE { ?manifest <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#include> ?list1 . ?list1 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> ?inclusion . }",
            "SELECT ?manifest ?inclusion WHERE { ?manifest <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#include> ?list1 . ?list1 <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> ?list2 . ?list2 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> ?inclusion . }"
    };

    private static List<String> findInclusions(Repository repo, URI manifestUri) {
        String manifestUriStr = manifestUri.toString();
        String manifestUriNoExt = manifestUriStr.replace(
                "." + RDFTestUtils.guessFileFormat(manifestUri).getDefaultExtension(), "");
        Set<String> inclusions = new LinkedHashSet<>();
        try (RepositoryConnection conn = repo.getConnection()) {
            for (String query : INCLUSION_QUERIES) {
                try (TupleQueryResult result = conn.prepareTupleQuery(query).evaluate()) {
                    while (result.hasNext()) {
                        BindingSet binding = result.next();
                        Value manifest = binding.getValue("manifest");
                        Value inclusion = binding.getValue("inclusion");
                        if (matchesManifest(manifest, manifestUriStr, manifestUriNoExt) && isIri(inclusion)) {
                            inclusions.add(inclusion.stringValue());
                        }
                    }
                }
            }
        } catch (RuntimeException exception) {
            logger.error("Error executing inclusion queries.", exception);
        }
        return new ArrayList<>(inclusions);
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
