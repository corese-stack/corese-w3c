package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.IW3cTest;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils;

import java.net.URI;
import java.util.Set;

/**
 * Generates a test that will check if corese-command loads a file of the given format without error
 */
public abstract class AbstractRDFPositiveLoadSyntaxTest implements IW3cTest {

    private String test;
    private String name;
    private String comment;

    private URI actionFile;

    private String format;

    /**
     *
     * @param testUri Uri of the test resource from its manifest file
     * @param name Name of the test (typically the end of its URI)
     * @param comment Comment literal from the manifest
     * @param actionUri URI object of mf:action in the manifest
     * @param format Names of the tested syntax as accepted by the "-if" argument of corese-command
     */
    protected AbstractRDFPositiveLoadSyntaxTest(String testUri, String name, String comment, URI actionUri, String format) {
        this.test = TestUtils.extractLongTestName(testUri);
        this.name = name;
        this.comment = comment;
        this.actionFile = actionUri;
        this.format = format;
    }

    @Override
    public Set<String> getImports() {
        return Set.of("fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestFileManager",
                "fr.inria.corese.core.load.LoadException",
                "java.io.IOException",
                "java.net.URISyntaxException",
                "java.net.URI",
                "java.nio.file.Path",
                "java.security.NoSuchAlgorithmException",
                "static org.junit.Assert.assertEquals");
    }

    @Override
    public String generate() {
        StringBuilder sb = new StringBuilder();

        // Header of the test
        sb.append("    // ").append(this.name).append("\n");
        if (!this.comment.isEmpty()) {
            String sanitizedComment = TestUtils.sanitizeComment(this.comment);
            sb.append("    // ").append(sanitizedComment).append("\n");
        }
        sb.append("    @Test\n");
        sb.append("    public void ").append(TestUtils.sanitizeTestName(test));
        sb.append("() throws IOException, NoSuchAlgorithmException, InterruptedException {\n");

        // Test body
        sb.append("        // Load action file\n");
        sb.append("        TestFileManager.loadFile(URI.create(\"").append(this.actionFile.toString()).append("\"));\n");
        sb.append("        Process command = new ProcessBuilder().inheritIO().command(\n");
        sb.append("                \"java\", \"-jar\", \"src/test/resources/corese-command.jar\", \"sparql\",\n"); // FIXME To be replaced by the latest corese-command release
        sb.append("                \"-i\", \"").append(this.actionFile).append("\",\n");
        sb.append("                \"-if\", \"").append(this.format).append("\",\n");
        sb.append("                \"-of\", \"csv\",\n");
        sb.append("                \"-q\", \"src/test/resources/sparqlSelectBasic.rq\")\n");
        sb.append("            .start();\n");
        sb.append("        assertEquals(0, command.waitFor());\n");

        // Footer of the test
        sb.append("    }\n");

        return sb.toString();
    }
}
