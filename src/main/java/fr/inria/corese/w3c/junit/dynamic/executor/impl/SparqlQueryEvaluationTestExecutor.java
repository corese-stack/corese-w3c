package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.model.Statement;
import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.data.api.term.BNode;
import fr.inria.corese.core.next.data.api.term.IRI;
import fr.inria.corese.core.next.data.api.term.Literal;
import fr.inria.corese.core.next.data.api.term.Value;
import fr.inria.corese.core.next.query.Repositories;
import fr.inria.corese.core.next.query.api.repository.Repository;
import fr.inria.corese.core.next.query.api.repository.RepositoryConnection;
import fr.inria.corese.core.next.query.api.result.BindingSet;
import fr.inria.corese.core.next.query.api.result.GraphQueryResult;
import fr.inria.corese.core.next.query.api.result.TupleQueryResult;
import fr.inria.corese.core.next.storage.StorageModels;
import fr.inria.corese.core.next.storage.Storages;
import fr.inria.corese.core.next.storage.api.StorageManager;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.CsvTsvResultParser;
import fr.inria.corese.w3c.junit.dynamic.utils.ModelIsomorphism;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import fr.inria.corese.w3c.junit.dynamic.utils.RsVocabResultParser;
import fr.inria.corese.w3c.junit.dynamic.utils.SparqlResultParser;
import java.io.FileInputStream;
import java.io.FileReader;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * Executor for SPARQL 1.0 query evaluation tests (mf:QueryEvaluationTest).
 * <p>
 * Process:
 * <ol>
 *   <li>Load the RDF data file (qt:data) into an in-memory store.</li>
 *   <li>Read the SPARQL query text (qt:query).</li>
 *   <li>Detect the query form (SELECT / ASK / CONSTRUCT / DESCRIBE).</li>
 *   <li>Execute the query and compare with the expected result file (mf:result).</li>
 * </ol>
 * Result comparison:
 * <ul>
 *   <li>.srx / .srj → SPARQL XML results comparison</li>
 *   <li>RDF formats (.ttl, .nt, .n3, .rdf, …) → graph isomorphism via ModelIsomorphism</li>
 * </ul>
 */
public class SparqlQueryEvaluationTestExecutor implements TestExecutor {

    private static final Pattern QUERY_TYPE_PATTERN =
            Pattern.compile("(?i)\\b(SELECT|ASK|CONSTRUCT|DESCRIBE)\\b");

    public SparqlQueryEvaluationTestExecutor() {
    }

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        // 1. Resolve query file URI (qt:query → query property; syntax tests fall back to action)
        String queryUriStr = testCase.getProperty(W3cTestCase.Property.QUERY, String.class);
        if (queryUriStr == null) {
            queryUriStr = testCase.getProperty(W3cTestCase.Property.ACTION, String.class);
        }
        if (queryUriStr == null) {
            throw new AssertionError("No query file found for test: " + testCase.getName());
        }
        URI queryUri = URI.create(queryUriStr);

        // 2. Resolve data file URI (qt:data → data property; may be absent)
        String dataUriStr = testCase.getProperty(W3cTestCase.Property.DATA, String.class);
        URI resultUri = testCase.getResultFileUri();

        // 3. Read query text
        String queryPath = RDFTestUtils.loadFile(queryUri);
        String queryText = Files.readString(Path.of(queryPath), StandardCharsets.UTF_8);

        // 4. Build in-memory dataset (default graph + named graphs)
        StorageManager storage = Storages.create();
        Model model = StorageModels.create(storage);
        if (dataUriStr != null) {
            loadRdfFile(URI.create(dataUriStr), model);
        }
        @SuppressWarnings("unchecked")
        List<String> graphDataUris = testCase.getProperty(W3cTestCase.Property.GRAPH_DATA, List.class);
        if (graphDataUris != null) {
            for (String graphDataUri : graphDataUris) {
                loadRdfFileAsNamedGraph(URI.create(graphDataUri), model, graphDataUri);
            }
        }

        // 5. Execute query and compare result
        String queryType = detectQueryType(queryText);
        try (Repository repo = Repositories.create(storage);
             RepositoryConnection conn = repo.getConnection()) {
            switch (queryType) {
                case "SELECT" -> executeSelectTest(conn, queryText, resultUri, testCase);
                case "ASK" -> executeAskTest(conn, queryText, resultUri, testCase);
                case "CONSTRUCT", "DESCRIBE" -> executeGraphTest(conn, queryText, resultUri, testCase, storage);
                default -> throw new AssertionError(
                        "Cannot determine SPARQL query type for test: " + testCase.getName());
            }
        }
    }

    // -----------------------------------------------------------------------
    // SELECT
    // -----------------------------------------------------------------------

    private void executeSelectTest(RepositoryConnection conn, String queryText,
                                   URI resultUri, W3cTestCase testCase) throws Exception {
        String resultPath = RDFTestUtils.loadFile(resultUri);
        String ext = RDFTestUtils.getFileExtension(resultUri.toString()).toLowerCase(Locale.ROOT);

        if ("csv".equals(ext)) {
            // CSV format: literals are serialized as bare lexical forms (no type info).
            // Unbound variables (OPTIONAL) must appear as empty strings in every row.
            // Re-execute the query converting each Value to its CSV string representation
            // and compare directly against the raw CSV cells (no canonical conversion).
            List<Map<String, String>> actualCsvRows = executeSelectWithCsvFormatter(conn, queryText);
            List<Map<String, String>> expectedRows = CsvTsvResultParser.parseCsvRaw(resultPath);
            compareCsvTsvRows(expectedRows, actualCsvRows, testCase);
            return;
        }

        // For all other formats: execute in canonical form and compare.
        List<Map<String, String>> actualRows = new ArrayList<>();
        try (TupleQueryResult result = conn.prepareTupleQuery(queryText).evaluate()) {
            List<String> vars = result.getBindingNames();
            while (result.hasNext()) {
                BindingSet bs = result.next();
                Map<String, String> row = new LinkedHashMap<>();
                for (String var : vars) {
                    Value val = bs.getValue(var);
                    if (val != null) {
                        row.put(var, valueToCanonical(val));
                    }
                }
                actualRows.add(row);
            }
        }

        if ("srx".equals(ext) || "srj".equals(ext)) {
            SparqlResultParser.SparqlResults expected;
            try (FileInputStream fis = new FileInputStream(resultPath)) {
                expected = SparqlResultParser.parse(fis);
            }
            if (expected.isBoolean()) {
                throw new AssertionError("Expected SELECT result file but got boolean result for: "
                        + testCase.getName());
            }
            compareSelectResults(expected.rows(), actualRows, testCase);
        } else if ("ttl".equals(ext) || "rdf".equals(ext)) {
            // rs: vocabulary result format (Turtle or RDF/XML)
            List<Map<String, String>> expectedRows = RsVocabResultParser.parse(resultUri);
            compareSelectResults(expectedRows, actualRows, testCase);
        } else if ("tsv".equals(ext)) {
            // TSV uses SPARQL notation → convert to canonical form, compare normally.
            List<Map<String, String>> expectedRows = CsvTsvResultParser.parseTsvToCanonical(resultPath);
            compareSelectResults(expectedRows, actualRows, testCase);
        } else {
            throw new AssertionError("Unsupported result file format '" + ext
                    + "' for SELECT test: " + testCase.getName());
        }
    }

    /**
     * Executes the SELECT query in CSV format.
     * Every variable from the header appears in every row: bound values are serialized
     * with {@link #valueToCsvString}, unbound variables (OPTIONAL) appear as empty strings.
     * This matches the W3C SPARQL 1.1 CSV result format specification.
     */
    private static List<Map<String, String>> executeSelectWithCsvFormatter(
            RepositoryConnection conn, String queryText) throws Exception {
        List<Map<String, String>> rows = new ArrayList<>();
        try (TupleQueryResult result = conn.prepareTupleQuery(queryText).evaluate()) {
            List<String> vars = result.getBindingNames();
            while (result.hasNext()) {
                BindingSet bs = result.next();
                Map<String, String> row = new LinkedHashMap<>();
                for (String var : vars) {
                    Value val = bs.getValue(var);
                    row.put(var, val != null ? valueToCsvString(val) : "");
                }
                rows.add(row);
            }
        }
        return rows;
    }

    /**
     * Serializes a {@link Value} to its SPARQL 1.1 CSV representation:
     * IRIs as bare URI strings, blank nodes as {@code _:id}, and all literals
     * as their lexical form only (the CSV format does not encode the datatype).
     */
    static String valueToCsvString(Value value) {
        if (value instanceof IRI iri) {
            return iri.stringValue();
        }
        if (value instanceof BNode bNode) {
            return "_:" + bNode.stringValue();
        }
        if (value instanceof Literal literal) {
            return literal.getLabel();
        }
        return value.stringValue();
    }

    /**
     * Compares CSV/TSV result rows as multisets using blank-node positional normalization.
     * Blank node values are identified by the {@code _:} prefix (not the {@code _:b_} prefix
     * used by the canonical form).
     */
    private void compareCsvTsvRows(List<Map<String, String>> expected,
                                   List<Map<String, String>> actual,
                                   W3cTestCase testCase) {
        if (expected.size() != actual.size()) {
            throw new AssertionError(String.format(
                    "CSV/TSV result row count mismatch for '%s': expected %d rows, got %d rows",
                    testCase.getName(), expected.size(), actual.size()));
        }
        List<String> expectedNorm = expected.stream()
                .map(SparqlQueryEvaluationTestExecutor::normalizeCsvRow)
                .sorted()
                .collect(Collectors.toList());
        List<String> actualNorm = actual.stream()
                .map(SparqlQueryEvaluationTestExecutor::normalizeCsvRow)
                .sorted()
                .collect(Collectors.toList());

        if (!expectedNorm.equals(actualNorm)) {
            throw new AssertionError(String.format(
                    "CSV/TSV result mismatch for '%s'%nExpected:%n%s%nActual:%n%s",
                    testCase.getName(),
                    String.join("\n", expectedNorm),
                    String.join("\n", actualNorm)));
        }
    }

    /**
     * Produces a canonical string for a CSV/TSV result row.
     * Blank nodes are identified by the {@code _:} prefix and replaced by
     * positional tokens so that rows with equivalent blank-node structure compare equal.
     */
    private static String normalizeCsvRow(Map<String, String> row) {
        Map<String, String> bnodeIdMap = new LinkedHashMap<>();
        int[] counter = {0};
        StringBuilder sb = new StringBuilder();
        row.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .forEach(entry -> {
                    String val = entry.getValue();
                    if (val != null && val.startsWith("_:")) {
                        val = "_:b" + bnodeIdMap.computeIfAbsent(val, k -> String.valueOf(counter[0]++));
                    }
                    sb.append(entry.getKey()).append('=').append(val).append(';');
                });
        return sb.toString();
    }

    private void compareSelectResults(List<Map<String, String>> expected,
                                      List<Map<String, String>> actual, W3cTestCase testCase) {
        if (expected.size() != actual.size()) {
            throw new AssertionError(String.format(
                    "SELECT result row count mismatch for '%s': expected %d rows, got %d rows",
                    testCase.getName(), expected.size(), actual.size()));
        }
        // Normalize blank-node IDs per-row, then compare as multisets
        List<String> expectedNorm = expected.stream()
                .map(SparqlQueryEvaluationTestExecutor::normalizeRow)
                .sorted()
                .collect(Collectors.toList());
        List<String> actualNorm = actual.stream()
                .map(SparqlQueryEvaluationTestExecutor::normalizeRow)
                .sorted()
                .collect(Collectors.toList());

        if (!expectedNorm.equals(actualNorm)) {
            throw new AssertionError(String.format(
                    "SELECT result mismatch for '%s'%nExpected:%n%s%nActual:%n%s",
                    testCase.getName(),
                    String.join("\n", expectedNorm),
                    String.join("\n", actualNorm)));
        }
    }

    /**
     * Produces a canonical string for a result row.
     * Blank-node IDs within the row are replaced by positional tokens so that
     * {@code ?x=_:b0 ?y=_:b0} (same bnode) is distinguished from
     * {@code ?x=_:b0 ?y=_:b1} (different bnodes) independently of the actual ID strings.
     */
    private static String normalizeRow(Map<String, String> row) {
        Map<String, String> bnodeIdMap = new LinkedHashMap<>();
        int[] counter = {0};
        StringBuilder sb = new StringBuilder();
        // Sort by variable name for a stable canonical form
        row.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .forEach(entry -> {
                    String val = entry.getValue();
                    if (val != null && val.startsWith("_:b_")) {
                        val = "_:b" + bnodeIdMap.computeIfAbsent(val, k -> String.valueOf(counter[0]++));
                    }
                    sb.append(entry.getKey()).append('=').append(val).append(';');
                });
        return sb.toString();
    }

    // -----------------------------------------------------------------------
    // ASK
    // -----------------------------------------------------------------------

    private void executeAskTest(RepositoryConnection conn, String queryText,
                                URI resultUri, W3cTestCase testCase) throws Exception {
        boolean actualResult = conn.prepareBooleanQuery(queryText).evaluate();

        String resultPath = RDFTestUtils.loadFile(resultUri);
        String ext = RDFTestUtils.getFileExtension(resultUri.toString()).toLowerCase(Locale.ROOT);
        boolean expectedResult;

        if ("srx".equals(ext) || "srj".equals(ext)) {
            SparqlResultParser.SparqlResults expected;
            try (FileInputStream fis = new FileInputStream(resultPath)) {
                expected = SparqlResultParser.parse(fis);
            }
            if (!expected.isBoolean()) {
                throw new AssertionError("Expected ASK result file but got tabular result for: "
                        + testCase.getName());
            }
            expectedResult = expected.booleanResult();
        } else {
            // Plain text file with "true" or "false"
            String content = Files.readString(Path.of(resultPath), StandardCharsets.UTF_8).trim();
            expectedResult = "true".equalsIgnoreCase(content);
        }

        if (actualResult != expectedResult) {
            throw new AssertionError(String.format(
                    "ASK result mismatch for '%s': expected %b, got %b",
                    testCase.getName(), expectedResult, actualResult));
        }
    }

    // -----------------------------------------------------------------------
    // CONSTRUCT / DESCRIBE
    // -----------------------------------------------------------------------

    private void executeGraphTest(RepositoryConnection conn, String queryText,
                                  URI resultUri, W3cTestCase testCase, StorageManager storage) throws Exception {
        // Collect actual triples from the graph query result
        Model actualModel = StorageModels.create(Storages.create());
        try (GraphQueryResult result = conn.prepareGraphQuery(queryText).evaluate()) {
            while (result.hasNext()) {
                Statement stmt = result.next();
                actualModel.add(stmt);
            }
        }

        // Parse expected RDF model
        String resultPath = RDFTestUtils.loadFile(resultUri);
        RDFFormat fmt = guessRdfOrFallback(resultUri);
        Model expectedModel = RDFTestUtils.createModel();
        RDFParser parser = RDFTestUtils.createParser(fmt, expectedModel);
        try (FileReader reader = new FileReader(resultPath, StandardCharsets.UTF_8)) {
            parser.parse(reader, resultUri.toString());
        }

        if (!ModelIsomorphism.areModelsIsomorphic(actualModel, expectedModel)) {
            throw new AssertionError(String.format(
                    "CONSTRUCT/DESCRIBE result mismatch for '%s'%nActual:%n%s%nExpected:%n%s",
                    testCase.getName(),
                    ModelIsomorphism.canonicalize(actualModel),
                    ModelIsomorphism.canonicalize(expectedModel)));
        }
    }

    // -----------------------------------------------------------------------
    // Helpers
    // -----------------------------------------------------------------------

    /**
     * Loads an RDF file into the given model, mapping .n3 to Turtle.
     */
    private static void loadRdfFile(URI fileUri, Model model) throws Exception {
        String filePath = RDFTestUtils.loadFile(fileUri);
        RDFFormat fmt = guessRdfOrFallback(fileUri);
        RDFParser parser = RDFTestUtils.createParser(fmt, model);
        try (FileReader reader = new FileReader(filePath, StandardCharsets.UTF_8)) {
            parser.parse(reader, fileUri.toString());
        }
    }

    /**
     * Loads an RDF file into a named graph (context) within the given model.
     * The graph name is the original URI of the file as declared in the manifest
     * (i.e., the remote URL used as {@code qt:graphData} value).
     */
    private static void loadRdfFileAsNamedGraph(URI fileUri, Model model, String graphName) throws Exception {
        String filePath = RDFTestUtils.loadFile(fileUri);
        RDFFormat fmt = guessRdfOrFallback(fileUri);
        Model tempModel = RDFTestUtils.createModel();
        RDFParser tempParser = RDFTestUtils.createParser(fmt, tempModel);
        try (FileReader reader = new FileReader(filePath, StandardCharsets.UTF_8)) {
            tempParser.parse(reader, fileUri.toString());
        }
        IRI graphIri = Values.factory().createIRI(graphName);
        for (Statement stmt : tempModel) {
            model.add(stmt.getSubject(), stmt.getPredicate(), stmt.getObject(), graphIri);
        }
    }

    /**
     * Guesses RDF format, mapping .n3 → Turtle since Corese doesn't register .n3 separately.
     */
    private static RDFFormat guessRdfOrFallback(URI uri) {
        String ext = RDFTestUtils.getFileExtension(uri.toString()).toLowerCase(Locale.ROOT);
        if ("n3".equals(ext)) return RDFFormat.TURTLE;
        return RDFTestUtils.guessFileFormat(uri);
    }

    /**
     * Detects the SPARQL query form from the query text.
     * Removes single-line comments before scanning for the first query keyword.
     */
    static String detectQueryType(String queryText) {
        // Strip single-line comments so keywords inside them are ignored
        String noComments = queryText.replaceAll("#[^\n]*", " ");
        Matcher m = QUERY_TYPE_PATTERN.matcher(noComments);
        if (m.find()) {
            return m.group(1).toUpperCase(Locale.ROOT);
        }
        return "UNKNOWN";
    }

    /**
     * Converts a Corese {@link Value} to its canonical SPARQL string representation.
     * Blank-node IDs are preserved (prefixed with {@code _:b_}) for comparison.
     */
    static String valueToCanonical(Value value) {
        if (value instanceof IRI iri) {
            return "<" + iri.stringValue() + ">";
        }
        if (value instanceof BNode bNode) {
            return "_:b_" + bNode.stringValue();
        }
        if (value instanceof Literal literal) {
            String label = literal.getLabel();
            if (literal.getLanguage().isPresent()) {
                return "\"" + label + "\"@" + literal.getLanguage().get().toLowerCase(Locale.ROOT);
            }
            if (literal.getDatatype() != null) {
                return "\"" + label + "\"^^<" + literal.getDatatype().stringValue() + ">";
            }
            // Plain literal — treated as xsd:string for canonical comparison
            return "\"" + label + "\"^^<http://www.w3.org/2001/XMLSchema#string>";
        }
        return value.stringValue();
    }
}
