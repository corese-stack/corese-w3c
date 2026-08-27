package fr.inria.corese.w3c;


import java.net.URI;
import java.util.List;
import java.util.stream.Stream;

import org.junit.jupiter.api.DynamicTest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.inria.corese.w3c.junit.dynamic.loader.W3cTestLoader;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;

/**
 * Base class for RDF 1.1 dynamic test suites.
 * Provides common functionality for loading and executing W3C RDF tests.
 */
public abstract class BaseRdf11DynamicTest {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    /**
     * Gets the manifest URL for the specific RDF format.
     *
     * @return the W3C manifest URL
     */
    protected abstract String getManifestUrl();

    /**
     * Gets the format name for display purposes.
     *
     * @return the format name (e.g., "Turtle", "N-Triples")
     */
    protected abstract String getFormatName();

    /**
     * Optional method for subclasses to provide a skip reason for known unsupported edge cases.
     *
     * @param testCase the test case to evaluate
     * @return skip reason if the test should be skipped, or null if it should be executed
     */
    protected String getSkipReason(W3cTestCase testCase) {
        return null;
    }

    /**
     * Loads and creates dynamic tests from the W3C manifest.
     *
     * @return stream of dynamic tests
     */
    protected Stream<DynamicTest> createDynamicTests() {
        try {
            List<W3cTestCase> testCases = W3cTestLoader.loadTestsFromManifest(
                    URI.create(getManifestUrl())
            );

            logger.debug("Loaded {} {} test cases from manifest",
                    testCases.size(), getFormatName());

            return testCases.stream()
                    .map(testCase -> DynamicTest.dynamicTest(
                            testCase.getFormattedDisplayName(getFormatName()),
                            () -> {
                                String skipReason = getSkipReason(testCase);
                                org.junit.jupiter.api.Assumptions.assumeTrue(skipReason == null, skipReason);
                                testCase.execute();
                            }
                    ));

        } catch (Exception e) {
            logger.error("Failed to load {} test manifest: {}",
                    getFormatName(), e.getMessage());
            throw new RuntimeException(
                    String.format("Failed to load %s tests from manifest", getFormatName()),
                    e
            );
        }
    }
}