package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SelectResultMultisetTest {
    private static Map<String, String> row(String node) { return Map.of("x", "_:b_" + node); }
    private static Map<String, String> edge(String x, String y) {
        return Map.of("x", "_:b_" + x, "y", "_:b_" + y);
    }
    private static boolean matches(List<Map<String, String>> expected, List<Map<String, String>> actual) {
        return SelectResultMultiset.matches(expected, actual, Set.of(), "_:b_");
    }

    @Test void acceptsOneGlobalRenamingAndRowPermutation() {
        assertTrue(matches(List.of(edge("a", "b"), edge("b", "c"), row("a")),
                List.of(row("z"), edge("y", "x"), edge("z", "y"))));
    }

    @Test void rejectsSplittingOneNodeAcrossRows() {
        assertFalse(matches(List.of(row("a"), row("a")), List.of(row("b"), row("c"))));
    }

    @Test void rejectsMergingDistinctNodesAcrossRows() {
        assertFalse(matches(List.of(row("a"), row("b")), List.of(row("c"), row("c"))));
    }

    @Test void respectsTopologyEvenWithIdenticalNodeDegrees() {
        var cycle = List.of(edge("a", "b"), edge("b", "c"), edge("c", "d"), edge("d", "a"));
        var pairs = List.of(edge("a", "b"), edge("b", "a"), edge("c", "d"), edge("d", "c"));
        assertFalse(matches(cycle, pairs));
    }

    @Test void backtracksInsteadOfDependingOnRowOrder() {
        assertTrue(matches(List.of(row("a"), row("b"), edge("a", "b")),
                List.of(row("y"), row("x"), edge("x", "y"))));
    }

    @Test void preservesMultiplicitiesAndUnboundCells() {
        assertFalse(matches(List.of(row("a"), row("a")), List.of(row("b"))));
        assertFalse(matches(List.of(Map.of()), List.of(Map.of("x", "\"\""))));
        assertFalse(matches(List.of(Map.of("x", "a"), Map.of("x", "a"), Map.of("x", "b")),
                List.of(Map.of("x", "a"), Map.of("x", "b"), Map.of("x", "b"))));
    }

    @Test void doesNotConfuseDelimitedTextWithSeparateBindings() {
        assertFalse(matches(List.of(Map.of("x", "a;y=b")), List.of(Map.of("x", "a", "y", "b"))));
    }

    @Test void appliesTheSameGlobalRuleToCsv() {
        assertFalse(SelectResultMultiset.matches(List.of(Map.of("x", "_:a"), Map.of("x", "_:a")),
                List.of(Map.of("x", "_:b"), Map.of("x", "_:c")), Set.of(), "_:"));
    }

    @Test void normalizesOnlyComputedNumericColumns() {
        String one = "\"1\"^^<http://www.w3.org/2001/XMLSchema#decimal>";
        String onePointZero = "\"1.0\"^^<http://www.w3.org/2001/XMLSchema#decimal>";
        var left = List.of(Map.of("x", one));
        var right = List.of(Map.of("x", onePointZero));
        assertTrue(SelectResultMultiset.matches(left, right, Set.of("x"), "_:b_"));
        assertFalse(matches(left, right));
    }
}
