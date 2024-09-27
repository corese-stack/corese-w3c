package fr.inria.corese.w3cJunitTestsGenerator.w3cTests;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Path;
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

    public static String sanitizeComment(String comment) {
        return comment
                .replaceAll("\\\\u([0-9A-Fa-f]*)", "")
                .trim()
                .replace('\n', ' ');
    }
    public static boolean compareFilesLineByLine(Path filePath1, Path filePath2) throws IOException {
        try (
                BufferedReader reader1 = new BufferedReader(new FileReader(filePath1.toString()));
                BufferedReader reader2 = new BufferedReader(new FileReader(filePath2.toString()))
        ) {
            String line1;
            String line2;

            // Read and compare lines one by one
            while ((line1 = reader1.readLine()) != null & (line2 = reader2.readLine()) != null) {
                if (!line1.equals(line2)) {
                    return false;
                }
            }

            // Check if one file has extra lines
            if (reader1.readLine() != null || reader2.readLine() != null) {
                return false;
            }
        }

        return true; // Files are identical
    }
}
