package fr.inria.corese.w3c.rdf11jsonld;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.report.model.Component;
import fr.inria.corese.w3c.report.model.SkipDecision;
import fr.inria.corese.w3c.report.model.SkipKind;
import fr.inria.corese.w3c.report.model.SuiteDefinition;
import fr.inria.corese.w3c.report.model.Transport;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.net.URI;
import java.util.Map;
import java.util.stream.Stream;

class Rdf11JsonldFromRdfDynamicTest extends BaseRdf11DynamicTest {
    private static final SuiteDefinition SUITE = new SuiteDefinition(
            "jsonld-fromrdf", "JSON-LD 1.1 (fromRdf)", Component.CORE,
            URI.create("https://www.w3.org/TR/json-ld11-api/#dom-jsonldprocessor-fromrdf"),
            URI.create("https://w3c.github.io/json-ld-api/tests/fromRdf-manifest.jsonld"),
            Transport.IN_MEMORY);

    @Override
    protected SuiteDefinition getSuiteDefinition() {
        return SUITE;
    }

    /**
     * Isolated Titanium 1.6.0 conformance gaps. Stable manifest IDs prevent a
     * similarly named test from being skipped. See {@code W3C_TEST_EXCLUSIONS.md}
     * for expected behavior and reactivation criteria.
     */
    private static final Map<String, SkipDecision> KNOWN_EXCLUSIONS_BY_ID = Map.of(
            "t0027",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: useNativeTypes throws for a non-finite numeric lexical form instead of preserving the typed literal"),
            "t0028",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: useNativeTypes throws for a non-native numeric lexical form instead of preserving the typed literal"),
            "tli01",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: nested empty RDF lists trigger a null dereference during fromRdf conversion"),
            "t0008",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: fromRdf applies JSON-LD 1.1 nested-list conversion to the JSON-LD 1.0 ordering case")
    );

    @Override
    protected SkipDecision getSkipDecision(W3cTestCase testCase) {
        String testId = URI.create(testCase.getTestUri()).getFragment();
        return testId == null ? null : KNOWN_EXCLUSIONS_BY_ID.get(testId);
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11JsonldFromRdfTests() {
        return createDynamicTests();
    }
}
