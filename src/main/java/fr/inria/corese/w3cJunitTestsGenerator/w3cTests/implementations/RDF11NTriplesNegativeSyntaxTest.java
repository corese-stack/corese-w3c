package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.IW3cTest;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils;

import java.net.URI;
import java.util.Set;

public class RDF11NTriplesNegativeSyntaxTest implements IW3cTest {

    private String test;
    private String name;
    private String comment;

    private URI actionFile;

    public RDF11NTriplesNegativeSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        this.test = testUri.split("#")[1];
        this.name = name;
        this.comment = comment;
        this.actionFile = actionUri;
    }

    @Override
    public Set<String> getImports() {
        return Set.of("fr.inria.corese.w3cJunitTestsGenerator.w3cTests.FileManager",
                "fr.inria.corese.core.load.LoadException",
                "java.io.IOException",
                "java.net.URISyntaxException",
                "java.net.URI",
                "java.nio.file.Path",
                "java.security.NoSuchAlgorithmException",
                "static org.junit.Assert.assertNotEquals");
    }

    @Override
    public String generate() {
        StringBuilder sb = new StringBuilder();

        // Header of the test
        sb.append("    // ").append(this.name).append("\n");
        if (!this.comment.isEmpty()) {
            sb.append("    // ").append(this.comment).append("\n");
        }
        sb.append("    @Test\n");
        sb.append("    public void ").append(TestUtils.sanitizeTestName(test));
        sb.append("() throws IOException, NoSuchAlgorithmException {\n");

        // Test body
        sb.append("        // Load action file\n");
        sb.append("        Path testFilePath = FileManager.loadTestFile(URI.create(\"");
        sb.append(this.actionFile.toString());
        sb.append("\"));\n");
        sb.append("        Process command = new ProcessBuilder().inheritIO().command(\n");
        sb.append("                \"java\",\n");
        sb.append("                \"-jar\", \"./target/corese-server-4.5.1.jar\",\n");
        sb.append("                \"-i\", testFilePath.toString(),\n");
        sb.append("                \"-if\", \"ntriples\",\n");
        sb.append("                \"-of\", \"csv\",\n");
        sb.append("                \"-q\", \"'SELECT * { ?s ?p ?o } LIMIT 1'\")\n");
        sb.append("            .start();\n");
        sb.append("        assertNotEquals(0, command.exitValue());\n");

        // Footer of the test
        sb.append("    }\n");

        return sb.toString();
    }
    
}
