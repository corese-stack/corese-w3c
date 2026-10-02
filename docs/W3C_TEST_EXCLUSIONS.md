# W3C Test Selection, Applicability, and Known Results

The harness executes selected, applicable tests, including known implementation failures.
It does not claim certification against ISO/IEC 29119 or completeness beyond the
[documented suite scope](../README.md#coverage-and-limits).

## Manifest Selection

For manifests declaring `mf:entries`, only listed entries are selected, including
sub-manifests and anonymous manifest nodes. Definitions outside the list do not
receive outcomes or enter the denominator. An empty list selects no tests.
Legacy vocabularies without `mf:entries` retain type-based discovery.

The official [SPARQL optional-filter manifest](https://w3c.github.io/rdf-tests/sparql/sparql10/optional-filter/manifest.ttl)
selects `dawg-optional-filter-005-not-simplified`; the alternative `simplified`
remains defined but is commented out of the list. The former preserves FILTER
scope before simplification, the preferred reading in
[SPARQL 1.1 §18.2.2](https://www.w3.org/TR/sparql11-query/#convertGraphPattern).
This is selection, not reclassification of a failure.

## Outcome Policy

The meanings follow [EARL §2.7](https://www.w3.org/TR/EARL10-Schema/#OutcomeValue):

| Outcome | Meaning in this harness |
| --- | --- |
| `PASSED` | Executed and matched the expected result under the comparator's rules. |
| `FAILED` | Executed and disagreed, or the implementation threw an unexpected error. A suspected dependency or fixture defect does not by itself justify suppressing the failure. |
| `INAPPLICABLE` | The test's declared specification or required feature is outside the documented profile. It remains visible and is not a pass. |
| `UNTESTED` | No execution took place. There are currently no deliberate deferrals for known failures. |
| `CANT_TELL` | An execution could not establish a verdict, due to unavailable infrastructure or a narrowly verified expectation discrepancy. It is not a pass. |

Apply the policy in this order:

1. **Selection:** is the case listed in the chosen manifest? An unselected
   definition is absent from the run; it is not an inapplicable or untested case.
2. **Applicability:** do specification metadata and declared optional features
   put it outside the published profile? If so, record `INAPPLICABLE`, the exact
   metadata and the condition for reactivation. Apply the same rule to passing
   and failing cases. Missing a required feature *within* the profile is an
   implementation failure, not a reason to narrow the profile after the fact.
3. **Execution:** if an applicable test was not run, record `UNTESTED` and explain
   why. A known failure must not be deferred merely to obtain a green report.
4. **Verdict:** executed matching results are `PASSED`; mismatches and engine
   errors are `FAILED`. Use `CANT_TELL` only when evidence establishes that the
   execution cannot produce a reliable verdict. Suspecting a bad fixture is
   insufficient: document the precise discrepancy and constrain any exception
   so additional differences still fail.

The legacy JSON `status` maps `CANT_TELL` to `FAILED` and skipped outcomes to
`SKIPPED`; the authoritative field is `outcome`. JUnit/Gradle still fail on
`CANT_TELL`, so an indeterminate run cannot silently turn the build green.

## Inapplicable Tests

### JSON-LD specification versions

Both JSON-LD suites target **JSON-LD 1.1**, including explicit `processingMode`
compatibility tests. The official [`specVersion` vocabulary](https://w3c.github.io/json-ld-api/tests/vocab#specVersion)
identifies which *specification* a test applies to; it is not a processing-mode
option. Cases marked `specVersion=json-ld-1.0` are outside this profile, whether
Corese happens to pass or fail them. Tests without that restriction and tests
with `processingMode=json-ld-1.0` remain applicable.

| Direction | IDs restricted to specification 1.0 |
| --- | --- |
| toRdf | `te014`, `te026`, `te038`, `te071`, `te115`, `te116`, `ter02`, `ter03`, `ter24`, `ter32` |
| fromRdf | `t0008` |

`t0118` also declares specification 1.0, but its generalized-RDF requirement
below is recorded first. A separate JSON-LD 1.0 specification profile would be
needed to reactivate version-restricted cases; changing `processingMode` alone
is not equivalent. The rule is based on manifest metadata, not a list of failures.

### Generalized RDF

The [`produceGeneralizedRdf` option](https://www.w3.org/TR/json-ld11-api/#dom-jsonldoptions-producegeneralizedrdf)
can request blank-node predicates, outside Corese's RDF 1.1 data model.
The two current fixtures explicitly declare `requires: GeneralizedRdf` and set
this option to true.

| Direction | Test ID | Required feature | Reactivation condition |
| --- | --- | --- | --- |
| toRdf | `t0118` | Keep blank-node predicates. | A generalized-RDF profile and data model are implemented. |
| toRdf | `te075` | Blank-node `@vocab` produces blank-node predicates. | A generalized-RDF profile and data model are implemented. |

## Known Failures and Discrepancies

The following applicable tests are executed and currently result in known failures or discrepancies against the test fixtures:

| Suite | ID | Observed result / interpretation |
| --- | --- | --- |
| JSON-LD toRdf | `tli12` | `FAILED`: the processor rejects `@base: "http://invalid/<>/"` with `INVALID_BASE_IRI`, while the selected fixture expects successful list conversion. The fixture/specification question remains open; no unverified upstream-bug exemption is applied. |
| JSON-LD fromRdf | `t0027` | `FAILED`: `NumberFormatException` in Titanium with `useNativeTypes` on non-finite or ill-typed numeric input; the fixture expects literals to be preserved when native JSON conversion is unavailable. |
| JSON-LD fromRdf | `t0028` | `FAILED`: `NumberFormatException` in Titanium for non-native literal values with `useNativeTypes`. |
| JSON-LD fromRdf | `tli01` | `FAILED`: `NullPointerException` in Titanium when processing a nested empty list (`@list` containing empty `@list`). |
| RDFa XHTML | `0295` | `FAILED`: produced graph differs from the expected benchmark graph under full-graph comparison. |
| RDFa XML | `0295` | `FAILED`: produced graph differs from the expected benchmark graph under full-graph comparison. |
| RDFa SVG | `0295` | `FAILED`: produced graph differs from the expected benchmark graph under full-graph comparison. |
| SPARQL 1.1 | `agg-min-02` | `FAILED`: input data contains `:mixed2 :double 2E-1`, while `agg-min-02.srx` expects `"2.0E-1"^^xsd:double`. |

The RDFa manifests select `0295` and mark it `test:required`. Each official ASK sidecar only verifies that at least one triple is generated; all three produced graphs satisfy that official criterion. The `FAILED` entries above reflect the harness's stricter full-graph comparison.

The separate parent-object list bug is now covered by six unit regressions in
`RDFaParserTest`: descendants share an ordered collection on the relation object,
subject and object lists remain distinct, and incomplete relations and empty
lists retain their owners. The corrected incoming/local/child list contexts pass
the complete corese-core regression run (3,200 tests, no failures). Targeted
`0295` probes nevertheless produce exactly the same canonical graphs as before
this list correction: XHTML has 356 quads against 364 expected, and XML/SVG have
313 against 318. All three official ASK queries still pass and all three
full-graph comparisons still fail. The reproduced list bug therefore cannot be
claimed to explain or resolve those benchmark differences; XML/SVG also retain
grounded discrepancies involving `xml:base` and `time`/`datetime`. These are
targeted observations, not a new complete W3C harness validation or published
conformance snapshot.

### Structural diagnosis of the RDFa benchmarks

The remaining comparison differences can now be bounded more precisely. Walks
over `rdf:first`/`rdf:rest` compare each anchored collection's ordered values,
without depending on canonical blank-node labels. All three actual graphs contain
five nonempty collections; their Turtle sidecars contain twelve. Four collections
match. The other actual collection has twelve items, where the reference contains
eight separate nonempty collections with the same twelve items in total, plus an
empty collection. Their subject is the benchmark document and their predicate is
`rdf:value`.

| Host | Actual / reference quads | Actual / reference non-collection quads | Remaining comparison |
| --- | --- | --- | --- |
| XHTML | 356 / 364 | 319 / 319 | Isomorphic after removing collection cells and anchors, including the empty-list anchor. |
| XML | 313 / 318 | 276 / 273 | Isomorphic after also removing the grounded differences described below. |
| SVG | 313 / 318 | 276 / 273 | Same bounded differences as XML. |

The list discrepancy is consistent with concatenation changing the evaluation
context. A reduced probe puts these two fragments inside a single document:

```xml
<div about=""><span property="ex:items" inlist="">A</span></div>
<div about=""><span property="ex:items" inlist="">B</span></div>
```

Corese produces one list `("A" "B")` (five triples). Parsing each fragment in its
own document and unioning their graphs instead gives two one-item lists (six
triples). In the combined document, both explicit subjects equal the inherited
parent object. Under [RDFa Core step 8](https://www.w3.org/TR/rdfa-core/#s_sequence),
that does not reset the list mapping. Thus a union of isolated expected graphs
does not by itself define the expected graph of the concatenated document.
This supports a reference-graph construction problem; the upstream generator's
history has not been verified. It is not a reason to change the parser to reset
lists on every explicit `about` solely to reproduce the sidecar.

The XML/SVG non-collection mismatches contain ten expected-only and thirteen
actual-only grounded triples. One pair concerns `xml:base`: the reference attaches
`"Test 0109"` to the document, while Corese attaches it to
`http://example.org/invalid/`. The benchmark retains a comment about invalid XHTML,
but [XML+RDFa permits `xml:base`](https://www.w3.org/TR/rdfa-core/#docconf).
The other nine expected-only and twelve actual-only triples concern `time`,
`datetime`, datatype selection and language. The sidecar uses behaviors specified
by [HTML+RDFa](https://www.w3.org/TR/html-rdfa/#additional-rdfa-processing-rules),
while these inputs are generic XML or SVG hosts. Applying those HTML rules to all
hosts just to match the sidecar is not justified.

These controlled removals are diagnostic only: the executor still compares the
complete unmodified datasets. All three outcomes remain FAILED for that extended
comparison, and their official nonempty-graph ASK criterion remains satisfied.
An upstream correction or an explicit separation of official ASK outcomes from
extended graph diagnostics is needed before changing the reported classifications.

### MIN and source-term preservation (`agg-min-02`)

`agg-numeric.ttl` contains `:mixed2 :double 2E-1`, while `agg-min-02.srx` expects `"2.0E-1"^^xsd:double`. [SPARQL 1.1 §18.5.1.5](https://www.w3.org/TR/sparql11-query/#defn_aggMin) specifies that MIN selects an existing RDF term from the group, rather than constructing a fresh canonicalized literal. Corese preserves the source term `2E-1`. The discrepancy is visible because `ComputedNumericResults` strictly preserves source terms for extrema aggregates; it remains marked `FAILED` against the upstream fixture.

The version-restricted JSON-LD 1.0 cases (`te014`, `te026`, `te038`, `te071`, `te115`, `te116`, `ter02`, `ter03`, `ter24`, `ter32`, `t0008`) are classified as `INAPPLICABLE` for the specification-profile reason above, not because the processor failed them.

### AVG on an empty group (`agg-avg-03`)

`agg-avg-03` is applicable. [SPARQL 1.1 §18.5.1.4](https://www.w3.org/TR/sparql11-query/#defn_aggAvg) defines the average of an empty multiset as integer zero. Corese's empty-group AVG returns integer zero and passes.

## Cannot Tell Tests

### SPARQL `cast-decimal`

The test is executed. Its query projects the source binding `?v` and a computed
`?decimal`. For subjects `n07`–`n10`, the expected XML rewrites source values
`0E1` / `1E0` as `0.0` / `1.0` (double and float), while Corese preserves the
source terms. Lexical form is part of [RDF literal identity](https://www.w3.org/TR/rdf11-concepts/#section-Graph-Literal);
numeric value equivalence is not term identity. The earlier reference to
SPARQL §17.4.3.1 was incorrect: that section concerns strings.

`KnownCastDecimalExpectation` permits `CANT_TELL` only for the exact test URI,
31 rows, those four expected source terms, and agreement of every other binding,
datatype and multiplicity (computed numeric columns use their documented value
comparison). Additional differences remain `FAILED`. No fixture or engine result
is rewritten for a passing verdict. Reactivation as a normal comparison requires
an upstream correction or a documented authoritative comparison rule resolving
this source-term discrepancy.

## Comparator Checks and Remaining Limits

SELECT and CSV bag comparison now uses one blank-node bijection across the whole
result set. It preserves repeated rows and rejects both splitting a shared node
and merging distinct nodes. Tests cover global renaming, row permutations,
backtracking and differing graph topology. Ground bindings are compared as maps,
avoiding delimiter collisions in concatenated row strings. Existing numeric
value normalization remains limited to identified computed numeric columns.
CSV retains its format's inherent loss of datatype information and its ambiguity
between a literal beginning with `_:`, and a blank-node label.

Before bag comparison, an independent ORDER BY check rejects inversions on
projected variable keys for IRIs, strings (Unicode codepoint order), booleans,
`xsd:integer`/`xsd:decimal` values and the specified ordering between term categories.
It respects ASC/DESC and subsequent keys for identical RDF terms. It does not
require an arbitrary order among ties, distinct blank nodes or language-tagged
literals. CSV order is checked before term information is discarded.

This check is deliberately partial: arbitrary sort expressions, unprojected
keys, floating-point/dateTime comparisons and other datatype-specific ordering
are not yet verified. Result-file `rs:index` is read, but is not sufficient by
itself to impose a total order where SPARQL allows ties. These limitations are
not grounds to exclude tests or relabel their outcomes. The dashboard counts
passing comparisons, not independently proven complete SPARQL conformance.

## Reporting and History

Reports show every selected entry, including inapplicable tests. `passRate` uses
all selected entries; `executedPassRate` uses only passed and failed outcomes and
must not be presented as overall standards conformance. Neither metric proves
complete language implementation.

Historical reports and the committed baseline are not silently rewritten. A baseline check may flag `te038` because it moves from passed to inapplicable under the corrected specification profile. That change needs explicit baseline review; the regression guard is not weakened to ignore it.

## Verification Commands and Baseline Control

The test suite and EARL report can be verified locally without altering committed dashboard snapshots:

```sh
./gradlew test -x syncW3cReports --console=plain
./gradlew validateEarlReport enforceW3cRegressions --console=plain
```

- `-x syncW3cReports` keeps reports in `build/reports/` without replacing the committed dashboard snapshots. A publication run must use reviewed sources and regenerate snapshots rather than manually editing counts.
- `enforceW3cRegressions` checks results against the committed baseline to ensure no unexpected regressions occur.
