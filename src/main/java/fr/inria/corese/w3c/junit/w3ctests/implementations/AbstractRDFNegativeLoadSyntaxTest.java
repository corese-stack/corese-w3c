package fr.inria.corese.w3c.junit.w3ctests.implementations;

import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.ValueFactory;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.exception.ParsingErrorException;
import fr.inria.corese.core.next.impl.io.parser.ParserFactory;
import fr.inria.corese.core.next.impl.temp.CoreseAdaptedValueFactory;
import fr.inria.corese.core.next.impl.temp.CoreseModel;
import fr.inria.corese.w3c.junit.w3ctests.IW3cTest;
import fr.inria.corese.w3c.junit.w3ctests.TestFileManager;
import fr.inria.corese.w3c.junit.w3ctests.TestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.net.URI;
import java.security.NoSuchAlgorithmException;
import java.util.Set;

/**
 * Generates a test that will check if corese-command refuses to load a file of the given format with an error
 */
public abstract class AbstractRDFNegativeLoadSyntaxTest implements IW3cTest {

    private static final Logger logger = LoggerFactory.getLogger(AbstractRDFNegativeLoadSyntaxTest.class);

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
    protected AbstractRDFNegativeLoadSyntaxTest(String testUri, String name, String comment, URI actionUri, String format) {
        this.test = TestUtils.extractLongTestName(testUri);
        this.name = name;
        this.comment = comment;
        this.actionFile = actionUri;
        this.format = format;

        try {
            TestFileManager.loadFile(actionUri);
        } catch (IOException | NoSuchAlgorithmException e) {
            logger.error("Error during test file loading", e);
        }
    }

    @Override
    public Set<String> getImports() {
        return Set.of("fr.inria.corese.w3c.junit.w3ctests.TestFileManager",
                "fr.inria.corese.w3c.junit.w3ctests.TestUtils",
                "fr.inria.corese.core.next.api.base.io.RDFFormat",
                "fr.inria.corese.core.next.api.ValueFactory",
                "fr.inria.corese.core.next.api.Model",
                "fr.inria.corese.core.next.api.io.parser.RDFParser",
                "fr.inria.corese.core.next.impl.temp.CoreseAdaptedValueFactory",
                "fr.inria.corese.core.next.impl.temp.CoreseModel",
                "fr.inria.corese.core.next.impl.io.parser.ParserFactory",
                "fr.inria.corese.core.next.impl.exception.ParsingErrorException",
                "fr.inria.corese.core.load.LoadException",
                "java.io.IOException",
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
        sb.append("() {\n");

        // Test body
        sb.append("        // Load action file\n");

        if (!this.comment.isEmpty()) {
            String sanitizedComment = TestUtils.sanitizeComment(this.comment);
            sb.append("        assertThrows(\"").append(sanitizedComment).append(". Test file: ").append(actionFile).append("\", ParsingErrorException.class, () -> { \n" );
        } else {
            sb.append("        assertThrows(ParsingErrorException.class, () -> { \n" );
        }
        sb.append("                    RDFFormat format = TestUtils.commandStringFormatToRDFFormat(\"").append(format).append("\");\n");
        sb.append("                    ParserFactory parserFactory = new ParserFactory();\n");
        sb.append("                    ValueFactory valueFactory = new CoreseAdaptedValueFactory();\n");
        sb.append("                    Model model = new CoreseModel();\n");
        sb.append("                    String localFilePath = TestFileManager.getLocalFilePath(URI.create(\"").append(actionFile).append("\")).toString();\n");
        sb.append("                    RDFParser parser = parserFactory.createRDFParser(format, model, valueFactory);\n");
        sb.append("                    FileReader reader = new FileReader(localFilePath);\n");
        sb.append("                    parser.parse(reader);\n");
            sb.append("                }\n");
        sb.append("        );\n");

        // Footer of the test
        sb.append("    }\n");

        return sb.toString();
    }
}
