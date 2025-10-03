package fr.inria.corese.w3c.junit.dynamic.model;

import java.net.URI;
import java.util.Map;
import java.util.Objects;

import fr.inria.corese.w3c.junit.dynamic.executor.factory.TestExecutorFactory;

/**
 * Represents a W3C test case with all necessary information for execution.
 * This class replaces the string-based code generation approach with a
 * data-driven model.
 */
public class W3cTestCase {

    private final String testUri;
    private final String name;
    private final String displayName;
    private final String comment;
    private final TestType type;
    private final URI manifestUri;
    private final Map<String, Object> properties;

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
     */
    public void execute() throws Exception {
        TestExecutorFactory.createExecutor(type).execute(this);
    }

    // Getters
    public String getTestUri() {
        return testUri;
    }

    public String getName() {
        return name;
    }

    public String getDisplayName() {
        return displayName;
    }

    public String getComment() {
        return comment;
    }

    public TestType getType() {
        return type;
    }

    public URI getManifestUri() {
        return manifestUri;
    }

    public Map<String, Object> getProperties() {
        return properties;
    }

    /**
     * Gets a property value with type safety.
     */
    @SuppressWarnings("unchecked")
    public <T> T getProperty(String key, Class<T> type) {
        Object value = properties.get(key);
        if (value == null) {
            return null;
        }
        if (!type.isInstance(value)) {
            throw new IllegalArgumentException(
                    "Property '" + key + "' is not of expected type " + type.getSimpleName());
        }
        return (T) value;
    }

    /**
     * Gets a property value as URI.
     */
    public URI getUriProperty(String key) {
        String value = getProperty(key, String.class);
        return value != null ? URI.create(value) : null;
    }

    /**
     * Gets the action file URI for this test case.
     * This is a convenience method for getUriProperty("action").
     * 
     * @return The URI of the action file, or null if not present
     */
    public URI getActionFileUri() {
        return getUriProperty("action");
    }

    /**
     * Gets the result file URI for this test case.
     * This is a convenience method for getUriProperty("result").
     * 
     * @return The URI of the result file, or null if not present
     */
    public URI getResultFileUri() {
        return getUriProperty("result");
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

        StringBuilder displayName = new StringBuilder(this.displayName);

        // Add comment if present
        if (comment != null && !comment.trim().isEmpty()) {
            displayName.append(" - ").append(comment);
        }

        // Add format and type info
        if (formatName != null && !formatName.trim().isEmpty()) {
            displayName.append(" [").append(formatName).append(" ").append(capitalizedType).append("]");
        } else {
            displayName.append(" [").append(capitalizedType).append("]");
        }

        return displayName.toString();
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
     */
    private String extractFormatFromManifestPath(String manifestPath) {
        if (manifestPath.contains("rdf-turtle"))
            return "Turtle";
        if (manifestPath.contains("rdf-trig"))
            return "Trig";
        if (manifestPath.contains("rdf-xml"))
            return "Xml";
        if (manifestPath.contains("rdf-n-triples"))
            return "N-Triples";
        if (manifestPath.contains("rdf-n-quads"))
            return "N-Quads";
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
        if (!(o instanceof W3cTestCase))
            return false;
        W3cTestCase that = (W3cTestCase) o;
        return Objects.equals(testUri, that.testUri);
    }

    @Override
    public int hashCode() {
        return Objects.hash(testUri);
    }
}