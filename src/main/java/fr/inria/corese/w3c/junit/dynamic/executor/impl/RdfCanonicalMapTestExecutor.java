package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.Statement;
import fr.inria.corese.core.next.api.Value;
import fr.inria.corese.core.next.api.ValueFactory;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.io.serialization.canonical.Rdfc10Canonicalizer;
import fr.inria.corese.core.next.impl.io.serialization.canonical.Rdfc10Options;
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
 *
 */
public class RdfCanonicalMapTestExecutor implements TestExecutor {

    // W3C test suite base URL for fetching remote test files
    private static final String W3C_BASE_URL = "https://w3c.github.io/rdf-canon/tests/";

    /**
     * Executes a single RDF Canonicalization blank node mapping test.
     *
     *
     * @param testCase The W3C test case containing action and result file URIs.
     *                 Must not be null.
     * @throws AssertionError If the generated mapping does not match the expected
     *                        mapping, or if any unexpected error occurs during
     *                        test execution.
     * @throws Exception If an I/O or parsing error occurs while loading test files.
     *
     */
    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();
        URI resultFileUri = testCase.getResultFileUri();

        try {
            // Resolve and load the action file (input RDF data)
            String actionFilePath = resolveAndLoadFile(actionFileUri, testName);
            // Resolve and load the result file (expected mapping)
            String resultFilePath = resolveAndLoadFile(resultFileUri, testName);

            // Parse the expected blank node mapping from the result file
            Map<String, String> expectedMapping = loadMappingFromFile(resultFilePath);

            // Create and populate the action model from the input file
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RDFFormat.NQUADS;
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader);
            }

            // Extract the blank node mapping using structural matching
            Map<String, String> generatedMapping = extractBlanknodeMapping(actionModel);

            // Verify that generated mapping matches the expected mapping
            compareMappings(generatedMapping, expectedMapping, testName, actionFileUri, resultFileUri);

        } catch (Exception e) {
            // Wrap any exception in a descriptive AssertionError with context
            String msg = String.format(
                    "RDF Canonical map test failed with exception.\n" +
                            "Test: %s\nAction: %s\nResult: %s\nError: %s",
                    testName, actionFileUri, resultFileUri, e.getMessage());
            throw new AssertionError(msg, e);
        }
    }

    /**
     * Extracts blank node mappings by matching original and canonical statements.
     *
     * <p><strong>Matching Algorithm:</strong></p>
     * <p>For each original statement, this method finds the best matching canonical
     * statement based on a scoring system that considers:</p>
     * <ul>
     *   <li>Predicate match (10 points) - strongest indicator of structure</li>
     *   <li>Subject match (5 points) - ignoring blank node IDs</li>
     *   <li>Object match (5 points) - ignoring blank node IDs</li>
     *   <li>Context match (2 points) - for named graphs</li>
     * </ul>
     *
     * <p>Once a match is found, blank node identifiers are extracted and
     * recorded in the mapping.</p>
     *
     * @param actionModel The input RDF model containing original statements.
     *                    Must not be null.
     * @return A map from original blank node identifiers to their canonical
     *         counterparts. Returns an empty map if no blank nodes are present.
     * @throws RuntimeException If an error occurs during canonicalization or matching.
     *
     */
    private Map<String, String> extractBlanknodeMapping(Model actionModel) {
        try {
            // STEP 1: Canonicalize the input model
            Rdfc10Options options = Rdfc10Options.defaultConfig();
            ValueFactory valueFactory = RDFTestUtils.createValueFactory();

            Rdfc10Canonicalizer canonicalizer = new Rdfc10Canonicalizer(
                    options.getHashAlgorithm(),
                    options.getPermutationLimit(),
                    valueFactory
            );

            // Obtain both original and canonical versions of the statements
            List<Statement> originalStatements = actionModel.stream().toList();
            List<Statement> canonicalStatements = canonicalizer.canonicalize(actionModel);

            // STEP 2: Match original statements with canonical counterparts
            Map<String, String> mapping = new LinkedHashMap<>();
            // Track which canonical statements have already been matched
            Set<Integer> matchedCanonical = new HashSet<>();

            // Iterate through each original statement to find its canonical equivalent
            for (int i = 0; i < originalStatements.size(); i++) {
                Statement orig = originalStatements.get(i);

                // Find the best matching canonical statement
                int bestMatch = -1;
                int highestScore = 0;

                // Evaluate all remaining canonical statements
                for (int j = 0; j < canonicalStatements.size(); j++) {
                    // Skip already matched statements to maintain 1-to-1 correspondence
                    if (matchedCanonical.contains(j)) {
                        continue;
                    }

                    Statement canon = canonicalStatements.get(j);
                    // Calculate structural similarity score
                    int score = compareStatementStructure(orig, canon);

                    // Keep track of the best match found so far
                    if (score > highestScore) {
                        highestScore = score;
                        bestMatch = j;
                    }
                }

                // If a suitable match was found, extract and record the blank node mappings
                if (bestMatch >= 0) {
                    matchedCanonical.add(bestMatch);
                    Statement canonicalStmt = canonicalStatements.get(bestMatch);

                    // Extract mappings for subject, object, and context positions
                    matchAndAddMapping(orig.getSubject(), canonicalStmt.getSubject(), mapping, "subject");
                    matchAndAddMapping(orig.getObject(), canonicalStmt.getObject(), mapping, "object");

                    // Handle named graph context if present
                    if (orig.getContext() != null && canonicalStmt.getContext() != null) {
                        matchAndAddMapping(orig.getContext(), canonicalStmt.getContext(), mapping, "context");
                    }
                }
            }

            // STEP 3: Return the complete mapping
            return mapping;

        } catch (Exception e) {
            throw new RuntimeException("Mapping extraction failed: " + e.getMessage(), e);
        }
    }

    /**
     * Compares the structural equivalence of two RDF statements.
     *
     * @param orig  The original (uncanonical) RDF statement. Must not be null.
     * @param canon The canonical RDF statement. Must not be null.
     * @return A score representing structural similarity. Higher scores indicate
     * better matches. Minimum is 0, no fixed maximum.
     */
    private int compareStatementStructure(Statement orig, Statement canon) {
        int score = 0;

        try {
            // Compare predicates (never blank nodes, must match exactly)
            if (compareValues(orig.getPredicate(), canon.getPredicate(), false)) {
                // Heaviest weight: predicates are the most reliable match indicator
                score += 10;
            }

            // Compare subjects (may be blank nodes, so ignore node IDs if both are bnodes)
            if (compareValues(orig.getSubject(), canon.getSubject(), true)) {
                score += 5;
            }

            // Compare objects (may be blank nodes, so ignore node IDs if both are bnodes)
            if (compareValues(orig.getObject(), canon.getObject(), true)) {
                score += 5;
            }

            // Compare contexts for named graphs
            if (orig.getContext() != null && canon.getContext() != null) {
                if (compareValues(orig.getContext(), canon.getContext(), true)) {
                    score += 2;
                }
            } else if (orig.getContext() == null && canon.getContext() == null) {
                // Both lack context (default graph) - count as match
                score += 2;
            }
        } catch (Exception e) {
            // Return 0 score if comparison fails to avoid matching invalid pairs
            return 0;
        }

        return score;
    }

    /**
     * Compares two RDF values for structural equivalence.
     *
     * <p>When comparing blank nodes, this method treats them as equivalent
     * regardless of their identifiers. This is necessary because the algorithm
     * is discovering the mapping between identifiers.</p>
     *
     * @param v1                First value to compare. May be null.
     * @param v2                Second value to compare. May be null.
     * @param ignoreBlankNodeId If true, blank nodes are considered equal
     *                          regardless of their identifiers. If false,
     *                          blank nodes must have identical IDs.
     * @return true if values are structurally equivalent; false otherwise.
     */
    private boolean compareValues(Value v1, Value v2, boolean ignoreBlankNodeId) {
        // Handle null cases
        if (v1 == null || v2 == null) {
            return v1 == v2;
        }

        try {
            // Special handling for blank nodes when ID comparison is disabled
            if (ignoreBlankNodeId && v1.isBNode() && v2.isBNode()) {
                // Both are blank nodes - consider them equivalent
                // (the actual mapping will be established separately)
                return true;
            }

            // For all other cases, values must be string-equal
            return v1.stringValue().equals(v2.stringValue());
        } catch (Exception e) {
            // If any error occurs during comparison, consider values non-matching
            return false;
        }
    }

    /**
     * Records a blank node mapping between original and canonical values.
     *
     * <p>This method extracts blank node identifiers from two values and
     * records the mapping if both are blank nodes. If a conflict is detected
     * (same original ID mapping to different canonical IDs), this method
     * logs the conflict but does not override the existing mapping.</p>
     *
     * @param origValue  The original blank node value.
     * @param canonValue The canonical blank node value.
     * @param mapping    The mapping collection to update. Must not be null.
     * @param position   A descriptive label (e.g., "subject", "object")
     *                   used for conflict reporting.
     */
    private void matchAndAddMapping(Value origValue, Value canonValue,
                                    Map<String, String> mapping, String position) {
        try {
            // Skip null values
            if (origValue == null || canonValue == null) {
                return;
            }

            // Only process blank nodes
            if (!origValue.isBNode() || !canonValue.isBNode()) {
                return;
            }

            // Extract and normalize blank node identifiers
            String origId = cleanBlankNodeId(origValue.stringValue());
            String canonId = cleanBlankNodeId(canonValue.stringValue());

            // Only add valid identifiers
            if (origId != null && canonId != null) {
                // Add to mapping if not already present
                if (!mapping.containsKey(origId)) {
                    mapping.put(origId, canonId);
                } else if (!mapping.get(origId).equals(canonId)) {
                    // Log but don't override conflicting mappings
                    // This can occur in complex statements where the same
                    // blank node appears in multiple positions
                }
            }
        } catch (Exception e) {
            // Silently ignore mapping errors to continue processing
        }
    }

    /**
     * Removes the blank node prefix from an identifier.
     *
     * @param id The blank node identifier, potentially including "_:" prefix.
     * @return The identifier without the "_:" prefix, or null if input is null.
     */
    private String cleanBlankNodeId(String id) {
        if (id == null) {
            return null;
        }
        // Remove the "_:" prefix if present
        if (id.startsWith("_:")) {
            return id.substring(2);
        }
        return id;
    }

    /**
     * Loads the expected blank node mapping from a result file.
     *
     *
     * <p>The method attempts JSON parsing first, then falls back to
     * line-based parsing if JSON parsing fails.</p>
     *
     * @param resultFilePath The absolute file system path to the result file.
     * @return A map of original blank node IDs to expected canonical IDs.
     *         Returns an empty map if the file is empty or cannot be parsed.
     * @throws IOException If the file cannot be read.
     */
    private Map<String, String> loadMappingFromFile(String resultFilePath) throws IOException {
        Map<String, String> mapping = new HashMap<>();

        // Read the entire file content
        String content = Files.readString(Paths.get(resultFilePath)).trim();

        if (content.isEmpty()) {
            // Empty result file means no mappings expected (e.g., no blank nodes)
            return mapping;
        }

        // Try parsing as JSON first
        if (content.startsWith("{")) {
            try {
                ObjectMapper mapper = new ObjectMapper();
                @SuppressWarnings("unchecked")
                Map<String, String> jsonMap = mapper.readValue(content, Map.class);
                return jsonMap;
            } catch (Exception e) {
            }
        }

        // Parse line-based format: one mapping per line
        String[] lines = content.split("\n");
        for (String line : lines) {
            line = line.trim();

            // Skip empty lines and comments
            if (line.isEmpty() || line.startsWith("#")) {
                continue;
            }

            // Remove quotes if present
            line = line.replaceAll("\"", "").replaceAll("'", "");

            // Split on whitespace or colon separators
            String[] parts = line.split("[\\s:]+");

            if (parts.length >= 2) {
                // Extract and normalize identifiers
                String original = parts[0].trim().replace("_:", "");
                String canonical = parts[1].trim().replace("_:", "");

                // Record valid mappings
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
     *
     * @param generated The mapping produced by the canonicalization algorithm.
     *                  Must not be null.
     * @param expected The expected mapping from the test case.
     *                 Must not be null.
     * @param testName The name of the test (for error messages).
     * @param actionFileUri The URI of the action file (for error messages).
     * @param resultFileUri The URI of the result file (for error messages).
     * @throws AssertionError If any mismatch is detected between generated
     *                        and expected mappings.
     */
    private void compareMappings(Map<String, String> generated, Map<String, String> expected,
                                 String testName, URI actionFileUri, URI resultFileUri) {

        // Iterate through all expected mappings
        for (Map.Entry<String, String> entry : expected.entrySet()) {
            String originalId = entry.getKey();
            String expectedCanonical = entry.getValue();

            if (!generated.containsKey(originalId)) {
                throw new AssertionError(String.format(
                        "Missing mapping for blank node '%s'.\nTest: %s\nGenerated: %s",
                        originalId, testName, generated));
            }

            String generatedCanonical = generated.get(originalId);
            if (!generatedCanonical.equals(expectedCanonical)) {
                throw new AssertionError(String.format(
                        "Mapping mismatch for blank node '%s'.\nTest: %s\n" +
                                "Expected: %s\nActual: %s\nAll: %s",
                        originalId, testName, expectedCanonical, generatedCanonical, generated));
            }
        }
    }

    /**
     * Resolves a file URI and returns the local file path.
     *
     *
     * @param fileUri The URI to resolve. Must use "file", "http", or "https" scheme.
     * @param testName The name of the test (used in error messages).
     * @return The absolute path to the local file (either the original local
     *         file or a newly downloaded one).
     * @throws Exception If the URI scheme is unsupported, or if file I/O fails.
     * @see RDFTestUtils#loadFile(URI)
     */
    private String resolveAndLoadFile(URI fileUri, String testName) throws Exception {
        if ("file".equals(fileUri.getScheme())) {
            java.nio.file.Path filePath = Paths.get(fileUri);
            if (Files.exists(filePath)) {
                return filePath.toString();
            }

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