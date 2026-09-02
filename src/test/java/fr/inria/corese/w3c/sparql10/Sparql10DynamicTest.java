package fr.inria.corese.w3c.sparql10;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.report.model.Component;
import fr.inria.corese.w3c.report.model.SuiteDefinition;
import fr.inria.corese.w3c.report.model.Transport;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.net.URI;
import java.util.stream.Stream;

/**
 * Dynamic test suite for the W3C SPARQL 1.0 test suite.
 *
 * <p>Manifest: <a href="https://w3c.github.io/rdf-tests/sparql/sparql10/manifest.ttl">
 * https://w3c.github.io/rdf-tests/sparql/sparql10/manifest.ttl</a></p>
 *
 * <p>Tests cover:</p>
 * <ul>
 *   <li>{@code mf:QueryEvaluationTest} — SELECT, ASK, CONSTRUCT, DESCRIBE queries</li>
 *   <li>{@code mf:PositiveSyntaxTest} — queries that must parse without error</li>
 *   <li>{@code mf:NegativeSyntaxTest} — queries that must fail to parse</li>
 * </ul>
 */
class Sparql10DynamicTest extends BaseRdf11DynamicTest {

    private static final SuiteDefinition SUITE = new SuiteDefinition(
            "sparql10", "SPARQL 1.0", Component.CORE,
            URI.create("https://www.w3.org/TR/rdf-sparql-query/"),
            URI.create("https://w3c.github.io/rdf-tests/sparql/sparql10/manifest.ttl"),
            Transport.IN_MEMORY);

    @Override
    protected SuiteDefinition getSuiteDefinition() {
        return SUITE;
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> sparql10Tests() {
        return createDynamicTests();
    }
}
