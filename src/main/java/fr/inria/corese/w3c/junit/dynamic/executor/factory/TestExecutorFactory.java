package fr.inria.corese.w3c.junit.dynamic.executor.factory;

import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.executor.impl.RdfPositiveEvaluationTestExecutor;
import fr.inria.corese.w3c.junit.dynamic.executor.impl.RdfPositiveSyntaxTestExecutor;
import fr.inria.corese.w3c.junit.dynamic.executor.impl.RdfNegativeTestExecutor;
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
            case TestType type when type.isEvaluationTest() && type.isPositiveTest() -> POSITIVE_EVALUATION_EXECUTOR;
            case TestType type when type.isEvaluationTest() && type.isNegativeTest() -> NEGATIVE_TEST_EXECUTOR;
            case TestType type when type.isSyntaxTest() && type.isPositiveTest() -> POSITIVE_SYNTAX_EXECUTOR;
            case TestType type when type.isSyntaxTest() && type.isNegativeTest() -> NEGATIVE_TEST_EXECUTOR;
            default -> throw new IllegalArgumentException("No executor available for test type: " + testType);
        };
    }
}