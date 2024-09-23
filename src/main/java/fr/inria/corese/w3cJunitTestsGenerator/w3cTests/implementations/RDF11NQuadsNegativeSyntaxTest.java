package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.IW3cTest;

import java.net.URI;
import java.util.Set;

public class RDF11NQuadsNegativeSyntaxTest implements IW3cTest {

    private String test;
    private String name;
    private String comment;

    private URI actionFile;

    public RDF11NQuadsNegativeSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        this.test = testUri.split("#")[1];
        this.name = name;
        this.comment = comment;
        this.actionFile = actionUri;
    }

    @Override
    public Set<String> getImports() {
        return Set.of("java.io.IOException",
                "java.nio.file.Path",
                "fr.inria.corese.w3cJunitTestsGenerator.w3cTests.FileManager");
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
        sb.append("    public void ").append(test);
        sb.append("() throws IOException, LoadException, URISyntaxException {\n");

        // Test body
        sb.append("        // Load action file\n");
        sb.append("        Path testFilePath = FileManager.loadTestFile(");
        sb.append(this.actionFile.toString());
        sb.append(");");
        sb.append("        Process command = new ProcessBuilder().inheritIO().command(");
        sb.append("            \"java\",");
        sb.append("            \"-jar\", \"./target/corese-server-4.5.1.jar\",");
        sb.append("            \"-i\", testFilePath.toString(),");
        sb.append("            \"-if\", \"nquads\",");
        sb.append("            \"-of\", \"csv\",");
        sb.append("            \"-q\", \"'SELECT * { ?s ?p ?o } LIMIT 1'\")");
        sb.append("        .start();");

        // Test assertion
        sb.append("        assert(command.exitValue() >= 0);\n");

        // Footer of the test
        sb.append("    }\n");

        return sb.toString();
    }
    
}