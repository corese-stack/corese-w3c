package fr.inria.corese.w3c.rdf11jsonld;

import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.report.model.SkipDecision;
import fr.inria.corese.w3c.report.model.SkipKind;

/** Applicability of official fixtures to the JSON-LD 1.1 / RDF 1.1 profile. */
final class JsonLd11ConformanceProfile {
    private JsonLd11ConformanceProfile() {
    }

    static SkipDecision skipDecision(W3cTestCase testCase) {
        if ("true".equals(testCase.getProperty(W3cTestCase.Property.PRODUCE_GENERALIZED_RDF, String.class))) {
            return new SkipDecision(SkipKind.NOT_APPLICABLE,
                    "OPTIONAL_UNSUPPORTED: generalized RDF blank-node predicates are outside the Corese RDF 1.1 data model");
        }
        // specVersion declares applicability, not an algorithm option. A 1.1
        // processor in 1.0 processingMode is not a JSON-LD 1.0 implementation.
        // https://w3c.github.io/json-ld-api/tests/vocab#specVersion
        if ("json-ld-1.0".equals(testCase.getProperty(W3cTestCase.Property.SPEC_VERSION, String.class))) {
            return new SkipDecision(SkipKind.NOT_APPLICABLE,
                    "SPEC_VERSION_MISMATCH: manifest specVersion=json-ld-1.0 targets the superseded specification; this suite tests JSON-LD 1.1 (explicit processingMode is still honored)");
        }
        return null;
    }
}
