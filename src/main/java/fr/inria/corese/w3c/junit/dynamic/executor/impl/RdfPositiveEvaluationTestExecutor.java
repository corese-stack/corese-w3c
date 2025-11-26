package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import com.apicatalog.jsonld.JsonLdVersion;
import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.io.common.JSONLDOptions;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;

import java.io.FileReader;
import java.net.URI;

/**
 * Specialized executor for positive RDF evaluation tests.
 * These tests should parse successfully and match the expected semantic result.
 * Process:
 * 1. Extract needed information from test case
 * 2. Parse the input action file
 * 3. Parse the expected result file
 * 4. Compare the two models semantically
 * 5. If parsing fails or models do not match, the test fails (AssertionError)
 * else it passes
 */
public class RdfPositiveEvaluationTestExecutor implements TestExecutor {

    /**
     * Default constructor.
     * This constructor is intentionally empty as no initialization is required.
     */
    public RdfPositiveEvaluationTestExecutor() {
        // No initialization required
    }

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        URI actionFileUri = testCase.getActionFileUri();
        URI resultFileUri = testCase.getResultFileUri();

            // Load the action file
            String actionFilePath = RDFTestUtils.loadFile(actionFileUri);
            String actionBaseUriString = RDFTestUtils.getBaseUri(actionFileUri).toString();

            // Get format and create parser
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RDFTestUtils.guessFileFormat(actionFileUri);
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            // Load the result file
            String resultFilePath = RDFTestUtils.loadFile(resultFileUri);
            String resultBaseUriString = RDFTestUtils.getBaseUri(resultFileUri).toString();

            // Detect format of result file and create parser
            Model resultModel = RDFTestUtils.createModel();
            RDFFormat resultFormat = RDFTestUtils.guessFileFormat(resultFileUri);
            RDFParser resultParser = RDFTestUtils.createParser(resultFormat, resultModel);

            // Parser config for JSON-LD format
            if(actionFormat == RDFFormat.JSONLD || resultFormat == RDFFormat.JSONLD) {
                JSONLDOptions.Builder optionBuilder = new JSONLDOptions.Builder();
                if(testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class) != null) {
                    String baseUri = testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class);
                    optionBuilder.base(baseUri);
                    actionBaseUriString = baseUri;
                    resultBaseUriString = baseUri;
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

                if(actionFormat == RDFFormat.JSONLD) {
                    actionParser.setConfig(optionBuilder.build());
                }
                if (resultFormat == RDFFormat.JSONLD) {
                    resultParser.setConfig(optionBuilder.build());
                }
            }

            // Parse the input file
            try (FileReader reader = new FileReader(actionFilePath)) {
                actionParser.parse(reader, actionBaseUriString);
            }

            // Parse the result file
            try (FileReader reader = new FileReader(resultFilePath)) {
                resultParser.parse(reader, resultBaseUriString);
            }
    }
}