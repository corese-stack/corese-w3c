package fr.inria.corese.w3c.report.earl;

import fr.inria.corese.w3c.report.model.ExecutionOutcome;

import java.util.Set;

/** The complete, versioned RDF vocabulary allowlist for the EARL report. */
public final class EarlVocabulary {
    public static final String EARL = "http://www.w3.org/ns/earl#";
    public static final String PROV = "http://www.w3.org/ns/prov#";
    public static final String DOAP = "http://usefulinc.com/ns/doap#";
    public static final String DCT = "http://purl.org/dc/terms/";
    public static final String FOAF = "http://xmlns.com/foaf/0.1/";
    public static final String RDF = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
    public static final String RDFS = "http://www.w3.org/2000/01/rdf-schema#";
    public static final String XSD = "http://www.w3.org/2001/XMLSchema#";

    public static final String RDF_TYPE = RDF + "type";
    public static final String RDFS_SEE_ALSO = RDFS + "seeAlso";

    public static final String EARL_ASSERTION = EARL + "Assertion";
    public static final String EARL_ASSERTOR = EARL + "Assertor";
    public static final String EARL_SOFTWARE = EARL + "Software";
    public static final String EARL_TEST_SUBJECT = EARL + "TestSubject";
    public static final String EARL_TEST_CRITERION = EARL + "TestCriterion";
    public static final String EARL_TEST_CASE = EARL + "TestCase";
    public static final String EARL_TEST_RESULT = EARL + "TestResult";
    public static final String EARL_TEST_MODE = EARL + "TestMode";
    public static final String EARL_OUTCOME_VALUE = EARL + "OutcomeValue";
    public static final String EARL_ASSERTED_BY = EARL + "assertedBy";
    public static final String EARL_SUBJECT = EARL + "subject";
    public static final String EARL_TEST = EARL + "test";
    public static final String EARL_RESULT = EARL + "result";
    public static final String EARL_MODE = EARL + "mode";
    public static final String EARL_OUTCOME = EARL + "outcome";
    public static final String EARL_INFO = EARL + "info";
    public static final String EARL_AUTOMATIC = EARL + "automatic";
    public static final String EARL_PASSED = EARL + "passed";
    public static final String EARL_FAILED = EARL + "failed";
    public static final String EARL_INAPPLICABLE = EARL + "inapplicable";
    public static final String EARL_UNTESTED = EARL + "untested";
    public static final String EARL_CANT_TELL = EARL + "cantTell";

    public static final String DCT_TITLE = DCT + "title";
    public static final String DCT_DESCRIPTION = DCT + "description";
    public static final String DCT_PUBLISHER = DCT + "publisher";
    public static final String DCT_SOURCE = DCT + "source";
    public static final String DCT_DATE = DCT + "date";
    public static final String DCT_HAS_PART = DCT + "hasPart";
    public static final String DCT_IDENTIFIER = DCT + "identifier";

    public static final String DOAP_NAME = DOAP + "name";
    public static final String DOAP_RELEASE = DOAP + "release";
    public static final String DOAP_REVISION = DOAP + "revision";
    public static final String DOAP_VERSION = DOAP + "Version";

    public static final String FOAF_NAME = FOAF + "name";
    public static final String FOAF_HOMEPAGE = FOAF + "homepage";
    public static final String FOAF_MAKER = FOAF + "maker";
    public static final String FOAF_ORGANIZATION = FOAF + "Organization";

    public static final String PROV_ORGANIZATION = PROV + "Organization";
    public static final String PROV_ACTIVITY = PROV + "Activity";
    public static final String PROV_ENTITY = PROV + "Entity";
    public static final String PROV_SOFTWARE_AGENT = PROV + "SoftwareAgent";
    public static final String PROV_USED = PROV + "used";
    public static final String PROV_WAS_ASSOCIATED_WITH = PROV + "wasAssociatedWith";
    public static final String PROV_WAS_GENERATED_BY = PROV + "wasGeneratedBy";
    public static final String PROV_GENERATED_AT_TIME = PROV + "generatedAtTime";
    public static final String PROV_STARTED_AT_TIME = PROV + "startedAtTime";
    public static final String PROV_ENDED_AT_TIME = PROV + "endedAtTime";
    public static final String PROV_WAS_DERIVED_FROM = PROV + "wasDerivedFrom";

    public static final String XSD_DATE_TIME = XSD + "dateTime";

    public static final Set<String> ALLOWED_PREDICATES = Set.of(
            RDF_TYPE, RDFS_SEE_ALSO,
            EARL_ASSERTED_BY, EARL_SUBJECT, EARL_TEST, EARL_RESULT, EARL_MODE,
            EARL_OUTCOME, EARL_INFO,
            DCT_TITLE, DCT_DESCRIPTION, DCT_PUBLISHER, DCT_SOURCE, DCT_DATE,
            DCT_HAS_PART, DCT_IDENTIFIER,
            DOAP_NAME, DOAP_RELEASE, DOAP_REVISION,
            FOAF_NAME, FOAF_HOMEPAGE, FOAF_MAKER,
            PROV_USED, PROV_WAS_ASSOCIATED_WITH, PROV_WAS_GENERATED_BY,
            PROV_GENERATED_AT_TIME, PROV_STARTED_AT_TIME, PROV_ENDED_AT_TIME,
            PROV_WAS_DERIVED_FROM);

    public static final Set<String> ALLOWED_EARL_TERMS = Set.of(
            EARL_ASSERTION, EARL_ASSERTOR, EARL_SOFTWARE, EARL_TEST_SUBJECT,
            EARL_TEST_CRITERION, EARL_TEST_CASE, EARL_TEST_RESULT, EARL_TEST_MODE,
            EARL_OUTCOME_VALUE, EARL_ASSERTED_BY, EARL_SUBJECT, EARL_TEST,
            EARL_RESULT, EARL_MODE, EARL_OUTCOME, EARL_INFO, EARL_AUTOMATIC,
            EARL_PASSED, EARL_FAILED, EARL_INAPPLICABLE, EARL_UNTESTED,
            EARL_CANT_TELL);

    private EarlVocabulary() {
    }

    public static String outcomeIri(ExecutionOutcome outcome) {
        return switch (outcome) {
            case PASSED -> EARL_PASSED;
            case FAILED -> EARL_FAILED;
            case INAPPLICABLE -> EARL_INAPPLICABLE;
            case UNTESTED -> EARL_UNTESTED;
            case CANT_TELL -> EARL_CANT_TELL;
        };
    }
}
