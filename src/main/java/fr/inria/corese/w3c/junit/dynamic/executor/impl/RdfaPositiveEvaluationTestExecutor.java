package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.query.Repositories;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import fr.inria.corese.w3c.junit.dynamic.utils.ModelIsomorphism;
import fr.inria.corese.w3c.junit.dynamic.utils.RDFTestUtils;
import fr.inria.corese.w3c.report.ReportTextSanitizer;
import java.io.FileReader;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * Evaluates RDFa positive evaluation tests using the official W3C SPARQL ASK query,
 * while recording full-graph isomorphism differences as visible diagnostic metadata.
 */
public final class RdfaPositiveEvaluationTestExecutor implements TestExecutor {

    @Override
    public void execute(W3cTestCase testCase) throws Exception {
        testCase.setDiagnosticInfo(null);
        URI action = testCase.getActionFileUri();
        if (action == null) {
            throw new IllegalArgumentException("RDFa positive test requires an action URI");
        }
        URI queryUri = queryUri(testCase.getResultFileUri());
        String actionPath = RDFTestUtils.loadFile(action);
        String queryPath = RDFTestUtils.loadFile(queryUri);
        Model model = RDFTestUtils.createModel();
        String base = testCase.getProperty(W3cTestCase.Property.BASE_URI, String.class);
        try (var reader = Files.newBufferedReader(Path.of(actionPath), StandardCharsets.UTF_8)) {
            RDFTestUtils.createParser(RDFFormat.RDFA, model).parse(reader, base == null ? action.toString() : base);
        }

        verifyPresence(model, Files.readString(Path.of(queryPath), StandardCharsets.UTF_8), queryUri.toString());
        String diagnostic = "Official RDFa ASK=true; query: " + queryUri;

        URI resultUri = testCase.getResultFileUri();
        if (resultUri != null && resultUri.toString().endsWith(".ttl")) {
            diagnostic += "; " + checkFullGraphDiagnostic(model, resultUri, base != null ? base : resultUri.toString());
        }
        testCase.setDiagnosticInfo(ReportTextSanitizer.sanitize(diagnostic));
    }

    static String checkFullGraphDiagnostic(Model actionModel, URI resultUri, String base) {
        try {
            Model expectedModel = RDFTestUtils.createModel();
            String resultPath = RDFTestUtils.loadFile(resultUri);
            try (var reader = new FileReader(resultPath, StandardCharsets.UTF_8)) {
                RDFTestUtils.createParser(RDFFormat.TURTLE, expectedModel).parse(reader, base);
            }
            if (!ModelIsomorphism.areModelsIsomorphic(actionModel, expectedModel)) {
                return "extended full-graph comparison differs from Turtle fixture";
            }
            return "extended full-graph comparison matches Turtle fixture";
        } catch (Exception e) {
            return "extended full-graph comparison unavailable: " + e.getClass().getSimpleName()
                    + " — " + ReportTextSanitizer.sanitizeException(e);
        }
    }

    static URI queryUri(URI result) {
        if (result == null) {
            throw new IllegalArgumentException("RDFa test requires a result URI");
        }
        String uri = result.toString();
        if (uri.endsWith(".sparql")) {
            return result;
        }
        if (uri.endsWith(".ttl")) {
            return URI.create(uri.substring(0, uri.length() - 4) + ".sparql");
        }
        throw new IllegalArgumentException("RDFa test requires a Turtle or SPARQL result location: " + result);
    }

    static void verifyPresence(Model model, String query, String base) {
        try (var repository = Repositories.create(); var connection = repository.getConnection()) {
            connection.add(model);
            requireTrue(connection.prepareBooleanQuery(query, base).evaluate(), base);
        }
    }

    static void requireTrue(Boolean answer, String base) {
        if (!Boolean.TRUE.equals(answer)) {
            throw new AssertionError("RDFa positive evaluation requires ASK=true, got " + answer + ": " + base);
        }
    }
}
