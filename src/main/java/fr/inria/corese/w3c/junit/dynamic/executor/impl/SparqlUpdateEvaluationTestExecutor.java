package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.io.parser.RDFParser;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.model.Statement;
import fr.inria.corese.core.next.data.api.term.IRI;
import fr.inria.corese.core.next.query.Repositories;
import fr.inria.corese.core.next.query.api.repository.Repository;
import fr.inria.corese.core.next.query.api.repository.RepositoryConnection;
import fr.inria.corese.core.next.storage.StorageModels;
import fr.inria.corese.core.next.storage.Storages;
import fr.inria.corese.core.next.storage.api.StorageManager;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.ModelIsomorphism;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;

import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Locale;

/**
 * Executor for SPARQL 1.1 update evaluation tests (mf:UpdateEvaluationTest).
 * <p>
 * Process:
 * <ol>
 *   <li>Load initial RDF data (ut:data and ut:graphData from mf:action) into a dataset.</li>
 *   <li>Read the SPARQL Update request (ut:request).</li>
 *   <li>Execute the update against the dataset.</li>
 *   <li>Compare the resulting default graph and named graphs with the expected state
 *       (ut:data and ut:graphData from mf:result).</li>
 * </ol>
 * Named-graph entries are stored as {@code "graphNameUri|fileUri"} strings in the
 * {@link W3cTestCase.Property#UPDATE_GRAPH_DATA} and
 * {@link W3cTestCase.Property#RESULT_GRAPH_DATA} lists.
 */
public class SparqlUpdateEvaluationTestExecutor implements TestExecutor {

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        // 1. Resolve the update request file (ut:request)
        String requestUriStr = testCase.getProperty(W3cTestCase.Property.REQUEST, String.class);
        if (requestUriStr == null) {
            throw new AssertionError("No ut:request file found for update evaluation test: " + testCase.getName());
        }
        String requestPath = RDFTestUtils.loadFile(URI.create(requestUriStr));
        String updateText = Files.readString(Path.of(requestPath), StandardCharsets.UTF_8);

        // 2. Build initial dataset
        StorageManager storage = Storages.create();
        Model model = StorageModels.create(storage);

        loadInitialDataset(testCase, model);

        // 3. Execute the SPARQL Update
        try (Repository repo = Repositories.create(storage);
             RepositoryConnection conn = repo.getConnection()) {
            conn.prepareUpdate(updateText).execute();
        }

        verifyExpectedDataset(testCase, model);
    }

    private static void loadInitialDataset(W3cTestCase testCase, Model model) throws IOException {
        String updateDataUri = testCase.getProperty(W3cTestCase.Property.UPDATE_DATA, String.class);
        if (updateDataUri != null) {
            loadRdfFile(URI.create(updateDataUri), model);
        }
        @SuppressWarnings("unchecked")
        List<String> graphData = testCase.getProperty(W3cTestCase.Property.UPDATE_GRAPH_DATA, List.class);
        loadNamedGraphs(graphData, model);
    }

    private static void verifyExpectedDataset(W3cTestCase testCase, Model actualDataset) throws IOException {
        Model expectedDataset = RDFTestUtils.createModel();
        String resultDataUri = testCase.getProperty(W3cTestCase.Property.RESULT_DATA, String.class);
        if (resultDataUri != null) {
            loadRdfFile(URI.create(resultDataUri), expectedDataset);
        }

        @SuppressWarnings("unchecked")
        List<String> resultGraphData = testCase.getProperty(W3cTestCase.Property.RESULT_GRAPH_DATA, List.class);
        loadNamedGraphs(resultGraphData, expectedDataset);

        if (!ModelIsomorphism.areModelsIsomorphic(actualDataset, expectedDataset)) {
            throw new AssertionError(String.format(
                    "Update evaluation dataset mismatch for '%s'%nActual:%n%s%nExpected:%n%s",
                    testCase.getName(),
                    ModelIsomorphism.canonicalize(actualDataset),
                    ModelIsomorphism.canonicalize(expectedDataset)));
        }
    }

    private static void loadNamedGraphs(List<String> graphData, Model model) throws IOException {
        if (graphData == null) {
            return;
        }
        for (String entry : graphData) {
            String[] parts = entry.split("\\|", 2);
            if (parts.length != 2) {
                throw new IllegalArgumentException("Invalid update graph-data entry: " + entry);
            }
            loadRdfFileAsNamedGraph(URI.create(parts[1]), model, parts[0]);
        }
    }

    // -----------------------------------------------------------------------
    // Helpers
    // -----------------------------------------------------------------------

    private static void loadRdfFile(URI fileUri, Model model) throws IOException {
        String filePath = RDFTestUtils.loadFile(fileUri);
        RDFFormat fmt = guessRdfOrFallback(fileUri);
        RDFParser parser = RDFTestUtils.createParser(fmt, model);
        try (FileReader reader = new FileReader(filePath, StandardCharsets.UTF_8)) {
            parser.parse(reader, fileUri.toString());
        }
    }

    private static void loadRdfFileAsNamedGraph(URI fileUri, Model model, String graphName)
            throws IOException {
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

    private static RDFFormat guessRdfOrFallback(URI uri) {
        String ext = RDFTestUtils.getFileExtension(uri.toString()).toLowerCase(Locale.ROOT);
        if ("n3".equals(ext)) {
            return RDFFormat.TURTLE;
        }
        return RDFTestUtils.guessFileFormat(uri);
    }
}
