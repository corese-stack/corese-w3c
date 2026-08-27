package fr.inria.corese.w3c.rdf11jsonld;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

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

    private static final java.util.Map<String, String> KNOWN_EXCLUSIONS = java.util.Map.of(
            "use native types flag with values that cannot be serialized to JSON", "Upstream Titanium issue: NumberFormatException in RdfToJsonld on non-serializable native value",
            "use native types flag with non-native values", "Upstream Titanium issue: NumberFormatException in RdfToJsonld on non-native value",
            "@list containing empty @list", "Upstream Titanium issue: NullPointerException in RdfToJsonld on nested empty list",
            "List conversion", "Upstream Titanium issue: JSON-LD 1.0 partial list ordering"
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
    Stream<DynamicTest> rdf11JsonldFromRdfTests() {
        return createDynamicTests();
    }
}
