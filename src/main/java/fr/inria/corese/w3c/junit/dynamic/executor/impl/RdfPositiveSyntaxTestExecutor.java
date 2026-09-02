package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.io.FileReader;
import java.net.URI;

import com.apicatalog.jsonld.JsonLdVersion;
import fr.inria.corese.core.next.data.api.exception.ParsingException;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.io.JSONLDOptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.w3c.junit.dynamic.executor.InfrastructureException;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;

/**
 * Specialized executor for positive RDF syntax tests.
 * These tests should parse successfully without throwing exceptions.
 * Process:
 * 1. Extract needed information from test case
 * 2. Attempt to parse the input file
 * 3. Expect successful parsing without any exceptions
 * 4. If parsing fails, the test fails (AssertionError) else it passes
 */
public class RdfPositiveSyntaxTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfPositiveSyntaxTestExecutor.class);
    
    /**
     * Default constructor.
     * This constructor is intentionally empty as no initialization is required.
     */
    public RdfPositiveSyntaxTestExecutor() {
        // No initialization required
    }
    
    @Override
    @SuppressWarnings("java:S3776") // Cognitive complexity acceptable for test executor logic
    public void execute(W3cTestCase testCase) throws Exception {
        // Extract all needed information from test case
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();
        String actionBaseUriString = RDFTestUtils.getBaseUri(actionFileUri).toString();

        try {
            // Load the action file
            String actionFilePath = RDFTestUtils.loadFile(actionFileUri);

            // Detect format and create parser
            RDFFormat actionFormat = RDFTestUtils.guessFileFormat(actionFileUri);
            Model actionModel = RDFTestUtils.createModel();
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            // Parser config for JSON-LD format
            if(actionFormat == RDFFormat.JSONLD) {
                JSONLDOptions.Builder optionBuilder = new JSONLDOptions.Builder();
                if(testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class) != null) {
                    String baseUri = testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class);
                    optionBuilder.base(baseUri);
                    actionBaseUriString = baseUri;
                }
                if(testCase.getProperty(W3cTestCase.Property.SPEC_VERSION, String.class) != null) {
                    String specVersion = testCase.getProperty(W3cTestCase.Property.SPEC_VERSION, String.class);
                    if(specVersion.equals("json-ld-1.0")) {
                        optionBuilder.processingMode(JsonLdVersion.V1_0);
                    }
                    if(specVersion.equals("json-ld-1.1")) {
                        optionBuilder.processingMode(JsonLdVersion.V1_1);
                    }
                }

                if(testCase.getProperty(W3cTestCase.Property.USE_NATIVE_TYPES, String.class) != null) {
                    boolean usesNativeTypes = testCase.getProperty(W3cTestCase.Property.USE_NATIVE_TYPES, String.class).equals("true");
                    optionBuilder.useNativeTypes(usesNativeTypes);
                }
                if(testCase.getProperty(W3cTestCase.Property.USE_RDF_TYPES, String.class) != null) {
                    boolean useRdfType = testCase.getProperty(W3cTestCase.Property.USE_RDF_TYPES, String.class).equals("true");
                    optionBuilder.useRdfType(useRdfType);
                }
                actionParser.setConfig(optionBuilder.build());
            }

            // Parse the input file
            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader, actionBaseUriString);
            }

            // If we reach here, parsing succeeded as expected for positive syntax test

        } catch (InfrastructureException | AssertionError e) {
            throw e;
        } catch (ParsingException e) {
            // This should not happen for positive syntax tests
            String msg = RDFTestUtils.formatErrorMessage(
                    "Expected successful parsing but got parse error", testName, actionFileUri, null, e);
            logger.error(msg, e);
            throw new AssertionError(msg, e);
        } catch (Exception e) {
            // Any other unexpected error
            String msg = RDFTestUtils.formatErrorMessage(
                    "Unexpected error during positive syntax test", testName, actionFileUri, null, e);
            logger.error(msg, e);
            throw new AssertionError(msg, e);
        }
    }
}
