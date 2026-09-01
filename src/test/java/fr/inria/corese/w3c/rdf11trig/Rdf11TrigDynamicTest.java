package fr.inria.corese.w3c.rdf11trig;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.report.model.Component;
import fr.inria.corese.w3c.report.model.SuiteDefinition;
import fr.inria.corese.w3c.report.model.Transport;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF 1.1 Trig tests.
 */
class Rdf11TrigDynamicTest extends BaseRdf11DynamicTest {

    private static final SuiteDefinition SUITE = new SuiteDefinition(
            "trig", "TriG (RDF 1.1)", Component.CORE,
            java.net.URI.create("https://www.w3.org/TR/trig/"),
            java.net.URI.create("https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/manifest.ttl"),
            Transport.IN_MEMORY);

    @Override
    protected SuiteDefinition getSuiteDefinition() {
        return SUITE;
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11TrigTests() {
        return createDynamicTests();
    }
}
