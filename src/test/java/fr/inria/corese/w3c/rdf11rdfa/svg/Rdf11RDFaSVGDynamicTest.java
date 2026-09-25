package fr.inria.corese.w3c.rdf11rdfa.svg;

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
 * Dynamic test suite for RDF 1.1 RDFa+SVG tests.
 */
class Rdf11RDFaSVGDynamicTest extends BaseRdf11DynamicTest {

    private static final SuiteDefinition SUITE = new SuiteDefinition(
            "rdfa-svg", "RDFa 1.1 (SVG)", Component.CORE,
            URI.create("https://www.w3.org/TR/SVG11/"),
            URI.create("https://rdfa.info/test-suite/test-cases/rdfa1.1/svg/manifest.ttl"),
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
                        "UPSTREAM_FIXTURE: benchmark mixes HTML-only rules into SVG and compares concatenated markup with isolated-test results")
                : null;
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11RDFaSVGTests() {
        return createDynamicTests();
    }
}
