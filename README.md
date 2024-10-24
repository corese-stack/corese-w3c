# corese-w3c

Test of W3C standards tests suites against Corese. Contains a generation application to generate JUnit tests from W3C tests suites manifest and a report generator from the JUnit test results.

Tested files and manifests are in the `src/test/resources` directory.

## Implemented tests

- RDF tests
  - [RDF Canonical](https://w3c.github.io/rdf-canon/tests/)
  - RDF 1.1 tests
    - [N-Quads tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/)
    - [N-Triples tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/)
    - [RDF/XML Syntax tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/)
    - [TriG Syntax tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/)
    - [Turtle tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/)
- SPARQL tests
  - [SPARQL 1.0 tests](https://w3c.github.io/rdf-tests/sparql/sparql10)
- SHACL tests
  - [SHACL 1.1 tests](https://w3c.github.io/data-shapes/data-shapes-test-suite/)

## Ongoing implementation

- SPARQL tests
  - [SPARQL 1.1 tests](https://w3c.github.io/rdf-tests/sparql/sparql11)
  
## Planned implementation

- RDF tests
  - RDF 1.1 tests
    - [RDF Schema and Semantics tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-mt/)
- JSON-LD tests
  - [JSON-LD 1.1 tests](https://json-ld.github.io/json-ld.org/test-suite/reports/)
- LDP
  - [LDP Tests](https://w3c.github.io/ldp-testsuite/)

## Not implemented in corese

- RDF tests
  - RDF 1.2
    - [N-Triples tests (includes 1.1 tests)](https://w3c.github.io/rdf-tests/rdf/rdf12/rdf-n-triples)
    - [N-Quads tests (includes 1.1 tests)](https://w3c.github.io/rdf-tests/rdf/rdf12/rdf-n-quads)
    - [Semantics tests](https://w3c.github.io/rdf-tests/rdf/rdf12/rdf-semantics)
    - [Turtle tests (includes 1.1 tests)](https://w3c.github.io/rdf-tests/rdf/rdf12/rdf-turtle)
    - [TriG tests (includes 1.1 tests)](https://w3c.github.io/rdf-tests/rdf/rdf12/rdf-trig)
- SPARQL tests
  - [SPARQL 1.2 tests](https://w3c.github.io/rdf-tests/sparql/sparql12)
  
## Issues

- Some tests for SPARQL 1.0 use a turtle format for the results of SELECT queries. To our knowledge, this format is not part of the SPARQL 1.0 norm
- The vocabulary used to define SHACL tests is an extension of the Manifest vocabulary used in all other tests. As of 04/10/2024, it is not dereferencable or available on Linked Open Vocabularies.
  - [issue](https://github.com/w3c/shacl/issues/86)
  - Specific problem of 
