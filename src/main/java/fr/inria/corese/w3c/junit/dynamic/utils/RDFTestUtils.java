package fr.inria.corese.w3c.junit.dynamic.utils;

import java.net.URI;

import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.ValueFactory;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.parser.RDFParser;
import fr.inria.corese.core.next.impl.io.parser.ParserFactory;
import fr.inria.corese.core.next.impl.temp.CoreseAdaptedValueFactory;
import fr.inria.corese.core.next.impl.temp.CoreseModel;

import java.net.URI;

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


    /**
     * Attempt to retrieve the base URI of a given URI object such as "https://docs.gradle.org/8.10.1/userguide/java_testing.html#sec:test_execution" will return  "https://docs.gradle.org/8.10.1/userguide/"
     *
     * @param uri Full uri
     * @return The truncated URI
     */
    public static URI getBaseUri(URI uri) {

        StringBuilder sb = new StringBuilder();
        sb.append(uri.getScheme());
        sb.append("://");
        if (uri.getHost() != null) {
            sb.append(uri.getHost());
        }
        // Get path up to the last '/'
        String path = uri.getPath();
        if (path != null && !path.endsWith("/")) {
            int lastSlash = path.lastIndexOf('/');
            if (lastSlash >= 0) {
                path = path.substring(0, lastSlash + 1);
            } else {
                path = "/";
            }
        }
        sb.append(path);
        return URI.create(sb.toString());
    }
    /**
     * @param filePath A URL or local path to an RDF file
     * @return the RDFFormat of the file
     */
    public static RDFFormat guessFileFormat(String filePath) {
        try {
            return guessFileFormat(new URI(filePath));
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * @param filePath A URL or local path to an RDF file
     * @return the RDFFormat of the file
     */
    public static RDFFormat guessFileFormat(URI filePath) {
        String extension = getFileExtension(filePath.toString());
        Optional<RDFFormat> result = RDFFormat.byExtension(extension);
        if(result.isEmpty()) {
            throw new RuntimeException("Could not guess the format of " + filePath);
        }
        return result.get();
    }

    /**
     * Copied an expanded from https://www.baeldung.com/java-file-extension
     * @param filename a file path
     * @return the extension of the file
     */
    private static String getFileExtension(String filename) {
        if (filename == null) {
            return null;
        }
        int dotIndex = filename.lastIndexOf(".");
        int queryStartIndex = filename.lastIndexOf("?");
        if (dotIndex >= 0) {
            if(queryStartIndex >= 0 && queryStartIndex > dotIndex) {
                return filename.substring(dotIndex + 1, queryStartIndex);
            }
            return filename.substring(dotIndex + 1);
        }
        return "";
    }

}