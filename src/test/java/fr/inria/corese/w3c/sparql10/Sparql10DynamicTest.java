package fr.inria.corese.w3c.sparql10;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

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

    private static final String MANIFEST_URL =
            "https://w3c.github.io/rdf-tests/sparql/sparql10/manifest.ttl";

    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "SPARQL 1.0";
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> sparql10Tests() {
        return createDynamicTests();
    }
}
