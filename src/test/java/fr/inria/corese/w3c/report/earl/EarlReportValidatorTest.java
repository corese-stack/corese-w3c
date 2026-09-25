package fr.inria.corese.w3c.report.earl;

import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.data.api.factory.ValueFactory;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.model.Statement;
import fr.inria.corese.core.next.data.api.term.IRI;
import fr.inria.corese.w3c.report.AtomicReportFile;
import fr.inria.corese.w3c.report.ReportTestFixtures;
import fr.inria.corese.w3c.report.json.JsonReportWriter;
import fr.inria.corese.w3c.report.model.TestReportData;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

import java.net.URI;
import java.nio.file.Path;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class EarlReportValidatorTest {
    private static final ValueFactory VF = Values.factory();

    @TempDir
    Path temporaryDirectory;

    @Test
    void parsesTurtleWithCoreseAndChecksCoverage() throws Exception {
        TestReportData data = ReportTestFixtures.data();
        Path turtle = temporaryDirectory.resolve("report.ttl");
        Path json = temporaryDirectory.resolve("report.json");
        new EarlReportWriter().write(data, turtle);
        new JsonReportWriter().write(data, json);

        EarlReportValidator.ValidationResult result = new EarlReportValidator().validate(turtle, data);
        new EarlReportValidator().validateJsonCoverage(
                fr.inria.corese.core.next.io.CoreseIO.read(
                        turtle, fr.inria.corese.core.next.data.api.io.format.RDFFormat.TURTLE),
                json);
        assertTrue(result.coreseStatementCount() > 0);
        assertEquals(15, result.coreseSparqlQueryCount());
    }

    @Test
    void rejectsInvalidTurtle() throws Exception {
        Path turtle = temporaryDirectory.resolve("invalid.ttl");
        AtomicReportFile.write(turtle, "This is not Turtle.\n");
        assertThrows(Exception.class, () -> new EarlReportValidator().validate(turtle));
    }

    @Test
    void detectsCardinalityViolation() throws Exception {
        Model model = new EarlReportWriter().buildModel(ReportTestFixtures.data());
        Statement assertionType = model.filter(null, iri(EarlVocabulary.RDF_TYPE),
                iri(EarlVocabulary.EARL_ASSERTION)).iterator().next();
        model.add(assertionType.getSubject(), iri(EarlVocabulary.EARL_SUBJECT),
                iri("https://github.com/corese-stack/corese-core"));
        Path turtle = write(model, "cardinality.ttl");
        Exception exception = assertThrows(Exception.class,
                () -> new EarlReportValidator().validate(turtle));
        assertTrue(exception.getMessage().contains("subject"));
    }

    @Test
    void detectsInventedPredicate() {
        Model model = new EarlReportWriter().buildModel(ReportTestFixtures.data());
        Statement statement = model.iterator().next();
        model.add(statement.getSubject(), iri(EarlVocabulary.EARL + "status"), VF.createLiteral("bad"));
        Exception exception = assertThrows(Exception.class,
                () -> new EarlReportValidator().validateModel(model));
        assertTrue(exception.getMessage().contains("allowlist"));
    }

    @Test
    void detectsIriUsedAsEarlInfo() {
        Model model = new EarlReportWriter().buildModel(ReportTestFixtures.data());
        Statement resultType = model.filter(null, iri(EarlVocabulary.RDF_TYPE),
                iri(EarlVocabulary.EARL_TEST_RESULT)).iterator().next();
        model.add(resultType.getSubject(), iri(EarlVocabulary.EARL_INFO),
                iri("https://github.com/corese-stack/corese-w3c/actions"));
        Exception exception = assertThrows(Exception.class,
                () -> new EarlReportValidator().validateModel(model));
        assertTrue(exception.getMessage().contains("literal"));
    }

    @Test
    void detectsJsonOutcomeThatDiffersFromEarl() throws Exception {
        TestReportData data = ReportTestFixtures.data();
        Path turtle = temporaryDirectory.resolve("report.ttl");
        Path json = temporaryDirectory.resolve("mismatched.json");
        new EarlReportWriter().write(data, turtle);
        String mismatched = new JsonReportWriter().serialize(data)
                .replaceFirst("\"outcome\" : \"PASSED\"", "\"outcome\" : \"FAILED\"");
        AtomicReportFile.write(json, mismatched);

        Exception exception = assertThrows(Exception.class,
                () -> new EarlReportValidator().validate(turtle, json));
        assertTrue(exception.getMessage().contains("outcome mismatch"));
    }

    private Path write(Model model, String name) throws Exception {
        Path path = temporaryDirectory.resolve(name);
        AtomicReportFile.write(path, new EarlReportWriter().serializeModel(model));
        return path;
    }

    private static IRI iri(String value) {
        return VF.createIRI(value);
    }

    @SuppressWarnings("unused")
    private static IRI iri(URI value) {
        return iri(value.toASCIIString());
    }
}
