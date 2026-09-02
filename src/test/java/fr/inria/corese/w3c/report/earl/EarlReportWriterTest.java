package fr.inria.corese.w3c.report.earl;

import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.data.api.factory.ValueFactory;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.model.Statement;
import fr.inria.corese.core.next.data.api.term.BNode;
import fr.inria.corese.core.next.data.api.term.IRI;
import fr.inria.corese.core.next.data.api.term.Literal;
import fr.inria.corese.w3c.report.ReportTestFixtures;
import fr.inria.corese.w3c.report.model.ExecutionOutcome;
import fr.inria.corese.w3c.report.model.TestReportData;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Locale;
import java.util.Set;
import java.util.TimeZone;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertInstanceOf;
import static org.junit.jupiter.api.Assertions.assertTrue;

class EarlReportWriterTest {
    private static final ValueFactory VF = Values.factory();

    @Test
    void generatesAllFiveOutcomesWithCorrectModesAndLiteralInformation() {
        TestReportData data = ReportTestFixtures.data();
        Model model = new EarlReportWriter().buildModel(data);
        Map<String, ExecutionOutcome> outcomeByIri = new HashMap<>();
        for (ExecutionOutcome outcome : ExecutionOutcome.values()) {
            outcomeByIri.put(EarlVocabulary.outcomeIri(outcome), outcome);
        }

        Set<ExecutionOutcome> found = new HashSet<>();
        IRI outcomePredicate = iri(EarlVocabulary.EARL_OUTCOME);
        IRI resultPredicate = iri(EarlVocabulary.EARL_RESULT);
        IRI modePredicate = iri(EarlVocabulary.EARL_MODE);
        for (Statement outcomeStatement : model.filter(null, outcomePredicate, null)) {
            ExecutionOutcome outcome = outcomeByIri.get(outcomeStatement.getObject().stringValue());
            found.add(outcome);
            IRI result = (IRI) outcomeStatement.getSubject();
            Statement assertionLink = model.filter(null, resultPredicate, result).iterator().next();
            boolean hasMode = model.contains(assertionLink.getSubject(), modePredicate,
                    iri(EarlVocabulary.EARL_AUTOMATIC));
            assertEquals(outcome.wasAttempted(), hasMode, outcome.name());
        }
        assertEquals(Set.of(ExecutionOutcome.values()), found);

        for (Statement info : model.filter(null, iri(EarlVocabulary.EARL_INFO), null)) {
            assertInstanceOf(Literal.class, info.getObject());
        }
        assertEquals(2, model.filter(null, iri(EarlVocabulary.RDFS_SEE_ALSO), null).size());
    }

    @Test
    void usesOnlyAllowedVocabularyAndContainsNoBlankNode() {
        Model model = new EarlReportWriter().buildModel(ReportTestFixtures.data());
        model.predicates().forEach(predicate ->
                assertTrue(EarlVocabulary.ALLOWED_PREDICATES.contains(predicate.stringValue()),
                        predicate.stringValue()));
        for (Statement statement : model) {
            assertFalse(statement.getSubject() instanceof BNode);
            assertFalse(statement.getObject() instanceof BNode);
            assertFalse(statement.getPredicate().stringValue().startsWith("urn:corese:"));
            if (statement.getPredicate().stringValue().startsWith(EarlVocabulary.EARL)) {
                assertTrue(EarlVocabulary.ALLOWED_EARL_TERMS.contains(
                        statement.getPredicate().stringValue()));
            }
        }
    }

    @Test
    void modelsDoapReleaseAndProvDirectionsExactly() {
        TestReportData data = ReportTestFixtures.data();
        Model model = new EarlReportWriter().buildModel(data);
        IRI subject = iri(EarlIdentifierFactory.subjectIri(data.metadata()));
        IRI release = iri(EarlIdentifierFactory.releaseIri(data.metadata()));
        IRI activity = iri(data.metadata().activityIri());
        IRI assertor = iri(EarlIdentifierFactory.assertorIri(data.metadata()));
        IRI report = iri(EarlIdentifierFactory.reportIri(data.metadata()));

        assertFalse(model.contains(subject, iri(EarlVocabulary.DOAP_REVISION), null));
        assertTrue(model.contains(subject, iri(EarlVocabulary.DOAP_RELEASE), release));
        assertTrue(model.contains(release, iri(EarlVocabulary.RDF_TYPE), iri(EarlVocabulary.DOAP_VERSION)));
        assertTrue(model.contains(release, iri(EarlVocabulary.DOAP_REVISION), VF.createLiteral("4.6.4")));
        assertTrue(model.contains(subject, iri(EarlVocabulary.DCT_SOURCE),
                iri(EarlIdentifierFactory.coreCommitIri(data.metadata()))));
        assertTrue(model.contains(activity, iri(EarlVocabulary.PROV_WAS_ASSOCIATED_WITH), assertor));
        assertTrue(model.contains(activity, iri(EarlVocabulary.PROV_USED), subject));
        assertTrue(model.contains(report, iri(EarlVocabulary.PROV_WAS_GENERATED_BY), activity));
        assertTrue(model.contains(report, iri(EarlVocabulary.PROV_GENERATED_AT_TIME), null));
        assertTrue(assertor.stringValue().contains(ReportTestFixtures.HARNESS_SHA));
        assertTrue(subject.stringValue().contains(ReportTestFixtures.CORE_SHA));
    }

    @Test
    void preservesOfficialRdfcIdentifierExactly() {
        Model model = new EarlReportWriter().buildModel(ReportTestFixtures.data());
        IRI official = iri("https://w3c.github.io/rdf-canon/tests/manifest#test001c");
        assertTrue(model.contains(null, iri(EarlVocabulary.EARL_TEST), official));
    }

    @Test
    void independentlyBuiltModelsSerializeToIdenticalUtf8Bytes() {
        EarlReportWriter firstWriter = new EarlReportWriter();
        EarlReportWriter secondWriter = new EarlReportWriter();
        byte[] first = firstWriter.serialize(ReportTestFixtures.data()).getBytes(StandardCharsets.UTF_8);
        byte[] second = secondWriter.serialize(ReportTestFixtures.data()).getBytes(StandardCharsets.UTF_8);
        assertArrayEquals(first, second);
        assertFalse(new String(first, StandardCharsets.UTF_8).contains("\r"));
        assertFalse(new String(first, StandardCharsets.UTF_8).contains("_:"));
    }

    @Test
    void serializationIsIndependentFromDefaultLocaleAndTimeZone() {
        Locale originalLocale = Locale.getDefault();
        TimeZone originalTimeZone = TimeZone.getDefault();
        try {
            Locale.setDefault(Locale.FRANCE);
            TimeZone.setDefault(TimeZone.getTimeZone("Pacific/Chatham"));
            byte[] first = new EarlReportWriter().serialize(ReportTestFixtures.data())
                    .getBytes(StandardCharsets.UTF_8);

            Locale.setDefault(Locale.JAPAN);
            TimeZone.setDefault(TimeZone.getTimeZone("America/Los_Angeles"));
            byte[] second = new EarlReportWriter().serialize(ReportTestFixtures.data())
                    .getBytes(StandardCharsets.UTF_8);

            assertArrayEquals(first, second);
        } finally {
            Locale.setDefault(originalLocale);
            TimeZone.setDefault(originalTimeZone);
        }
    }

    @Test
    void allVocabularyConstantsUseTheDocumentedNamespaces() {
        assertEquals("http://www.w3.org/ns/earl#", EarlVocabulary.EARL);
        assertEquals("http://www.w3.org/ns/prov#", EarlVocabulary.PROV);
        assertEquals("http://usefulinc.com/ns/doap#", EarlVocabulary.DOAP);
        assertEquals("http://purl.org/dc/terms/", EarlVocabulary.DCT);
        assertEquals("http://xmlns.com/foaf/0.1/", EarlVocabulary.FOAF);
        assertEquals("http://www.w3.org/1999/02/22-rdf-syntax-ns#", EarlVocabulary.RDF);
        assertEquals("http://www.w3.org/2000/01/rdf-schema#", EarlVocabulary.RDFS);
        assertEquals("http://www.w3.org/2001/XMLSchema#", EarlVocabulary.XSD);
        assertEquals(5, Arrays.stream(ExecutionOutcome.values())
                .map(EarlVocabulary::outcomeIri).distinct().count());
    }

    private static IRI iri(String value) {
        return VF.createIRI(value);
    }

    private static IRI iri(URI value) {
        return iri(value.toASCIIString());
    }
}
