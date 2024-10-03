package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.IW3cTest;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestFileManager;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils;
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
        return Set.of("fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestFileManager",
                "fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils",
                "fr.inria.corese.core.load.LoadException",
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
        sb.append("        Path localActionFile = TestFileManager.getLocalFilePath(URI.create(\"").append(this.actionFile.toString()).append("\"));\n");
        sb.append("        Path localResultFile = TestFileManager.getLocalFilePath(URI.create(\"").append(this.resultFile.toString()).append("\"));\n");
        sb.append("        \n");
        sb.append("        Path convertedActionFilePath = Path.of(\"").append(Paths.get(TestFileManager.getFileName(this.actionFile))).append("\");\n");
        sb.append("        Path canonConvertedActionFilePath = Path.of(\"").append(Paths.get(TestFileManager.getFileName(this.actionFile))).append("\");\n");
        sb.append("        Path canonConvertedResultFilePath = Path.of(\"").append(Paths.get(TestFileManager.getFileName(this.resultFile))).append("\");\n");
        sb.append("\n");
        sb.append("        // Converting the action file\n");
        sb.append("        Process actionConversionCommand = new ProcessBuilder().inheritIO().command(\n");
        sb.append("                \"java\", \"-jar\", \"src/test/resources/corese-command.jar\", \"convert\",\n"); // FIXME To be replaced by the latest corese-command release
        sb.append("                \"-i\", \"").append(this.actionFile).append("\",\n");
        sb.append("                \"-if\", \"").append(this.actionFormat).append("\",\n");
        sb.append("                \"-of\", \"").append(this.resultFormat).append("\",\n");
        sb.append("                \"-o\", convertedActionFilePath.toString())\n");
        sb.append("            .start();\n");
        sb.append("        int actionConversionExitCode = actionConversionCommand.waitFor();\n");
        sb.append("\n");
        sb.append("        // Canonicalization of the given result file\n");
        sb.append("        Process resultCanonicalizationCommand = new ProcessBuilder().inheritIO().command(\n");
        sb.append("                \"java\", \"-jar\", \"src/test/resources/corese-command.jar\", \"canonicalize\",\n"); // FIXME To be replaced by the latest corese-command release
        sb.append("                \"-i\", \"").append(this.resultFile).append("\",\n");
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
        sb.append("        assertEquals(0, actionConversionExitCode);\n");
        sb.append("        assertEquals(0, convertedActionCanonicalizationExitCode);\n");
        sb.append("        assertTrue(comparisonResult);\n");

        // Footer of the test
        sb.append("    }\n");

        return sb.toString();
    }
}
