package fr.inria.corese.w3c.rdf11nquads;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF 1.1 NQuads tests.
 */
class Rdf11NQuadsDynamicTest extends BaseRdf11DynamicTest {

    private static final String MANIFEST_URL =
            "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/manifest.ttl";

    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "N-Quads";
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11NQuadsTests() {
        return createDynamicTests();
    }
}
