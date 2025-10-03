package fr.inria.corese.w3c.rdf11xml;

import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.loader.W3cTestLoader;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.util.List;
import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF 1.1 Xml tests using JUnit 5 @TestFactory.
 * This provides a cleaner, data-driven approach for executing W3C RDF 1.1 Xml compliance tests.
 * Tests are loaded dynamically from the W3C manifest and executed using the appropriate test executors.
 */
public class Rdf11XmlDynamicTest {

    private static final Logger logger = LoggerFactory.getLogger(Rdf11XmlDynamicTest.class);
    private static final String MANIFEST_URL = "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/manifest.ttl";

    @TestFactory
    Stream<DynamicTest> rdf11XmlTests() {
        try {
            List<W3cTestCase> testCases = W3cTestLoader.loadTestsFromManifest(URI.create(MANIFEST_URL));
            
            logger.info("Loaded {} Xml test cases from manifest", testCases.size());
            
            return testCases.stream()
                .map(testCase -> DynamicTest.dynamicTest(
                    testCase.getFormattedDisplayName("Xml"),
                    testCase::execute
                ));
                
        } catch (Exception e) {
            logger.error("Failed to load Xml test manifest: {}", e.getMessage());
            throw new RuntimeException("Failed to load Xml tests from manifest", e);
        }
    }
}