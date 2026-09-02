package fr.inria.corese.w3c.rdf11rdfa.xhtml;

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
import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF 1.1 RDFa+XHTML tests.
 */
class Rdf11RDFaXHTMLDynamicTest extends BaseRdf11DynamicTest {

    private static final SuiteDefinition SUITE = new SuiteDefinition(
            "rdfa-xhtml", "RDFa 1.1 (XHTML)", Component.CORE,
            URI.create("https://www.w3.org/TR/rdfa-core/"),
            URI.create("https://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/manifest.ttl"),
            Transport.IN_MEMORY);

    @Override
    protected SuiteDefinition getSuiteDefinition() {
        return SUITE;
    }

    @Override
    protected SkipDecision getSkipDecision(W3cTestCase testCase) {
        String testId = URI.create(testCase.getTestUri()).getFragment();
        return "0295".equals(testId)
                ? new SkipDecision(SkipKind.DEFERRED,
                        "UPSTREAM_FIXTURE: benchmark concatenation changes RDFa list and context scope, while its expected graph is the union of isolated tests")
                : null;
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11RDFaXHTMLTests() {
        return createDynamicTests();
    }
}
