package fr.inria.corese.w3c.report;

import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import fr.inria.corese.w3c.report.model.Component;
import fr.inria.corese.w3c.report.model.ExecutionOutcome;
import fr.inria.corese.w3c.report.model.ReportRunMetadata;
import fr.inria.corese.w3c.report.model.SuiteDefinition;
import fr.inria.corese.w3c.report.model.TestReportData;
import fr.inria.corese.w3c.report.model.TestReportEntry;
import fr.inria.corese.w3c.report.model.Transport;

import java.net.URI;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

/** Deterministic data used only to test report construction. */
public final class ReportTestFixtures {
    public static final String HARNESS_SHA = "5a6a9df3bb07f5bd4231870a7257913357792d50";
    public static final String CORE_SHA = "332f8c6db215757e4f257088fce92d084f5361dc";
    public static final URI TURTLE_MANIFEST = URI.create(
            "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/manifest.ttl");
    public static final SuiteDefinition TURTLE_SUITE = new SuiteDefinition(
            "turtle", "Turtle (RDF 1.1)", Component.CORE,
            URI.create("https://www.w3.org/TR/turtle/"), TURTLE_MANIFEST,
            Transport.IN_MEMORY);
    public static final SuiteDefinition RDFC_SUITE = new SuiteDefinition(
            "rdf-canonical", "RDFC-1.0 (Canonicalization)", Component.CORE,
            URI.create("https://www.w3.org/TR/rdf-canon/"),
            URI.create("https://w3c.github.io/rdf-canon/tests/manifest.ttl"),
            Transport.IN_MEMORY);

    private static final Instant START = Instant.parse("2026-08-28T15:29:00Z");
    private static final Instant END = Instant.parse("2026-08-28T15:31:00Z");
    private static final URI ACTIONS_LOG = URI.create(
            "https://github.com/corese-stack/corese-w3c/actions");

    private ReportTestFixtures() {
    }

    public static ReportRunMetadata metadata() {
        return metadata("123456789", "urn:uuid:123e4567-e89b-12d3-a456-426614174000#");
    }

    public static ReportRunMetadata metadata(String runId, String baseIri) {
        return new ReportRunMetadata(
                URI.create(baseIri), runId, START, END,
                "5.0.0-SNAPSHOT", HARNESS_SHA, "4.6.4", CORE_SHA,
                "21.0.8+9", "Linux", "amd64", null);
    }

    public static TestReportData data() {
        List<TestReportEntry> entries = new ArrayList<>();
        entries.add(entry(TURTLE_SUITE, "turtle-subm-01", ExecutionOutcome.PASSED, null, null));
        entries.add(entry(TURTLE_SUITE, "turtle-subm-02", ExecutionOutcome.FAILED,
                "The observed graph differs from the expected graph", ACTIONS_LOG));
        entries.add(entry(TURTLE_SUITE, "turtle-syntax-base-01", ExecutionOutcome.INAPPLICABLE,
                "Optional feature is not applicable to this subject", null));
        entries.add(entry(TURTLE_SUITE, "turtle-eval-lists-04", ExecutionOutcome.UNTESTED,
                "Deferred by the harness", null));
        entries.add(entry(TURTLE_SUITE, "literal_true", ExecutionOutcome.CANT_TELL,
                "The cached fixture could not be read", ACTIONS_LOG));
        entries.add(new TestReportEntry(
                RDFC_SUITE,
                URI.create("https://w3c.github.io/rdf-canon/tests/manifest#test001c"),
                RDFC_SUITE.manifestUri(),
                "test001c", "Official RDFC regression identifier",
                TestType.RDFC10_EVAL_TEST, null, null,
                ExecutionOutcome.PASSED, START, START.plusSeconds(2), 2_000,
                null, null));
        return new TestReportData(metadata(), entries);
    }

    private static TestReportEntry entry(
            SuiteDefinition suite,
            String fragment,
            ExecutionOutcome outcome,
            String information,
            URI logUri) {
        Instant started = outcome.wasAttempted() ? START : null;
        Instant ended = outcome.wasAttempted() ? START.plusSeconds(1) : START;
        return new TestReportEntry(
                suite,
                URI.create(TURTLE_MANIFEST.toASCIIString() + "#" + fragment),
                TURTLE_MANIFEST,
                fragment,
                "Official Turtle test fixture",
                TestType.TURTLE_POSITIVE_EVAL,
                null,
                null,
                outcome,
                started,
                ended,
                outcome.wasAttempted() ? 1_000 : 0,
                information,
                logUri);
    }
}
