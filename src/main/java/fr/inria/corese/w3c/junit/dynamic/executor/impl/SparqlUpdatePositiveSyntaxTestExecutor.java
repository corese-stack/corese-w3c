package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.query.Repositories;
import fr.inria.corese.core.next.query.api.exception.QueryException;
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
 * Executor for SPARQL 1.1 positive update syntax tests (mf:PositiveUpdateSyntaxTest11).
 * <p>
 * The action file is a SPARQL Update request (.ru) that must parse without a syntax error.
 * The test fails if a {@link QuerySyntaxException} is thrown.
 */
public class SparqlUpdatePositiveSyntaxTestExecutor implements TestExecutor {

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        URI updateUri = testCase.getActionFileUri();
        if (updateUri == null) {
            throw new AssertionError("No action file found for positive update syntax test: " + testCase.getName());
        }

        String updatePath = RDFTestUtils.loadFile(updateUri);
        String updateText = Files.readString(Path.of(updatePath), StandardCharsets.UTF_8);

        try (Repository repo = Repositories.create(Storages.create());
             RepositoryConnection conn = repo.getConnection()) {
            conn.prepareUpdate(updateText);
        } catch (QueryException e) {
            throw new AssertionError(String.format(
                    "Expected update request to parse successfully but got syntax error in '%s': %s",
                    testCase.getName(), e.getMessage()), e);
        }
    }
}
