package fr.inria.corese.w3c.junit.dynamic.utils;

import java.net.URI;

import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.w3c.junit.dynamic.model.TestType;

/**
 * Utility class for detecting RDF formats from test types and file extensions.
 */
public class RdfFormatDetector {

    /**
     * constructor
     */
    private RdfFormatDetector() {
    }
    /**
     * Gets the RDF format associated with a given test type.
     * 
     * @param testType The test type
     * @return The RDF format
     * @throws IllegalArgumentException if the test type does not correspond to a
     *                                  known RDF format
     */
    public static RDFFormat getRdfFormatFromTestType(TestType testType) {
        String typeName = testType.name();

        return switch (typeName) {
            case String s when s.contains("NQUADS") -> RDFFormat.NQUADS;
            case String s when s.contains("NTRIPLES") -> RDFFormat.NTRIPLES;
            case String s when s.contains("TURTLE") -> RDFFormat.TURTLE;
            case String s when s.contains("RDF_XML") -> RDFFormat.RDFXML;
            case String s when s.contains("TRIG") -> RDFFormat.TRIG;
            case String s when s.contains("JSON") -> RDFFormat.JSONLD;
            default -> throw new IllegalArgumentException("Cannot determine RDF format from test type: " + testType);
        };
    }

    /**
     * Detects the RDF format based on the file extension of the given URI.
     * 
     * @param fileUri The file URI
     * @return The detected RDF format
     * @throws IllegalArgumentException if the file extension is unknown
     */
    public static RDFFormat detectFromFileExtension(URI fileUri) {
        String extension = getFileExtension(fileUri.toString().toLowerCase());

        return switch (extension) {
            case "nq" -> RDFFormat.NQUADS;
            case "nt" -> RDFFormat.NTRIPLES;
            case "ttl" -> RDFFormat.TURTLE;
            case "rdf", "xml" -> RDFFormat.RDFXML;
            case "trig" -> RDFFormat.TRIG;
            case "jsonld" -> RDFFormat.JSONLD;
            default -> throw new IllegalArgumentException("Unknown RDF file extension: " + extension);
        };
    }

    /**
     * Extracts the file extension from a filename.
     * 
     * @param fileName The filename
     * @return The file extension without the dot, or empty string if no extension
     */
    private static String getFileExtension(String fileName) {
        int lastDotIndex = fileName.lastIndexOf('.');
        return lastDotIndex != -1 && lastDotIndex < fileName.length() - 1
                ? fileName.substring(lastDotIndex + 1)
                : "";
    }
}