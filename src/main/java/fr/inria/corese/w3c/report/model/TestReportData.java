package fr.inria.corese.w3c.report.model;

import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

/** Single normalized source consumed by both report serializations. */
public record TestReportData(ReportRunMetadata metadata, List<TestReportEntry> entries) {

    private static final Comparator<TestReportEntry> CANONICAL_ORDER = Comparator
            .comparing((TestReportEntry entry) -> entry.suite().component().jsonValue())
            .thenComparing(entry -> entry.suite().suiteId())
            .thenComparing(entry -> entry.testUri().toASCIIString());

    public TestReportData {
        Objects.requireNonNull(metadata, "metadata");
        Objects.requireNonNull(entries, "entries");
        entries = entries.stream()
                .map(entry -> Objects.requireNonNull(entry, "entry"))
                .sorted(CANONICAL_ORDER)
                .toList();
        Set<String> keys = new HashSet<>();
        for (TestReportEntry entry : entries) {
            if (!keys.add(entry.key())) {
                throw new IllegalArgumentException("Duplicate report entry: " + entry.key());
            }
        }
    }
}
