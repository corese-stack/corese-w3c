package fr.inria.corese.w3c.rdf11xml;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.report.model.Component;
import fr.inria.corese.w3c.report.model.SuiteDefinition;
import fr.inria.corese.w3c.report.model.Transport;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF 1.1 Xml tests using JUnit 5 @TestFactory.
 * This provides a cleaner, data-driven approach for executing W3C RDF 1.1 Xml compliance tests.
 * Tests are loaded dynamically from the W3C manifest and executed using the appropriate test executors.
 */
class Rdf11XmlDynamicTest extends BaseRdf11DynamicTest {

    private static final SuiteDefinition SUITE = new SuiteDefinition(
            "rdf-xml", "RDF/XML (RDF 1.1)", Component.CORE,
            java.net.URI.create("https://www.w3.org/TR/rdf-syntax-grammar/"),
            java.net.URI.create("https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/manifest.ttl"),
            Transport.IN_MEMORY);

    @Override
    protected SuiteDefinition getSuiteDefinition() {
        return SUITE;
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11XmlTests() {
        return createDynamicTests();
    }
}
