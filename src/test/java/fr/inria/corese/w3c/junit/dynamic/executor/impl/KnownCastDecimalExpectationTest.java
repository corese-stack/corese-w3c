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

class KnownCastDecimalExpectationTest {
    private static final String XSD = "http://www.w3.org/2001/XMLSchema#";
    private static final Set<String> COLUMNS = Set.of("decimal");

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
    void requiresExactTestAndComputedColumn() {
        assertFalse(KnownCastDecimalExpectation.matches("urn:another-test", rows(false), rows(true), COLUMNS));
        assertFalse(KnownCastDecimalExpectation.matches(KnownCastDecimalExpectation.TEST_URI,
                rows(false), rows(true), Set.of("v", "decimal")));
    }

    @ParameterizedTest
    @CsvSource({"decimal,99,decimal", "decimal,0,double", "v,0E1,decimal", "v,9,float"})
    void rejectsAdditionalValueOrDatatypeErrors(String variable, String lexical, String datatype) {
        var actual = rows(true);
        actual.get(0).put(variable, literal(lexical, datatype));
        assertFalse(matches(rows(false), actual));
    }

    @Test
    void rejectsMissingBindingsAndDifferentUnrelatedRows() {
        var actual = rows(true);
        actual.get(0).remove("decimal");
        assertFalse(matches(rows(false), actual));
        actual = rows(true);
        actual.set(30, Map.of("a", "<urn:unexpected>"));
        assertFalse(matches(rows(false), actual));
    }

    @Test
    void rejectsChangedExpectedTermsAndMissingOrRepeatedAffectedSubjects() {
        var expected = rows(false);
        expected.get(0).put("v", literal("0", "double"));
        assertFalse(matches(expected, rows(true)));
        expected = rows(false);
        expected.set(0, expected.get(1));
        assertFalse(matches(expected, rows(true)));
        expected = rows(false);
        expected.set(0, Map.of("v", literal("0.0", "double")));
        assertFalse(matches(expected, rows(true)));
    }

    @Test
    void rejectsDifferentRowCountsEvenWhenBothResultsAgreeOnNewRows() {
        var expected = rows(false);
        var actual = rows(true);
        actual.remove(30);
        assertFalse(matches(expected, actual));
        expected.remove(30);
        assertFalse(matches(expected, actual));
    }

    private static boolean matches(List<Map<String, String>> expected, List<Map<String, String>> actual) {
        return KnownCastDecimalExpectation.matches(KnownCastDecimalExpectation.TEST_URI, expected, actual, COLUMNS);
    }

    private static List<Map<String, String>> rows(boolean originalSource) {
        var rows = new ArrayList<Map<String, String>>();
        for (int index = 0; index < 4; index++) {
            String lexical = index % 2 == 0 ? "0" : "1";
            String source = originalSource ? (index % 2 == 0 ? "0E1" : "1E0") : lexical + ".0";
            rows.add(new HashMap<>(Map.of("a", "<http://example.org/n"
                    + (index < 3 ? "0" : "") + (index + 7) + ">",
                    "v", literal(source, index < 2 ? "double" : "float"),
                    "decimal", literal(lexical, "decimal"))));
        }
        for (int index = 4; index < 31; index++) {
            rows.add(new HashMap<>(Map.of("a", "<urn:unchanged:" + index + ">")));
        }
        return rows;
    }

    private static String literal(String lexical, String datatype) {
        return '"' + lexical + "\"^^<" + XSD + datatype + ">";
    }
}
