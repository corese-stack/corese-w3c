package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.Statement;
import fr.inria.corese.core.next.api.ValueFactory;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.io.serialization.canonical.Rdfc10Canonicalizer;
import fr.inria.corese.core.next.impl.io.serialization.canonical.Rdfc10Options;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Executor for RDF Canonicalization blank node mapping tests (RDFC10MapTest).
 *
 */
public class RdfCanonicalMapTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfCanonicalMapTestExecutor.class);
    private static final String W3C_BASE_URL = "https://w3c.github.io/rdf-canon/tests/";

    /**
     * Executes a single RDF Canonicalization blank node mapping test.
     * Compares the generated mapping against the expected mapping from the test case.
     *
     * @param testCase The W3C test case containing action and result file URIs.
     * @throws AssertionError If the generated mapping does not match the expected mapping.
     * @throws Exception If I/O or parsing errors occur.
     */
    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();
        URI resultFileUri = testCase.getResultFileUri();

        try {
            String actionFilePath = resolveAndLoadFile(actionFileUri, testName);
            String resultFilePath = resolveAndLoadFile(resultFileUri, testName);

            Map<String, String> expectedMapping = loadMappingFromFile(resultFilePath);
            Model actionModel = loadRdfModel(actionFilePath);

            Map<String, String> generatedMapping = extractBlanknodeMapping(actionModel);

            compareMappings(generatedMapping, expectedMapping, testName, actionFileUri, resultFileUri);

        } catch (AssertionError e) {
            throw e;
        } catch (Exception e) {
            String msg = String.format(
                    "RDF Canonical map test FAILED with exception.\n" +
                            "Test: %s\nAction: %s\nResult: %s\nError: %s",
                    testName, actionFileUri, resultFileUri, e.getMessage());
            logger.error(msg, e);
            throw new AssertionError(msg, e);
        }
    }

    /**
     * Loads and parses an RDF model from N-Quads format.
     *
     * @param filePath The path to the N-Quads file
     * @return Parsed RDF Model
     * @throws Exception If parsing fails
     */
    private Model loadRdfModel(String filePath) throws Exception {
        Model model = RDFTestUtils.createModel();
        RDFParser parser = RDFTestUtils.createParser(RDFFormat.NQUADS, model);

        try (FileReader reader = new FileReader(filePath)) {
            parser.parse(reader);
        }
        return model;
    }

    /**
     * Extracts blank node mappings by directly calling the canonicalizer's
     * internal createCanonicalMap() method via reflection.
     *
     * @param actionModel The RDF model containing blank nodes
     * @return Map from original blank node IDs to canonical IDs
     */
    private Map<String, String> extractBlanknodeMapping(Model actionModel) {
        try {
            Rdfc10Options options = Rdfc10Options.defaultConfig();
            ValueFactory valueFactory = RDFTestUtils.createValueFactory();

            Rdfc10Canonicalizer canonicalizer = new Rdfc10Canonicalizer(
                    options.getHashAlgorithm(),
                    options.getPermutationLimit(),
                    valueFactory
            );

            List<Statement> originalStatements = actionModel.stream().toList();

            // Step 1: Create blank node → quads mapping
            java.lang.reflect.Method createBNodeToQuadsMapMethod =
                    Rdfc10Canonicalizer.class.getDeclaredMethod("createBNodeToQuadsMap", List.class);
            createBNodeToQuadsMapMethod.setAccessible(true);

            Map<String, Set<Statement>> blankNodeToQuads =
                    (Map<String, Set<Statement>>) createBNodeToQuadsMapMethod.invoke(canonicalizer, originalStatements);

            // Step 2: Generate canonical mapping
            java.lang.reflect.Method createCanonicalMapMethod =
                    Rdfc10Canonicalizer.class.getDeclaredMethod("createCanonicalMap", Map.class);
            createCanonicalMapMethod.setAccessible(true);

            Map<String, String> internalMapping =
                    (Map<String, String>) createCanonicalMapMethod.invoke(canonicalizer, blankNodeToQuads);

            return internalMapping;

        } catch (Exception e) {
            // Return empty map on failure - test will catch the mismatch
            return new HashMap<>();
        }
    }

    /**
     * Loads the expected blank node mapping from a result file.
     * Supports both JSON format and line-based format.
     *
     * @param resultFilePath The path to the result file
     * @return Map of expected mappings
     * @throws IOException If file cannot be read
     */
    private Map<String, String> loadMappingFromFile(String resultFilePath) throws IOException {
        String content = Files.readString(Paths.get(resultFilePath)).trim();

        if (content.isEmpty()) {
            return new HashMap<>();
        }

        // Try JSON format first
        if (content.startsWith("{")) {
            try {
                ObjectMapper mapper = new ObjectMapper();
                @SuppressWarnings("unchecked")
                Map<String, String> jsonMap = mapper.readValue(content, Map.class);
                return jsonMap;
            } catch (Exception e) {
                logger.debug("JSON parsing failed, trying line format");
            }
        }

        // Parse line-based format
        return parseLineBasedMapping(content);
    }

    /**
     * Parses line-based mapping format.
     * Format: one mapping per line, "original canonical" or "original: canonical"
     *
     * @param content The file content
     * @return Parsed mappings
     */
    private Map<String, String> parseLineBasedMapping(String content) {
        Map<String, String> mapping = new HashMap<>();
        String[] lines = content.split("\n");

        for (String line : lines) {
            line = line.trim();

            // Skip empty lines and comments
            if (line.isEmpty() || line.startsWith("#")) {
                continue;
            }

            // Remove quotes and split
            line = line.replaceAll("[\"']", "");
            String[] parts = line.split("[\\s:]+");

            if (parts.length >= 2) {
                String original = parts[0].trim().replace("_:", "");
                String canonical = parts[1].trim().replace("_:", "");

                if (!original.isEmpty() && !canonical.isEmpty()) {
                    mapping.put(original, canonical);
                }
            }
        }

        return mapping;
    }

    /**
     * Compares the generated blank node mapping against the expected mapping.
     *
     * @param generated The generated mapping
     * @param expected The expected mapping
     * @param testName Test name for error messages
     * @param actionFileUri Action file URI for error messages
     * @param resultFileUri Result file URI for error messages
     * @throws AssertionError If mappings don't match
     */
    private void compareMappings(Map<String, String> generated, Map<String, String> expected,
                                 String testName, URI actionFileUri, URI resultFileUri) {

        for (Map.Entry<String, String> entry : expected.entrySet()) {
            String originalId = entry.getKey();
            String expectedCanonical = entry.getValue();

            if (!generated.containsKey(originalId)) {
                throw new AssertionError(String.format(
                        "Missing mapping for blank node '%s'.\n" +
                                "Test: %s\nGenerated: %s",
                        originalId, testName, generated));
            }

            String generatedCanonical = generated.get(originalId);
            if (!generatedCanonical.equals(expectedCanonical)) {
                throw new AssertionError(String.format(
                        "Mapping mismatch for blank node '%s'.\n" +
                                "Test: %s\nExpected: %s\nActual: %s\nAll: %s",
                        originalId, testName, expectedCanonical, generatedCanonical, generated));
            }
        }
    }

    /**
     * Resolves a file URI to a local file path.
     * Handles file://, http://, and https:// schemes.
     *
     * @param fileUri The URI to resolve
     * @param testName Test name for logging
     * @return Absolute path to the file
     * @throws Exception If URI scheme is unsupported
     */
    private String resolveAndLoadFile(URI fileUri, String testName) throws Exception {
        String scheme = fileUri.getScheme();

        if ("file".equals(scheme)) {
            return resolveLocalOrRemoteFile(fileUri);
        }

        if ("http".equals(scheme) || "https".equals(scheme)) {
            return RDFTestUtils.loadFile(fileUri);
        }

        throw new IllegalArgumentException("Unsupported URI scheme: " + scheme);
    }

    /**
     * Resolves a file:// URI by checking local filesystem first,
     * then downloading from W3C if not found.
     *
     * @param fileUri The file:// URI
     * @return Absolute path to the file
     * @throws Exception If file cannot be resolved
     */
    private String resolveLocalOrRemoteFile(URI fileUri) throws Exception {
        Path filePath = Paths.get(fileUri);

        if (Files.exists(filePath)) {
            return filePath.toString();
        }

        // Download from W3C if not found locally
        String filename = filePath.getFileName().toString();
        String remoteUrl = W3C_BASE_URL + "rdfc10/" + filename;
        return RDFTestUtils.loadFile(URI.create(remoteUrl));
    }
}