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
 * Unified executor for negative RDF tests (both syntax and evaluation).
 * These tests should fail to parse and throw exceptions.
 * 
 * Process:
 * 1. Extract needed information from test case
 * 2. Attempt to parse the input file
 * 3. Expect parsing to fail with a ParsingErrorException
 * 4. If parsing succeeds, the test fails (AssertionError) else it passes
 */
public class RdfNegativeTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfNegativeTestExecutor.class);
    /**
     * constructor
     */
    public RdfNegativeTestExecutor() {

    }

    public void execute(W3cTestCase testCase) throws Exception {
        // Extract needed information from test case
        String testName = testCase.getName();
        TestType testType = testCase.getType();
        URI actionFileUri = testCase.getActionFileUri();

        try {
            // Load the action file
            String actionFilePath = RDFTestUtils.loadFile(actionFileUri);

            // Get format and create parser
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RdfFormatDetector.getRdfFormatFromTestType(testType);
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            // Attempt to parse the input file
            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader);
            }

            // If we reach here, parsing succeeded when it should have failed
            String msg = RDFTestUtils.formatErrorMessage(
                    "Expected parsing to fail but it succeeded", testName, actionFileUri, null, null);
            logger.error(msg);
            throw new AssertionError(msg);

        } catch (ParsingErrorException e) {
            // This is expected for negative tests - parsing should fail
            // Test passes when we catch this exception
        }
    }
}