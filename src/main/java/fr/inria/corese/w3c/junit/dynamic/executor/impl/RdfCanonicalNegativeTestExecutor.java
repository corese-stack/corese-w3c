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
 * Executor for RDF Canonicalization negative evaluation tests (RDFC10NegativeEvalTest).
 */
public class RdfCanonicalNegativeTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfCanonicalNegativeTestExecutor.class);
    private static final String W3C_BASE_URL = "https://w3c.github.io/rdf-canon/tests/";
    /**
     * constructor
     */
    public RdfCanonicalNegativeTestExecutor() {

    }
    /**
     * Maximum number of Hash N-Degree Quads calls allowed.
     * When exceeded on a poison graph, a SerializationException is thrown.
     */
    private static final int MAX_HASH_N_DEGREE_QUADS_CALLS = 50000;

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();

        logger.info("Executing RDF Canonical negative test: {}", testName);
        try {
            // Load and parse action file (poison graph)
            String actionFilePath = resolveAndLoadFile(actionFileUri, testName);
            Model actionModel = RDFTestUtils.createModel();
            RDFParser actionParser = RDFTestUtils.createParser(RDFFormat.NQUADS, actionModel);

            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader);
            }


            // Attempt to canonicalize - this should throw an exception
            boolean exceptionThrown = false;
            String errorMessage = null;
            Throwable caughtException = null;

            try {
                canonicalize(actionModel);
                logger.error("Canonicalization completed without throwing an exception!");
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

            // The test passes if an exception was thrown
            if (!exceptionThrown) {
                String msg = String.format(
                        "RDF Canonical negative test failed - expected an exception but none was thrown.\n" +
                                "Test: %s\nAction: %s\n" +
                                "This poison graph should have exceeded the maximum calls limit of %d.\n" +
                                "The canonicalization algorithm must detect and reject poison graphs.",
                        testName, actionFileUri, MAX_HASH_N_DEGREE_QUADS_CALLS);
                logger.error(msg);
                throw new AssertionError(msg);
            }

            // Verify that the exception is due to excessive calls (optional warning)
            if (!isExpectedError(errorMessage, caughtException)) {
                String msg = String.format(
                        "RDF Canonical negative test - exception thrown but possibly for wrong reason.\n" +
                                "Test: %s\nAction: %s\n" +
                                "Expected: Error due to excessive Hash N-Degree Quads calls\n" +
                                "Actual: %s: %s",
                        testName, actionFileUri,
                        caughtException.getClass().getSimpleName(), errorMessage);
                logger.warn(msg);
                // This is a warning, not a failure - the test still passes if an error occurred
            }

            logger.info("RDF Canonical negative test passed: {} (correctly rejected poison graph)",
                    testName);

        } catch (AssertionError e) {
            throw e; // Re-throw assertion errors from the test itself
        } catch (Exception e) {
            String msg = String.format(
                    "RDF Canonical negative test failed with unexpected exception during test execution.\n" +
                            "Test: %s\nAction: %s\nError: %s",
                    testName, actionFileUri, e.getMessage());
            logger.error(msg, e);
            throw new AssertionError(msg, e);
        }
    }

    /**
     * Resolves an action file URI.
     *
     * @param fileUri  the file URI (may be local or remote)
     * @param testName the test name (for logging)
     * @return the local file path
     * @throws Exception if the file cannot be resolved or loaded
     */
    private String resolveAndLoadFile(URI fileUri, String testName) throws Exception {
        // Handle local file URIs
        if ("file".equals(fileUri.getScheme())) {
            // Convert file URI to Path - handles Windows paths correctly
            java.nio.file.Path filePath = java.nio.file.Paths.get(fileUri);

            // Try using it as-is
            if (Files.exists(filePath)) {
                logger.debug("Using local file: {}", filePath);
                return filePath.toString();
            }


            // Extract filename from the path
            String filename = filePath.getFileName().toString();

            // Construct remote URI for negative tests (typically in rdfc10 subdirectory)
            String remoteUrl = W3C_BASE_URL + "rdfc10/" + filename;
            logger.info("Constructed remote URL: {}", remoteUrl);

            URI remoteUri = URI.create(remoteUrl);
            return RDFTestUtils.loadFile(remoteUri);
        }

        // Handle remote URIs (http/https)
        if ("http".equals(fileUri.getScheme()) || "https".equals(fileUri.getScheme())) {
            logger.debug("Loading remote file: {}", fileUri);
            return RDFTestUtils.loadFile(fileUri);
        }

        throw new IllegalArgumentException("Unsupported URI scheme: " + fileUri);
    }

    /**
     * Canonicalizes a model using the RDFC-1.0 algorithm.
     * When canonicalizing a poison graph, this will throw SerializationException
     * if the maximum number of Hash N-Degree Quads calls is exceeded.
     *
     * @param model the model to canonicalize (poison graph)
     * @throws SerializationException when the maximum number of calls is exceeded
     * @throws Exception              for other canonicalization failures
     */
    private void canonicalize(Model model) throws Exception {
        try {
            Rdfc10Options options = Rdfc10Options.defaultConfig();
            ValueFactory valueFactory = RDFTestUtils.createValueFactory();

            // Create the canonicalizer with the max calls limit
            Rdfc10Canonicalizer canonicalizer = new Rdfc10Canonicalizer(
                    options.getHashAlgorithm(),
                    MAX_HASH_N_DEGREE_QUADS_CALLS,
                    valueFactory
            );

            // Attempt to canonicalize - this will throw SerializationException if limit exceeded
            canonicalizer.canonicalize(model);

        } catch (SerializationException e) {
            // Re-throw serialization exceptions (these indicate poison graph detection)
            throw e;
        } catch (Exception e) {
            // Wrap other exceptions
            throw new Exception("Canonicalization failed: " + e.getMessage(), e);
        }
    }

    /**
     * Checks if the error message indicates the expected type of failure.
     * The expected failure is due to exceeding the maximum number of calls
     * to the Hash N-Degree Quads algorithm.
     *
     * @param errorMessage the error message
     * @param exception    the exception that was thrown
     * @return true if this is the expected error type
     */
    private boolean isExpectedError(String errorMessage, Throwable exception) {
        if (errorMessage == null && exception == null) {
            return false;
        }

        // Check if it's a SerializationException (expected type)
        if (exception instanceof SerializationException) {
            return true;
        }

        return false;
    }


}
