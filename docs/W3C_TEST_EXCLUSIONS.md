# W3C test exclusions

W3C conformance tests are executed by default. An exclusion is allowed only when it uses the exact manifest fragment identifier, states the responsible component, and has an explicit reactivation condition. Display names and substring matching must never be used.

Manifest entries must never disappear silently: an unsupported test type makes the suite fail during loading. Every reported manifest test is therefore either executed or listed below with an exact, documented exclusion.

In the EARL report, the two generalized-RDF exclusions are classified as `earl:inapplicable`. Every Titanium and RDFa 0295 exclusion remains applicable to Corese and is classified as `earl:untested`. A skipped JUnit result is never blindly converted to one EARL outcome.

## JSON-LD

Corese delegates the JSON-LD algorithms to Titanium JSON-LD 1.6.0. The exclusions below isolate specific behavior inside Titanium 1.6.0 that diverges from the W3C test suite. They must be retested individually on every Titanium upgrade; they are not waivers of W3C requirements.

Two exclusions cover the optional generalized-RDF feature, which permits blank nodes as predicates and cannot be represented by the standard Corese RDF 1.1 model. The other exclusions isolate behavior inside Titanium. They must be retested individually on every Titanium upgrade; they are not waivers of W3C requirements.

| Direction | Test ID | Classification | Reason | Reactivation condition |
| :--- | :--- | :--- | :--- | :--- |
| toRdf | `t0118` | Optional unsupported | `produceGeneralizedRdf` emits blank-node predicates. | Corese gains a generalized-RDF model. |
| toRdf | `te075` | Optional unsupported | A blank-node `@vocab` produces blank-node predicates. | Corese gains a generalized-RDF model. |
| toRdf | `tli12` | Titanium 1.6.0 | Titanium rejects the malformed `@base` before applying the required list behavior. | Titanium accepts the W3C case. |
| toRdf | `te071` | Titanium 1.6.0 | A valid JSON-LD 1.0 compact-IRI-shaped term redefinition is rejected. | Titanium accepts the W3C case. |
| toRdf | `te115` | Titanium 1.6.0 | A relative property with empty `@vocab` is accepted in 1.0 instead of failing. | Titanium reports the required error. |
| toRdf | `te116` | Titanium 1.6.0 | A relative property with relative `@vocab` is accepted in 1.0 instead of failing. | Titanium reports the required error. |
| toRdf | `ter24` | Titanium 1.6.0 | A list of lists in an array is accepted instead of failing. | Titanium reports the required error. |
| toRdf | `ter32` | Titanium 1.6.0 | A second list-of-lists form is accepted instead of failing. | Titanium reports the required error. |
| toRdf | `te014` | Titanium 1.6.0 | A datatype compact IRI follows 1.1 expansion in a 1.0 case. | Titanium produces the expected datatype IRI. |
| toRdf | `te026` | Titanium 1.6.0 | A valid 1.0 term mapping to `@type` is rejected. | Titanium accepts the W3C case. |
| toRdf | `ter02` | Titanium 1.6.0 | Produces `LOADING_REMOTE_CONTEXT_FAILED` instead of `RECURSIVE_CONTEXT_INCLUSION` on recursive remote context. | Titanium reports recursive context inclusion. |
| toRdf | `ter03` | Titanium 1.6.0 | Produces `LOADING_REMOTE_CONTEXT_FAILED` instead of `RECURSIVE_CONTEXT_INCLUSION` on indirect recursive remote context. | Titanium reports recursive context inclusion. |
| fromRdf | `t0027` | Titanium 1.6.0 | `useNativeTypes` throws on a non-finite numeric lexical form. | The typed literal is preserved instead. |
| fromRdf | `t0028` | Titanium 1.6.0 | `useNativeTypes` throws on a non-native numeric lexical form. | The typed literal is preserved instead. |
| fromRdf | `tli01` | Titanium 1.6.0 | A nested empty list triggers a null dereference. | Titanium serializes the nested empty list. |
| fromRdf | `t0008` | Titanium 1.6.0 | JSON-LD 1.1 nested-list conversion is applied to a 1.0 ordering case. | Titanium honors 1.0 list conversion. |

`t0009` and `ter44` were previously hidden by broad display-name matching. Both pass and are intentionally active.

## Executed tests with an indeterminate verdict

`http://www.w3.org/2009/sparql/docs/tests/data-sparql11/cast/manifest#cast-decimal` remains active. Its expected result rewrites the unmodified source binding `?v` for `n07`–`n10` from `0E1`/`1E0` to `0.0`/`1.0` (double and float). Only this exact four-binding discrepancy is reported as EARL `cantTell`, not `passed`, `inapplicable`, or `untested`. The original mismatch remains in the failure log; JUnit still reports a failure. All 31 rows and every other binding must agree, including the calculated decimal values. Any additional discrepancy is a normal failure. No upstream fixture is modified.

Remove this recognition when the upstream expected result preserves those source terms. A corrected expected result already passes the ordinary comparison without this classification. This differs from comparing *computed* numeric results by value, discussed in [W3C rdf-tests #58](https://github.com/w3c/rdf-tests/issues/58); directly projected RDF terms still require their original lexical form.

## RDFa

The three exclusions below are the host-language variants of one generated benchmark. Test `0295` concatenates the bodies of many independent test documents, but its expected graph is the union of the results obtained when those documents are parsed separately. Concatenation is not semantics-neutral in RDFa: list mappings and initial contexts are scoped by the surrounding document. For example, the XHTML fixture contains one continuous list while the expected graph requires eight independent list heads. The XML and SVG variants also contain HTML-only `time/@datetime` expectations and ignore a valid XML `xml:base`.

The individual source tests remain active and pass. Corese fixes discovered through the benchmark (element-local incomplete triples, host-specific initial contexts, XHTML 1.x `xml:base`, HTML `time/@datetime`, and IRI dot-segment normalization) are covered by focused unit tests.

| Host | Test ID | Classification | Reactivation condition |
| :--- | :--- | :--- | :--- |
| XHTML | `0295` | Upstream composite-fixture semantics | Expected output is regenerated by parsing the actual concatenated document, or the fixture becomes a true isolated-test runner. |
| XML | `0295` | Upstream composite-fixture and host-rule mismatch | The fixture stops applying HTML-only rules and honors XML base processing. |
| SVG | `0295` | Upstream composite-fixture and host-rule mismatch | The fixture stops applying HTML-only rules and honors XML base processing. |

References: [JSON-LD 1.1 Processing Algorithms and API](https://www.w3.org/TR/json-ld11-api/), [W3C JSON-LD test suite](https://w3c.github.io/json-ld-api/tests/), [Titanium JSON-LD](https://github.com/filip26/titanium-json-ld), [RDFa Core 1.1](https://www.w3.org/TR/rdfa-core/), and [HTML+RDFa 1.1](https://www.w3.org/TR/html-rdfa/).
