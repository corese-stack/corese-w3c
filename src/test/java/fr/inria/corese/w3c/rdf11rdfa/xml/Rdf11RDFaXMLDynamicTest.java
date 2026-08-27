package fr.inria.corese.w3c.rdf11rdfa.xml;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.net.URI;
import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF 1.1 RDFa+XML tests.
 */
class Rdf11RDFaXMLDynamicTest extends BaseRdf11DynamicTest {

    private static final String MANIFEST_URL =
            "https://rdfa.info/test-suite/test-cases/rdfa1.1/xml/manifest.ttl";

    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "RDFa+XML";
    }

    @Override
    protected String getSkipReason(W3cTestCase testCase) {
        String testId = URI.create(testCase.getTestUri()).getFragment();
        return "0295".equals(testId)
                ? "UPSTREAM_FIXTURE: benchmark mixes HTML-only rules into XML and compares concatenated markup with isolated-test results"
                : null;
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11RDFaXMLTests() {
        return createDynamicTests();
    }
}
