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
 * Abstract class for the tests that chack that the conversion of an RDF file from one format to another are identical (using RDF canonical)
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
                "java.security.NoSuchAlgorithmException",
                "static org.junit.Assert.*");
    }

    @Override
    public String generate() {
        StringBuilder sb = new StringBuilder();

        // Header of the test
        sb.append("    // ").append(TestUtils.sanitizeComment(this.name)).append("\n");
        if (!this.comment.isEmpty()) {
            String sanitizedComment = TestUtils.sanitizeComment(this.comment);
            sb.append("    // ").append(sanitizedComment).append("\n");
        }
        sb.append("    @Test\n");
        sb.append("    public void ").append(TestUtils.sanitizeTestName(test));
        sb.append("() throws IOException, NoSuchAlgorithmException, InterruptedException {\n");

        // Test body
        sb.append("        // Load action file\n");
        sb.append("        Path localActionFile = TestFileManager.getLocalFilePath(URI.create(\"").append(this.actionFile.toString()).append("\"));\n");
        sb.append("        Path localResultFile = TestFileManager.getLocalFilePath(URI.create(\"").append(this.resultFile.toString()).append("\"));\n");
        sb.append("        \n");
        sb.append("        Path convertedActionFilePath = Path.of(\"tmp/").append(Paths.get(TestFileManager.getFileName(this.actionFile))).append("\");\n");
        sb.append("        Path canonConvertedActionFilePath = Path.of(\"tmp/").append(Paths.get(TestFileManager.getFileName(this.actionFile))).append("\");\n");
        sb.append("        Path canonConvertedResultFilePath = Path.of(\"tmp/").append(Paths.get(TestFileManager.getFileName(this.resultFile))).append("\");\n");
        sb.append("\n");
        sb.append("        // Converting the action file\n");
        sb.append("        Model model = new CoreseModel();\n");
        sb.append("        RDFParser parser = TestUtils.getRDFParser(\"").append(actionFormat).append("\", model);\n");
        sb.append("        parser.parse(new FileReader(localActionFile.toFile()));\n");
        sb.append("        SerializerFactory factory = new DefaultSerializerFactory();\n");
        sb.append("        RDFFormat format = TestUtils.commandStringFormatToRDFFormat(\"").append(actionFormat).append("\");\n");
        sb.append("        RDFSerializer serializer = factory.createSerializer(format, model, TurtleOption.defaultConfig());\n");
        sb.append("        FileWriter writer = new FileWriter(convertedActionFilePath.toString());\n");
        sb.append("        serializer.write(writer);\n");
        sb.append("\n");
        sb.append("        // Canonicalization of the given result file\n");
        sb.append("        Process resultCanonicalizationCommand = new ProcessBuilder().inheritIO().command(\n");
        sb.append("                \"java\", \"-jar\", \"src/test/resources/corese-command.jar\", \"canonicalize\",\n"); // FIXME To be replaced by the latest corese-command release
        sb.append("                \"-i\", localResultFile.toString(),\n");
        sb.append("                \"-if\", \"").append(this.resultFormat).append("\",\n");
        sb.append("                \"-o\", canonConvertedResultFilePath.toString())\n");
        sb.append("            .start();\n");
        sb.append("        int resultCanonicalizationExitCode = resultCanonicalizationCommand.waitFor();\n");
        sb.append("\n");
        sb.append("        // Canonicalization of the conversion result file\n");
        sb.append("        Process convertedActionCanonicalizationCommand = new ProcessBuilder().inheritIO().command(\n");
        sb.append("                \"java\", \"-jar\", \"src/test/resources/corese-command.jar\", \"canonicalize\",\n"); // FIXME To be replaced by the latest corese-command release
        sb.append("                \"-i\", convertedActionFilePath.toString(),\n");
        sb.append("                \"-if\", \"").append(this.resultFormat).append("\",\n");
        sb.append("                \"-o\", canonConvertedActionFilePath.toString())\n");
        sb.append("            .start();\n");
        sb.append("        int convertedActionCanonicalizationExitCode = convertedActionCanonicalizationCommand.waitFor();\n");
        sb.append("\n");
        sb.append("        // Comparison of the content of the file\n");
        sb.append("        boolean comparisonResult = TestUtils.compareFilesLineByLine(canonConvertedActionFilePath, canonConvertedResultFilePath);\n");
        sb.append("\n");
        sb.append("        assertEquals(0, resultCanonicalizationExitCode);\n");
        sb.append("        assertEquals(0, convertedActionCanonicalizationExitCode);\n");
        if (!this.comment.isEmpty()) {
            String sanitizedComment = TestUtils.sanitizeComment(this.comment);
            sb.append("        assertTrue(\"").append(sanitizedComment).append(". Test files: action:").append(this.actionFile.toString()).append(", result: ").append(this.resultFile.toString()).append("\", comparisonResult);\n");
        } else {
            sb.append("        assertTrue(comparisonResult);\n");
        }

        // Footer of the test
        sb.append("    }\n");

        return sb.toString();
    }
}
