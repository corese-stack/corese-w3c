package fr.inria.corese.w3c.junit.dynamic.executor;

import java.io.IOException;
import java.io.UncheckedIOException;

/** Explicit signal that infrastructure prevented a conformance verdict. */
public class InfrastructureException extends RuntimeException {
    public InfrastructureException(String message, Throwable cause) {
        super(message, cause);
    }

    /** Classification is based only on exception types, never message text. */
    public static boolean causedByInfrastructure(Throwable throwable) {
        Throwable current = throwable;
        while (current != null) {
            if (current instanceof InfrastructureException
                    || current instanceof IOException
                    || current instanceof UncheckedIOException
                    || current instanceof InterruptedException) {
                return true;
            }
            current = current.getCause();
        }
        return false;
    }
}
