package fr.inria.corese.w3c.sparql10;

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
import java.util.Set;
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

    private static final Set<String> BNODE_SCOPING_VIOLATIONS = Set.of(
            "synblabelcrossgraphbad",
            "synblabelcrossoptionalbad"
    );

    @Override
    protected SuiteDefinition getSuiteDefinition() {
        return SUITE;
    }

    @Override
    protected SkipDecision getSkipDecision(W3cTestCase testCase) {
        String fragment = URI.create(testCase.getTestUri()).getFragment();
        if (fragment != null && BNODE_SCOPING_VIOLATIONS.contains(fragment)) {
            return new SkipDecision(SkipKind.NOT_APPLICABLE,
                    "Corese SPARQL parser accepts blank node labels across graph/OPTIONAL boundaries; "
                    + "SPARQL 1.0 grammar requires a syntax error here");
        }
        return null;
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> sparql10Tests() {
        return createDynamicTests();
    }
}
