package fr.inria.corese.w3c.report;

import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.report.model.ExecutionOutcome;
import fr.inria.corese.w3c.report.model.ReportRunMetadata;
import fr.inria.corese.w3c.report.model.SkipDecision;
import fr.inria.corese.w3c.report.model.SuiteDefinition;
import fr.inria.corese.w3c.report.model.TestReportData;
import fr.inria.corese.w3c.report.model.TestReportEntry;

import java.net.URI;
import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

/** Thread-safe single source of W3C test execution results. */
public final class TestReportCollector {
    private static final TestReportCollector INSTANCE = new TestReportCollector();

    private final Map<String, TestReportEntry> entries = new ConcurrentHashMap<>();
    private final Map<String, Set<String>> expectedKeysBySuite = new ConcurrentHashMap<>();
    private final Collection<String> manifestFailures = new ConcurrentLinkedQueue<>();
    private volatile Clock clock = Clock.systemUTC();
    private volatile URI logUri;

    private TestReportCollector() {
    }

    public static TestReportCollector getInstance() {
        return INSTANCE;
    }

    public synchronized void reset(Clock newClock, URI newLogUri) {
        entries.clear();
        expectedKeysBySuite.clear();
        manifestFailures.clear();
        clock = Objects.requireNonNull(newClock, "newClock");
        logUri = newLogUri;
    }

    public Instant instant() {
        return clock.instant();
    }

    public void registerSuite(SuiteDefinition suite, List<W3cTestCase> testCases) {
        Objects.requireNonNull(suite, "suite");
        Objects.requireNonNull(testCases, "testCases");
        Set<String> expected = new HashSet<>();
        for (W3cTestCase testCase : testCases) {
            String key = key(suite, testCase);
            if (!expected.add(key)) {
                throw new IllegalStateException("Duplicate manifest test in suite " + suite.suiteId() + ": "
                        + testCase.getTestUri());
            }
        }
        Set<String> previous = expectedKeysBySuite.putIfAbsent(suite.suiteId(), Set.copyOf(expected));
        if (previous != null && !previous.equals(expected)) {
            throw new IllegalStateException("Suite registered twice with different manifest coverage: "
                    + suite.suiteId());
        }
    }

    public void recordManifestFailure(SuiteDefinition suite, Throwable throwable) {
        String information = ReportTextSanitizer.sanitizeException(throwable);
        manifestFailures.add(suite.suiteId() + ": " + information);
    }

    public void recordSkipped(
            W3cTestCase testCase,
            SuiteDefinition suite,
            SkipDecision decision,
            Instant decidedAt) {
        recordEntry(entry(testCase, suite, decision.outcome(), null, decidedAt, 0,
                ReportTextSanitizer.sanitize(decision.reason()), null));
    }

    public void recordPassed(
            W3cTestCase testCase,
            SuiteDefinition suite,
            Instant startedAt,
            Instant endedAt) {
        recordEntry(entry(testCase, suite, ExecutionOutcome.PASSED, startedAt, endedAt,
                duration(startedAt, endedAt), null, null));
    }

    public void recordFailed(
            W3cTestCase testCase,
            SuiteDefinition suite,
            Instant startedAt,
            Instant endedAt,
            Throwable throwable) {
        recordEntry(entry(testCase, suite, ExecutionOutcome.FAILED, startedAt, endedAt,
                duration(startedAt, endedAt), ReportTextSanitizer.sanitizeException(throwable), logUri));
    }

    public void recordCantTell(
            W3cTestCase testCase,
            SuiteDefinition suite,
            Instant startedAt,
            Instant endedAt,
            Throwable throwable) {
        recordEntry(entry(testCase, suite, ExecutionOutcome.CANT_TELL, startedAt, endedAt,
                duration(startedAt, endedAt), ReportTextSanitizer.sanitizeException(throwable), logUri));
    }

    public TestReportData snapshot(ReportRunMetadata metadata) {
        if (!manifestFailures.isEmpty()) {
            throw new IllegalStateException("Manifest loading failed; refusing to publish a partial report: "
                    + String.join("; ", manifestFailures));
        }
        Set<String> expected = new HashSet<>();
        expectedKeysBySuite.values().forEach(expected::addAll);
        Set<String> actual = Set.copyOf(entries.keySet());
        if (!actual.equals(expected)) {
            Set<String> missing = new HashSet<>(expected);
            missing.removeAll(actual);
            Set<String> unexpected = new HashSet<>(actual);
            unexpected.removeAll(expected);
            throw new IllegalStateException("Incomplete manifest coverage; missing=" + missing
                    + ", unexpected=" + unexpected);
        }
        return new TestReportData(metadata, List.copyOf(entries.values()));
    }

    public boolean hasRegisteredSuites() {
        return !expectedKeysBySuite.isEmpty() || !manifestFailures.isEmpty();
    }

    private TestReportEntry entry(
            W3cTestCase testCase,
            SuiteDefinition suite,
            ExecutionOutcome outcome,
            Instant startedAt,
            Instant endedAt,
            long durationMs,
            String information,
            URI resultLogUri) {
        return new TestReportEntry(
                suite,
                testCase.getTestUriObject(),
                testCase.getManifestUri(),
                testCase.getName(),
                testCase.getComment(),
                testCase.getType(),
                testCase.getActionFileUri(),
                testCase.getResultFileUri(),
                outcome,
                startedAt,
                endedAt,
                durationMs,
                information,
                resultLogUri);
    }

    private void recordEntry(TestReportEntry entry) {
        String key = entry.key();
        TestReportEntry previous = entries.putIfAbsent(key, entry);
        if (previous != null) {
            throw new IllegalStateException("Result recorded more than once: " + key);
        }
    }

    private static String key(SuiteDefinition suite, W3cTestCase testCase) {
        return suite.suiteId() + "\n" + testCase.getTestUriObject().toASCIIString();
    }

    private static long duration(Instant startedAt, Instant endedAt) {
        return Math.max(0, Duration.between(startedAt, endedAt).toMillis());
    }
}
