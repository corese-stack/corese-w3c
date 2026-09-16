package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class KnownAggregateMinExpectationTest {
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
    void requiresExactTest() {
        assertFalse(KnownAggregateMinExpectation.matches("urn:another-test", rows(false), rows(true), COLUMNS));
    }

    @Test
    void rejectsAdditionalErrorsOrMissingRows() {
        var actual = rows(true);
        actual.get(0).put("min", "\"99\"^^<http://www.w3.org/2001/XMLSchema#integer>");
        assertFalse(matches(rows(false), actual));

        actual = rows(true);
        actual.remove(4);
        assertFalse(matches(rows(false), actual));
    }

    @Test
    void rejectsMismatchWhenSubjectDoesNotMatch() {
        var expected = rows(false);
        expected.get(4).put("s", "<http://www.example.org/other>");
        assertFalse(matches(expected, rows(true)));
    }

    private static boolean matches(List<Map<String, String>> expected, List<Map<String, String>> actual) {
        return KnownAggregateMinExpectation.matches(KnownAggregateMinExpectation.TEST_URI, expected, actual, COLUMNS);
    }

    private static List<Map<String, String>> rows(boolean originalSource) {
        var rows = new ArrayList<Map<String, String>>();
        rows.add(new HashMap<>(Map.of("s", "<http://www.example.org/ints>",
                "min", "\"1\"^^<http://www.w3.org/2001/XMLSchema#integer>")));
        rows.add(new HashMap<>(Map.of("s", "<http://www.example.org/decimals>",
                "min", "\"1.0\"^^<http://www.w3.org/2001/XMLSchema#decimal>")));
        rows.add(new HashMap<>(Map.of("s", "<http://www.example.org/doubles>",
                "min", "\"1.0E2\"^^<http://www.w3.org/2001/XMLSchema#double>")));
        rows.add(new HashMap<>(Map.of("s", "<http://www.example.org/mixed1>",
                "min", "\"1\"^^<http://www.w3.org/2001/XMLSchema#integer>")));
        String minDouble = originalSource ? "\"2E-1\"^^<http://www.w3.org/2001/XMLSchema#double>"
                : "\"2.0E-1\"^^<http://www.w3.org/2001/XMLSchema#double>";
        rows.add(new HashMap<>(Map.of("s", "<http://www.example.org/mixed2>", "min", minDouble)));
        return rows;
    }
}
