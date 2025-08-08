package fr.inria.corese.w3c.junit.w3ctests.implementations;

import fr.inria.corese.w3c.junit.w3ctests.IW3cTest;
import fr.inria.corese.w3c.junit.w3ctests.TestFileManager;
import fr.inria.corese.w3c.junit.w3ctests.TestUtils;
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


/**
 * Represents a W3C SPARQL Update Evaluation Test.
 * This test verifies that a SPARQL Update query, when executed against a set of initial graphs,
 * produces a set of resulting graphs that match a predefined expected set of graphs.
 * It handles both default and named graphs for initial and result states.
 */
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

    /**
     * Constructs a new SPARQLUpdateEvaluationTest.
     * This constructor is used when only the request files (update queries) are specified,
     * assuming no initial or expected result data/named graphs.
     *
     * @param manifestUri The URI of the manifest file that declares this test.
     * @param testUri The URI of the test resource from its manifest file.
     * @param name The name of the test (typically extracted from its URI).
     * @param comment A descriptive comment for the test.
     * @param requestFileList A set of URIs (as Strings) of the SPARQL Update request files.
     */
    public SPARQLUpdateEvaluationTest(URI manifestUri, String testUri, String name, String comment, Set<String> requestFileList) {
        this(manifestUri, testUri, name, comment, requestFileList, new HashSet<>(), new HashSet<>(), new HashMap<>(), new HashMap<>());
    }

    /**
     * Constructs a new SPARQLUpdateEvaluationTest.
     * This constructor is used when initial data files and expected result data files are provided,
     * in addition to the update request files, but no named graphs are involved.
     *
     * @param manifestUri The URI of the manifest file that declares this test.
     * @param testUri The URI of the test resource from its manifest file.
     * @param name The name of the test (typically extracted from its URI).
     * @param comment A descriptive comment for the test.
     * @param requestFileList A set of URIs (as Strings) of the SPARQL Update request files.
     * @param actionDataFileList A set of URIs (as Strings) of the initial default graph data files.
     * @param resultDataFileList A set of URIs (as Strings) of the expected result default graph data files.
     */
    public SPARQLUpdateEvaluationTest(URI manifestUri, String testUri, String name, String comment, Set<String> requestFileList, Set<String> actionDataFileList, Set<String> resultDataFileList) {
        this(manifestUri, testUri, name, comment, requestFileList, actionDataFileList, resultDataFileList, new HashMap<>(), new HashMap<>());
    }

    /**
     * Constructs a new SPARQLUpdateEvaluationTest with full specification of all relevant files and graphs.
     * This is the most comprehensive constructor, allowing for initial and expected result
     * default graphs, as well as initial and expected result named graphs.
     *
     * @param manifestUri The URI of the manifest file that declares this test.
     * @param testUri The URI of the test resource from its manifest file.
     * @param name The name of the test (typically extracted from its URI).
     * @param comment A descriptive comment for the test.
     * @param requestFileList A set of URIs (as Strings) of the SPARQL Update request files.
     * @param actionDataFileList A set of URIs (as Strings) of the initial default graph data files.
     * @param resultDataFileList A set of URIs (as Strings) of the expected result default graph data files.
     * @param actionGraphMap A map where keys are named graph URIs (as Strings) and values are URIs (as Strings) of their initial data files.
     * @param resultGraphMap A map where keys are named graph URIs (as Strings) and values are URIs (as Strings) of their expected result data files.
     */
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
            logger.error("Error during test file loading for test: {}", testUri, e);
        }
    }

    /**
     * Returns a set of fully qualified class names that are required as imports for the generated JUnit 5 test code.
     * These imports include Corese graph, graph store, load utilities, query process,
     * SPARQL exceptions, Java I/O, NIO.file, and JUnit 5 assertions.
     *
     * @return A {@code Set} of {@code String}s representing the required import statements.
     */
    @Override
    public Set<String> getImports() {
        return Set.of("fr.inria.corese.w3c.junit.w3ctests.TestFileManager",
                "fr.inria.corese.w3c.junit.w3ctests.TestUtils",
                "fr.inria.corese.core.Graph",
                "fr.inria.corese.core.GraphStore",
                "fr.inria.corese.core.load.Load",
                "fr.inria.corese.core.query.QueryProcess",
                "fr.inria.corese.core.sparql.exceptions.EngineException",
                "java.io.BufferedReader",
                "java.io.FileReader",
                "java.io.FileNotFoundException",
                "java.io.IOException",
                "java.nio.file.Path",
                "org.junit.jupiter.api.Test",
                "static org.junit.jupiter.api.Assertions.assertEquals",
                "static org.junit.jupiter.api.Assertions.assertTrue");
    }

    /**
     * This method constructs a test that performs
     *
     * @return A {@code String} containing the complete Java source code.
     */
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
        sb.append("() throws LoadException, EngineException, FileNotFoundException, IOException {\n");

        sb.append("\n");
        sb.append("\n");
        sb.append("        GraphStore kbRef = GraphStore.create();\n");
        sb.append("        Load refLoader = Load.create(kbRef);\n");
        for(String actionDataFile : this.actionDataFileList) {
            sb.append("        refLoader.parse(\"").append(TestFileManager.getLocalFilePath(URI.create(actionDataFile))).append("\");\n");
        }
        sb.append("\n");
        int refGraphNumber = 0;
        for(Map.Entry<String, String> namedGraphEntry : this.actionGraphMap.entrySet()) {
            Path namedGraphFilename = TestFileManager.getLocalFilePath(URI.create(namedGraphEntry.getValue()));
            String namedGraphName = namedGraphEntry.getKey();
            sb.append("        Graph refGraph").append(refGraphNumber).append(" = Graph.create();\n");
            sb.append("        Load refGraph").append(refGraphNumber).append("Loader = Load.create(refGraph").append(refGraphNumber).append(");\n");
            sb.append("        refGraph").append(refGraphNumber).append("Loader.parse(\"").append(namedGraphFilename).append("\");\n");
            sb.append("        kbRef.setNamedGraph(\"").append(namedGraphName).append("\", refGraph").append(refGraphNumber).append(");\n");
            sb.append("\n");
            refGraphNumber++;
        }
        sb.append("\n");
        sb.append("        GraphStore kbResult = GraphStore.create();\n");
        sb.append("        Load resultLoader = Load.create(kbResult);\n");
        for(String resultDataFile : this.resultDataFileList) {
            sb.append("        resultLoader.parse(\"").append(TestFileManager.getLocalFilePath(URI.create(resultDataFile))).append("\");\n");
        }
        sb.append("\n");
        int resultGraphNumber = 0;
        for(Map.Entry<String, String> namedGraphEntry : this.resultGraphMap.entrySet()) {
            Path namedGraphFilename = TestFileManager.getLocalFilePath(URI.create(namedGraphEntry.getValue()));
            String namedGraphName = namedGraphEntry.getKey();
            sb.append("        Graph resultGraph").append(resultGraphNumber).append(" = Graph.create();\n");
            sb.append("        Load resultGraph").append(resultGraphNumber).append("Loader = Load.create(resultGraph").append(resultGraphNumber).append(");\n");
            sb.append("        resultGraph").append(resultGraphNumber).append("Loader.parse(\"").append(namedGraphFilename).append("\");\n");
            sb.append("        kbResult.setNamedGraph(\"").append(namedGraphName).append("\", resultGraph").append(resultGraphNumber).append(");\n");
            sb.append("\n");
            resultGraphNumber++;
        }
        sb.append("        QueryProcess resultQueryProcess = QueryProcess.create(kbRef);\n");
        int queryNumber = 0;
        for(String queryFilename : this.requestFileList) {
            sb.append("        String query").append(queryNumber).append("String = TestUtils.getFileTextContent(\"").append(TestFileManager.getLocalFilePath(URI.create(queryFilename))).append("\");\n");
            sb.append("        resultQueryProcess.query(query").append(queryNumber).append("String);\n");
            queryNumber++;
        }
        sb.append("\n");
        sb.append("        assertEquals(0, TestUtils.graphStoreContentCompare(kbRef, kbResult));\n");
        sb.append("}\n");

        return sb.toString();
    }
}
