/**
 * Custom Gradle Test Reporter for W3C Test Suites.
 *
 * Features:
 * 1. Rich ANSI Terminal Summary Table:
 *    - Aggregates leaf test results by official W3C specification suite.
 *    - Filters out internal harness unit tests to ensure strict W3C metric reporting.
 *    - Thread-safe result accumulation with ConcurrentHashMap.
 *    - Sized ASCII table with exact column and banner alignment.
 *    - Configurable verbosity (-PverboseTests=true or --info).
 *
 * 2. Machine-Readable Test Artifacts:
 *    - Exports structured JSON report to build/reports/w3c-report.json.
 *    - Captures metadata (timestamp, project version, git branch/commit, duration).
 *    - Captures suite-level summaries and per-test execution statuses with skip/failure reasons.
 */

import java.io.File
import java.time.Instant
import java.util.Collections
import java.util.concurrent.ConcurrentHashMap
import org.gradle.api.tasks.testing.TestDescriptor
import org.gradle.api.tasks.testing.TestListener
import org.gradle.api.tasks.testing.TestResult

/**
 * Individual test case execution result.
 */
class TestCaseResult(
    val name: String,
    val displayName: String,
    val status: String,
    val durationMs: Long,
    val skipReason: String? = null,
    val errorMessage: String? = null
)

/**
 * Encapsulates execution statistics for a specific W3C specification suite.
 */
class SuiteStats(val key: String, val id: String, val name: String) {
    var total: Int = 0
    var passed: Int = 0
    var failed: Int = 0
    var skipped: Int = 0
    var durationMs: Long = 0L
    val testCases = Collections.synchronizedList(mutableListOf<TestCaseResult>())

    val successRate: Double
        get() = if (total > 0) (passed.toDouble() / total.toDouble()) * 100.0 else 100.0
}

/**
 * Resolves an official W3C specification suite display name from a test class name.
 * Returns null if the class is an internal harness test rather than an official W3C suite.
 */
fun resolveSuiteName(className: String?): String? {
    if (className == null) return null
    val simpleName = className.substringAfterLast('.')
    return when (simpleName) {
        "Rdf11TurtleDynamicTest" -> "Turtle (RDF 1.1)"
        "Rdf11TrigDynamicTest" -> "TriG (RDF 1.1)"
        "Rdf11XmlDynamicTest" -> "RDF/XML (RDF 1.1)"
        "Rdf11NTriplesDynamicTest" -> "N-Triples (RDF 1.1)"
        "Rdf11NQuadsDynamicTest" -> "N-Quads (RDF 1.1)"
        "RdfCanonicalDynamicTest" -> "RDFC-1.0 (Canonicalization)"
        "Rdf11JsonldToRdfDynamicTest" -> "JSON-LD 1.1 (toRdf)"
        "Rdf11JsonldFromRdfDynamicTest" -> "JSON-LD 1.1 (fromRdf)"
        "Rdf11RDFaXHTMLDynamicTest" -> "RDFa 1.1 (XHTML)"
        "Rdf11RDFaXMLDynamicTest" -> "RDFa 1.1 (XML)"
        "Rdf11RDFaSVGDynamicTest" -> "RDFa 1.1 (SVG)"
        else -> if (simpleName.endsWith("DynamicTest")) simpleName.removeSuffix("DynamicTest") else null
    }
}

/**
 * Resolves a normalized, URL-friendly specification identifier for dashboards and reports.
 */
fun resolveSuiteId(className: String?): String {
    if (className == null) return "unknown"
    val simpleName = className.substringAfterLast('.')
    return when (simpleName) {
        "Rdf11TurtleDynamicTest" -> "turtle"
        "Rdf11TrigDynamicTest" -> "trig"
        "Rdf11XmlDynamicTest" -> "rdf-xml"
        "Rdf11NTriplesDynamicTest" -> "ntriples"
        "Rdf11NQuadsDynamicTest" -> "nquads"
        "RdfCanonicalDynamicTest" -> "rdf-canonical"
        "Rdf11JsonldToRdfDynamicTest" -> "jsonld-tordf"
        "Rdf11JsonldFromRdfDynamicTest" -> "jsonld-fromrdf"
        "Rdf11RDFaXHTMLDynamicTest" -> "rdfa-xhtml"
        "Rdf11RDFaXMLDynamicTest" -> "rdfa-xml"
        "Rdf11RDFaSVGDynamicTest" -> "rdfa-svg"
        else -> simpleName.removeSuffix("DynamicTest").lowercase()
    }
}

/**
 * Builds a clean progress bar string with filled/unfilled blocks and percentage.
 */
fun buildProgressBar(rate: Double, width: Int = 10): String {
    val filled = ((rate / 100.0) * width).toInt().coerceIn(0, width)
    val empty = width - filled
    val bar = "█".repeat(filled) + "░".repeat(empty)
    return String.format("%s %6.1f%%", bar, rate)
}

/**
 * Retrieves current git branch and short commit hash.
 */
fun getGitInfo(): Pair<String, String> {
    var branch = "unknown"
    var commit = "unknown"
    try {
        val branchProc = ProcessBuilder("git", "rev-parse", "--abbrev-ref", "HEAD").start()
        branch = branchProc.inputStream.bufferedReader().readText().trim()
        val commitProc = ProcessBuilder("git", "rev-parse", "--short", "HEAD").start()
        commit = commitProc.inputStream.bufferedReader().readText().trim()
    } catch (_: Exception) {
        // Fallback for non-git environments
    }
    return Pair(branch, commit)
}

val suiteStatsMap = ConcurrentHashMap<String, SuiteStats>()

tasks.named<Test>("test") {
    // In corese-w3c, ensure the W3C conformance suite executes and produces the report on each run
    outputs.upToDateWhen { false }

    val verbose = project.hasProperty("verboseTests") || project.gradle.startParameter.logLevel == LogLevel.INFO

    testLogging {
        if (verbose) {
            events("started", "passed", "skipped", "failed")
            showStandardStreams = true
        } else {
            // Only stream failures in default mode to avoid cluttering the terminal output
            events("failed")
            showStandardStreams = false
        }
        showExceptions = true
        showCauses = true
        showStackTraces = false
        exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.SHORT
    }

    addTestListener(object : TestListener {
        override fun beforeSuite(suite: TestDescriptor) {
            if (suite.parent == null) {
                suiteStatsMap.clear()
            }
        }

        override fun beforeTest(testDescriptor: TestDescriptor) {}

        override fun afterTest(testDescriptor: TestDescriptor, result: TestResult) {
            // Ignore container / factory descriptors, count only individual leaf test cases
            if (testDescriptor.isComposite) return

            var current: TestDescriptor? = testDescriptor
            var resolvedClass: String? = null

            while (current != null) {
                if (!current.className.isNullOrBlank()) {
                    resolvedClass = current.className
                    break
                }
                current = current.parent
            }

            val suiteName = resolveSuiteName(resolvedClass) ?: return
            val suiteKey = resolvedClass ?: "unknown"
            val suiteId = resolveSuiteId(resolvedClass)
            val stats = suiteStatsMap.computeIfAbsent(suiteKey) { SuiteStats(suiteKey, suiteId, suiteName) }

            val duration = result.endTime - result.startTime
            val status = when (result.resultType) {
                TestResult.ResultType.SUCCESS -> "PASSED"
                TestResult.ResultType.FAILURE -> "FAILED"
                TestResult.ResultType.SKIPPED -> "SKIPPED"
                null -> "UNKNOWN"
            }

            val rawDisplayName = testDescriptor.displayName
            val skipReason = if (rawDisplayName.contains(" [EXCLUDED: ")) {
                rawDisplayName.substringAfter(" [EXCLUDED: ").substringBeforeLast("]")
            } else null

            val cleanDisplayName = if (skipReason != null) {
                rawDisplayName.replace(" [EXCLUDED: " + skipReason + "]", "")
            } else rawDisplayName

            val errorMessage = if (result.resultType == TestResult.ResultType.FAILURE) {
                result.exceptions.firstOrNull()?.message ?: result.exceptions.firstOrNull()?.toString()
            } else null

            synchronized(stats) {
                stats.total++
                when (result.resultType) {
                    TestResult.ResultType.SUCCESS -> stats.passed++
                    TestResult.ResultType.FAILURE -> stats.failed++
                    TestResult.ResultType.SKIPPED -> stats.skipped++
                    null -> {}
                }
                stats.durationMs += duration
                stats.testCases.add(TestCaseResult(
                    name = testDescriptor.name,
                    displayName = cleanDisplayName,
                    status = status,
                    durationMs = duration,
                    skipReason = skipReason,
                    errorMessage = errorMessage
                ))
            }
        }

        override fun afterSuite(suite: TestDescriptor, result: TestResult) {
            // Render consolidated report table only when the root test suite finishes
            if (suite.parent == null) {
                if (suiteStatsMap.isEmpty()) return

                val bold = "\u001B[1m"
                val green = "\u001B[32m"
                val yellow = "\u001B[33m"
                val red = "\u001B[31m"
                val muted = "\u001B[90m"
                val reset = "\u001B[0m"

                val totalTests = suiteStatsMap.values.sumOf { it.total }
                val totalPassed = suiteStatsMap.values.sumOf { it.passed }
                val totalFailed = suiteStatsMap.values.sumOf { it.failed }
                val totalSkipped = suiteStatsMap.values.sumOf { it.skipped }
                val totalRate = if (totalTests > 0) (totalPassed.toDouble() / totalTests.toDouble()) * 100.0 else 100.0
                val totalDurationSec = (result.endTime - result.startTime) / 1000.0

                val sortedSuites = suiteStatsMap.values.sortedBy { it.name }

                val nameColWidth = 34
                val numColWidth = 7
                val confColWidth = 18

                val topBorder = "┌" + "─".repeat(nameColWidth + 2) + "┬" + ("─".repeat(numColWidth + 2) + "┬").repeat(4) + "─".repeat(confColWidth + 2) + "┐"
                val midBorder = "├" + "─".repeat(nameColWidth + 2) + "┼" + ("─".repeat(numColWidth + 2) + "┼").repeat(4) + "─".repeat(confColWidth + 2) + "┤"
                val botBorder = "└" + "─".repeat(nameColWidth + 2) + "┴" + ("─".repeat(numColWidth + 2) + "┴").repeat(4) + "─".repeat(confColWidth + 2) + "┘"

                val headerStr = String.format("│ %-${nameColWidth}s │ %${numColWidth}s │ %${numColWidth}s │ %${numColWidth}s │ %${numColWidth}s │ %-${confColWidth}s │",
                    "W3C Specification Suite", "Total", "Passed", "Failed", "Skipped", "Conformance")

                val title = "CORESE W3C CONFORMANCE"
                val bannerLine = "=".repeat(topBorder.length)
                val totalPad = topBorder.length - title.length
                val leftPad = totalPad / 2
                val rightPad = totalPad - leftPad
                val centeredTitle = " ".repeat(leftPad) + title + " ".repeat(rightPad)

                println()
                println(bold + bannerLine + reset)
                println(bold + centeredTitle + reset)
                println(bold + bannerLine + reset)
                println(topBorder)
                println(bold + headerStr + reset)
                println(midBorder)

                for (s in sortedSuites) {
                    val nameStr = String.format("%-${nameColWidth}s", s.name)
                    val totalStr = String.format("%${numColWidth}d", s.total)
                    val passedStr = if (s.passed > 0) green + String.format("%${numColWidth}d", s.passed) + reset else String.format("%${numColWidth}d", s.passed)
                    val failedStr = if (s.failed > 0) red + String.format("%${numColWidth}d", s.failed) + reset else String.format("%${numColWidth}d", s.failed)
                    val skippedStr = if (s.skipped > 0) yellow + String.format("%${numColWidth}d", s.skipped) + reset else String.format("%${numColWidth}d", s.skipped)
                    val barStr = buildProgressBar(s.successRate, 10)

                    println("│ " + nameStr + " │ " + totalStr + " │ " + passedStr + " │ " + failedStr + " │ " + skippedStr + " │ " + barStr + " │")
                }

                println(midBorder)
                val totalNameStr = bold + String.format("%-${nameColWidth}s", "TOTAL CONSOLIDATED") + reset
                val totalTestsStr = bold + String.format("%${numColWidth}d", totalTests) + reset
                val totalPassedStr = bold + green + String.format("%${numColWidth}d", totalPassed) + reset
                val totalFailedStr = (if (totalFailed > 0) bold + red else bold) + String.format("%${numColWidth}d", totalFailed) + reset
                val totalSkippedStr = (if (totalSkipped > 0) bold + yellow else bold) + String.format("%${numColWidth}d", totalSkipped) + reset
                val totalBarStr = bold + buildProgressBar(totalRate, 10) + reset

                println("│ " + totalNameStr + " │ " + totalTestsStr + " │ " + totalPassedStr + " │ " + totalFailedStr + " │ " + totalSkippedStr + " │ " + totalBarStr + " │")
                println(botBorder)

                val summaryColor = if (totalFailed == 0) green else red
                println(String.format("%s%sExecution time: %.2fs | %d tests executed | %d passed | %d failures | %d documented skips%s",
                    bold, summaryColor, totalDurationSec, totalTests, totalPassed, totalFailed, totalSkipped, reset))
                if (totalSkipped > 0) {
                    println(muted + "Note: Skipped tests are documented with rationale in docs/W3C_TEST_EXCLUSIONS.md" + reset)
                }
                println(bold + bannerLine + reset)
                println()

                // Generate machine-readable JSON artifact: build/reports/w3c-report.json
                try {
                    val reportDir = project.layout.buildDirectory.dir("reports").get().asFile
                    reportDir.mkdirs()
                    val reportFile = File(reportDir, "w3c-report.json")
                    val (gitBranch, gitCommit) = getGitInfo()

                    val reportMap = linkedMapOf(
                        "metadata" to linkedMapOf(
                            "generatedAt" to Instant.now().toString(),
                            "project" to project.name,
                            "version" to project.version.toString(),
                            "git" to linkedMapOf(
                                "branch" to gitBranch,
                                "commit" to gitCommit
                            ),
                            "durationSeconds" to (Math.round(totalDurationSec * 100.0) / 100.0)
                        ),
                        "summary" to linkedMapOf(
                            "total" to totalTests,
                            "passed" to totalPassed,
                            "failed" to totalFailed,
                            "skipped" to totalSkipped,
                            "passRate" to (Math.round(totalRate * 100.0) / 100.0)
                        ),
                        "suites" to sortedSuites.map { s ->
                            linkedMapOf(
                                "id" to s.id,
                                "name" to s.name,
                                "total" to s.total,
                                "passed" to s.passed,
                                "failed" to s.failed,
                                "skipped" to s.skipped,
                                "passRate" to (Math.round(s.successRate * 100.0) / 100.0),
                                "durationMs" to s.durationMs,
                                "tests" to s.testCases.map { t ->
                                    val testMap = linkedMapOf<String, Any?>(
                                        "name" to t.name,
                                        "displayName" to t.displayName,
                                        "status" to t.status,
                                        "durationMs" to t.durationMs
                                    )
                                    if (t.skipReason != null) testMap["skipReason"] = t.skipReason
                                    if (t.errorMessage != null) testMap["errorMessage"] = t.errorMessage
                                    testMap
                                }
                            )
                        }
                    )

                    reportFile.writeText(groovy.json.JsonOutput.prettyPrint(groovy.json.JsonOutput.toJson(reportMap)))
                    println(muted + "JSON conformance report generated: " + reportFile.relativeTo(project.rootDir).path + reset)
                } catch (e: Exception) {
                    logger.warn("Failed to generate w3c-report.json: {}", e.message)
                }
            }
        }
    })
}
