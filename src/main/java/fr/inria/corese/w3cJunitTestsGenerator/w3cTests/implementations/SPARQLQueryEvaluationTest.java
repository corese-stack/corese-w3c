package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.IW3cTest;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestFileManager;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.security.NoSuchAlgorithmException;
import java.util.Set;

/**
 * Generates a test that will check if corese-command queries a file and returns the expected output
 */
public class SPARQLQueryEvaluationTest implements IW3cTest {

    private static final Logger logger = LoggerFactory.getLogger(SPARQLQueryEvaluationTest.class);

    private String testUri;
    private String testName;
    private String name;
    private String comment;

    private URI resultFile;
    private URI dataFile = null;
    private URI queryFile;

    /**
     *
     * @param testUri Uri of the test resource from its manifest file
     * @param name Name of the test (typically the end of its URI)
     * @param comment Comment literal from the manifest
     * @param resultFile Uri of the file object of the mf:result property
     * @param queryFile Uri of the file object of the qt:query property linked to the action resource
     */
    public SPARQLQueryEvaluationTest(String testUri, String name, String comment, URI resultFile, URI queryFile) {
        this.testUri = testUri;
        this.testName = TestUtils.extractLongTestName(testUri);
        this.name = name;
        this.comment = comment;
        this.resultFile = resultFile;
        this.queryFile = queryFile;

        try {
            TestFileManager.loadFile(resultFile);
            TestFileManager.loadFile(queryFile);
        } catch (IOException | NoSuchAlgorithmException e) {
            logger.error("Error during test file loading", e);
        }
    }

    /**
     *
     * @param testUri Uri of the test resource from its manifest file
     * @param name Name of the test (typically the end of its URI)
     * @param comment Comment literal from the manifest
     * @param resultFile Uri of the file object of the mf:result property
     * @param queryFile Uri of the file object of the qt:query property linked to the action resource
     */
    public SPARQLQueryEvaluationTest(String testUri, String name, String comment, URI dataFile, URI resultFile, URI queryFile) {
        this(testUri, name, comment, resultFile, queryFile);
        this.dataFile = dataFile;
        try {
            TestFileManager.loadFile(dataFile);
        } catch (IOException | NoSuchAlgorithmException e) {
            logger.error("Error during test file loading", e);
        }
    }

    @Override
    public Set<String> getImports() {
        return Set.of("fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestFileManager",
                "fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils",
                "fr.inria.corese.core.load.LoadException",
                "javax.xml.parsers.ParserConfigurationException",
                "javax.xml.xpath.XPathExpressionException",
                "java.io.IOException",
                "java.net.URISyntaxException",
                "java.net.URI",
                "java.nio.file.Path",
                "java.security.NoSuchAlgorithmException",
                "org.xml.sax.SAXException",
                "static org.junit.Assert.assertEquals",
                "static org.junit.Assert.assertTrue");
    }

    @Override
    public String generate() {
        StringBuilder sb = new StringBuilder();

        String formatArgumentString = "xml";
        String localResultFile = TestFileManager.RESOURCE_PATH_STRING + this.testName  + ".xml";
        if(this.resultFile.toString().endsWith("ttl")) {
            localResultFile = TestFileManager.RESOURCE_PATH_STRING + this.testName  + ".ttl";
            formatArgumentString = "turtle";
        } else if(this.resultFile.toString().endsWith("tsv")) {
            localResultFile = TestFileManager.RESOURCE_PATH_STRING + this.testName  + ".tsv";
            formatArgumentString = "tsv";
        } else if(this.resultFile.toString().endsWith("csv")) {
            localResultFile = TestFileManager.RESOURCE_PATH_STRING + this.testName  + ".csv";
            formatArgumentString = "csv";
        } else if(this.resultFile.toString().endsWith("srj") || this.resultFile.toString().endsWith("json")) {
            localResultFile = TestFileManager.RESOURCE_PATH_STRING + this.testName  + ".json";
            formatArgumentString = "json";
        }

        // Header of the test
        sb.append("    // ").append(TestUtils.sanitizeComment(this.name)).append(" SPARQL Evaluation Test\n");
        sb.append("    // ").append(this.testUri).append("\n");
        if(this.resultFile.toString().endsWith("ttl")) {
            sb.append("    // FIXME Turtle SPARQL result format is non-standard. See http://www.w3.org/2001/sw/DataAccess/tests/result-set#\n");
        }
        if (!this.comment.isEmpty()) {
            String sanitizedComment = TestUtils.sanitizeComment(this.comment);
            sb.append("    // ").append(sanitizedComment).append("\n");
        }
        sb.append("    @Test\n");
        sb.append("    public void ").append(testName);
        sb.append("() throws IOException, NoSuchAlgorithmException, InterruptedException, XPathExpressionException, ParserConfigurationException, SAXException {\n");

        // Test body
        sb.append("        // Load action file\n");
        sb.append("        Process command = new ProcessBuilder().inheritIO().command(\n");
        sb.append("                \"java\", \"-jar\", \"src/test/resources/corese-command.jar\", \"sparql\",\n"); // FIXME To be replaced by the latest corese-command release
        if(this.dataFile != null) {
            sb.append("                \"-i\", \"").append(TestFileManager.getLocalFilePath(this.dataFile)).append("\",\n");
        } else {
            sb.append("                \"-i\", \"").append(TestUtils.SAMPLE_DATA_FILE_PATH_STRING).append("\",\n");
        }
        sb.append("                \"-if\", \"turtle\",\n");
        sb.append("                \"-of\", \"").append(formatArgumentString).append("\",\n");
        sb.append("                \"-o\", \"").append(localResultFile).append("\",\n");

        sb.append("                \"-q\", \"").append(TestFileManager.getLocalFilePath(this.queryFile)).append("\")\n");
        sb.append("            .start();\n");
        sb.append("        assertEquals(0, command.waitFor());\n");
        if( this.resultFile.toString().endsWith("xml") || this.resultFile.toString().endsWith("rdf") || this.resultFile.toString().endsWith("srx")) {
            sb.append("        boolean comparison = TestUtils.compareXMLSparqlResultFiles(Path.of(\"");
        } else if(this.resultFile.toString().endsWith("srj") || this.resultFile.toString().endsWith("json") || this.resultFile.toString().endsWith("jsonld")) {
            sb.append("        boolean comparison = TestUtils.jsonFilesAreEqual(Path.of(\"");
        } else {
            sb.append("        boolean comparison = TestUtils.compareFilesLineByLine(Path.of(\"");
        }
        sb.append(TestFileManager.getLocalFilePath(this.resultFile)).append("\"), Path.of(\"");
        sb.append(localResultFile).append("\"));\n");
        sb.append("        assertTrue(comparison);\n");

        // Footer of the test
        sb.append("    }\n");

        return sb.toString();
    }
}
