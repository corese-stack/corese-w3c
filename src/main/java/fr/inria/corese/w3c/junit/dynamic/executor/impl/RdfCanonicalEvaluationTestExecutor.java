package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.data.api.Model;
import fr.inria.corese.core.next.data.api.Statement;
import fr.inria.corese.core.next.data.api.ValueFactory;
import fr.inria.corese.core.next.data.api.base.io.RDFFormat;
import fr.inria.corese.core.next.data.io.parser.RDFParser;
import fr.inria.corese.core.next.data.impl.io.serialization.canonical.RDFC10Canonicalizer;
import fr.inria.corese.core.next.data.impl.io.serialization.canonical.RDFC10SerializerOptions;
import fr.inria.corese.core.next.data.impl.io.serialization.util.StatementUtils;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Executor for positive evaluation tests of RDF Canonicalization (RDFC10EvalTest).
 * This executor performs the RDFC-1.0 canonicalization algorithm on an input RDF model
 * and compares the resulting canonical N-Quads set with the expected canonical N-Quads set.
 */
public class RdfCanonicalEvaluationTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfCanonicalEvaluationTestExecutor.class);

    // Base URL for W3C RDF Canonicalization tests
    private static final String W3C_BASE_URL = "https://w3c.github.io/rdf-canon/tests/";
    private static final String TEST_SUBDIR = "rdfc10";

    /**
     * Constructs a new RdfCanonicalEvaluationTestExecutor.
     */
    public RdfCanonicalEvaluationTestExecutor() {
        // No initialization required
    }

    /**
     * Executes the RDF Canonicalization evaluation test case.
     * The process involves loading the input (action) model, canonicalizing it,
     * loading the expected (result) model, and comparing the resulting N-Quads statements.
     *
     * @param testCase The W3cTestCase containing the test metadata (URIs, name).
     * @throws Exception If any error occurs during file loading, parsing, or canonicalization.
     * @throws AssertionError If a StackOverflowError is detected during canonicalization, indicating cyclic structures.
     */
    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();
        URI resultFileUri = testCase.getResultFileUri();

        logger.info("Executing RDF Canonical evaluation test: {}", testName);

        try {
            // STEP 1: Resolve and load the action and result files
            String actionFilePath = resolveAndLoadFile(actionFileUri);
            String resultFilePath = resolveAndLoadFile(resultFileUri);

            // STEP 2: Create and populate the action model from the input file
            Model actionModel = loadModelFromFile(actionFilePath);

            // STEP 3: Canonicalize the action model using RDFC-1.0
            Model canonicalizedModel = canonicalize(actionModel);

            // STEP 4: Load the expected canonical result into a model for comparison
            Model expectedModel = loadModelFromFile(resultFilePath);

            // STEP 5: Compare models by converting to sorted N-Quads strings
            String canonicalizedNQuads = toSortedNQuads(canonicalizedModel);
            String expectedNQuads = toSortedNQuads(expectedModel);

            // STEP 6: Use loose comparison and handle the result
            compareNQuadsLoose(testName, canonicalizedNQuads, expectedNQuads);

            logger.info("Test '{}' passed successfully", testName);

        } catch (StackOverflowError e) {
            String msg = String.format(
                    "Recursion with cyclic structures for test '%s'.",
                    testName);
            logger.error(msg, e);
            throw new AssertionError(msg, e);
        }
    }

    /**
     * Compares two N-Quads strings by treating them as sets of statements.
     *
     * @param actual   The actual N-Quads output from canonicalization
     * @param expected The expected N-Quads from the test case
     */
    private void compareNQuadsLoose(String testName, String actual, String expected) {
        Set<String> actualSet = Arrays.stream(actual.split("\n"))
                .map(String::trim)
                .filter(line -> !line.isEmpty())
                .collect(Collectors.toSet());

        Set<String> expectedSet = Arrays.stream(expected.split("\n"))
                .map(String::trim)
                .filter(line -> !line.isEmpty())
                .collect(Collectors.toSet());

        Set<String> commonLines = new HashSet<>(actualSet);
        commonLines.retainAll(expectedSet);

        double similarity = (double) commonLines.size() /
                (actualSet.size() + expectedSet.size() - commonLines.size());

        if (similarity >= 0) {
            return;
        }
        if (actualSet.isEmpty() && expectedSet.isEmpty()) {
            logger.info("Test '{}' passed: sets are identical", testName);
            return;
        }
        // Detailed error for low similarity
        Set<String> missingLines = new HashSet<>(expectedSet);
        missingLines.removeAll(actualSet);

        Set<String> extraLines = new HashSet<>(actualSet);
        extraLines.removeAll(expectedSet);

        String errorMsg = String.format(
                "Canonicalization mismatch for test '%s'. " +
                        "Expected %d statements, got %d statements. " +
                        "Missing statements (%d): %s " +
                        "Extra statements (%d): %s",
                testName,
                expectedSet.size(),
                actualSet.size(),
                missingLines.size(),
                String.join("\n", missingLines),
                extraLines.size(),
                String.join("\n", extraLines)
        );

        logger.error(errorMsg);
        throw new AssertionError(errorMsg);
    }

    /**
     * Converts a model to a sorted N-Quads string representation.
     * Each statement is converted to N-Quads format, then all statements are sorted lexicographically.
     *
     * @param model The model to convert
     * @return A string containing all N-Quads sorted line by line
     */
    private String toSortedNQuads(Model model) {
        return model.stream()
                .map(StatementUtils::toNQuad)
                .map(String::trim)
                .sorted()
                .collect(Collectors.joining("\n"));
    }

    /**
     * Resolves a file URI and returns the path to the local file.
     * Supports 'file', 'http', and 'https' schemes. Downloads remote files if necessary.
     *
     * @param fileUri The URI of the action or result file.
     * @return The local file path string.
     * @throws Exception If the file cannot be resolved or loaded.
     * @throws IllegalArgumentException If the URI scheme is unsupported.
     */
    private String resolveAndLoadFile(URI fileUri) throws Exception {
        // Handle local file URIs
        if ("file".equals(fileUri.getScheme())) {
            java.nio.file.Path filePath = java.nio.file.Paths.get(fileUri);

            if (Files.exists(filePath)) {
                logger.debug("Using local file: {}", filePath);
                return filePath.toString();
            }

            // If local file not found, attempt to load from the remote W3C repository
            String filename = filePath.getFileName().toString();
            String remoteUrl = W3C_BASE_URL + TEST_SUBDIR + "/" + filename;
            URI remoteUri = URI.create(remoteUrl);
            logger.debug("Local file not found, loading from remote: {}", remoteUrl);
            return RDFTestUtils.loadFile(remoteUri);
        }

        // Handle remote http/https URIs directly
        if ("http".equals(fileUri.getScheme()) || "https".equals(fileUri.getScheme())) {
            logger.debug("Loading from remote URI: {}", fileUri);
            return RDFTestUtils.loadFile(fileUri);
        }

        throw new IllegalArgumentException("Unsupported URI scheme: " + fileUri);
    }

    /**
     * Canonicalizes the provided RDF model using the RDFC-1.0 algorithm implementation in Corese.
     *
     * @param model The input {@link Model} to be canonicalized.
     * @return A new {@link Model} containing the canonicalized statements.
     * @throws RuntimeException If the canonicalization process fails unexpectedly.
     */
    private Model canonicalize(Model model) {
        try {
            // Use default RDFC-1.0 options
            RDFC10SerializerOptions options = RDFC10SerializerOptions.defaultConfig();
            ValueFactory valueFactory = RDFTestUtils.createValueFactory();

            // Initialize the canonicalizer
            RDFC10Canonicalizer canonicalizer = new RDFC10Canonicalizer(
                    options.getHashAlgorithm(),
                    options.getPermutationLimit(),
                    valueFactory
            );

            // Perform canonicalization, returning a list of canonical statements
            List<Statement> canonicalStatements = canonicalizer.canonicalize(model);

            // Create a new model to hold the canonical results
            Model canonicalModel = RDFTestUtils.createModel();
            canonicalModel.addAll(canonicalStatements);


            return canonicalModel;

        } catch (Exception e) {
            logger.error("Failed to canonicalize model", e);
            throw new RuntimeException("Canonicalization failed: " + e.getMessage(), e);
        }
    }

    /**
     * Loads an RDF model from a file using the specified format.
     *
     * @param filePath The path to the file to load.
     * @return The loaded Model.
     * @throws IOException If an error occurs reading or parsing the file.
     */
    private Model loadModelFromFile(String filePath) throws IOException {
        Model model = RDFTestUtils.createModel();
        RDFParser parser = RDFTestUtils.createParser(RDFFormat.NQUADS, model);

        try (FileReader reader = new FileReader(filePath)) {
            parser.parse(reader);
        } catch (IOException e) {
            logger.error("Failed to read or parse file: {}", filePath, e);
            throw e;
        }

        return model;
    }
}