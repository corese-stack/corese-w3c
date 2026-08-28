package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.query.Repositories;
import fr.inria.corese.core.next.query.api.exception.QuerySyntaxException;
import fr.inria.corese.core.next.query.api.repository.Repository;
import fr.inria.corese.core.next.query.api.repository.RepositoryConnection;
import fr.inria.corese.core.next.storage.Storages;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * Executor for SPARQL 1.0 positive syntax tests (mf:PositiveSyntaxTest).
 * <p>
 * The action file is a SPARQL query (.rq) that must parse without a syntax error.
 * The test fails if a {@link QuerySyntaxException} is thrown.
 */
public class SparqlPositiveSyntaxTestExecutor implements TestExecutor {

    public SparqlPositiveSyntaxTestExecutor() {
    }

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        URI queryUri = testCase.getActionFileUri();
        if (queryUri == null) {
            throw new AssertionError("No action file found for positive syntax test: " + testCase.getName());
        }

        String queryPath = RDFTestUtils.loadFile(queryUri);
        String queryText = Files.readString(Path.of(queryPath), StandardCharsets.UTF_8);

        try (Repository repo = Repositories.create(Storages.create());
             RepositoryConnection conn = repo.getConnection()) {
            prepareQuery(conn, queryText, testCase.getName());
        } catch (QuerySyntaxException e) {
            throw new AssertionError(String.format(
                    "Expected query to parse successfully but got syntax error in '%s': %s",
                    testCase.getName(), e.getMessage()), e);
        }
    }

    /**
     * Prepares the query using the appropriate method based on the detected query form.
     * Throws {@link QuerySyntaxException} if the query is syntactically invalid.
     */
    private static void prepareQuery(RepositoryConnection conn, String queryText,
            String testName) {
        String queryType = SparqlQueryEvaluationTestExecutor.detectQueryType(queryText);
        switch (queryType) {
            case "SELECT"   -> conn.prepareTupleQuery(queryText);
            case "ASK"      -> conn.prepareBooleanQuery(queryText);
            case "CONSTRUCT", "DESCRIBE" -> conn.prepareGraphQuery(queryText);
            default -> throw new AssertionError(
                    "Cannot determine SPARQL query type for positive syntax test: " + testName);
        }
    }
}
