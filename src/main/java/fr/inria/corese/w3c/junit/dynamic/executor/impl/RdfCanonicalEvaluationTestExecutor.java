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
 * Executes positive evaluation tests for RDF Canonicalization (RDFC10EvalTest).
 */
public class RdfCanonicalEvaluationTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfCanonicalEvaluationTestExecutor.class);
    private static final String W3C_BASE_URL = "https://w3c.github.io/rdf-canon/tests/";
    /**
     * constructor
     */
    public RdfCanonicalEvaluationTestExecutor() {

    }
    /**
     * Executes a single **RDF Canonicalization evaluation test**.
     *
     * @param testCase the W3C test case containing action and result URIs.
     * @throws AssertionError if the canonicalized output does not match the expected result, or if an exception occurs during execution.
     * @throws Exception      if an I/O or parsing error occurs.
     */
    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();
        URI resultFileUri = testCase.getResultFileUri();

        logger.info("Executing RDF Canonical evaluation test: {}", testName);

        try {
            // Resolve URIs - convert local file:/// to remote https:// if needed
            String actionFilePath = resolveAndLoadFile(actionFileUri, testName);
            String resultFilePath = resolveAndLoadFile(resultFileUri, testName);

            // Load and parse action file
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RDFFormat.NQUADS;
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader);
            }

            // Canonicalize the action model
            Model canonicalizedModel = canonicalize(actionModel);

            // Load expected result
            Model expectedModel = RDFTestUtils.createModel();
            RDFParser resultParser = RDFTestUtils.createParser(RDFFormat.NQUADS, expectedModel);

            try (FileReader reader = new FileReader(resultFilePath)) {
                resultParser.parse(reader);
            }

            // Compare canonicalized output with expected result
            String canonicalizedNQuads = serializeToNQuads(canonicalizedModel);
            String expectedNQuads = readFileAsString(resultFilePath);

            String[] expectedLines = expectedNQuads.split("\n");
            String[] actualLines = canonicalizedNQuads.split("\n");
            boolean hasDifference = false;
            for (int i = 0; i < Math.max(expectedLines.length, actualLines.length); i++) {
                String expected = i < expectedLines.length ? expectedLines[i].trim() : "MISSING";
                String actual = i < actualLines.length ? actualLines[i].trim() : "MISSING";

                if (!expected.equals(actual)) {

                    hasDifference = true;
                }
            }


            if (!canonicalizedNQuads.equals(expectedNQuads)) {
                String msg = String.format(
                        "RDF Canonical evaluation test failed - output does not match expected result.\n" +
                                "Test: %s\nAction: %s\nResult: %s",
                        testName, actionFileUri, resultFileUri);

                // Show first differences
                expectedLines = expectedNQuads.split("\n");
                actualLines = canonicalizedNQuads.split("\n");
                logger.debug("Expected {} lines, got {} lines", expectedLines.length, actualLines.length);

                for (int i = 0; i < Math.min(expectedLines.length, actualLines.length); i++) {
                    if (!expectedLines[i].equals(actualLines[i])) {
                        break; // Only show first difference
                    }
                }

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
     * Resolves and loads an action or result file from a URI.
     *
     * @param fileUri  the file URI (can be local `file://` or remote `http(s)://`).
     * @param testName the name of the test (used for logging context).
     * @return the **local path** to the resolved and loaded file.
     * @throws Exception if the file cannot be resolved, downloaded, or loaded.
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

            // Determine the test type subdirectory from filename
            String testSubdir = determineTestSubdir(filename);

            // Construct remote URI
            String remoteUrl = W3C_BASE_URL + testSubdir + "/" + filename;

            URI remoteUri = URI.create(remoteUrl);
            return RDFTestUtils.loadFile(remoteUri);
        }

        // Handle remote URIs (http/https)
        if ("http".equals(fileUri.getScheme()) || "https".equals(fileUri.getScheme())) {
            return RDFTestUtils.loadFile(fileUri);
        }

        throw new IllegalArgumentException("Unsupported URI scheme: " + fileUri);
    }

    /**
     * Determines the appropriate W3C test subdirectory for the given filename.
     * <p>
     * For RDF Canonicalization tests, the subdirectory is typically "rdfc10".
     *
     * @param filename the input filename (e.g., "test001-in.nq").
     * @return the subdirectory name, which is currently hardcoded to "rdfc10".
     */
    private String determineTestSubdir(String filename) {
        // RDF Canonicalization tests typically use "rdfc10" subdirectory
        if (filename.contains("test")) {
            return "rdfc10";
        }

        // Default fallback
        return "rdfc10";
    }

    /**
     * Canonicalizes the provided RDF model using the **RDFC-1.0 algorithm**.
     *
     * @param model the RDF model containing the statements to canonicalize.
     * @return a new {@link Model} containing the canonicalized statements in their required order.
     * @throws RuntimeException if the canonicalization process fails.
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

            // Return model directly, preserving order
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
     * Serializes a canonicalized RDF model into a **normalized N-Quads string**.
     *
     * @param model the canonicalized model whose statements should be serialized.
     * @return the complete N-Quads string representation, including a trailing newline.
     * @throws RuntimeException if the serialization process fails.
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
     * Reads the entire content of a file into a single string.
     * This is primarily used for loading the expected N-Quads result for exact comparison.
     *
     * @param filePath the absolute path of the file to read.
     * @return the complete file contents as a string.
     * @throws IOException if an I/O error occurs while reading the file.
     */
    private String readFileAsString(String filePath) throws IOException {
        return Files.readString(Paths.get(filePath));
    }
}
