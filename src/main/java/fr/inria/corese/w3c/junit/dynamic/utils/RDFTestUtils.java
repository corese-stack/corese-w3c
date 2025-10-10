package fr.inria.corese.w3c.junit.dynamic.utils;

import java.net.URI;

import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.ValueFactory;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.io.parser.ParserFactory;
import fr.inria.corese.core.next.impl.temp.CoreseAdaptedValueFactory;
import fr.inria.corese.core.next.impl.temp.CoreseModel;

/**
 * Utility class providing simple, reusable helper methods for test executors.
 */
public class RDFTestUtils {

    /**
     * Private constructor to prevent instantiation.
     */
    private RDFTestUtils() {
    }

    /**
     * Creates a new Model for parsing.
     * 
     * @return A new Model ready for parsing
     */
    public static Model createModel() {
        return new CoreseModel();
    }

    /**
     * Creates a parser for the given format and model.
     * Simple and focused - takes only what's needed.
     * 
     * @param format The RDF format
     * @param model  The model to parse into
     * @return A configured RDFParser
     * @throws Exception If parser creation fails
     */
    public static RDFParser createParser(RDFFormat format, Model model) throws Exception {
        ParserFactory parserFactory = new ParserFactory();
        ValueFactory valueFactory = new CoreseAdaptedValueFactory();
        return parserFactory.createRDFParser(format, model, valueFactory);
    }

    /**
     * Loads a file from URI and returns the local file path.
     * 
     * @param fileUri The file URI to load
     * @return The local file path
     * @throws Exception If loading fails
     */
    public static String loadFile(URI fileUri) throws Exception {
        TestFileManager.loadFile(fileUri);
        return TestFileManager.getLocalFilePath(fileUri).toString();
    }

    /**
     * Creates a formatted error message for test failures.
     * 
     * @param message    The error message
     * @param testName   The test name
     * @param actionFile The action file URI
     * @param resultFile The result file URI (can be null)
     * @param cause      The underlying cause (can be null)
     * @return A formatted error message
     */
    public static String formatErrorMessage(String message, String testName,
            URI actionFile, URI resultFile, Throwable cause) {
        StringBuilder sb = new StringBuilder();
        sb.append(message);
        sb.append(". Test: ").append(testName);
        sb.append(". Action: ").append(actionFile);

        if (resultFile != null) {
            sb.append(", Result: ").append(resultFile);
        }

        if (cause != null) {
            // Use toString() to get exception class and message (more informative than
            // getMessage()
            sb.append(". Cause: ").append(cause.toString());
        }

        return sb.toString();
    }
}