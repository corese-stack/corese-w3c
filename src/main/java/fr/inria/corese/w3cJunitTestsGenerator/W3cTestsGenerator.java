package fr.inria.corese.w3cJunitTestsGenerator;

import fr.inria.corese.core.Graph;
import fr.inria.corese.core.kgram.core.Mapping;
import fr.inria.corese.core.kgram.core.Mappings;
import fr.inria.corese.core.query.QueryProcess;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.IW3cTest;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.factory.W3cTestFactory;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.factory.W3cTestFactory.TestCreationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

/**
 * Generates JUnit test cases from W3C test manifest files.
 */
public class W3cTestsGenerator {

    private static Logger logger = LoggerFactory.getLogger(W3cTestsGenerator.class);
    private final URI rootManifestUri;
    private final Path testsPath;
    private final String testName;

    /**
     * Constructs a new W3cTestsGenerator with the specified test name, manifest
     * file path and test directory path.
     *
     * @param testName    The name of the test.
     * @param manifestUri The URI of the manifest file.
     * @param testsPath   The path to tests directory.
     */
    public W3cTestsGenerator(String testName, URI manifestUri, Path testsPath) {
        this.testName = testName;
        this.rootManifestUri = manifestUri;
        this.testsPath = testsPath;
    }

    /**
     * Generates JUnit test cases from the W3C test manifest file.
     */
    public void generate() {
        // Load manifest file
        Graph graph = loadManifest();

        // Generate list of test cases
        List<IW3cTest> testCases = getListOfTestCases(graph);

        // Generate JUnit test file
        JUnitTestFileGenerator generator = new JUnitTestFileGenerator(testName, rootManifestUri, testsPath, testCases);
        generator.generate();
    }

    ////////////////////////
    // Load manifest file //
    ////////////////////////

    /**
     * Loads the W3C test manifest file into a graph.
     *
     * @return The graph containing the manifest file.
     */
    private Graph loadManifest() {
        return TestUtils.loadManifest(this.rootManifestUri);
    }

    ////////////////////////////
    // Get list of test cases //
    ////////////////////////////

    /**
     * Gets the list of test cases from the specified graph.
     *
     * @param graph The graph containing the test cases.
     * @return The list of test cases.
     */
    private List<IW3cTest> getListOfTestCases(Graph graph) {
        QueryProcess exec = QueryProcess.create(graph);
        String query = buildTestCasesQuery();
        Mappings mappings;

        try {
            mappings = exec.query(query);
        } catch (Exception e) {
            logger.error("Error executing query.", e);
            return new ArrayList<>();
        }

        if (mappings == null) {
            logger.warn("Query returned null mappings.");
            return new ArrayList<>();
        }

        List<IW3cTest> testCases = new ArrayList<>();
        for (Mapping mapping : mappings) {
            String manifest = mapping.getValue("?manifest").getLabel();
            String test = mapping.getValue("?test").getLabel();
            String type = mapping.getValue("?type").getLabel();
            try {
                testCases.add(W3cTestFactory.createW3cTest(test, type, exec, URI.create(manifest)));
            } catch (TestCreationException e) {
                logger.error("Error creating test: " + test, e);
                System.exit(1);
            }
        }

        logger.info("Loaded {} test cases.", testCases.size());
        return testCases;
    }

    /**
     * Builds a query to retrieve the test cases from the manifest file.
     *
     * @return The query to retrieve the test cases.
     */
    private String buildTestCasesQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append("PREFIX mf: <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#>\n");
        sb.append("PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n");
        sb.append("PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n");
        sb.append("\n");
        sb.append("SELECT DISTINCT ?manifest ?type ?test WHERE {\n");
        sb.append("  ?manifest a mf:Manifest .\n");
        sb.append("  ?manifest mf:entries/rdf:rest*/rdf:first ?test .\n");
        sb.append("  ?test rdf:type ?type .\n");
        sb.append("  FILTER(isIri(?manifest))\n");
        sb.append("} ORDER BY ?test");
        return sb.toString();
    }
}
