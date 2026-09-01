/**
 * Gradle-side test logging only.
 *
 * Machine-readable reports are produced by W3cReportExecutionListener directly
 * from W3cTestCase and SuiteDefinition objects. This script deliberately does
 * not parse JUnit display names and does not write report artifacts.
 */

tasks.named<Test>("test") {
    outputs.upToDateWhen { false }

    val verbose = project.hasProperty("verboseTests")
            || project.gradle.startParameter.logLevel == LogLevel.INFO
    testLogging {
        if (verbose) {
            events("started", "passed", "skipped", "failed")
            showStandardStreams = true
        } else {
            events("failed")
            showStandardStreams = false
        }
        showExceptions = true
        showCauses = true
        showStackTraces = false
        exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.SHORT
    }
}
