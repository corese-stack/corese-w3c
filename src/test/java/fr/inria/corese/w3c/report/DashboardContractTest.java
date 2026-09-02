package fr.inria.corese.w3c.report;

import org.junit.jupiter.api.Test;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.junit.jupiter.api.Assertions.assertTrue;

class DashboardContractTest {
    @Test
    void exposesBothDownloadsSpecificationFiltersAndFiveOutcomes() throws Exception {
        String html = Files.readString(Path.of("site/index.html"), StandardCharsets.UTF_8);
        assertTrue(html.contains("id=\"download-json\" href=\"./data/w3c-report.json\""));
        assertTrue(html.contains("id=\"download-earl\" href=\"./data/earl-report.ttl\""));
        assertTrue(html.contains("id=\"suite-select\""));
        for (String outcome : new String[]{"PASSED", "FAILED", "INAPPLICABLE", "UNTESTED", "CANT_TELL"}) {
            assertTrue(html.contains("data-status=\"" + outcome + "\""), outcome);
        }
    }

    @Test
    void keepsHistoricalJsonCompatibilityAndReportIntegrity() throws Exception {
        String app = Files.readString(Path.of("site/app.js"), StandardCharsets.UTF_8);
        assertTrue(app.contains("if (historical === \"SKIPPED\") return \"UNTESTED\""));
        assertTrue(app.contains("component: suite.component || \"corese-core\""));
        assertTrue(app.contains("safeExternalHref(test.actionUri)"));
        assertTrue(app.contains("escapeHtml(actionHref)"));
        assertTrue(app.contains("currentVersionEarlFile"));
    }
}
