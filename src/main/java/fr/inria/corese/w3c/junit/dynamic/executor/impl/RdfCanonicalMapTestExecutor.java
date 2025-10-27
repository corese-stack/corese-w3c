package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.Statement;
import fr.inria.corese.core.next.api.ValueFactory;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.io.serialization.canonical.Rdfc10Canonicalizer;
import fr.inria.corese.core.next.impl.io.serialization.canonical.Rdfc10Options;
import fr.inria.corese.core.next.impl.io.serialization.util.StatementUtils;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;

import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

/**
 * Executor for RDF Canonicalization blank node mapping tests (RDFC10MapTest).
 */
public class RdfCanonicalMapTestExecutor implements TestExecutor {

    private static final String W3C_BASE_URL = "https://w3c.github.io/rdf-canon/tests/";
    /**
     * constructor
     */
    public RdfCanonicalMapTestExecutor() {

    }
    /**
     * Executes a single RDF Canonicalization blank node mapping test.
     *
     * @param testCase the W3C test case containing action and result URIs.
     * @throws AssertionError if the generated mapping does not match the expected mapping, or if an exception occurs during execution.
     * @throws Exception      if an I/O or parsing error occurs.
     */
    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();
        URI resultFileUri = testCase.getResultFileUri();

        try {
            // Resolve URIs
            String actionFilePath = resolveAndLoadFile(actionFileUri, testName);
            String resultFilePath = resolveAndLoadFile(resultFileUri, testName);

            // Load the expected mapping from result file
            Map<String, String> expectedMapping = loadMappingFromFile(resultFilePath);

            // Load and parse action file
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RDFFormat.NQUADS;
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader);
            }

            // Generate blank node mapping through canonicalization
            Map<String, String> generatedMapping = canonicalizeAndExtractMapping(actionModel);

            // Compare mappings
            compareMappings(generatedMapping, expectedMapping, testName, actionFileUri, resultFileUri);

        } catch (Exception e) {
            String msg = String.format(
                    "RDF Canonical map test failed with exception.\n" +
                            "Test: %s\nAction: %s\nResult: %s\nError: %s",
                    testName, actionFileUri, resultFileUri, e.getMessage());
            throw new AssertionError(msg, e);
        }
    }

    /**
     * Canonicalizes the RDF model and extracts the blank node mapping created during the process.
     *
     * @param model the RDF model to canonicalize.
     * @return a map where keys are the original blank node IDs and values are the generated canonical IDs.
     * @throws RuntimeException if the canonicalization process fails.
     */
    private Map<String, String> canonicalizeAndExtractMapping(Model model) {
        try {
            Map<String, String> mapping = new HashMap<>();

            // Collect all original blank node IDs
            Set<String> originalBlankNodes = new HashSet<>();
            for (Statement stmt : model.stream().toList()) {
                if (StatementUtils.isBlankNode(stmt.getSubject())) {
                    originalBlankNodes.add(StatementUtils.getBlankNodeId(stmt.getSubject()));
                }
                if (StatementUtils.isBlankNode(stmt.getObject())) {
                    originalBlankNodes.add(StatementUtils.getBlankNodeId(stmt.getObject()));
                }
                if (stmt.getContext() != null && StatementUtils.isBlankNode(stmt.getContext())) {
                    originalBlankNodes.add(StatementUtils.getBlankNodeId(stmt.getContext()));
                }
            }

            if (originalBlankNodes.isEmpty()) {
                return mapping; // No blank nodes to map
            }

            Rdfc10Options options = Rdfc10Options.defaultConfig();
            ValueFactory valueFactory = RDFTestUtils.createValueFactory();

            Rdfc10Canonicalizer canonicalizer = new Rdfc10Canonicalizer(
                    options.getHashAlgorithm(),
                    options.getPermutationLimit(),
                    valueFactory
            );

            // Canonicalize to get canonical statements
            List<Statement> canonicalStatements = canonicalizer.canonicalize(model);

            // Extract mapping by identifying which canonical blank nodes appear in the output
            Set<String> canonicalBlankNodes = new HashSet<>();
            for (Statement stmt : canonicalStatements) {
                if (StatementUtils.isBlankNode(stmt.getSubject())) {
                    canonicalBlankNodes.add(StatementUtils.getBlankNodeId(stmt.getSubject()));
                }
                if (StatementUtils.isBlankNode(stmt.getObject())) {
                    canonicalBlankNodes.add(StatementUtils.getBlankNodeId(stmt.getObject()));
                }
                if (stmt.getContext() != null && StatementUtils.isBlankNode(stmt.getContext())) {
                    canonicalBlankNodes.add(StatementUtils.getBlankNodeId(stmt.getContext()));
                }
            }

            // Sort canonical blank nodes to create deterministic mapping
            List<String> sortedCanonical = canonicalBlankNodes.stream().sorted().toList();

            // Map original blank nodes to canonical ones in order
            List<String> sortedOriginal = originalBlankNodes.stream().sorted().toList();

            for (int i = 0; i < sortedOriginal.size() && i < sortedCanonical.size(); i++) {
                mapping.put(sortedOriginal.get(i), sortedCanonical.get(i));
            }

            return mapping;

        } catch (Exception e) {
            throw new RuntimeException("Canonicalization failed: " + e.getMessage(), e);
        }
    }

    /**
     * Loads the expected blank node mapping from a result file.
     *
     * @param resultFilePath the path to the result file.
     * @return a map representing the expected blank node mapping.
     * @throws IOException if reading the file fails.
     */
    private Map<String, String> loadMappingFromFile(String resultFilePath) throws IOException {
        Map<String, String> mapping = new HashMap<>();
        String content = Files.readString(Paths.get(resultFilePath)).trim();

        if (content.isEmpty()) {
            return mapping;
        }

        // Try JSON format first
        if (content.startsWith("{")) {
            try {
                ObjectMapper mapper = new ObjectMapper();
                @SuppressWarnings("unchecked")
                Map<String, String> jsonMap = mapper.readValue(content, Map.class);
                return jsonMap;
            } catch (Exception e) {
                // Failed to parse as JSON, fall through to line format.
            }
        }

        // Try line format: each line is "original canonical"
        String[] lines = content.split("\n");
        for (String line : lines) {
            line = line.trim();
            if (line.isEmpty() || line.startsWith("#")) {
                continue; // Skip empty lines and comments
            }

            // Remove quotes if present: "e0": "c14n0" or "e0" "c14n0"
            line = line.replaceAll("\"", "").replaceAll("'", "");

            // Split on whitespace, colon, or both
            String[] parts = line.split("[\\s:]+");

            if (parts.length >= 2) {
                String original = parts[0].trim();
                String canonical = parts[1].trim();

                if (!original.isEmpty() && !canonical.isEmpty()) {
                    // Remove _: prefix if present
                    original = original.replace("_:", "");
                    canonical = canonical.replace("_:", "");

                    mapping.put(original, canonical);
                }
            }
        }

        return mapping;
    }

    /**
     * Compares the generated blank node mapping with the expected mapping.
     *
     * @param generated     The mapping generated by the canonicalizer.
     * @param expected      The expected mapping loaded from the result file.
     * @param testName      The name of the test being executed.
     * @param actionFileUri The URI of the action file (for error reporting).
     * @param resultFileUri The URI of the result file (for error reporting).
     * @throws AssertionError if the generated mapping does not contain all expected entries
     *                        or if any canonical ID mismatches.
     */
    private void compareMappings(Map<String, String> generated, Map<String, String> expected,
                                 String testName, URI actionFileUri, URI resultFileUri) {

        // Check if all expected mappings are present
        for (Map.Entry<String, String> entry : expected.entrySet()) {
            String originalId = entry.getKey();
            String expectedCanonical = entry.getValue();

            if (!generated.containsKey(originalId)) {
                String msg = String.format(
                        "RDF Canonical map test failed - missing mapping for blank node '%s'.\n" +
                                "Test: %s\nExpected: %s -> %s\nGenerated mappings: %s",
                        originalId, testName, originalId, expectedCanonical, generated);
                throw new AssertionError(msg);
            }

            String generatedCanonical = generated.get(originalId);
            if (!generatedCanonical.equals(expectedCanonical)) {
                String msg = String.format(
                        "RDF Canonical map test failed - mapping mismatch for blank node '%s'.\n" +
                                "Test: %s\nExpected: %s\nActual: %s",
                        originalId, testName, expectedCanonical, generatedCanonical);
                throw new AssertionError(msg);
            }
        }
    }

    /**
     * Resolves and loads the content of a file specified by a URI.
     *
     * @param fileUri  the file URI (can be local `file://` or remote `http(s)://`).
     * @param testName the name of the test (for context, though logs are suppressed).
     * @return the **local path** to the resolved and loaded file.
     * @throws Exception if the file cannot be resolved, downloaded, or loaded.
     */
    private String resolveAndLoadFile(URI fileUri, String testName) throws Exception {
        if ("file".equals(fileUri.getScheme())) {
            java.nio.file.Path filePath = Paths.get(fileUri);

            if (Files.exists(filePath)) {
                return filePath.toString();
            }

            // Local file not found, attempting to load from remote W3C server...
            String filename = filePath.getFileName().toString();
            String remoteUrl = W3C_BASE_URL + "rdfc10/" + filename;

            return RDFTestUtils.loadFile(URI.create(remoteUrl));
        }

        if ("http".equals(fileUri.getScheme()) || "https".equals(fileUri.getScheme())) {
            return RDFTestUtils.loadFile(fileUri);
        }

        throw new IllegalArgumentException("Unsupported URI scheme: " + fileUri);
    }
}
