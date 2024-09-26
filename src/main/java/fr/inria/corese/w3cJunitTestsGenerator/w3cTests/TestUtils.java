package fr.inria.corese.w3cJunitTestsGenerator.w3cTests;

import java.util.Locale;

public class TestUtils {

    /**
     * Remove seen name structure that are incompatible with the required format for a java function name.
     * @param originalTestName
     * @return sanitized test name
     */
    public static String sanitizeTestName(String originalTestName) {
        return originalTestName.trim().toLowerCase(Locale.ROOT).replace("-","");
    }
}
