# corese-w3c

W3C standards test execution against Corese using a modern dynamic JUnit test system. Tests are loaded at runtime from W3C test manifests.

Test files and manifests are in the `src/test/resources` directory.

## 1. Running

**Execute all W3C tests**:

```bash
./gradlew test
```

**Execute specific test suite**:

```bash
# RDF 1.1 Turtle tests
./gradlew test --tests "*Rdf11TurtleDynamicTest*"

# RDF 1.1 N-Triples tests  
./gradlew test --tests "*Rdf11NTriplesDynamicTest*"

# RDF 1.1 N-Quads tests
./gradlew test --tests "*Rdf11NQuadsDynamicTest*"

# RDF 1.1 TriG tests
./gradlew test --tests "*Rdf11TrigDynamicTest*"

# RDF 1.1 XML tests
./gradlew test --tests "*Rdf11XmlDynamicTest*"

# RDF Canonical tests 
./gradlew test --tests "*RdfCanonicalDynamicTest*"

```

## 2. Managing corese

**Use default corese-core** (feature/corese-next branch):

```bash
./gradlew test
```

**Use specific branch** (automatically switches branches and rebuilds):

```bash
./gradlew test -DcoreseCoreBranch=develop
```

**Use specific commit**:

```bash
./gradlew test -DcoreseCoreBranch=abc123456
```

**Use local corese-core path**:

```bash
./gradlew test -PcoreseCorePath=/path/to/your/corese-core
```

**Force rebuild corese-core** (ignores change detection):

```bash
./gradlew forceBuildCoreseCore
```

**Force rebuild with specific branch**:

```bash
./gradlew forceBuildCoreseCore -DcoreseCoreBranch=develop
```

**Force rebuild with specific commit**:

```bash
./gradlew forceBuildCoreseCore -DcoreseCoreBranch=abc123456
```

**Force rebuild with specific path**:

```bash
./gradlew forceBuildCoreseCore -PcoreseCorePath=/Users/youruser/dev/my-corese-core
```

## 3. W3C Test Suites

### Implemented in corese-w3c

This dynamic test system currently supports the following W3C test suites:

- **RDF 1.1 tests**
  - [N-Triples tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/) - Positive/negative syntax and evaluation
  - [N-Quads tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/) - Positive/negative syntax and evaluation  
  - [Turtle tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/) - Positive/negative syntax and evaluation
  - [TriG tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/) - Positive/negative syntax and evaluation
  - [RDF/XML tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/) - Positive/negative syntax and evaluation
  - [JSON-LD 1.1 tests](https://json-ld.github.io/json-ld.org/test-suite/reports/) - Positive/negative syntax and evaluation
  - [RDF Canonical](https://w3c.github.io/rdf-canon/tests/) - Positive/negative syntax

### Planned implementation in corese-w3c

- **RDF tests**
  - [RDFa core](https://rdfa.info/test-suite/)  
  - RDF 1.1 tests
    - [RDF Schema and Semantics tests](https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-mt/)
- **SPARQL tests**
  - [SPARQL 1.0 tests](https://w3c.github.io/rdf-tests/sparql/sparql10)
  - [SPARQL 1.1 tests](https://w3c.github.io/rdf-tests/sparql/sparql11)
- **SHACL tests**
  - [SHACL tests](https://w3c.github.io/data-shapes/data-shapes-test-suite/)

### Not supported in corese-core

- **RDF tests**
  - RDF 1.2
    - [N-Triples tests (includes 1.1 tests)](https://w3c.github.io/rdf-tests/rdf/rdf12/rdf-n-triples)
    - [N-Quads tests (includes 1.1 tests)](https://w3c.github.io/rdf-tests/rdf/rdf12/rdf-n-quads)
    - [Semantics tests](https://w3c.github.io/rdf-tests/rdf/rdf12/rdf-semantics)
    - [Turtle tests (includes 1.1 tests)](https://w3c.github.io/rdf-tests/rdf/rdf12/rdf-turtle)
    - [TriG tests (includes 1.1 tests)](https://w3c.github.io/rdf-tests/rdf/rdf12/rdf-trig)
- **SPARQL tests**
  - [SPARQL 1.2 tests](https://w3c.github.io/rdf-tests/sparql/sparql12)
- **LDP tests**
  - [LDP Tests](https://w3c.github.io/ldp-testsuite/)

## 4. Known Issues and Limitations

- Some tests for SPARQL 1.0 use a turtle format for the results of SELECT queries. To our knowledge, this format is not part of the SPARQL 1.0 standard
- The vocabulary used to define SHACL tests is an extension of the Manifest vocabulary used in all other tests. As of 04/10/2024, it is not dereferencable or available on Linked Open Vocabularies.
  - issue [w3c/shacl#86](https://github.com/w3c/shacl/issues/86)
