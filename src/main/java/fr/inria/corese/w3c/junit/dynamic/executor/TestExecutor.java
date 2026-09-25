package fr.inria.corese.w3c.junit.dynamic.executor;

import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;

/**
 * Interface for test executors that handle specific types of W3C tests.
 * Each executor implements the logic for executing one type of test.
 */
public interface TestExecutor {

    /**
     * Executes the given W3C test case.
     *
     * @param testCase The test case to execute
     * @throws Exception If the test execution fails
     */
    @SuppressWarnings("java:S112")
    void execute(W3cTestCase testCase) throws Exception;
}
