package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.ValueFactory;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.exception.SerializationException;
import fr.inria.corese.core.next.impl.io.serialization.canonical.Rdfc10Canonicalizer;
import fr.inria.corese.core.next.impl.io.serialization.canonical.Rdfc10Options;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileReader;
import java.net.URI;
import java.nio.file.Files;

/**
 * Executor for negative evaluation tests of RDF Canonicalization (RDFC10NegativeEvalTest).
 *
 */
public class RdfCanonicalNegativeTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfCanonicalNegativeTestExecutor.class);
    private static final String W3C_BASE_URL = "https://w3c.github.io/rdf-canon/tests/";

    /**
     * Maximum number of Hash N-Degree Quads algorithm calls allowed.
     * When exceeded on a poison graph, a SerializationException is thrown.
     */
    private static final int MAX_HASH_N_DEGREE_QUADS_CALLS = 50000;

    /**
     * Executes a single RDF Canonicalization negative evaluation test.
     * The test passes if an exception is thrown during canonicalization,
     * indicating successful detection and rejection of the poison graph.
     *
     * @param testCase The W3C test case containing the action file (poison graph).
     * @throws AssertionError If no exception is thrown or test execution fails.
     * @throws Exception If I/O errors occur.
     */
    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();

        logger.info("Executing RDF Canonical negative test: {}", testName);

        try {
            // Load the poison graph
            String actionFilePath = resolveAndLoadFile(actionFileUri, testName);
            Model actionModel = RDFTestUtils.createModel();
            RDFParser actionParser = RDFTestUtils.createParser(RDFFormat.NQUADS, actionModel);

            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader);
            }

            // Attempt canonicalization and verify exception is thrown
            boolean exceptionThrown = false;
            String errorMessage = null;
            Throwable caughtException = null;

            try {
                canonicalize(actionModel);
            } catch (SerializationException e) {
                exceptionThrown = true;
                errorMessage = e.getMessage();
                caughtException = e;
                logger.debug("Expected exception thrown: {} - {}",
                        e.getClass().getSimpleName(), errorMessage);
            } catch (Exception e) {
                exceptionThrown = true;
                errorMessage = e.getMessage();
                caughtException = e;
                logger.debug("Exception thrown: {} - {}",
                        e.getClass().getSimpleName(), errorMessage);
            }

            // Verify exception was thrown (test passes only if it was)
            if (!exceptionThrown) {
                String msg = String.format(
                        "RDF Canonical negative test failed - expected an exception but none was thrown.\n" +
                                "Test: %s\nAction: %s\n" +
                                "Poison graph should have exceeded maximum calls limit of %d.",
                        testName, actionFileUri, MAX_HASH_N_DEGREE_QUADS_CALLS);
                logger.error(msg);
                throw new AssertionError(msg);
            }

            // Verify exception is due to expected cause (warning if not)
            if (!isExpectedError(caughtException)) {
                logger.warn("RDF Canonical negative test - exception thrown but type may be incorrect. " +
                                "Test: {}, Expected: SerializationException, Actual: {}",
                        testName, caughtException.getClass().getSimpleName());
            }

            logger.info("RDF Canonical negative test passed: {} (correctly rejected poison graph)",
                    testName);

        } catch (AssertionError e) {
            throw e;
        } catch (Exception e) {
            String msg = String.format(
                    "RDF Canonical negative test failed with unexpected exception.\n" +
                            "Test: %s\nAction: %s\nError: %s",
                    testName, actionFileUri, e.getMessage());
            logger.error(msg, e);
            throw new AssertionError(msg, e);
        }
    }

    /**
     * Resolves a file URI and returns the local file path.
     *
     *
     * @param fileUri The file URI to resolve.
     * @param testName The test name (for logging).
     * @return The absolute local file path.
     * @throws Exception If file cannot be resolved or loaded.
     */
    private String resolveAndLoadFile(URI fileUri, String testName) throws Exception {
        if ("file".equals(fileUri.getScheme())) {
            java.nio.file.Path filePath = java.nio.file.Paths.get(fileUri);

            if (Files.exists(filePath)) {
                logger.debug("Using local file: {}", filePath);
                return filePath.toString();
            }

            // Download from W3C if not found locally
            String filename = filePath.getFileName().toString();
            String remoteUrl = W3C_BASE_URL + "rdfc10/" + filename;
            logger.debug("Downloading from: {}", remoteUrl);

            return RDFTestUtils.loadFile(URI.create(remoteUrl));
        }

        if ("http".equals(fileUri.getScheme()) || "https".equals(fileUri.getScheme())) {
            logger.debug("Loading remote file: {}", fileUri);
            return RDFTestUtils.loadFile(fileUri);
        }

        throw new IllegalArgumentException("Unsupported URI scheme: " + fileUri);
    }

    /**
     * Canonicalizes a model using the RDFC-1.0 algorithm with call limits.
     * For poison graphs, this throws SerializationException when the maximum
     * number of Hash N-Degree Quads algorithm calls is exceeded.
     *
     * @param model The model to canonicalize (typically a poison graph).
     * @throws SerializationException When call limit is exceeded.
     * @throws Exception For other canonicalization failures.
     */
    private void canonicalize(Model model) throws Exception {
        try {
            Rdfc10Options options = Rdfc10Options.defaultConfig();
            ValueFactory valueFactory = RDFTestUtils.createValueFactory();

            // Create canonicalizer with call limit to detect poison graphs
            Rdfc10Canonicalizer canonicalizer = new Rdfc10Canonicalizer(
                    options.getHashAlgorithm(),
                    MAX_HASH_N_DEGREE_QUADS_CALLS,
                    valueFactory
            );

            canonicalizer.canonicalize(model);

        } catch (SerializationException e) {
            // Re-throw serialization exceptions (expected for poison graphs)
            throw e;
        } catch (Exception e) {
            throw new Exception("Canonicalization failed: " + e.getMessage(), e);
        }
    }

    /**
     * Checks if the exception indicates the expected failure type.
     *
     *
     * @param exception The exception to check.
     * @return true if it's a SerializationException; false otherwise.
     */
    private boolean isExpectedError(Throwable exception) {
        return exception instanceof SerializationException;
    }
}