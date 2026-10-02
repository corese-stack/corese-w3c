package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.w3c.junit.dynamic.executor.factory.TestExecutorFactory;
import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import static org.junit.jupiter.api.Assertions.*;

class RdfaPositiveEvaluationTestExecutorTest {
    @TempDir
    Path directory;
    private static final String QUERY = "ASK { <urn:s> <urn:p> 'expected' }";

    @Test
    void positiveRdfaTestsUseTheAskExecutor() {
        assertInstanceOf(RdfaPositiveEvaluationTestExecutor.class,
                TestExecutorFactory.createExecutor(TestType.RDFA_POSITIVE_EVAL));
    }

    @Test
    void acceptsPresenceWhenPatternMatches() {
        var model = RDFTestUtils.createModel();
        var values = Values.factory();
        model.add(values.createIRI("urn:s"), values.createIRI("urn:p"), values.createLiteral("expected"));
        assertDoesNotThrow(() -> RdfaPositiveEvaluationTestExecutor.verifyPresence(model, QUERY, "urn:test"));
    }

    @Test
    void rejectsMissingPatternEvenWhenOtherTriplesExist() {
        var model = RDFTestUtils.createModel();
        var values = Values.factory();
        model.add(values.createIRI("urn:s"), values.createIRI("urn:p"), values.createLiteral("other"));
        assertThrows(AssertionError.class,
                () -> RdfaPositiveEvaluationTestExecutor.verifyPresence(model, QUERY, "urn:test"));
    }

    @Test
    void rejectsAnIndeterminateAskAnswer() {
        assertThrows(AssertionError.class,
                () -> RdfaPositiveEvaluationTestExecutor.requireTrue(null, "urn:test"));
    }

    @Test
    void reportsAnUnavailableGraphComparison() {
        String diagnostic = RdfaPositiveEvaluationTestExecutor.checkFullGraphDiagnostic(
                RDFTestUtils.createModel(), directory.resolve("missing.ttl").toUri(), "urn:test");
        assertTrue(diagnostic.contains("comparison unavailable"));
        assertTrue(diagnostic.contains("FileNotFoundException"));
        assertFalse(diagnostic.contains(directory.toString()));
    }

    @Test
    void distinguishesMatchingAndDifferentReferenceGraphs() throws Exception {
        Path reference = directory.resolve("reference.ttl");
        Files.writeString(reference, "<urn:s> <urn:p> 'expected' .");
        var model = RDFTestUtils.createModel();
        assertTrue(RdfaPositiveEvaluationTestExecutor.checkFullGraphDiagnostic(
                model, reference.toUri(), "urn:test").contains("comparison differs"));
        var values = Values.factory();
        model.add(values.createIRI("urn:s"), values.createIRI("urn:p"), values.createLiteral("expected"));
        assertTrue(RdfaPositiveEvaluationTestExecutor.checkFullGraphDiagnostic(
                model, reference.toUri(), "urn:test").contains("comparison matches"));
    }

    @Test
    void resolvesTheOfficialSidecarAndRejectsUnsupportedResultLocations() {
        assertEquals(URI.create("https://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0001.sparql"),
                RdfaPositiveEvaluationTestExecutor.queryUri(
                        URI.create("https://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0001.ttl")));
        assertEquals(URI.create("https://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0001.sparql"),
                RdfaPositiveEvaluationTestExecutor.queryUri(
                        URI.create("https://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0001.sparql")));
        assertThrows(IllegalArgumentException.class,
                () -> RdfaPositiveEvaluationTestExecutor.queryUri(URI.create("urn:unsupported")));
    }
}
