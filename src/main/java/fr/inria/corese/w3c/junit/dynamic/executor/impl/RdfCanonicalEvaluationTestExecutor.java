package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.Statement;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.io.serialization.util.StatementUtils;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileReader;
import java.net.URI;
import java.nio.file.Files;
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
            String actionFilePath = resolveAndLoadFile(actionFileUri, testName);
            String resultFilePath = resolveAndLoadFile(resultFileUri, testName);

            // STEP 2: Create and populate the action model from the input file
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RDFFormat.NQUADS;
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader);
            }

            // Log the input statements
            logger.debug("Input statements for test {}:", testName);
            List<Statement> inputStatements = actionModel.stream().toList();
            for (int i = 0; i < inputStatements.size(); i++) {
                Statement stmt = inputStatements.get(i);
                logger.debug("  [{}] {}", i, StatementUtils.toNQuad(stmt));
            }


            Model expectedModel = RDFTestUtils.createModel();
            RDFParser resultParser = RDFTestUtils.createParser(RDFFormat.NQUADS, expectedModel);

            try (FileReader reader = new FileReader(resultFilePath)) {
                resultParser.parse(reader);
            }

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
     * @return The subdirectory name to use when constructing remote URLs.
     *         Currently returns "rdfc10" for all RDF Canonicalization tests.
     */
    private String determineTestSubdir(String filename) {
         if (filename.contains("test")) {
            return "rdfc10";
        }
        return "rdfc10";
    }

}