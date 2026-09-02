package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.data.api.exception.ParsingException;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.model.Statement;
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

import javax.xml.parsers.ParserConfigurationException;
import org.xml.sax.SAXException;

import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.regex.Pattern;

/**
 * Executor for SPARQL 1.0 query evaluation tests (mf:QueryEvaluationTest).
 * <p>
 * Process:
 * <ol>
 *   <li>Load RDF data files (qt:data / qt:graphData) into an in-memory dataset.</li>
 *   <li>Read SPARQL query text (qt:query), establishing base URI if relative.</li>
 *   <li>Detect query form (SELECT / ASK / CONSTRUCT / DESCRIBE).</li>
 *   <li>Execute query and compare against expected result with global bnode isomorphism and lax cardinality support.</li>
 * </ol>
 */
public class SparqlQueryEvaluationTestExecutor implements TestExecutor {

    private enum QueryForm { SELECT, ASK, GRAPH }

    private record TupleExecutionResult(List<String> variables, List<Map<String, String>> rows) {}

    private record ComparisonContext(
            List<Map<String, String>> expected,
            List<Map<String, String>> actual,
            boolean isOrdered,
            boolean isLaxCardinality) {}

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

        // 2. Read query text and establish retrieval base URI if needed
        String queryPath = RDFTestUtils.loadFile(queryUri);
        String rawQueryText = Files.readString(Path.of(queryPath), StandardCharsets.UTF_8);
        String queryText = prepareQueryText(rawQueryText, queryUri);

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

    public static String prepareQueryText(String rawQuery, URI queryUri) {
        if (queryUri != null && !hasBaseDeclaration(rawQuery)) {
            return "BASE <" + queryUri + ">\n" + rawQuery;
        }
        return rawQuery;
    }

    private static boolean hasBaseDeclaration(String query) {
        return Pattern.compile("(?i)(^|\\s)BASE\\s+<").matcher(query).find();
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

    private void executeSelectTest(
            RepositoryConnection conn,
            String queryText,
            URI resultUri,
            W3cTestCase testCase)
            throws IOException, ParsingException, QuerySyntaxException, ParserConfigurationException, SAXException {
        TupleExecutionResult actual = executeTupleQuery(conn, queryText);
        boolean isOrdered = queryText.toUpperCase(Locale.ROOT).contains("ORDER BY");
        boolean isLax = testCase.isLaxCardinality();

        List<Map<String, String>> expectedRows = loadExpectedSelectRows(resultUri, actual.variables(), testCase);
        compareSelectResults(expectedRows, actual.rows(), isOrdered, isLax, testCase);
    }

    private static TupleExecutionResult executeTupleQuery(RepositoryConnection conn, String queryText)
            throws QuerySyntaxException {
        List<String> actualVars = new ArrayList<>();
        List<Map<String, String>> actualRows = new ArrayList<>();
        try (TupleQueryResult result = conn.prepareTupleQuery(queryText).evaluate()) {
            actualVars = result.getBindingNames();
            while (result.hasNext()) {
                BindingSet bs = result.next();
                Map<String, String> row = new LinkedHashMap<>();
                for (String varName : actualVars) {
                    Value val = bs.getValue(varName);
                    if (val != null) {
                        row.put(varName, RDFTestUtils.toCanonical(val));
                    }
                }
                actualRows.add(row);
            }
        }
        return new TupleExecutionResult(actualVars, actualRows);
    }

    private static List<Map<String, String>> loadExpectedSelectRows(
            URI resultUri,
            List<String> actualVars,
            W3cTestCase testCase)
            throws IOException, ParsingException, ParserConfigurationException, SAXException {
        String resultPath = RDFTestUtils.loadFile(resultUri);
        String ext = RDFTestUtils.getFileExtension(resultUri.toString()).toLowerCase(Locale.ROOT);

        if ("srx".equals(ext) || "srj".equals(ext)) {
            SparqlResultParser.SparqlResults expected;
            try (FileInputStream fis = new FileInputStream(resultPath)) {
                expected = SparqlResultParser.parse(fis);
            }
            if (expected.isBoolean()) {
                throw new AssertionError("Expected SELECT result file but got boolean result for: " + testCase.getName());
            }
            if (expected.variables() != null && !expected.variables().isEmpty()) {
                checkVariables(expected.variables(), actualVars, testCase);
            }
            return expected.rows();
        }

        if ("ttl".equals(ext) || "rdf".equals(ext)) {
            SparqlResultParser.SparqlResults expected = RsVocabResultParser.parse(resultUri);
            if (expected.variables() != null && !expected.variables().isEmpty()) {
                checkVariables(expected.variables(), actualVars, testCase);
            }
            return expected.rows();
        }

        throw new AssertionError("Unsupported result file format '" + ext + "' for SELECT test: " + testCase.getName());
    }

    private static void checkVariables(
            List<String> expectedVars,
            List<String> actualVars,
            W3cTestCase testCase) {
        boolean match = new HashSet<>(expectedVars).equals(new HashSet<>(actualVars));
        if (!match) {
            throw new AssertionError(String.format(
                    "SELECT projected variables mismatch for '%s': expected %s, got %s",
                    testCase.getName(), expectedVars, actualVars));
        }
    }

    private static void compareSelectResults(
            List<Map<String, String>> expected,
            List<Map<String, String>> actual,
            boolean isOrdered,
            boolean isLaxCardinality,
            W3cTestCase testCase) {

        if (!isLaxCardinality && expected.size() != actual.size()) {
            throw new AssertionError(String.format(
                    "SELECT result row count mismatch for '%s': expected %d rows, got %d rows",
                    testCase.getName(), expected.size(), actual.size()));
        }

        if (isLaxCardinality && (actual.isEmpty() && !expected.isEmpty())) {
            throw new AssertionError(String.format(
                    "SELECT result row count mismatch for '%s' with LaxCardinality: expected non-empty result, got 0 rows",
                    testCase.getName()));
        }

        boolean matched = matchesSelectResults(expected, actual, isOrdered, isLaxCardinality);
        if (!matched) {
            throw new AssertionError(String.format(
                    "SELECT result mismatch for '%s' (ordered=%b, laxCardinality=%b)%nExpected (%d rows):%n%s%nActual (%d rows):%n%s",
                    testCase.getName(), isOrdered, isLaxCardinality,
                    expected.size(), formatRows(expected),
                    actual.size(), formatRows(actual)));
        }
    }

    private static boolean matchesSelectResults(
            List<Map<String, String>> expected,
            List<Map<String, String>> actual,
            boolean isOrdered,
            boolean isLaxCardinality) {

        Set<String> expBnodes = collectBlankNodes(expected);
        Set<String> actBnodes = collectBlankNodes(actual);

        if (expBnodes.size() != actBnodes.size()) {
            return false;
        }

        ComparisonContext ctx = new ComparisonContext(expected, actual, isOrdered, isLaxCardinality);
        if (expBnodes.isEmpty()) {
            return compareMappedRows(Collections.emptyMap(), ctx);
        }

        List<String> actList = new ArrayList<>(actBnodes);
        List<String> expList = new ArrayList<>(expBnodes);
        return findBijection(actList, 0, expList, new HashMap<>(), new HashSet<>(), ctx);
    }

    private static boolean findBijection(
            List<String> actList,
            int index,
            List<String> expList,
            Map<String, String> currentMapping,
            Set<String> usedExp,
            ComparisonContext ctx) {

        if (index == actList.size()) {
            return compareMappedRows(currentMapping, ctx);
        }

        String actBnode = actList.get(index);
        for (String expBnode : expList) {
            if (!usedExp.contains(expBnode)) {
                usedExp.add(expBnode);
                currentMapping.put(actBnode, expBnode);

                if (findBijection(actList, index + 1, expList, currentMapping, usedExp, ctx)) {
                    return true;
                }

                currentMapping.remove(actBnode);
                usedExp.remove(expBnode);
            }
        }
        return false;
    }

    private static boolean compareMappedRows(Map<String, String> bnodeMapping, ComparisonContext ctx) {
        List<String> expStrings = ctx.expected().stream().map(r -> rowToString(r, Collections.emptyMap())).toList();
        List<String> actStrings = ctx.actual().stream().map(r -> rowToString(r, bnodeMapping)).toList();

        if (ctx.isOrdered() && !ctx.isLaxCardinality()) {
            return expStrings.equals(actStrings);
        }

        if (!ctx.isLaxCardinality()) {
            return countFrequencies(expStrings).equals(countFrequencies(actStrings));
        }

        Map<String, Long> expFreq = countFrequencies(expStrings);
        Map<String, Long> actFreq = countFrequencies(actStrings);

        if (!expFreq.keySet().equals(actFreq.keySet())) {
            return false;
        }

        for (Map.Entry<String, Long> entry : expFreq.entrySet()) {
            long actCount = actFreq.getOrDefault(entry.getKey(), 0L);
            if (actCount < 1 || actCount > entry.getValue()) {
                return false;
            }
        }
        return true;
    }

    private static Map<String, Long> countFrequencies(List<String> list) {
        Map<String, Long> freq = new HashMap<>();
        for (String s : list) {
            freq.put(s, freq.getOrDefault(s, 0L) + 1L);
        }
        return freq;
    }

    private static String rowToString(Map<String, String> row, Map<String, String> bnodeMapping) {
        StringBuilder sb = new StringBuilder();
        row.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .forEach(e -> {
                    String val = e.getValue();
                    if (val != null && isBlankNode(val)) {
                        val = bnodeMapping.getOrDefault(val, val);
                    }
                    sb.append(e.getKey()).append('=').append(val).append(';');
                });
        return sb.toString();
    }

    private static boolean isBlankNode(String val) {
        return val != null && (val.startsWith("_:") || val.startsWith("BNODE:"));
    }

    private static Set<String> collectBlankNodes(List<Map<String, String>> rows) {
        Set<String> bnodes = new HashSet<>();
        for (Map<String, String> row : rows) {
            for (String val : row.values()) {
                if (isBlankNode(val)) {
                    bnodes.add(val);
                }
            }
        }
        return bnodes;
    }

    private static String formatRows(List<Map<String, String>> rows) {
        return rows.stream()
                .map(r -> rowToString(r, Collections.emptyMap()))
                .reduce((a, b) -> a + "\n" + b)
                .orElse("<empty>");
    }

    // -----------------------------------------------------------------------
    // ASK
    // -----------------------------------------------------------------------

    private void executeAskTest(
            RepositoryConnection conn,
            String queryText,
            URI resultUri,
            W3cTestCase testCase)
            throws IOException, ParsingException, QuerySyntaxException, ParserConfigurationException, SAXException {
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

    private void executeGraphTest(
            RepositoryConnection conn,
            String queryText,
            URI resultUri,
            W3cTestCase testCase) throws IOException, ParsingException, QuerySyntaxException {
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
