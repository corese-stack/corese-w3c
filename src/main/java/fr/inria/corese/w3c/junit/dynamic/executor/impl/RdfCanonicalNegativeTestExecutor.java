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
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * Executor for negative evaluation tests of RDF Canonicalization (RDFC10NegativeEvalTest).
 *
 */
public class RdfCanonicalNegativeTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfCanonicalNegativeTestExecutor.class);
    private static final String W3C_BASE_URL = "https://w3c.github.io/rdf-canon/tests/";
    private static final int MAX_HASH_N_DEGREE_QUADS_CALLS = 1000;

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
            Model actionModel = loadPoisonGraph(actionFileUri, testName);
            executeCanonicalizeAndVerifyException(actionModel, testName, actionFileUri);

        } catch (AssertionError e) {
            throw e;
        } catch (Exception e) {
            String msg = String.format(
                    "RDF Canonical negative test FAILED with unexpected exception.\n" +
                            "Test: %s\nAction: %s\nError: %s",
                    testName, actionFileUri, e.getMessage());
            logger.error(msg, e);
            throw new AssertionError(msg, e);
        }
    }

    /**
     * Loads a poison graph from file and parses it into a Model.
     *
     * @param fileUri  The URI of the poison graph file
     * @param testName The test name (for logging)
     * @return Parsed Model containing the poison graph
     * @throws Exception If file cannot be loaded or parsed
     */
    private Model loadPoisonGraph(URI fileUri, String testName) throws Exception {
        String filePath = resolveAndLoadFile(fileUri, testName);

        Model model = RDFTestUtils.createModel();
        RDFParser parser = RDFTestUtils.createParser(RDFFormat.NQUADS, model);

        try (FileReader reader = new FileReader(filePath)) {
            parser.parse(reader);
        }

        return model;
    }

    /**
     * Attempts canonicalization and verifies that an exception is thrown.
     * For poison graphs, the canonicalizer must detect the exponential behavior
     * and throw SerializationException when MAX_HASH_N_DEGREE_QUADS_CALLS is exceeded.
     *
     * @param model         The model (poison graph) to canonicalize
     * @param testName      Test name for error messages
     * @param actionFileUri Original file URI for error messages
     * @throws AssertionError If no exception is thrown
     */
    private void executeCanonicalizeAndVerifyException(Model model, String testName, URI actionFileUri) {
        Throwable caughtException = null;

        try {
            canonicalize(model);
            // If we reach here, no exception was thrown - TEST FAILS
            String msg = String.format(
                    "RDF Canonical negative test FAILED - expected an exception but none was thrown.\n" +
                            "Test: %s\nAction: %s\n" +
                            "Poison graph should have exceeded maximum calls limit of %d.",
                    testName, actionFileUri, MAX_HASH_N_DEGREE_QUADS_CALLS);
            logger.error(msg);
            throw new AssertionError(msg);

        } catch (SerializationException e) {
            caughtException = e;
            logger.debug("Expected SerializationException thrown: {}", e.getMessage());

        } catch (Exception e) {
            caughtException = e;
            logger.debug("Exception thrown (may not be SerializationException): {} - {}",
                    e.getClass().getSimpleName(), e.getMessage());
        }

        // Verify exception type
        if (caughtException != null && !isExpectedError(caughtException)) {
            logger.warn("Exception thrown but type is not SerializationException. " +
                            "Test: {}, Actual: {}",
                    testName, caughtException.getClass().getSimpleName());
        }
    }

    /**
     * Resolves a file URI to a local file path.
     * If URI is a file:// scheme, checks local filesystem first, then downloads from W3C.
     * If URI is http:// or https://, downloads directly.
     *
     * @param fileUri The URI to resolve
     * @param testName The test name (for logging)
     * @return The absolute local file path
     * @throws Exception If URI scheme is unsupported
     */
    private String resolveAndLoadFile(URI fileUri, String testName) throws Exception {
        String scheme = fileUri.getScheme();

        if ("file".equals(scheme)) {
            return resolveLocalOrRemoteFile(fileUri);
        }

        if ("http".equals(scheme) || "https".equals(scheme)) {
            logger.debug("Loading remote file: {}", fileUri);
            return RDFTestUtils.loadFile(fileUri);
        }

        throw new IllegalArgumentException("Unsupported URI scheme: " + scheme);
    }

    /**
     * Resolves a file:// URI by checking local filesystem first,
     * then downloading from W3C if not found locally.
     *
     * @param fileUri The file:// URI
     * @return The absolute local file path
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

    /**
     * Canonicalizes a model using RDFC-1.0 with call limit to detect poison graphs.
     * The canonicalizer will throw SerializationException if MAX_HASH_N_DEGREE_QUADS_CALLS
     * is exceeded, indicating detection of exponential behavior.
     *
     * @param model The model to canonicalize
     * @throws SerializationException When call limit is exceeded
     * @throws Exception For other canonicalization failures
     */
    private void canonicalize(Model model) throws Exception {
        try {
            Rdfc10Options options = Rdfc10Options.defaultConfig();
            ValueFactory valueFactory = RDFTestUtils.createValueFactory();

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
     * @param exception The exception to check
     * @return true if it's a SerializationException; false otherwise
     */
    private boolean isExpectedError(Throwable exception) {
        return exception instanceof SerializationException;
    }
}