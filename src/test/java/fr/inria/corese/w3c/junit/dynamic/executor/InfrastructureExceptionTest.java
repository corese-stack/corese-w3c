package fr.inria.corese.w3c.junit.dynamic.executor;

import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class InfrastructureExceptionTest {
    @Test
    void classifiesByExceptionTypeAndNeverByMessageSubstring() {
        assertFalse(InfrastructureException.causedByInfrastructure(
                new AssertionError("network timeout while downloading")));
        assertTrue(InfrastructureException.causedByInfrastructure(
                new InfrastructureException("fixture unavailable", new IOException("disk"))));
        assertTrue(InfrastructureException.causedByInfrastructure(
                new AssertionError("wrapper", new IOException("permissions"))));
    }
}
