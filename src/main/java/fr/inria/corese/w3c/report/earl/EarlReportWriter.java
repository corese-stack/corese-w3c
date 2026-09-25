package fr.inria.corese.w3c.report.earl;

import fr.inria.corese.core.next.data.Models;
import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.data.api.factory.ValueFactory;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.io.serializer.RDFSerializerOptions;
import fr.inria.corese.core.next.data.api.io.serializer.option.PrefixOrdering;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.model.Statement;
import fr.inria.corese.core.next.data.api.term.IRI;
import fr.inria.corese.core.next.data.api.term.Resource;
import fr.inria.corese.core.next.data.api.term.Value;
import fr.inria.corese.core.next.data.impl.io.serializer.turtle.TurtleSerializerOptions;
import fr.inria.corese.core.next.io.CoreseIO;
import fr.inria.corese.w3c.report.AtomicReportFile;
import fr.inria.corese.w3c.report.model.ReportRunMetadata;
import fr.inria.corese.w3c.report.model.TestReportData;
import fr.inria.corese.w3c.report.model.TestReportEntry;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/** Builds and serializes the EARL + PROV-O graph exclusively through Corese APIs. */
public final class EarlReportWriter {
    private static final ValueFactory VALUE_FACTORY = Values.factory();
    private static final RDFSerializerOptions COMMON_SERIALIZER_OPTIONS = RDFSerializerOptions.builder()
            .lineEnding("\n")
            .sortSubjects(true)
            .sortPredicates(true)
            .prefixOrdering(PrefixOrdering.ALPHABETICAL)
            .stableBlankNodeIds(true)
            .build();
    private static final TurtleSerializerOptions SERIALIZER_OPTIONS =
            new TurtleSerializerOptions.Builder(COMMON_SERIALIZER_OPTIONS)
                    .usePrefixes(false)
                    .autoDeclarePrefixes(false)
                    .addPrefix("dct", EarlVocabulary.DCT)
                    .addPrefix("doap", EarlVocabulary.DOAP)
                    .addPrefix("earl", EarlVocabulary.EARL)
                    .addPrefix("prov", EarlVocabulary.PROV)
                    .addPrefix("rdf", EarlVocabulary.RDF)
                    .addPrefix("rdfs", EarlVocabulary.RDFS)
                    .addPrefix("xsd", EarlVocabulary.XSD)
                    .build();

    private static final Comparator<Statement> STATEMENT_ORDER = Comparator
            .comparing((Statement statement) -> statement.getSubject().stringValue())
            .thenComparing(statement -> statement.getPredicate().stringValue())
            .thenComparing(statement -> statement.getObject().stringValue())
            .thenComparing(statement -> statement.getObject().getClass().getName());

    public Model buildModel(TestReportData data) {
        List<Statement> statements = new ArrayList<>();
        ReportRunMetadata metadata = data.metadata();

        IRI rdfType = iri(EarlVocabulary.RDF_TYPE);
        IRI assertor = iri(EarlIdentifierFactory.assertorIri(metadata));
        IRI subject = iri(EarlIdentifierFactory.subjectIri(metadata));
        IRI release = iri(EarlIdentifierFactory.releaseIri(metadata));
        IRI commit = iri(EarlIdentifierFactory.coreCommitIri(metadata));
        IRI activity = iri(metadata.activityIri());
        IRI report = iri(EarlIdentifierFactory.reportIri(metadata));

        add(statements, assertor, rdfType, iri(EarlVocabulary.EARL_ASSERTOR));
        add(statements, assertor, rdfType, iri(EarlVocabulary.EARL_SOFTWARE));
        add(statements, assertor, rdfType, iri(EarlVocabulary.PROV_SOFTWARE_AGENT));
        addLiteral(statements, assertor, EarlVocabulary.DOAP_NAME, "Corese W3C CI Test Harness");
        addLiteral(statements, assertor, EarlVocabulary.DCT_TITLE, "Corese W3C CI Test Harness");

        add(statements, subject, rdfType, iri(EarlVocabulary.EARL_TEST_SUBJECT));
        add(statements, subject, rdfType, iri(EarlVocabulary.EARL_SOFTWARE));
        add(statements, subject, rdfType, iri(EarlVocabulary.PROV_ENTITY));
        addLiteral(statements, subject, EarlVocabulary.DOAP_NAME, "Corese Engine");
        addLiteral(statements, subject, EarlVocabulary.DCT_TITLE, "Corese Engine");
        add(statements, subject, iri(EarlVocabulary.DOAP_RELEASE), release);
        add(statements, subject, iri(EarlVocabulary.DCT_SOURCE), commit);
        add(statements, subject, iri(EarlVocabulary.PROV_WAS_DERIVED_FROM), commit);

        add(statements, release, rdfType, iri(EarlVocabulary.DOAP_VERSION));
        addLiteral(statements, release, EarlVocabulary.DOAP_REVISION, metadata.coreVersion());

        add(statements, activity, rdfType, iri(EarlVocabulary.PROV_ACTIVITY));
        addLiteral(statements, activity, EarlVocabulary.DCT_TITLE,
                metadata.ciRunUrl() == null
                        ? "Local W3C Conformance Run"
                        : "GitHub Actions W3C Conformance Run");
        addLiteral(statements, activity, EarlVocabulary.DCT_DESCRIPTION,
                "Java " + metadata.javaRuntimeVersion() + "; " + metadata.osName()
                        + "; " + metadata.osArchitecture());
        add(statements, activity, iri(EarlVocabulary.PROV_WAS_ASSOCIATED_WITH), assertor);
        add(statements, activity, iri(EarlVocabulary.PROV_USED), subject);
        addDateTime(statements, activity, EarlVocabulary.PROV_STARTED_AT_TIME, metadata.startedAt().toString());
        addDateTime(statements, activity, EarlVocabulary.PROV_ENDED_AT_TIME, metadata.endedAt().toString());

        add(statements, report, rdfType, iri(EarlVocabulary.PROV_ENTITY));
        addLiteral(statements, report, EarlVocabulary.DCT_TITLE, "Corese W3C Conformance Report");
        addLiteral(statements, report, EarlVocabulary.DCT_DESCRIPTION,
                "W3C RDF 1.1, RDF-Canon, and JSON-LD standard test suite conformance results serialized in EARL 1.0.");
        add(statements, report, iri(EarlVocabulary.PROV_WAS_GENERATED_BY), activity);
        addDateTime(statements, report, EarlVocabulary.PROV_GENERATED_AT_TIME, metadata.endedAt().toString());

        for (TestReportEntry entry : data.entries()) {
            addEntry(statements, metadata, entry, assertor, subject, report, rdfType);
        }

        statements.sort(STATEMENT_ORDER);
        return Models.create(statements);
    }

    public String serialize(TestReportData data) {
        return serializeModel(buildModel(data));
    }

    /** Serializes a supplied model with the same deterministic Corese profile. */
    public String serializeModel(Model model) {
        return CoreseIO.writeToString(model, RDFFormat.TURTLE, SERIALIZER_OPTIONS);
    }

    public void write(TestReportData data, Path destination) throws IOException {
        AtomicReportFile.write(destination, serialize(data));
    }

    private void addEntry(
            List<Statement> statements,
            ReportRunMetadata metadata,
            TestReportEntry entry,
            IRI assertor,
            IRI subject,
            IRI report,
            IRI rdfType) {
        IRI assertion = iri(EarlIdentifierFactory.assertionIri(metadata, entry));
        IRI result = iri(EarlIdentifierFactory.resultIri(metadata, entry));
        IRI test = iri(entry.testUri());

        add(statements, test, rdfType, iri(EarlVocabulary.EARL_TEST_CASE));
        addLiteral(statements, test, EarlVocabulary.DCT_TITLE, entry.title());
        if (entry.description() != null) {
            addLiteral(statements, test, EarlVocabulary.DCT_DESCRIPTION, entry.description());
        }

        add(statements, assertion, rdfType, iri(EarlVocabulary.EARL_ASSERTION));
        add(statements, assertion, iri(EarlVocabulary.EARL_ASSERTED_BY), assertor);
        add(statements, assertion, iri(EarlVocabulary.EARL_SUBJECT), subject);
        add(statements, assertion, iri(EarlVocabulary.EARL_TEST), test);
        add(statements, assertion, iri(EarlVocabulary.EARL_RESULT), result);
        if (entry.outcome().wasAttempted()) {
            add(statements, assertion, iri(EarlVocabulary.EARL_MODE), iri(EarlVocabulary.EARL_AUTOMATIC));
        }

        add(statements, result, rdfType, iri(EarlVocabulary.EARL_TEST_RESULT));
        add(statements, result, iri(EarlVocabulary.EARL_OUTCOME),
                iri(EarlVocabulary.outcomeIri(entry.outcome())));
        addDateTime(statements, result, EarlVocabulary.DCT_DATE, entry.endedAt().toString());
        if (entry.information() != null) {
            addLiteral(statements, result, EarlVocabulary.EARL_INFO, entry.information());
        }
        if (entry.logUri() != null) {
            add(statements, result, iri(EarlVocabulary.RDFS_SEE_ALSO), iri(entry.logUri()));
        }
        add(statements, report, iri(EarlVocabulary.DCT_HAS_PART), assertion);
    }

    private static void addLiteral(
            List<Statement> statements, Resource subject, String predicate, String value) {
        add(statements, subject, iri(predicate), VALUE_FACTORY.createLiteral(value));
    }

    private static void addDateTime(
            List<Statement> statements, Resource subject, String predicate, String value) {
        add(statements, subject, iri(predicate),
                VALUE_FACTORY.createLiteral(value, iri(EarlVocabulary.XSD_DATE_TIME)));
    }

    private static void add(List<Statement> statements, Resource subject, IRI predicate, Value object) {
        statements.add(VALUE_FACTORY.createStatement(subject, predicate, object));
    }

    private static IRI iri(String value) {
        return VALUE_FACTORY.createIRI(value);
    }

    private static IRI iri(URI value) {
        return iri(value.toASCIIString());
    }
}
