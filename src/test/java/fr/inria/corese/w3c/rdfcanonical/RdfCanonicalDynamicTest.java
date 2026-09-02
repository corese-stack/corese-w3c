package fr.inria.corese.w3c.rdfcanonical;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.report.model.Component;
import fr.inria.corese.w3c.report.model.SuiteDefinition;
import fr.inria.corese.w3c.report.model.Transport;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF Dataset Canonicalization (RDFC-1.0).
 * This test factory loads the official W3C RDF Canonicalization test manifest
 * and dynamically creates test cases for each test definition. Test cases are
 * routed to the appropriate executor based on their type:
 */
class RdfCanonicalDynamicTest extends BaseRdf11DynamicTest {

    private static final SuiteDefinition SUITE = new SuiteDefinition(
            "rdf-canonical", "RDFC-1.0 (Canonicalization)", Component.CORE,
            java.net.URI.create("https://www.w3.org/TR/rdf-canon/"),
            java.net.URI.create("https://w3c.github.io/rdf-canon/tests/manifest.ttl"),
            Transport.IN_MEMORY);

    @Override
    protected SuiteDefinition getSuiteDefinition() {
        return SUITE;
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdfCanonicalTests() {
        return createDynamicTests();
    }
}
