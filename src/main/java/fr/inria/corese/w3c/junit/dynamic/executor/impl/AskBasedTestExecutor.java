package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import com.apicatalog.jsonld.JsonLdVersion;
import fr.inria.corese.core.kgram.core.Mappings;
import fr.inria.corese.core.next.data.api.base.io.RDFFormat;
import fr.inria.corese.core.next.data.io.parser.RDFParser;
import fr.inria.corese.core.next.data.impl.io.common.JSONLDOptions;
import fr.inria.corese.core.next.data.impl.temp.CoreseModel;
import fr.inria.corese.core.query.QueryProcess;
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

    /**
     * Default constructor.
     */
    public AskBasedTestExecutor() {

    }

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

        // Get format and create parser
        CoreseModel actionModel = new CoreseModel();
        RDFFormat actionFormat = RDFTestUtils.guessFileFormat(actionFileUri);
        RDFParser actionParser = RDFTestUtils.createParser(actionFormat, actionModel);

        // Parser config for JSON-LD format
        if (actionFormat == RDFFormat.JSONLD) {
            JSONLDOptions.Builder optionBuilder = new JSONLDOptions.Builder();
            if (testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class) != null) {
                String baseUri = testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class);
                optionBuilder.base(baseUri);
                actionBaseUriString = baseUri;
            }
            if (testCase.getProperty(W3cTestCase.Property.SPEC_VERSION, String.class) != null) {
                String specVersion = testCase.getProperty(W3cTestCase.Property.SPEC_VERSION, String.class);
                if (specVersion.equals("json-ld-1.0")) {
                    optionBuilder.processingMode(JsonLdVersion.V1_0);
                }
                if (specVersion.equals("json-ld-1.1")) {
                    optionBuilder.processingMode(JsonLdVersion.V1_1);
                }
            }

            if (testCase.getProperty(W3cTestCase.Property.USE_NATIVE_TYPES, String.class) != null) {
                boolean usesNativeTypes = testCase.getProperty(W3cTestCase.Property.USE_NATIVE_TYPES, String.class).equals("true");
                optionBuilder.useNativeTypes(usesNativeTypes);
            }
            if (testCase.getProperty(W3cTestCase.Property.USE_RDF_TYPES, String.class) != null) {
                boolean useRdfType = testCase.getProperty(W3cTestCase.Property.USE_RDF_TYPES, String.class).equals("true");
                optionBuilder.useRdfType(useRdfType);
            }
            actionParser.setConfig(optionBuilder.build());
        }

        // Attempt to parse the input file
        try (FileReader reader = new FileReader(actionFilePath)) {
            actionParser.parse(reader, actionBaseUriString);
        }

        // Loading the query to a string
        String resultQueryString = Files.readString(Path.of(resultFilePath), StandardCharsets.UTF_8);

        // Executing the query
        QueryProcess queryProcess = QueryProcess.create(actionModel.getCoreseGraph());
        Mappings testQueryResult = queryProcess.query(resultQueryString);

        String expectedResultString = testCase.getProperty(W3cTestCase.Property.EXPECTED_BOOLEAN, String.class);
        if(expectedResultString != null) {
            boolean expectedResult = Boolean.parseBoolean(expectedResultString);
            if(testQueryResult.isEmpty() == expectedResult) {
                String msg = RDFTestUtils.formatErrorMessage(
                        "Expected query result to be " + expectedResultString + " but was " + ! testQueryResult.isEmpty() +".", testName, actionFileUri, resultFileUri, null);
                logger.error(msg);
                throw new AssertionError(msg);
            }
        } else if(testQueryResult.isEmpty()) {
            String msg = RDFTestUtils.formatErrorMessage(
                    "Expected query to find results but found none.", testName, actionFileUri, resultFileUri, null);
            logger.error(msg);
            throw new AssertionError(msg);
        }
    }
}
