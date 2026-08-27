package fr.inria.corese.w3c.junit.dynamic.loader;

import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import org.junit.jupiter.api.Test;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class W3cTestLoaderTest {

    private static final String RDF_TEST_VOCABULARY = "http://www.w3.org/ns/rdftest#";

    @Test
    void mapsStandardNegativeTestTypes() {
        assertEquals(TestType.NTRIPLES_NEGATIVE_SYNTAX,
                map("TestNTriplesNegativeSyntax"));
        assertEquals(TestType.NQUADS_NEGATIVE_SYNTAX,
                map("TestNQuadsNegativeSyntax"));
        assertEquals(TestType.TRIG_NEGATIVE_SYNTAX,
                map("TestTrigNegativeSyntax"));
        assertEquals(TestType.TRIG_NEGATIVE_EVAL,
                map("TestTrigNegativeEval"));
    }

    @Test
    void rejectsUnknownTestTypes() {
        Set<String> unknownType = Set.of(RDF_TEST_VOCABULARY + "UnknownTestType");

        assertThrows(IllegalArgumentException.class,
                () -> W3cTestLoader.mapTestType(unknownType));
    }

    private static TestType map(String localName) {
        return W3cTestLoader.mapTestType(Set.of(RDF_TEST_VOCABULARY + localName));
    }
}
