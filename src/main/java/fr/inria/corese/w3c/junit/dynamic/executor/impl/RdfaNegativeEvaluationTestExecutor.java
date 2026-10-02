package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.query.Repositories;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

/** RDFa negative evaluation tests require the official ASK query to return false. */
public final class RdfaNegativeEvaluationTestExecutor implements TestExecutor {
    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        URI action = testCase.getActionFileUri();
        URI queryUri = queryUri(testCase.getResultFileUri());
        String actionPath = RDFTestUtils.loadFile(action);
        String queryPath = RDFTestUtils.loadFile(queryUri);
        Model model = RDFTestUtils.createModel();
        String base = testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class);
        try (var reader = Files.newBufferedReader(Path.of(actionPath), StandardCharsets.UTF_8)) {
            RDFTestUtils.createParser(RDFFormat.RDFA, model).parse(reader, base == null ? action.toString() : base);
        }
        verifyAbsence(model, Files.readString(Path.of(queryPath), StandardCharsets.UTF_8), queryUri.toString());
    }

    // The RDFa website publishes ASK and Turtle sidecars with the same stem.
    // The manifest's Turtle result is not consistently an expected full graph:
    // 0180 describes a forbidden triple, while 0258 describes permitted triples.
    static URI queryUri(URI result) {
        if (result == null || !result.toString().endsWith(".ttl")) {
            throw new IllegalArgumentException("RDFa negative test requires a Turtle result with an official ASK sidecar: " + result);
        }
        String uri = result.toString();
        return URI.create(uri.substring(0, uri.length() - 4) + ".sparql");
    }

    static void verifyAbsence(Model model, String query, String base) {
        try (var repository = Repositories.create(); var connection = repository.getConnection()) {
            connection.add(model);
            if (connection.prepareBooleanQuery(query, base).evaluate()) {
                throw new AssertionError("RDFa negative evaluation generated a forbidden pattern: " + base);
            }
        }
    }
}
