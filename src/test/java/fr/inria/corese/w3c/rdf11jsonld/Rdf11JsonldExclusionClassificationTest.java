package fr.inria.corese.w3c.rdf11jsonld;

import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.report.model.SkipKind;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Rdf11JsonldExclusionClassificationTest {
    @Test
    void generalizedRdfCasesAreInapplicableAndTitaniumCasesAreUntested() {
        Rdf11JsonldToRdfDynamicTest toRdf = new Rdf11JsonldToRdfDynamicTest();
        assertEquals(SkipKind.NOT_APPLICABLE, toRdf.getSkipDecision(toRdf("t0118")).kind());
        assertEquals(SkipKind.NOT_APPLICABLE, toRdf.getSkipDecision(toRdf("te075")).kind());
        assertEquals(SkipKind.DEFERRED, toRdf.getSkipDecision(toRdf("tli12")).kind());

        Rdf11JsonldFromRdfDynamicTest fromRdf = new Rdf11JsonldFromRdfDynamicTest();
        assertEquals(SkipKind.DEFERRED, fromRdf.getSkipDecision(fromRdf("t0027")).kind());
    }

    private static W3cTestCase toRdf(String fragment) {
        URI manifest = URI.create("https://w3c.github.io/json-ld-api/tests/toRdf-manifest.jsonld");
        return test(manifest, fragment, TestType.JSON_LD_POSITIVE_EVAL);
    }

    private static W3cTestCase fromRdf(String fragment) {
        URI manifest = URI.create("https://w3c.github.io/json-ld-api/tests/fromRdf-manifest.jsonld");
        return test(manifest, fragment, TestType.JSON_LD_FROM_RDF_POSITIVE_EVAL);
    }

    private static W3cTestCase test(URI manifest, String fragment, TestType type) {
        return new W3cTestCase(manifest + "#" + fragment, fragment, fragment, "", type, manifest, Map.of());
    }
}
