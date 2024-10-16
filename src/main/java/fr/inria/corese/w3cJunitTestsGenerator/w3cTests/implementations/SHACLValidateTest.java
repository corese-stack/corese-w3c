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
 * Class for the tests that check the correct validation of SHACL shapes
 */
public class SHACLValidateTest implements IW3cTest {

    private static final Logger logger = LoggerFactory.getLogger(SHACLValidateTest.class);

    private String testUri;
    private String test;
    private String name;
    private String comment;

    private URI dataGraph;
    private URI shapeGraph;

    private String conformity = null;

    /**
     *
     * @param testUri Uri of the test resource from its manifest file
     * @param name Name of the test (typically the end of its URI)
     * @param comment Comment literal from the manifest
     * @param dataGraph URI object of mf:action in the manifest
     * @param shapeGraph URI object of mf:result in the manifest
     */
    public SHACLValidateTest(String testUri, String name, String comment, URI dataGraph, URI shapeGraph) {
        this.testUri = testUri;
        this.test = TestUtils.extractLongTestName(testUri);
        this.name = name;
        this.comment = comment;
        this.dataGraph = dataGraph;
        this.shapeGraph = shapeGraph;

        try {
            if(dataGraph.toString().compareTo(testUri) != 0) {
                TestFileManager.loadFile(dataGraph);
            }
            if(shapeGraph.toString().compareTo(testUri) != 0) {
                TestFileManager.loadFile(shapeGraph);
            }
        } catch (IOException | NoSuchAlgorithmException e) {
            logger.error("Error during test file loading", e);
        }
    }

    public SHACLValidateTest(String test, String name, String comment, URI dataGraph, URI shapeGraph, String conformity) {
        this(test, name, comment, dataGraph, shapeGraph);
        this.conformity = conformity;
    }

    @Override
    public Set<String> getImports() {
        return Set.of("fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestFileManager",
                "fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils",
                "fr.inria.corese.core.Graph",
                "fr.inria.corese.core.GraphStore",
                "fr.inria.corese.core.kgram.core.Mappings",
                "fr.inria.corese.core.load.Load",
                "fr.inria.corese.core.load.LoadException",
                "fr.inria.corese.core.query.QueryProcess",
                "fr.inria.corese.core.sparql.exceptions.EngineException",
                "java.io.IOException",
                "java.net.URISyntaxException",
                "java.net.URI",
                "java.nio.file.Path",
                "java.security.NoSuchAlgorithmException",
                "static org.junit.Assert.assertEquals",
                "static org.junit.Assert.assertTrue");
    }

    @Override
    public String generate() {

        String longtestName = TestUtils.extractLongTestName(this.testUri);
        StringBuilder sb = new StringBuilder();

        // Header of the test
        sb.append("    // ").append(this.name).append("\n");
        if (!this.comment.isEmpty()) {
            String sanitizedComment = TestUtils.sanitizeComment(this.comment);
            sb.append("    // ").append(sanitizedComment).append("\n");
        }
        sb.append("    @Test\n");
        sb.append("    public void ").append(longtestName);
        sb.append("() throws IOException, InterruptedException, LoadException, EngineException {\n");

        // Test body
        sb.append("        // Load action file\n");
        sb.append("        Path localDataFile = TestFileManager.getLocalFilePath(URI.create(\"").append(TestFileManager.getLocalFilePath(this.dataGraph)).append("\"));\n");
        sb.append("        Path localShapeFile = TestFileManager.getLocalFilePath(URI.create(\"").append(TestFileManager.getLocalFilePath(this.shapeGraph)).append("\"));\n");
        sb.append("        Path validationReportFilePath = Path.of(\"").append(TestFileManager.RESOURCE_PATH_STRING).append(longtestName).append("Report.ttl\");\n");
        sb.append("\n");
        sb.append("        // Validation of the data file with the shape file\n");
        sb.append("        Process actionValidationCommand = new ProcessBuilder().inheritIO().command(\n");
        sb.append("                \"java\", \"-jar\", \"src/test/resources/corese-command.jar\", \"shacl\",\n"); // FIXME To be replaced by the latest corese-command release
        sb.append("                \"-i\", \"").append(TestFileManager.getLocalFilePath(URI.create(this.dataGraph.toString()))).append("\",\n");
        sb.append("                \"-s\", \"").append(TestFileManager.getLocalFilePath(URI.create(this.shapeGraph.toString()))).append("\",\n");
        sb.append("                \"-a\", \"turtle\",\n");
        sb.append("                \"-o\", validationReportFilePath.toString())\n");
        sb.append("            .start();\n");
        sb.append("        int validationExitCode = actionValidationCommand.waitFor();\n");
        sb.append("        assertEquals(0, validationExitCode);\n");
        sb.append("\n");
        if(this.conformity != null && this.conformity.equals("true")) {
            sb.append("        Graph resultGraph = Graph.create();\n");
            sb.append("        resultGraph.init();\n");
            sb.append("        Load resultLoader = Load.create(resultGraph);\n");
            sb.append("        resultLoader.parse(validationReportFilePath.toString());\n");
            sb.append("        QueryProcess exec = QueryProcess.create(resultGraph);\n");
            sb.append("        boolean checkIfValidationIsSuccessfull = ! exec.query(TestUtils.generateSHACLSuccessfullValidationReport()).isEmpty();\n");
            sb.append("        assertTrue(checkIfValidationIsSuccessfull);\n");
        } else {
            sb.append("        GraphStore graphStore = GraphStore.create();\n");
            sb.append("        Graph referenceGraph = Graph.create();\n");
            sb.append("        referenceGraph.init();\n");
            sb.append("        Load referenceLoader = Load.create(referenceGraph);\n");
            sb.append("        referenceLoader.parse(localDataFile.toString());\n");
            sb.append("        referenceLoader.parse(localShapeFile.toString());\n");
            sb.append("\n");
            sb.append("        Graph resultGraph = Graph.create();\n");
            sb.append("        resultGraph.init();\n");
            sb.append("        Load resultLoader = Load.create(resultGraph);\n");
            sb.append("        resultLoader.parse(validationReportFilePath.toString());\n");
            sb.append("        graphStore.setNamedGraph(\"http://corese.inria.fr/reference\", referenceGraph);\n");
            sb.append("        graphStore.setNamedGraph(\"http://corese.inria.fr/result\", resultGraph);\n");
            sb.append("\n");
            sb.append("        QueryProcess exec = QueryProcess.create(graphStore);\n");
            sb.append("        boolean checkIfRefAreInResultSPARQLQuery = ! exec.query(TestUtils.generateSHACLCheckIfRefAreInResultSPARQLQuery()).isEmpty();\n");
            sb.append("        boolean checkIfResultsAreInRefSPARQLQuery = ! exec.query(TestUtils.generateSHACLCheckIfResultsAreInRefSPARQLQuery()).isEmpty();\n");
            sb.append("        boolean checkIfResultsAreNotInRefSPARQLQuery = exec.query(TestUtils.generateSHACLCheckIfResultsAreNotInRefSPARQLQuery()).isEmpty();\n");
            sb.append("        boolean checkIfRefAreNotInResultSPARQLQuery = exec.query(TestUtils.generateSHACLCheckIfRefAreNotInResultSPARQLQuery()).isEmpty();\n");
            sb.append("\n");
            sb.append("        assertTrue(checkIfRefAreInResultSPARQLQuery);\n");
            sb.append("        assertTrue(checkIfResultsAreInRefSPARQLQuery);\n");
            sb.append("        assertTrue(checkIfResultsAreNotInRefSPARQLQuery);\n");
            sb.append("        assertTrue(checkIfRefAreNotInResultSPARQLQuery);\n");
        }

        // Footer of the test
        sb.append("    }\n");

        return sb.toString();
    }
}
