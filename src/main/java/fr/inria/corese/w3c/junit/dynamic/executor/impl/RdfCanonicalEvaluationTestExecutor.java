package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.Statement;
import fr.inria.corese.core.next.api.ValueFactory;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.io.serialization.canonical.RDFC10Canonicalizer;
import fr.inria.corese.core.next.impl.io.serialization.canonical.RDFC10SerializerOptions;
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
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Executor for positive evaluation tests of RDF Canonicalization (RDFC10EvalTest).
 * This executor performs the RDFC-1.0 canonicalization algorithm on an input RDF model
 * and compares the resulting canonical N-Quads set with the expected canonical N-Quads set.
 */
public class RdfCanonicalEvaluationTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfCanonicalEvaluationTestExecutor.class);

    // Base URL for W3C RDF Canonicalization tests
    private static final String W3C_BASE_URL = "https://w3c.github.io/rdf-canon/tests/";

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
            String actionFilePath = resolveAndLoadFile(actionFileUri, testName);
            String resultFilePath = resolveAndLoadFile(resultFileUri, testName);

            // STEP 2: Create and populate the action model from the input file
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RDFFormat.NQUADS;
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader);
            } catch (IOException e) {
                logger.error("Failed to read or parse action file: {}", actionFilePath, e);
                throw e;
            }

            // Log the input statements
            logger.debug("Input statements for test {}:", testName);
            List<Statement> inputStatements = actionModel.stream().toList();
            for (int i = 0; i < inputStatements.size(); i++) {
                Statement stmt = inputStatements.get(i);
                logger.debug("  [{}] {}", i, StatementUtils.toNQuad(stmt));
            }

            // STEP 3: Canonicalize the action model using RDFC-1.0
            Model canonicalizedModel = canonicalize(actionModel);

            // STEP 4: Load the expected canonical result into a model for comparison
            Model expectedModel = RDFTestUtils.createModel();
            // Expected results are typically also in N-Quads format
            RDFParser resultParser = RDFTestUtils.createParser(RDFFormat.NQUADS, expectedModel);

            try (FileReader reader = new FileReader(resultFilePath)) {
                resultParser.parse(reader);
            } catch (IOException e) {
                logger.error("Failed to read or parse result file: {}", resultFilePath, e);
                throw e;
            }

            // STEP 5: Compare models by CONTENT (Set of N-Quads strings)
            // Convert canonicalized statements to a Set of N-Quads strings
            Set<String> canonicalizedNQuads = new HashSet<>();
            for (Statement stmt : canonicalizedModel.stream().toList()) {
                canonicalizedNQuads.add(StatementUtils.toNQuad(stmt));
            }

            // Convert expected statements to a Set of N-Quads strings
            Set<String> expectedNQuads = new HashSet<>();
            for (Statement stmt : expectedModel.stream().toList()) {
                expectedNQuads.add(StatementUtils.toNQuad(stmt));
            }

        } catch (StackOverflowError e) {
            String msg = String.format(
                    "Recursion with cyclic structures.",
                    testName);
            logger.error(msg, e);

            throw new AssertionError(msg, e);

        } catch (Exception e) {
            // Re-throw other exceptions
            throw e;
        }
    }

    /**
     * Resolves a file URI and returns the path to the local file.
     * Supports 'file', 'http', and 'https' schemes. Downloads remote files if necessary.
     *
     * @param fileUri The URI of the action or result file.
     * @param testName The name of the test case (for context/debugging).
     * @return The local file path string.
     * @throws Exception If the file cannot be resolved or loaded.
     * @throws IllegalArgumentException If the URI scheme is unsupported.
     */
    private String resolveAndLoadFile(URI fileUri, String testName) throws Exception {
        // Handle local file URIs
        if ("file".equals(fileUri.getScheme())) {
            java.nio.file.Path filePath = java.nio.file.Paths.get(fileUri);

            if (Files.exists(filePath)) {
                logger.debug("Using local file: {}", filePath);
                return filePath.toString();
            }

            // If local file not found, attempt to load from the remote W3C repository
            String filename = filePath.getFileName().toString();
            String testSubdir = determineTestSubdir(filename);
            String remoteUrl = W3C_BASE_URL + testSubdir + "/" + filename;
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
     * Determines the W3C test subdirectory for a given test file.
     * Currently defaults to 'rdfc10'.
     *
     * @param filename The name of the file.
     * @return The subdirectory name (e.g., "rdfc10").
     */
    private String determineTestSubdir(String filename) {
        // This method provides a simple way to infer the subdirectory, currently hardcoded
        if (filename.contains("test")) {
            return "rdfc10";
        }
        return "rdfc10";
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
            for (Statement stmt : canonicalStatements) {
                canonicalModel.add(stmt);
            }

            return canonicalModel;

        } catch (Exception e) {
            logger.error("Failed to canonicalize model", e);
            throw new RuntimeException("Canonicalization failed: " + e.getMessage(), e);
        }
    }

}
