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


    /**
     * constructor
     */
    public TestExecutorFactory() {

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

            case RDFC10_EVAL_TEST -> CANONICAL_EVALUATION_EXECUTOR;
            case RDFC10_MAP_TEST -> CANONICAL_MAP_EXECUTOR;
            case RDFC10_NEGATIVE_EVAL_TEST -> CANONICAL_NEGATIVE_EXECUTOR;

            case TestType type when type.isEvaluationTest() && type.isPositiveTest() -> POSITIVE_EVALUATION_EXECUTOR;
            case TestType type when type.isEvaluationTest() && type.isNegativeTest() -> NEGATIVE_TEST_EXECUTOR;
            case TestType type when type.isSyntaxTest() && type.isPositiveTest() -> POSITIVE_SYNTAX_EXECUTOR;
            case TestType type when type.isSyntaxTest() && type.isNegativeTest() -> NEGATIVE_TEST_EXECUTOR;


            default -> throw new IllegalArgumentException("No executor available for test type: " + testType);
        };
    }
}