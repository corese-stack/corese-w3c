package fr.inria.corese.w3c.rdf11rdfa.xml;

import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.report.model.SkipKind;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Rdf11RDFaXMLExclusionTest {
    @Test
    void rdfa0295IsUntested() {
        URI manifest = URI.create("https://rdfa.info/test-suite/test-cases/rdfa1.1/xml/manifest.ttl");
        W3cTestCase test = new W3cTestCase(manifest + "#0295", "0295", "0295", "",
                TestType.RDFA_POSITIVE_EVAL, manifest, Map.of());
        assertEquals(SkipKind.DEFERRED,
                new Rdf11RDFaXMLDynamicTest().getSkipDecision(test).kind());
    }
}
