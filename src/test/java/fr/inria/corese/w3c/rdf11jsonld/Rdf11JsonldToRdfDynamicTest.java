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

class Rdf11JsonldToRdfDynamicTest extends BaseRdf11DynamicTest {
    private static final SuiteDefinition SUITE = new SuiteDefinition(
            "jsonld-tordf", "JSON-LD 1.1 (toRdf)", Component.CORE,
            URI.create("https://www.w3.org/TR/json-ld11-api/#dom-jsonldprocessor-tordf"),
            URI.create("https://w3c.github.io/json-ld-api/tests/toRdf-manifest.jsonld"),
            Transport.IN_MEMORY);

    @Override
    protected SuiteDefinition getSuiteDefinition() {
        return SUITE;
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
    private static final Map<String, SkipDecision> KNOWN_EXCLUSIONS_BY_ID = Map.ofEntries(
            Map.entry(
            "t0118",
            new SkipDecision(SkipKind.NOT_APPLICABLE,
                    "OPTIONAL_UNSUPPORTED: generalized RDF permits blank-node predicates, which the Corese RDF 1.1 model cannot represent")),
            Map.entry(
            "tli12",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: rejects the malformed @base before applying the W3C list expansion behavior")),
            Map.entry(
            "te071",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: rejects a valid JSON-LD 1.0 redefinition of a compact-IRI-shaped term")),
            Map.entry(
            "te075",
            new SkipDecision(SkipKind.NOT_APPLICABLE,
                    "OPTIONAL_UNSUPPORTED: a blank-node @vocab produces predicates outside the Corese RDF 1.1 data model")),
            Map.entry(
            "te115",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: accepts a relative property with an empty @vocab in JSON-LD 1.0 instead of reporting an error")),
            Map.entry(
            "te116",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: accepts a relative property with a relative @vocab in JSON-LD 1.0 instead of reporting an error")),
            Map.entry(
            "ter24",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: accepts an array containing a list of lists instead of reporting an error")),
            Map.entry(
            "ter32",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: accepts an array containing a list of lists instead of reporting an error")),
            Map.entry(
            "te014",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: expands a datatype compact IRI using JSON-LD 1.1 rules in this JSON-LD 1.0 case")),
            Map.entry(
            "te026",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: rejects the valid JSON-LD 1.0 @type term-mapping form")),
            Map.entry(
            "ter02",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: produces LOADING_REMOTE_CONTEXT_FAILED instead of RECURSIVE_CONTEXT_INCLUSION on recursive remote context")),
            Map.entry(
            "ter03",
            new SkipDecision(SkipKind.DEFERRED,
                    "UPSTREAM_TITANIUM_1_6: produces LOADING_REMOTE_CONTEXT_FAILED instead of RECURSIVE_CONTEXT_INCLUSION on indirect recursive remote context"))
    );

    @Override
    protected SkipDecision getSkipDecision(W3cTestCase testCase) {
        String testId = URI.create(testCase.getTestUri()).getFragment();
        return testId == null ? null : KNOWN_EXCLUSIONS_BY_ID.get(testId);
    }

    @TestFactory
    @SuppressWarnings("java:S2699")
    Stream<DynamicTest> rdf11JsonldToRdfTests() {
        return createDynamicTests();
    }
}
