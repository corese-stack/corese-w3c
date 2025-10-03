package fr.inria.corese.w3c.junit.dynamic.model;

/**
 * Enumeration of W3C test types supported by the dynamic test framework.
 */
public enum TestType {

    // RDF Syntax Tests (used in manifests)
    RDF_XML_NEGATIVE_SYNTAX("RDF/XML Negative Syntax Test"),
    TURTLE_POSITIVE_SYNTAX("Turtle Positive Syntax Test"),
    TURTLE_NEGATIVE_SYNTAX("Turtle Negative Syntax Test"),
    NTRIPLES_POSITIVE_SYNTAX("N-Triples Positive Syntax Test"),
    NTRIPLES_NEGATIVE_SYNTAX("N-Triples Negative Syntax Test"),
    NQUADS_POSITIVE_SYNTAX("N-Quads Positive Syntax Test"),
    NQUADS_NEGATIVE_SYNTAX("N-Quads Negative Syntax Test"),
    TRIG_POSITIVE_SYNTAX("TriG Positive Syntax Test"),
    TRIG_NEGATIVE_SYNTAX("TriG Negative Syntax Test"),

    // RDF Evaluation Tests (used in manifests)
    TURTLE_POSITIVE_EVAL("Turtle Positive Evaluation Test"),
    TURTLE_NEGATIVE_EVAL("Turtle Negative Evaluation Test"),
    TRIG_POSITIVE_EVAL("TriG Positive Evaluation Test"),
    TRIG_NEGATIVE_EVAL("TriG Negative Evaluation Test"),
    RDF_XML_POSITIVE_EVAL("RDF/XML Positive Evaluation Test");

    private final String description;

    /**
     * Constructor for TestType enum.
     * 
     * @param description A human-readable description of the test type
     */
    private TestType(String description) {
        this.description = description;
    }

    /**
     * Gets the description of this test type.
     * 
     * @return The test type description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Determines if this test type is a syntax test (positive or negative).
     */
    public boolean isSyntaxTest() {
        return name().contains("SYNTAX");
    }

    /**
     * Determines if this test type is an evaluation test.
     */
    public boolean isEvaluationTest() {
        return name().contains("EVAL");
    }

    /**
     * Determines if this test type expects positive results (should pass).
     */
    public boolean isPositiveTest() {
        return name().contains("POSITIVE") || (!name().contains("NEGATIVE"));
    }

    /**
     * Determines if this test type expects negative results (should fail).
     */
    public boolean isNegativeTest() {
        return name().contains("NEGATIVE");
    }

    @Override
    public String toString() {
        return description;
    }
}