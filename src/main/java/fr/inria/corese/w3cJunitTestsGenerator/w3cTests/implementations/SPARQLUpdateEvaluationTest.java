package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.IW3cTest;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestFileManager;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Path;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class SPARQLUpdateEvaluationTest implements IW3cTest {

    private static final Logger logger = LoggerFactory.getLogger(SPARQLUpdateEvaluationTest.class);

    private URI manifestUri;
    private String testUri;
    private String name;
    private String testName;
    private String comment;
    private Set<String> requestFileList;
    private Set<String> actionDataFileList;
    private Set<String> resultDataFileList;
    private Map<String, String> actionGraphMap;
    private Map<String, String> resultGraphMap;

    public SPARQLUpdateEvaluationTest(URI manifestUri, String testUri, String name, String comment, Set<String> requestFileList) {
        this(manifestUri, testUri, name, comment, requestFileList, new HashSet<>(), new HashSet<>(), new HashMap<>(), new HashMap<>());
    }

    public SPARQLUpdateEvaluationTest(URI manifestUri, String testUri, String name, String comment, Set<String> requestFileList, Set<String> actionDataFileList, Set<String> resultDataFileList) {
        this(manifestUri, testUri, name, comment, requestFileList, actionDataFileList, resultDataFileList, new HashMap<>(), new HashMap<>());
    }

    public SPARQLUpdateEvaluationTest(URI manifestUri, String testUri, String name, String comment, Set<String> requestFileList, Set<String> actionDataFileList, Set<String> resultDataFileList, Map<String, String> actionGraphMap, Map<String, String> resultGraphMap) {
        this.manifestUri = manifestUri;
        this.testUri = testUri;
        this.name = name;
        this.testName = TestUtils.extractLongTestName(testUri);
        this.comment = comment;
        this.requestFileList = requestFileList;
        this.actionDataFileList = actionDataFileList;
        this.resultDataFileList = resultDataFileList;
        this.actionGraphMap = actionGraphMap;
        this.resultGraphMap = resultGraphMap;

        try {
            for(String requestFilename : requestFileList) {
                TestFileManager.loadFile(URI.create(requestFilename));
            }
            for(String actionDataFilename : actionDataFileList) {
                TestFileManager.loadFile(URI.create(actionDataFilename));
            }
            for(String resultDataFilename : resultDataFileList) {
                TestFileManager.loadFile(URI.create(resultDataFilename));
            }
            for(String actionGraphFile : actionGraphMap.values()) {
                TestFileManager.loadFile(URI.create(actionGraphFile));
            }
            for(String resultGraphFile : resultGraphMap.values()) {
                TestFileManager.loadFile(URI.create(resultGraphFile));
            }
        } catch (IOException | NoSuchAlgorithmException e) {
            logger.error("Error during test file loading", e);
        }
    }

    @Override
    public Set<String> getImports() {
        return Set.of("fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestFileManager",
                "fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils",
                "fr.inria.corese.core.Graph",
                "fr.inria.corese.core.GraphStore",
                "fr.inria.corese.core.load.Load",
                "fr.inria.corese.core.query.QueryProcess",
                "fr.inria.corese.core.sparql.exceptions.EngineException",
                "java.io.BufferedReader",
                "java.io.FileReader",
                "java.io.FileNotFoundException",
                "java.nio.file.Path",
                "static org.junit.Assert.assertEquals",
                "static org.junit.Assert.assertTrue");
    }

    @Override
    public String generate() {
        String loadQueryFilename = this.testName + ".load.rq";

        StringBuilder sb = new StringBuilder();
        // Header of the test
        sb.append("    // ").append(TestUtils.sanitizeComment(this.name)).append(" SPARQL Update Evaluation Test\n");
        sb.append("    // ").append(this.testUri).append("\n");
        if (!this.comment.isEmpty()) {
            String sanitizedComment = TestUtils.sanitizeComment(this.comment);
            sb.append("    // ").append(sanitizedComment).append("\n");
        }
        sb.append("    @Test\n");
        sb.append("    public void ").append(testName);
        sb.append("() throws LoadException, EngineException, FileNotFoundException {\n");

        sb.append("\n");
        sb.append("\n");
        sb.append("        GraphStore kbRef = GraphStore.create();\n");
        sb.append("        Load refLoader = Load.create(kbRef);\n");
        for(String actionDataFile : this.actionDataFileList) {
            sb.append("        refLoader.parse(\"").append(TestFileManager.getLocalFilePath(URI.create(actionDataFile))).append("\");\n");
        }
        sb.append("\n");
        int refGraphnumber = 0;
        for(Map.Entry<String, String> namedGraphEntry : this.actionGraphMap.entrySet()) {
            Path namedGraphFilename = TestFileManager.getLocalFilePath(URI.create(namedGraphEntry.getValue()));
            String namedGraphName = namedGraphEntry.getKey();
            sb.append("        Graph refGraph").append(refGraphnumber).append(" = Graph.create();\n");
            sb.append("        Load refGraph").append(refGraphnumber).append("Loader = Load.create(refGraph").append(refGraphnumber).append(");\n");
            sb.append("        refGraph").append(refGraphnumber).append("Loader.parse(\"").append(namedGraphFilename).append("\");\n");
            sb.append("        kbRef.setNamedGraph(\"").append(namedGraphName).append("\", refGraph").append(refGraphnumber).append(");\n");
            sb.append("\n");
            refGraphnumber++;
        }
        sb.append("\n");
        sb.append("        GraphStore kbResult = GraphStore.create();\n");
        sb.append("        Load resultLoader = Load.create(kbResult);\n");
        for(String resultDataFile : this.resultDataFileList) {
            sb.append("        resultLoader.parse(\"").append(TestFileManager.getLocalFilePath(URI.create(resultDataFile))).append("\");\n");
        }
        sb.append("\n");
        int resultGraphnumber = 0;
        for(Map.Entry<String, String> namedGraphEntry : this.resultGraphMap.entrySet()) {
            Path namedGraphFilename = TestFileManager.getLocalFilePath(URI.create(namedGraphEntry.getValue()));
            String namedGraphName = namedGraphEntry.getKey();
            sb.append("        Graph resultGraph").append(resultGraphnumber).append(" = Graph.create();\n");
            sb.append("        Load resultGraph").append(resultGraphnumber).append("Loader = Load.create(resultGraph").append(resultGraphnumber).append(");\n");
            sb.append("        resultGraph").append(resultGraphnumber).append("Loader.parse(\"").append(namedGraphFilename).append("\");\n");
            sb.append("        kbResult.setNamedGraph(\"").append(namedGraphName).append("\", resultGraph").append(resultGraphnumber).append(");\n");
            sb.append("\n");
            resultGraphnumber++;
        }
        sb.append("        QueryProcess resultQueryProcess = QueryProcess.create(kbResult);\n");
        int queryNumber = 0;
        for(String queryFilename : this.requestFileList) {
            sb.append("        BufferedReader query").append(queryNumber).append("Reader = new BufferedReader(new FileReader(\"").append(TestFileManager.getLocalFilePath(URI.create(queryFilename))).append("\"));\n");
            sb.append("        String query").append(queryNumber).append("String = query").append(queryNumber).append("Reader.toString();\n");
            sb.append("        resultQueryProcess.query(query").append(queryNumber).append("String);\n");
            queryNumber++;
        }
        sb.append("\n");
        sb.append("        assertEquals(0, TestUtils.graphStoreContentCompare(kbRef, kbResult));\n");
        sb.append("}\n");

        return sb.toString();
    }
}
