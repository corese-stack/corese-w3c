package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.data.api.exception.ParsingException;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.model.Statement;
import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.data.api.term.IRI;
import fr.inria.corese.core.next.data.api.term.Value;
import fr.inria.corese.core.next.query.Repositories;
import fr.inria.corese.core.next.query.api.exception.QuerySyntaxException;
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
import fr.inria.corese.w3c.junit.dynamic.utils.ModelIsomorphism;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import fr.inria.corese.w3c.junit.dynamic.utils.RsVocabResultParser;
import fr.inria.corese.w3c.junit.dynamic.utils.SparqlResultParser;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;

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

    private enum QueryForm { SELECT, ASK, GRAPH }

    public SparqlQueryEvaluationTestExecutor() {
        // Default constructor for dynamic instantiation
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
        if (!queryUri.isAbsolute() && testCase.getManifestUri() != null) {
            queryUri = testCase.getManifestUri().resolve(queryUri);
        }

        URI resultUri = testCase.getResultFileUri();

        // 2. Read query text
        String queryPath = RDFTestUtils.loadFile(queryUri);
        String queryText = Files.readString(Path.of(queryPath), StandardCharsets.UTF_8);

        // 3. Build in-memory dataset (default graph + named graphs)
        StorageManager storage = Storages.create();
        buildDataset(testCase, storage);

        // 4. Execute query and compare result
        try (Repository repo = Repositories.create(storage);
             RepositoryConnection conn = repo.getConnection()) {
            switch (queryForm(conn, queryText)) {
                case SELECT -> executeSelectTest(conn, queryText, resultUri, testCase);
                case ASK    -> executeAskTest(conn, queryText, resultUri, testCase);
                case GRAPH  -> executeGraphTest(conn, queryText, resultUri, testCase);
            }
        }
    }

    private static void buildDataset(W3cTestCase testCase, StorageManager storage) throws IOException, ParsingException {
        String dataUriStr = testCase.getProperty(W3cTestCase.Property.DATA, String.class);
        Model model = StorageModels.create(storage);
        if (dataUriStr != null) {
            URI dataUri = URI.create(dataUriStr);
            if (!dataUri.isAbsolute() && testCase.getManifestUri() != null) {
                dataUri = testCase.getManifestUri().resolve(dataUri);
            }
            loadRdfFile(dataUri, model);
        }
        @SuppressWarnings("unchecked")
        List<String> graphDataUris = testCase.getProperty(W3cTestCase.Property.GRAPH_DATA, List.class);
        if (graphDataUris != null) {
            for (String graphDataUri : graphDataUris) {
                URI gUri = URI.create(graphDataUri);
                if (!gUri.isAbsolute() && testCase.getManifestUri() != null) {
                    gUri = testCase.getManifestUri().resolve(gUri);
                }
                loadRdfFileAsNamedGraph(gUri, model, gUri.toString());
            }
        }
    }

    // -----------------------------------------------------------------------
    // SELECT
    // -----------------------------------------------------------------------

    private void executeSelectTest(RepositoryConnection conn, String queryText,
                                   URI resultUri, W3cTestCase testCase) throws Exception {
        // Execute actual query
        List<Map<String, String>> actualRows = new ArrayList<>();
        try (TupleQueryResult result = conn.prepareTupleQuery(queryText).evaluate()) {
            List<String> vars = result.getBindingNames();
            while (result.hasNext()) {
                BindingSet bs = result.next();
                Map<String, String> row = new LinkedHashMap<>();
                for (String varName : vars) {
                    Value val = bs.getValue(varName);
                    if (val != null) {
                        row.put(varName, RDFTestUtils.toCanonical(val));
                    }
                }
                actualRows.add(row);
            }
        }

        String resultPath = RDFTestUtils.loadFile(resultUri);
        String ext = RDFTestUtils.getFileExtension(resultUri.toString()).toLowerCase(Locale.ROOT);
        boolean isOrdered = queryText.toUpperCase(Locale.ROOT).contains("ORDER BY");
        if ("srx".equals(ext) || "srj".equals(ext)) {
            SparqlResultParser.SparqlResults expected;
            try (FileInputStream fis = new FileInputStream(resultPath)) {
                expected = SparqlResultParser.parse(fis);
            }
            if (expected.isBoolean()) {
                throw new AssertionError("Expected SELECT result file but got boolean result for: "
                        + testCase.getName());
            }
            compareSelectResults(expected.rows(), actualRows, isOrdered, testCase);
        } else if ("ttl".equals(ext) || "rdf".equals(ext)) {
            // rs: vocabulary result format (Turtle or RDF/XML)
            List<Map<String, String>> expectedRows = RsVocabResultParser.parse(resultUri);
            compareSelectResults(expectedRows, actualRows, isOrdered, testCase);
        } else {
            throw new AssertionError("Unsupported result file format '" + ext
                    + "' for SELECT test: " + testCase.getName());
        }
    }

    private void compareSelectResults(List<Map<String, String>> expected,
                                      List<Map<String, String>> actual, boolean isOrdered, W3cTestCase testCase) {
        if (expected.size() != actual.size()) {
            throw new AssertionError(String.format(
                    "SELECT result row count mismatch for '%s': expected %d rows, got %d rows",
                    testCase.getName(), expected.size(), actual.size()));
        }
        // Normalize blank-node IDs per-row
        List<String> expectedNorm = expected.stream()
                .map(SparqlQueryEvaluationTestExecutor::normalizeRow)
                .toList();
        List<String> actualNorm = actual.stream()
                .map(SparqlQueryEvaluationTestExecutor::normalizeRow)
                .toList();

        if (!isOrdered) {
            expectedNorm = expectedNorm.stream().sorted().toList();
            actualNorm = actualNorm.stream().sorted().toList();
        }

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
        } else if ("ttl".equals(ext) || "rdf".equals(ext)) {
            expectedResult = RsVocabResultParser.parseBoolean(resultUri);
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
                                  URI resultUri, W3cTestCase testCase) throws IOException, ParsingException, QuerySyntaxException {
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
    private static void loadRdfFile(URI fileUri, Model model) throws IOException, ParsingException {
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
    private static void loadRdfFileAsNamedGraph(URI fileUri, Model model, String graphName) throws IOException, ParsingException {
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
     * Detects the SPARQL query form by trying to prepare the query with each form.
     * Returns the first form that parses successfully, or throws {@link QuerySyntaxException}
     * if none of them succeed.
     */
    static QueryForm queryForm(RepositoryConnection conn, String queryText) throws QuerySyntaxException {
        QuerySyntaxException last = null;
        for (QueryForm form : QueryForm.values()) {
            try {
                switch (form) {
                    case SELECT -> conn.prepareTupleQuery(queryText);
                    case ASK    -> conn.prepareBooleanQuery(queryText);
                    case GRAPH  -> conn.prepareGraphQuery(queryText);
                }
                return form;
            } catch (QuerySyntaxException e) {
                last = e;
            }
        }
        throw last != null ? last : new QuerySyntaxException("Cannot determine SPARQL query form");
    }
}
