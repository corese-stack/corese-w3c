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
import fr.inria.corese.w3c.junit.dynamic.utils.ModelIsomorphism;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import fr.inria.corese.w3c.junit.dynamic.utils.RdfFormatDetector;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileReader;
import java.net.URI;

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

    private static final String RDF11 = "rdf11/";
    private static final String URL_RDF11 = "https://w3c.github.io/rdf-tests/rdf/";

    /**
     * Default constructor
     */
    public RdfPositiveEvaluationTestExecutor() {
    }

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        // Extract needed information from test case
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();
        URI resultFileUri = testCase.getResultFileUri();

        try {
            // Load the action file
            String actionFilePath = RDFTestUtils.loadFile(actionFileUri);

            // Get format and create parser
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RDFTestUtils.guessFileFormat(actionFileUri);
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            // Load the result file
            String resultFilePath = RDFTestUtils.loadFile(resultFileUri);

            // Detect format of result file and create parser
            Model resultModel = RDFTestUtils.createModel();
            RDFFormat resultFormat = RDFTestUtils.guessFileFormat(resultFileUri);
            RDFParser resultParser = RDFTestUtils.createParser(resultFormat, resultModel);

            // Parser config for JSON-LD format
            if(actionFormat == RDFFormat.JSONLD || resultFormat == RDFFormat.JSONLD) {
                TitaniumJSONLDProcessorOption.Builder optionBuilder = new TitaniumJSONLDProcessorOption.Builder();
                if(testCase.getProperty("baseUri", String.class) != null) {
                    String baseUri = testCase.getProperty("baseUri", String.class);
                    optionBuilder.base(baseUri);
                }
                if(testCase.getProperty("specVersion", String.class) != null) {
                    String specVersion = testCase.getProperty("specVersion", String.class);
                    if(specVersion.equals("json-ld-1.0")) {
                        optionBuilder.processingMode(JsonLdVersion.V1_0);
                    }
                    if(specVersion.equals("json-ld-1.1")) {
                        optionBuilder.processingMode(JsonLdVersion.V1_1);
                    }
                }

                if(testCase.getProperty("useNativeTypes", String.class) != null) {
                    boolean usesNativeTypes = testCase.getProperty("useNativeTypes", String.class).equals("true");
                    optionBuilder.useNativeTypes(usesNativeTypes);
                }
                if(testCase.getProperty("useRdfType", String.class) != null) {
                    boolean useRdfType = testCase.getProperty("useRdfType", String.class).equals("true");
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
                actionParser.parse(reader);
            }

            // Parse the result file
            try (FileReader reader = new FileReader(resultFilePath)) {
                resultParser.parse(reader, baseUriForResult);
            }

            // Test //
            if (!ModelIsomorphism.areModelsIsomorphic(actionModel, resultModel)) {
                String msg = RDFTestUtils.formatErrorMessage(
                        "Positive evaluation test failed - models are not isomorphic",
                        testName, actionFileUri, resultFileUri, null);
                logger.error(msg);
                throw new AssertionError(msg);
            }

        } catch (ParsingErrorException e) {
            String msg = RDFTestUtils.formatErrorMessage(
                    "Positive evaluation test failed - parsing error",
                    testName, actionFileUri, resultFileUri, e);
            logger.error(msg, e);
            throw new AssertionError(msg);
        }
    }

    /**
     * Converts a local file URI to the corresponding W3C test URI.
     *
     * @param localFileUri local file URI
     * @return W3C canonical URI
     */
    private String convertToW3cUri(URI localFileUri) {
        String path = localFileUri.toString();

        int rdf11Index = path.indexOf(RDF11);

        if (rdf11Index != -1) {
            String relativePath = path.substring(rdf11Index);
            return URL_RDF11 + relativePath;
        }

        logger.warn("Could not convert local URI to W3C URI: {}", path);
        return path;
    }
}