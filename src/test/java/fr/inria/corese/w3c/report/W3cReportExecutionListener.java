package fr.inria.corese.w3c.report;

import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.io.CoreseIO;
import fr.inria.corese.w3c.report.earl.EarlReportValidator;
import fr.inria.corese.w3c.report.earl.EarlReportWriter;
import fr.inria.corese.w3c.report.json.JsonReportWriter;
import fr.inria.corese.w3c.report.model.ExecutionOutcome;
import fr.inria.corese.w3c.report.model.ReportRunMetadataFactory;
import fr.inria.corese.w3c.report.model.TestReportData;
import org.junit.platform.launcher.TestExecutionListener;
import org.junit.platform.launcher.TestPlan;

import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Clock;
import java.time.Instant;

/** Service-loaded listener that publishes both artifacts from one normalized snapshot. */
public final class W3cReportExecutionListener implements TestExecutionListener {
    private final Clock clock = Clock.systemUTC();
    private final TestReportCollector collector = TestReportCollector.getInstance();
    private ReportRunMetadataFactory.PendingRun pendingRun;

    @Override
    public void testPlanExecutionStarted(TestPlan testPlan) {
        Instant startedAt = clock.instant();
        pendingRun = ReportRunMetadataFactory.start(startedAt);
        collector.reset(clock, pendingRun.ciRunUrl());
    }

    @Override
    public void testPlanExecutionFinished(TestPlan testPlan) {
        if (!collector.hasRegisteredSuites()) {
            return;
        }
        Path outputDirectory = Path.of(System.getProperty("w3c.report.outputDir", "build/reports"));
        Path finalJson = outputDirectory.resolve("w3c-report.json");
        Path finalTurtle = outputDirectory.resolve("earl-report.ttl");
        Path failureMarker = outputDirectory.resolve("report-generation.failure");
        Path temporaryJson = null;
        Path temporaryTurtle = null;
        try {
            TestReportData data = collector.snapshot(pendingRun.finish(clock.instant()));
            JsonReportWriter jsonWriter = new JsonReportWriter();
            EarlReportWriter earlWriter = new EarlReportWriter();
            String json = jsonWriter.serialize(data);
            String turtle = earlWriter.serialize(data);

            Files.createDirectories(outputDirectory);
            temporaryJson = Files.createTempFile(outputDirectory, ".w3c-report-", ".json");
            temporaryTurtle = Files.createTempFile(outputDirectory, ".earl-report-", ".ttl");
            AtomicReportFile.write(temporaryJson, json);
            AtomicReportFile.write(temporaryTurtle, turtle);

            EarlReportValidator validator = new EarlReportValidator();
            EarlReportValidator.ValidationResult validation = validator.validate(temporaryTurtle, data);
            Model parsed = CoreseIO.read(temporaryTurtle, RDFFormat.TURTLE);
            validator.validateJsonCoverage(parsed, temporaryJson);

            AtomicReportFile.write(finalJson, json);
            AtomicReportFile.write(finalTurtle, turtle);
            Files.deleteIfExists(failureMarker);
            printSummary(data, validation, finalJson, finalTurtle);
        } catch (Exception exception) {
            try {
                AtomicReportFile.write(failureMarker,
                        ReportTextSanitizer.sanitizeException(exception) + "\n");
            } catch (Exception markerFailure) {
                exception.addSuppressed(markerFailure);
            }
            throw new IllegalStateException("W3C report generation or validation failed", exception);
        } finally {
            deleteIfPresent(temporaryJson);
            deleteIfPresent(temporaryTurtle);
        }
    }

    private static void printSummary(
            TestReportData data,
            EarlReportValidator.ValidationResult validation,
            Path json,
            Path turtle) {
        long passed = count(data, ExecutionOutcome.PASSED);
        long failed = count(data, ExecutionOutcome.FAILED);
        long inapplicable = count(data, ExecutionOutcome.INAPPLICABLE);
        long untested = count(data, ExecutionOutcome.UNTESTED);
        long cantTell = count(data, ExecutionOutcome.CANT_TELL);
        System.out.printf(
                "%nCORESE W3C REPORT: %d total | %d passed | %d failed | %d inapplicable | %d untested | %d cantTell%n",
                data.entries().size(), passed, failed, inapplicable, untested, cantTell);
        System.out.println("JSON report: " + json);
        System.out.println("EARL report: " + turtle);
        System.out.println("Corese parse/SPARQL: OK (" + validation.coreseStatementCount()
                + " statements, " + validation.coreseSparqlQueryCount() + " queries)");
    }

    private static long count(TestReportData data, ExecutionOutcome outcome) {
        return data.entries().stream().filter(entry -> entry.outcome() == outcome).count();
    }

    private static void deleteIfPresent(Path path) {
        if (path == null) {
            return;
        }
        try {
            Files.deleteIfExists(path);
        } catch (Exception ignored) {
            // A stale randomized temporary file is preferable to masking the report result.
        }
    }
}
