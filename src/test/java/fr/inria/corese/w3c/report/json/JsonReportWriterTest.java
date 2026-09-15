package fr.inria.corese.w3c.report.json;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.inria.corese.w3c.report.ReportTestFixtures;
import java.util.regex.Pattern;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class JsonReportWriterTest {
    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final Pattern HEX_BNODE_PATTERN = Pattern.compile("^[0-9a-fA-F]{16}$");

    @Test
    void preservesHistoricalFieldsAndAddsNormalizedMetadata() throws Exception {
        JsonNode root = MAPPER.readTree(new JsonReportWriter().serialize(ReportTestFixtures.data()));
        assertEquals(6, root.path("summary").path("total").asInt());
        assertEquals(2, root.path("summary").path("skipped").asInt());
        assertTrue(root.path("summary").has("passRate"));
        assertTrue(root.path("summary").has("executedPassRate"));
        assertEquals(40, root.path("metadata").path("harness").path("commit").asText().length());
        assertEquals(40, root.path("metadata").path("core").path("commit").asText().length());
        assertFalse(root.toString().contains("unknown"));

        JsonNode suite = root.path("suites").get(0);
        assertTrue(suite.has("id"));
        assertTrue(suite.has("name"));
        assertTrue(suite.has("component"));
        assertTrue(suite.has("specification"));
        assertTrue(suite.has("manifest"));
        assertTrue(suite.has("transport"));
        JsonNode test = suite.path("tests").get(0);
        assertTrue(test.has("status"));
        assertTrue(test.has("outcome"));
        assertTrue(test.has("testUri"));
        assertTrue(test.has("manifestUri"));
        assertTrue(test.has("testType"));
    }

    @Test
    void testFileUriResolutionDoesNotProduceBNodeHexUris() {
        java.util.List<fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase> sparql11Tests =
                fr.inria.corese.w3c.junit.dynamic.loader.W3cTestLoader.loadTestsFromManifest(
                        java.net.URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/manifest.ttl"));

        fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase castDecimal = sparql11Tests.stream()
                .filter(t -> t.getTestUri().contains("cast-decimal"))
                .findFirst()
                .orElseThrow();

        assertEquals(
                java.net.URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/manifest.ttl"),
                castDecimal.getManifestUri());
        assertEquals(
                java.net.URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/cast-decimal.rq"),
                castDecimal.getActionFileUri());
        assertEquals(
                java.net.URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/cast-decimal.srx"),
                castDecimal.getResultFileUri());

        // Also check an update test with bnode action and bnode result
        fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase add01 = sparql11Tests.stream()
                .filter(t -> "ADD 1".equals(t.getName()))
                .findFirst()
                .orElseThrow();

        assertEquals(
                java.net.URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/add/add-01.ru"),
                add01.getActionFileUri());
        assertEquals(
                java.net.URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/add/add-default.ttl"),
                add01.getResultFileUri());

        for (fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase t : sparql11Tests) {
            java.net.URI action = t.getActionFileUri();
            java.net.URI result = t.getResultFileUri();
            if (action != null) {
                String lastPart = action.getPath().substring(action.getPath().lastIndexOf('/') + 1);
                assertFalse(HEX_BNODE_PATTERN.matcher(lastPart).matches(), "Action URI must not be hex bnode: " + action);
            }
            if (result != null) {
                String lastPart = result.getPath().substring(result.getPath().lastIndexOf('/') + 1);
                assertFalse(HEX_BNODE_PATTERN.matcher(lastPart).matches(), "Result URI must not be hex bnode: " + result);
            }
        }

        java.util.List<fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase> sparql10Tests =
                fr.inria.corese.w3c.junit.dynamic.loader.W3cTestLoader.loadTestsFromManifest(
                        java.net.URI.create("https://w3c.github.io/rdf-tests/sparql/sparql10/manifest.ttl"));

        for (fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase t : sparql10Tests) {
            java.net.URI action = t.getActionFileUri();
            java.net.URI result = t.getResultFileUri();
            if (action != null) {
                String lastPart = action.getPath().substring(action.getPath().lastIndexOf('/') + 1);
                assertFalse(HEX_BNODE_PATTERN.matcher(lastPart).matches(), "SPARQL 1.0 Action URI must not be hex bnode: " + action);
            }
            if (result != null) {
                String lastPart = result.getPath().substring(result.getPath().lastIndexOf('/') + 1);
                assertFalse(HEX_BNODE_PATTERN.matcher(lastPart).matches(), "SPARQL 1.0 Result URI must not be hex bnode: " + result);
            }
        }
    }
}
