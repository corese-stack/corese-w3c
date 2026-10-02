package fr.inria.corese.w3c.rdf11jsonld;

import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.report.model.SkipKind;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class Rdf11JsonldExclusionClassificationTest {
    @Test
    void generalizedRdfIsOutsideTheDataModelProfile() {
        assertEquals(SkipKind.NOT_APPLICABLE,
                JsonLd11ConformanceProfile.skipDecision(test(Map.of("produceGeneralizedRdf", "true"))).kind());
        assertNull(JsonLd11ConformanceProfile.skipDecision(test(Map.of("produceGeneralizedRdf", "false"))));
    }

    @Test
    void specificationVersionIsNotProcessingMode() {
        assertEquals(SkipKind.NOT_APPLICABLE,
                JsonLd11ConformanceProfile.skipDecision(test(Map.of("specVersion", "json-ld-1.0"))).kind());
        assertNull(JsonLd11ConformanceProfile.skipDecision(test(Map.of("processingMode", "json-ld-1.0"))),
                "A 1.1 compatibility-mode test remains applicable");
        assertNull(JsonLd11ConformanceProfile.skipDecision(test(Map.of(
                "specVersion", "json-ld-1.1", "processingMode", "json-ld-1.0"))));
        assertNull(JsonLd11ConformanceProfile.skipDecision(test(Map.of())));
    }

    @Test
    void knownImplementationFailuresAreExecuted() {
        for (String fragment : new String[]{"tli12", "t0027", "t0028", "tli01"}) {
            URI manifest = URI.create("https://w3c.github.io/json-ld-api/tests/fromRdf-manifest");
            var test = new W3cTestCase(manifest + "#" + fragment, fragment, fragment, "",
                    TestType.JSON_LD_FROM_RDF_POSITIVE_EVAL, manifest, Map.of("specVersion", "json-ld-1.1"));
            assertNull(JsonLd11ConformanceProfile.skipDecision(test));
        }
    }

    private static W3cTestCase test(Map<String, Object> properties) {
        URI manifest = URI.create("https://w3c.github.io/json-ld-api/tests/toRdf-manifest");
        return new W3cTestCase(manifest + "#test", "test", "test", "",
                TestType.JSON_LD_POSITIVE_EVAL, manifest, properties);
    }
}
