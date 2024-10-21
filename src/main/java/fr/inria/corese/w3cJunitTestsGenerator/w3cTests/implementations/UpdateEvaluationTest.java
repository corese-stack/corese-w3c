package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.IW3cTest;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class UpdateEvaluationTest implements IW3cTest {

    private URI manifestUri;
    private String test;
    private Set<String> actionDataFileList;
    private Set<String> resultDataFileList;
    private Map<String, String> actionGraphMap;
    private Map<String, String> resultGraphMap;

    public UpdateEvaluationTest(URI manifestUri, String test, Set<String> actionDataFileList, Set<String> resultDataFileList) {
        this(manifestUri, test, actionDataFileList, resultDataFileList, new HashMap<>(), new HashMap<>());
    }

    public UpdateEvaluationTest(URI manifestUri, String test, Set<String> actionDataFileList, Set<String> resultDataFileList, Map<String, String> actionGraphMap, Map<String, String> resultGraphMap) {
        this.manifestUri = manifestUri;
        this.test = test;
        this.actionDataFileList = actionDataFileList;
        this.resultDataFileList = resultDataFileList;
        this.actionGraphMap = actionGraphMap;
        this.resultGraphMap = resultGraphMap;
    }

    @Override
    public Set<String> getImports() {
        return Set.of("fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestFileManager",
                "fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils",
                "static org.junit.Assert.assertEquals",
                "static org.junit.Assert.assertTrue");
    }

    @Override
    public String generate() {
        StringBuilder sb = new StringBuilder();

        return sb.toString();
    }
}
