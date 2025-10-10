package fr.inria.corese.w3c.junit.dynamic.model;

/**
 * Enumeration of W3C test types supported by the dynamic test framework.
 */
public enum TestType {

    // RDF Syntax Tests (used in manifests)
    /** RDF/XML Negative Syntax Test (expects parsing to fail) */
    RDF_XML_NEGATIVE_SYNTAX("RDF/XML Negative Syntax Test"),
    /** Turtle Positive Syntax Test (expects parsing to succeed) */
    TURTLE_POSITIVE_SYNTAX("Turtle Positive Syntax Test"),
    /** Turtle Negative Syntax Test (expects parsing to fail) */
    TURTLE_NEGATIVE_SYNTAX("Turtle Negative Syntax Test"),
    /** N-Triples Positive Syntax Test (expects parsing to succeed) */
    NTRIPLES_POSITIVE_SYNTAX("N-Triples Positive Syntax Test"),
    /** N-Triples Negative Syntax Test (expects parsing to fail) */
    NTRIPLES_NEGATIVE_SYNTAX("N-Triples Negative Syntax Test"),
    /** N-Quads Positive Syntax Test (expects parsing to succeed) */
    NQUADS_POSITIVE_SYNTAX("N-Quads Positive Syntax Test"),
    /** N-Quads Negative Syntax Test (expects parsing to fail) */
    NQUADS_NEGATIVE_SYNTAX("N-Quads Negative Syntax Test"),
    /** TriG Positive Syntax Test (expects parsing to succeed) */
    TRIG_POSITIVE_SYNTAX("TriG Positive Syntax Test"),
    /** TriG Negative Syntax Test (expects parsing to fail) */
    TRIG_NEGATIVE_SYNTAX("TriG Negative Syntax Test"),

    // RDF Evaluation Tests (used in manifests)
    /** Turtle Positive Evaluation Test (expects evaluation to succeed) */
    TURTLE_POSITIVE_EVAL("Turtle Positive Evaluation Test"),
    /** Turtle Negative Evaluation Test (expects evaluation to fail) */
    TURTLE_NEGATIVE_EVAL("Turtle Negative Evaluation Test"),
    /** TriG Positive Evaluation Test (expects evaluation to succeed) */
    TRIG_POSITIVE_EVAL("TriG Positive Evaluation Test"),
    /** TriG Negative Evaluation Test (expects evaluation to fail) */
    TRIG_NEGATIVE_EVAL("TriG Negative Evaluation Test"),
    /** RDF/XML Positive Evaluation Test (expects evaluation to succeed) */
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
     * @return true if the test is a syntax test, false otherwise.
     */
    public boolean isSyntaxTest() {
        return name().contains("SYNTAX");
    }

    /**
     * Determines if this test type is an evaluation test.
     * @return true if the test is an evaluation test, false otherwise.
     */
    public boolean isEvaluationTest() {
        return name().contains("EVAL");
    }

    /**
     * Determines if this test type expects positive results (should pass).
     * @return true if the test expects a positive result, false otherwise.
     */
    public boolean isPositiveTest() {
        return name().contains("POSITIVE") || (!name().contains("NEGATIVE"));
    }

    /**
     * Determines if this test type expects negative results (should fail).
     * @return true if the test expects a negative result, false otherwise.
     */
    public boolean isNegativeTest() {
        return name().contains("NEGATIVE");
    }

    @Override
    public String toString() {
        return description;
    }
}
