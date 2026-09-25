package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import com.apicatalog.jsonld.JsonLdError;
import com.apicatalog.jsonld.JsonLdVersion;
import fr.inria.corese.core.next.data.api.io.JSONLDOptions;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.core.next.data.api.io.serializer.RDFSerializer;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.io.CoreseIO;
import fr.inria.corese.w3c.junit.dynamic.executor.InfrastructureException;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;

import java.io.FileReader;
import java.io.StringWriter;
import java.net.URI;
import java.util.Objects;

/**
 * Specialized executor for JSON-LD FromRDF negative evaluation tests.
 * Workflow:
 * 1. Parse input RDF dataset (action file) into a Model
 * 2. Attempt to serialize the Model to JSON-LD using JSONLDSerializer
 * 3. Expect serialization to throw an exception strictly matching expectErrorCode if specified
 */
public class JsonLdFromRdfNegativeTestExecutor implements TestExecutor {

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        URI actionFileUri = testCase.getActionFileUri();
        String actionFilePath = RDFTestUtils.loadFile(actionFileUri);
        String baseUri = testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class);
        RDFFormat format = RDFTestUtils.guessFileFormat(actionFileUri);

        Model model = RDFTestUtils.createModel();
        RDFParser parser = RDFTestUtils.createParser(format, model);
        try (FileReader reader = new FileReader(actionFilePath, java.nio.charset.StandardCharsets.UTF_8)) {
            parser.parse(reader, baseUri != null ? baseUri : actionFileUri.toString());
        }

        JSONLDOptions jsonldOptions = buildJsonLdOptions(testCase, baseUri);
        StringWriter writer = new StringWriter();
        RDFSerializer serializer = CoreseIO.serializer(model, RDFFormat.JSONLD, jsonldOptions);

        String expectedError = testCase.getProperty(W3cTestCase.Property.RESULT, String.class);

        try {
            serializer.write(writer);
        } catch (InfrastructureException e) {
            throw e;
        } catch (Exception e) {
            if (expectedError != null && !expectedError.isBlank() && !strictErrorMatches(e, expectedError)) {
                throw new AssertionError(String.format(
                        "JSON-LD fromRdf test '%s' threw unexpected error.%nExpected errorCode: %s%nGot message: %s",
                        testCase.getName(), expectedError, extractFullErrorMessage(e)), e);
            }
            return;
        }

        throw new AssertionError("Expected fromRdf serialization to fail but it succeeded. Test: "
                + testCase.getName() + ". Action: " + actionFileUri);
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

    private JSONLDOptions buildJsonLdOptions(W3cTestCase testCase, String baseUri) {
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
        return builder.build();
    }
}
