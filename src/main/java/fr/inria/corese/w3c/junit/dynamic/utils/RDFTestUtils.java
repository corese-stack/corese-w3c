package fr.inria.corese.w3c.junit.dynamic.utils;

import java.io.IOException;
import java.net.URI;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import fr.inria.corese.core.next.data.api.factory.ValueFactory;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.term.Value;
import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.io.CoreseIO;
import fr.inria.corese.core.next.storage.Storages;
import fr.inria.corese.core.next.storage.StorageModels;
import fr.inria.corese.w3c.junit.dynamic.executor.InfrastructureException;

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
        return StorageModels.create(Storages.create());
    }

    /**
     * Creates a parser for the given format and model.
     * Simple and focused - takes only what's needed.
     *
     * @param format The RDF format
     * @param model  The model to parse into
     * @return A configured RDFParser
     */
    public static RDFParser createParser(RDFFormat format, Model model) {
        return CoreseIO.rdfParserFactory().createRDFParser(format, model, Values.factory());
    }

    /**
     * Creates a ValueFactory instance for creating RDF values.
     *
     * @return A new ValueFactory
     */
    public static ValueFactory createValueFactory() {
        return Values.factory();
    }

    /**
     * Resolves the RDFC hash algorithm strictly from the manifest property value.
     *
     * @param hashAlgoProp the property value from rdfc:hashAlgorithm (may be null)
     * @return the resolved HashAlgorithm (defaults to SHA-256 if absent)
     * @throws IllegalArgumentException if an unsupported algorithm is specified
     */
    public static fr.inria.corese.core.next.data.RdfCanonicalization.HashAlgorithm resolveRdfcHashAlgorithm(String hashAlgoProp) {
        if (hashAlgoProp == null || hashAlgoProp.isBlank()
                || "SHA256".equalsIgnoreCase(hashAlgoProp)
                || "SHA-256".equalsIgnoreCase(hashAlgoProp)) {
            return fr.inria.corese.core.next.data.RdfCanonicalization.HashAlgorithm.SHA_256;
        }
        if ("SHA384".equalsIgnoreCase(hashAlgoProp)
                || "SHA-384".equalsIgnoreCase(hashAlgoProp)) {
            return fr.inria.corese.core.next.data.RdfCanonicalization.HashAlgorithm.SHA_384;
        }
        throw new IllegalArgumentException("Unsupported RDFC hashAlgorithm: " + hashAlgoProp);
    }

    /**
     * Loads a file from URI and returns the local file path.
     *
     * @param fileUri The file URI to load
     * @return The local file path
     * @throws IOException if the file cannot be read
     * @throws NoSuchAlgorithmException if the hash algorithm is unavailable
     */
    public static String loadFile(URI fileUri) {
        try {
            TestFileManager.loadFile(fileUri);
            return TestFileManager.getLocalFilePath(fileUri).toString();
        } catch (IOException | NoSuchAlgorithmException exception) {
            throw new InfrastructureException("Unable to obtain the official test fixture " + fileUri, exception);
        }
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
            sb.append(". Cause: ").append(cause);
        }

        return sb.toString();
    }

    /**
     * Try to guess the RDFFormat from a file path URI
     * @param filePath A URL or local path to an RDF file
     * @return the RDFFormat of the file
     * @see RDFFormat
     */
    @SuppressWarnings("java:S112")
    public static RDFFormat guessFileFormat(URI filePath) {
        String extension = getFileExtension(filePath.toString());
        Optional<RDFFormat> result = RDFFormat.byExtension(extension);
        if(result.isEmpty()) {
            throw new RuntimeException("Could not guess the format of " + filePath);
        }
        return result.get();
    }

    /**
     * Copied and expanded from <a href="https://www.baeldung.com/java-file-extension">...</a>
     * Tries to extract the extension of a file in a filepath.
     * @param filename a file path
     * @return the extension of the file
     */
    public static String getFileExtension(String filename) {
        if (filename == null) {
            return null;
        }
        int dotIndex = filename.lastIndexOf(".");
        int slashIndex = filename.lastIndexOf('/');
        if (dotIndex >= 0 && dotIndex > slashIndex) {
            String result = filename.substring(dotIndex + 1);
            int queryStartIndex = result.lastIndexOf("?");
            if(queryStartIndex >= 0 && queryStartIndex > dotIndex) {
                result = filename.substring(0, queryStartIndex);
            }
            int anchorStartIndex = result.lastIndexOf("#");
            if(anchorStartIndex >= 0 && queryStartIndex > dotIndex) {
                result = filename.substring(0, queryStartIndex);
            }
            return result;
        }
        return "";
    }

    /**
     * Attempt to retrieve the base URI of a given URI object such as "<a href="https://docs.gradle.org/8.10.1/userguide/java_testing.html#sec:test_execution">...</a>" will return  "<a href="https://docs.gradle.org/8.10.1/userguide/">...</a>"
     * @param uri Full uri
     * @return The truncated URI
     */
    public static URI getBaseUri(URI uri) {
        StringBuilder sb = new StringBuilder();
        sb.append(uri.getScheme());
        sb.append("://");
        if(uri.getHost() != null) {
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

    public static URI swapBaseUri(URI uri, URI otherBaseUri) {
        URI uriBaseString = getBaseUri(uri);
        String uriString = uri.toString();
        uriString = uriString.replace(uriBaseString.toString(), otherBaseUri.toString());
        return URI.create(uriString);
    }

    public static boolean isUriLocal(URI uri) {
        return uri.getScheme() != null && uri.getScheme().equals("file");
    }

    public static boolean isUriAFile(URI uri) {
        String extension = getFileExtension(uri.toString());
        return extension != null && !extension.isEmpty();
    }

    /**
     * Converts an RDF Value to a canonical string representation for SPARQL result comparison.
     *
     * @param value the RDF Value
     * @return canonical string representation
     */
    public static String toCanonical(Value value) {
        if (value instanceof fr.inria.corese.core.next.data.api.term.IRI iri) {
            return "<" + iri.stringValue() + ">";
        }
        if (value instanceof fr.inria.corese.core.next.data.api.term.BNode bNode) {
            return "_:b_" + bNode.stringValue();
        }
        if (value instanceof fr.inria.corese.core.next.data.api.term.Literal literal) {
            String label = literal.getLabel();
            Optional<String> language = literal.getLanguage();
            if (language.isPresent()) {
                return "\"" + label + "\"@" + language.get().toLowerCase(java.util.Locale.ROOT);
            }
            if (literal.getDatatype() != null) {
                return "\"" + label + "\"^^<" + literal.getDatatype().stringValue() + ">";
            }
            return "\"" + label + "\"^^<http://www.w3.org/2001/XMLSchema#string>";
        }
        return value != null ? value.stringValue() : "";
    }
}
