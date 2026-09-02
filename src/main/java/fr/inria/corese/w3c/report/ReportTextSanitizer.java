package fr.inria.corese.w3c.report;

import java.util.regex.Pattern;

/** Produces bounded public messages without stack traces, credentials, or local paths. */
public final class ReportTextSanitizer {
    public static final int MAX_INFORMATION_LENGTH = 4096;
    private static final String REDACTED_PATH = "[LOCAL_PATH]";
    private static final String REDACTED_SECRET = "$1[REDACTED]";

    private static final Pattern AUTH_BEARER = Pattern.compile(
            "(?i)(authorization\\s*[:=]\\s*(?:bearer\\s+)?)[^\\s,;]+"
    );
    private static final Pattern AUTH_SECRET = Pattern.compile(
            "(?i)((?:token|api[_-]?key|password|secret)\\s*[:=]\\s*)[^\\s,;]+"
    );
    private static final Pattern AUTH_PARAM = Pattern.compile(
            "(?i)([?&](?:access_token|token|api[_-]?key|password|secret)=)[^&#\\s]+"
    );
    private static final Pattern FILE_URI = Pattern.compile(
            "(?i)file://[^\\s,;]+"
    );
    private static final Pattern WINDOWS_UNC_PATH = Pattern.compile(
            "\\\\[\\w.-]+[\\\\/][^\\s,;]+"
    );
    private static final Pattern WINDOWS_DRIVE_PATH = Pattern.compile(
            "(?i)(?<!\\w)[a-z]:[/\\\\]+[^\\s,;]+"
    );
    private static final Pattern UNIX_PATH = Pattern.compile(
            "(?<![\\w.:/-])/[^\\s,;:]+/[^\\s,;:]+|(?<![\\w.:/-])/[^\\s,;:]+\\.[a-zA-Z0-9]+"
    );
    private static final Pattern CONTROL_CHARACTERS = Pattern.compile("[\\p{Cc}&&[^\\n\\t]]");
    private static final Pattern WHITESPACE = Pattern.compile("\\s+");

    private ReportTextSanitizer() {
    }

    public static String sanitize(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        String sanitized = CONTROL_CHARACTERS.matcher(value).replaceAll(" ");
        sanitized = AUTH_BEARER.matcher(sanitized).replaceAll(REDACTED_SECRET);
        sanitized = AUTH_SECRET.matcher(sanitized).replaceAll(REDACTED_SECRET);
        sanitized = AUTH_PARAM.matcher(sanitized).replaceAll(REDACTED_SECRET);
        sanitized = FILE_URI.matcher(sanitized).replaceAll(REDACTED_PATH);
        sanitized = WINDOWS_UNC_PATH.matcher(sanitized).replaceAll(REDACTED_PATH);
        sanitized = WINDOWS_DRIVE_PATH.matcher(sanitized).replaceAll(REDACTED_PATH);
        sanitized = UNIX_PATH.matcher(sanitized).replaceAll(REDACTED_PATH);
        sanitized = WHITESPACE.matcher(sanitized).replaceAll(" ").trim();
        if (sanitized.length() > MAX_INFORMATION_LENGTH) {
            sanitized = sanitized.substring(0, MAX_INFORMATION_LENGTH - 1) + "…";
        }
        return sanitized.isBlank() ? null : sanitized;
    }

    public static String sanitizeException(Throwable throwable) {
        if (throwable == null) {
            return null;
        }
        String message = throwable.getMessage();
        if (message == null || message.isBlank()) {
            message = throwable.getClass().getSimpleName();
        }
        return sanitize(message);
    }
}
