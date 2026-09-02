package fr.inria.corese.w3c;


import java.time.Instant;
import java.util.List;
import java.util.stream.Stream;

import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.Assumptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.inria.corese.w3c.junit.dynamic.executor.InfrastructureException;
import fr.inria.corese.w3c.junit.dynamic.loader.W3cTestLoader;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.report.TestReportCollector;
import fr.inria.corese.w3c.report.model.SkipDecision;
import fr.inria.corese.w3c.report.model.SuiteDefinition;

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
    protected abstract SuiteDefinition getSuiteDefinition();

    /**
     * Optional method for subclasses to provide a skip reason for known unsupported edge cases.
     *
     * @param testCase the test case to evaluate
     * @return skip reason if the test should be skipped, or null if it should be executed
     */
    protected SkipDecision getSkipDecision(W3cTestCase testCase) {
        return null;
    }

    /**
     * Loads and creates dynamic tests from the W3C manifest.
     *
     * @return stream of dynamic tests
     */
    protected Stream<DynamicTest> createDynamicTests() {
        SuiteDefinition suite = getSuiteDefinition();
        TestReportCollector collector = TestReportCollector.getInstance();
        try {
            List<W3cTestCase> testCases = W3cTestLoader.loadTestsFromManifest(
                    suite.manifestUri()
            );
            collector.registerSuite(suite, testCases);

            logger.debug("Loaded {} {} test cases from manifest",
                    testCases.size(), suite.displayName());

            return testCases.stream()
                    .map(testCase -> {
                        SkipDecision skipDecision = getSkipDecision(testCase);
                        String displayName = testCase.getFormattedDisplayName(suite.displayName());
                        return DynamicTest.dynamicTest(
                                displayName,
                                () -> {
                                    if (skipDecision != null) {
                                        Instant decidedAt = collector.instant();
                                        collector.recordSkipped(testCase, suite, skipDecision, decidedAt);
                                        Assumptions.assumeTrue(false, skipDecision.reason());
                                        return;
                                    }

                                    Instant startedAt = collector.instant();
                                    try {
                                        testCase.execute();
                                        collector.recordPassed(testCase, suite, startedAt, collector.instant());
                                    } catch (Throwable throwable) {
                                        Instant endedAt = collector.instant();
                                        if (InfrastructureException.causedByInfrastructure(throwable)) {
                                            collector.recordCantTell(testCase, suite, startedAt, endedAt, throwable);
                                            if (throwable instanceof InterruptedException) {
                                                Thread.currentThread().interrupt();
                                            }
                                        } else {
                                            collector.recordFailed(testCase, suite, startedAt, endedAt, throwable);
                                        }
                                        throw throwable;
                                    }
                                }
                        );
                    });

        } catch (Exception e) {
            collector.recordManifestFailure(suite, e);
            logger.error("Failed to load {} test manifest: {}",
                    suite.displayName(), e.getMessage());
            throw new RuntimeException(
                    String.format("Failed to load %s tests from manifest", suite.displayName()),
                    e
            );
        }
    }
}
