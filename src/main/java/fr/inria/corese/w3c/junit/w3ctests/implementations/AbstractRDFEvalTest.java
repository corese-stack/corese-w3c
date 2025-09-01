package fr.inria.corese.w3c.junit.w3ctests.implementations;

import fr.inria.corese.w3c.junit.w3ctests.IW3cTest;
import fr.inria.corese.w3c.junit.w3ctests.TestFileManager;
import fr.inria.corese.w3c.junit.w3ctests.TestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Paths;
import java.security.NoSuchAlgorithmException;
import java.util.Set;

/**
 * Abstract class for the tests that check that the conversion of an RDF file from one format to another are identical (using RDF canonical)
 */
public abstract class AbstractRDFEvalTest implements IW3cTest {

    private static final Logger logger = LoggerFactory.getLogger(AbstractRDFEvalTest.class);

    private String test;
    private String name;
    private String comment;

    private URI actionFile;
    private URI resultFile;

    private String actionFormat;
    private String resultFormat;

    /**
     * Constructs a new AbstractRDFEvalTest.
     * Initializes the test parameters and attempts to load the action and result files.
     *
     * @param testUri Uri of the test resource from its manifest file
     * @param name Name of the test (typically the end of its URI)
     * @param comment Comment literal from the manifest
     * @param actionUri URI object of mf:action in the manifest
     * @param resultUri URI object of mf:result in the manifest
     * @param actionFormat Names of the tested syntax as accepted by the "-if" argument of corese-command
     * @param resultFormat Names of the tested syntax as accepted by the "-of" argument of corese-command
     */
    protected AbstractRDFEvalTest(String testUri, String name, String comment, URI actionUri, URI resultUri, String actionFormat, String resultFormat) {
        this.test = TestUtils.extractLongTestName(testUri);
        this.name = name;
        this.comment = comment;
        this.actionFile = actionUri;
        this.resultFile = resultUri;
        this.actionFormat = actionFormat;
        this.resultFormat = resultFormat;

        try {
            TestFileManager.loadFile(actionUri);
            TestFileManager.loadFile(resultUri);
        } catch (IOException | NoSuchAlgorithmException e) {
            logger.error("Error during test file loading", e);
        }
    }

    @Override
    public Set<String> getImports() {
        return Set.of("fr.inria.corese.w3c.junit.w3ctests.TestFileManager",
                "fr.inria.corese.w3c.junit.w3ctests.TestUtils",
                "fr.inria.corese.core.next.api.ValueFactory",
                "fr.inria.corese.core.next.api.Model",
                "fr.inria.corese.core.next.api.base.io.RDFFormat",
                "fr.inria.corese.core.next.api.io.parser.RDFParser",
                "fr.inria.corese.core.next.api.io.serialization.SerializerFactory",
                "fr.inria.corese.core.next.api.io.serialization.RDFSerializer",
                "fr.inria.corese.core.next.impl.temp.CoreseAdaptedValueFactory",
                "fr.inria.corese.core.next.impl.temp.CoreseModel",
                "fr.inria.corese.core.next.impl.io.parser.ParserFactory",
                "fr.inria.corese.core.next.impl.io.serialization.DefaultSerializerFactory",
                "fr.inria.corese.core.next.impl.io.serialization.turtle.TurtleOption",
                "fr.inria.corese.core.load.LoadException",
                "java.io.IOException",
                "java.io.FileWriter",
                "java.io.FileReader",
                "java.net.URISyntaxException",
                "java.net.URI",
                "java.nio.file.Path",
                "static org.junit.jupiter.api.Assertions.*");
    }

    @Override
    public String generate() {
        StringBuilder sb = new StringBuilder();

        sb.append("    // ").append(TestUtils.sanitizeComment(this.name)).append("\n");
        if (!this.comment.isEmpty()) {
            String sanitizedComment = TestUtils.sanitizeComment(this.comment);
            sb.append("    // ").append(sanitizedComment).append("\n");
        }
        sb.append("    @Test\n");
        sb.append("    public void ").append(TestUtils.sanitizeTestName(test));
        sb.append("() throws IOException, InterruptedException {\n");

        // Test body
        sb.append("        // Load action file\n");
        sb.append("        Path localActionFile = TestFileManager.getLocalFilePath(URI.create(\"").append(this.actionFile.toString()).append("\"));\n");
        sb.append("        Path localResultFile = TestFileManager.getLocalFilePath(URI.create(\"").append(this.resultFile.toString()).append("\"));\n");
        sb.append("        \n");
        sb.append("        // Converting the action file\n");
        sb.append("        Model actionParsedModel = new CoreseModel();\n");
        sb.append("        Model resultModel = new CoreseModel();\n");
        sb.append("        RDFParser actionParser = TestUtils.getRDFParser(\"").append(actionFormat).append("\", actionParsedModel);\n");
        sb.append("        RDFParser resultParser = TestUtils.getRDFParser(\"nq\", resultModel);\n");
        sb.append("        actionParser.parse(new FileReader(localActionFile.toFile()));\n");
        sb.append("        resultParser.parse(new FileReader(localResultFile.toFile()));\n");
        sb.append("\n");
        sb.append("        // Comparison of the content of the models\n");
        sb.append("        final boolean[] comparisonResult = {true};\n");
        sb.append("        actionParsedModel.forEach( statement -> {\n");
        sb.append("            comparisonResult[0] = comparisonResult[0] && resultModel.contains(statement);\n");
        sb.append("        });\n");
        sb.append("        resultModel.forEach( statement -> {\n");
        sb.append("            comparisonResult[0] = comparisonResult[0] && actionParsedModel.contains(statement);\n");
        sb.append("        });\n");
        sb.append("\n");
        if (!this.comment.isEmpty()) {
            String sanitizedComment = TestUtils.sanitizeComment(this.comment);
            sb.append("        assertTrue(comparisonResult[0], \"").append(sanitizedComment)
                    .append(". Test files: action:").append(this.actionFile.toString())
                    .append(", result: ").append(this.resultFile.toString()).append("\");\n");
        } else {
            sb.append("        assertTrue(comparisonResult[0]);\n");
        }

        // Footer of the test
        sb.append("    }\n");

        return sb.toString();
    }
}