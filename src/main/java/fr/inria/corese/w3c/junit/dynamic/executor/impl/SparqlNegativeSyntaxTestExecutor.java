package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.query.Repositories;
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
 * Executor for SPARQL 1.0 negative syntax tests (mf:NegativeSyntaxTest).
 * <p>
 * The action file is a SPARQL query (.rq) that must fail to parse.
 * The test fails if the query is accepted without a syntax error.
 */
public class SparqlNegativeSyntaxTestExecutor implements TestExecutor {

    public SparqlNegativeSyntaxTestExecutor() {
    }

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        URI queryUri = testCase.getActionFileUri();
        if (queryUri == null) {
            throw new AssertionError("No action file found for negative syntax test: " + testCase.getName());
        }

        String queryPath = RDFTestUtils.loadFile(queryUri);
        String queryText = Files.readString(Path.of(queryPath), StandardCharsets.UTF_8);

        try (Repository repo = Repositories.create(Storages.create());
             RepositoryConnection conn = repo.getConnection()) {
            prepareQuery(conn, queryText);
            // If we reach here, the query was accepted — test must fail
            throw new AssertionError(String.format(
                    "Expected query to fail parsing but it succeeded for negative syntax test: '%s'",
                    testCase.getName()));
        } catch (Exception e) {
            // Expected: query parsing failed — negative syntax test passes
        }
    }

    private static void prepareQuery(RepositoryConnection conn, String queryText) {
        String queryType = SparqlQueryEvaluationTestExecutor.detectQueryType(queryText);
        switch (queryType) {
            case "SELECT"   -> conn.prepareTupleQuery(queryText);
            case "ASK"      -> conn.prepareBooleanQuery(queryText);
            case "CONSTRUCT", "DESCRIBE" -> conn.prepareGraphQuery(queryText);
            // UNKNOWN type means the query text is too malformed to classify;
            // treat as a parse failure (caught by the outer catch block)
            default -> throw new IllegalArgumentException("Cannot determine query type — likely a syntax error");
        }
    }
}
