package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.io.FileReader;
import java.net.URI;

import com.apicatalog.jsonld.JsonLdVersion;
import fr.inria.corese.core.next.impl.io.common.JSONLDOptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.exception.ParsingErrorException;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
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
     * Default constructor.
     * This constructor is intentionally empty as no initialization is required.
     */
    public RdfNegativeTestExecutor() {
        // No initialization required
    }

    @SuppressWarnings("java:S3776") // Cognitive complexity acceptable for test executor logic
    public void execute(W3cTestCase testCase) throws Exception {
        // Extract needed information from test case
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();
        String actionBaseUriString = RDFTestUtils.getBaseUri(actionFileUri).toString();

        try {
            // Load the action file
            String actionFilePath = RDFTestUtils.loadFile(actionFileUri);

            // Get format and create parser
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RDFTestUtils.guessFileFormat(actionFileUri);
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            // Parser config for JSON-LD format
            if(actionFormat == RDFFormat.JSONLD) {
                JSONLDOptions.Builder optionBuilder = new JSONLDOptions.Builder();
                if(testCase.getProperty(W3cTestCase.Property.BASE_URI.getKey(), String.class) != null) {
                    String baseUri = testCase.getProperty(W3cTestCase.Property.BASE_URI.getKey(), String.class);
                    optionBuilder.base(baseUri);
                    actionBaseUriString = baseUri;
                }
                if(testCase.getProperty(W3cTestCase.Property.SPEC_VERSION.getKey(), String.class) != null) {
                    String specVersion = testCase.getProperty(W3cTestCase.Property.SPEC_VERSION.getKey(), String.class);
                    if(specVersion.equals("json-ld-1.0")) {
                        optionBuilder.processingMode(JsonLdVersion.V1_0);
                    }
                    if(specVersion.equals("json-ld-1.1")) {
                        optionBuilder.processingMode(JsonLdVersion.V1_1);
                    }
                }

                if(testCase.getProperty(W3cTestCase.Property.USE_NATIVE_TYPES.getKey(), String.class) != null) {
                    boolean usesNativeTypes = testCase.getProperty(W3cTestCase.Property.USE_NATIVE_TYPES.getKey(), String.class).equals("true");
                    optionBuilder.useNativeTypes(usesNativeTypes);
                }
                if(testCase.getProperty(W3cTestCase.Property.USE_RDF_TYPES.getKey(), String.class) != null) {
                    boolean useRdfType = testCase.getProperty(W3cTestCase.Property.USE_RDF_TYPES.getKey(), String.class).equals("true");
                    optionBuilder.useRdfType(useRdfType);
                }
                actionParser.setConfig(optionBuilder.build());
            }

            // Attempt to parse the input file
            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader, actionBaseUriString);
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