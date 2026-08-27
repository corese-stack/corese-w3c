package fr.inria.corese.w3c.rdf11jsonld;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

class Rdf11JsonldToRdfDynamicTest extends BaseRdf11DynamicTest {
    private static final String MANIFEST_URL =
            "https://w3c.github.io/json-ld-api/tests/toRdf-manifest.jsonld";
    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "Jsonld";
    }

    private static final java.util.Map<String, String> KNOWN_EXCLUSIONS = java.util.Map.of(
            "produce generalized RDF flag", "Generalized RDF (blank node predicates) is not supported in standard RDF 1.1",
            "@vocab as blank node identifier", "Generalized RDF (blank node predicates) is not supported in standard RDF 1.1",
            "List with bad @base", "Upstream Titanium issue: strict URI parser fails on malformed @base URI",
            "Redefine terms looking like compact IRIs", "Upstream Titanium issue: local context term definition parsing",
            "Expanding term mapping to @type uses @type syntax", "Upstream Titanium issue: term mapping to @type syntax",
            "Verifies that relative IRIs as properties with @vocab: '' in 1.0 generate an error", "Upstream Titanium issue: JSON-LD 1.0 relative @vocab error detection",
            "Verifies that relative IRIs as properties with relative @vocab in 1.0 generate an error", "Upstream Titanium issue: JSON-LD 1.0 relative @vocab error detection",
            "List of lists (from array)", "Upstream Titanium issue: list of lists error handling in toRdf",
            "@set of @value objects with keyword aliases", "Upstream Titanium issue: compact datatype prefix expansion"
    );

    @Override
    protected String getSkipReason(fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase testCase) {
        if (testCase.getName() != null) {
            String lowerName = testCase.getName().toLowerCase(java.util.Locale.ROOT).trim();
            for (java.util.Map.Entry<String, String> entry : KNOWN_EXCLUSIONS.entrySet()) {
                String targetKey = entry.getKey().toLowerCase(java.util.Locale.ROOT).trim();
                if (lowerName.equals(targetKey) || lowerName.startsWith(targetKey) || lowerName.contains(targetKey)) {
                    return entry.getValue();
                }
            }
        }
        return null;
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11JsonldToRdfTests() {
        return createDynamicTests();
    }
}
