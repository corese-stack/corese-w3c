package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.w3c.junit.dynamic.executor.factory.TestExecutorFactory;
import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import java.net.URI;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class RdfaNegativeEvaluationTestExecutorTest {
    private static final String QUERY = "ASK { <urn:s> <urn:p> 'forbidden' }";

    @Test
    void negativeRdfaTestsUseTheAskExecutor() {
        assertInstanceOf(RdfaNegativeEvaluationTestExecutor.class,
                TestExecutorFactory.createExecutor(TestType.RDFA_NEGATIVE_EVAL));
    }

    @Test
    void acceptsAbsenceEvenWhenPermittedTriplesExist() {
        var model = RDFTestUtils.createModel();
        var values = Values.factory();
        model.add(values.createIRI("urn:s"), values.createIRI("urn:p"), values.createLiteral("permitted"));
        assertDoesNotThrow(() -> RdfaNegativeEvaluationTestExecutor.verifyAbsence(model, QUERY, "urn:test"));
    }

    @Test
    void rejectsForbiddenPatternEvenWhenExtraTriplesMakeGraphsUnequal() {
        var model = RDFTestUtils.createModel();
        var values = Values.factory();
        model.add(values.createIRI("urn:s"), values.createIRI("urn:p"), values.createLiteral("forbidden"));
        model.add(values.createIRI("urn:s"), values.createIRI("urn:p"), values.createLiteral("extra"));
        assertThrows(AssertionError.class,
                () -> RdfaNegativeEvaluationTestExecutor.verifyAbsence(model, QUERY, "urn:test"));
    }

    @Test
    void rejectsAnIndeterminateAskAnswer() {
        assertThrows(AssertionError.class,
                () -> RdfaNegativeEvaluationTestExecutor.requireFalse(null, "urn:test"));
    }

    @Test
    void resolvesTheOfficialSidecarAndRejectsUnsupportedResultLocations() {
        assertEquals(URI.create("https://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0180.sparql"),
                RdfaNegativeEvaluationTestExecutor.queryUri(
                        URI.create("https://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0180.ttl")));
        assertThrows(IllegalArgumentException.class,
                () -> RdfaNegativeEvaluationTestExecutor.queryUri(URI.create("urn:unsupported")));
    }
}
