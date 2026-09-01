package fr.inria.corese.w3c.report.model;

import java.net.URI;
import java.time.Instant;
import java.util.UUID;

/** Creates run metadata exclusively from explicit build inputs and runtime properties. */
public final class ReportRunMetadataFactory {
    public static final String PREFIX = "w3c.report.";

    private ReportRunMetadataFactory() {
    }

    public static PendingRun start(Instant startedAt) {
        boolean ci = Boolean.parseBoolean(System.getProperty(PREFIX + "ci", "false"));
        String configuredRunId = optionalProperty("runId");
        String configuredRunUrl = optionalProperty("runUrl");
        if (ci && (configuredRunId == null || configuredRunUrl == null)) {
            throw new IllegalStateException("CI report metadata requires explicit runId and runUrl");
        }

        String runId;
        URI ciRunUrl;
        URI reportBaseIri;
        if (configuredRunUrl != null) {
            runId = requireProperty("runId");
            ciRunUrl = URI.create(configuredRunUrl);
            if (!ciRunUrl.isAbsolute()) {
                throw new IllegalStateException("runUrl must be absolute: " + configuredRunUrl);
            }
            reportBaseIri = URI.create(ciRunUrl.toASCIIString() + "#");
        } else {
            UUID uuid = UUID.randomUUID();
            runId = uuid.toString();
            ciRunUrl = null;
            reportBaseIri = URI.create("urn:uuid:" + uuid + "#");
        }

        return new PendingRun(
                reportBaseIri,
                runId,
                startedAt,
                requireProperty("harnessVersion"),
                requireProperty("harnessCommit"),
                requireProperty("coreVersion"),
                requireProperty("coreCommit"),
                requireRuntimeProperty("java.runtime.version"),
                requireRuntimeProperty("os.name"),
                requireRuntimeProperty("os.arch"),
                ciRunUrl);
    }

    private static String requireProperty(String name) {
        String value = optionalProperty(name);
        if (value == null) {
            throw new IllegalStateException("Missing required system property: " + PREFIX + name);
        }
        return value;
    }

    private static String optionalProperty(String name) {
        String value = System.getProperty(PREFIX + name);
        return value == null || value.isBlank() ? null : value.trim();
    }

    private static String requireRuntimeProperty(String name) {
        String value = System.getProperty(name);
        if (value == null || value.isBlank()) {
            throw new IllegalStateException("Missing required runtime property: " + name);
        }
        return value;
    }

    public record PendingRun(
            URI reportBaseIri,
            String runId,
            Instant startedAt,
            String harnessVersion,
            String harnessCommitSha,
            String coreVersion,
            String coreCommitSha,
            String javaRuntimeVersion,
            String osName,
            String osArchitecture,
            URI ciRunUrl) {

        public ReportRunMetadata finish(Instant endedAt) {
            return new ReportRunMetadata(
                    reportBaseIri,
                    runId,
                    startedAt,
                    endedAt,
                    harnessVersion,
                    harnessCommitSha,
                    coreVersion,
                    coreCommitSha,
                    javaRuntimeVersion,
                    osName,
                    osArchitecture,
                    ciRunUrl);
        }
    }
}
