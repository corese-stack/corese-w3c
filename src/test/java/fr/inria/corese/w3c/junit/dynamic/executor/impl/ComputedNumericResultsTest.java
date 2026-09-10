package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;
import static org.junit.jupiter.api.Assertions.*;

class ComputedNumericResultsTest {
    private static final String XSD = "http://www.w3.org/2001/XMLSchema#";
    private static final String PREFIX = "PREFIX xsd: <" + XSD + "> ";

    private static String literal(String value, String type) {
        return '"' + value + "\"^^<" + XSD + type + ">";
    }

    @ParameterizedTest
    @CsvSource({"decimal,2,2.0", "decimal,33.3300,33.33", "double,1.0,1.0E0",
            "float,0.0,0E0", "double,-0.0,-0E0", "decimal,123456789012345678901234567890,123456789012345678901234567890.0"})
    void acceptsExactComputedValues(String type, String left, String right) {
        assertEquals(ComputedNumericResults.normalize(literal(left, type)),
                ComputedNumericResults.normalize(literal(right, type)));
    }

    @ParameterizedTest
    @CsvSource({"decimal,2,2.1", "double,0.1,0.10000000000000001", "float,0,-0",
            "double,1E400,INF", "double,NaN,INF", "decimal,9007199254740992,9007199254740993",
            "decimal,1E0,1", "double,0x1.0p0,1", "double,1f,1", "decimal,abc,0"})
    void rejectsIncorrectValuesWithoutTolerance(String type, String left, String right) {
        assertNotEquals(ComputedNumericResults.normalize(literal(left, type)),
                ComputedNumericResults.normalize(literal(right, type)));
    }

    @Test
    void neverErasesDatatypeOrChangesStrings() {
        var decimal = ComputedNumericResults.normalize(literal("1", "decimal"));
        assertNotEquals(decimal, ComputedNumericResults.normalize(literal("1", "double")));
        assertNotEquals(decimal, ComputedNumericResults.normalize(literal("1", "integer")));
        assertEquals(literal("1.00", "string"), ComputedNumericResults.normalize(literal("1.00", "string")));
        assertEquals("\"1.00\"@en", ComputedNumericResults.normalize("\"1.00\"@en"));
    }

    @ParameterizedTest
    @ValueSource(strings = {"?value", "STRDT('2.0', xsd:decimal)", "STR(?value)",
            "'2.0'^^xsd:decimal", "+?value", "COALESCE(?value, 1/2)",
            "COALESCE(1/2, STRDT('2.0', xsd:decimal))", "COALESCE(1/2, 2.00)",
            "IF(true, 1/2, STRDT('2.0', xsd:decimal))"})
    void uncertainOrLexicalResultsStayStrict(String expression) {
        assertTrue(columns(expression).isEmpty());
    }

    @ParameterizedTest
    @ValueSource(strings = {"?a / ?b", "SECONDS(NOW())", "xsd:decimal(?value)",
            "xsd:double(?value)", "xsd:float(?value)", "COALESCE(?a / ?b, -2)"})
    void recognizesComputedNumericProjections(String expression) {
        assertEquals(Set.of("result"), columns(expression));
    }

    private static Set<String> columns(String expression) {
        return ComputedNumericResults.columns(PREFIX + "SELECT (" + expression
                + " AS ?result) WHERE { VALUES ?value { 1 } }", "http://example.org/");
    }

    @Test
    void directDataAndStrdtRemainStrictBesideCalculatedColumn() {
        var columns = ComputedNumericResults.columns(PREFIX
                + "SELECT ?source (xsd:decimal(?source) AS ?calculated)"
                + " (STRDT('2.00', xsd:decimal) AS ?constructed) WHERE { VALUES ?source { 2.00 } }", "http://example.org/");
        var expected = Map.of("source", literal("2.00", "decimal"), "calculated", literal("2.0", "decimal"),
                "constructed", literal("2.00", "decimal"));
        var valid = Map.of("source", literal("2.00", "decimal"), "calculated", literal("2", "decimal"),
                "constructed", literal("2.00", "decimal"));
        assertEquals(row(expected, columns), row(valid, columns));
        for (String name : List.of("source", "constructed")) {
            var invalid = new java.util.HashMap<>(valid);
            invalid.put(name, literal("2", "decimal"));
            assertNotEquals(row(expected, columns), row(invalid, columns), name);
        }
        var missing = new java.util.HashMap<>(valid);
        missing.remove("calculated");
        assertNotEquals(row(expected, columns), row(missing, columns));
    }

    private static String row(Map<String, String> row, Set<String> columns) {
        return SparqlQueryEvaluationTestExecutor.normalizeRow(row, columns);
    }
}
