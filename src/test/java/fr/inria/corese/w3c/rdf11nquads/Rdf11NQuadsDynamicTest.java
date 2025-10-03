package fr.inria.corese.w3c.rdf11nquads;

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
 * Dynamic test suite for RDF 1.1 NQuads tests.
 */
public class Rdf11NQuadsDynamicTest {

    private static final Logger logger = LoggerFactory.getLogger(Rdf11NQuadsDynamicTest.class);
    private static final String MANIFEST_URL = "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/manifest.ttl";

    @TestFactory
    Stream<DynamicTest> rdf11NQuadsTests() {
        try {
            List<W3cTestCase> testCases = W3cTestLoader.loadTestsFromManifest(URI.create(MANIFEST_URL));

            logger.info("Loaded {} NQuads test cases from manifest", testCases.size());

            return testCases.stream()
                    .map(testCase -> DynamicTest.dynamicTest(
                            testCase.getFormattedDisplayName("N-Quads"),
                            testCase::execute));

        } catch (Exception e) {
            logger.error("Failed to load NQuads test manifest: {}", e.getMessage());
            throw new RuntimeException("Failed to load NQuads tests from manifest", e);
        }
    }
}