package fr.inria.corese.w3c.junit.dynamic.executor;

/** An executed test whose known defective expected result prevents a verdict. */
public final class InvalidTestExpectationException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public InvalidTestExpectationException(String message, AssertionError mismatch) {
        super(message, mismatch);
    }
}
