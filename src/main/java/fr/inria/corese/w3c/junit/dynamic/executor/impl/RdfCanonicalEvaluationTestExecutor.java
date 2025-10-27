package fr.inria.corese.w3c.junit.dynamic.executor.impl;

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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Comparator;
import java.util.List;

/**
 * Executor for positive evaluation tests of RDF Canonicalization (RDFC10EvalTest).
 *
 *
 */
public class RdfCanonicalEvaluationTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfCanonicalEvaluationTestExecutor.class);

    private static final String W3C_BASE_URL = "https://w3c.github.io/rdf-canon/tests/";

    /**
     * Default constructor for RdfCanonicalEvaluationTestExecutor.
     *
     */
    public RdfCanonicalEvaluationTestExecutor() {
        // No initialization required
    }

    /**
     * Executes a single RDF Canonicalization evaluation test case.
     *
     *
     * @param testCase The W3C test case containing action and result file URIs.
     *                 Must not be null and must have both action and result URIs set.
     * @throws AssertionError If the canonicalized output does not exactly match
     *                        the expected result. The error message includes
     *                        the test name, file URIs, and details of the first
     *                        difference found.
     * @throws Exception If an I/O error occurs while reading files or if a parsing
     *                   error occurs during RDF processing.
     */
    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();
        URI resultFileUri = testCase.getResultFileUri();

        logger.info("Executing RDF Canonical evaluation test: {}", testName);

        try {
            // STEP 1: Resolve and load the action and result files
            // These may be local files or remote URLs from the W3C test server
            String actionFilePath = resolveAndLoadFile(actionFileUri, testName);
            String resultFilePath = resolveAndLoadFile(resultFileUri, testName);

            // STEP 2: Create and populate the action model from the input file
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RDFFormat.NQUADS;
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader);
            }

            // STEP 3: Canonicalize the action model using RDFC-1.0
            Model canonicalizedModel = canonicalize(actionModel);

            // STEP 4: Load the expected canonical result into a model for comparison
            // (Used to validate structure; actual comparison is string-based)
            Model expectedModel = RDFTestUtils.createModel();
            RDFParser resultParser = RDFTestUtils.createParser(RDFFormat.NQUADS, expectedModel);

            try (FileReader reader = new FileReader(resultFilePath)) {
                resultParser.parse(reader);
            }

            // STEP 5: Serialize both models to N-Quads for string comparison
            String canonicalizedNQuads = serializeToNQuads(canonicalizedModel);
            String expectedNQuads = readFileAsString(resultFilePath);

            // STEP 6: Compare the exact string representations
            // Note: We compare the serialized forms to ensure byte-perfect equivalence
            if (!canonicalizedNQuads.equals(expectedNQuads)) {
                // Extract and display the first difference for debugging
                String[] expectedLines = expectedNQuads.split("\n");
                String[] actualLines = canonicalizedNQuads.split("\n");

                logger.debug("Expected {} lines, got {} lines", expectedLines.length, actualLines.length);

                // Find and report the first line that differs
                StringBuilder diffDetails = new StringBuilder();
                for (int i = 0; i < Math.max(expectedLines.length, actualLines.length); i++) {
                    String expected = i < expectedLines.length ? expectedLines[i] : "MISSING";
                    String actual = i < actualLines.length ? actualLines[i] : "MISSING";

                    if (!expected.equals(actual)) {
                        // Report the first difference with line number and content
                        diffDetails.append("\n[Line ").append(i + 1).append("]")
                                .append("\n  Expected: ").append(expected)
                                .append("\n  Actual:   ").append(actual);
                        break; // Only show first difference to keep message concise
                    }
                }

                String msg = String.format(
                        "RDF Canonical evaluation test failed - output does not match expected result.\n" +
                                "Test: %s\nAction: %s\nResult: %s%s",
                        testName, actionFileUri, resultFileUri, diffDetails);

                throw new AssertionError(msg);
            }

            logger.info("RDF Canonical evaluation test passed: {}", testName);

        } catch (Exception e) {
            String msg = String.format(
                    "RDF Canonical evaluation test failed with exception.\n" +
                            "Test: %s\nAction: %s\nResult: %s\nError: %s",
                    testName, actionFileUri, resultFileUri, e.getMessage());
            logger.error(msg, e);
            throw new AssertionError(msg, e);
        }
    }

    /**
     * Resolves a file URI and returns the path to the local file.
     *
     *
     *
     * @param fileUri The URI to resolve. Must use "file", "http", or "https" scheme.
     *                Must not be null.
     * @param testName The name of the test, used for logging and error messages.
     * @return The absolute file system path to the resolved file.
     *         The returned path always refers to a file that exists locally.
     * @throws Exception If the URI scheme is unsupported, or if file I/O fails.
     */
    private String resolveAndLoadFile(URI fileUri, String testName) throws Exception {
        // Handle local file URIs
        if ("file".equals(fileUri.getScheme())) {
            // Convert file URI to Path (handles Windows paths correctly)
            java.nio.file.Path filePath = java.nio.file.Paths.get(fileUri);

            // Try using the local path as-is
            if (Files.exists(filePath)) {
                logger.debug("Using local file: {}", filePath);
                return filePath.toString();
            }

            // File doesn't exist locally; download from W3C servers
            String filename = filePath.getFileName().toString();
            // Determine the appropriate test subdirectory
            String testSubdir = determineTestSubdir(filename);
            // Construct the remote URL
            String remoteUrl = W3C_BASE_URL + testSubdir + "/" + filename;
            // Download and cache the file locally
            URI remoteUri = URI.create(remoteUrl);
            return RDFTestUtils.loadFile(remoteUri);
        }

        // Handle remote HTTP/HTTPS URIs
        if ("http".equals(fileUri.getScheme()) || "https".equals(fileUri.getScheme())) {
            return RDFTestUtils.loadFile(fileUri);
        }

        // Reject unsupported URI schemes
        throw new IllegalArgumentException("Unsupported URI scheme: " + fileUri);
    }

    /**
     * Determines the W3C test subdirectory for a given test file.
     *
     * <p>The W3C RDF Canonicalization test suite organizes tests in
     * subdirectories by type. This method examines the filename to
     * determine which subdirectory should be used for downloading
     * remote test files.</p>
     *
     * @param filename The test filename, e.g., "test001-in.nq" or "test042-rdfc10.nq".
     * @return The subdirectory name to use when constructing remote URLs.
     *         Currently returns "rdfc10" for all RDF Canonicalization tests.
     */
    private String determineTestSubdir(String filename) {
        // RDF Canonicalization tests use the "rdfc10" subdirectory
        if (filename.contains("test")) {
            return "rdfc10";
        }
        return "rdfc10";
    }

    /**
     * Canonicalizes the provided RDF model using the RDFC-1.0 algorithm.
     *
     * <p><strong>Canonicalization Process:</strong></p>
     * <ol>
     *   <li>Creates an Rdfc10Canonicalizer with default configuration</li>
     *   <li>Invokes the canonicalization algorithm on the input model</li>
     *   <li>Constructs a new model containing only the canonicalized statements</li>
     *   <li>Preserves the order of canonicalized statements</li>
     * </ol>
     *
     * <p><strong>Blank Node Mapping:</strong> The canonicalization algorithm
     * assigns new identifiers to all blank nodes in a deterministic way,
     * ensuring that datasets with the same logical content receive the
     * same canonical form.</p>
     *
     * @param model The input RDF model to canonicalize. Must not be null.
     *              May be empty or contain only ground triples (no blank nodes).
     * @return A new Model containing the canonicalized statements in their
     *         canonical order. The returned model is independent of the input.
     * @throws RuntimeException If the canonicalization process fails.
     */
    private Model canonicalize(Model model) {
        try {
            Rdfc10Options options = Rdfc10Options.defaultConfig();
            ValueFactory valueFactory = RDFTestUtils.createValueFactory();

            Rdfc10Canonicalizer canonicalizer = new Rdfc10Canonicalizer(
                    options.getHashAlgorithm(),
                    options.getPermutationLimit(),
                    valueFactory
            );

            List<Statement> canonicalStatements = canonicalizer.canonicalize(model);

            Model canonicalModel = RDFTestUtils.createModel();
            for (Statement stmt : canonicalStatements) {
                canonicalModel.add(stmt);
            }

            return canonicalModel;

        } catch (Exception e) {
            logger.error("Failed to canonicalize model", e);
            throw new RuntimeException("Canonicalization failed: " + e.getMessage(), e);
        }
    }

    /**
     * Serializes a canonicalized RDF model to normalized N-Quads format.
     *
     *
     * @param model The canonicalized model to serialize. Must not be null.
     * @return The complete N-Quads representation as a string,
     *         including a trailing newline. Returns an empty string for
     *         empty models.
     * @throws RuntimeException If the serialization process fails.
     */
    private String serializeToNQuads(Model model) {
        try {
            StringBuilder sb = new StringBuilder();
            // Don't rely on model.stream() - re-sort if needed
            List<Statement> statements = model.stream()
                    .sorted(Comparator.comparing(StatementUtils::toNQuad))
                    .toList();

            for (Statement stmt : statements) {
                String nquad = StatementUtils.toNQuad(stmt);
                sb.append(nquad).append("\n");
            }

            return sb.toString();

        } catch (Exception e) {
            logger.error("Failed to serialize model to N-Quads", e);
            throw new RuntimeException("N-Quads serialization failed: " + e.getMessage(), e);
        }
    }

    /**
     * Reads the complete contents of a file into a single string.
     *
     *
     * @param filePath The absolute file system path. Must refer to a
     *                 regular file that exists and is readable.
     *                 Must not be null.
     * @return The complete file contents as a string. The file's encoding
     *         is assumed to be UTF-8 (default for Files.readString).
     * @throws IOException If an I/O error occurs while reading the file,
     *                     such as the file not existing or lacking read permissions.
     */
    private String readFileAsString(String filePath) throws IOException {
        return Files.readString(Paths.get(filePath));
    }
}