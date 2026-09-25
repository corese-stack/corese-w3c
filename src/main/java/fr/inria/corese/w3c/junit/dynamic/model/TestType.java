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
    /** JSON-LD Positive Syntax test (expects evaluation to succeed) */
    JSON_LD_POSITIVE_SYNTAX("JSON-LD Positive Syntax Test"),
    /** JSON-LD Negative Syntax test (expects evaluation to succeed) */
    JSON_LD_NEGATIVE_SYNTAX("JSON-LD Negative Syntax Test"),

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
    RDF_XML_POSITIVE_EVAL("RDF/XML Positive Evaluation Test"),
    /** JSON-LD Positive Evaluation test (expects evaluation to succeed) */
    JSON_LD_POSITIVE_EVAL("JSON-LD Positive Evaluation Test"),
    /** JSON-LD Negative Evaluation test (expects evaluation to fail) */
    JSON_LD_NEGATIVE_EVAL("JSON-LD Negative Evaluation Test"),
    /** JSON-LD FromRDF Positive Evaluation test (expects RDF-to-JSON-LD serialization to succeed) */
    JSON_LD_FROM_RDF_POSITIVE_EVAL("JSON-LD FromRDF Positive Evaluation Test"),
    /** JSON-LD FromRDF Negative Evaluation test (expects RDF-to-JSON-LD serialization to fail) */
    JSON_LD_FROM_RDF_NEGATIVE_EVAL("JSON-LD FromRDF Negative Evaluation Test"),
    /** ASK-based evaluation test */
    ASK_BASED_EVAL("ASK-based Evaluation Test"),

    /**
     * RDF Canonicalization
     * Tests the canonical form of RDF graphs according to RDFC10 standard.
     */
    RDFC10_EVAL_TEST("Rdfc10EvalTest"),
    /**
     * RDF Canonicalization
     * Tests the mapping functionality of the RDFC10 canonicalization algorithm.
     */
    RDFC10_MAP_TEST("Rdfc10MapTest"),
    /**
     * RDF Canonicalization
     * Expects evaluation to fail for invalid inputs or edge cases.
     */
    RDFC10_NEGATIVE_EVAL_TEST("Rdfc10NegativeEvalTest"),
    /**
     * RDFa Positive evaluation
     */
    RDFA_POSITIVE_EVAL("RDFa Positive Evaluation"),
    /**
     * RDFa Negative evaluation
     */
    RDFA_NEGATIVE_EVAL("RDFa Negative Evaluation"),

    // SPARQL 1.0 Tests
    /** SPARQL 1.0 Query Evaluation Test (SELECT, ASK, CONSTRUCT, DESCRIBE) */
    SPARQL10_QUERY_EVAL("SPARQL 1.0 Query Evaluation Test"),
    /** SPARQL 1.0 Positive Syntax Test (query should parse without error) */
    SPARQL10_POSITIVE_SYNTAX("SPARQL 1.0 Positive Syntax Test"),
    /** SPARQL 1.0 Negative Syntax Test (query should fail to parse) */
    SPARQL10_NEGATIVE_SYNTAX("SPARQL 1.0 Negative Syntax Test"),

    // SPARQL 1.1 Tests
    /** SPARQL 1.1 Positive Syntax Test (query should parse without error) */
    SPARQL11_POSITIVE_SYNTAX("SPARQL 1.1 Positive Syntax Test"),
    /** SPARQL 1.1 Negative Syntax Test (query should fail to parse) */
    SPARQL11_NEGATIVE_SYNTAX("SPARQL 1.1 Negative Syntax Test"),
    /** SPARQL 1.1 Update Positive Syntax Test (update request should parse without error) */
    SPARQL11_POSITIVE_UPDATE_SYNTAX("SPARQL 1.1 Positive Update Syntax Test"),
    /** SPARQL 1.1 Update Negative Syntax Test (update request should fail to parse) */
    SPARQL11_NEGATIVE_UPDATE_SYNTAX("SPARQL 1.1 Negative Update Syntax Test"),
    /** SPARQL 1.1 Query Evaluation Test (SELECT, ASK, CONSTRUCT, DESCRIBE) */
    SPARQL11_QUERY_EVAL("SPARQL 1.1 Query Evaluation Test"),
    /** SPARQL 1.1 Update Evaluation Test (execute update and compare resulting graph) */
    SPARQL11_UPDATE_EVAL("SPARQL 1.1 Update Evaluation Test"),
    /** SPARQL 1.1 CSV Result Format Test (SELECT query result compared as CSV/TSV) */
    SPARQL11_CSV_FORMAT("SPARQL 1.1 CSV Result Format Test");

    private final String description;

    /**
     * Constructor for TestType enum.
     *
     * @param description A human-readable description of the test type
     */
    TestType(String description) {
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
