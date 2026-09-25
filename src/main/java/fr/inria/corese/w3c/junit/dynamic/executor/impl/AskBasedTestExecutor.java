package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import com.apicatalog.jsonld.JsonLdVersion;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.core.next.data.api.io.JSONLDOptions;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.query.Repositories;
import fr.inria.corese.core.next.query.api.repository.Repository;
import fr.inria.corese.core.next.query.api.repository.RepositoryConnection;
import fr.inria.corese.core.next.storage.Storages;
import fr.inria.corese.core.next.storage.StorageModels;
import fr.inria.corese.core.next.storage.api.StorageManager;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileReader;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * Executor for tests that are based on the loading of an RDF file and the execution of an ASK query against it. The test succeeds if the query returns the expected result or true if no expected result was given.
 */
public class AskBasedTestExecutor implements TestExecutor {

    private static final Logger logger = LoggerFactory.getLogger(AskBasedTestExecutor.class);

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        // Extract needed information from test case
        String testName = testCase.getName();
        URI actionFileUri = testCase.getActionFileUri();
        String actionBaseUriString = RDFTestUtils.getBaseUri(actionFileUri).toString();

        URI resultFileUri = testCase.getResultFileUri();

        // Load the action file
        String actionFilePath = RDFTestUtils.loadFile(actionFileUri);
        // Load the result file
        String resultFilePath = RDFTestUtils.loadFile(resultFileUri);

        // Create storage + model for this test (pure next API, no legacy Graph)
        StorageManager storage = Storages.create();
        Model actionModel = StorageModels.create(storage);

        // Get format and create parser
        RDFFormat actionFormat = RDFTestUtils.guessFileFormat(actionFileUri);
        RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

        if (actionFormat == RDFFormat.JSONLD) {
            actionBaseUriString = configureJsonLdOptions(actionParser, testCase, actionBaseUriString);
        }

        // Attempt to parse the input file
        try (FileReader reader = new FileReader(actionFilePath)) {
            actionParser.parse(reader, actionBaseUriString);
        }

        // Loading the query to a string
        String resultQueryString = Files.readString(Path.of(resultFilePath), StandardCharsets.UTF_8);

        // Execute the ASK query against the repository sharing the model storage.
        boolean testQueryResult;
        try (Repository repo = Repositories.create(storage);
             RepositoryConnection conn = repo.getConnection()) {
            testQueryResult = conn.prepareBooleanQuery(resultQueryString).evaluate();
        }

        String expectedResultString = testCase.getProperty(W3cTestCase.Property.EXPECTED_BOOLEAN, String.class);
        boolean expectedResult = expectedResultString == null || Boolean.parseBoolean(expectedResultString);
        if (testQueryResult != expectedResult) {
            String msg = RDFTestUtils.formatErrorMessage(
                    "Expected query result to be " + expectedResult + " but was " + testQueryResult + ".", testName, actionFileUri, resultFileUri, null);
            logger.error(msg);
            throw new AssertionError(msg);
        }
    }

    private String configureJsonLdOptions(RDFParser actionParser, W3cTestCase testCase, String defaultBaseUri) {
        JSONLDOptions.Builder optionBuilder = new JSONLDOptions.Builder();
        String baseUri = testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class);
        String effectiveBaseUri = defaultBaseUri;
        if (baseUri != null) {
            optionBuilder.base(baseUri);
            effectiveBaseUri = baseUri;
        }

        String specVersion = testCase.getProperty(W3cTestCase.Property.SPEC_VERSION, String.class);
        if ("json-ld-1.0".equals(specVersion)) {
            optionBuilder.processingMode(JsonLdVersion.V1_0);
        } else if ("json-ld-1.1".equals(specVersion)) {
            optionBuilder.processingMode(JsonLdVersion.V1_1);
        }

        String useNativeTypes = testCase.getProperty(W3cTestCase.Property.USE_NATIVE_TYPES, String.class);
        if (useNativeTypes != null) {
            optionBuilder.useNativeTypes("true".equals(useNativeTypes));
        }

        String useRdfType = testCase.getProperty(W3cTestCase.Property.USE_RDF_TYPES, String.class);
        if (useRdfType != null) {
            optionBuilder.useRdfType("true".equals(useRdfType));
        }

        actionParser.setConfig(optionBuilder.build());
        return effectiveBaseUri;
    }
}
