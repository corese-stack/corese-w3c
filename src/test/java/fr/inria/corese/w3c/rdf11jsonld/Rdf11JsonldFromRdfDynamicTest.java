package fr.inria.corese.w3c.rdf11jsonld;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

class Rdf11JsonldFromRdfDynamicTest extends BaseRdf11DynamicTest {
    private static final String MANIFEST_URL =
            "https://w3c.github.io/json-ld-api/tests/fromRdf-manifest.jsonld";
    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "Jsonld";
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11JsonldFromRdfTests() {
        return createDynamicTests();
    }
}
