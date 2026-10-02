package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.*;

class KnownAggMinExpectationTest {
    private static final String XSD = "http://www.w3.org/2001/XMLSchema#";
    private static final Set<String> COLUMNS = Set.of();

    @Test
    void recognizesOnlyKnownMismatchWithoutMutatingEitherResult() {
        var expected = rows(false);
        var actual = rows(true);
        assertTrue(matches(expected, actual));
        assertEquals(rows(false), expected);
        assertEquals(rows(true), actual);
        assertFalse(matches(actual, actual), "A fixed upstream oracle needs no special classification");
        assertFalse(matches(expected, expected), "Rewriting source terms must not qualify");
    }

    @Test
    void requiresExactTestAndEmptyNumericColumns() {
        assertFalse(KnownAggMinExpectation.matches("urn:another-test", rows(false), rows(true), COLUMNS));
        assertFalse(KnownAggMinExpectation.matches(KnownAggMinExpectation.TEST_URI,
                rows(false), rows(true), Set.of("min")));
    }

    @ParameterizedTest
    @CsvSource({"min,99,decimal", "min,2.0E-1,double", "s,http://www.example.org/other,iri"})
    void rejectsAdditionalValueOrDatatypeErrors(String variable, String lexical, String datatype) {
        var actual = rows(true);
        if ("iri".equals(datatype)) {
            actual.get(4).put(variable, "<" + lexical + ">");
        } else {
            actual.get(4).put(variable, literal(lexical, datatype));
        }
        assertFalse(matches(rows(false), actual));
    }

    @Test
    void rejectsMissingBindingsAndDifferentUnrelatedRows() {
        var actual = rows(true);
        actual.get(0).remove("min");
        assertFalse(matches(rows(false), actual));
        actual = rows(true);
        actual.set(0, Map.of("s", "<urn:unexpected>"));
        assertFalse(matches(rows(false), actual));
    }

    @Test
    void rejectsMultipleOccurrencesOfTheKnownSubject() {
        var expected = rows(false);
        var actual = rows(true);
        expected.set(0, new HashMap<>(expected.get(4)));
        actual.set(0, new HashMap<>(actual.get(4)));
        assertFalse(matches(expected, actual));
    }

    @Test
    void rejectsExtraBindingsOnTheKnownRow() {
        var expected = rows(false);
        var actual = rows(true);
        expected.get(4).put("extra", "<urn:extra>");
        actual.get(4).put("extra", "<urn:extra>");
        assertFalse(matches(expected, actual));
    }

    @Test
    void rejectsDifferentRowCounts() {
        var expected = rows(false);
        var actual = rows(true);
        actual.remove(4);
        assertFalse(matches(expected, actual));
        expected.remove(4);
        assertFalse(matches(expected, actual));
    }

    private static boolean matches(List<Map<String, String>> expected, List<Map<String, String>> actual) {
        return KnownAggMinExpectation.matches(KnownAggMinExpectation.TEST_URI, expected, actual, COLUMNS);
    }

    private static List<Map<String, String>> rows(boolean actualSource) {
        var rows = new ArrayList<Map<String, String>>();
        rows.add(new HashMap<>(Map.of("s", "<http://www.example.org/ints>", "min", literal("1", "integer"))));
        rows.add(new HashMap<>(Map.of("s", "<http://www.example.org/decimals>", "min", literal("1.0", "decimal"))));
        rows.add(new HashMap<>(Map.of("s", "<http://www.example.org/doubles>", "min", literal("1.0E2", "double"))));
        rows.add(new HashMap<>(Map.of("s", "<http://www.example.org/mixed1>", "min", literal("1", "integer"))));
        rows.add(new HashMap<>(Map.of("s", "<http://www.example.org/mixed2>", "min",
                literal(actualSource ? "2E-1" : "2.0E-1", "double"))));
        return rows;
    }

    private static String literal(String lexical, String datatype) {
        return '"' + lexical + "\"^^<" + XSD + datatype + ">";
    }
}
