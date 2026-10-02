package fr.inria.corese.w3c.junit.dynamic.utils;

import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.data.api.model.Model;
import java.util.List;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ModelIsomorphismTest {
    private static Model dataset(String subject, String graph) {
        var values = Values.factory();
        var model = RDFTestUtils.createModel();
        var s = subject.startsWith("_:") ? values.createBNode(subject.substring(2)) : values.createIRI(subject);
        var g = graph == null ? null : graph.startsWith("_:")
                ? values.createBNode(graph.substring(2)) : values.createIRI(graph);
        model.add(s, values.createIRI("urn:p"), values.createLiteral("value"), g);
        return model;
    }

    @Test
    void namedGraphIrisArePartOfDatasetIdentity() {
        assertFalse(ModelIsomorphism.areModelsIsomorphic(dataset("urn:s", "urn:left"), dataset("urn:s", "urn:right")));
    }

    @Test
    void blankGraphNamesMayBeRenamedButCannotBecomeIris() {
        assertTrue(ModelIsomorphism.areModelsIsomorphic(dataset("urn:s", "_:a"), dataset("urn:s", "_:b")));
        assertFalse(ModelIsomorphism.areModelsIsomorphic(dataset("urn:s", "_:a"), dataset("urn:s", "urn:graph")));
    }

    @Test
    void renamingPreservesSharingBetweenSubjectAndGraphName() {
        assertFalse(ModelIsomorphism.areModelsIsomorphic(dataset("_:same", "_:same"), dataset("_:same", "_:other")));
        assertTrue(ModelIsomorphism.areModelsIsomorphic(dataset("_:same", "_:same"), dataset("_:renamed", "_:renamed")));
    }

    @Test
    void diagnosticsPreserveLiteralIdentityAndGraphNames() {
        var values = Values.factory();
        var model = RDFTestUtils.createModel();
        model.add(values.createIRI("urn:s"), values.createIRI("urn:p"),
                values.createLiteral("2E-1", values.createIRI("http://www.w3.org/2001/XMLSchema#double")),
                values.createIRI("urn:graph"));
        String diagnostic = ModelIsomorphism.canonicalize(model);
        assertTrue(diagnostic.contains("\"2E-1\"^^<http://www.w3.org/2001/XMLSchema#double>"));
        assertTrue(diagnostic.contains("<urn:graph>"));
    }

    @Test
    void defaultGraphIsDistinctFromEveryNamedGraph() {
        for (String graph : List.of("urn:graph", "_:graph")) {
            assertFalse(ModelIsomorphism.areModelsIsomorphic(dataset("urn:s", null), dataset("urn:s", graph)));
        }
    }
}
