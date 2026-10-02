package fr.inria.corese.w3c.rdf11jsonld;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.report.model.Component;
import fr.inria.corese.w3c.report.model.SkipDecision;
import fr.inria.corese.w3c.report.model.SuiteDefinition;
import fr.inria.corese.w3c.report.model.Transport;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.net.URI;
import java.util.stream.Stream;

class Rdf11JsonldFromRdfDynamicTest extends BaseRdf11DynamicTest {
    private static final SuiteDefinition SUITE = new SuiteDefinition(
            "jsonld-fromrdf", "JSON-LD 1.1 (fromRdf)", Component.CORE,
            URI.create("https://www.w3.org/TR/json-ld11-api/#dom-jsonldprocessor-fromrdf"),
            URI.create("https://w3c.github.io/json-ld-api/tests/fromRdf-manifest.jsonld"),
            Transport.IN_MEMORY);

    @Override
    protected SuiteDefinition getSuiteDefinition() {
        return SUITE;
    }

    @Override
    protected SkipDecision getSkipDecision(W3cTestCase testCase) {
        return JsonLd11ConformanceProfile.skipDecision(testCase);
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11JsonldFromRdfTests() {
        return createDynamicTests();
    }
}
