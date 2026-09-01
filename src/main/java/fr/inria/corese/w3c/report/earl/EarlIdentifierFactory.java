package fr.inria.corese.w3c.report.earl;

import fr.inria.corese.w3c.report.model.ReportRunMetadata;
import fr.inria.corese.w3c.report.model.TestReportEntry;

import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HexFormat;
import java.util.Objects;

/** Deterministic identifiers derived only from stable report data. */
public final class EarlIdentifierFactory {
    private static final String W3C_REPOSITORY = "https://github.com/corese-stack/corese-w3c";
    private static final String CORE_REPOSITORY = "https://github.com/corese-stack/corese-core";

    private EarlIdentifierFactory() {
    }

    public static String testKey(String suiteId, URI officialTestUri) {
        Objects.requireNonNull(suiteId, "suiteId");
        Objects.requireNonNull(officialTestUri, "officialTestUri");
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] value = (suiteId + "\n" + officialTestUri.toASCIIString())
                    .getBytes(StandardCharsets.UTF_8);
            return HexFormat.of().formatHex(digest.digest(value));
        } catch (NoSuchAlgorithmException exception) {
            throw new IllegalStateException("The required SHA-256 algorithm is unavailable", exception);
        }
    }

    public static URI assertionIri(ReportRunMetadata metadata, TestReportEntry entry) {
        return assertionIri(metadata.reportBaseIri(), entry.suite().suiteId(), entry.testUri());
    }

    public static URI assertionIri(URI reportBaseIri, String suiteId, URI testUri) {
        return URI.create(reportBaseIri.toASCIIString() + "assertion-" + testKey(suiteId, testUri));
    }

    public static URI resultIri(ReportRunMetadata metadata, TestReportEntry entry) {
        return resultIri(metadata.reportBaseIri(), entry.suite().suiteId(), entry.testUri());
    }

    public static URI resultIri(URI reportBaseIri, String suiteId, URI testUri) {
        return URI.create(reportBaseIri.toASCIIString() + "result-" + testKey(suiteId, testUri));
    }

    public static URI reportIri(ReportRunMetadata metadata) {
        return URI.create(metadata.reportBaseIri().toASCIIString() + "report");
    }

    public static URI assertorIri(ReportRunMetadata metadata) {
        return URI.create(W3C_REPOSITORY + "/tree/" + metadata.harnessCommitSha());
    }

    public static URI subjectIri(ReportRunMetadata metadata) {
        return URI.create(CORE_REPOSITORY + "/tree/" + metadata.coreCommitSha());
    }

    public static URI releaseIri(ReportRunMetadata metadata) {
        return URI.create(subjectIri(metadata).toASCIIString() + "#release");
    }

    public static URI coreCommitIri(ReportRunMetadata metadata) {
        return URI.create(CORE_REPOSITORY + "/commit/" + metadata.coreCommitSha());
    }
}
