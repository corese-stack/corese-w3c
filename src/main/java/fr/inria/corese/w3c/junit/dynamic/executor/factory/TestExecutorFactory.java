package fr.inria.corese.w3c.junit.dynamic.executor.factory;

import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.executor.impl.*;
import fr.inria.corese.w3c.junit.dynamic.model.TestType;

/**
 * Factory class for creating appropriate test executors based on test type.
 * This centralizes the logic for selecting the right executor implementation.
 */
public class TestExecutorFactory {
    
    // Singleton instances
    private static final RdfPositiveEvaluationTestExecutor POSITIVE_EVALUATION_EXECUTOR = new RdfPositiveEvaluationTestExecutor();
    private static final RdfPositiveSyntaxTestExecutor POSITIVE_SYNTAX_EXECUTOR = new RdfPositiveSyntaxTestExecutor();
    private static final RdfNegativeTestExecutor NEGATIVE_TEST_EXECUTOR = new RdfNegativeTestExecutor();

    // Singleton instances for RDF Canonical test executors
    private static final RdfCanonicalEvaluationTestExecutor CANONICAL_EVALUATION_EXECUTOR = new RdfCanonicalEvaluationTestExecutor();
    private static final RdfCanonicalMapTestExecutor CANONICAL_MAP_EXECUTOR = new RdfCanonicalMapTestExecutor();
    private static final RdfCanonicalNegativeTestExecutor CANONICAL_NEGATIVE_EXECUTOR = new RdfCanonicalNegativeTestExecutor();

    // Singleton instances for JSON-LD FromRDF test executors
    private static final JsonLdFromRdfEvaluationTestExecutor JSONLD_FROM_RDF_EVALUATION_EXECUTOR = new JsonLdFromRdfEvaluationTestExecutor();
    private static final JsonLdFromRdfNegativeTestExecutor JSONLD_FROM_RDF_NEGATIVE_EXECUTOR = new JsonLdFromRdfNegativeTestExecutor();

    // Singleton instances for SPARQL 1.0 test executors
    private static final SparqlQueryEvaluationTestExecutor SPARQL_QUERY_EVALUATION_EXECUTOR = new SparqlQueryEvaluationTestExecutor();
    private static final SparqlPositiveSyntaxTestExecutor SPARQL_POSITIVE_SYNTAX_EXECUTOR = new SparqlPositiveSyntaxTestExecutor();
    private static final SparqlNegativeSyntaxTestExecutor SPARQL_NEGATIVE_SYNTAX_EXECUTOR = new SparqlNegativeSyntaxTestExecutor();

    // Singleton instances for SPARQL 1.1 test executors
    private static final SparqlUpdatePositiveSyntaxTestExecutor SPARQL_UPDATE_POSITIVE_SYNTAX_EXECUTOR = new SparqlUpdatePositiveSyntaxTestExecutor();
    private static final SparqlUpdateNegativeSyntaxTestExecutor SPARQL_UPDATE_NEGATIVE_SYNTAX_EXECUTOR = new SparqlUpdateNegativeSyntaxTestExecutor();
    private static final SparqlUpdateEvaluationTestExecutor SPARQL_UPDATE_EVALUATION_EXECUTOR = new SparqlUpdateEvaluationTestExecutor();

    /**
     * Private constructor to prevent instantiation of utility class.
     */
    private TestExecutorFactory() {
        throw new IllegalStateException("Utility class");
    }

    /**
     * Creates the appropriate test executor for the given test type.
     * 
     * @param testType The type of test to execute
     * @return The appropriate test executor
     * @throws IllegalArgumentException if no executor supports the given test type
     */
    public static TestExecutor createExecutor(TestType testType) {
        if (testType == null) {
            throw new IllegalArgumentException("Test type cannot be null");
        }

        return switch (testType) {
            // 1. RDFC 1.0 Canonicalization
            case RDFC10_EVAL_TEST -> CANONICAL_EVALUATION_EXECUTOR;
            case RDFC10_MAP_TEST -> CANONICAL_MAP_EXECUTOR;
            case RDFC10_NEGATIVE_EVAL_TEST -> CANONICAL_NEGATIVE_EXECUTOR;

            // 2. JSON-LD FromRDF (RDF to JSON-LD transformation)
            case JSON_LD_FROM_RDF_POSITIVE_EVAL -> JSONLD_FROM_RDF_EVALUATION_EXECUTOR;
            case JSON_LD_FROM_RDF_NEGATIVE_EVAL -> JSONLD_FROM_RDF_NEGATIVE_EXECUTOR;

            // 3. SPARQL 1.0 + 1.1 query/CSV evaluation (same executor)
            case SPARQL10_QUERY_EVAL, SPARQL11_QUERY_EVAL, SPARQL11_CSV_FORMAT -> SPARQL_QUERY_EVALUATION_EXECUTOR;

            // 4. SPARQL 1.0 + 1.1 syntax tests (same executors, same engine)
            case SPARQL10_POSITIVE_SYNTAX, SPARQL11_POSITIVE_SYNTAX -> SPARQL_POSITIVE_SYNTAX_EXECUTOR;
            case SPARQL10_NEGATIVE_SYNTAX, SPARQL11_NEGATIVE_SYNTAX -> SPARQL_NEGATIVE_SYNTAX_EXECUTOR;

            // 5. SPARQL 1.1 update-specific tests
            case SPARQL11_POSITIVE_UPDATE_SYNTAX -> SPARQL_UPDATE_POSITIVE_SYNTAX_EXECUTOR;
            case SPARQL11_NEGATIVE_UPDATE_SYNTAX -> SPARQL_UPDATE_NEGATIVE_SYNTAX_EXECUTOR;
            case SPARQL11_UPDATE_EVAL            -> SPARQL_UPDATE_EVALUATION_EXECUTOR;

            // 6. Negative tests expecting parsing/loading failures (negative syntax and negative evaluation for JSON-LD/Turtle/TriG)
            case JSON_LD_NEGATIVE_EVAL, TURTLE_NEGATIVE_EVAL, TRIG_NEGATIVE_EVAL -> NEGATIVE_TEST_EXECUTOR;
            case TestType type when type.isSyntaxTest() && type.isNegativeTest() -> NEGATIVE_TEST_EXECUTOR;

            // 7. Positive syntax tests (parsing succeeds without graph comparison)
            case TestType type when type.isSyntaxTest() && type.isPositiveTest() -> POSITIVE_SYNTAX_EXECUTOR;

            // 8. Positive evaluation tests (graph isomorphism comparison with mf:result)
            case TestType type when type.isEvaluationTest() -> POSITIVE_EVALUATION_EXECUTOR;

            default -> throw new IllegalArgumentException("No executor available for test type: " + testType);
        };
    }
}
