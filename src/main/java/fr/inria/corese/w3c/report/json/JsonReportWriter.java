package fr.inria.corese.w3c.report.json;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.inria.corese.w3c.report.AtomicReportFile;
import fr.inria.corese.w3c.report.model.ExecutionOutcome;
import fr.inria.corese.w3c.report.model.ReportRunMetadata;
import fr.inria.corese.w3c.report.model.SuiteDefinition;
import fr.inria.corese.w3c.report.model.TestReportData;
import fr.inria.corese.w3c.report.model.TestReportEntry;

import java.io.IOException;
import java.nio.file.Path;
import java.time.Duration;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/** Backward-compatible dashboard JSON generated from normalized report data. */
public final class JsonReportWriter {
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();
    private static final String KEY_VERSION = "version";
    private static final String KEY_COMMIT = "commit";

    public String serialize(TestReportData data) throws IOException {
        return OBJECT_MAPPER.writerWithDefaultPrettyPrinter().writeValueAsString(toMap(data)) + "\n";
    }

    public void write(TestReportData data, Path destination) throws IOException {
        AtomicReportFile.write(destination, serialize(data));
    }

    private Map<String, Object> toMap(TestReportData data) {
        ReportRunMetadata metadata = data.metadata();
        Map<String, Object> root = new LinkedHashMap<>();
        Map<String, Object> metadataJson = new LinkedHashMap<>();
        metadataJson.put("generatedAt", metadata.endedAt().toString());
        metadataJson.put("project", "corese-w3c");
        metadataJson.put(KEY_VERSION, metadata.harnessVersion());
        metadataJson.put("durationSeconds", roundTwo(
                Duration.between(metadata.startedAt(), metadata.endedAt()).toMillis() / 1000.0));
        metadataJson.put("git", linkedMap(KEY_COMMIT, metadata.harnessCommitSha()));
        metadataJson.put("harness", linkedMap(
                KEY_VERSION, metadata.harnessVersion(),
                KEY_COMMIT, metadata.harnessCommitSha()));
        metadataJson.put("core", linkedMap(
                KEY_VERSION, metadata.coreVersion(),
                KEY_COMMIT, metadata.coreCommitSha()));
        metadataJson.put("run", linkedMap(
                "id", metadata.runId(),
                "url", metadata.ciRunUrl() == null ? null : metadata.ciRunUrl().toASCIIString(),
                "baseIri", metadata.reportBaseIri().toASCIIString()));
        metadataJson.put("runtime", linkedMap(
                "javaVersion", metadata.javaRuntimeVersion(),
                "osName", metadata.osName(),
                "osArchitecture", metadata.osArchitecture()));
        root.put("metadata", metadataJson);
        root.put("summary", summary(data.entries()));
        root.put("suites", suites(data.entries()));
        return root;
    }

    private Map<String, Object> summary(List<TestReportEntry> entries) {
        Counts counts = counts(entries);
        Map<String, Object> summary = countsMap(counts);
        summary.put("passRate", rate(counts.passed, counts.total));
        summary.put("executedPassRate", rate(counts.passed, counts.passed + counts.failed));
        summary.put("passRateFormula", "passed / total official manifest entries");
        summary.put("executedPassRateFormula", "passed / (passed + failed)");
        return summary;
    }

    private List<Map<String, Object>> suites(List<TestReportEntry> entries) {
        Map<SuiteDefinition, List<TestReportEntry>> grouped = new LinkedHashMap<>();
        for (TestReportEntry entry : entries) {
            grouped.computeIfAbsent(entry.suite(), ignored -> new ArrayList<>()).add(entry);
        }
        List<Map<String, Object>> result = new ArrayList<>();
        for (Map.Entry<SuiteDefinition, List<TestReportEntry>> group : grouped.entrySet()) {
            SuiteDefinition suite = group.getKey();
            List<TestReportEntry> suiteEntries = group.getValue();
            Counts counts = counts(suiteEntries);
            Map<String, Object> suiteJson = new LinkedHashMap<>();
            suiteJson.put("id", suite.suiteId());
            suiteJson.put("name", suite.displayName());
            suiteJson.put("component", suite.component().jsonValue());
            suiteJson.put("specification", suite.specificationUri().toASCIIString());
            suiteJson.put("manifest", suite.manifestUri().toASCIIString());
            suiteJson.put("transport", suite.transport().jsonValue());
            suiteJson.putAll(countsMap(counts));
            suiteJson.put("passRate", rate(counts.passed, counts.total));
            suiteJson.put("executedPassRate", rate(counts.passed, counts.passed + counts.failed));
            suiteJson.put("durationMs", suiteEntries.stream().mapToLong(TestReportEntry::durationMs).sum());
            suiteJson.put("tests", suiteEntries.stream().map(this::test).toList());
            result.add(suiteJson);
        }
        return result;
    }

    private Map<String, Object> test(TestReportEntry entry) {
        Map<String, Object> test = new LinkedHashMap<>();
        test.put("name", entry.title());
        test.put("displayName", entry.title());
        test.put("status", entry.outcome().legacyStatus());
        test.put("outcome", entry.outcome().name());
        test.put("durationMs", entry.durationMs());
        test.put("testUri", entry.testUri().toASCIIString());
        test.put("manifestUri", entry.manifestUri().toASCIIString());
        test.put("testType", entry.testType().name());
        putIfNotNull(test, "description", entry.description());
        putIfNotNull(test, "actionUri", ascii(entry.actionUri()));
        putIfNotNull(test, "resultUri", ascii(entry.expectedResultUri()));
        putIfNotNull(test, "startedAt", entry.startedAt() == null ? null : entry.startedAt().toString());
        test.put("endedAt", entry.endedAt().toString());
        putIfNotNull(test, "info", entry.information());
        putIfNotNull(test, "logUri", ascii(entry.logUri()));
        if (entry.outcome() == ExecutionOutcome.INAPPLICABLE
                || entry.outcome() == ExecutionOutcome.UNTESTED) {
            putIfNotNull(test, "skipReason", entry.information());
        } else if (entry.outcome() == ExecutionOutcome.FAILED
                || entry.outcome() == ExecutionOutcome.CANT_TELL) {
            putIfNotNull(test, "errorMessage", entry.information());
        }
        return test;
    }

    private static Map<String, Object> countsMap(Counts counts) {
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("total", counts.total);
        result.put("passed", counts.passed);
        result.put("failed", counts.failed);
        result.put("inapplicable", counts.inapplicable);
        result.put("untested", counts.untested);
        result.put("cantTell", counts.cantTell);
        result.put("skipped", counts.inapplicable + counts.untested);
        return result;
    }

    private static Counts counts(List<TestReportEntry> entries) {
        int passed = 0;
        int failed = 0;
        int inapplicable = 0;
        int untested = 0;
        int cantTell = 0;
        for (TestReportEntry entry : entries) {
            switch (entry.outcome()) {
                case PASSED -> passed++;
                case FAILED -> failed++;
                case INAPPLICABLE -> inapplicable++;
                case UNTESTED -> untested++;
                case CANT_TELL -> cantTell++;
            }
        }
        return new Counts(entries.size(), passed, failed, inapplicable, untested, cantTell);
    }

    private static Double rate(int numerator, int denominator) {
        return denominator == 0 ? null : roundTwo(numerator * 100.0 / denominator);
    }

    private static double roundTwo(double value) {
        return Math.round(value * 100.0) / 100.0;
    }

    private static String ascii(java.net.URI value) {
        return value == null ? null : value.toASCIIString();
    }

    private static void putIfNotNull(Map<String, Object> map, String key, Object value) {
        if (value != null) {
            map.put(key, value);
        }
    }

    private static Map<String, Object> linkedMap(Object... keysAndValues) {
        Map<String, Object> result = new LinkedHashMap<>();
        for (int index = 0; index < keysAndValues.length; index += 2) {
            result.put((String) keysAndValues[index], keysAndValues[index + 1]);
        }
        return result;
    }

    private record Counts(
            int total,
            int passed,
            int failed,
            int inapplicable,
            int untested,
            int cantTell) {
    }
}
