package fr.inria.corese.w3c.sparql11;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.report.model.Component;
import fr.inria.corese.w3c.report.model.SkipDecision;
import fr.inria.corese.w3c.report.model.SkipKind;
import fr.inria.corese.w3c.report.model.SuiteDefinition;
import fr.inria.corese.w3c.report.model.Transport;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.net.URI;
import java.util.Map;
import java.util.stream.Stream;

/**
 * Dynamic test suite for the W3C SPARQL 1.1 test suite.
 *
 * <p>Manifest: <a href="https://w3c.github.io/rdf-tests/sparql/sparql11/manifest.ttl">
 * https://w3c.github.io/rdf-tests/sparql/sparql11/manifest.ttl</a></p>
 *
 * <p>Tests cover:</p>
 * <ul>
 *   <li>{@code mf:QueryEvaluationTest} — SELECT, ASK, CONSTRUCT, DESCRIBE queries</li>
 *   <li>{@code mf:PositiveSyntaxTest11} — SPARQL 1.1 queries that must parse without error</li>
 *   <li>{@code mf:NegativeSyntaxTest11} — SPARQL 1.1 queries that must fail to parse</li>
 *   <li>{@code mf:PositiveUpdateSyntaxTest11} — SPARQL Update requests that must parse without error</li>
 *   <li>{@code mf:NegativeUpdateSyntaxTest11} — SPARQL Update requests that must fail to parse</li>
 *   <li>{@code mf:UpdateEvaluationTest} — SPARQL Update execution with graph state comparison</li>
 *   <li>{@code mf:CSVResultFormatTest} — SELECT results compared in CSV/TSV format</li>
 * </ul>
 */
class Sparql11DynamicTest extends BaseRdf11DynamicTest {

    private static final Map<String, SkipDecision> KNOWN_EXCLUSIONS_BY_URI = Map.of(
            "http://www.w3.org/2009/sparql/docs/tests/data-sparql11/aggregates/manifest#agg-avg-03",
            new SkipDecision(SkipKind.NOT_APPLICABLE,
                    "OBSOLETE_UNAPPROVED_DRAFT: test lacks dawgt:approval and contradicts SPARQL 1.1 §18.5.1.3 (AVG of empty group is an error / undef, not 0)")
    );

    private static final SuiteDefinition SUITE = new SuiteDefinition(
            "sparql11", "SPARQL 1.1", Component.CORE,
            URI.create("https://www.w3.org/TR/sparql11-query/"),
            URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/manifest.ttl"),
            Transport.IN_MEMORY);

    @Override
    protected SuiteDefinition getSuiteDefinition() {
        return SUITE;
    }

    @Override
    protected SkipDecision getSkipDecision(W3cTestCase testCase) {
        return testCase == null || testCase.getTestUri() == null
                ? null
                : KNOWN_EXCLUSIONS_BY_URI.get(testCase.getTestUri());
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> sparql11Tests() {
        return createDynamicTests();
    }
}
