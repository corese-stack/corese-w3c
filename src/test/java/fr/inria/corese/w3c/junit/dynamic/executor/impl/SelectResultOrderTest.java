package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SelectResultOrderTest {
    private static String literal(String value, String type) {
        return '"' + value + "\"^^<http://www.w3.org/2001/XMLSchema#" + type + ">";
    }
    private static Map<String, String> number(String value) { return Map.of("x", literal(value, "integer")); }
    private static void verify(String order, List<Map<String, String>> rows) {
        SelectResultOrder.verify("SELECT ?x ?y WHERE { ?x ?p ?y } " + order,
                "http://example.org/", List.of("x", "y"), rows);
    }

    @Test void checksAscendingAndDescendingNumericOrder() {
        assertDoesNotThrow(() -> verify("ORDER BY ?x", List.of(number("2"), number("10"))));
        assertThrows(AssertionError.class, () -> verify("ORDER BY ?x", List.of(number("10"), number("2"))));
        assertDoesNotThrow(() -> verify("ORDER BY DESC(?x)", List.of(number("10"), number("2"))));
        assertThrows(AssertionError.class, () -> verify("ORDER BY DESC(?x)", List.of(number("2"), number("10"))));
    }

    @Test void allowsUnorderedQueriesAndTies() {
        assertDoesNotThrow(() -> verify("", List.of(number("2"), number("1"))));
        var a = Map.of("x", literal("1", "integer"), "y", "<urn:z>");
        var b = Map.of("x", literal("1", "integer"), "y", "<urn:a>");
        assertDoesNotThrow(() -> verify("ORDER BY ?x", List.of(a, b)));
        assertThrows(AssertionError.class, () -> verify("ORDER BY ?x ?y", List.of(a, b)));
    }

    @Test void differentNumericTermsWithEqualValuesDoNotForceSecondaryOrder() {
        var a = Map.of("x", literal("1", "integer"), "y", "<urn:z>");
        var b = Map.of("x", literal("1.0", "decimal"), "y", "<urn:a>");
        assertDoesNotThrow(() -> verify("ORDER BY ?x ?y", List.of(a, b)));
    }

    @Test void checksTermCategoriesWithoutOrderingDistinctBlankNodes() {
        assertDoesNotThrow(() -> verify("ORDER BY ?x", List.of(Map.of(), Map.of("x", "_:b_z"),
                Map.of("x", "_:b_a"), Map.of("x", "<urn:a>"), number("1"))));
        assertThrows(AssertionError.class, () -> verify("ORDER BY ?x", List.of(number("1"), Map.of())));
    }

    @Test void comparesUnicodeCodepointsAndBooleans() {
        assertThrows(AssertionError.class, () -> verify("ORDER BY ?x", List.of(
                Map.of("x", literal("😀", "string")), Map.of("x", literal("\uE000", "string")))));
        assertThrows(AssertionError.class, () -> verify("ORDER BY ?x", List.of(
                Map.of("x", literal("true", "boolean")), Map.of("x", literal("false", "boolean")))));
    }

    @Test void doesNotInventOrderForLanguageTagsOrHiddenKeys() {
        assertDoesNotThrow(() -> verify("ORDER BY ?x", List.of(Map.of("x", "\"z\"@en"), Map.of("x", "\"a\"@en"))));
        assertDoesNotThrow(() -> verify("ORDER BY ?p ?x", List.of(number("2"), number("1"))));
        assertDoesNotThrow(() -> verify("ORDER BY STR(?x)", List.of(number("2"), number("1"))));
    }

    @Test void doesNotAssignNumericOrderToIllTypedLiterals() {
        assertDoesNotThrow(() -> verify("ORDER BY ?x", List.of(
                Map.of("x", literal("2.5", "integer")), number("1"))));
        assertDoesNotThrow(() -> verify("ORDER BY ?x", List.of(
                Map.of("x", literal("2E0", "decimal")), number("1"))));
        assertDoesNotThrow(() -> verify("ORDER BY ?x", List.of(
                Map.of("x", literal("-2", "positiveInteger")), number("-3"))));
    }

    @Test void incomparableIntermediateTermDoesNotHideNumericInversion() {
        assertThrows(AssertionError.class, () -> verify("ORDER BY ?x", List.of(number("2"),
                Map.of("x", "\"z\"@en"), number("1"))));
    }
}
