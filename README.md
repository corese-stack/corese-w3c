# corese-w3c

W3C standards conformance test suite and dynamic execution harness for [Corese](https://github.com/corese-stack/corese-core).

Tests are dynamically loaded from official W3C manifests and executed against Corese using JUnit 5 Dynamic Tests.

## Conformance Dashboard

The live interactive W3C conformance dashboard and benchmark reports are published at:
[https://corese-stack.github.io/corese-w3c/](https://corese-stack.github.io/corese-w3c/)

## Supported W3C Specifications

| Specification | W3C Test Suite Manifest | Test Types Covered |
| :--- | :--- | :--- |
| **Turtle (RDF 1.1)** | [Turtle Test Suite](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/) | Positive/Negative Syntax, Positive Evaluation |
| **TriG (RDF 1.1)** | [TriG Test Suite](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/) | Positive/Negative Syntax, Positive Evaluation |
| **RDF/XML (RDF 1.1)** | [RDF/XML Test Suite](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/) | Positive/Negative Syntax, Positive Evaluation |
| **N-Triples (RDF 1.1)** | [N-Triples Test Suite](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/) | Positive/Negative Syntax, Positive Evaluation |
| **N-Quads (RDF 1.1)** | [N-Quads Test Suite](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/) | Positive/Negative Syntax, Positive Evaluation |
| **RDFC-1.0 (Canonicalization)** | [RDF-Canon Test Suite](https://w3c.github.io/rdf-canon/tests/) | Canonical Evaluation, Map Tests, Negative Evaluation |
| **RDFa 1.1 (XHTML, XML, SVG)** | [RDFa Test Suite](https://rdfa.info/test-suite/) | XHTML, XML, and SVG Evaluation |
| **JSON-LD 1.1 (`toRdf` & `fromRdf`)** | [JSON-LD 1.1 Test Suite](https://json-ld.github.io/json-ld.org/test-suite/reports/) | `toRdf` and `fromRdf` Syntax and Evaluation |

> **Documented Test Exclusions & Rationale**: All documented exclusions (e.g. non-standard Generalized RDF or upstream dependency edge-cases) are formally specified in [`docs/W3C_TEST_EXCLUSIONS.md`](docs/W3C_TEST_EXCLUSIONS.md).

## Running Tests

### Execute all W3C test suites

```bash
./gradlew test
```

Running `./gradlew test` executes all supported W3C suites and displays the consolidated terminal conformance summary table.

### Execute a specific test suite

```bash
# RDF 1.1 Turtle tests
./gradlew test --tests "*Rdf11TurtleDynamicTest*"

# RDF 1.1 TriG tests
./gradlew test --tests "*Rdf11TrigDynamicTest*"

# RDF 1.1 RDF/XML tests
./gradlew test --tests "*Rdf11XmlDynamicTest*"

# RDF 1.1 N-Triples tests
./gradlew test --tests "*Rdf11NTriplesDynamicTest*"

# RDF 1.1 N-Quads tests
./gradlew test --tests "*Rdf11NQuadsDynamicTest*"

# RDFC-1.0 RDF Dataset Canonicalization tests
./gradlew test --tests "*RdfCanonicalDynamicTest*"

# JSON-LD 1.1 toRdf (JSON-LD to RDF) tests
./gradlew test --tests "*Rdf11JsonldToRdfDynamicTest*"

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
```
