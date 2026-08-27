package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import com.apicatalog.jsonld.JsonLdVersion;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.core.next.data.api.io.JSONLDOptions;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import fr.inria.corese.w3c.junit.dynamic.utils.ModelIsomorphism;

import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.security.NoSuchAlgorithmException;

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
        Model actionModel = loadModel(testCase.getActionFileUri(), testCase);
        Model resultModel = loadModel(testCase.getResultFileUri(), testCase);
        if (!ModelIsomorphism.areModelsIsomorphic(actionModel, resultModel)) {
            throw new AssertionError("RDF models differ for test: " + testCase.getName());
        }
    }

    private Model loadModel(URI fileUri, W3cTestCase testCase)
            throws IOException, NoSuchAlgorithmException {
        String filePath = RDFTestUtils.loadFile(fileUri);
        String baseUri = testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class);
        RDFFormat format = RDFTestUtils.guessFileFormat(fileUri);
        Model model = RDFTestUtils.createModel();
        RDFParser parser = RDFTestUtils.createParser(format, model);
        if (format == RDFFormat.JSONLD) {
            parser.setConfig(jsonLdOptions(testCase, baseUri));
        }
        try (FileReader reader = new FileReader(filePath)) {
            parser.parse(reader, baseUri != null ? baseUri : fileUri.toString());
        }
        return model;
    }

    private JSONLDOptions jsonLdOptions(W3cTestCase testCase, String baseUri) {
        JSONLDOptions.Builder builder = new JSONLDOptions.Builder();
        if (baseUri != null) builder.base(baseUri);
        String version = testCase.getProperty(W3cTestCase.Property.SPEC_VERSION, String.class);
        if ("json-ld-1.0".equals(version)) builder.processingMode(JsonLdVersion.V1_0);
        if ("json-ld-1.1".equals(version)) builder.processingMode(JsonLdVersion.V1_1);
        builder.useNativeTypes("true".equals(testCase.getProperty(W3cTestCase.Property.USE_NATIVE_TYPES, String.class)));
        builder.useRdfType("true".equals(testCase.getProperty(W3cTestCase.Property.USE_RDF_TYPES, String.class)));
        return builder.build();
    }
}
