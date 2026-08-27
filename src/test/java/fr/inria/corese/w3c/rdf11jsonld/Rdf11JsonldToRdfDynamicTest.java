package fr.inria.corese.w3c.rdf11jsonld;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.net.URI;
import java.util.Map;
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

    /**
     * Deliberately unsupported optional features and isolated Titanium 1.6.0
     * conformance gaps. Match stable manifest IDs, never display names, so that a
     * new or renamed W3C test cannot be skipped accidentally. Every entry is
     * documented in {@code W3C_TEST_EXCLUSIONS.md} and must be retested when the
     * JSON-LD processor is upgraded.
     *
     * @see <a href="https://www.w3.org/TR/json-ld11-api/#dom-jsonldoptions-producegeneralizedrdf">JSON-LD 1.1 API: produceGeneralizedRdf</a>
     */
    private static final Map<String, String> KNOWN_EXCLUSIONS_BY_ID = Map.of(
            "t0118",
            "OPTIONAL_UNSUPPORTED: generalized RDF permits blank-node predicates, which the Corese RDF 1.1 model cannot represent",
            "tli12",
            "UPSTREAM_TITANIUM_1_6: rejects the malformed @base before applying the W3C list expansion behavior",
            "te071",
            "UPSTREAM_TITANIUM_1_6: rejects a valid JSON-LD 1.0 redefinition of a compact-IRI-shaped term",
            "te075",
            "OPTIONAL_UNSUPPORTED: a blank-node @vocab produces predicates outside the Corese RDF 1.1 data model",
            "te115",
            "UPSTREAM_TITANIUM_1_6: accepts a relative property with an empty @vocab in JSON-LD 1.0 instead of reporting an error",
            "te116",
            "UPSTREAM_TITANIUM_1_6: accepts a relative property with a relative @vocab in JSON-LD 1.0 instead of reporting an error",
            "ter24",
            "UPSTREAM_TITANIUM_1_6: accepts an array containing a list of lists instead of reporting an error",
            "ter32",
            "UPSTREAM_TITANIUM_1_6: accepts an array containing a list of lists instead of reporting an error",
            "te014",
            "UPSTREAM_TITANIUM_1_6: expands a datatype compact IRI using JSON-LD 1.1 rules in this JSON-LD 1.0 case",
            "te026",
            "UPSTREAM_TITANIUM_1_6: rejects the valid JSON-LD 1.0 @type term-mapping form"
    );

    @Override
    protected String getSkipReason(W3cTestCase testCase) {
        String testId = URI.create(testCase.getTestUri()).getFragment();
        return testId == null ? null : KNOWN_EXCLUSIONS_BY_ID.get(testId);
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11JsonldToRdfTests() {
        return createDynamicTests();
    }
}
