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
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;

/**
 * Unified executor for negative RDF tests (both syntax and evaluation).
 * These tests should fail to parse and throw exceptions.
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

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();
        String baseUri = testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class);
        String actionBaseUriString = baseUri != null ? baseUri : actionFileUri.toString();

        try {
            String actionFilePath = RDFTestUtils.loadFile(actionFileUri);
            Model actionModel = RDFTestUtils.createModel();
            RDFFormat actionFormat = RDFTestUtils.guessFileFormat(actionFileUri);
            RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

            if (actionFormat == RDFFormat.JSONLD) {
                actionParser.setConfig(jsonLdOptions(testCase, baseUri));
            }

            try (FileReader reader = new FileReader(actionFilePath, java.nio.charset.StandardCharsets.UTF_8)) {
                actionParser.parse(reader, actionBaseUriString);
            }

            String msg = RDFTestUtils.formatErrorMessage(
                    "Expected parsing to fail but it succeeded", testName, actionFileUri, null, null);
            logger.error(msg);
            throw new AssertionError(msg);

        } catch (ParsingException e) {
            // Expected failure for negative tests
        }
    }

    private JSONLDOptions jsonLdOptions(W3cTestCase testCase, String baseUri) {
        JSONLDOptions.Builder builder = new JSONLDOptions.Builder();
        if (baseUri != null) {
            builder.base(baseUri);
        }
        String processingMode = testCase.getProperty(W3cTestCase.Property.PROCESSING_MODE, String.class);
        if ("json-ld-1.0".equals(processingMode)) {
            builder.processingMode(JsonLdVersion.V1_0);
        } else if ("json-ld-1.1".equals(processingMode)) {
            builder.processingMode(JsonLdVersion.V1_1);
        }
        builder.useNativeTypes("true".equals(testCase.getProperty(W3cTestCase.Property.USE_NATIVE_TYPES, String.class)));
        builder.useRdfType("true".equals(testCase.getProperty(W3cTestCase.Property.USE_RDF_TYPES, String.class)));
        builder.produceGeneralizedRdf("true".equals(testCase.getProperty(W3cTestCase.Property.PRODUCE_GENERALIZED_RDF, String.class)));
        String rdfDirection = testCase.getProperty(W3cTestCase.Property.RDF_DIRECTION, String.class);
        if (rdfDirection != null) {
            builder.rdfDirection(rdfDirection);
        }
        String expandContext = testCase.getProperty(W3cTestCase.Property.EXPAND_CONTEXT, String.class);
        if (expandContext != null) {
            builder.expandContext(URI.create(expandContext));
        }
        return builder.build();
    }
}
