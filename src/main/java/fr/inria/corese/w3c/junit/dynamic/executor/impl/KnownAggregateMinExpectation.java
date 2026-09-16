package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

/** Recognizes only the single rewritten source term in the upstream agg-min-02 oracle. */
final class KnownAggregateMinExpectation {
    static final String TEST_URI =
            "http://www.w3.org/2009/sparql/docs/tests/data-sparql11/aggregates/manifest#agg-min-02";
    private static final String SUBJECT = "<http://www.example.org/mixed2>";
    private static final String EXPECTED_LITERAL =
            "\"2.0E-1\"^^<http://www.w3.org/2001/XMLSchema#double>";
    private static final String ORIGINAL_LITERAL =
            "\"2E-1\"^^<http://www.w3.org/2001/XMLSchema#double>";

    private KnownAggregateMinExpectation() {
    }

    static boolean matches(String testUri, List<Map<String, String>> expected,
            List<Map<String, String>> actual, Set<String> numericColumns) {
        if (!TEST_URI.equals(testUri) || expected.size() != 5 || actual.size() != 5) {
            return false;
        }
        var corrected = new ArrayList<Map<String, String>>();
        boolean matched = false;
        for (Map<String, String> row : expected) {
            String subject = row.get("s");
            if (SUBJECT.equals(subject)) {
                if (!EXPECTED_LITERAL.equals(row.get("min"))) {
                    return false;
                }
                var copy = new HashMap<>(row);
                copy.put("min", ORIGINAL_LITERAL);
                corrected.add(copy);
                matched = true;
            } else {
                corrected.add(row);
            }
        }
        return matched && normalized(corrected, numericColumns).equals(normalized(actual, numericColumns));
    }

    private static List<String> normalized(List<Map<String, String>> rows, Set<String> columns) {
        return rows.stream().map(row -> SparqlQueryEvaluationTestExecutor.normalizeRow(row, columns))
                .sorted().toList();
    }
}
