# EARL application profile for Corese W3C reports

`earl-report.ttl` is an RDF report based on the [W3C EARL 1.0 vocabulary](https://www.w3.org/TR/EARL10-Schema/) with [PROV-O](https://www.w3.org/TR/prov-o/) execution provenance. EARL 1.0 is a W3C Working Group Note, not a W3C Recommendation.

The Turtle report supplements `w3c-report.json`; it does not replace the JSON dashboard contract. Both serializations consume the same immutable `TestReportData` instance. Official test identifiers, manifest identifiers, test types, action fixtures, expected-result fixtures, and exclusion decisions come directly from the loaded manifest objects and suite definitions. Nothing is recovered from JUnit display names.

## Outcomes

The internal outcomes map exhaustively to EARL:

| Internal value | EARL value | `earl:mode` |
| --- | --- | --- |
| `PASSED` | `earl:passed` | `earl:automatic` |
| `FAILED` | `earl:failed` | `earl:automatic` |
| `INAPPLICABLE` | `earl:inapplicable` | omitted |
| `UNTESTED` | `earl:untested` | omitted |
| `CANT_TELL` | `earl:cantTell` | `earl:automatic` |

Only JSON-LD `t0118` and `te075` are inapplicable because they require generalized RDF blank-node predicates outside Corese's RDF 1.1 model. Other documented exclusions are untested. Infrastructure classification uses Java exception types at I/O boundaries and never searches exception messages.

## Identity and provenance

Assertions and results have deterministic IRIs. Their key is the lowercase SHA-256 of the UTF-8 bytes of `suiteId + "\n" + officialTestUri`. GitHub Actions runs use the Actions run URL as their activity and report base. Local runs use a newly generated UUID URN. The assertor and subject identify the exact full 40-character commits of `corese-w3c` and `corese-core`, respectively.

The Corese subject links with `doap:release` to a resource typed `doap:Version`; only that version resource has `doap:revision`. The PROV activity is associated with the harness, uses the Corese build, and generates the report. The report makes no institutional `dct:publisher` or `foaf:maker` claim because that assertion has not been established as project metadata.

## Generation and validation

Corese's model, value factory, statement factory, and Turtle serializer build the graph. No Turtle templates or string escaping are used. This checkout's Corese serializer/parser combination cannot reliably round-trip automatically generated QName prefixes derived from SHA and UUID paths, so the Corese Turtle serializer writes full IRIs while retaining deterministic subject, predicate, object, and line-ending options.

Before publication, the file is:

1. parsed by Corese;
2. checked by Corese SPARQL for cardinality, outcomes, dates, blank nodes, `earl:info`, execution modes, and a single report subject;
3. checked against a versioned predicate and EARL-term allowlist;
4. compared with the normalized in-memory coverage.

The standalone command is:

```bash
./gradlew validateEarlReport --no-daemon
```

## Historical precedent

The [April 2024 Corese RDFC-1.0 EARL report](https://w3c.github.io/rdf-canon/reports/java-corese-report.ttl) is the interoperability precedent for preserving exact official RDFC test IRIs, including `manifest#test001c`. The new profile does not copy that report's blank-node assertions, generic repository subject, shortened revision, or obsolete repository metadata.
