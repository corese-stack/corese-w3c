package fr.inria.corese.w3c.rdf11jsonld;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.net.URI;
import java.util.Map;
import java.util.stream.Stream;

class Rdf11JsonldFromRdfDynamicTest extends BaseRdf11DynamicTest {
    private static final String MANIFEST_URL =
            "https://w3c.github.io/json-ld-api/tests/fromRdf-manifest.jsonld";
    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "Jsonld";
    }

    /**
     * Isolated Titanium 1.6.0 conformance gaps. Stable manifest IDs prevent a
     * similarly named test from being skipped. See {@code W3C_TEST_EXCLUSIONS.md}
     * for expected behavior and reactivation criteria.
     */
    private static final Map<String, String> KNOWN_EXCLUSIONS_BY_ID = Map.of(
            "t0027",
            "UPSTREAM_TITANIUM_1_6: useNativeTypes throws for a non-finite numeric lexical form instead of preserving the typed literal",
            "t0028",
            "UPSTREAM_TITANIUM_1_6: useNativeTypes throws for a non-native numeric lexical form instead of preserving the typed literal",
            "tli01",
            "UPSTREAM_TITANIUM_1_6: nested empty RDF lists trigger a null dereference during fromRdf conversion",
            "t0008",
            "UPSTREAM_TITANIUM_1_6: fromRdf applies JSON-LD 1.1 nested-list conversion to the JSON-LD 1.0 ordering case"
    );

    @Override
    protected String getSkipReason(W3cTestCase testCase) {
        String testId = URI.create(testCase.getTestUri()).getFragment();
        return testId == null ? null : KNOWN_EXCLUSIONS_BY_ID.get(testId);
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11JsonldFromRdfTests() {
        return createDynamicTests();
    }
}
