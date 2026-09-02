package fr.inria.corese.w3c.report;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

/**
 * Detects regressions between the current W3C conformance test run and a baseline report.
 * <p>
 * A regression occurs when a test case that previously PASSED in the baseline report
 * is now FAILED in the current report.
 * Known failures (tests already failing in baseline) or newly introduced test cases are not regressions.
 */
public final class W3cRegressionDetector {

    private static final Logger logger = LoggerFactory.getLogger(W3cRegressionDetector.class);
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    private static final String UNKNOWN = "unknown";
    private static final String PASSED = "PASSED";
    private static final String FAILED = "FAILED";

    private W3cRegressionDetector() {
        // Utility class
    }

    public record Regression(
            String suiteName,
            String testName,
            String outcomeBefore,
            String outcomeAfter,
            String errorMessage) {
    }

    /**
     * Compares the current report against the baseline report and returns any detected regressions.
     *
     * @param currentReportFile  the freshly generated JSON report
     * @param baselineReportFile the reference baseline JSON report
     * @return list of detected regressions (empty if no regressions found)
     * @throws IOException if a report file cannot be read
     */
    public static List<Regression> detectRegressions(File currentReportFile, File baselineReportFile) throws IOException {
        if (!currentReportFile.exists() || currentReportFile.length() == 0) {
            throw new IllegalArgumentException("Current report file does not exist or is empty: " + currentReportFile);
        }
        if (!baselineReportFile.exists() || baselineReportFile.length() == 0) {
            logger.info("Baseline report not found at {}. Initial run, no regressions possible.", baselineReportFile);
            return Collections.emptyList();
        }

        JsonNode currentJson = OBJECT_MAPPER.readTree(currentReportFile);
        JsonNode baselineJson = OBJECT_MAPPER.readTree(baselineReportFile);

        Map<String, String> baselineOutcomes = extractOutcomes(baselineJson);
        List<Regression> regressions = new ArrayList<>();
        int[] counters = new int[2]; // index 0: stablePasses, index 1: improvements

        JsonNode currentSuites = currentJson.path("suites");
        if (currentSuites.isArray()) {
            for (JsonNode suiteNode : currentSuites) {
                processSuite(suiteNode, baselineOutcomes, regressions, counters);
            }
        }

        if (counters[1] > 0) {
            logger.info("Progress detected: {} tests transitioned from FAILED to PASSED", counters[1]);
        }
        logger.info("Conformance regression analysis: {} stable passes, {} regressions detected", counters[0], regressions.size());
        return regressions;
    }

    private static void processSuite(
            JsonNode suiteNode,
            Map<String, String> baselineOutcomes,
            List<Regression> regressions,
            int[] counters) {
        String suiteId = suiteNode.path("id").asText(UNKNOWN);
        String suiteName = suiteNode.path("name").asText(suiteId);
        JsonNode tests = suiteNode.path("tests");
        if (tests.isArray()) {
            for (JsonNode testNode : tests) {
                processTest(suiteId, suiteName, testNode, baselineOutcomes, regressions, counters);
            }
        }
    }

    private static void processTest(
            String suiteId,
            String suiteName,
            JsonNode testNode,
            Map<String, String> baselineOutcomes,
            List<Regression> regressions,
            int[] counters) {
        String testKey = buildTestKey(suiteId, testNode);
        String currentOutcome = testNode.path("outcome").asText("UNKNOWN").toUpperCase(Locale.ROOT);
        String baselineOutcome = baselineOutcomes.get(testKey);

        if (baselineOutcome == null) {
            return;
        }

        if (PASSED.equals(baselineOutcome) && FAILED.equals(currentOutcome)) {
            String testName = testNode.path("displayName").asText(testNode.path("name").asText(testKey));
            String errorMsg = testNode.path("errorMessage").asText("Assertion failed");
            regressions.add(new Regression(suiteName, testName, baselineOutcome, currentOutcome, errorMsg));
        } else if (FAILED.equals(baselineOutcome) && PASSED.equals(currentOutcome)) {
            counters[1]++; // improvements
        } else if (PASSED.equals(baselineOutcome) && PASSED.equals(currentOutcome)) {
            counters[0]++; // stablePasses
        }
    }

    private static Map<String, String> extractOutcomes(JsonNode reportNode) {
        Map<String, String> outcomes = new HashMap<>();
        JsonNode suites = reportNode.path("suites");
        if (suites.isArray()) {
            for (JsonNode suiteNode : suites) {
                String suiteId = suiteNode.path("id").asText(UNKNOWN);
                JsonNode tests = suiteNode.path("tests");
                if (tests.isArray()) {
                    for (JsonNode testNode : tests) {
                        String testKey = buildTestKey(suiteId, testNode);
                        String outcome = testNode.path("outcome").asText("UNKNOWN").toUpperCase(Locale.ROOT);
                        outcomes.put(testKey, outcome);
                    }
                }
            }
        }
        return outcomes;
    }

    private static String buildTestKey(String suiteId, JsonNode testNode) {
        String testUri = testNode.path("testUri").asText("");
        if (!testUri.isBlank()) {
            return suiteId + "#" + testUri;
        }
        String actionUri = testNode.path("actionUri").asText("");
        if (!actionUri.isBlank()) {
            return suiteId + "#" + actionUri;
        }
        String name = testNode.path("name").asText(UNKNOWN);
        return suiteId + "#" + name;
    }

    /**
     * Entry point for CLI and Gradle task execution.
     *
     * @param args array containing [currentReportPath, baselineReportPath]
     * @throws IOException on I/O failure
     */
    public static void main(String[] args) throws IOException {
        if (args.length < 2) {
            logger.error("Usage: W3cRegressionDetector <current-report.json> <baseline-report.json>");
            System.exit(1);
        }

        File currentFile = new File(args[0]);
        File baselineFile = new File(args[1]);

        List<Regression> regressions = detectRegressions(currentFile, baselineFile);
        if (!regressions.isEmpty()) {
            logger.error("W3C CONFORMANCE REGRESSION DETECTED: {} failure(s)", regressions.size());
            for (Regression r : regressions) {
                logger.error("[{}] {} - Previous: {} -> Current: {} | Error: {}",
                        r.suiteName(), r.testName(), r.outcomeBefore(), r.outcomeAfter(), r.errorMessage());
            }
            throw new IllegalStateException("W3C Conformance Regression: " + regressions.size() + " previously passing test(s) failed!");
        }

        logger.info("W3C Conformance Regression Check: OK (0 regressions)");
    }
}
