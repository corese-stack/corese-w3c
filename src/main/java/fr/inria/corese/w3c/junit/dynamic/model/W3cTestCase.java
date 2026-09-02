package fr.inria.corese.w3c.junit.dynamic.model;

import java.net.URI;
import java.util.Map;
import java.util.Objects;

import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.w3c.junit.dynamic.executor.factory.TestExecutorFactory;

/**
 * Represents a W3C test case with all necessary information for execution.
 * This class replaces the string-based code generation approach with a
 * data-driven model.
 */
public class W3cTestCase {

    /**
     * Property keys for tests
     */
    public enum Property {
        // Common properties
        NAME("name"),
        COMMENT("comment"),
        ACTION("action"),
        RESULT("result"),
        // ASK-based test properties
        EXPECTED_BOOLEAN("expectedBoolean"),
        // Shape test properties
        QUERY("query"),
        DATA("data"),
        DATA_GRAPH("dataGraph"),
        SHAPES_GRAPH("shapesGraph"),
        CONFORMITY("conformity"),
        // SPARQL test properties
        GRAPH_DATA("graphData"),
        // Canonical test properties
        HASH_ALGORITHM("hashAlgorithm"),
        // JSON-LD test properties
        BASE_URI("baseUri"),
        SPEC_VERSION("specVersion"),
        PROCESSING_MODE("processingMode"),
        PRODUCE_GENERALIZED_RDF("produceGeneralizedRdf"),
        RDF_DIRECTION("rdfDirection"),
        EXPAND_CONTEXT("expandContext"),
        USE_NATIVE_TYPES("useNativeTypes"),
        USE_RDF_TYPES("useRdfType"),
        ;

        private final String key;

        Property(String keyString) {
            this.key = keyString;
        }

        public String getKey() {
            return this.key;
        }

        @Override
        public String toString() {
            return this.getKey();
        }
    }

    private final String testUri;
    private final String name;
    private final String displayName;
    private final String comment;
    private final TestType type;
    private final URI manifestUri;
    private final Map<String, Object> properties;

    /**
     * Constructs a new W3cTestCase.
     * @param testUri The URI identifying the test case
     * @param name The short name of the test
     * @param displayName The user-friendly display name (or name if null)
     * @param comment The comment/description associated with the test (or empty string if null)
     * @param type The type of the test (e.g., TURTLE_POSITIVE_SYNTAX)
     * @param manifestUri The URI of the manifest file that defined this test
     * @param properties The map of additional test properties (e.g., action, result)
     */
    public W3cTestCase(String testUri, String name, String displayName, String comment,
                       TestType type, URI manifestUri, Map<String, Object> properties) {
        this.testUri = Objects.requireNonNull(testUri, "Test URI cannot be null");
        this.name = Objects.requireNonNull(name, "Name cannot be null");
        this.displayName = displayName != null ? displayName : name;
        this.comment = comment != null ? comment : "";
        this.type = Objects.requireNonNull(type, "Test type cannot be null");
        this.manifestUri = Objects.requireNonNull(manifestUri, "Manifest URI cannot be null");
        this.properties = Map.copyOf(properties); // Immutable copy
    }

    /**
     * Executes this test case using the appropriate executor.
     * This method replaces the generated test methods.
     * @throws Exception if the test execution fails
     */
    public void execute() throws Exception {
        TestExecutorFactory.createExecutor(type).execute(this);
    }

    // Getters

    /**
     * Gets the stable URI identifying this test in its W3C manifest.
     *
     * @return the test URI
     */
    public String getTestUri() {
        return testUri;
    }

    /**
     * Gets the official manifest identifier without deriving it from a JUnit name.
     *
     * @return the absolute test URI
     */
    public URI getTestUriObject() {
        return URI.create(testUri);
    }

    /**
     * Gets the short name of the test case.
     * @return The short name of the test.
     */
    public String getName() {
        return name;
    }

    /**
     * Gets the comment/description associated with the test.
     * @return The comment/description associated with the test.
     */
    public String getComment() {
        return comment;
    }

    /**
     * Gets the type of the test.
     * @return The type of the test (e.g., TURTLE_POSITIVE_SYNTAX).
     */
    public TestType getType() {
        return type;
    }

    /**
     * Gets the URI of the manifest file that defined this test.
     * @return The URI of the manifest file that defined this test.
     */
    public URI getManifestUri() {
        return manifestUri;
    }

    /**
     * Gets the immutable map of additional test properties.
     * @return The immutable map of additional test properties.
     */
    public Map<String, Object> getProperties() {
        return properties;
    }

    /**
     * Gets a property value with type safety.
     *
     * @param <T> The expected type of the property value.
     * @param key The key of the property.
     * @param type The class object representing the expected type.
     * @return The property value, cast to the expected type, or null if not found.
     * @throws IllegalArgumentException if the property exists but is not of the expected type.
     */
    public <T> T getProperty(String key, Class<T> type) {
        Object value = properties.get(key);
        if (value == null) {
            return null;
        }
        if (!type.isInstance(value)) {
            throw new IllegalArgumentException(
                    "Property '" + key + "' is not of expected type " + type.getSimpleName());
        }
        return type.cast(value);
    }

    /**
     * Gets a property value with type safety.
     *
     * @param <T> The expected type of the property value.
     * @param property The Property enum item.
     * @param type The class object representing the expected type.
     * @return The property value, cast to the expected type, or null if not found.
     * @throws IllegalArgumentException if the property exists but is not of the expected type.
     */
    public <T> T getProperty(Property property, Class<T> type) {
        return getProperty(property.getKey(), type);
    }

    /**
     * Gets a property value as URI.
     *
     * @param key The key of the property, expected to hold a String URI.
     * @return The URI object created from the property value, or null if the property is not present.
     */
    public URI getUriProperty(String key) {
        String value = getProperty(key, String.class);
        if (value == null || value.isBlank()) {
            return null;
        }
        try {
            return URI.create(value);
        } catch (IllegalArgumentException e) {
            return null;
        }
    }

    /**
     * Gets the action file URI for this test case.
     * This is a convenience method for getUriProperty("action").
     *
     * @return The URI of the action file, or null if not present
     */
    public URI getActionFileUri() {
        URI uri = getUriProperty(Property.ACTION.getKey());
        if (uri == null || uri.toString().startsWith("_:")) {
            uri = getUriProperty(Property.QUERY.getKey());
        }
        if (uri != null && !uri.isAbsolute() && manifestUri != null) {
            return manifestUri.resolve(uri);
        }
        return (uri != null && uri.isAbsolute()) ? uri : null;
    }

    /**
     * Gets the result file URI for this test case.
     * This is a convenience method for getUriProperty("result").
     *
     * @return The URI of the result file, or null if not present
     */
    public URI getResultFileUri() {
        URI uri = getUriProperty(Property.RESULT.getKey());
        if (uri != null && !uri.isAbsolute() && manifestUri != null) {
            return manifestUri.resolve(uri);
        }
        return (uri != null && uri.isAbsolute()) ? uri : null;
    }

    /**
     * Generates a comprehensive test display name including comment and type.
     * This centralizes the display name generation logic for consistency across all
     * test suites.
     *
     * @param formatName Optional format name to include (e.g., "Turtle", "XML")
     * @return A formatted display name for the test
     */
    public String getFormattedDisplayName(String formatName) {
        String testType = type.toString().replace("_", " ").toLowerCase();
        // Capitalize first letter of test type
        String capitalizedType = Character.toUpperCase(testType.charAt(0)) + testType.substring(1);

        StringBuilder formattedName = new StringBuilder(this.displayName);

        // Add comment if present
        if (comment != null && !comment.trim().isEmpty()) {
            formattedName.append(" - ").append(comment);
        }

        // Add format and type info
        if (formatName != null && !formatName.trim().isEmpty()) {
            formattedName.append(" [").append(formatName).append(" ").append(capitalizedType).append("]");
        } else {
            formattedName.append(" [").append(capitalizedType).append("]");
        }

        return formattedName.toString();
    }

    /**
     * Generates a comprehensive test display name with auto-detected format from
     * manifest URI.
     * Extracts the format name from the manifest path for automatic formatting.
     * 
     * @return A formatted display name for the test
     */
    public String getFormattedDisplayName() {
        // Extract format from manifest URI (e.g., "/rdf11/rdf-turtle/" -> "Turtle")
        String manifestPath = manifestUri.toString();
        String formatName = extractFormatFromManifestPath(manifestPath);
        return getFormattedDisplayName(formatName);
    }

    /**
     * Extracts the format name from the manifest path.
     *
     * @param manifestPath The path string of the manifest URI.
     * @return The detected format name (e.g., "Turtle", "Xml"), or "RDF" if unknown.
     */
    private String extractFormatFromManifestPath(String manifestPath) {
        if (manifestPath.toLowerCase().contains("rdf-turtle"))
            return RDFFormat.TURTLE.getName();
        if (manifestPath.toLowerCase().contains("rdf-trig"))
            return RDFFormat.TRIG.getName();
        if (manifestPath.toLowerCase().contains("rdf-xml"))
            return RDFFormat.RDFXML.getName();
        if (manifestPath.toLowerCase().contains("rdf-n-triples"))
            return RDFFormat.NTRIPLES.getName();
        if (manifestPath.toLowerCase().contains("rdf-n-quads"))
            return RDFFormat.NQUADS.getName();
        if (manifestPath.toLowerCase().contains("json-ld"))
            return RDFFormat.JSONLD.getName();
        if (manifestPath.toLowerCase().contains("rdfa"))
            return RDFFormat.RDFA.getName();
        return "RDF"; // Default fallback
    }

    @Override
    public String toString() {
        return String.format("W3cTestCase{name='%s', type=%s, uri='%s'}",
                name, type, testUri);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof W3cTestCase that))
            return false;
        return Objects.equals(testUri, that.testUri);
    }

    @Override
    public int hashCode() {
        return Objects.hash(testUri);
    }
}
