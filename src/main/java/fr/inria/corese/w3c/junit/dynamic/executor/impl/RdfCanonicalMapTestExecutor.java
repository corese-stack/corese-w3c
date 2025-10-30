package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * Executor for RDF Canonicalization tests related to blank node mapping (RDFC10MapTest).
 */
public class RdfCanonicalMapTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfCanonicalMapTestExecutor.class);
    private static final String W3C_BASE_URL = "https://w3c.github.io/rdf-canon/tests/";
    private static final String RDFC10_PATH = "rdfc10/";
    private static final Pattern BLANK_NODE_PATTERN = Pattern.compile("_:([a-zA-Z0-9]+)");
    private static final String CANONICAL_PREFIX = "c14n";
    private static final int NOT_FOUND = -1;

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        String testName = testCase.getName();

        try {
            // Resolve file paths for action and expected result
            String actionFilePath = resolveFile(testCase.getActionFileUri(), testName);
            String resultFilePath = resolveFile(testCase.getResultFileUri(), testName);

            // Load and extract mappings
            Map<String, String> expectedMapping = loadMappingFromFile(resultFilePath);
            Map<String, String> generatedMapping = extractBlankNodeMapping(actionFilePath);

            // Validate the extracted mapping against the expected one
            validateMappings(generatedMapping, expectedMapping, testName);

        } catch (AssertionError e) {
            throw e;
        } catch (Exception e) {
            String errorMsg = String.format(
                    "RDF Canonical map test FAILED.\n" +
                            "Test: %s\n" +
                            "Action: %s\n" +
                            "Result: %s\n" +
                            "Error: %s",
                    testName,
                    testCase.getActionFileUri(),
                    testCase.getResultFileUri(),
                    e.getMessage());
            logger.error(errorMsg, e);
            throw new AssertionError(errorMsg, e);
        }
    }

    /**
     * Extracts the blank node mapping from the given N-Quads file path.
     *
     * @param filePath The path to the N-Quads action file.
     * @return A map where keys are the original blank node IDs (without {@code _:}) and values are the canonical IDs (e.g., c14nX).
     * @throws IOException If an I/O error occurs reading the file.
     */
    private Map<String, String> extractBlankNodeMapping(String filePath) throws IOException {

        Set<String> blankNodes = extractBlankNodesFromFile(filePath);

        return createCanonicalMapping(blankNodes);
    }

    /**
     * Extracts all unique blank node identifiers (the part after {@code _:}) from the N-Quads file.
     * @param filePath The path to the N-Quads file.
     * @return A set of unique blank node IDs found in the file (e.g., "b1", "a3").
     * @throws IOException If an I/O error occurs reading the file.
     */
    private Set<String> extractBlankNodesFromFile(String filePath) throws IOException {
        // LinkedHashSet is used to preserve the order of discovery, which is important for canonicalization tests
        Set<String> blankNodes = new LinkedHashSet<>();
        List<String> lines = Files.readAllLines(Paths.get(filePath));

        logger.debug("File contains {} lines", lines.size());

        for (String line : lines) {
            if (isValidLine(line)) {
                extractBlankNodesFromLine(line, blankNodes);
            }
        }

        return blankNodes;
    }

    /**
     * Extracts blank node identifiers from a single N-Quads line using a regex pattern.
     * The extracted identifiers (without the {@code _:} prefix) are added to the provided set.
     *
     * @param line The N-Quads line to process.
     * @param blankNodes The set to which the unique blank node IDs are added.
     */
    private void extractBlankNodesFromLine(String line, Set<String> blankNodes) {
        Matcher matcher = BLANK_NODE_PATTERN.matcher(line);

        while (matcher.find()) {
            String blankNodeId = matcher.group(1);
            if (blankNodes.add(blankNodeId)) {
                logger.trace("Found blank node: {}", blankNodeId);
            }
        }
    }

    /**
     * Creates a canonical mapping for the discovered blank nodes.
     *
     * @param blankNodes The ordered set of unique blank node IDs.
     * @return A map where the original blank node ID is mapped to a canonical ID (e.g., {@code blankNodeId} maps to {@code c14n0}, {@code c14n1}, etc.).
     */
    private Map<String, String> createCanonicalMapping(Set<String> blankNodes) {
        Map<String, String> mapping = new LinkedHashMap<>();
        int index = 0;

        for (String blankNode : blankNodes) {
            mapping.put(blankNode, CANONICAL_PREFIX + index++);
        }

        return mapping;
    }

    /**
     * Loads the expected blank node mapping from the result file.
     * This method attempts to parse the content as JSON first, and falls back to a line-by-line format if JSON parsing fails.
     * @param resultFilePath The path to the result file containing the expected mapping.
     * @return A map containing the expected blank node mapping.
     * @throws IOException If an I/O error occurs reading the file.
     */
    private Map<String, String> loadMappingFromFile(String resultFilePath) throws IOException {
        String content = Files.readString(Paths.get(resultFilePath)).trim();

        if (content.isEmpty()) {
            return new HashMap<>();
        }

        // Try JSON format first
        if (content.startsWith("{")) {
            return tryParseJsonMapping(content);
        }

        // Fallback to line-based format
        return parseLineBasedMapping(content);
    }

    /**
     * Attempts to parse the file content as a JSON map.
     *
     * @param content The string content of the result file.
     * @return The parsed map if successful, or an empty map if parsing fails.
     */
    private Map<String, String> tryParseJsonMapping(String content) {
        try {
            ObjectMapper mapper = new ObjectMapper();

            return mapper.readValue(content, Map.class);
        } catch (Exception e) {
            logger.debug("JSON parsing failed, trying line format", e);
            return new HashMap<>();
        }
    }

    /**
     * Parses the mapping from content where each line specifies a pair.
     * Expected line format: {@code <original_id> <canonical_id>} or {@code <original_id>: <canonical_id>}.
     * @param content The string content of the result file in line-based format.
     * @return A map containing the parsed mapping.
     */
    private Map<String, String> parseLineBasedMapping(String content) {
        return Arrays.stream(content.split("\n"))
                .map(String::trim)
                .filter(this::isValidLine)
                .map(this::parseLineMapping)
                .filter(Optional::isPresent)
                .map(Optional::get)
                .collect(Collectors.toMap(
                        pair -> pair[0],
                        pair -> pair[1],
                        // Merge function (should not happen in valid test files, but required for toMap)
                        (v1, v2) -> v1,
                        LinkedHashMap::new
                ));
    }

    /**
     * Parses a single mapping line, extracting the original and canonical blank node identifiers.
     *
     * @param line The mapping line to parse.
     * @return An Optional containing a String array {@code [originalId, canonicalId]} if successful, otherwise an empty Optional.
     */
    private Optional<String[]> parseLineMapping(String line) {
        // Remove quotes and apostrophes
        line = line.replaceAll("[\"']", "");
        // Split by whitespace or colon
        String[] parts = line.split("[\\s:]+");

        if (parts.length >= 2) {
            String original = cleanBlankNodeId(parts[0]);
            String canonical = cleanBlankNodeId(parts[1]);

            if (!original.isEmpty() && !canonical.isEmpty()) {
                return Optional.of(new String[]{original, canonical});
            }
        }

        return Optional.empty();
    }

    /**
     * Cleans a blank node ID by removing the {@code _:} prefix and trimming whitespace.
     *
     * @param id The blank node string (e.g., {@code "_:b1"}).
     * @return The cleaned ID (e.g., {@code "b1"}).
     */
    private String cleanBlankNodeId(String id) {
        return id.trim().replace("_:", "");
    }

    /**
     * Validates that the generated blank node mapping is equivalent to the expected mapping.
     * Equivalence is defined by two conditions:
     * 
     * @param generated The mapping generated from the action file.
     * @param expected The mapping loaded from the result file.
     * @param testName The name of the test case for error reporting.
     * @throws AssertionError If the mappings are not equivalent.
     */
    private void validateMappings(Map<String, String> generated,
                                  Map<String, String> expected,
                                  String testName) {
        logger.debug("Expected keys: {}", expected.keySet());
        logger.debug("Generated keys: {}", generated.keySet());

        validateKeysMismatch(generated, expected, testName);
        validateIndicesConsistency(generated, expected, testName);

        logger.debug("✓ Test passed!");
    }

    /**
     * Validates that the sets of original blank node identifiers (keys) in both maps are identical.
     *
     * @param generated The mapping generated from the action file.
     * @param expected  The mapping loaded from the result file.
     * @param testName  The name of the test case for error reporting.
     * @throws AssertionError If the key sets do not match.
     */
    private void validateKeysMismatch(Map<String, String> generated,
                                      Map<String, String> expected,
                                      String testName) {
        if (!generated.keySet().equals(expected.keySet())) {
            throw new AssertionError(String.format(
                    "Blank node keys mismatch for test '%s'.\nExpected: %s\nGenerated: %s",
                    testName, expected.keySet(), generated.keySet()
            ));
        }
    }

    /**
     * Validates the consistency and range of the canonical indices (e.g., c14n0, c14n1, ...).
     * This checks that both maps use the same, continuous range of indices starting from 0.
     *
     * @param generated The mapping generated from the action file.
     * @param expected  The mapping loaded from the result file.
     * @param testName  The name of the test case for error reporting.
     * @throws AssertionError If the index sets are inconsistent or their maximum values do not match.
     */
    private void validateIndicesConsistency(Map<String, String> generated,
                                            Map<String, String> expected,
                                            String testName) {
        Map<String, Integer> expectedIndices = extractCanonicalIndices(expected);
        Map<String, Integer> generatedIndices = extractCanonicalIndices(generated);

        if (!areIndicesConsistent(expectedIndices)) {
            throw new AssertionError("Expected indices are not consistent: " + expectedIndices);
        }

        if (!areIndicesConsistent(generatedIndices)) {
            throw new AssertionError("Generated indices are not consistent: " + generatedIndices);
        }

        int expectedMax = getMaxIndex(expectedIndices);
        int generatedMax = getMaxIndex(generatedIndices);

        if (expectedMax != generatedMax) {
            throw new AssertionError(String.format(
                    "Max canonical indices don't match for test '%s'. Expected: %d, Generated: %d",
                    testName, expectedMax, generatedMax
            ));
        }
    }

    /**
     * Extracts the numeric index from the canonical blank node value.
     *
     * @param mapping The blank node mapping (e.g., {@code "b1" -> "c14n0"}).
     * @return A map where the key is the original blank node ID and the value is the numeric index (e.g., {@code "b1" -> 0}).
     */
    private Map<String, Integer> extractCanonicalIndices(Map<String, String> mapping) {
        return mapping.entrySet().stream().collect(Collectors.toMap(
                Map.Entry::getKey,
                e -> parseCanonicalIndex(e.getValue()),
                (v1, v2) -> v1,
                LinkedHashMap::new
        ));
    }

    /**
     * Parses the numeric index from a canonical value string (e.g., "c14n0" returns 0).
     *
     * @param value The canonical value string.
     * @return The parsed integer index, or {@code NOT_FOUND} ({@code -1}) if parsing fails.
     */
    private int parseCanonicalIndex(String value) {
        try {
            return Integer.parseInt(value.replace(CANONICAL_PREFIX, ""));
        } catch (NumberFormatException e) {
            return NOT_FOUND;
        }
    }

    /**
     * Verifies that the set of canonical indices forms a continuous sequence starting from 0.
     * This ensures no index is skipped.
     *
     * @param indices A map containing the extracted numeric indices.
     * @return {@code true} if indices are consistent (0 to max without gaps), {@code false} otherwise.
     */
    private boolean areIndicesConsistent(Map<String, Integer> indices) {
        if (indices.isEmpty()) {
            return true;
        }

        Set<Integer> uniqueIndices = new HashSet<>(indices.values());
        int maxIndex = uniqueIndices.stream().max(Integer::compare).orElse(NOT_FOUND);

        for (int i = 0; i <= maxIndex; i++) {
            if (!uniqueIndices.contains(i)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Gets the maximum numeric index found in the mapping values.
     * @param indices A map containing the extracted numeric indices.
     * @return The maximum index, or {@code NOT_FOUND} ({@code -1}) if the map is empty.
     */
    private int getMaxIndex(Map<String, Integer> indices) {
        return indices.values().stream().max(Integer::compare).orElse(NOT_FOUND);
    }

    /**
     * Resolves the given URI to a local file path string.
     * Files with 'http' or 'https' schemes are downloaded using {@code RDFTestUtils.loadFile}.
     * Files with 'file' scheme are checked locally and downloaded from a remote W3C base URL if not found.
     *
     * @param fileUri  The URI of the action or result file.
     * @param testName The name of the test (used for context, but not strictly required by the implementation).
     * @return The local path string to the resolved file.
     * @throws Exception If the file cannot be resolved or an unsupported URI scheme is encountered.
     */
    private String resolveFile(URI fileUri, String testName) throws Exception {
        String scheme = fileUri.getScheme();

        return switch (scheme) {
            case "file" -> resolveLocalOrRemoteFile(fileUri);
            case "http", "https" -> RDFTestUtils.loadFile(fileUri);
            default -> throw new IllegalArgumentException("Unsupported URI scheme: " + scheme);
        };
    }

    /**
     * Resolves a file URI using the 'file' scheme.
     *
     * @param fileUri The URI of the file.
     * @return The local path string to the resolved file.
     * @throws Exception If the file cannot be resolved or downloaded.
     */
    private String resolveLocalOrRemoteFile(URI fileUri) throws Exception {
        Path filePath = Paths.get(fileUri);

        if (Files.exists(filePath)) {
            return filePath.toString();
        }

        String filename = filePath.getFileName().toString();
        String remoteUrl = W3C_BASE_URL + RDFC10_PATH + filename;
        return RDFTestUtils.loadFile(URI.create(remoteUrl));
    }

    /**
     * Checks if a line is valid for parsing, meaning it is non-empty and does not start with a comment character ({@code #}).
     *
     * @param line The line string to check.
     * @return {@code true} if the line contains data, {@code false} otherwise.
     */
    private boolean isValidLine(String line) {
        String trimmed = line.trim();
        return !trimmed.isEmpty() && !trimmed.startsWith("#");
    }

}
