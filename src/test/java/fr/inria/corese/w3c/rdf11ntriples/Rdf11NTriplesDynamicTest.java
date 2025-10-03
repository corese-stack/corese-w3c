package fr.inria.corese.w3c.rdf11ntriples;

import java.net.URI;
import java.util.List;
import java.util.stream.Stream;

import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.inria.corese.w3c.junit.dynamic.loader.W3cTestLoader;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;

/**
 * Dynamic test suite for RDF 1.1 NTriples tests.
 */
public class Rdf11NTriplesDynamicTest {

    private static final Logger logger = LoggerFactory.getLogger(Rdf11NTriplesDynamicTest.class);
    private static final String MANIFEST_URL = "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/manifest.ttl";

    @TestFactory
    Stream<DynamicTest> rdf11NTriplesTests() {
        try {
            List<W3cTestCase> testCases = W3cTestLoader.loadTestsFromManifest(URI.create(MANIFEST_URL));

            logger.info("Loaded {} NTriples test cases from manifest", testCases.size());

            return testCases.stream()
                    .map(testCase -> DynamicTest.dynamicTest(
                            testCase.getFormattedDisplayName("N-Triples"),
                            testCase::execute));

        } catch (Exception e) {
            logger.error("Failed to load NTriples test manifest: {}", e.getMessage());
            throw new RuntimeException("Failed to load NTriples tests from manifest", e);
        }
    }
}