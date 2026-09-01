package fr.inria.corese.w3c.report;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ReportTextSanitizerTest {
    @Test
    void redactsCredentialsPathsAndBoundsPublicInformation() {
        String input = "failed at /secret.ttl and \\\\server\\share\\private.ttl "
                + "and /workspace/corese/private.ttl and file:///C:/Users/runner/secret.ttl "
                + "Authorization: Bearer top-secret /home/alice/private/file "
                + "/opt/actions-runner/work/corese/file.ttl /srv/data/test.nt C:\\Users\\runner\\app.log "
                + "?access_token=also-secret " + "x".repeat(5_000);
        String sanitized = ReportTextSanitizer.sanitize(input);
        assertFalse(sanitized.contains("top-secret"));
        assertFalse(sanitized.contains("also-secret"));
        assertFalse(sanitized.contains("/secret.ttl"));
        assertFalse(sanitized.contains("share"));
        assertFalse(sanitized.contains("/workspace"));
        assertFalse(sanitized.contains("/home/alice"));
        assertFalse(sanitized.contains("/opt/actions-runner"));
        assertFalse(sanitized.contains("/srv/data"));
        assertFalse(sanitized.contains("Users\\runner"));
        assertTrue(sanitized.length() <= ReportTextSanitizer.MAX_INFORMATION_LENGTH);
    }
}
