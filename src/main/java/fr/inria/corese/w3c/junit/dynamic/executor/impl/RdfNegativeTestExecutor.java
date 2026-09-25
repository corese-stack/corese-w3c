package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.io.FileReader;
import java.net.URI;
import java.util.Objects;

import com.apicatalog.jsonld.JsonLdError;
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
 * Unified executor for negative RDF tests (both syntax and evaluation).
 * These tests should fail to parse and throw exceptions.
 * For JSON-LD negative tests, validates that the thrown exception strictly matches the expected error code.
 */
public class RdfNegativeTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(RdfNegativeTestExecutor.class);

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

        } catch (InfrastructureException | AssertionError e) {
            throw e;
        } catch (ParsingException e) {
            String expectedError = testCase.getProperty(W3cTestCase.Property.RESULT, String.class);
            if (expectedError != null && !expectedError.isBlank() && !strictErrorMatches(e, expectedError)) {
                String msg = String.format(
                        "Negative test '%s' threw unexpected error code.%nExpected errorCode: %s%nGot error: %s",
                        testName, expectedError, extractFullErrorMessage(e));
                logger.error(msg, e);
                throw new AssertionError(msg, e);
            }
        }
    }

    private static boolean strictErrorMatches(Throwable root, String expectedErrorCode) {
        Objects.requireNonNull(expectedErrorCode, "expectedErrorCode cannot be null");
        String normExpected = normalizeCode(expectedErrorCode);
        Throwable t = root;
        while (t != null) {
            if (t instanceof JsonLdError jsonLdError && jsonLdError.getCode() != null) {
                String normActual = normalizeCode(jsonLdError.getCode().name());
                return normActual.equals(normExpected);
            }
            if (t.getMessage() != null) {
                String normActual = normalizeCode(t.getMessage());
                if (normActual.equals(normExpected)) {
                    return true;
                }
            }
            t = t.getCause();
        }
        return false;
    }

    private static String extractFullErrorMessage(Throwable t) {
        StringBuilder sb = new StringBuilder();
        while (t != null) {
            if (t.getMessage() != null) {
                sb.append(t.getMessage()).append(" ");
            }
            t = t.getCause();
        }
        return sb.toString().trim();
    }

    private static String normalizeCode(String code) {
        if (code == null) return "";
        return code.toLowerCase()
                .replaceAll("(?i)[@_\\s-]|keyword", "")
                .replaceAll("[^a-z0-9]", "");
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
