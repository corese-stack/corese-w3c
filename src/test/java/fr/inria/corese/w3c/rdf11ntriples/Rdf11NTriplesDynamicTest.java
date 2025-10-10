package fr.inria.corese.w3c.rdf11ntriples;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF 1.1 NTriples tests.
 */
public class Rdf11NTriplesDynamicTest extends BaseRdf11DynamicTest {

    private static final String MANIFEST_URL =
            "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/manifest.ttl";

    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "N-Triples";
    }

    @TestFactory
    Stream<DynamicTest> rdf11NTriplesTests() {
        return createDynamicTests();
    }
}