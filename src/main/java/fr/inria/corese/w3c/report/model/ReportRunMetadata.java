package fr.inria.corese.w3c.report.model;

import java.net.URI;
import java.time.Instant;
import java.util.Objects;
import java.util.regex.Pattern;

/** Immutable identity and provenance for one complete report run. */
public record ReportRunMetadata(
        URI reportBaseIri,
        String runId,
        Instant startedAt,
        Instant endedAt,
        String harnessVersion,
        String harnessCommitSha,
        String coreVersion,
        String coreCommitSha,
        String javaRuntimeVersion,
        String osName,
        String osArchitecture,
        URI ciRunUrl) {

    private static final Pattern FULL_GIT_SHA = Pattern.compile("[0-9a-f]{40}");

    public ReportRunMetadata {
        requireAbsolute(reportBaseIri, "reportBaseIri");
        if (!reportBaseIri.toASCIIString().endsWith("#")) {
            throw new IllegalArgumentException("reportBaseIri must end with '#'");
        }
        requireText(runId, "runId");
        Objects.requireNonNull(startedAt, "startedAt");
        Objects.requireNonNull(endedAt, "endedAt");
        if (endedAt.isBefore(startedAt)) {
            throw new IllegalArgumentException("endedAt must not precede startedAt");
        }
        requireKnown(harnessVersion, "harnessVersion");
        requireSha(harnessCommitSha, "harnessCommitSha");
        requireKnown(coreVersion, "coreVersion");
        requireSha(coreCommitSha, "coreCommitSha");
        requireKnown(javaRuntimeVersion, "javaRuntimeVersion");
        requireKnown(osName, "osName");
        requireKnown(osArchitecture, "osArchitecture");
        if (ciRunUrl != null) {
            requireAbsolute(ciRunUrl, "ciRunUrl");
        }
    }

    public URI activityIri() {
        String base = reportBaseIri.toASCIIString();
        return URI.create(base.substring(0, base.length() - 1));
    }

    private static void requireText(String value, String name) {
        Objects.requireNonNull(value, name);
        if (value.isBlank()) {
            throw new IllegalArgumentException(name + " must not be blank");
        }
    }

    private static void requireKnown(String value, String name) {
        requireText(value, name);
        if ("unknown".equalsIgnoreCase(value)) {
            throw new IllegalArgumentException(name + " must not be 'unknown'");
        }
    }

    private static void requireSha(String value, String name) {
        requireText(value, name);
        if (!FULL_GIT_SHA.matcher(value).matches()) {
            throw new IllegalArgumentException(name + " must be exactly 40 lowercase hexadecimal characters");
        }
    }

    private static void requireAbsolute(URI value, String name) {
        Objects.requireNonNull(value, name);
        if (!value.isAbsolute()) {
            throw new IllegalArgumentException(name + " must be absolute: " + value);
        }
    }
}
