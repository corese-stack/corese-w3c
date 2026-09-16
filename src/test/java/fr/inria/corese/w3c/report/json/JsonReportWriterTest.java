package fr.inria.corese.w3c.report.json;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.inria.corese.w3c.junit.dynamic.loader.W3cTestLoader;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.report.ReportTestFixtures;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.regex.Pattern;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class JsonReportWriterTest {
    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final Pattern HEX_BNODE_PATTERN = Pattern.compile("^[0-9a-fA-F]{16}$");

    private static final URI SPARQL10_MANIFEST_URI =
            URI.create("https://w3c.github.io/rdf-tests/sparql/sparql10/manifest.ttl");
    private static final URI SPARQL11_MANIFEST_URI =
            URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/manifest.ttl");

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

        JsonNode rdfcSuite = root.path("suites").get(0);
        assertEquals("rdf-canonical", rdfcSuite.path("id").asText());
        JsonNode rdfcTest = rdfcSuite.path("tests").get(0);
        assertTrue(rdfcTest.has("dataUri"));
        assertEquals("https://w3c.github.io/rdf-canon/tests/test001c-data.nq", rdfcTest.path("dataUri").asText());
    }

    @Test
    @Tag("integration")
    void testFileUriResolutionDoesNotProduceBNodeHexUris() {
        List<W3cTestCase> sparql11Tests = W3cTestLoader.loadTestsFromManifest(SPARQL11_MANIFEST_URI);

        W3cTestCase castDecimal = sparql11Tests.stream()
                .filter(t -> t.getTestUri().contains("cast-decimal"))
                .findFirst()
                .orElseThrow();

        assertEquals(
                URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/manifest.ttl"),
                castDecimal.getManifestUri());
        assertEquals(
                URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/cast-decimal.rq"),
                castDecimal.getActionFileUri());
        assertEquals(
                URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/cast-decimal.srx"),
                castDecimal.getResultFileUri());
        assertEquals(
                URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/data.ttl"),
                castDecimal.getDataFileUri());

        // Check update test with bnode action and bnode result
        W3cTestCase add01 = sparql11Tests.stream()
                .filter(t -> "ADD 1".equals(t.getName()))
                .findFirst()
                .orElseThrow();

        assertEquals(
                URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/add/add-01.ru"),
                add01.getActionFileUri());
        assertEquals(
                URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/add/add-default.ttl"),
                add01.getDataFileUri());
        assertEquals(
                URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/add/add-default.ttl"),
                add01.getResultFileUri());

        for (W3cTestCase t : sparql11Tests) {
            URI action = t.getActionFileUri();
            URI result = t.getResultFileUri();
            if (action != null) {
                String lastPart = action.getPath().substring(action.getPath().lastIndexOf('/') + 1);
                assertFalse(HEX_BNODE_PATTERN.matcher(lastPart).matches(), "Action URI must not be hex bnode: " + action);
            }
            if (result != null) {
                String lastPart = result.getPath().substring(result.getPath().lastIndexOf('/') + 1);
                assertFalse(HEX_BNODE_PATTERN.matcher(lastPart).matches(), "Result URI must not be hex bnode: " + result);
            }
        }

        List<W3cTestCase> sparql10Tests = W3cTestLoader.loadTestsFromManifest(SPARQL10_MANIFEST_URI);

        for (W3cTestCase t : sparql10Tests) {
            URI action = t.getActionFileUri();
            URI result = t.getResultFileUri();
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

    @Test
    void baselineReportContainsDataUriWhenPresent() throws Exception {
        Path baselinePath = Path.of("conformance/baseline-report.json");
        if (!Files.exists(baselinePath)) {
            return;
        }
        JsonNode rootNode = MAPPER.readTree(Files.readString(baselinePath));
        boolean foundCastDecimal = false;
        for (JsonNode suiteNode : rootNode.path("suites")) {
            for (JsonNode testNode : suiteNode.path("tests")) {
                if (testNode.path("testUri").asText().contains("cast-decimal")) {
                    assertTrue(testNode.has("dataUri"));
                    assertEquals("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/data.ttl", testNode.path("dataUri").asText());
                    foundCastDecimal = true;
                }
            }
        }
        assertTrue(foundCastDecimal);
    }
}
