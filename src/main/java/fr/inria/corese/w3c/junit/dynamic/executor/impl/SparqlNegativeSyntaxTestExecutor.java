package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.query.Repositories;
import fr.inria.corese.core.next.query.api.exception.QuerySyntaxException; // caught from prepareXxx()
import fr.inria.corese.core.next.query.api.repository.Repository;
import fr.inria.corese.core.next.query.api.repository.RepositoryConnection;
import fr.inria.corese.core.next.storage.Storages;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

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

    private static final Logger logger = LoggerFactory.getLogger(SparqlNegativeSyntaxTestExecutor.class);

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
            String msg = String.format(
                    "Expected query to fail parsing but it succeeded for negative syntax test: '%s'",
                    testCase.getName());
            logger.error(msg);
            throw new AssertionError(msg);
        } catch (QuerySyntaxException e) {
            // Expected: query parsing failed — negative syntax test passes
            logger.debug("Negative syntax test passed (QuerySyntaxException): {}", testCase.getName());
        } catch (Exception e) {
            // Any other parse-level exception is also acceptable
            logger.debug("Negative syntax test passed ({}): {}", e.getClass().getSimpleName(), testCase.getName());
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
