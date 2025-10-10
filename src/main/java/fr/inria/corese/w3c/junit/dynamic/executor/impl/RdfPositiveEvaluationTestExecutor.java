package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.io.FileReader;
import java.net.URI;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.exception.ParsingErrorException;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RdfFormatDetector;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;

/**
 * Specialized executor for positive RDF evaluation tests.
 * These tests should parse successfully and match the expected semantic result.
 * 
 * Process:
 * 1. Extract needed information from test case
 * 2. Parse the input action file
 * 3. Parse the expected result file
 * 4. Compare the two models semantically
 * 5. If parsing fails or models do not match, the test fails (AssertionError)
 * else it passes
 */
public class RdfPositiveEvaluationTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfPositiveEvaluationTestExecutor.class);
    /**
     * constructor
     */
    public RdfPositiveEvaluationTestExecutor() {

    }
    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        // Extract needed information from test case
        String testName = testCase.getName();
        TestType testType = testCase.getType();
        URI actionFileUri = testCase.getActionFileUri();
        URI resultFileUri = testCase.getResultFileUri();

        try {
            // Action Model //

            // Load the action file
            String actionFilePath = RDFTestUtils.loadFile(actionFileUri);

            // Get format and create parser
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RdfFormatDetector.getRdfFormatFromTestType(testType);
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            // Parse the input file
            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader);
            }

            // Result Model //

            // Load the result file
            String resultFilePath = RDFTestUtils.loadFile(resultFileUri);

            // Detect format of result file and create parser
            Model resultModel = RDFTestUtils.createModel();
            RDFFormat resultFormat = RdfFormatDetector.detectFromFileExtension(resultFileUri);
            RDFParser resultParser = RDFTestUtils.createParser(resultFormat, resultModel);

            // Parse the result file
            try (FileReader reader = new FileReader(resultFilePath)) {
                resultParser.parse(reader);
            }

            // Test //

            // Compare the models semantically
            if (!actionModel.equals(resultModel)) {
                String msg = RDFTestUtils.formatErrorMessage(
                        "Positive evaluation test failed - models are not equivalent",
                        testName, actionFileUri, resultFileUri, null);
                logger.error(msg);
                throw new AssertionError(msg);
            }

            // Test passed - parsing succeeded and models match (if result file exists)

        } catch (ParsingErrorException e) {
            String msg = RDFTestUtils.formatErrorMessage(
                    "Positive evaluation test failed - parsing error", testName, actionFileUri, resultFileUri, e);
            logger.error(msg, e);
            throw new AssertionError(msg);
        }
    }
}
