package fr.inria.corese.w3c.rdf11turtle;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF 1.1 Turtle tests.
 */
class Rdf11TurtleDynamicTest extends BaseRdf11DynamicTest {

    private static final String MANIFEST_URL =
            "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/manifest.ttl";

    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "Turtle";
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11TurtleTests() {
        return createDynamicTests();
    }
}
