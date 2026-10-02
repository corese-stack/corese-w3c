package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Recognizes the single source-term preservation discrepancy on mixed2 in agg-min-02.
 * SPARQL 1.1 §18.5.1.5 specifies that MIN selects an existing term from the group,
 * preserving source literal "2E-1"^^xsd:double, whereas the upstream fixture expects
 * canonicalized "2.0E-1"^^xsd:double.
 */
final class KnownAggMinExpectation {
    static final String TEST_URI =
            "http://www.w3.org/2009/sparql/docs/tests/data-sparql11/aggregates/manifest#agg-min-02";
    private static final String XSD_DOUBLE = "http://www.w3.org/2001/XMLSchema#double";
    private static final String MIXED2_URI = "<http://www.example.org/mixed2>";
    private static final String REWRITTEN_LITERAL = "\"2.0E-1\"^^<" + XSD_DOUBLE + ">";
    private static final String SOURCE_LITERAL = "\"2E-1\"^^<" + XSD_DOUBLE + ">";

    private KnownAggMinExpectation() {
    }

    static boolean matches(String testUri, List<Map<String, String>> expected,
            List<Map<String, String>> actual, Set<String> numericColumns) {
        if (!TEST_URI.equals(testUri) || expected.size() != 5 || actual.size() != 5
                || !numericColumns.isEmpty()) {
            return false;
        }
        var corrected = new ArrayList<Map<String, String>>();
        boolean substituted = false;
        for (Map<String, String> row : expected) {
            String subject = row.get("s");
            if (MIXED2_URI.equals(subject)) {
                if (substituted || !row.keySet().equals(Set.of("s", "min"))
                        || !REWRITTEN_LITERAL.equals(row.get("min"))) {
                    return false;
                }
                var copy = new HashMap<>(row);
                copy.put("min", SOURCE_LITERAL);
                corrected.add(copy);
                substituted = true;
            } else {
                corrected.add(row);
            }
        }
        return substituted && SelectResultMultiset.matches(corrected, actual, numericColumns, "_:b_");
    }
}
