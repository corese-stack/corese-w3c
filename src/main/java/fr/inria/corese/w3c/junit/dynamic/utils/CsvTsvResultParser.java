package fr.inria.corese.w3c.junit.dynamic.utils;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

/**
 * Parser for SPARQL 1.1 CSV and TSV result format files.
 *
 * <h2>CSV format (W3C spec)</h2>
 * <ul>
 *   <li>First row: bare variable names (no {@code ?})</li>
 *   <li>IRIs: bare URI strings (no angle brackets)</li>
 *   <li>Blank nodes: {@code _:id}</li>
 *   <li>Literals: just the <em>lexical form</em> — no datatype or language tag</li>
 *   <li>Unbound: empty cell</li>
 * </ul>
 * {@link #parseCsvRaw} returns cells exactly as they appear in the file (after
 * CSV unquoting), ready for direct comparison with values produced by
 * {@code valueToCsvString()} in the executor.
 *
 * <h2>TSV format (W3C spec)</h2>
 * <ul>
 *   <li>First row: variable names prefixed with {@code ?}</li>
 *   <li>IRIs: {@code <iri>}</li>
 *   <li>Blank nodes: {@code _:id}</li>
 *   <li>Literals: SPARQL notation {@code "label"}, {@code "label"^^<dt>},
 *       {@code "label"@lang}</li>
 *   <li>Unbound: empty cell</li>
 * </ul>
 * {@link #parseTsvToCanonical} converts TSV cells into the canonical form used
 * by {@code valueToCanonical()} so they can be compared with
 * {@code compareSelectResults()}.
 */
public final class CsvTsvResultParser {

    private static final String XSD_STRING =
            "http://www.w3.org/2001/XMLSchema#string";

    private CsvTsvResultParser() {
    }

    // -----------------------------------------------------------------------
    // CSV — raw lexical values
    // -----------------------------------------------------------------------

    /**
     * Parses a SPARQL 1.1 CSV result file and returns rows of raw cell values.
     * <p>
     * Each cell is unquoted (CSV quoting removed) but otherwise unchanged.
     * An empty cell is stored as an empty string; callers should treat it as
     * "unbound" (null map entry) only if the corresponding variable has no
     * binding.
     *
     * @param filePath absolute path to the CSV file
     * @return list of result rows (variable name → raw lexical value)
     * @throws IOException if reading fails
     */
    public static List<Map<String, String>> parseCsvRaw(String filePath) throws IOException {
        List<Map<String, String>> rows = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(
                new FileReader(filePath, StandardCharsets.UTF_8))) {

            String headerLine = reader.readLine();
            if (headerLine == null) return rows;
            List<String> vars = parseCsvLine(headerLine);

            String line;
            while ((line = reader.readLine()) != null) {
                if (line.isBlank()) continue;
                List<String> cells = parseCsvLine(line);
                Map<String, String> row = new LinkedHashMap<>();
                for (int i = 0; i < vars.size(); i++) {
                    String cell = i < cells.size() ? cells.get(i) : "";
                    // Store raw unquoted value; keep empty string for unbound cells
                    // (compareCsvTsvRows will skip null entries but empty is a valid literal)
                    row.put(vars.get(i), cell);
                }
                rows.add(row);
            }
        }
        return rows;
    }

    /**
     * Parses a single CSV line following RFC 4180 (double-quote escaping).
     */
    public static List<String> parseCsvLine(String line) {
        List<String> fields = new ArrayList<>();
        StringBuilder sb = new StringBuilder();
        boolean inQuotes = false;
        int i = 0;
        while (i < line.length()) {
            char c = line.charAt(i);
            if (inQuotes) {
                if (c == '"') {
                    if (i + 1 < line.length() && line.charAt(i + 1) == '"') {
                        sb.append('"');
                        i += 2;
                    } else {
                        inQuotes = false;
                        i++;
                    }
                } else {
                    sb.append(c);
                    i++;
                }
            } else {
                if (c == '"') {
                    inQuotes = true;
                    i++;
                } else if (c == ',') {
                    fields.add(sb.toString());
                    sb.setLength(0);
                    i++;
                } else {
                    sb.append(c);
                    i++;
                }
            }
        }
        fields.add(sb.toString());
        return fields;
    }

    // -----------------------------------------------------------------------
    // TSV — convert to canonical form for compareSelectResults()
    // -----------------------------------------------------------------------

    /**
     * Parses a SPARQL 1.1 TSV result file and converts each cell value to the
     * canonical comparison form used by
     * {@code SparqlQueryEvaluationTestExecutor#valueToCanonical}:
     * <ul>
     *   <li>{@code <iri>} → {@code <iri>}</li>
     *   <li>{@code _:id} → {@code _:b_id}</li>
     *   <li>{@code "label"} → {@code "label"^^<xsd:string>}</li>
     *   <li>{@code "label"^^<dt>} → {@code "label"^^<dt>}</li>
     *   <li>{@code "label"@lang} → {@code "label"@lang}</li>
     *   <li>empty → entry omitted (unbound)</li>
     * </ul>
     *
     * @param filePath absolute path to the TSV file
     * @return list of result rows (variable name → canonical value)
     * @throws IOException if reading fails
     */
    public static List<Map<String, String>> parseTsvToCanonical(String filePath) throws IOException {
        List<Map<String, String>> rows = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(
                new FileReader(filePath, StandardCharsets.UTF_8))) {

            String headerLine = reader.readLine();
            if (headerLine == null) return rows;
            String[] headers = headerLine.split("\t", -1);
            List<String> vars = new ArrayList<>();
            for (String h : headers) {
                vars.add(h.startsWith("?") ? h.substring(1) : h.trim());
            }

            String line;
            while ((line = reader.readLine()) != null) {
                if (line.isBlank()) continue;
                String[] cells = line.split("\t", -1);
                Map<String, String> row = new LinkedHashMap<>();
                for (int i = 0; i < vars.size(); i++) {
                    String cell = i < cells.length ? cells[i].trim() : "";
                    String canonical = tsvCellToCanonical(cell);
                    if (canonical != null) {
                        row.put(vars.get(i), canonical);
                    }
                }
                rows.add(row);
            }
        }
        return rows;
    }

    /**
     * Converts a single TSV cell (SPARQL notation) to canonical form.
     * Returns {@code null} for unbound (empty) cells.
     */
    static String tsvCellToCanonical(String cell) {
        if (cell == null || cell.isEmpty()) return null;

        // IRI: <http://...>
        if (cell.startsWith("<") && cell.endsWith(">")) {
            return cell;
        }

        // Blank node: _:id  →  _:b_id (for normalizeRow compatibility)
        if (cell.startsWith("_:")) {
            return "_:b_" + cell.substring(2);
        }

        // Typed literal: "label"^^<datatype>
        if (cell.startsWith("\"") && cell.contains("\"^^<") && cell.endsWith(">")) {
            int dtIdx = cell.lastIndexOf("\"^^<");
            String label = unescape(cell.substring(1, dtIdx));
            String datatype = cell.substring(dtIdx + 4, cell.length() - 1);
            return "\"" + escape(label) + "\"^^<" + datatype + ">";
        }

        // Language-tagged literal: "label"@lang
        if (cell.startsWith("\"") && cell.contains("\"@")) {
            int atIdx = cell.lastIndexOf("\"@");
            if (atIdx > 0) {
                String label = unescape(cell.substring(1, atIdx));
                String lang = cell.substring(atIdx + 2).toLowerCase(Locale.ROOT);
                return "\"" + escape(label) + "\"@" + lang;
            }
        }

        // Plain quoted literal: "label"  →  "label"^^<xsd:string>
        if (cell.startsWith("\"") && cell.endsWith("\"") && cell.length() >= 2) {
            String label = unescape(cell.substring(1, cell.length() - 1));
            return "\"" + escape(label) + "\"^^<" + XSD_STRING + ">";
        }

        // Bare token (e.g. numeric literal without quotes in TSV): treat as plain string
        return "\"" + escape(cell) + "\"^^<" + XSD_STRING + ">";
    }

    // -----------------------------------------------------------------------
    // Helpers
    // -----------------------------------------------------------------------

    /** Unescapes SPARQL string escape sequences (\\, \", \n, \r, \t). */
    private static String unescape(String s) {
        return s.replace("\\\"", "\"")
                .replace("\\\\", "\\")
                .replace("\\n", "\n")
                .replace("\\r", "\r")
                .replace("\\t", "\t");
    }

    /** Escapes double-quotes and backslashes for the canonical form. */
    private static String escape(String s) {
        return s.replace("\\", "\\\\").replace("\"", "\\\"");
    }
}
