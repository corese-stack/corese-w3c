# corese-w3c

Test of W3C standards tests suites against Corese. Contains a generation application to generate JUnit tests from W3C tests suites manifest and a report generator from the JUnit test results.

Tested files and manifests are in the `src/test/resources` directory.


## 1. Generating W3C tests

You can select which W3C tests to generate using the `w3cStandards` property.

**Generate all tests**:

```bash
./gradlew run
```

**Generate a specific suite** (example: N-Quads tests):

```bash
./gradlew run -Dw3cStandards=nquads
```

**Generate multiple suites**:

```bash
./gradlew run -Dw3cStandards=nquads,xml
```

> **Note:** If no `w3cStandards` is specified, all tests will be generated.

---

## 2. Choosing the corese-core branch

Use the `coreseCoreBranch` property to specify the Corese engine branch.

**Default branch (feature/corese-next)**:

```bash
./gradlew run
```

**Other branch (example: develop)**:

```bash
./gradlew run -DcoreseCoreBranch=develop
```

> If not specified, `feature/corese-next` is used.

---

## 3. Choosing the corese-core path
   Use the coreseCorePath property to specify a custom local path for the corese-core repository. This is useful if you have a local clone in a non-default location.

Default path (corese-core/):

```bash
./gradlew run
```
Custom path (example: /Users/youruser/dev/my-corese-core):

```bash
./gradlew run -PcoreseCorePath=/Users/youruser/dev/my-corese-core
```
If not specified, corese-core is used as the directory name in the current project root.


## 4. Force Rebuilding corese-core
   The getCoreseCore task automatically checks for changes before rebuilding.
   If you need to force a rebuild of the corese-core module, ignoring these checks,
   you can use the forceBuildCoreseCore task. This is particularly useful during development or for troubleshooting.

Force rebuild corese-core:

```bash
./gradlew forceBuildCoreseCore
```
Force rebuild with a specific branch:

```bash
./gradlew forceBuildCoreseCore -DcoreseCoreBranch=develop
```
Force rebuild from a custom path:

```bash
./gradlew forceBuildCoreseCore -PcoreseCorePath=/Users/youruser/dev/my-corese-core
```
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
  - [SPARQL 1.1 tests](https://w3c.github.io/rdf-tests/sparql/sparql11)
- SHACL tests
  - [SHACL 1.1 tests](https://w3c.github.io/data-shapes/data-shapes-test-suite/)

## Ongoing implementation
  
## Planned implementation

- RDF tests
  - RDF 1.1 tests
    - [RDF Schema and Semantics tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-mt/)
- JSON-LD tests
  - [JSON-LD 1.1 tests](https://json-ld.github.io/json-ld.org/test-suite/reports/)

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
- LDP
  - [LDP Tests](https://w3c.github.io/ldp-testsuite/)
  
## Issues

- Some tests for SPARQL 1.0 use a turtle format for the results of SELECT queries. To our knowledge, this format is not part of the SPARQL 1.0 standard
- The vocabulary used to define SHACL tests is an extension of the Manifest vocabulary used in all other tests. As of 04/10/2024, it is not dereferencable or available on Linked Open Vocabularies.
  - [issue](https://github.com/w3c/shacl/issues/86)
  - Specific problem of 
