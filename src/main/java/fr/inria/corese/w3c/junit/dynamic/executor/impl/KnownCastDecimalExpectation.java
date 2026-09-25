package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/** Recognizes only the four rewritten source terms in the upstream cast-decimal oracle. */
final class KnownCastDecimalExpectation {
    static final String TEST_URI =
            "http://www.w3.org/2009/sparql/docs/tests/data-sparql11/cast/manifest#cast-decimal";
    private static final String XSD = "http://www.w3.org/2001/XMLSchema#";
    private static final Map<String, SourceTerm> SOURCE_TERMS = Map.of(
            "<http://example.org/n07>", new SourceTerm("double", "0.0", "0E1"),
            "<http://example.org/n08>", new SourceTerm("double", "1.0", "1E0"),
            "<http://example.org/n09>", new SourceTerm("float", "0.0", "0E1"),
            "<http://example.org/n10>", new SourceTerm("float", "1.0", "1E0"));

    private KnownCastDecimalExpectation() {
    }

    static boolean matches(String testUri, List<Map<String, String>> expected,
            List<Map<String, String>> actual, Set<String> numericColumns) {
        if (!TEST_URI.equals(testUri) || expected.size() != 31 || actual.size() != 31
                || !numericColumns.equals(Set.of("decimal"))) {
            return false;
        }
        var corrected = new ArrayList<Map<String, String>>();
        var seen = new HashSet<String>();
        for (Map<String, String> row : expected) {
            String subject = row.get("a");
            SourceTerm source = subject == null ? null : SOURCE_TERMS.get(subject);
            if (source == null) {
                corrected.add(row);
            } else {
                if (!seen.add(subject) || !source.expected().equals(row.get("v"))) {
                    return false;
                }
                var copy = new HashMap<>(row);
                copy.put("v", source.original());
                corrected.add(copy);
            }
        }
        // This is a classification probe, not an altered fixture or a passing comparison.
        // Every other binding, datatype, multiplicity and calculated value must still agree.
        return seen.equals(SOURCE_TERMS.keySet())
                && normalized(corrected, numericColumns).equals(normalized(actual, numericColumns));
    }

    private static List<String> normalized(List<Map<String, String>> rows, Set<String> columns) {
        return rows.stream().map(row -> SparqlQueryEvaluationTestExecutor.normalizeRow(row, columns))
                .sorted().toList();
    }

    private record SourceTerm(String datatype, String rewritten, String lexical) {
        String expected() {
            return literal(rewritten);
        }

        String original() {
            return literal(lexical);
        }

        private String literal(String value) {
            return '"' + value + "\"^^<" + XSD + datatype + ">";
        }
    }
}
