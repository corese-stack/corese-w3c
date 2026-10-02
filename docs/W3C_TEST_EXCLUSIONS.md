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

Failures in the JSON-LD dependency remain limitations of the behavior delivered
by Corese; their origin does not remove them from the results.

| Suite | ID | Observed result / interpretation |
| --- | --- | --- |
| JSON-LD toRdf | `tli12` | `FAILED`: the processor rejects `@base: "http://invalid/<>/"` with `INVALID_BASE_IRI`, while the selected fixture expects successful list conversion. The fixture/specification question remains open; no unverified upstream-bug exemption is applied. |
| JSON-LD fromRdf | `t0027` | `FAILED`: `NumberFormatException` in Titanium with `useNativeTypes` on non-finite or ill-typed numeric input; the fixture expects literals to be preserved when native JSON conversion is unavailable. |
| JSON-LD fromRdf | `t0028` | `FAILED`: `NumberFormatException` in Titanium for non-native literal values with `useNativeTypes`. |
| JSON-LD fromRdf | `tli01` | `FAILED`: `NullPointerException` in Titanium when processing a nested empty list (`@list` containing empty `@list`). |

> [!NOTE]
> The change from 8 to 4 failures in the test report reflects the adoption of the official suite's SPARQL ASK evaluation criterion for RDFa positive evaluation tests (with full-graph differences retained as diagnostic metadata) and the classification of `agg-min-02` as `CANT_TELL`. It does **not** signify that four engine bugs were resolved.

### RDFa Official ASK Criterion and Diagnostic Comparison (`0295`)

The official W3C RDFa test suite defines test evaluation via SPARQL ASK queries (`.sparql`). Corese passes the official ASK query for test `0295` on all three host formats (XHTML, XML, SVG), and the test is accordingly recorded as `PASSED`. This query checks only that at least one triple is present.

In addition to the official ASK criterion, the harness performs an extended full-graph comparison against the reference Turtle fixture for diagnostic visibility. The diagnosed differences are:
- **Collections ([RDFa Core 1.1 step 8](https://www.w3.org/TR/rdfa-core/#s_sequence))**: When the new subject equals the inherited parent object, the list mapping is not reset. The sidecar's separate lists are consistent with a union of isolated fragment results, while the combined input shares one list context. The upstream generator's history has not been verified.
- **Host rules**: XML/SVG discrepancies concern `xml:base` and behaviors such as `time`/`datetime` conversion specified by [HTML+RDFa](https://www.w3.org/TR/html-rdfa/#additional-rdfa-processing-rules).

These extended graph differences are preserved and displayed as diagnostic information in the EARL and JSON reports without altering the `PASSED` verdict established by the official ASK query. The diagnostic records the query URI and distinguishes matching, different and unavailable graph comparisons. ASK success does not establish full-graph equality.

### AVG on an empty group (`agg-avg-03`)

`agg-avg-03` is applicable. [SPARQL 1.1 §18.5.1.4](https://www.w3.org/TR/sparql11-query/#defn_aggAvg) defines the average of an empty multiset as integer zero. Corese's empty-group AVG returns integer zero and passes.

## Cannot Tell Tests

The harness records `CANT_TELL` when execution takes place but cannot produce a definite verdict due to verified upstream oracle discrepancies where RDF term identity is contested.

| Suite | ID | Observed result / interpretation |
| --- | --- | --- |
| SPARQL 1.1 | `cast-decimal` | `CANT_TELL`: upstream oracle rewrites 4 unchanged source terms (`0E1`/`1E0` to `0.0`/`1.0`), while Corese preserves source term identity. All other 27 rows and bindings agree. |
| SPARQL 1.1 | `agg-min-02` | `CANT_TELL`: upstream fixture expects canonicalized `"2.0E-1"^^xsd:double`, while Corese preserves source term `2E-1` per SPARQL 1.1 §18.5.1.5 (MIN selects an existing term from the group). All other bindings agree. |

### SPARQL `cast-decimal`

The test is executed. Its query projects the source binding `?v` and a computed
`?decimal`. For subjects `n07`–`n10`, the expected XML rewrites source values
`0E1` / `1E0` as `0.0` / `1.0` (double and float), while Corese preserves the
source terms. Lexical form is part of [RDF literal identity](https://www.w3.org/TR/rdf11-concepts/#section-Graph-Literal);
numeric value equivalence is not term identity.

`KnownCastDecimalExpectation` permits `CANT_TELL` only for the exact test URI,
31 rows, those four expected source terms, and agreement of every other binding,
datatype and multiplicity (computed numeric columns use their documented value
comparison). Additional differences remain `FAILED`.

### SPARQL `agg-min-02`

`agg-numeric.ttl` contains `:mixed2 :double 2E-1`, while `agg-min-02.srx` expects `"2.0E-1"^^xsd:double`. [SPARQL 1.1 §18.5.1.5](https://www.w3.org/TR/sparql11-query/#defn_aggMin) specifies that MIN selects an existing RDF term from the group, rather than constructing a fresh canonicalized literal. Corese preserves the source term `2E-1`.

`KnownAggMinExpectation` permits `CANT_TELL` strictly when the test URI matches `agg-min-02`, exactly 5 rows are returned, `numericColumns` is empty (extrema aggregates preserve term identity), and the only difference against the upstream fixture is the canonical `2.0E-1` vs source `2E-1` on `:mixed2`. Any further discrepancy results in `FAILED`.

## Comparator Checks and Remaining Limits

Fixtures are cached by path and reused; the cache is not a version-pinned snapshot
of upstream tests. Downloaded Turtle manifests may undergo the loader's existing
quote repair. Both graph canonicalization and ASK evaluation use Corese itself,
so correlated engine/comparator defects are possible. These checks do not provide
an independent implementation oracle.

SELECT comparison does not separately verify result headers for empty results or
implement relaxed `REDUCED`/`resultCardinality` comparison. Nondeterministic
`SAMPLE` and unordered `GROUP_CONCAT` results still use the selected fixture as
their oracle. These are comparator limits, not evidence of complete SPARQL coverage.

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

The last complete run's 2,896 passes among 2,915 selected cases give 99.35%.
The 99.86% `executedPassRate` excludes the 13 inapplicable and two indeterminate
cases; it is not a rate over every executed case.

Historical reports are preserved. Baseline refreshes require explicit review of
profile, criterion and manifest-selection changes, including `te038` becoming
inapplicable and the unselected `dawg-optional-filter-005-simplified` definition
being removed. The update guard rejects missing historical entries; it is not
weakened to accept them automatically.

## Verification Commands and Baseline Control

The test suite and EARL report can be verified locally without altering committed dashboard snapshots:

```sh
./gradlew test -x syncW3cReports --console=plain
./gradlew validateEarlReport enforceW3cRegressions --console=plain
```

- `-x syncW3cReports` keeps reports in `build/reports/` without replacing the committed dashboard snapshots. A publication run must use reviewed sources and regenerate snapshots rather than manually editing counts.
- `enforceW3cRegressions` checks results against the committed baseline to ensure no unexpected regressions occur.
