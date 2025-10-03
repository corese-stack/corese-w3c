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
 * Specialized executor for positive RDF syntax tests.
 * These tests should parse successfully without throwing exceptions.
 * 
 * Process:
 * 1. Extract needed information from test case
 * 2. Attempt to parse the input file
 * 3. Expect successful parsing without any exceptions
 * 4. If parsing fails, the test fails (AssertionError) else it passes
 */
public class RdfPositiveSyntaxTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfPositiveSyntaxTestExecutor.class);

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        // Extract all needed information from test case
        String testName = testCase.getName();
        TestType testType = testCase.getType();
        URI actionFileUri = testCase.getActionFileUri();

        try {
            // Load the action file
            String actionFilePath = RDFTestUtils.loadFile(actionFileUri);

            // Detect format and create parser
            RDFFormat actionFormat = RdfFormatDetector.getRdfFormatFromTestType(testType);
            Model actionModel = RDFTestUtils.createModel();
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            // Parse the input file
            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader);
            }

            // If we reach here, parsing succeeded as expected for positive syntax test

        } catch (ParsingErrorException e) {
            // This should not happen for positive syntax tests
            String msg = RDFTestUtils.formatErrorMessage(
                    "Expected successful parsing but got parse error", testName, actionFileUri, null, e);
            logger.error(msg, e);
            throw new AssertionError(msg);
        } catch (Exception e) {
            // Any other unexpected error
            String msg = RDFTestUtils.formatErrorMessage(
                    "Unexpected error during positive syntax test", testName, actionFileUri, null, e);
            logger.error(msg, e);
            throw new AssertionError(msg);
        }
    }
}