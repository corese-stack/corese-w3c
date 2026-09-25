package fr.inria.corese.w3c.report.model;

/** Complete EARL outcome classification used by the harness. */
public enum ExecutionOutcome {
    PASSED,
    FAILED,
    INAPPLICABLE,
    UNTESTED,
    CANT_TELL;

    public boolean wasAttempted() {
        return this == PASSED || this == FAILED || this == CANT_TELL;
    }

    /** Compatibility status consumed by historical dashboard versions. */
    public String legacyStatus() {
        return switch (this) {
            case PASSED -> "PASSED";
            case FAILED, CANT_TELL -> "FAILED";
            case INAPPLICABLE, UNTESTED -> "SKIPPED";
        };
    }
}
