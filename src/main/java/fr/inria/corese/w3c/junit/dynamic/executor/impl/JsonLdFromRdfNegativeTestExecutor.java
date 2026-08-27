package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import com.apicatalog.jsonld.JsonLdVersion;
import fr.inria.corese.core.next.data.api.io.JSONLDOptions;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.core.next.data.api.io.serializer.RDFSerializer;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.io.CoreseIO;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;

import java.io.FileReader;
import java.io.StringWriter;
import java.net.URI;

/**
 * Specialized executor for JSON-LD FromRDF negative evaluation tests.
 * Workflow:
 * 1. Parse input RDF dataset (action file) into a Model
 * 2. Attempt to serialize the Model to JSON-LD using JSONLDSerializer
 * 3. Expect serialization to throw an exception
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

        try {
            serializer.write(writer);
        } catch (Exception e) {
            // Expected failure during serialization
            return;
        }

        throw new AssertionError("Expected fromRdf serialization to fail but it succeeded. Test: "
                + testCase.getName() + ". Action: " + actionFileUri);
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
