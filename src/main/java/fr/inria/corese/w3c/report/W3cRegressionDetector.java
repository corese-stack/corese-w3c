package fr.inria.corese.w3c.report;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

/**
 * Detects regressions between the current W3C conformance test run and a reference baseline report.
 * <p>
 * A regression occurs when a test case that was previously PASSED in the baseline report
 * is now missing or has an outcome other than PASSED (FAILED, UNTESTED, INAPPLICABLE, CANT_TELL).
 * Known failures (tests already failing in baseline) or newly introduced test cases are not regressions.
 */
public final class W3cRegressionDetector {

    private static final Logger logger = LoggerFactory.getLogger(W3cRegressionDetector.class);
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    private static final String UNKNOWN = "unknown";
    private static final String PASSED = "PASSED";
    private static final String MISSING = "MISSING";
    private static final String OPT_UPDATE = "--update-baseline";

    private W3cRegressionDetector() {
        // Utility class
    }

    public record BaselineTest(
            String suiteId,
            String suiteName,
            String testKey,
            String displayName,
            String outcome) {
    }

    public record CurrentTest(
            String suiteId,
            String suiteName,
            String testKey,
            String displayName,
            String outcome,
            String errorMessage) {
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
            throw new IllegalArgumentException("Baseline report file does not exist or is empty: " + baselineReportFile
                    + ". A committed baseline is required to enforce regressions.");
        }

        JsonNode currentJson = OBJECT_MAPPER.readTree(currentReportFile);
        JsonNode baselineJson = OBJECT_MAPPER.readTree(baselineReportFile);

        Map<String, BaselineTest> baselineMap = extractBaseline(baselineJson);
        if (baselineMap.isEmpty()) {
            throw new IllegalArgumentException("Baseline report contains no test cases: " + baselineReportFile);
        }

        Map<String, CurrentTest> currentMap = extractCurrent(currentJson);

        List<Regression> regressions = new ArrayList<>();
        int stablePasses = verifyBaselinePasses(baselineMap, currentMap, regressions);
        int improvements = countImprovements(baselineMap, currentMap);

        if (improvements > 0) {
            logger.info("Progress detected: {} tests transitioned to PASSED", improvements);
        }
        logger.info("Conformance regression analysis: {} stable passes, {} regressions detected", stablePasses, regressions.size());
        return regressions;
    }

    /**
     * Validates that the current report is complete and does not drop test cases before updating the reference baseline.
     *
     * @param currentReportFile  the freshly generated complete JSON report
     * @param baselineReportFile the reference baseline destination file
     * @throws IOException on I/O error
     */
    public static void updateBaseline(File currentReportFile, File baselineReportFile) throws IOException {
        if (!currentReportFile.exists() || currentReportFile.length() == 0) {
            throw new IllegalArgumentException("Cannot update baseline: report file does not exist or is empty: " + currentReportFile);
        }

        JsonNode currentJson = OBJECT_MAPPER.readTree(currentReportFile);
        Map<String, CurrentTest> currentMap = extractCurrent(currentJson);
        if (currentMap.isEmpty()) {
            throw new IllegalArgumentException("Cannot update baseline: current report contains 0 tests.");
        }

        if (baselineReportFile.exists() && baselineReportFile.length() > 0) {
            JsonNode baselineJson = OBJECT_MAPPER.readTree(baselineReportFile);
            Map<String, BaselineTest> baselineMap = extractBaseline(baselineJson);
            validateNoDroppedBaselineKeys(baselineMap, currentMap);
        }

        File parentDir = baselineReportFile.getParentFile();
        if (parentDir != null && !parentDir.exists()) {
            parentDir.mkdirs();
        }
        OBJECT_MAPPER.writerWithDefaultPrettyPrinter().writeValue(baselineReportFile, currentJson);
        logger.info("Successfully updated reference W3C baseline with {} tests at {}", currentMap.size(), baselineReportFile);
    }

    private static void validateNoDroppedBaselineKeys(
            Map<String, BaselineTest> baselineMap,
            Map<String, CurrentTest> currentMap) {
        List<String> missingKeys = new ArrayList<>();
        for (String key : baselineMap.keySet()) {
            if (!currentMap.containsKey(key)) {
                missingKeys.add(key);
            }
        }

        if (!missingKeys.isEmpty()) {
            throw new IllegalArgumentException(String.format(
                    "Cannot update baseline: current report is partial (contains %d tests, but baseline contains %d tests). Missing %d tests (e.g. '%s').",
                    currentMap.size(), baselineMap.size(), missingKeys.size(), missingKeys.getFirst()));
        }
    }

    private static int verifyBaselinePasses(
            Map<String, BaselineTest> baselineMap,
            Map<String, CurrentTest> currentMap,
            List<Regression> regressions) {
        int stablePasses = 0;
        for (BaselineTest baseline : baselineMap.values()) {
            if (PASSED.equals(baseline.outcome())) {
                CurrentTest current = currentMap.get(baseline.testKey());
                if (current == null) {
                    regressions.add(new Regression(
                            baseline.suiteName(), baseline.displayName(),
                            baseline.outcome(), MISSING, "Test was removed or not executed in current run"));
                } else if (!PASSED.equals(current.outcome())) {
                    regressions.add(new Regression(
                            baseline.suiteName(), baseline.displayName(),
                            baseline.outcome(), current.outcome(), current.errorMessage()));
                } else {
                    stablePasses++;
                }
            }
        }
        return stablePasses;
    }

    private static int countImprovements(
            Map<String, BaselineTest> baselineMap,
            Map<String, CurrentTest> currentMap) {
        int improvements = 0;
        for (CurrentTest current : currentMap.values()) {
            BaselineTest baseline = baselineMap.get(current.testKey());
            if (baseline != null && !PASSED.equals(baseline.outcome()) && PASSED.equals(current.outcome())) {
                improvements++;
            }
        }
        return improvements;
    }

    private static Map<String, BaselineTest> extractBaseline(JsonNode reportNode) {
        Map<String, BaselineTest> map = new HashMap<>();
        JsonNode suites = reportNode.path("suites");
        if (suites.isArray()) {
            for (JsonNode suiteNode : suites) {
                String suiteId = suiteNode.path("id").asText(UNKNOWN);
                String suiteName = suiteNode.path("name").asText(suiteId);
                JsonNode tests = suiteNode.path("tests");
                if (tests.isArray()) {
                    for (JsonNode testNode : tests) {
                        String testKey = buildTestKey(suiteId, testNode);
                        String displayName = testNode.path("displayName").asText(testNode.path("name").asText(testKey));
                        String outcome = testNode.path("outcome").asText(UNKNOWN).toUpperCase(Locale.ROOT);
                        map.put(testKey, new BaselineTest(suiteId, suiteName, testKey, displayName, outcome));
                    }
                }
            }
        }
        return map;
    }

    private static Map<String, CurrentTest> extractCurrent(JsonNode reportNode) {
        Map<String, CurrentTest> map = new HashMap<>();
        JsonNode suites = reportNode.path("suites");
        if (suites.isArray()) {
            for (JsonNode suiteNode : suites) {
                String suiteId = suiteNode.path("id").asText(UNKNOWN);
                String suiteName = suiteNode.path("name").asText(suiteId);
                JsonNode tests = suiteNode.path("tests");
                if (tests.isArray()) {
                    for (JsonNode testNode : tests) {
                        String testKey = buildTestKey(suiteId, testNode);
                        String displayName = testNode.path("displayName").asText(testNode.path("name").asText(testKey));
                        String outcome = testNode.path("outcome").asText(UNKNOWN).toUpperCase(Locale.ROOT);
                        String errorMsg = testNode.path("errorMessage").asText("Assertion failed");
                        map.put(testKey, new CurrentTest(suiteId, suiteName, testKey, displayName, outcome, errorMsg));
                    }
                }
            }
        }
        return map;
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
     * @param args array containing [currentReportPath, baselineReportPath] or [--update-baseline, currentReportPath, baselineReportPath]
     * @throws IOException on I/O failure
     */
    public static void main(String[] args) throws IOException {
        if (args.length == 3 && OPT_UPDATE.equals(args[0])) {
            updateBaseline(new File(args[1]), new File(args[2]));
            return;
        }

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
