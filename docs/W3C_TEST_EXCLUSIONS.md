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

## Executed Cases Previously Deferred

The audit on 2026-09-30 re-executed every previously excluded case. The following
applicable tests now run normally. These observations describe the tested local
checkout and Titanium 1.6.0; future runs determine their actual outcomes.

| Suite | ID | Observed result / interpretation |
| --- | --- | --- |
| JSON-LD toRdf | `tli12` | `FAILED`: the processor rejects `@base: "http://invalid/<>/"` with `INVALID_BASE_IRI`, while the selected fixture expects successful list conversion. The fixture/specification question remains open; no unverified upstream-bug exemption is applied. |
| JSON-LD fromRdf | `t0027` | `FAILED`: `NumberFormatException` with `useNativeTypes` and non-finite or ill-typed numeric input; the fixture expects literals to be preserved when native JSON conversion is unavailable. |
| JSON-LD fromRdf | `t0028` | `FAILED`: `NumberFormatException` for non-native literal values with `useNativeTypes`. |
| JSON-LD fromRdf | `tli01` | `FAILED`: a nested empty RDF list triggers `NullPointerException`. |
| RDFa XHTML | `0295` | `FAILED`: produced graph differs from the expected benchmark graph. |
| RDFa XML | `0295` | `FAILED`: produced graph differs from the expected benchmark graph. |
| RDFa SVG | `0295` | `FAILED`: produced graph differs from the expected benchmark graph. |

The RDFa manifests select `0295` and mark it `test:required`. Calling it a
benchmark does not make its correctness check optional. The earlier claim that
all differences were caused by concatenated upstream fixtures was not backed by
an exhaustive discrepancy check. These mismatches remain visible until a parser
fix or a substantiated upstream correction resolves them.

The nine previously deferred JSON-LD 1.0 cases (`te014`, `te026`, `te071`, `te115`,
`te116`, `ter02`, `ter03`, `ter24`, `ter32`) and fromRdf `t0008` are now
`INAPPLICABLE` for the specification-profile reason above, not because Titanium
failed them. `te038`, which previously passed, is classified by the same rule.

### AVG on an empty group

`agg-avg-03` is applicable. [SPARQL 1.1 §18.5.1.4](https://www.w3.org/TR/sparql11-query/#defn_aggAvg)
defines the average of an empty multiset as integer zero. The former exclusion
cited §18.5.1.3 (Sum) and incorrectly asserted that the expected zero contradicted
the standard. Lack of an approval triple alone is not an exclusion criterion.
The exclusion is removed; Corese's empty-group AVG branch and its regression test
are corrected to return integer zero.

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

Historical reports and the committed baseline are not silently rewritten by this
audit. A baseline check may flag `te038` because it moves from passed to
inapplicable under the corrected specification profile. That change needs explicit
baseline review; the regression guard is not weakened to ignore it.

## Audit Validation (2026-09-30)

The final full run selected the same 2,915 identifiers as the pre-audit local run:
2,894 passed, 7 failed, 13 inapplicable, 0 untested, 1 cannot-tell. SPARQL 1.0 has
482/482 passing comparisons; SPARQL 1.1 has 494 passed and the one `cast-decimal`
indeterminate result. The core query-module run passed all 1,739 tests.

The full harness command executed 3,023 JUnit tests (including harness unit tests),
with 8 failures and 13 skips. Eight is expected here: the seven failing conformance
cases plus `cast-decimal`, which remains a failing JUnit execution. The generated
EARL report passed its 15 validation queries. The regression-baseline command
flagged exactly one transition: `te038`, passed to inapplicable because of its
manifest's specification-1.0 restriction. The baseline was left unchanged.

```sh
./gradlew test -x syncW3cReports --offline --console=plain
./gradlew validateEarlReport enforceW3cRegressions --offline --console=plain
```

`-x syncW3cReports` keeps this audit's local reports under `build/reports/` without
replacing the committed dashboard snapshots. A normal publication run must use
the audited sources and regenerate those snapshots rather than hand-edit counts.
