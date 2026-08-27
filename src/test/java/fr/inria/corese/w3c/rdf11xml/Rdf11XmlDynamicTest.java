package fr.inria.corese.w3c.rdf11xml;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF 1.1 Xml tests using JUnit 5 @TestFactory.
 * This provides a cleaner, data-driven approach for executing W3C RDF 1.1 Xml compliance tests.
 * Tests are loaded dynamically from the W3C manifest and executed using the appropriate test executors.
 */
class Rdf11XmlDynamicTest extends BaseRdf11DynamicTest {

    private static final String MANIFEST_URL =
            "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/manifest.ttl";

    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "Xml";
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11XmlTests() {
        return createDynamicTests();
    }
}
