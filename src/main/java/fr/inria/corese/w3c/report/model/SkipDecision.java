package fr.inria.corese.w3c.report.model;

import java.util.Objects;

/** Structured skip classification and its public rationale. */
public record SkipDecision(SkipKind kind, String reason) {
    public SkipDecision {
        Objects.requireNonNull(kind, "kind");
        Objects.requireNonNull(reason, "reason");
        if (reason.isBlank()) {
            throw new IllegalArgumentException("reason must not be blank");
        }
    }

    public ExecutionOutcome outcome() {
        return switch (kind) {
            case NOT_APPLICABLE -> ExecutionOutcome.INAPPLICABLE;
            case DEFERRED -> ExecutionOutcome.UNTESTED;
        };
    }
}
