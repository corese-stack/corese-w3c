package fr.inria.corese.w3c.report.model;

import fr.inria.corese.w3c.junit.dynamic.model.TestType;

import java.net.URI;
import java.time.Instant;
import java.util.Objects;

/** Immutable result for one official manifest test. */
public record TestReportEntry(
        SuiteDefinition suite,
        URI testUri,
        URI manifestUri,
        String title,
        String description,
        TestType testType,
        URI actionUri,
        URI expectedResultUri,
        ExecutionOutcome outcome,
        Instant startedAt,
        Instant endedAt,
        long durationMs,
        String information,
        URI logUri) {

    public TestReportEntry {
        Objects.requireNonNull(suite, "suite");
        requireAbsolute(testUri, "testUri");
        requireAbsolute(manifestUri, "manifestUri");
        requireText(title, "title");
        description = normalizeOptional(description);
        Objects.requireNonNull(testType, "testType");
        requireOptionalAbsolute(actionUri, "actionUri");
        requireOptionalAbsolute(expectedResultUri, "expectedResultUri");
        Objects.requireNonNull(outcome, "outcome");
        Objects.requireNonNull(endedAt, "endedAt");
        information = normalizeOptional(information);
        requireOptionalAbsolute(logUri, "logUri");
        if (durationMs < 0) {
            throw new IllegalArgumentException("durationMs must not be negative");
        }
        if (outcome.wasAttempted() && startedAt == null) {
            throw new IllegalArgumentException("startedAt is required for an attempted test");
        }
        if (!outcome.wasAttempted() && startedAt != null) {
            throw new IllegalArgumentException("startedAt must be absent for a test that was not attempted");
        }
        if (startedAt != null && endedAt.isBefore(startedAt)) {
            throw new IllegalArgumentException("endedAt must not precede startedAt");
        }
    }

    public String key() {
        return suite.suiteId() + "\n" + testUri.toASCIIString();
    }

    private static void requireText(String value, String name) {
        Objects.requireNonNull(value, name);
        if (value.isBlank()) {
            throw new IllegalArgumentException(name + " must not be blank");
        }
    }

    private static String normalizeOptional(String value) {
        return value == null || value.isBlank() ? null : value;
    }

    private static void requireAbsolute(URI value, String name) {
        Objects.requireNonNull(value, name);
        if (!value.isAbsolute()) {
            throw new IllegalArgumentException(name + " must be absolute: " + value);
        }
    }

    private static void requireOptionalAbsolute(URI value, String name) {
        if (value != null && !value.isAbsolute()) {
            throw new IllegalArgumentException(name + " must be absolute: " + value);
        }
    }
}
