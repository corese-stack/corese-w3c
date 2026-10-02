package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

/** Bag equality with one blank-node bijection for the entire result set. */
final class SelectResultMultiset {
    private SelectResultMultiset() {}

    static boolean matches(List<Map<String, String>> expected, List<Map<String, String>> actual,
                           Set<String> numericColumns, String blankPrefix) {
        if (expected.size() != actual.size()) return false;
        var left = normalize(expected, numericColumns);
        var right = normalize(actual, numericColumns);
        // Avoid recursive search for ground results, and remove ground rows before matching blanks.
        var leftGround = groundCounts(left, blankPrefix);
        var rightGround = groundCounts(right, blankPrefix);
        if (!leftGround.equals(rightGround)) return false;
        left.removeIf(row -> !hasBlank(row, blankPrefix));
        right.removeIf(row -> !hasBlank(row, blankPrefix));
        return match(left, right, 0, new boolean[right.size()], new HashMap<>(), new HashMap<>(), blankPrefix);
    }

    private static List<Map<String, String>> normalize(List<Map<String, String>> rows, Set<String> numericColumns) {
        List<Map<String, String>> result = new ArrayList<>();
        for (var row : rows) {
            Map<String, String> normalized = new HashMap<>(row);
            numericColumns.forEach(column -> normalized.computeIfPresent(column,
                    (key, value) -> ComputedNumericResults.normalize(value)));
            result.add(normalized);
        }
        return result;
    }

    private static boolean hasBlank(Map<String, String> row, String prefix) {
        return row.values().stream().anyMatch(value -> value.startsWith(prefix));
    }

    private static Map<Map<String, String>, Integer> groundCounts(List<Map<String, String>> rows, String prefix) {
        Map<Map<String, String>, Integer> counts = new HashMap<>();
        for (var row : rows) if (!hasBlank(row, prefix)) counts.merge(row, 1, Integer::sum);
        return counts;
    }

    private static boolean match(List<Map<String, String>> left, List<Map<String, String>> right,
                                 int index, boolean[] used, Map<String, String> forward,
                                 Map<String, String> reverse, String prefix) {
        if (index == left.size()) return true;
        var row = left.get(index);
        for (int candidate = 0; candidate < right.size(); candidate++) {
            var other = right.get(candidate);
            if (!used[candidate] && row.keySet().equals(other.keySet())) {
                Map<String, String> nextForward = new HashMap<>(forward);
                Map<String, String> nextReverse = new HashMap<>(reverse);
                if (compatible(row, other, nextForward, nextReverse, prefix)) {
                    used[candidate] = true;
                    if (match(left, right, index + 1, used, nextForward, nextReverse, prefix)) return true;
                    used[candidate] = false;
                }
            }
        }
        return false;
    }

    private static boolean compatible(Map<String, String> row, Map<String, String> other,
                                      Map<String, String> forward, Map<String, String> reverse, String prefix) {
        for (var entry : row.entrySet()) {
            if (!compatibleTerm(entry.getValue(), other.get(entry.getKey()), forward, reverse, prefix)) return false;
        }
        return true;
    }

    private static boolean compatibleTerm(String value, String other, Map<String, String> forward,
                                          Map<String, String> reverse, String prefix) {
        if (!value.startsWith(prefix) || !other.startsWith(prefix)) return value.equals(other);
        String mapped = forward.putIfAbsent(value, other);
        String inverse = reverse.putIfAbsent(other, value);
        return (mapped == null || mapped.equals(other)) && (inverse == null || inverse.equals(value));
    }
}
