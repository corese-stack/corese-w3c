package fr.inria.corese.w3c.sparql11;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

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

    private static final String MANIFEST_URL =
            "https://w3c.github.io/rdf-tests/sparql/sparql11/manifest.ttl";

    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "SPARQL 1.1";
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> sparql11Tests() {
        return createDynamicTests();
    }
}
