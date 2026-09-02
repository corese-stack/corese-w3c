package fr.inria.corese.w3c.report.json;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.inria.corese.w3c.report.ReportTestFixtures;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class JsonReportWriterTest {
    private static final ObjectMapper MAPPER = new ObjectMapper();

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
}
