# corese-w3c

W3C standards conformance test suite and dynamic execution harness for [Corese](https://github.com/corese-stack/corese-core).

Tests are dynamically loaded from official W3C manifests and executed against Corese using JUnit 5 Dynamic Tests.

## Conformance Dashboard

The live interactive W3C conformance dashboard and benchmark reports are published at:
[https://corese-stack.github.io/corese-w3c/](https://corese-stack.github.io/corese-w3c/)

## Supported W3C Specifications

| Specification                         | W3C Test Suite Manifest                                                             | Test Types Covered                                                            |
|:--------------------------------------|:------------------------------------------------------------------------------------|:------------------------------------------------------------------------------|
| **Turtle (RDF 1.1)**                  | [Turtle Test Suite](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/)          | Positive/Negative Syntax, Positive Evaluation                                 |
| **TriG (RDF 1.1)**                    | [TriG Test Suite](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/)              | Positive/Negative Syntax, Positive Evaluation                                 |
| **RDF/XML (RDF 1.1)**                 | [RDF/XML Test Suite](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/)            | Positive/Negative Syntax, Positive Evaluation                                 |
| **N-Triples (RDF 1.1)**               | [N-Triples Test Suite](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/)    | Positive/Negative Syntax, Positive Evaluation                                 |
| **N-Quads (RDF 1.1)**                 | [N-Quads Test Suite](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/)        | Positive/Negative Syntax, Positive Evaluation                                 |
| **RDFC-1.0 (Canonicalization)**       | [RDF-Canon Test Suite](https://w3c.github.io/rdf-canon/tests/)                      | Canonical Evaluation, Map Tests, Negative Evaluation                          |
| **RDFa 1.1 (XHTML, XML, SVG)**        | [RDFa Test Suite](https://rdfa.info/test-suite/)                                    | XHTML, XML, and SVG Evaluation                                                |
| **JSON-LD 1.1 (`toRdf` & `fromRdf`)** | [JSON-LD 1.1 Test Suite](https://json-ld.github.io/json-ld.org/test-suite/reports/) | `toRdf` and `fromRdf` Syntax and Evaluation                                   |
| **SPARQL 1.0**                        | [SPARQL 1.0 Test Suite](https://w3c.github.io/rdf-tests/sparql/sparql10/)           | Query Evaluation (SELECT, ASK, CONSTRUCT, DESCRIBE), Positive/Negative Syntax |

> **Documented Test Exclusions & Rationale**: All documented exclusions (e.g. non-standard Generalized RDF or upstream dependency edge-cases) are formally specified in [`docs/W3C_TEST_EXCLUSIONS.md`](docs/W3C_TEST_EXCLUSIONS.md).

## Running Tests

### Execute all W3C test suites

```bash
./gradlew test
```

Running `./gradlew test` executes all supported W3C suites and displays the consolidated terminal conformance summary table. It also generates and validates two reports from the same in-memory result model:

- `build/reports/w3c-report.json`, the stable dashboard contract;
- `build/reports/earl-report.ttl`, an RDF report based on the W3C EARL 1.0 vocabulary with PROV-O provenance.

EARL 1.0 is a [W3C Working Group Note](https://www.w3.org/TR/EARL10-Schema/), not a W3C Recommendation. The Turtle graph is constructed and serialized with Corese, parsed again by Corese, and checked with Corese SPARQL queries. Run the standalone verification after the tests with:

```bash
./gradlew validateEarlReport --no-daemon
```

The dashboard's `passRate` is `passed / total official manifest entries`. `executedPassRate` is `passed / (passed + failed)` and is `null` when no test was executed. Inapplicable, untested, and cannot-tell outcomes are displayed separately and are never counted as passes.

See [the EARL application profile](docs/EARL_REPORT.md) for the exact model, provenance, validation, and identifier rules.

### Execute a specific test suite

```bash
# Example: Run Turtle test suite only
./gradlew test --tests "*TurtleDynamicTest*"

# Example: Run Canonicalization test suite only
./gradlew test --tests "*CanonicalDynamicTest*"

# JSON-LD 1.1 fromRdf (RDF to JSON-LD) tests
./gradlew test --tests "*Rdf11JsonldFromRdfDynamicTest*"

# All JSON-LD tests
./gradlew test --tests "*Jsonld*"

# RDFa 1.1 XHTML tests
./gradlew test --tests "*Rdf11RDFaXHTMLDynamicTest*"

# RDFa 1.1 XML tests
./gradlew test --tests "*Rdf11RDFaXMLDynamicTest*"

# RDFa 1.1 SVG tests
./gradlew test --tests "*Rdf11RDFaSVGDynamicTest*"

# All RDFa tests
./gradlew test --tests "*RDFa*"

# SPARQL 1.0 tests
./gradlew test --tests "*Sparql10DynamicTest*"
```

### Exclusions Policy

To ensure high scientific integrity and transparency, no test is skipped silently. All exclusions are documented with exact fragment identifiers and reactivation conditions in [`docs/W3C_TEST_EXCLUSIONS.md`](docs/W3C_TEST_EXCLUSIONS.md).
