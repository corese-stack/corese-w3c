package fr.inria.corese.w3c.report.earl;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.inria.corese.core.Graph;
import fr.inria.corese.core.api.Loader;
import fr.inria.corese.core.kgram.core.Mappings;
import fr.inria.corese.core.load.Load;
import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.data.api.factory.ValueFactory;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.model.Statement;
import fr.inria.corese.core.next.data.api.term.BNode;
import fr.inria.corese.core.next.data.api.term.IRI;
import fr.inria.corese.core.next.data.api.term.Literal;
import fr.inria.corese.core.next.data.api.term.Value;
import fr.inria.corese.core.next.io.CoreseIO;
import fr.inria.corese.core.query.QueryProcess;
import fr.inria.corese.w3c.report.model.TestReportData;
import fr.inria.corese.w3c.report.model.TestReportEntry;
import fr.inria.corese.w3c.report.model.ExecutionOutcome;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.EnumMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.regex.Pattern;

/** Offline structural and semantic validation using Corese and SPARQL. */
public final class EarlReportValidator {
    private static final Logger logger = LoggerFactory.getLogger(EarlReportValidator.class);
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();
    private static final ValueFactory VALUE_FACTORY = Values.factory();
    private static final Pattern FULL_GIT_SHA = Pattern.compile("[0-9a-f]{40}");
    private static final String EARL_ASSERTION_LITERAL = "earl:Assertion";

    private static final String PREFIXES = """
            PREFIX earl: <%s>
            PREFIX dct: <%s>
            PREFIX xsd: <%s>
            """.formatted(EarlVocabulary.EARL, EarlVocabulary.DCT, EarlVocabulary.XSD);

    private static final List<QueryCheck> ZERO_VIOLATION_QUERIES = buildQueries();

    public ValidationResult validate(Path turtlePath) throws IOException, IllegalStateException {
        return validate(turtlePath, (TestReportData) null);
    }

    public ValidationResult validate(Path turtlePath, TestReportData expectedData) throws IOException, IllegalStateException {
        requireNonEmpty(turtlePath);
        Model parsed;
        try {
            parsed = CoreseIO.read(turtlePath, RDFFormat.TURTLE);
        } catch (Exception e) {
            throw new IllegalStateException("Failed to parse EARL report Turtle with Corese", e);
        }
        validateModel(parsed);
        int sparqlQueries = validateWithCoreseSparql(turtlePath);

        if (expectedData != null) {
            Model expected = new EarlReportWriter().buildModel(expectedData);
            if (!expected.equals(parsed)) {
                throw new IllegalStateException("Corese Turtle round-trip is not isomorphic to the generated model");
            }
            validateCoverage(parsed, expectedData);
        }
        return new ValidationResult(parsed.size(), sparqlQueries);
    }

    public ValidationResult validate(Path turtlePath, Path jsonPath) throws IOException, IllegalStateException {
        ValidationResult result = validate(turtlePath);
        try {
            validateJsonCoverage(CoreseIO.read(turtlePath, RDFFormat.TURTLE), jsonPath);
        } catch (Exception e) {
            if (e instanceof IOException ioException) {
                throw ioException;
            }
            if (e instanceof IllegalStateException illegalStateException) {
                throw illegalStateException;
            }
            throw new IllegalStateException("Validation against JSON coverage failed", e);
        }
        return result;
    }

    public void validateModel(Model model) {
        for (Statement statement : model) {
            if (statement.getSubject() instanceof BNode
                    || statement.getObject() instanceof BNode
                    || statement.getContext() instanceof BNode) {
                throw new IllegalStateException("Blank nodes are forbidden in the EARL report");
            }
            String predicate = statement.getPredicate().stringValue();
            if (!EarlVocabulary.ALLOWED_PREDICATES.contains(predicate)) {
                throw new IllegalStateException("Predicate outside the EARL report allowlist: " + predicate);
            }
            validateIriTerm(statement.getSubject());
            validateIriTerm(statement.getPredicate());
            validateIriTerm(statement.getObject());
        }

        IRI rdfType = iri(EarlVocabulary.RDF_TYPE);
        IRI assertionType = iri(EarlVocabulary.EARL_ASSERTION);
        IRI resultType = iri(EarlVocabulary.EARL_TEST_RESULT);
        if (model.filter(null, rdfType, assertionType).isEmpty()) {
            throw new IllegalStateException("The EARL report contains no earl:Assertion");
        }
        if (model.filter(null, rdfType, resultType).isEmpty()) {
            throw new IllegalStateException("The EARL report contains no earl:TestResult");
        }

        for (Statement statement : model.filter(null, iri(EarlVocabulary.EARL_INFO), null)) {
            if (!(statement.getObject() instanceof Literal)) {
                throw new IllegalStateException("earl:info must have a literal object");
            }
        }
        for (Statement statement : model.filter(null, iri(EarlVocabulary.DCT_DATE), null)) {
            if (!(statement.getObject() instanceof Literal literal)
                    || !EarlVocabulary.XSD_DATE_TIME.equals(literal.getDatatype().stringValue())) {
                throw new IllegalStateException("dct:date must be typed as xsd:dateTime");
            }
        }
    }

    public void validateCoverage(Model model, TestReportData data) {
        long assertions = countType(model, EarlVocabulary.EARL_ASSERTION);
        long results = countType(model, EarlVocabulary.EARL_TEST_RESULT);
        if (assertions != data.entries().size() || results != data.entries().size()) {
            throw new IllegalStateException("Model coverage mismatch: entries=" + data.entries().size()
                    + ", assertions=" + assertions + ", results=" + results);
        }
        IRI earlTest = iri(EarlVocabulary.EARL_TEST);
        Set<String> expectedAssertions = new HashSet<>();
        for (TestReportEntry entry : data.entries()) {
            IRI assertion = iri(EarlIdentifierFactory.assertionIri(data.metadata(), entry));
            if (!expectedAssertions.add(assertion.stringValue())) {
                throw new IllegalStateException("Duplicate expected assertion: " + assertion);
            }
            if (!model.contains(assertion, earlTest, iri(entry.testUri()))) {
                throw new IllegalStateException("Missing exact official earl:test URI for " + entry.key());
            }
        }
    }

    public void validateJsonCoverage(Model model, Path jsonPath) throws IOException {
        requireNonEmpty(jsonPath);
        JsonNode root = OBJECT_MAPPER.readTree(jsonPath.toFile());
        JsonNode metadata = required(root, "metadata");
        JsonNode run = required(metadata, "run");
        URI reportBase = URI.create(requiredText(run, "baseIri"));
        if (!reportBase.isAbsolute() || !reportBase.toASCIIString().endsWith("#")) {
            throw new IllegalStateException("JSON run.baseIri must be an absolute IRI ending in '#'");
        }

        ProvenanceContext prov = extractProvenanceContext(metadata, reportBase);
        validateJsonProvenance(model, prov);

        EnumMap<ExecutionOutcome, Integer> outcomeCounts = new EnumMap<>(ExecutionOutcome.class);
        for (ExecutionOutcome outcome : ExecutionOutcome.values()) {
            outcomeCounts.put(outcome, 0);
        }

        int jsonTests = validateJsonSuites(model, root, reportBase, prov, outcomeCounts);
        validateJsonSummary(root, outcomeCounts, jsonTests, model);
    }

    private static ProvenanceContext extractProvenanceContext(JsonNode metadata, URI reportBase) {
        JsonNode harnessMetadata = required(metadata, "harness");
        JsonNode coreMetadata = required(metadata, "core");
        String harnessCommit = requiredText(harnessMetadata, "commit");
        String coreCommit = requiredText(coreMetadata, "commit");
        String coreVersion = requiredText(coreMetadata, "version");
        requireFullSha(harnessCommit, "harness commit");
        requireFullSha(coreCommit, "core commit");

        IRI assertor = iri("https://github.com/corese-stack/corese-w3c/tree/" + harnessCommit);
        IRI subject = iri("https://github.com/corese-stack/corese-core/tree/" + coreCommit);
        IRI release = iri(subject.stringValue() + "#release");
        IRI commit = iri("https://github.com/corese-stack/corese-core/commit/" + coreCommit);
        String base = reportBase.toASCIIString();
        IRI activity = iri(base.substring(0, base.length() - 1));
        IRI report = iri(base + "report");

        return new ProvenanceContext(assertor, subject, release, commit, activity, report, coreVersion);
    }

    private static int validateJsonSuites(
            Model model,
            JsonNode root,
            URI reportBase,
            ProvenanceContext prov,
            EnumMap<ExecutionOutcome, Integer> outcomeCounts) {
        int jsonTests = 0;
        Set<String> expectedAssertions = new HashSet<>();
        IRI earlTest = iri(EarlVocabulary.EARL_TEST);
        IRI earlAssertedBy = iri(EarlVocabulary.EARL_ASSERTED_BY);
        IRI earlSubject = iri(EarlVocabulary.EARL_SUBJECT);
        IRI earlResult = iri(EarlVocabulary.EARL_RESULT);
        IRI earlOutcome = iri(EarlVocabulary.EARL_OUTCOME);

        for (JsonNode suite : required(root, "suites")) {
            String suiteId = requiredText(suite, "id");
            for (JsonNode test : required(suite, "tests")) {
                jsonTests++;
                URI testUri = URI.create(requiredText(test, "testUri"));
                ExecutionOutcome outcome = parseOutcome(requiredText(test, "outcome"));
                outcomeCounts.compute(outcome, (ignored, count) -> count + 1);
                IRI assertion = iri(EarlIdentifierFactory.assertionIri(reportBase, suiteId, testUri));
                if (!expectedAssertions.add(assertion.stringValue())) {
                    throw new IllegalStateException("Duplicate suiteId/testUri in JSON: " + suiteId + " " + testUri);
                }
                if (!model.contains(assertion, earlTest, iri(testUri))) {
                    throw new IllegalStateException("JSON test is absent from EARL: " + suiteId + " " + testUri);
                }
                IRI result = iri(EarlIdentifierFactory.resultIri(reportBase, suiteId, testUri));
                if (!model.contains(assertion, earlAssertedBy, prov.assertor())
                        || !model.contains(assertion, earlSubject, prov.subject())
                        || !model.contains(assertion, earlResult, result)
                        || !model.contains(result, earlOutcome, iri(EarlVocabulary.outcomeIri(outcome)))) {
                    throw new IllegalStateException("JSON/EARL assertion or outcome mismatch for "
                            + suiteId + " " + testUri);
                }
            }
        }
        return jsonTests;
    }

    private static void validateJsonSummary(
            JsonNode root,
            EnumMap<ExecutionOutcome, Integer> outcomeCounts,
            int jsonTests,
            Model model) {
        JsonNode summary = required(root, "summary");
        int declaredTotal = requiredInteger(summary, "total");
        for (ExecutionOutcome outcome : ExecutionOutcome.values()) {
            String field = switch (outcome) {
                case PASSED -> "passed";
                case FAILED -> "failed";
                case INAPPLICABLE -> "inapplicable";
                case UNTESTED -> "untested";
                case CANT_TELL -> "cantTell";
            };
            int declared = requiredInteger(summary, field);
            if (declared != outcomeCounts.get(outcome)) {
                throw new IllegalStateException("JSON summary mismatch for " + field + ": declared="
                        + declared + ", tests=" + outcomeCounts.get(outcome));
            }
        }
        long assertions = countType(model, EarlVocabulary.EARL_ASSERTION);
        long results = countType(model, EarlVocabulary.EARL_TEST_RESULT);
        if (declaredTotal != jsonTests || assertions != jsonTests || results != jsonTests) {
            throw new IllegalStateException("JSON/EARL coverage mismatch: summary=" + declaredTotal
                    + ", JSON tests=" + jsonTests + ", assertions=" + assertions + ", results=" + results);
        }
    }

    private static void validateJsonProvenance(Model model, ProvenanceContext prov) {
        if (!model.contains(prov.assertor(), iri(EarlVocabulary.RDF_TYPE), iri(EarlVocabulary.EARL_ASSERTOR))
                || !model.contains(prov.subject(), iri(EarlVocabulary.RDF_TYPE), iri(EarlVocabulary.EARL_TEST_SUBJECT))
                || !model.contains(prov.subject(), iri(EarlVocabulary.DOAP_RELEASE), prov.release())
                || model.contains(prov.subject(), iri(EarlVocabulary.DOAP_REVISION), null)
                || !model.contains(prov.subject(), iri(EarlVocabulary.DCT_SOURCE), prov.commit())
                || !model.contains(prov.release(), iri(EarlVocabulary.RDF_TYPE), iri(EarlVocabulary.DOAP_VERSION))
                || !model.contains(prov.release(), iri(EarlVocabulary.DOAP_REVISION),
                VALUE_FACTORY.createLiteral(prov.coreVersion()))
                || !model.contains(prov.activity(), iri(EarlVocabulary.PROV_WAS_ASSOCIATED_WITH), prov.assertor())
                || !model.contains(prov.activity(), iri(EarlVocabulary.PROV_USED), prov.subject())
                || !model.contains(prov.report(), iri(EarlVocabulary.PROV_WAS_GENERATED_BY), prov.activity())) {
            throw new IllegalStateException("JSON/EARL build identity or provenance mismatch");
        }
    }

    private static ExecutionOutcome parseOutcome(String value) {
        try {
            return ExecutionOutcome.valueOf(value);
        } catch (IllegalArgumentException exception) {
            throw new IllegalStateException("Unsupported JSON outcome: " + value, exception);
        }
    }

    /**
     * Executes the 15 offline SPARQL integrity checks using Corese.
     *
     * <p>Note: This method currently uses Corese's mature {@link QueryProcess} engine on {@link Graph}.
     * When the unified SPARQL query evaluation API in {@code corese-next} (targeting {@link Model})
     * is finalized in corese-core, this method can be seamlessly updated to use the next query API.</p>
     */
    private int validateWithCoreseSparql(Path turtlePath) throws IllegalStateException {
        Graph graph = Graph.create();
        Load loader = Load.create(graph);
        loader.setDefaultGraph(true);
        try {
            loader.parse(turtlePath.toAbsolutePath().toString(), Loader.format.TURTLE_FORMAT);
        } catch (Exception e) {
            throw new IllegalStateException("Failed to load Turtle into Corese graph for SPARQL validation", e);
        }
        QueryProcess queryProcess = QueryProcess.create(graph);
        for (QueryCheck check : ZERO_VIOLATION_QUERIES) {
            try {
                Mappings violations = queryProcess.query(check.query());
                if (!violations.isEmpty()) {
                    throw new IllegalStateException("Corese SPARQL validation failed for " + check.name()
                            + ": " + violations.size() + " violation(s)");
                }
            } catch (Exception e) {
                throw new IllegalStateException("Corese SPARQL query execution failed for " + check.name(), e);
            }
        }
        try {
            Mappings subjects = queryProcess.query(PREFIXES + """
                    SELECT ?subject
                    WHERE { ?assertion a earl:Assertion ; earl:subject ?subject . }
                    GROUP BY ?subject
                    """);
            if (subjects.size() != 1) {
                throw new IllegalStateException("A report must contain exactly one distinct earl:subject; found "
                        + subjects.size());
            }
        } catch (Exception e) {
            throw new IllegalStateException("Corese SPARQL query execution failed for distinct subjects check", e);
        }
        return ZERO_VIOLATION_QUERIES.size() + 1;
    }

    private static List<QueryCheck> buildQueries() {
        List<QueryCheck> queries = new ArrayList<>();
        queries.add(cardinality("earl:assertedBy", "assertedBy", EARL_ASSERTION_LITERAL));
        queries.add(cardinality("earl:subject", "subject", EARL_ASSERTION_LITERAL));
        queries.add(cardinality("earl:test", "test", EARL_ASSERTION_LITERAL));
        queries.add(cardinality("earl:result", "result", EARL_ASSERTION_LITERAL));
        queries.add(cardinality("earl:outcome", "outcome", "earl:TestResult"));
        queries.add(cardinality("dct:date", "date", "earl:TestResult"));
        queries.add(new QueryCheck("mode cardinality", PREFIXES + """
                SELECT ?assertion (COUNT(?mode) AS ?count)
                WHERE { ?assertion a earl:Assertion . OPTIONAL { ?assertion earl:mode ?mode } }
                GROUP BY ?assertion HAVING (COUNT(?mode) > 1)
                """));
        queries.add(new QueryCheck("allowed outcomes", PREFIXES + """
                SELECT ?result ?outcome WHERE {
                  ?result a earl:TestResult ; earl:outcome ?outcome .
                  FILTER (?outcome NOT IN (earl:passed, earl:failed, earl:inapplicable,
                                           earl:untested, earl:cantTell))
                }
                """));
        queries.add(new QueryCheck("date datatype", PREFIXES + """
                SELECT ?result ?date WHERE {
                  ?result a earl:TestResult ; dct:date ?date .
                  FILTER (datatype(?date) != xsd:dateTime)
                }
                """));
        queries.add(new QueryCheck("blank assertion or result", PREFIXES + """
                SELECT ?resource WHERE {
                  VALUES ?type { earl:Assertion earl:TestResult }
                  ?resource a ?type . FILTER (isBlank(?resource))
                }
                """));
        queries.add(new QueryCheck("literal earl:info", PREFIXES + """
                SELECT ?result ?info WHERE {
                  ?result a earl:TestResult ; earl:info ?info . FILTER (!isLiteral(?info))
                }
                """));
        queries.add(new QueryCheck("automatic mode value", PREFIXES + """
                SELECT ?assertion ?mode WHERE {
                  ?assertion a earl:Assertion ; earl:mode ?mode .
                  FILTER (?mode != earl:automatic)
                }
                """));
        queries.add(new QueryCheck("mode absent for executed result", PREFIXES + """
                SELECT ?assertion WHERE {
                  ?assertion a earl:Assertion ; earl:result ?result .
                  ?result earl:outcome ?outcome .
                  FILTER (?outcome IN (earl:passed, earl:failed, earl:cantTell))
                  FILTER NOT EXISTS { ?assertion earl:mode ?mode }
                }
                """));
        queries.add(new QueryCheck("mode present for non-executed result", PREFIXES + """
                SELECT ?assertion WHERE {
                  ?assertion a earl:Assertion ; earl:result ?result ; earl:mode ?mode .
                  ?result earl:outcome ?outcome .
                  FILTER (?outcome IN (earl:inapplicable, earl:untested))
                }
                """));
        return List.copyOf(queries);
    }

    private static QueryCheck cardinality(String predicate, String name, String type) {
        return new QueryCheck("exactly one " + name, PREFIXES + """
                SELECT ?resource (COUNT(?value) AS ?count)
                WHERE {
                  ?resource a %s . OPTIONAL { ?resource %s ?value }
                }
                GROUP BY ?resource HAVING (COUNT(?value) != 1)
                """.formatted(type, predicate));
    }

    private static void validateIriTerm(Value value) {
        if (!(value instanceof IRI iri)) {
            return;
        }
        String string = iri.stringValue();
        if (string.startsWith(EarlVocabulary.EARL)
                && !EarlVocabulary.ALLOWED_EARL_TERMS.contains(string)) {
            throw new IllegalStateException("Unknown EARL term: " + string);
        }
        if (string.startsWith("urn:corese:")) {
            throw new IllegalStateException("Unregistered urn:corese namespace is forbidden: " + string);
        }
    }

    private static long countType(Model model, String type) {
        return model.filter(null, iri(EarlVocabulary.RDF_TYPE), iri(type)).size();
    }

    private static IRI iri(String value) {
        return VALUE_FACTORY.createIRI(value);
    }

    private static IRI iri(URI value) {
        return iri(value.toASCIIString());
    }

    private static void requireNonEmpty(Path path) throws IOException {
        if (!Files.isRegularFile(path) || Files.size(path) == 0) {
            throw new IllegalStateException("Required report file is absent or empty: " + path);
        }
    }

    private static JsonNode required(JsonNode parent, String field) {
        JsonNode value = parent.path(field);
        if (value.isMissingNode() || value.isNull()) {
            throw new IllegalStateException("Missing JSON field: " + field);
        }
        return value;
    }

    private static String requiredText(JsonNode parent, String field) {
        String value = required(parent, field).asText();
        if (value.isBlank() || "unknown".equalsIgnoreCase(value)) {
            throw new IllegalStateException("JSON field must be known and non-empty: " + field);
        }
        return value;
    }

    private static int requiredInteger(JsonNode parent, String field) {
        JsonNode value = required(parent, field);
        if (!value.isIntegralNumber() || value.asInt() < 0) {
            throw new IllegalStateException("JSON field must be a non-negative integer: " + field);
        }
        return value.asInt();
    }

    private static void requireFullSha(String value, String name) {
        if (!FULL_GIT_SHA.matcher(value).matches()) {
            throw new IllegalStateException(name + " must be exactly 40 lowercase hexadecimal characters");
        }
    }

    public static void main(String[] arguments) throws IOException {
        if (arguments.length != 2) {
            throw new IllegalArgumentException("Usage: EarlReportValidator <earl-report.ttl> <w3c-report.json>");
        }
        ValidationResult result = new EarlReportValidator().validate(
                Path.of(arguments[0]), Path.of(arguments[1]));
        logger.info("Corese parse: OK ({} statements)", result.coreseStatementCount());
        logger.info("Corese SPARQL validation: OK ({} queries)", result.coreseSparqlQueryCount());
        logger.info("JSON/EARL coverage: OK");
    }

    private record ProvenanceContext(
            IRI assertor,
            IRI subject,
            IRI release,
            IRI commit,
            IRI activity,
            IRI report,
            String coreVersion) {
    }

    private record QueryCheck(String name, String query) {
    }

    public record ValidationResult(
            long coreseStatementCount,
            int coreseSparqlQueryCount) {
    }
}
