package fr.inria.corese.w3c.rdf11ntriples;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.report.model.Component;
import fr.inria.corese.w3c.report.model.SuiteDefinition;
import fr.inria.corese.w3c.report.model.Transport;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF 1.1 NTriples tests.
 */
class Rdf11NTriplesDynamicTest extends BaseRdf11DynamicTest {

    private static final SuiteDefinition SUITE = new SuiteDefinition(
            "ntriples", "N-Triples (RDF 1.1)", Component.CORE,
            java.net.URI.create("https://www.w3.org/TR/n-triples/"),
            java.net.URI.create("https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/manifest.ttl"),
            Transport.IN_MEMORY);

    @Override
    protected SuiteDefinition getSuiteDefinition() {
        return SUITE;
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11NTriplesTests() {
        return createDynamicTests();
    }
}
