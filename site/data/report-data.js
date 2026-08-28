window.__CORESE_W3C_DATA__ = {
    "metadata": {
        "generatedAt": "2026-08-28T12:47:20.691256467Z",
        "project": "corese-w3c",
        "version": "5.0.0-SNAPSHOT",
        "git": {
            "branch": "feature/issue-16-w3c-reporting",
            "commit": "16718a2"
        },
        "durationSeconds": 23.57
    },
    "summary": {
        "total": 1938,
        "passed": 1921,
        "failed": 0,
        "skipped": 17,
        "passRate": 99.12
    },
    "suites": [
        {
            "id": "jsonld-fromrdf",
            "name": "JSON-LD 1.1 (fromRdf)",
            "total": 54,
            "passed": 50,
            "failed": 0,
            "skipped": 4,
            "passRate": 92.59,
            "durationMs": 83,
            "tests": [
                {
                    "name": "rdf11JsonldFromRdfTests()[1]",
                    "displayName": "rdfdirection:_compoundliteral_with_compound_literal_with_direction_and_language - Parses compound literal with proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 14,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di12-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di12-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[2]",
                    "displayName": "rdfdirection:_compoundliteral_with_compound_literal_with_direction_and_no_language - Parses compound literal with proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di11-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di11-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[3]",
                    "displayName": "rdfdirection:_compoundliteral_with_i18n_literal_with_direction_and_language - Does not parse i18n datatype without proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di10-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di10-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[4]",
                    "displayName": "json_literal_(boolean_true) - Tests creating property with rdf:type rdf:JSON to a JSON literal (boolean true). [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js01-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js01-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[5]",
                    "displayName": "json_literal_(boolean_false) - Tests creating property with rdf:type rdf:JSON to a JSON literal (boolean false). [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js02-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js02-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[6]",
                    "displayName": "json_literal_(double) - Tests creating property with rdf:type rdf:JSON to a JSON literal (double). [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js03-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js03-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[7]",
                    "displayName": "json_literal_(doublezero) - Tests creating property with rdf:type rdf:JSON to a JSON literal (double-zero). [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js04-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js04-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[8]",
                    "displayName": "json_literal_(integer) - Tests creating property with rdf:type rdf:JSON to a JSON literal (integer). [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js05-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js05-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[9]",
                    "displayName": "json_literal_(object) - Tests creating property with rdf:type rdf:JSON to a JSON literal (object). [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js06-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js06-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[10]",
                    "displayName": "json_literal_(array) - Tests creating property with rdf:type rdf:JSON to a JSON literal (array). [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js07-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js07-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[11]",
                    "displayName": "invalid_json_literal_(bareword) - Processors must generate an error when deserializing an invalid JSON literal. [Jsonld Json-ld fromrdf negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js08-in.nq",
                    "resultUri": "invalid JSON literal"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[12]",
                    "displayName": "invalid_json_literal_(invalid_structure) - Processors must generate an error when deserializing an invalid JSON literal. [Jsonld Json-ld fromrdf negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js09-in.nq",
                    "resultUri": "invalid JSON literal"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[13]",
                    "displayName": "rdfdirection:_compoundliteral_with_i18n_literal_with_direction_and_no_language - Does not parse i18n datatype without proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di09-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di09-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[14]",
                    "displayName": "rdfdirection:_i18ndatatype_with_i18n_literal_with_direction_and_language - Parses i18n datatype with proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di06-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di06-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[15]",
                    "displayName": "multiple_types_for_same_subject+property+value - Uniqness of triples should include the value type [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0025-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0025-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[16]",
                    "displayName": "multiple_languages_for_same_subject+property+value - Uniqness of triples should include the value language [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0024-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0024-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[17]",
                    "displayName": "rdfdirection:_i18ndatatype_with_i18n_literal_with_direction_and_no_language - Parses i18n datatype with proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di05-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di05-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[18]",
                    "displayName": "use_native_types_flag_with_values_that_cannot_be_serialized_to_json - useNativeTypes flag being true is disregarded for a value that cannot be serialized into a native JSON value. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0027-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0027-out.jsonld",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: useNativeTypes throws for a non-finite numeric lexical form instead of preserving the typed literal"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[19]",
                    "displayName": "rdfdirection:_i18ndatatype_with_compound_literal_with_direction_and_language - Does not parse compound literal without proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di08-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di08-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[20]",
                    "displayName": "rdfdirection:_i18ndatatype_with_compound_literal_with_direction_and_no_language - Does not parse compound literal without proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di07-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di07-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[21]",
                    "displayName": "triple_with_rdf:first_property_and_rdf:nil_value - Check list generation with rdf:first property and rdf:nil value. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0026-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0026-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[22]",
                    "displayName": "rdfdirection:_null_with_i18n_literal_with_direction_and_language - Does not parse i18n datatype without proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di02-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di02-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[23]",
                    "displayName": "list_with_node_shared_across_graphs_(same_triple_in_different_graphs) - If a list node is used in different graphs, it isn't removed and converted to @list [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0021-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0021-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[24]",
                    "displayName": "list_with_node_shared_across_graphs - An otherwise conformant list with a node shared across different lists does not serialize using @list [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0020-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0020-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[25]",
                    "displayName": "rdfdirection:_null_with_i18n_literal_with_direction_and_no_language - Does not parse i18n datatype without proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di01-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di01-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[26]",
                    "displayName": "triple_with_rdf_nil_subject - Test triple with RDF nil subject [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0023-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0023-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[27]",
                    "displayName": "rdfdirection:_null_with_compound_literal_with_direction_and_language - Does not parse compound literal without proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di04-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di04-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[28]",
                    "displayName": "rdfdirection:_null_with_compound_literal_with_direction_and_no_language - Does not parse compound literal without proper option. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di03-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/di03-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[29]",
                    "displayName": "list_from_duplicate_triples - Duplicate triples for a list node will not prevent @list from being properly generated [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0022-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0022-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[30]",
                    "displayName": "json_literal_(string) - Tests creating property with rdf:type rdf:JSON to a JSON literal (string). [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js10-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js10-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[31]",
                    "displayName": "json_literal_(null) - Tests creating property with rdf:type rdf:JSON to a JSON literal (null). [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js11-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/js11-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[32]",
                    "displayName": "use_native_types_flag_with_nonnative_values - Ensure that useNativeTypes flag being true does not interfere with values that cannot be serialized into a native value. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0028-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0028-out.jsonld",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: useNativeTypes throws for a non-native numeric lexical form instead of preserving the typed literal"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[33]",
                    "displayName": "list_pattern_with_multiple_values_of_rdf:rest - Do not convert list nodes to @list if nodes contain more than one value for rdf:rest. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0014-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0014-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[34]",
                    "displayName": "@list_containing_multiple_lists - List of lists [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/li02-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/li02-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[35]",
                    "displayName": "@list_containing_empty_@list - List of lists [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/li01-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/li01-out.jsonld",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: nested empty RDF lists trigger a null dereference during fromRdf conversion"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[36]",
                    "displayName": "list_pattern_with_multiple_values_of_rdf:first - Do not convert list nodes to @list if nodes contain more than one value for rdf:first. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0013-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0013-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[37]",
                    "displayName": "list_pattern_with_type_rdf:list - List nodes may have a rdf:type rdf:List. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0016-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0016-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[38]",
                    "displayName": "list_pattern_with_iri_rdf:rest - Do not convert lists to @list if a list node's rdf:rest is an IRI. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0015-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0015-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[39]",
                    "displayName": "t0008_as_interpreted_for_11 - List of lists [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/li03-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/li03-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[40]",
                    "displayName": "list_pattern_without_rdf:nil - Do not convert lists that are not terminated by rdf:nil to @list. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0010-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0010-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[41]",
                    "displayName": "list_pattern_with_cycles - Detect lists containing cycles and do not convert them to @list. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0012-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0012-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[42]",
                    "displayName": "list_pattern_with_extra_properties - If additional properties are associated to a list node, the list is only partially converted to @list. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0011-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0011-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[43]",
                    "displayName": "use_native_types_flag_set_to_true - Literals with datatype xsd:boolean, xsd:integer, and xsd:double are serialized using native scalar values [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0018-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0018-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[44]",
                    "displayName": "remove_duplicate_triples - Equivalent triples are used only once [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0017-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0017-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[45]",
                    "displayName": "use_rdf:type_flag_set_to_false - Setting useRdfType to true causes an rdf:type predicate to be treated like a normal property, not @type [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0019-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0019-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[46]",
                    "displayName": "bnodes_and_references - BNode name generation and references between resources. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0003-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0003-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[47]",
                    "displayName": "native_types - Do not use native datatypes for xsd:boolean, xsd:integer, and xsd:double by default. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0002-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0002-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[48]",
                    "displayName": "document_with_list - Uses a named graph containing a list. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0005-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0005-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[49]",
                    "displayName": "lists - Multiple lists with different types of element. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0004-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0004-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[50]",
                    "displayName": "object_lists - Tests generation using different types of objects. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0001-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0001-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[51]",
                    "displayName": "graph_with_multiple_named_graphs - Testing @graph recursion. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0007-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0007-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[52]",
                    "displayName": "two_graphs_having_same_subject_but_different_values - Ensure that properties and list elements aren't confused between graphs. [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0006-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0006-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[53]",
                    "displayName": "list_conversion_with_iri_nodes - Preserve IRI list nodes (i.e., not blank nodes) when converting to @list [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0009-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0009-out.jsonld"
                },
                {
                    "name": "rdf11JsonldFromRdfTests()[54]",
                    "displayName": "list_conversion - Conversion of lists of lists (the triples in the input are only partially ordered on purpose (1.0 semantics) [Jsonld Json-ld fromrdf positive evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0008-in.nq",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/fromRdf/0008-out.jsonld",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: fromRdf applies JSON-LD 1.1 nested-list conversion to the JSON-LD 1.0 ordering case"
                }
            ]
        },
        {
            "id": "jsonld-tordf",
            "name": "JSON-LD 1.1 (toRdf)",
            "total": 467,
            "passed": 457,
            "failed": 0,
            "skipped": 10,
            "passRate": 97.86,
            "durationMs": 12693,
            "tests": [
                {
                    "name": "rdf11JsonldToRdfTests()[1]",
                    "displayName": "literal_with_dquote - literal with dquote \"x\"y\" from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt07-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[2]",
                    "displayName": "literal_with_2_dquotes - literal with 2 dquotes \"\"\"a\"\"b\"\"\" from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt08-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[3]",
                    "displayName": "literal_with_reverse_solidus2 - REVERSE SOLIDUS at end of literal from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt09-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[4]",
                    "displayName": "literal_ascii_boundaries - literal_ascii_boundaries '\\x00\\x26\\x28...' from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt01-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[5]",
                    "displayName": "literal_with_utf8_boundaries - literal_with_UTF8_boundaries '\\x80\\x7ff\\x800\\xfff...' from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt02-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[6]",
                    "displayName": "literal_all_controls - literal_all_controls '\\x00\\x01\\x02\\x03\\x04...' from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt03-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[7]",
                    "displayName": "literal_all_punctuation - literal_all_punctuation '!\"#$%&()...' from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt04-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[8]",
                    "displayName": "literal_with_squote - literal with squote \"x'y\" from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt05-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[9]",
                    "displayName": "literal_with_2_squotes - literal with 2 squotes \"x''y\" from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt06-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[10]",
                    "displayName": "literal_with_character_tabulation - literal with CHARACTER TABULATION from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt10-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[11]",
                    "displayName": "literal_with_backspace - literal with BACKSPACE from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt11-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[12]",
                    "displayName": "literal_with_line_feed - literal with LINE FEED from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt12-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[13]",
                    "displayName": "literal_with_carriage_return - literal with CARRIAGE RETURN from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt13-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[14]",
                    "displayName": "literal_with_form_feed - literal with FORM FEED from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt14-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[15]",
                    "displayName": "literal_with_reverse_solidus - literal with REVERSE SOLIDUS from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt15-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[16]",
                    "displayName": "literal_with_numeric_escape4 - literal with numeric escape4 \\u from N-Triples [Jsonld Json-ld positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/nt16-in.jsonld"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[17]",
                    "displayName": "adds_@id_to_object_not_having_an_@id - Expansion using @container: @id [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m001-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m001-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[18]",
                    "displayName": "language_map_with_@none - index on @language [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m009-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m009-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[19]",
                    "displayName": "when_type_is_in_a_type_map - scoped context on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m008-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m008-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[20]",
                    "displayName": "adds_document_expanded_@type_to_object - Expansion using @container: @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m007-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m007-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[21]",
                    "displayName": "adds_vocabulary_expanded_@type_to_object - Expansion using @container: @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m006-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m006-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[22]",
                    "displayName": "adds_expanded_@id_to_object - Expansion using @container: @id [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m005-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m005-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[23]",
                    "displayName": "prepends_@type_in_object_already_having_an_@type - Expansion using @container: @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m004-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m004-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[24]",
                    "displayName": "adds_@type_to_object_not_having_an_@type - Expansion using @container: @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m003-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m003-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[25]",
                    "displayName": "retains_@id_in_object_already_having_an_@id - Expansion using @container: @id [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m002-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m002-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[26]",
                    "displayName": "type_map_with_alias_of_@none - index on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m012-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m012-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[27]",
                    "displayName": "id_map_with_@none - index on @id [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m011-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m011-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[28]",
                    "displayName": "language_map_with_alias_of_@none - index on @language [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m010-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m010-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[29]",
                    "displayName": "string_value_of_type_map_expands_to_node_reference_with_@type:_@vocab - index on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m019-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m019-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[30]",
                    "displayName": "string_value_of_type_map_expands_to_node_reference_with_@type:_@id - index on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m018-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m018-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[31]",
                    "displayName": "string_value_of_type_map_expands_to_node_reference - index on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m017-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m017-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[32]",
                    "displayName": "graph_id_index_map_with_aliased_@none - index on @graph and @id with @none [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m016-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m016-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[33]",
                    "displayName": "graph_id_index_map_with_aliased_@none - index on @graph and @id with @none [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m015-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m015-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[34]",
                    "displayName": "graph_index_map_with_alias_@none - index on @graph and @index [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m014-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m014-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[35]",
                    "displayName": "graph_index_map_with_@none - index on @graph and @index [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m013-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m013-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[36]",
                    "displayName": "string_value_of_type_map_must_not_be_a_literal - index on @type [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/m020-in.jsonld",
                    "resultUri": "invalid type mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[37]",
                    "displayName": "overriding_a_term - Expansion using a scoped context uses term scope for selecting proper term [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c002-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c002-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[38]",
                    "displayName": "property_and_value_with_different_terms_mapping_to_the_same_expanded_property - Expansion using a scoped context uses term scope for selecting proper term [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c003-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c003-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[39]",
                    "displayName": "adding_new_term - Expansion using a scoped context uses term scope for selecting proper term [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c001-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c001-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[40]",
                    "displayName": "adding_new_term - scoped context on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c006-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c006-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[41]",
                    "displayName": "overriding_a_term - scoped context on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c007-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c007-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[42]",
                    "displayName": "deep_@context_affects_nested_nodes - Expansion using a scoped context uses term scope for selecting proper term [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c004-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c004-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[43]",
                    "displayName": "scoped_context_layers_on_intemediate_contexts - Expansion using a scoped context uses term scope for selecting proper term [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c005-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c005-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[44]",
                    "displayName": "alias_of_@type - scoped context on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c008-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c008-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[45]",
                    "displayName": "deep_@typescoped_@context_does_not_affect_nested_nodes - scoped context on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c009-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c009-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[46]",
                    "displayName": "expands_input_using_aliased_@nest - Expansion using @nest [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n002-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n002-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[47]",
                    "displayName": "expands_input_using_@nest - Expansion using @nest [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n001-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n001-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[48]",
                    "displayName": "multiple_keys_may_mapping_to_@type_when_nesting - Expansion using @nest [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n008-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n008-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[49]",
                    "displayName": "a_nest_of_arrays - Expansion using @nest [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n007-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n007-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[50]",
                    "displayName": "arrays_of_nested_values - Expansion using @nest [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n006-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n006-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[51]",
                    "displayName": "nested_nested_containers - Expansion using @nest [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n005-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n005-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[52]",
                    "displayName": "scoped_context_layers_on_intemediate_contexts - scoped context on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c010-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c010-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[53]",
                    "displayName": "appends_nested_values_from_all_@nest_aliases_in_term_order - Expansion using @nest [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n004-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n004-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[54]",
                    "displayName": "appends_nested_values_when_property_at_base_and_nested - Expansion using @nest [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n003-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/n003-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[55]",
                    "displayName": "type_maps_use_scoped_context_from_type_index_and_not_scoped_context_from_containing - scoped context on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c013-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c013-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[56]",
                    "displayName": "typescoped_context_nullification - type-scoped context nullification [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c014-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c014-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[57]",
                    "displayName": "orders_@type_terms_when_applying_scoped_contexts - scoped context on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c011-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c011-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[58]",
                    "displayName": "deep_propertyterm_scoped_@context_in_@typescoped_@context_affects_nested_nodes - scoped context on @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c012-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c012-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[59]",
                    "displayName": "multiple_typescoped_contexts_are_properly_reverted - multiple type-scoped contexts are property reverted [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c017-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c017-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[60]",
                    "displayName": "multiple_typescoped_types_resolved_against_previous_context - multiple type-scoped types resolved against previous context [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c018-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c018-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[61]",
                    "displayName": "typescoped_base - type-scoped base [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c015-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c015-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[62]",
                    "displayName": "typescoped_vocab - type-scoped vocab [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c016-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c016-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[63]",
                    "displayName": "typescoped_context_with_multiple_property_scoped_terms - type-scoped context with multiple property scoped terms [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c019-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c019-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[64]",
                    "displayName": "invalid_keyword_in_term_definition - Verifies that an exception is raised on expansion when a invalid term definition is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/ec01-in.jsonld",
                    "resultUri": "invalid term definition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[65]",
                    "displayName": "term_definition_on_@type_with_empty_map - Verifies that an exception is raised if @type is defined as a term with an empty map [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/ec02-in.jsonld",
                    "resultUri": "keyword redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[66]",
                    "displayName": "transform_json_literal_without_expanding_contents - Tests transforming JSON literal does not expand terms inside json. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js14-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js14-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[67]",
                    "displayName": "transform_json_literal_with_wierd_canonicalization - Tests transforming JSON literal with wierd canonicalization. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js13-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js13-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[68]",
                    "displayName": "transform_json_literal_with_value_canonicalization - Tests transforming JSON literal with value canonicalization. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js12-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js12-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[69]",
                    "displayName": "transform_json_literal_with_unicode_canonicalization - Tests transforming JSON literal with unicode canonicalization. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js11-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js11-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[70]",
                    "displayName": "transform_json_literal_with_structural_canonicalization - Tests transforming JSON literal with structural canonicalization. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js10-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js10-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[71]",
                    "displayName": "transform_json_literal_with_aliased_@type - Tests transforming JSON literal with aliased @type. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js19-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js19-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[72]",
                    "displayName": "transform_json_literal_(null) - Tests transforming property with @type @json to a JSON literal (null). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js18-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js18-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[73]",
                    "displayName": "transform_json_literal_(string) - Tests transforming property with @type @json to a JSON literal (string). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js17-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js17-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[74]",
                    "displayName": "transform_json_literal_aleady_in_expanded_form_with_aliased_keys - Tests transforming JSON literal in expanded form with aliased keys in value object. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js16-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js16-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[75]",
                    "displayName": "transform_json_literal_aleady_in_expanded_form - Tests transforming JSON literal in expanded form. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js15-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js15-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[76]",
                    "displayName": "simple_language_map_with_term_direction - Term selection with language maps and @direction. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di04-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di04-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[77]",
                    "displayName": "simple_language_mapwith_overriding_term_direction - Term selection with language maps and @direction. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di05-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di05-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[78]",
                    "displayName": "simple_language_mapwith_overriding_null_direction - Term selection with language maps and @direction. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di06-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di06-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[79]",
                    "displayName": "transform_json_literal_(empty_array) - Tests transforming property with @type @json to a JSON literal (empty array). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js23-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js23-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[80]",
                    "displayName": "transform_json_literal_(null)_aleady_in_expanded_form - Tests transforming property with @type @json to a JSON literal (null). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js22-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js22-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[81]",
                    "displayName": "simple_language_map_with_mismatching_term_direction - Term selection with language maps and @direction. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di07-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di07-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[82]",
                    "displayName": "transform_json_literal_with_@context - Tests transforming JSON literal with a @context. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js21-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js21-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[83]",
                    "displayName": "transform_json_literal_with_aliased_@value - Tests transforming JSON literal with aliased @value. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js20-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js20-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[84]",
                    "displayName": "expand_string_using_default_and_term_directions - Strings are coerced to have @direction based on default and term direction. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di01-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di01-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[85]",
                    "displayName": "expand_string_using_default_and_term_directions_and_languages - Strings are coerced to have @direction based on default and term direction. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di02-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di02-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[86]",
                    "displayName": "expand_list_values_with_@direction - List values where the term has @direction are used in expansion. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di03-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di03-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[87]",
                    "displayName": "@direction_must_be_one_of_ltr_or_rtl - Generate an error if @direction has illegal value. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di08-in.jsonld",
                    "resultUri": "invalid base direction"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[88]",
                    "displayName": "rdfdirection:_i18ndatatype_with_direction_and_no_language - Generates i18n datatype from literal with direction with option. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di09-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di09-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[89]",
                    "displayName": "@import_overflow - Processors must detect source contexts that include @import. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 23,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so03-in.jsonld",
                    "resultUri": "invalid context entry"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[90]",
                    "displayName": "@import_must_be_a_string - @import must be a string. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so02-in.jsonld",
                    "resultUri": "invalid @import value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[91]",
                    "displayName": "@import_is_invalid_in_10 - @import is invalid in 1.0. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so01-in.jsonld",
                    "resultUri": "invalid context entry"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[92]",
                    "displayName": "override_term_defined_in_sourced_context - The containing context is merged into the source context. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 24,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so08-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so08-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[93]",
                    "displayName": "protect_all_terms_in_sourced_context - A protected context protects all term definitions. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 24,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so07-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[94]",
                    "displayName": "@propagate:_false_on_propertyscoped_context_with_@import - property-scoped context with @propagate: false do not survive node-objects (with @import) [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 48,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so06-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so06-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[95]",
                    "displayName": "@propagate:_true_on_typescoped_context_with_@import - type-scoped context with @propagate: true survive node-objects (with @import) [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 47,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so05-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so05-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[96]",
                    "displayName": "rdfdirection:_i18ndatatype_with_direction_and_language - Generates i18n datatype from literal with direction with option. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di10-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di10-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[97]",
                    "displayName": "rdfdirection:_compoundliteral_with_direction_and_no_language - Generates i18n datatype from literal with direction with option. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di11-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di11-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[98]",
                    "displayName": "rdfdirection:_compoundliteral_with_direction_and_language - Generates compound literal from literal with direction with option. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di12-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/di12-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[99]",
                    "displayName": "override_@vocab_defined_in_sourced_context - The containing context is merged into the source context. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 32,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so09-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so09-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[100]",
                    "displayName": "@import_can_only_reference_a_single_context - @import can only reference a single context. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 27,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so13-in.jsonld",
                    "resultUri": "invalid remote context"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[101]",
                    "displayName": "@import_may_not_be_used_in_an_imported_context - @import only valid within a term definition. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 24,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so12-in.jsonld",
                    "resultUri": "invalid context entry"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[102]",
                    "displayName": "override_protected_terms_in_sourced_context - The containing context is merged into the source context. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 25,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so11-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so11-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[103]",
                    "displayName": "protect_terms_in_sourced_context - The containing context is merged into the source context. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 26,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/so10-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[104]",
                    "displayName": "error_if_attempting_to_add_property_to_value_object_for_propertyvalued_index - Expanding index maps where index is a property. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi05-in.jsonld",
                    "resultUri": "invalid value object"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[105]",
                    "displayName": "error_if_@index_is_not_a_string_for_propertyvalued_index - Expanding index maps where index is a property. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi04-in.jsonld",
                    "resultUri": "invalid term definition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[106]",
                    "displayName": "propertyvalued_index_appends_to_property_value,_instead_of_@index_(value) - Expanding index maps where index is a property. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi07-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi07-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[107]",
                    "displayName": "propertyvalued_index_expands_to_property_value,_instead_of_@index_(value) - Expanding index maps where index is a property. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi06-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi06-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[108]",
                    "displayName": "propertyvalued_index_appends_to_property_value,_instead_of_@index_(node) - Expanding index maps where index is a property. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 8,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi09-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi09-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[109]",
                    "displayName": "propertyvalued_index_expands_to_property_value,_instead_of_@index_(node) - Expanding index maps where index is a property. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 9,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi08-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi08-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[110]",
                    "displayName": "error_if_@version_is_jsonld10_for_propertyvalued_index - Expanding index maps where index is a property. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi01-in.jsonld",
                    "resultUri": "invalid term definition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[111]",
                    "displayName": "error_if_@index_is_a_keyword_for_propertyvalued_index - Expanding index maps where index is a property. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi03-in.jsonld",
                    "resultUri": "invalid term definition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[112]",
                    "displayName": "error_if_@container_does_not_include_@index_for_propertyvalued_index - Expanding index maps where index is a property. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi02-in.jsonld",
                    "resultUri": "invalid term definition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[113]",
                    "displayName": "propertyvalued_index_does_not_output_property_for_@none - Expanding index maps where index is a property. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi10-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi10-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[114]",
                    "displayName": "propertyvalued_index_adds_property_to_graph_object - Expanding index maps where index is a property. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi11-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pi11-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[115]",
                    "displayName": "jsonapi_example - Tests included blocks. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 7,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in06-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in06-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[116]",
                    "displayName": "error_if_@included_value_is_a_string - Tests included blocks. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in07-in.jsonld",
                    "resultUri": "invalid @included value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[117]",
                    "displayName": "included_containing_@included - Tests included blocks. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in04-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in04-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[118]",
                    "displayName": "property_value_with_@included - Tests included blocks. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in05-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in05-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[119]",
                    "displayName": "basic_included_object - Tests included blocks. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in02-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in02-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[120]",
                    "displayName": "multiple_properties_mapping_to_@included_are_folded_together - Tests included blocks. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in03-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in03-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[121]",
                    "displayName": "basic_included_array - Tests included blocks. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in01-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in01-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[122]",
                    "displayName": "error_if_@included_value_is_a_value_object - Tests included blocks. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in08-in.jsonld",
                    "resultUri": "invalid @included value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[123]",
                    "displayName": "error_if_@included_value_is_a_list_object - Tests included blocks. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/in09-in.jsonld",
                    "resultUri": "invalid @included value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[124]",
                    "displayName": "@type:_@none_expands_strings_as_value_objects - @type: @none leaves inputs other than strings alone [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/tn02-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/tn02-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[125]",
                    "displayName": "@type:_@none_is_illegal_in_10 - @type: @none is illegal in json-ld-1.0. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/tn01-in.jsonld",
                    "resultUri": "invalid type mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[126]",
                    "displayName": "reset_the_default_language - RDF version of expand-0041 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e041-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e041-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[127]",
                    "displayName": "language_and_index_expansion_on_nonobjects - RDF version of expand-0040 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e040-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e040-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[128]",
                    "displayName": "toplevel_value_objects_are_removed - RDF version of expand-0045 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e045-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e045-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[129]",
                    "displayName": "ensure_index_maps_use_language_mapping - RDF version of expand-0044 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e044-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e044-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[130]",
                    "displayName": "using_reverse_properties_inside_a_@reversecontainer - RDF version of expand-0043 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e043-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e043-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[131]",
                    "displayName": "expanding_reverse_properties - RDF version of expand-0042 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e042-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e042-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[132]",
                    "displayName": "using_strings_as_value_of_a_reverse_property - RDF version of expand-0049 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e049-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e049-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[133]",
                    "displayName": "test_prefix_defined_in_@context - Generate an IRI using a prefix defined within an @context. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0008-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0008-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[134]",
                    "displayName": "iri_resolution_(9) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0129-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0129-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[135]",
                    "displayName": "tests_'a'_generates_rdf:type_and_object_is_implicit_iri - Verify that 'a' is an alias for rdf:type, and the object is created as an IRI. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0007-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0007-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[136]",
                    "displayName": "iri_resolution_(8) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0128-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0128-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[137]",
                    "displayName": "terms_are_ignored_in_@id - RDF version of expand-0048 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e048-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e048-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[138]",
                    "displayName": "typed_literal - Tests creation of a literal with a datatype. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0006-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0006-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[139]",
                    "displayName": "iri_resolution_(7) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0127-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0127-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[140]",
                    "displayName": "remove_freefloating_set_values_and_lists - RDF version of expand-0047 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e047-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e047-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[141]",
                    "displayName": "extended_character_set_literal - Tests that a literal may be created using extended characters. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0005-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0005-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[142]",
                    "displayName": "iri_resolution_(6) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0126-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0126-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[143]",
                    "displayName": "freefloating_nodes_are_removed - RDF version of expand-0046 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e046-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e046-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[144]",
                    "displayName": "test_using_an_empty_suffix - An empty suffix may be used. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0009-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0009-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[145]",
                    "displayName": "iri_resolution_(12) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0132-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0132-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[146]",
                    "displayName": "test_object_processing_defines_object_with_implicit_bnode - If no @ is specified, a BNode is created, and will be used as the object of an enclosing property. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0011-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0011-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[147]",
                    "displayName": "iri_resolution_(11) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0131-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0131-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[148]",
                    "displayName": "test_object_processing_defines_object - A property referencing an associative array gets object from subject of array. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0010-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0010-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[149]",
                    "displayName": "iri_resolution_(10) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0130-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0130-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[150]",
                    "displayName": "creation_of_a_list_with_multiple_elements - Tests that list with multiple elements. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0015-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0015-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[151]",
                    "displayName": "creation_of_a_list_with_single_element - Tests that @list generates a list. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0014-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0014-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[152]",
                    "displayName": "creation_of_an_empty_list - Tests that @list: [] generates an empty list. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0013-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0013-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[153]",
                    "displayName": "reverse_term_with_property_based_indexed_container - Expanding a reverse term using @container: @index and @index set to a property (from expand#t0131) [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0133-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0133-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[154]",
                    "displayName": "multiple_objects_for_a_single_property - Tests that Multiple Objects are for a Single Property using array syntax. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0012-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0012-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[155]",
                    "displayName": "coerced_@list_containing_deep_arrays - List of lists [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li07-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li07-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[156]",
                    "displayName": "coerced_@list_containing_an_empty_array - List of lists [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li06-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li06-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[157]",
                    "displayName": "coerced_@list_containing_an_array - List of lists [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li05-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li05-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[158]",
                    "displayName": "@list_containing_empty_@list_(with_coercion) - List of lists [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li04-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li04-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[159]",
                    "displayName": "@list_containing_@list_(with_coercion) - List of lists [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li03-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li03-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[160]",
                    "displayName": "@list_containing_empty_@list - List of lists. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li02-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li02-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[161]",
                    "displayName": "@list_containing_@list - List of lists. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li01-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li01-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[162]",
                    "displayName": "@vocabrelative_iris_in_term_definitions - RDF version of expand-0052 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e052-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e052-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[163]",
                    "displayName": "expansion_of_keyword_aliases_in_term_definitions - RDF version of expand-0051 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e051-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e051-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[164]",
                    "displayName": "term_definitions_with_prefix_separate_from_prefix_definitions - RDF version of expand-0050 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e050-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e050-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[165]",
                    "displayName": "use_terms_with_@type:_@vocab_but_not_with_@type:_@id - RDF version of expand-0056 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e056-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e056-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[166]",
                    "displayName": "expand_@vocabrelative_term_with_@type:_@vocab - RDF version of expand-0055 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e055-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e055-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[167]",
                    "displayName": "coerced_@list_containing_multiple_lists - List of lists [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li09-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li09-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[168]",
                    "displayName": "expand_term_with_@type:_@vocab - RDF version of expand-0054 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e054-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e054-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[169]",
                    "displayName": "coerced_@list_containing_deep_empty_arrays - List of lists [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li08-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li08-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[170]",
                    "displayName": "expand_absolute_iri_with_@type:_@vocab - RDF version of expand-0053 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e053-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e053-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[171]",
                    "displayName": "produce_generalized_rdf_flag - Triples with blank node predicates are not dropped if the produce generalized RDF flag is true. [Jsonld Json-ld positive evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0118-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0118-out.nq",
                    "skipReason": "OPTIONAL_UNSUPPORTED: generalized RDF permits blank-node predicates, which the Corese RDF 1.1 model cannot represent"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[172]",
                    "displayName": "reset_@vocab_by_setting_it_to_null - RDF version of expand-0059 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e059-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e059-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[173]",
                    "displayName": "dataset_from_node_with_embedded_named_graph_(bnode) - Embedding @graph in a node creates a named graph. Graph name is created if there is no subject [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0117-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0117-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[174]",
                    "displayName": "dataset_from_node_with_embedded_named_graph - Embedding @graph in a node creates a named graph [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0116-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0116-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[175]",
                    "displayName": "expand_compact_iri_with_@type:_@vocab - RDF version of expand-0058 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e058-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e058-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[176]",
                    "displayName": "dataset_with_a_default_and_two_named_graphs - Dataset with a default and two named graphs (IRI and BNode) [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0115-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0115-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[177]",
                    "displayName": "expand_relative_iri_with_@type:_@vocab - RDF version of expand-0057 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e057-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e057-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[178]",
                    "displayName": "blank_nodes_with_reverse_properties - Proper (re-)labeling of blank nodes if used with reverse properties. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0119-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0119-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[179]",
                    "displayName": "coerced_@list_containing_mixed_list_values - List of lists [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li10-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li10-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[180]",
                    "displayName": "iri_resolution_(1) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 9,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0121-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0121-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[181]",
                    "displayName": "iri_resolution_(0) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 7,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0120-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0120-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[182]",
                    "displayName": "literal_with_language_tag - Tests that a plain literal is created with a language tag. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0004-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0004-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[183]",
                    "displayName": "iri_resolution_(5) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0125-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0125-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[184]",
                    "displayName": "iri_resolution_(4) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0124-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0124-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[185]",
                    "displayName": "default_subject_is_bnode - Tests that a BNode is created if no explicit subject is set. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0003-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0003-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[186]",
                    "displayName": "plain_literal_with_curie_from_default_context - Tests generation of a triple using a CURIE defined in the default context. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0002-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0002-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[187]",
                    "displayName": "iri_resolution_(3) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0123-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0123-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[188]",
                    "displayName": "iri_resolution_(2) - IRI resolution according to RFC3986. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 6,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0122-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0122-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[189]",
                    "displayName": "plain_literal_with_uris - Tests generation of a triple using full URIs and a plain literal. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0001-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0001-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[190]",
                    "displayName": "list_with_null_@base - Tests list elements expanded to IRIs with a null @base. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li14-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li14-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[191]",
                    "displayName": "list_with_empty_@base - Tests list elements expanded to IRIs with an empty @base. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li13-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li13-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[192]",
                    "displayName": "list_with_bad_@base - Tests list elements expanded to IRIs with a bad @base. [Jsonld Json-ld positive evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li12-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li12-out.nq",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: rejects the malformed @base before applying the W3C list expansion behavior"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[193]",
                    "displayName": "list_with_good_@base - Tests list elements expanded to IRIs with a good @base. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li11-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/li11-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[194]",
                    "displayName": "expand_a_reverse_property_with_an_indexcontainer - RDF version of expand-0063 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e063-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e063-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[195]",
                    "displayName": "various_relative_iris_with_with_@base - RDF version of expand-0062 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e062-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e062-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[196]",
                    "displayName": "@nest_must_not_have_a_string_value - container: @nest [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/en01-in.jsonld",
                    "resultUri": "invalid @nest value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[197]",
                    "displayName": "@nest_must_not_have_a_boolen_value - Transparent Nesting [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/en02-in.jsonld",
                    "resultUri": "invalid @nest value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[198]",
                    "displayName": "coercing_native_types_to_arbitrary_datatypes - RDF version of expand-0061 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e061-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e061-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[199]",
                    "displayName": "overwrite_document_base_with_@base_and_reset_it_again - RDF version of expand-0060 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e060-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e060-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[200]",
                    "displayName": "@nest_must_not_have_a_numeric_value - Transparent Nesting [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/en03-in.jsonld",
                    "resultUri": "invalid @nest value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[201]",
                    "displayName": "prefix:://sufffix_not_a_compact_iri - RDF version of expand-0067 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e067-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e067-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[202]",
                    "displayName": "use_@vocab_to_expand_keys_in_reversemaps - RDF version of expand-0066 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e066-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e066-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[203]",
                    "displayName": "keys_that_are_not_mapped_to_an_iri_in_a_reversemap_are_dropped - RDF version of expand-0065 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e065-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e065-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[204]",
                    "displayName": "expand_reverse_property_whose_values_are_unlabeled_blank_nodes - RDF version of expand-0064 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e064-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e064-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[205]",
                    "displayName": "compact_iri_as_term_with_type_mapping - RDF version of expand-0069 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e069-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e069-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[206]",
                    "displayName": ":sufffix_not_a_compact_iri - RDF version of expand-0068 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e068-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e068-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[207]",
                    "displayName": "@nest_must_not_have_a_value_object_value - Transparent Nesting [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/en04-in.jsonld",
                    "resultUri": "invalid @nest value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[208]",
                    "displayName": "does_not_allow_a_keyword_other_than_@nest_for_the_value_of_@nest - Transparent Nesting [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/en05-in.jsonld",
                    "resultUri": "invalid @nest value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[209]",
                    "displayName": "does_not_allow_@nest_with_@reverse - Transparent Nesting [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/en06-in.jsonld",
                    "resultUri": "invalid reverse property"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[210]",
                    "displayName": "dataset_with_a_iri_named_graph - Basic use of creating a named graph using a BNode name [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0114-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0114-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[211]",
                    "displayName": "dataset_with_a_iri_named_graph - Basic use of creating a named graph using an IRI name [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0113-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0113-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[212]",
                    "displayName": "redefine_compact_iri_with_itself - RDF version of expand-0070 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e070-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e070-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[213]",
                    "displayName": "@id_not_first_property - Objects are unordered, so serialized node definition containing @id may have @id at the end of the node definition [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e074-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e074-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[214]",
                    "displayName": "@context_not_first_property - Objects are unordered, so serialized node definition containing @context may have @context at the end of the node definition [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e073-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e073-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[215]",
                    "displayName": "redefine_term_using_@vocab,_not_itself - RDF version of expand-0072 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e072-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e072-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[216]",
                    "displayName": "redefine_terms_looking_like_compact_iris - RDF version of expand-0071 [Jsonld Json-ld positive evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e071-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e071-out.nq",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: rejects a valid JSON-LD 1.0 redefinition of a compact-IRI-shaped term"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[217]",
                    "displayName": "multiple_reverse_properties - Use of multiple reverse properties [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e078-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e078-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[218]",
                    "displayName": "expandcontext_option - Use of the expandContext option to expand the input document [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 30,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e077-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e077-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[219]",
                    "displayName": "base_option_overrides_document_location - Use of the base option overrides the document location [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e076-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e076-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[220]",
                    "displayName": "@vocab_as_blank_node_identifier - Use @vocab to map all properties to blank node identifiers [Jsonld Json-ld positive evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e075-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e075-out.nq",
                    "skipReason": "OPTIONAL_UNSUPPORTED: a blank-node @vocab produces predicates outside the Corese RDF 1.1 data model"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[221]",
                    "displayName": "expand_@graph_container - Use of @graph containers [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e079-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e079-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[222]",
                    "displayName": "creates_an_@graph_container_if_value_is_a_graph - Don't double-expand an already expanded graph [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e081-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e081-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[223]",
                    "displayName": "expand_[@graph,_@set]_container - Use of [@graph, @set] containers [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e080-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e080-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[224]",
                    "displayName": "expand_[@graph,_@id]_container - Use of @graph containers with @id [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e085-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e085-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[225]",
                    "displayName": "invalid_container_mapping - Verifies that an exception is raised on expansion when a invalid container mapping is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/em01-in.jsonld",
                    "resultUri": "invalid container mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[226]",
                    "displayName": "do_not_expand_[@graph,_@index]_container_if_value_is_a_graph - Does not create a new graph object if indexed value is already a graph object [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e084-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e084-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[227]",
                    "displayName": "expand_[@graph,_@index,_@set]_container - Use of @graph containers with @index and @set [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e083-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e083-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[228]",
                    "displayName": "expand_[@graph,_@index]_container - Use of @graph containers with @index [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e082-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e082-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[229]",
                    "displayName": "empty_@base_applied_to_the_base_option - Use of an empty @base is applied to the base option [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e089-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e089-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[230]",
                    "displayName": "do_not_expand_native_values_to_iris - Value Expansion does not expand native values, such as booleans, to a node object [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e088-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e088-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[231]",
                    "displayName": "do_not_expand_[@graph,_@id]_container_if_value_is_a_graph - Does not create a new graph object if indexed value is already a graph object [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e087-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e087-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[232]",
                    "displayName": "expand_[@graph,_@id,_@set]_container - Use of @graph containers with @id and @set [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e086-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e086-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[233]",
                    "displayName": "various_relative_iris_as_properties_with_with_@vocab:_'' - Pathological relative property IRIs [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e092-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e092-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[234]",
                    "displayName": "relative_and_absolute_@base_overrides_base_option_and_document_location - Use of a relative and absolute @base overrides base option and document location [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e091-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e091-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[235]",
                    "displayName": "relative_@base_overrides_base_option_and_document_location - Use of a relative @base overrides base option and document location [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e090-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e090-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[236]",
                    "displayName": "expand_[@graph,_@index]_container_(multiple_indexed_objects) - Use of @graph containers with @index [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e096-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e096-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[237]",
                    "displayName": "creates_an_@graph_container_if_value_is_a_graph_(multiple_objects) - Don't double-expand an already expanded graph [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e095-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e095-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[238]",
                    "displayName": "expand_[@graph,_@set]_container_(multiple_objects) - Use of [@graph, @set] containers [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e094-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e094-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[239]",
                    "displayName": "expand_@graph_container_(multiple_objects) - Use of @graph containers [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e093-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e093-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[240]",
                    "displayName": "expand_[@graph,_@id]_container_(multiple_objects) - Use of @graph containers with @id [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e099-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e099-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[241]",
                    "displayName": "do_not_expand_[@graph,_@index]_container_if_value_is_a_graph_(multiple_objects) - Does not create a new graph object if indexed value is already a graph object [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e098-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e098-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[242]",
                    "displayName": "expand_[@graph,_@index,_@set]_container_(multiple_objects) - Use of @graph containers with @index and @set [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e097-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e097-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[243]",
                    "displayName": "triples_including_invalid_predicate_iris_are_rejected - ToRdf emits only well-formed statements. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf02-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf02-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[244]",
                    "displayName": "transform_json_literal_(double) - Tests transforming property with @type @json to a JSON literal (double). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js03-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js03-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[245]",
                    "displayName": "triples_including_invalid_object_iris_are_rejected - ToRdf emits only well-formed statements. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf03-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf03-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[246]",
                    "displayName": "transform_json_literal_(boolean_false) - Tests transforming property with @type @json to a JSON literal (boolean false). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js02-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js02-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[247]",
                    "displayName": "triples_including_invalid_type_iris_are_rejected - ToRdf emits only well-formed statements. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf04-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf04-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[248]",
                    "displayName": "transform_json_literal_(boolean_true) - Tests transforming property with @type @json to a JSON literal (boolean true). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js01-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js01-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[249]",
                    "displayName": "triples_including_invalid_language_tags_are_rejected - ToRdf emits only well-formed statements. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf05-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf05-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[250]",
                    "displayName": "triples_including_invalid_subject_iris_are_rejected - ToRdf emits only well-formed statements. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf01-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf01-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[251]",
                    "displayName": "transform_json_literal_with_string_canonicalization - Tests transforming JSON literal with string canonicalization. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js09-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js09-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[252]",
                    "displayName": "transform_json_literal_with_array_canonicalization - Tests transforming JSON literal with array canonicalization. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js08-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js08-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[253]",
                    "displayName": "transform_json_literal_(array) - Tests transforming property with @type @json to a JSON literal (array). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js07-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js07-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[254]",
                    "displayName": "transform_json_literal_(object) - Tests transforming property with @type @json to a JSON literal (object). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js06-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js06-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[255]",
                    "displayName": "transform_json_literal_(integer) - Tests transforming property with @type @json to a JSON literal (integer). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js05-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js05-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[256]",
                    "displayName": "transform_json_literal_(doublezero) - Tests transforming property with @type @json to a JSON literal (double-zero). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js04-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/js04-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[257]",
                    "displayName": "triples_including_invalid_graph_name_iris_are_rejected - ToRdf emits only well-formed statements. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf07-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/wf07-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[258]",
                    "displayName": "typescoped_value - type-scoped value [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c020-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c020-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[259]",
                    "displayName": "typescoped_value_mix - type-scoped value mix [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c021-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c021-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[260]",
                    "displayName": "typescoped_+_propertyscoped_+_values_evaluates_against_previous_context - type-scoped + property-scoped + values evaluates against previous context [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c024-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c024-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[261]",
                    "displayName": "typescoped_+_graph_container - type-scoped + graph container [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c025-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c025-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[262]",
                    "displayName": "typescoped_propertyscoped_contexts_including_@type:@vocab - type-scoped property-scoped contexts including @type:@vocab [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c022-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c022-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[263]",
                    "displayName": "composed_typescoped_propertyscoped_contexts_including_@type:@vocab - composed type-scoped property-scoped contexts including @type:@vocab [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c023-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c023-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[264]",
                    "displayName": "@propagate:_false_on_embedded_context - embedded context with @propagate: false do not survive node-objects [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c028-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c028-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[265]",
                    "displayName": "@propagate_is_invalid_in_10 - @propagate is invalid in 1.0 [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c029-in.jsonld",
                    "resultUri": "invalid context entry"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[266]",
                    "displayName": "@propagate:_true_on_typescoped_context - type-scoped context with @propagate: true survive node-objects [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c026-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c026-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[267]",
                    "displayName": "@propagate:_false_on_propertyscoped_context - property-scoped context with @propagate: false do not survive node-objects [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c027-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c027-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[268]",
                    "displayName": "@context_resolutions_respects_relative_urls - URL resolution follows RFC3986 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 76,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c031-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c031-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[269]",
                    "displayName": "unused_embedded_context_with_error - An embedded context which is never used should still be checked. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c032-in.jsonld",
                    "resultUri": "invalid scoped context"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[270]",
                    "displayName": "@propagate_must_be_boolean_valued - @propagate must be boolean valued [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c030-in.jsonld",
                    "resultUri": "invalid @propagate value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[271]",
                    "displayName": "term_scoping_with_embedded_contexts - Terms should make use of @vocab relative to the scope in which the term was defined. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c035-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c035-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[272]",
                    "displayName": "expansion_with_empty_propertyscoped_context - Adding a minimal/empty property-scoped context should not affect expansion of terms defined in the outer scope. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c036-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c036-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[273]",
                    "displayName": "unused_context_with_an_embedded_context_error - An unused context with an embedded context should still be checked. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c033-in.jsonld",
                    "resultUri": "invalid scoped context"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[274]",
                    "displayName": "remote_scoped_context - Scoped contexts may be externally loaded. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 47,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c034-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c034-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[275]",
                    "displayName": "propertyscoped_contexts_which_are_alias_of_@nest - Nesting terms may have property-scoped contexts defined. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c037-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c037-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[276]",
                    "displayName": "bibframe_example_(poormans_inferrence) - Nesting terms may have property-scoped contexts defined. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c038-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/c038-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[277]",
                    "displayName": "expand_[@graph,_@id,_@set]_container_(multiple_objects) - Use of @graph containers with @id and @set [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e100-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e100-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[278]",
                    "displayName": "creates_an_@graph_container_if_value_is_a_graph_(mixed_graph_and_object) - Don't double-expand an already expanded graph [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e104-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e104-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[279]",
                    "displayName": "error_dereferencing_a_remote_context - Verifies that an exception is raised on expansion when a context dereference results in an error [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er04-in.jsonld",
                    "resultUri": "loading remote context failed"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[280]",
                    "displayName": "invalid_remote_context - Verifies that an exception is raised on expansion when a remote context is not an object containing @context [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 22,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er05-in.jsonld",
                    "resultUri": "invalid remote context"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[281]",
                    "displayName": "expand_@graph_container_if_value_is_a_graph_(multiple_graphs) - Does not create a new graph object if indexed value is already a graph object [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e103-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e103-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[282]",
                    "displayName": "expand_@graph_container_if_value_is_a_graph_(multiple_objects) - Does not create a new graph object if indexed value is already a graph object [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e102-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e102-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[283]",
                    "displayName": "invalid_local_context - Verifies that an exception is raised on expansion when a context is not a string or object [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er06-in.jsonld",
                    "resultUri": "invalid local context"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[284]",
                    "displayName": "invalid_base_iri - Verifies that an exception is raised on expansion when a context contains an invalid @base [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er07-in.jsonld",
                    "resultUri": "invalid base IRI"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[285]",
                    "displayName": "do_not_expand_[@graph,_@id]_container_if_value_is_a_graph_(multiple_objects) - Does not create a new graph object if indexed value is already a graph object [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e101-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e101-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[286]",
                    "displayName": "expand_[@graph,_@id]_container_(multiple_ids_and_objects) - Use of @graph containers with @id [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e108-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e108-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[287]",
                    "displayName": "expand_[@graph,_@index]_container_(indexes_with_multiple_objects) - Use of @graph containers with @index [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e107-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e107-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[288]",
                    "displayName": "keywords_cannot_be_aliased_to_other_keywords - Verifies that an exception is raised on expansion when processing an invalid context aliasing a keyword to another keyword [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er01-in.jsonld",
                    "resultUri": "keyword redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[289]",
                    "displayName": "do_not_expand_[@graph,_@id]_container_if_value_is_a_graph_(mixed_graph_and_object) - Does not create a new graph object if indexed value is already a graph object [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e106-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e106-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[290]",
                    "displayName": "a_context_may_not_include_itself_recursively_(direct) - Verifies that an exception is raised on expansion when processing a context referencing itself [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 5827,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er02-in.jsonld",
                    "resultUri": "recursive context inclusion"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[291]",
                    "displayName": "a_context_may_not_include_itself_recursively_(indirect) - Verifies that an exception is raised on expansion when processing a context referencing itself indirectly [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 5596,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er03-in.jsonld",
                    "resultUri": "recursive context inclusion"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[292]",
                    "displayName": "do_not_expand_[@graph,_@index]_container_if_value_is_a_graph_(mixed_graph_and_object) - Does not create a new graph object if indexed value is already a graph object [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e105-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e105-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[293]",
                    "displayName": "iri_expansion_of_fragments_including_':' - Do not treat as absolute IRIs values that look like compact IRIs if they're not absolute [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e109-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e109-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[294]",
                    "displayName": "invalid_vocab_mapping - Verifies that an exception is raised on expansion when a context contains an invalid @vocab mapping [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er08-in.jsonld",
                    "resultUri": "invalid vocab mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[295]",
                    "displayName": "invalid_default_language - Verifies that an exception is raised on expansion when a context contains an invalid @language [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er09-in.jsonld",
                    "resultUri": "invalid default language"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[296]",
                    "displayName": "set_a_term_to_not_be_protected - A term with @protected: false is not protected. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr02-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr02-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[297]",
                    "displayName": "protect_a_term - Check error when overriding a protected term. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr01-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[298]",
                    "displayName": "cyclic_iri_mapping - Verifies that an exception is raised on expansion when a cyclic IRI mapping is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er10-in.jsonld",
                    "resultUri": "cyclic IRI mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[299]",
                    "displayName": "various_relative_iris_as_properties_with_with_relative_@vocab_itself_relative_to_an_existing_vocabulary_base - Pathological relative property IRIs [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e111-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e111-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[300]",
                    "displayName": "various_relative_iris_as_properties_with_with_relative_@vocab - Pathological relative property IRIs [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e110-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e110-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[301]",
                    "displayName": "do_not_protect_term_with_@protected:_false - A protected context does not protect terms with @protected: false. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr04-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[302]",
                    "displayName": "invalid_iri_mapping_(@reverse_not_a_string) - Verifies that an exception is raised on expansion when a invalid IRI mapping is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er15-in.jsonld",
                    "resultUri": "invalid IRI mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[303]",
                    "displayName": "verifies_that_relative_iris_as_properties_with_@vocab:_''_in_10_generate_an_error - Pathological relative property IRIs in 1.0 [Jsonld Json-ld negative evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e115-in.jsonld",
                    "resultUri": "invalid vocab mapping",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: accepts a relative property with an empty @vocab in JSON-LD 1.0 instead of reporting an error"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[304]",
                    "displayName": "expansion_allows_multiple_properties_expanding_to_@type - An exception for the colliding keywords error is made for @type [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e114-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e114-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[305]",
                    "displayName": "protect_all_terms_in_context - A protected context protects all term definitions. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr03-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[306]",
                    "displayName": "clear_active_context_of_protected_terms_from_a_term - The Active context may be set to null from a scoped context of a term. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr06-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr06-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[307]",
                    "displayName": "invalid_reverse_property_(invalid_@container) - Verifies that an exception is raised on expansion when a invalid reverse property is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er17-in.jsonld",
                    "resultUri": "invalid reverse property"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[308]",
                    "displayName": "context_with_javascript_object_property_names - Expand with context including JavaScript Object property names [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e113-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e113-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[309]",
                    "displayName": "various_relative_iris_as_properties_with_with_relative_@vocab_relative_to_another_relative_vocabulary_base - Pathological relative property IRIs [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e112-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e112-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[310]",
                    "displayName": "invalid_iri_mapping_(@id_not_a_string) - Verifies that an exception is raised on expansion when a invalid IRI mapping is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er18-in.jsonld",
                    "resultUri": "invalid IRI mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[311]",
                    "displayName": "clear_active_context_with_protected_terms_from_an_embedded_context - The Active context be set to null from an embedded context. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr05-in.jsonld",
                    "resultUri": "invalid context nullification"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[312]",
                    "displayName": "term_with_protected_scoped_context - A scoped context can protect terms. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr08-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[313]",
                    "displayName": "ignore_some_terms_with_@,_allow_others - Processors SHOULD generate a warning and MUST ignore terms having the form of a keyword. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e119-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e119-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[314]",
                    "displayName": "invalid_term_definition - Verifies that an exception is raised on expansion when a invalid term definition is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er11-in.jsonld",
                    "resultUri": "invalid term definition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[315]",
                    "displayName": "expanding_a_value_staring_with_a_colon_does_not_treat_that_value_as_an_iri - Terms may begin with a colon and not be treated as IRIs. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e118-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e118-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[316]",
                    "displayName": "invalid_type_mapping_(not_a_string) - Verifies that an exception is raised on expansion when a invalid type mapping is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er12-in.jsonld",
                    "resultUri": "invalid type mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[317]",
                    "displayName": "a_term_starting_with_a_colon_can_expand_to_a_different_iri - Terms may begin with a colon and not be treated as IRIs. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e117-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e117-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[318]",
                    "displayName": "invalid_type_mapping_(not_absolute_iri) - Verifies that an exception is raised on expansion when a invalid type mapping is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er13-in.jsonld",
                    "resultUri": "invalid type mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[319]",
                    "displayName": "invalid_reverse_property_(contains_@id) - Verifies that an exception is raised on expansion when a invalid reverse property is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er14-in.jsonld",
                    "resultUri": "invalid reverse property"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[320]",
                    "displayName": "verifies_that_relative_iris_as_properties_with_relative_@vocab_in_10_generate_an_error - Pathological relative property IRIs in 1.0 [Jsonld Json-ld negative evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e116-in.jsonld",
                    "resultUri": "invalid vocab mapping",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: accepts a relative property with a relative @vocab in JSON-LD 1.0 instead of reporting an error"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[321]",
                    "displayName": "attempt_to_redefine_term_in_other_protected_context - A protected term cannot redefine another protected term. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr09-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[322]",
                    "displayName": "invalid_keyword_alias_(@context) - Verifies that an exception is raised on expansion when a invalid keyword alias is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er19-in.jsonld",
                    "resultUri": "invalid keyword alias"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[323]",
                    "displayName": "fail_to_override_protected_term - Fail to override protected term. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr11-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[324]",
                    "displayName": "simple_protected_and_unprotected_terms - Simple protected and unprotected terms. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr10-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr10-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[325]",
                    "displayName": "override_unprotected_term - Override unprotected term. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr13-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr13-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[326]",
                    "displayName": "scoped_context_fail_to_override_protected_term - Scoped context fail to override protected term. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr12-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[327]",
                    "displayName": "invalid_iri_mapping_(no_vocab_mapping) - Verifies that an exception is raised on expansion when a invalid IRI mapping is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er20-in.jsonld",
                    "resultUri": "invalid IRI mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[328]",
                    "displayName": "invalid_container_mapping - Verifies that an exception is raised on expansion when a invalid container mapping is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er21-in.jsonld",
                    "resultUri": "invalid container mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[329]",
                    "displayName": "ignore_some_iris_when_that_start_with_@_when_expanding - Processors SHOULD generate a warning and MUST ignore IRIs having the form of a keyword. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e122-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e122-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[330]",
                    "displayName": "drop_freefloating_nodes - Free-floating nodes do not generate RDF triples (from expand-0001) [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e001-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e001-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[331]",
                    "displayName": "ignore_some_values_of_@reverse_with_@,_allow_others - Processors SHOULD generate a warning and MUST ignore values of @reverse having the form of a keyword. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e121-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e121-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[332]",
                    "displayName": "ignore_some_values_of_@id_with_@,_allow_others - Processors SHOULD generate a warning and MUST ignore values of @id having the form of a keyword. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e120-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e120-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[333]",
                    "displayName": "colliding_keywords - Verifies that an exception is raised in Expansion when colliding keywords are found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er26-in.jsonld",
                    "resultUri": "colliding keywords"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[334]",
                    "displayName": "do_not_expand_aliased_@id/@type - RDF version of expand-0005 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e005-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e005-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[335]",
                    "displayName": "a_scoped_context_may_include_itself_recursively_(direct) - Verifies that no exception is raised on expansion when processing a scoped context referencing itself directly [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 44,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e126-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e126-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[336]",
                    "displayName": "clear_protection_with_array_with_null_context - Clear protection with array with null context [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr15-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr15-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[337]",
                    "displayName": "clear_protection_with_null_context - Clear protection with null context. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr14-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr14-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[338]",
                    "displayName": "optimize_@set,_keep_empty_arrays - RDF version of expand-0004 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e004-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e004-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[339]",
                    "displayName": "invalid_@id_value - Verifies that an exception is raised in Expansion when an invalid @id value is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er27-in.jsonld",
                    "resultUri": "invalid @id value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[340]",
                    "displayName": "term_as_@vocab - Verifies that @vocab defined as a term expands properly [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e125-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e125-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[341]",
                    "displayName": "drop_null_and_unmapped_properties - Properties mapped to null or which are never mapped are dropped (from expand-0003) [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e003-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e003-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[342]",
                    "displayName": "compact_iri_as_@vocab - Verifies that @vocab defined as a compact IRI expands properly [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e124-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e124-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[343]",
                    "displayName": "invalid_type_value - Verifies that an exception is raised in Expansion when an invalid type value is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er28-in.jsonld",
                    "resultUri": "invalid type value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[344]",
                    "displayName": "fail_to_override_protected_terms_with_type - Fail to override protected terms with type. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr17-in.jsonld",
                    "resultUri": "invalid context nullification"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[345]",
                    "displayName": "override_protected_terms_after_null - Override protected terms after null. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr16-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr16-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[346]",
                    "displayName": "basic - Basic RDF conversion (from expand-0002) [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e002-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e002-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[347]",
                    "displayName": "invalid_value_object_value - Verifies that an exception is raised in Expansion when an invalid value object value is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er29-in.jsonld",
                    "resultUri": "invalid value object value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[348]",
                    "displayName": "value_objects_including_invalid_literal_datatype_iris_are_rejected - Processors MUST validate datatype IRIs. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e123-in.jsonld",
                    "resultUri": "invalid typed value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[349]",
                    "displayName": "invalid_language_mapping - Verifies that an exception is raised on expansion when a invalid language mapping is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er22-in.jsonld",
                    "resultUri": "invalid language mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[350]",
                    "displayName": "@graph_with_terms - RDF version of expand-0009 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e009-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e009-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[351]",
                    "displayName": "mix_of_protected_and_unprotected_terms - Mix of protected and unprotected terms. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr19-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr19-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[352]",
                    "displayName": "fail_to_override_protected_terms_with_type+null+ctx - Fail to override protected terms with type+null+ctx. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr18-in.jsonld",
                    "resultUri": "invalid context nullification"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[353]",
                    "displayName": "base_without_trailing_slash,_without_path - Verify URI resolution relative to base (without trailing slash, without path) according to RFC 3986 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e129-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e129-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[354]",
                    "displayName": "invalid_iri_mapping_(relative_iri_in_@type) - Verifies that an exception is raised on expansion when a invalid type mapping is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er23-in.jsonld",
                    "resultUri": "invalid type mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[355]",
                    "displayName": "@value_with_@language - RDF version of expand-0008 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e008-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e008-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[356]",
                    "displayName": "date_typecoercion - Type-coerced dates generate typed literals (from expand-0007) [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e007-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e007-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[357]",
                    "displayName": "list_of_lists_(from_array) - Verifies that an exception is raised in Expansion when a list of lists is found [Jsonld Json-ld negative evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er24-in.jsonld",
                    "resultUri": "list of lists",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: accepts an array containing a list of lists instead of reporting an error"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[358]",
                    "displayName": "two_scoped_context_may_include_a_shared_context - Verifies that no exception is raised on expansion when processing two scoped contexts referencing a shared context [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 113,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e128-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e128-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[359]",
                    "displayName": "alias_keywords - RDF version of expand-0006 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e006-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e006-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[360]",
                    "displayName": "invalid_reverse_property_map - Verifies that an exception is raised in Expansion when a invalid reverse property map is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er25-in.jsonld",
                    "resultUri": "invalid reverse property map"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[361]",
                    "displayName": "a_scoped_context_may_include_itself_recursively_(indirect) - Verifies that no exception is raised on expansion when processing a scoped context referencing itself indirectly [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 110,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e127-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e127-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[362]",
                    "displayName": "fail_with_mix_of_protected_and_unprotected_terms_with_type+null+ctx - Fail with mix of protected and unprotected terms with type+null+ctx. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr20-in.jsonld",
                    "resultUri": "invalid context nullification"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[363]",
                    "displayName": "representing_numbers_>=_1e21 - numbers with no fractions but that are >= 1e21 are represented as xsd:double [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/rt01-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/rt01-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[364]",
                    "displayName": "check_legal_overriding_of_typescoped_protected_term_from_nested_node - Check legal overriding of type-scoped protected term from nested node. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr22-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr22-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[365]",
                    "displayName": "@version_may_be_specified_after_first_context - If processing mode is not set through API, it is set by the first context containing @version. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/p001-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/p001-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[366]",
                    "displayName": "@version_setting_[10,_11,_10] - If processing mode is not set through API, it is set by the first context containing @version. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/p002-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/p002-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[367]",
                    "displayName": "fail_with_mix_of_protected_and_unprotected_terms_with_type+null - Fail with mix of protected and unprotected terms with type+null. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr21-in.jsonld",
                    "resultUri": "invalid context nullification"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[368]",
                    "displayName": "allows_redefinition_of_protected_prefix_term_with_same_definition - Allows redefinition of protected prefix term with same definition. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr24-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr24-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[369]",
                    "displayName": "@version_setting_[11,_10] - If processing mode is not set through API, it is set by the first context containing @version. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/p003-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/p003-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[370]",
                    "displayName": "@version_setting_[11,_10,_11] - If processing mode is not set through API, it is set by the first context containing @version. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/p004-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/p004-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[371]",
                    "displayName": "allows_redefinition_of_protected_alias_term_with_same_definition - Allows redefinition of protected alias term with same definition. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr23-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr23-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[372]",
                    "displayName": "invalid_languagetagged_string - Verifies that an exception is raised in Expansion when an invalid language-tagged string value is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er30-in.jsonld",
                    "resultUri": "invalid language-tagged string"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[373]",
                    "displayName": "invalid_@index_value - Verifies that an exception is raised in Expansion when an invalid @index value value is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er31-in.jsonld",
                    "resultUri": "invalid @index value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[374]",
                    "displayName": "list_of_lists_(from_array) - Verifies that an exception is raised in Expansion when a list of lists is found [Jsonld Json-ld negative evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er32-in.jsonld",
                    "resultUri": "list of lists",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: accepts an array containing a list of lists instead of reporting an error"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[375]",
                    "displayName": "@graph_with_embed - RDF version of expand-0012 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e012-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e012-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[376]",
                    "displayName": "coerced_@id - RDF version of expand-0011 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e011-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e011-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[377]",
                    "displayName": "native_types - Native types generate typed literals (from expand-0010) [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e010-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e010-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[378]",
                    "displayName": "base_without_trailing_slash,_with_path - Verify URI resolution relative to base (without trailing slash, with path) according to RFC 3986 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e130-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e130-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[379]",
                    "displayName": "fails_on_redefinition_of_terms_with_scoped_contexts_using_different_definitions - Fails on redefinition of terms with scoped contexts using different definitions. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr26-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[380]",
                    "displayName": "context_reset - RDF version of expand-0016 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e016-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e016-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[381]",
                    "displayName": "invalid_value_object_(unexpected_keyword) - Verifies that an exception is raised in Expansion when an invalid value object is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er37-in.jsonld",
                    "resultUri": "invalid value object"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[382]",
                    "displayName": "collapse_set_of_sets,_keep_empty_lists - RDF version of expand-0015 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e015-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e015-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[383]",
                    "displayName": "invalid_value_object_(@type_and_@language) - Verifies that an exception is raised in Expansion when an invalid value object is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er38-in.jsonld",
                    "resultUri": "invalid value object"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[384]",
                    "displayName": "allows_redefinition_of_terms_with_scoped_contexts_using_same_definitions - Allows redefinition of terms with scoped contexts using same definitions. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr25-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr25-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[385]",
                    "displayName": "fails_if_trying_to_redefine_a_protected_null_term - A protected term with a null IRI mapping cannot be redefined. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr28-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[386]",
                    "displayName": "invalid_languagetagged_value - Verifies that an exception is raised in Expansion when an invalid language-tagged value is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er39-in.jsonld",
                    "resultUri": "invalid language-tagged value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[387]",
                    "displayName": "@set_of_@value_objects_with_keyword_aliases - RDF version of expand-0014 [Jsonld Json-ld positive evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e014-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e014-out.nq",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: expands a datatype compact IRI using JSON-LD 1.1 rules in this JSON-LD 1.0 case"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[388]",
                    "displayName": "allows_redefinition_of_protected_alias_term_with_same_definition_modulo_protected_flag - Allows redefinition of protected alias term with same definition modulo protected flag. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr27-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr27-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[389]",
                    "displayName": "expand_already_expanded - RDF version of expand-0013 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e013-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e013-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[390]",
                    "displayName": "invalid_@reverse_value - Verifies that an exception is raised in Expansion when an invalid @reverse value is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er33-in.jsonld",
                    "resultUri": "invalid @reverse value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[391]",
                    "displayName": "invalid_reverse_property_value_(in_@reverse) - Verifies that an exception is raised in Expansion when an invalid reverse property value is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er34-in.jsonld",
                    "resultUri": "invalid reverse property value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[392]",
                    "displayName": "remove_@value_=_null - RDF version of expand-0019 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e019-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e019-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[393]",
                    "displayName": "does_not_expand_a_compact_iri_using_a_nonprefix_term - Expansion of Compact IRIs considers if the term can be used as a prefix. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr29-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr29-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[394]",
                    "displayName": "override_default_@language - RDF version of expand-0018 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e018-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e018-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[395]",
                    "displayName": "invalid_language_map_value - Verifies that an exception is raised in Expansion when an invalid language map value is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er35-in.jsonld",
                    "resultUri": "invalid language map value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[396]",
                    "displayName": "invalid_reverse_property_value_(through_coercion) - Verifies that an exception is raised in Expansion when an invalid reverse property value is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er36-in.jsonld",
                    "resultUri": "invalid reverse property value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[397]",
                    "displayName": "@graph_and_@id_aliased - RDF version of expand-0017 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e017-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e017-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[398]",
                    "displayName": "protected_keyword_aliases_cannot_be_overridden - Keywords may not be redefined other than to protect them. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr31-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[399]",
                    "displayName": "keywords_may_be_protected - Keywords may not be redefined other than to protect them. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr30-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr30-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[400]",
                    "displayName": "fails_if_trying_to_declare_a_keyword_alias_as_prefix - Keyword aliases can not be used as prefixes. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr33-in.jsonld",
                    "resultUri": "invalid term definition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[401]",
                    "displayName": "protected_@type_cannot_be_overridden - Keywords may not be redefined other than to protect them. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr32-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[402]",
                    "displayName": "ignores_a_nonkeyword_term_starting_with_'@'_(with_@vocab) - Terms in the form of a keyword, which are not keywords, are ignored. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr35-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr35-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[403]",
                    "displayName": "ignores_a_nonkeyword_term_starting_with_'@' - Terms in the form of a keyword, which are not keywords, are ignored. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr34-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr34-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[404]",
                    "displayName": "invalid_typed_value - Verifies that an exception is raised in Expansion when an invalid typed value is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er40-in.jsonld",
                    "resultUri": "invalid typed value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[405]",
                    "displayName": "invalid_set_or_list_object - Verifies that an exception is raised in Expansion when an invalid set or list object is found [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er41-in.jsonld",
                    "resultUri": "invalid set or list object"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[406]",
                    "displayName": "keywords_may_not_be_redefined_in_10 - Verifies that an exception is raised on expansion when processing an invalid context attempting to define @container on a keyword [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er42-in.jsonld",
                    "resultUri": "keyword redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[407]",
                    "displayName": "term_definition_with_@id:_@type - Expanding term mapping to @type uses @type syntax now illegal [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er43-in.jsonld",
                    "resultUri": "invalid IRI mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[408]",
                    "displayName": "lists_and_sets_of_properties_with_list/set_coercion - RDF version of expand-0023 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e023-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e023-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[409]",
                    "displayName": "expand_value_with_default_language - RDF version of expand-0022 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e022-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e022-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[410]",
                    "displayName": "do_not_remove_@graph_at_toplevel_if_not_only_property - RDF version of expand-0021 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e021-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e021-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[411]",
                    "displayName": "do_not_remove_@graph_if_not_at_toplevel - Embedded @graph without @id creates BNode-labeled named graph (from expand-0020) [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e020-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e020-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[412]",
                    "displayName": "keep_duplicate_values_in_@list_and_@set - RDF version of expand-0027 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e027-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e027-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[413]",
                    "displayName": "invalid_term_as_relative_iri - Verifies that a relative IRI cannot be used as a term. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er48-in.jsonld",
                    "resultUri": "invalid IRI mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[414]",
                    "displayName": "ignores_a_term_mapping_to_a_value_in_the_form_of_a_keyword_(with_@vocab) - Terms in the form of a keyword, which are not keywords, are ignored. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr37-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr37-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[415]",
                    "displayName": "ignores_a_term_mapping_to_a_value_in_the_form_of_a_keyword - Terms in the form of a keyword, which are not keywords, are ignored. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr36-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr36-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[416]",
                    "displayName": "named_graph_with_embedded_named_graph - Tests that named graphs containing named graphs flatten to single level of graph naming. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0029-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0029-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[417]",
                    "displayName": "expanding_term_mapping_to_@type_uses_@type_syntax - RDF version of expand-0026 [Jsonld Json-ld positive evaluation test]",
                    "status": "SKIPPED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e026-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e026-out.nq",
                    "skipReason": "UPSTREAM_TITANIUM_1_6: rejects the valid JSON-LD 1.0 @type term-mapping form"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[418]",
                    "displayName": "a_relative_iri_cannot_be_used_as_a_prefix - Verifies that a relative IRI cannot be used as a term. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er49-in.jsonld",
                    "resultUri": "invalid term definition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[419]",
                    "displayName": "problematic_iri_expansion_tests - RDF version of expand-0025 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e025-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e025-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[420]",
                    "displayName": "simple_named_graph - Signing a graph. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0028-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0028-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[421]",
                    "displayName": "ignores_a_term_mapping_to_a_value_in_the_form_of_a_keyword_(@reverse_with_@vocab) - Terms in the form of a keyword, which are not keywords, are ignored. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr39-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr39-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[422]",
                    "displayName": "simple_named_graph_(wikidata) - Using @graph with other keys places triples in a named graph. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0027-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0027-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[423]",
                    "displayName": "ignores_a_term_mapping_to_a_value_in_the_form_of_a_keyword_(@reverse) - Terms in the form of a keyword, which are not keywords, are ignored. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr38-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr38-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[424]",
                    "displayName": "multiple_contexts - RDF version of expand-0024 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e024-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e024-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[425]",
                    "displayName": "redefine_terms_looking_like_compact_iris - Term definitions may look like compact IRIs, but must be consistent. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er44-in.jsonld",
                    "resultUri": "invalid IRI mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[426]",
                    "displayName": "processingmode_jsonld10_conflicts_with_@version:_11 - If processingMode is explicitly json-ld-1.0, it will conflict with 1.1 features. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/ep02-in.jsonld",
                    "resultUri": "processing mode conflict"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[427]",
                    "displayName": "@version_must_be_11 - If @version is specified, it must be 1.1 [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/ep03-in.jsonld",
                    "resultUri": "invalid @version value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[428]",
                    "displayName": "relative_iris - RDF version of expand-0029 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e029-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e029-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[429]",
                    "displayName": "use_@vocab_in_properties_and_@type_but_not_in_@id - RDF version of expand-0028 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e028-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e028-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[430]",
                    "displayName": "@id_reordering - Tests that generated triples do not depend on order of @id. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0033-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0033-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[431]",
                    "displayName": "protected_terms_and_propertyscoped_contexts - Check overriding of protected term from property-scoped context. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr40-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr40-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[432]",
                    "displayName": "@context_reordering - Tests that generated triples do not depend on order of @context. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0032-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0032-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[433]",
                    "displayName": "fail_if_protected_flag_not_retained_during_redefinition - Check protected redefinition retains protected flag. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr42-in.jsonld",
                    "resultUri": "protected term redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[434]",
                    "displayName": "reverse_property - Tests conversion of reverse properties. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0031-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0031-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[435]",
                    "displayName": "allows_protected_redefinition_of_equivalent_id_terms - Check protected redefinition of equivalent id terms in different forms. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr41-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr41-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[436]",
                    "displayName": "toplevel_graph_with_string_subject_reference - Tests graphs containing subject references as strings. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0030-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0030-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[437]",
                    "displayName": "use_nodemapgeneration_bnode_labels - The toRDF algorithm does not relabel blank nodes; it reuses the counter from the nodeMapGeneration to generate new ones [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0036-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0036-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[438]",
                    "displayName": "clear_protection_in_@graph_@container_with_null_context - Clear protection in @graph @container with null context. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr43-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/pr43-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[439]",
                    "displayName": "nonfractional_numbers_converted_to_xsd:double - xsd:double's canonical lexical is used when converting numbers without fraction that are coerced to xsd:double [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0035-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0035-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[440]",
                    "displayName": "context_properties_reordering - Tests that generated triples do not depend on order of properties inside @context. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0034-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0034-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[441]",
                    "displayName": "language_maps - RDF version of expand-0030 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e030-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e030-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[442]",
                    "displayName": "invalid_value_object_value_using_a_value_alias - Verifies that an exception is raised in Expansion when an invalid value object value is found using a value alias [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er51-in.jsonld",
                    "resultUri": "invalid value object value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[443]",
                    "displayName": "definition_for_the_empty_term - Verifies that an exception is raised on expansion when a context contains a definition for the empty term [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er52-in.jsonld",
                    "resultUri": "invalid term definition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[444]",
                    "displayName": "invalid_prefix_value - Verifies that an exception is raised on expansion when a context contains an invalid @prefix value [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er53-in.jsonld",
                    "resultUri": "invalid @prefix value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[445]",
                    "displayName": "invalid_value_object,_multiple_values_for_@type - The value of @type in a value object MUST be a string or null. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er54-in.jsonld",
                    "resultUri": "invalid typed value"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[446]",
                    "displayName": "multiple_properties_expanding_to_the_same_iri - RDF version of expand-0034 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e034-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e034-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[447]",
                    "displayName": "using_@vocab_with_with_typecoercion - RDF version of expand-0033 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e033-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e033-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[448]",
                    "displayName": "mapping_a_term_to_null_decouples_it_from_@vocab - RDF version of expand-0032 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e032-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e032-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[449]",
                    "displayName": "invalid_reverse_id - Verifies that an exception is raised in Expansion when an invalid IRI is used for @reverse. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er50-in.jsonld",
                    "resultUri": "invalid IRI mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[450]",
                    "displayName": "typecoercion_of_native_types - RDF version of expand-0031 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e031-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e031-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[451]",
                    "displayName": "test_type_coercion_to_anyuri - Tests coercion of object to anyURI when specified. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0019-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0019-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[452]",
                    "displayName": "drop_blank_node_predicates_by_default - Triples with blank node predicates are dropped by default (from expand-0038). [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e038-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e038-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[453]",
                    "displayName": "expanding_@reverse - RDF version of expand-0037 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e037-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e037-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[454]",
                    "displayName": "frag_id_expands_relative_resource_location - Expanding a fragment uses the test file location. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0018-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0018-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[455]",
                    "displayName": "relative_iri_expands_relative_resource_location - Expanding a relative IRI uses the test file location. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0017-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0017-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[456]",
                    "displayName": "expanding_@index - RDF version of expand-0036 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e036-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e036-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[457]",
                    "displayName": "empty_iri_expands_to_resource_location - Expanding an empty IRI uses the test file location. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0016-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0016-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[458]",
                    "displayName": "language_maps_with_@vocab,_default_language,_and_colliding_property - RDF version of expand-0035 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e035-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e035-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[459]",
                    "displayName": "invalid_term_definition,_multiple_values_for_@type - The value of @type in an expanded term definition object MUST be a string or null. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/er55-in.jsonld",
                    "resultUri": "invalid type mapping"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[460]",
                    "displayName": "invalid_redefinition_of_@context_keyword - Verifies that an exception is raised when attempting to redefine @context. [Jsonld Json-ld negative evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/expand/er56-in.jsonld",
                    "resultUri": "keyword redefinition"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[461]",
                    "displayName": "using_terms_in_a_reversemaps - RDF version of expand-0039 [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e039-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/e039-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[462]",
                    "displayName": "test_coercion_of_double_value - Tests that a decimal value generates a xsd:double typed literal;. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0022-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0022-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[463]",
                    "displayName": "test_type_coercion_to_typed_literal - Tests coercion of object to a typed literal when specified. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0020-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0020-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[464]",
                    "displayName": "test_creation_of_multiple_types - Tests that @type with an array of types creates multiple types. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0026-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0026-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[465]",
                    "displayName": "test_list_coercion_with_single_element - Tests that an array with a single element on a property with @list coercion creates an RDF Collection. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0025-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0025-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[466]",
                    "displayName": "test_coercion_of_boolean_value - Tests that a decimal value generates a xsd:boolean typed literal. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0024-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0024-out.nq"
                },
                {
                    "name": "rdf11JsonldToRdfTests()[467]",
                    "displayName": "test_coercion_of_integer_value - Tests that a decimal value generates a xsd:integer typed literal. [Jsonld Json-ld positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0023-in.jsonld",
                    "resultUri": "https://w3c.github.io/json-ld-api/tests/toRdf/0023-out.nq"
                }
            ]
        },
        {
            "id": "nquads",
            "name": "N-Quads (RDF 1.1)",
            "total": 87,
            "passed": 87,
            "failed": 0,
            "skipped": 0,
            "passRate": 100.0,
            "durationMs": 22,
            "tests": [
                {
                    "name": "rdf11NQuadsTests()[1]",
                    "displayName": "literal_with_dquote - literal with dquote \"x\"y\" [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_dquote.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[2]",
                    "displayName": "literal_with_backspace - literal with BACKSPACE [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_BACKSPACE.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[3]",
                    "displayName": "ntsyntaxbadlang01 - langString with bad lang (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-lang-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[4]",
                    "displayName": "nqsyntaxbadliteral02 - Graph name may not be a language tagged literal (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-bad-literal-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[5]",
                    "displayName": "literal_with_utf8_boundaries - literal_with_UTF8_boundaries '\\x80\\x7ff\\x800\\xfff...' [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_UTF8_boundaries.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[6]",
                    "displayName": "minimal_whitespace - tests absense of whitespace between subject, predicate, object and end-of-statement [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/minimal_whitespace.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[7]",
                    "displayName": "nqsyntaxuri05 - URI graph with language tagged literal [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-uri-05.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[8]",
                    "displayName": "literal_with_carriage_return - literal with CARRIAGE RETURN [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_CARRIAGE_RETURN.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[9]",
                    "displayName": "nqsyntaxuri06 - URI graph with datatyped literal [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-uri-06.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[10]",
                    "displayName": "nqsyntaxbadliteral03 - Graph name may not be a datatyped literal (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-bad-literal-03.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[11]",
                    "displayName": "ntsyntaxbadbnode02 - Colon in bnode label not allowed (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-bnode-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[12]",
                    "displayName": "nqsyntaxbadliteral01 - Graph name may not be a simple literal (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-bad-literal-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[13]",
                    "displayName": "literal_with_character_tabulation - literal with CHARACTER TABULATION [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_CHARACTER_TABULATION.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[14]",
                    "displayName": "ntsyntaxbadprefix01 - @prefix not allowed in N-Quads (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-prefix-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[15]",
                    "displayName": "nqsyntaxuri01 - URI graph with URI triple [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-uri-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[16]",
                    "displayName": "nqsyntaxuri02 - URI graph with BNode subject [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-uri-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[17]",
                    "displayName": "nqsyntaxuri03 - URI graph with BNode object [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-uri-03.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[18]",
                    "displayName": "nqsyntaxuri04 - URI graph with simple literal [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-uri-04.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[19]",
                    "displayName": "ntsyntaxbadstring05 - long double string literal (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-string-05.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[20]",
                    "displayName": "ntsyntaxbadstring06 - string literal with no end (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-string-06.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[21]",
                    "displayName": "ntsyntaxbadstring07 - string literal with no start (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-string-07.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[22]",
                    "displayName": "ntsyntaxbadstring01 - mismatching string literal open/close (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-string-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[23]",
                    "displayName": "ntsyntaxbadbase01 - @base not allowed in N-Quads (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-base-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[24]",
                    "displayName": "ntsyntaxbadstring02 - mismatching string literal open/close (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-string-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[25]",
                    "displayName": "ntsyntaxbadstring03 - single quotes (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-string-03.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[26]",
                    "displayName": "literal_with_reverse_solidus2 - REVERSE SOLIDUS at end of literal [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_REVERSE_SOLIDUS2.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[27]",
                    "displayName": "ntsyntaxbadstring04 - long single string literal (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-string-04.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[28]",
                    "displayName": "ntsyntaxstresc01 - string literal with escaped newline [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-str-esc-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[29]",
                    "displayName": "ntsyntaxstresc02 - string literal with Unicode escape [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-str-esc-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[30]",
                    "displayName": "ntsyntaxbadnum01 - no numbers in N-Quads (integer) (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-num-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[31]",
                    "displayName": "ntsyntaxbadnum03 - no numbers in N-Quads (float) (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-num-03.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[32]",
                    "displayName": "lantag_with_subtag - lantag with subtag \"x\"@en-us [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/lantag_with_subtag.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[33]",
                    "displayName": "ntsyntaxstresc03 - string literal with long Unicode escape [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-str-esc-03.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[34]",
                    "displayName": "ntsyntaxbadnum02 - no numbers in N-Quads (decimal) (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-num-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[35]",
                    "displayName": "literal - literal \"\"\"x\"\"\" [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[36]",
                    "displayName": "nqsyntaxbaduri01 - Graph name URI must be absolute (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-bad-uri-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[37]",
                    "displayName": "ntsyntaxbadbnode01 - Colon in bnode label not allowed (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-bnode-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[38]",
                    "displayName": "langtagged_string - langtagged string \"x\"@en [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/langtagged_string.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[39]",
                    "displayName": "literal_with_2_dquotes - literal with 2 squotes \"\"\"a\"\"b\"\"\" [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_2_dquotes.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[40]",
                    "displayName": "ntsyntaxbadstruct02 - N-Quads does not have predicateObjectList (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-struct-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[41]",
                    "displayName": "ntsyntaxbadstruct01 - N-Quads does not have objectList (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-struct-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[42]",
                    "displayName": "literal_all_controls - literal_all_controls '\\x00\\x01\\x02\\x03\\x04...' [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_all_controls.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[43]",
                    "displayName": "ntsyntaxstring01 - string literal [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-string-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[44]",
                    "displayName": "ntsyntaxbaduri09 - Bad IRI : relative IRI not allowed in datatype (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-uri-09.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[45]",
                    "displayName": "ntsyntaxstring02 - langString literal [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-string-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[46]",
                    "displayName": "ntsyntaxbaduri08 - Bad IRI : relative IRI not allowed in object (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-uri-08.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[47]",
                    "displayName": "ntsyntaxbaduri07 - Bad IRI : relative IRI not allowed in predicate (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-uri-07.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[48]",
                    "displayName": "ntsyntaxstring03 - langString literal with region [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-string-03.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[49]",
                    "displayName": "ntsyntaxdatatypes01 - xsd:byte literal [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-datatypes-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[50]",
                    "displayName": "ntsyntaxdatatypes02 - integer as xsd:string [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-datatypes-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[51]",
                    "displayName": "ntsyntaxbaduri06 - Bad IRI : relative IRI not allowed in subject (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-uri-06.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[52]",
                    "displayName": "literal_all_punctuation - literal_all_punctuation '!\"#$%&()...' [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_all_punctuation.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[53]",
                    "displayName": "ntsyntaxbaduri05 - Bad IRI : character escapes not allowed (2) (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-uri-05.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[54]",
                    "displayName": "ntsyntaxbaduri04 - Bad IRI : character escapes not allowed (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-uri-04.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[55]",
                    "displayName": "literal_with_squote - literal with squote \"x'y\" [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_squote.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[56]",
                    "displayName": "ntsyntaxbaduri03 - Bad IRI : bad long escape (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-uri-03.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[57]",
                    "displayName": "ntsyntaxbaduri02 - Bad IRI : bad escape (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-uri-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[58]",
                    "displayName": "ntsyntaxbaduri01 - Bad IRI : space (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-uri-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[59]",
                    "displayName": "ntsyntaxsubm01 - Submission test from Original RDF Test Cases [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-subm-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[60]",
                    "displayName": "literal_ascii_boundaries - literal_ascii_boundaries '\\x00\\x26\\x28...' [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_ascii_boundaries.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[61]",
                    "displayName": "nqsyntaxbnode04 - BNode graph with simple literal [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-bnode-04.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[62]",
                    "displayName": "nqsyntaxbnode03 - BNode graph with BNode object [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-bnode-03.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[63]",
                    "displayName": "nqsyntaxbnode02 - BNode graph with BNode subject [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-bnode-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[64]",
                    "displayName": "ntsyntaxbnode01 - bnode subject [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bnode-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[65]",
                    "displayName": "literal_with_numeric_escape8 - literal with numeric escape8 \\U [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_numeric_escape8.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[66]",
                    "displayName": "nqsyntaxbnode01 - BNode graph with URI triple [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-bnode-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[67]",
                    "displayName": "literal_with_numeric_escape4 - literal with numeric escape4 \\u [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_numeric_escape4.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[68]",
                    "displayName": "ntsyntaxfile01 - Empty file [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-file-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[69]",
                    "displayName": "ntsyntaxfile03 - One comment, one empty line [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-file-03.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[70]",
                    "displayName": "ntsyntaxfile02 - Only comment [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-file-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[71]",
                    "displayName": "ntsyntaxbnode03 - Blank node labels may start with a digit [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bnode-03.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[72]",
                    "displayName": "ntsyntaxbnode02 - bnode object [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bnode-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[73]",
                    "displayName": "nqsyntaxbnode06 - BNode graph with datatyped literal [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-bnode-06.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[74]",
                    "displayName": "nqsyntaxbnode05 - BNode graph with language tagged literal [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-bnode-05.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[75]",
                    "displayName": "literal_with_reverse_solidus - literal with REVERSE SOLIDUS [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_REVERSE_SOLIDUS.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[76]",
                    "displayName": "ntsyntaxuri01 - Only IRIs [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-uri-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[77]",
                    "displayName": "nqsyntaxbadquint01 - N-Quads does not have a fifth element (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nq-syntax-bad-quint-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[78]",
                    "displayName": "literal_with_form_feed - literal with FORM FEED [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_FORM_FEED.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[79]",
                    "displayName": "comment_following_triple - Tests comments after a triple [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/comment_following_triple.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[80]",
                    "displayName": "literal_with_line_feed - literal with LINE FEED [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_LINE_FEED.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[81]",
                    "displayName": "literal_with_2_squotes - literal with 2 squotes \"x''y\" [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/literal_with_2_squotes.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[82]",
                    "displayName": "ntsyntaxbadesc03 - Bad string escape (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-esc-03.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[83]",
                    "displayName": "ntsyntaxbadesc02 - Bad string escape (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-esc-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[84]",
                    "displayName": "ntsyntaxbadesc01 - Bad string escape (negative test) [N-Quads N-quads negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-bad-esc-01.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[85]",
                    "displayName": "ntsyntaxuri04 - Legal IRIs [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-uri-04.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[86]",
                    "displayName": "ntsyntaxuri02 - IRIs with Unicode escape [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-uri-02.nq"
                },
                {
                    "name": "rdf11NQuadsTests()[87]",
                    "displayName": "ntsyntaxuri03 - IRIs with long Unicode escape [N-Quads N-quads positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/nt-syntax-uri-03.nq"
                }
            ]
        },
        {
            "id": "ntriples",
            "name": "N-Triples (RDF 1.1)",
            "total": 70,
            "passed": 70,
            "failed": 0,
            "skipped": 0,
            "passRate": 100.0,
            "durationMs": 22,
            "tests": [
                {
                    "name": "rdf11NTriplesTests()[1]",
                    "displayName": "literal_with_2_dquotes - literal with 2 dquotes \"\"\"a\"\"b\"\"\" [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_2_dquotes.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[2]",
                    "displayName": "ntsyntaxbadbase01 - @base not allowed in N-Triples (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-base-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[3]",
                    "displayName": "lantag_with_subtag - lantag with subtag \"x\"@en-us [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/lantag_with_subtag.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[4]",
                    "displayName": "ntsyntaxstresc01 - string literal with escaped newline [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-str-esc-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[5]",
                    "displayName": "ntsyntaxbadstring07 - string literal with no start (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-string-07.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[6]",
                    "displayName": "ntsyntaxbadstring06 - string literal with no end (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-string-06.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[7]",
                    "displayName": "ntsyntaxbadstring05 - long double string literal (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-string-05.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[8]",
                    "displayName": "ntsyntaxbadstring04 - long single string literal (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-string-04.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[9]",
                    "displayName": "literal_with_dquote - literal with dquote \"x\"y\" [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_dquote.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[10]",
                    "displayName": "ntsyntaxbadstring03 - single quotes (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-string-03.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[11]",
                    "displayName": "ntsyntaxstresc02 - string literal with Unicode escape [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-str-esc-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[12]",
                    "displayName": "ntsyntaxstresc03 - string literal with long Unicode escape [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-str-esc-03.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[13]",
                    "displayName": "comment_following_triple - Tests comments after a triple [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/comment_following_triple.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[14]",
                    "displayName": "ntsyntaxbadstring02 - mismatching string literal open/close (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-string-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[15]",
                    "displayName": "literal_with_backspace - literal with BACKSPACE [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_BACKSPACE.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[16]",
                    "displayName": "ntsyntaxdatatypes02 - integer as xsd:string [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-datatypes-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[17]",
                    "displayName": "ntsyntaxbadbnode02 - Colon in bnode label not allowed (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-bnode-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[18]",
                    "displayName": "ntsyntaxdatatypes01 - xsd:byte literal [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-datatypes-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[19]",
                    "displayName": "ntsyntaxbadbnode01 - Colon in bnode label not allowed (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-bnode-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[20]",
                    "displayName": "ntsyntaxbadstring01 - mismatching string literal open/close (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-string-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[21]",
                    "displayName": "literal_ascii_boundaries - literal_ascii_boundaries '\\x00\\x26\\x28...' [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_ascii_boundaries.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[22]",
                    "displayName": "ntsyntaxbadlang01 - langString with bad lang (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-lang-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[23]",
                    "displayName": "minimal_whitespace - tests absense of whitespace between subject, predicate, object and end-of-statement [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/minimal_whitespace.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[24]",
                    "displayName": "literal_all_controls - literal_all_controls '\\x00\\x01\\x02\\x03\\x04...' [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_all_controls.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[25]",
                    "displayName": "ntsyntaxsubm01 - Submission test from Original RDF Test Cases [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-subm-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[26]",
                    "displayName": "ntsyntaxbadstruct02 - N-Triples does not have predicateObjectList (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-struct-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[27]",
                    "displayName": "literal_with_numeric_escape8 - literal with numeric escape8 \\U [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_numeric_escape8.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[28]",
                    "displayName": "ntsyntaxbadstruct01 - N-Triples does not have objectList (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-struct-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[29]",
                    "displayName": "literal_with_numeric_escape4 - literal with numeric escape4 \\u [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_numeric_escape4.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[30]",
                    "displayName": "ntsyntaxbnode03 - Blank node labels may start with a digit [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bnode-03.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[31]",
                    "displayName": "ntsyntaxbnode02 - bnode object [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bnode-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[32]",
                    "displayName": "ntsyntaxbnode01 - bnode subject [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bnode-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[33]",
                    "displayName": "literal_with_character_tabulation - literal with CHARACTER TABULATION [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_CHARACTER_TABULATION.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[34]",
                    "displayName": "ntsyntaxuri03 - IRIs with long Unicode escape [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-uri-03.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[35]",
                    "displayName": "ntsyntaxuri04 - Legal IRIs [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-uri-04.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[36]",
                    "displayName": "ntsyntaxuri01 - Only IRIs [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-uri-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[37]",
                    "displayName": "ntsyntaxuri02 - IRIs with Unicode escape [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-uri-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[38]",
                    "displayName": "ntsyntaxstring01 - string literal [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-string-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[39]",
                    "displayName": "ntsyntaxbadnum02 - no numbers in N-Triples (decimal) (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-num-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[40]",
                    "displayName": "ntsyntaxbadnum01 - no numbers in N-Triples (integer) (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-num-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[41]",
                    "displayName": "ntsyntaxbadnum03 - no numbers in N-Triples (float) (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-num-03.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[42]",
                    "displayName": "literal_with_line_feed - literal with LINE FEED [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_LINE_FEED.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[43]",
                    "displayName": "ntsyntaxstring02 - langString literal [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-string-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[44]",
                    "displayName": "ntsyntaxstring03 - langString literal with region [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-string-03.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[45]",
                    "displayName": "literal - literal \"\"\"x\"\"\" [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[46]",
                    "displayName": "langtagged_string - langtagged string \"x\"@en [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/langtagged_string.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[47]",
                    "displayName": "ntsyntaxbadesc01 - Bad string escape (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-esc-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[48]",
                    "displayName": "ntsyntaxbadprefix01 - @prefix not allowed in n-triples (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-prefix-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[49]",
                    "displayName": "literal_with_carriage_return - literal with CARRIAGE RETURN [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_CARRIAGE_RETURN.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[50]",
                    "displayName": "ntsyntaxbadesc03 - Bad string escape (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-esc-03.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[51]",
                    "displayName": "ntsyntaxbadesc02 - Bad string escape (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-esc-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[52]",
                    "displayName": "literal_with_squote - literal with squote \"x'y\" [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_squote.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[53]",
                    "displayName": "literal_all_punctuation - literal_all_punctuation '!\"#$%&()...' [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_all_punctuation.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[54]",
                    "displayName": "ntsyntaxbaduri08 - Bad IRI : relative IRI not allowed in object (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-uri-08.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[55]",
                    "displayName": "ntsyntaxbaduri07 - Bad IRI : relative IRI not allowed in predicate (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-uri-07.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[56]",
                    "displayName": "literal_with_2_squotes - literal with 2 squotes \"x''y\" [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_2_squotes.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[57]",
                    "displayName": "ntsyntaxbaduri06 - Bad IRI : relative IRI not allowed in subject (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-uri-06.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[58]",
                    "displayName": "literal_with_reverse_solidus - literal with REVERSE SOLIDUS [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_REVERSE_SOLIDUS.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[59]",
                    "displayName": "ntsyntaxbaduri05 - Bad IRI : character escapes not allowed (2) (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-uri-05.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[60]",
                    "displayName": "literal_with_form_feed - literal with FORM FEED [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_FORM_FEED.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[61]",
                    "displayName": "ntsyntaxfile02 - Only comment [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-file-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[62]",
                    "displayName": "ntsyntaxbaduri04 - Bad IRI : character escapes not allowed (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-uri-04.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[63]",
                    "displayName": "ntsyntaxbaduri03 - Bad IRI : bad long escape (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-uri-03.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[64]",
                    "displayName": "literal_with_reverse_solidus2 - REVERSE SOLIDUS at end of literal [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_REVERSE_SOLIDUS2.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[65]",
                    "displayName": "ntsyntaxfile01 - Empty file [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-file-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[66]",
                    "displayName": "ntsyntaxbaduri02 - Bad IRI : bad escape (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-uri-02.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[67]",
                    "displayName": "ntsyntaxfile03 - One comment, one empty line [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-file-03.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[68]",
                    "displayName": "ntsyntaxbaduri01 - Bad IRI : space (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-uri-01.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[69]",
                    "displayName": "literal_with_utf8_boundaries - literal_with_UTF8_boundaries '\\x80\\x7ff\\x800\\xfff...' [N-Triples N-triples positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/literal_with_UTF8_boundaries.nt"
                },
                {
                    "name": "rdf11NTriplesTests()[70]",
                    "displayName": "ntsyntaxbaduri09 - Bad IRI : relative IRI not allowed in datatype (negative test) [N-Triples N-triples negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/nt-syntax-bad-uri-09.nt"
                }
            ]
        },
        {
            "id": "rdf-xml",
            "name": "RDF/XML (RDF 1.1)",
            "total": 166,
            "passed": 166,
            "failed": 0,
            "skipped": 0,
            "passRate": 100.0,
            "durationMs": 120,
            "tests": [
                {
                    "name": "rdf11XmlTests()[1]",
                    "displayName": "rdfmsduplicatememberpropstest001 - \n    The question posed to the RDF WG was: should an RDF document\ncontaining multiple rdf:_n properties (with the same n) on an\nelement be rejected as illegal? The WG decided that a parser\nshould accept that case as legal RDF.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-duplicate-member-props/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-duplicate-member-props/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[2]",
                    "displayName": "rdfmsurisubstructuretest001 - \n    Demonstrates the Recommended partitioning of a URI into a\nnamespace part and a localname part\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-uri-substructure/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-uri-substructure/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[3]",
                    "displayName": "rdfmsrdfnamesusetest033 - \n    Bag is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-033.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-033.nt"
                },
                {
                    "name": "rdf11XmlTests()[4]",
                    "displayName": "rdfmsrdfnamesusetest034 - \n    Alt is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-034.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-034.nt"
                },
                {
                    "name": "rdf11XmlTests()[5]",
                    "displayName": "rdfmsrdfnamesusetest035 - \n    Statement is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-035.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-035.nt"
                },
                {
                    "name": "rdf11XmlTests()[6]",
                    "displayName": "rdfmsrdfnamesusetest036 - \n    Property is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-036.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-036.nt"
                },
                {
                    "name": "rdf11XmlTests()[7]",
                    "displayName": "rdfmsrdfnamesusetest037 - \n    List is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-037.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-037.nt"
                },
                {
                    "name": "rdf11XmlTests()[8]",
                    "displayName": "xmlbasetest008 - \n    example of empty same document ref resolution.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test008.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test008.nt"
                },
                {
                    "name": "rdf11XmlTests()[9]",
                    "displayName": "xmlbasetest007 - \n    example of relative URI resolution.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test007.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test007.nt"
                },
                {
                    "name": "rdf11XmlTests()[10]",
                    "displayName": "xmlbasetest009 - \n    Example of relative uri with absolute path resolution.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test009.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test009.nt"
                },
                {
                    "name": "rdf11XmlTests()[11]",
                    "displayName": "xmlbasetest004 - \n    xml:base applies to an rdf:ID on a property element.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test004.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test004.nt"
                },
                {
                    "name": "rdf11XmlTests()[12]",
                    "displayName": "xmlbasetest003 - \n    xml:base applies to an rdf:about attribute.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test003.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test003.nt"
                },
                {
                    "name": "rdf11XmlTests()[13]",
                    "displayName": "xmlbasetest006 - \n    xml:base scoping.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test006.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test006.nt"
                },
                {
                    "name": "rdf11XmlTests()[14]",
                    "displayName": "xmlbasetest002 - \n    xml:base applies to an rdf:resource attribute.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[15]",
                    "displayName": "rdfmsxmllangtest006 - \n    In-scope xml:lang applies to element content literal values\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-xmllang/test006.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-xmllang/test006.nt"
                },
                {
                    "name": "rdf11XmlTests()[16]",
                    "displayName": "xmlbasetest001 - \n    xml:base applies to an rdf:ID on an rdf:Description element.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[17]",
                    "displayName": "rdfmsxmllangtest005 - \n    In-scope xml:lang applies to element content literal values\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-xmllang/test005.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-xmllang/test005.nt"
                },
                {
                    "name": "rdf11XmlTests()[18]",
                    "displayName": "rdfmsxmllangtest004 - \n    In-scope xml:lang applies to element content literal values\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-xmllang/test004.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-xmllang/test004.nt"
                },
                {
                    "name": "rdf11XmlTests()[19]",
                    "displayName": "rdfmsxmllangtest003 - \n    In-scope xml:lang applies to element content literal values\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-xmllang/test003.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-xmllang/test003.nt"
                },
                {
                    "name": "rdf11XmlTests()[20]",
                    "displayName": "rdfcontainerssyntaxvsschemaerror001 - \n    rdf:li is not allowed as as an attribute\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/error001.rdf"
                },
                {
                    "name": "rdf11XmlTests()[21]",
                    "displayName": "rdfcontainerssyntaxvsschemaerror002 - \n    rdf:li elements as typed nodes - a bizarre case As specified\nin\nhttp://lists.w3.org/Archives/Public/w3c-rdfcore-wg/2001Nov/0651.html\nis not an error.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/error002.rdf"
                },
                {
                    "name": "rdf11XmlTests()[22]",
                    "displayName": "rdfmsrdfnamesusetest022 - \n    List is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-022.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-022.nt"
                },
                {
                    "name": "rdf11XmlTests()[23]",
                    "displayName": "rdfmsrdfnamesusetest023 - \n    subject is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-023.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-023.nt"
                },
                {
                    "name": "rdf11XmlTests()[24]",
                    "displayName": "rdfmsrdfnamesusetest024 - \n    predicate is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-024.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-024.nt"
                },
                {
                    "name": "rdf11XmlTests()[25]",
                    "displayName": "rdfmsrdfnamesusetest025 - \n    object is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-025.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-025.nt"
                },
                {
                    "name": "rdf11XmlTests()[26]",
                    "displayName": "rdfmsdifferencebetweenidandabouttest2 - \n    This test shows the treatment of non-ASCII characters in the\nvalue of rdf:ID attribute.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-difference-between-ID-and-about/test2.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-difference-between-ID-and-about/test2.nt"
                },
                {
                    "name": "rdf11XmlTests()[27]",
                    "displayName": "rdfmsrdfnamesusetest026 - \n    type is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-026.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-026.nt"
                },
                {
                    "name": "rdf11XmlTests()[28]",
                    "displayName": "rdfmsrdfnamesusetest027 - \n    value is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-027.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-027.nt"
                },
                {
                    "name": "rdf11XmlTests()[29]",
                    "displayName": "rdfmsdifferencebetweenidandabouttest3 - \n    This test shows the treatment of non-ASCII characters in the\nvalue of rdf:about attribute.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-difference-between-ID-and-about/test3.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-difference-between-ID-and-about/test3.nt"
                },
                {
                    "name": "rdf11XmlTests()[30]",
                    "displayName": "rdfmsrdfnamesusetest028 - \n    first is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-028.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-028.nt"
                },
                {
                    "name": "rdf11XmlTests()[31]",
                    "displayName": "rdfmsdifferencebetweenidandabouttest1 - \n    A statement with an rdf:ID creates a regular triple.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-difference-between-ID-and-about/test1.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-difference-between-ID-and-about/test1.nt"
                },
                {
                    "name": "rdf11XmlTests()[32]",
                    "displayName": "rdfmsrdfnamesusetest029 - \n    rest is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-029.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-029.nt"
                },
                {
                    "name": "rdf11XmlTests()[33]",
                    "displayName": "rdfmsemptypropertyelementstest004 - \n    If the parseType indicates the value is a resource, we must\ncreate one. With no additional information, the resource is\nanonymous.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test004.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test004.nt"
                },
                {
                    "name": "rdf11XmlTests()[34]",
                    "displayName": "rdfmsemptypropertyelementstest005 - \n    An empty property element just gives an empty literal. We\nreify the statement at the same time.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test005.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test005.nt"
                },
                {
                    "name": "rdf11XmlTests()[35]",
                    "displayName": "rdfmsemptypropertyelementstest006 - \n    Here the parseType indicates that we should create a resource.\nWe also reify the generated statement.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test006.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test006.nt"
                },
                {
                    "name": "rdf11XmlTests()[36]",
                    "displayName": "rdfmsrdfnamesusetest030 - \n    _1 is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-030.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-030.nt"
                },
                {
                    "name": "rdf11XmlTests()[37]",
                    "displayName": "rdfmsemptypropertyelementstest001 - \n    The rdf:resource attribute means that the value of this\nproperty element is a resource.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[38]",
                    "displayName": "rdfmsrdfnamesusetest031 - \n    li is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-031.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-031.nt"
                },
                {
                    "name": "rdf11XmlTests()[39]",
                    "displayName": "rdfcharmoduristest001 - \n    A uriref is allowed to match non-US ASCII forms conforming to\nUnicode Normal Form C. No escaping algorithm is applied.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-charmod-uris/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-charmod-uris/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[40]",
                    "displayName": "rdfmsemptypropertyelementstest002 - \n    The basic case. An empty property element just gives an empty\nliteral.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[41]",
                    "displayName": "rdfmsrdfnamesusetest032 - \n    Seq is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-032.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-032.nt"
                },
                {
                    "name": "rdf11XmlTests()[42]",
                    "displayName": "datatypestest001 - \n    A simple datatype production; a language+datatype production.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/datatypes/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/datatypes/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[43]",
                    "displayName": "rdfcharmoduristest002 - \n    A uriref which already has % escaping is permitted. No\nunescaping algorithm is applied.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-charmod-uris/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-charmod-uris/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[44]",
                    "displayName": "rdfmsrdfiderror003 - \n    The value of rdf:ID must match the XML Name production, (as\nmodified by XML Namespaces).\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-id/error003.rdf"
                },
                {
                    "name": "rdf11XmlTests()[45]",
                    "displayName": "rdfmsrdfiderror002 - \n    The value of rdf:ID must match the XML Name production, (as\nmodified by XML Namespaces).\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-id/error002.rdf"
                },
                {
                    "name": "rdf11XmlTests()[46]",
                    "displayName": "rdfmsrdfiderror005 - \n    The value of rdf:ID must match the XML Name production, (as\nmodified by XML Namespaces).\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-id/error005.rdf"
                },
                {
                    "name": "rdf11XmlTests()[47]",
                    "displayName": "rdfmsrdfiderror004 - \n    The value of rdf:ID must match the XML Name production, (as\nmodified by XML Namespaces).\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-id/error004.rdf"
                },
                {
                    "name": "rdf11XmlTests()[48]",
                    "displayName": "datatypestest002 - \n    A parser is not required to know about well-formed datatyped\nliterals.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/datatypes/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/datatypes/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[49]",
                    "displayName": "rdfmsrdfiderror001 - \n    The value of rdf:ID must match the XML Name production, (as\nmodified by XML Namespaces).\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-id/error001.rdf"
                },
                {
                    "name": "rdf11XmlTests()[50]",
                    "displayName": "ampinurltest001 - \n    Description: the purpose of this test case is to show how one\nof XML's Predefined Entities - in this case the ampersand - is\nrepresented when it is used in the value of an rdf:about\nattribute. The ampersand is represented by its numeric\ncharacter reference as specified in:\nhttp://www.w3.org/TR/REC-xml#sec-predefined-ent In the\nassociated N-Triples file, the ampersand will be represented\nwith a single ampersand character (and not the ampersand's\nnumeric character reference). Note: when a XML/HTML browser is\nused to display this file, a single ampersand character may be\ndisplayed and not the ampersand's numeric character reference.\nIn this case, the browser may provide an alternate way to view\nthe file (such as viewing the file's source or saving to a\nfile).\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/amp-in-url/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/amp-in-url/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[51]",
                    "displayName": "rdfmsrdfiderror007 - \n    The value of rdf:bagID must match the XML Name production, (as\nmodified by XML Namespaces).\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-id/error007.rdf"
                },
                {
                    "name": "rdf11XmlTests()[52]",
                    "displayName": "rdfmsrdfiderror006 - \n    The value of rdf:bagID must match the XML Name production, (as\nmodified by XML Namespaces).\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-id/error006.rdf"
                },
                {
                    "name": "rdf11XmlTests()[53]",
                    "displayName": "rdfmsabouteacherror002 - \n    aboutEach removed from the RDF specifications.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-abouteach/error002.rdf"
                },
                {
                    "name": "rdf11XmlTests()[54]",
                    "displayName": "rdfmsnotidandresourceattrtest004 - \n    rdf:ID and rdf:resource are allowed together on empty property\nelement.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-not-id-and-resource-attr/test004.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-not-id-and-resource-attr/test004.nt"
                },
                {
                    "name": "rdf11XmlTests()[55]",
                    "displayName": "rdfmsnotidandresourceattrtest005 - \n    rdf:ID and rdf:resource are allowed together on empty property\nelement.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-not-id-and-resource-attr/test005.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-not-id-and-resource-attr/test005.nt"
                },
                {
                    "name": "rdf11XmlTests()[56]",
                    "displayName": "rdfmsnotidandresourceattrtest002 - \n    rdf:reource on an empty property element indicates the URI of\nthe object.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-not-id-and-resource-attr/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-not-id-and-resource-attr/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[57]",
                    "displayName": "rdfmsabouteacherror001 - \n    aboutEach removed from the RDF specifications.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-abouteach/error001.rdf"
                },
                {
                    "name": "rdf11XmlTests()[58]",
                    "displayName": "rdfmsnotidandresourceattrtest001 - \n    rdf:ID on an empty property element indicates reification.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-not-id-and-resource-attr/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-not-id-and-resource-attr/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[59]",
                    "displayName": "rdfcontainerssyntaxvsschematest001 - \n    Simple container\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[60]",
                    "displayName": "rdfcontainerssyntaxvsschematest004 - \n    rdf:li elements match any of the property element productions\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test004.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test004.nt"
                },
                {
                    "name": "rdf11XmlTests()[61]",
                    "displayName": "rdfcontainerssyntaxvsschematest003 - \n    rdf:li elements can exist in any description element\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test003.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test003.nt"
                },
                {
                    "name": "rdf11XmlTests()[62]",
                    "displayName": "rdfcontainerssyntaxvsschematest002 - \n    rdf:li is unaffected by other rdf:_nnn properties. This test\ncase is concerned only with defining the triples that this\nparticular example RDF/XML represents. It is not concerned\nwith whether that collection of triples violates any other\nconstraints, e.g. restrictions on the number of rdf:_1\nproperties that may be defined for a resource.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[63]",
                    "displayName": "rdfcontainerssyntaxvsschematest008 - \n    rdf:li processing is per element, not per resource.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test008.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test008.nt"
                },
                {
                    "name": "rdf11XmlTests()[64]",
                    "displayName": "rdfelementnotmandatorytest001 - \n    A surrounding rdf:RDF element is no longer mandatory.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-element-not-mandatory/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-element-not-mandatory/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[65]",
                    "displayName": "rdfcontainerssyntaxvsschematest007 - \n    rdf:li processing within each element is independent\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test007.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test007.nt"
                },
                {
                    "name": "rdf11XmlTests()[66]",
                    "displayName": "rdfcontainerssyntaxvsschematest006 - \n    containers match the typed node production\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test006.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-containers-syntax-vs-schema/test006.nt"
                },
                {
                    "name": "rdf11XmlTests()[67]",
                    "displayName": "xmlbasetest014 - \n    Test output corrected to use correct base URL.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test014.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test014.nt"
                },
                {
                    "name": "rdf11XmlTests()[68]",
                    "displayName": "xmlbasetest011 - \n    Example of xml:base with no path component.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test011.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test011.nt"
                },
                {
                    "name": "rdf11XmlTests()[69]",
                    "displayName": "xmlbasetest010 - \n    Example of relative uri with net path resolution.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test010.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test010.nt"
                },
                {
                    "name": "rdf11XmlTests()[70]",
                    "displayName": "xmlbasetest013 - \n    With an xml:base with fragment the fragment is ignored.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test013.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test013.nt"
                },
                {
                    "name": "rdf11XmlTests()[71]",
                    "displayName": "rdfmsemptypropertyelementserror002 - \n    This is not legal RDF; specifying an rdf:parseType of\n\"Literal\" and an rdf:resource attribute at the same time is an\nerror.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/error002.rdf"
                },
                {
                    "name": "rdf11XmlTests()[72]",
                    "displayName": "rdfmsemptypropertyelementserror001 - \n    This is not legal RDF; specifying an rdf:parseType of\n\"Literal\" and an rdf:resource attribute at the same time is an\nerror.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/error001.rdf"
                },
                {
                    "name": "rdf11XmlTests()[73]",
                    "displayName": "rdfmsrdfnamesuseerror019 - \n    aboutEach is forbidden as a property element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-019.rdf"
                },
                {
                    "name": "rdf11XmlTests()[74]",
                    "displayName": "rdfmsrdfnamesuseerror018 - \n    nodeID is forbidden as a property element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-018.rdf"
                },
                {
                    "name": "rdf11XmlTests()[75]",
                    "displayName": "rdfmsrdfnamesuseerror017 - \n    resource is forbidden as a property element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-017.rdf"
                },
                {
                    "name": "rdf11XmlTests()[76]",
                    "displayName": "rdfmsrdfnamesuseerror016 - \n    parseType is forbidden as a property element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-016.rdf"
                },
                {
                    "name": "rdf11XmlTests()[77]",
                    "displayName": "rdfmsrdfnamesuseerror015 - \n    bagID is forbidden as a property element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-015.rdf"
                },
                {
                    "name": "rdf11XmlTests()[78]",
                    "displayName": "rdfmsrdfnamesuseerror014 - \n    about is forbidden as a property element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-014.rdf"
                },
                {
                    "name": "rdf11XmlTests()[79]",
                    "displayName": "rdfmsrdfnamesuseerror013 - \n    ID is forbidden as a property element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-013.rdf"
                },
                {
                    "name": "rdf11XmlTests()[80]",
                    "displayName": "rdfmsrdfnamesuseerror012 - \n    RDF is forbidden as a property element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-012.rdf"
                },
                {
                    "name": "rdf11XmlTests()[81]",
                    "displayName": "rdfmsrdfnamesuseerror011 - \n    Description is forbidden as a property element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-011.rdf"
                },
                {
                    "name": "rdf11XmlTests()[82]",
                    "displayName": "rdfmsrdfnamesuseerror020 - \n    aboutEachPrefix is forbidden as a property element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-020.rdf"
                },
                {
                    "name": "rdf11XmlTests()[83]",
                    "displayName": "rdfnsprefixconfusiontest0001 - \n    RDF attributes that are required to have an rdf: prefix about\nID type resource parseType\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0001.nt"
                },
                {
                    "name": "rdf11XmlTests()[84]",
                    "displayName": "rdfmsrdfnamesusewarn001 - \n    foo is allowed with warnings as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/warn-001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/warn-001.nt"
                },
                {
                    "name": "rdf11XmlTests()[85]",
                    "displayName": "rdfnsprefixconfusiontest0005 - \n    RDF attributes that are required to have an rdf: prefix about\naboutEach ID bagID type resource parseType\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0005.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0005.nt"
                },
                {
                    "name": "rdf11XmlTests()[86]",
                    "displayName": "rdfnsprefixconfusiontest0006 - \n    RDF attributes that are required to have an rdf: prefix about\naboutEach ID bagID type resource parseType\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0006.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0006.nt"
                },
                {
                    "name": "rdf11XmlTests()[87]",
                    "displayName": "rdfmsrdfnamesusewarn003 - \n    foo is allowed with warnings as a property attribute name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/warn-003.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/warn-003.nt"
                },
                {
                    "name": "rdf11XmlTests()[88]",
                    "displayName": "rdfnsprefixconfusiontest0003 - \n    RDF attributes that are required to have an rdf: prefix about\nID type resource parseType\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0003.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0003.nt"
                },
                {
                    "name": "rdf11XmlTests()[89]",
                    "displayName": "rdfmsrdfnamesusewarn002 - \n    foo is allowed with warnings as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/warn-002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/warn-002.nt"
                },
                {
                    "name": "rdf11XmlTests()[90]",
                    "displayName": "rdfnsprefixconfusiontest0004 - \n    RDF attributes that are required to have an rdf: prefix about\nID type resource parseType\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0004.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0004.nt"
                },
                {
                    "name": "rdf11XmlTests()[91]",
                    "displayName": "rdfnsprefixconfusiontest0009 - \n    Namespace qualification MUST be used for all property\nattributes.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0009.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0009.nt"
                },
                {
                    "name": "rdf11XmlTests()[92]",
                    "displayName": "rdfmsrdfnamesuseerror009 - \n    aboutEach is forbidden as a node element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-009.rdf"
                },
                {
                    "name": "rdf11XmlTests()[93]",
                    "displayName": "rdfmsrdfnamesuseerror008 - \n    li is forbidden as a node element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-008.rdf"
                },
                {
                    "name": "rdf11XmlTests()[94]",
                    "displayName": "rdfmsrdfnamesuseerror007 - \n    nodeID is forbidden as a node element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-007.rdf"
                },
                {
                    "name": "rdf11XmlTests()[95]",
                    "displayName": "rdfmsrdfnamesuseerror006 - \n    resource is forbidden as a node element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-006.rdf"
                },
                {
                    "name": "rdf11XmlTests()[96]",
                    "displayName": "rdfmsrdfnamesuseerror005 - \n    parseType is forbidden as a node element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-005.rdf"
                },
                {
                    "name": "rdf11XmlTests()[97]",
                    "displayName": "rdfmsrdfnamesuseerror004 - \n    bagID is forbidden as a node element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-004.rdf"
                },
                {
                    "name": "rdf11XmlTests()[98]",
                    "displayName": "rdfmsrdfnamesuseerror003 - \n    about is forbidden as a node element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-003.rdf"
                },
                {
                    "name": "rdf11XmlTests()[99]",
                    "displayName": "rdfmsrdfnamesuseerror002 - \n    ID is forbidden as a node element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-002.rdf"
                },
                {
                    "name": "rdf11XmlTests()[100]",
                    "displayName": "rdfmsrdfnamesuseerror001 - \n    RDF is forbidden as a node element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-001.rdf"
                },
                {
                    "name": "rdf11XmlTests()[101]",
                    "displayName": "rdfmsrdfnamesuseerror010 - \n    aboutEachPrefix is forbidden as a node element name.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/error-010.rdf"
                },
                {
                    "name": "rdf11XmlTests()[102]",
                    "displayName": "rdfcharmodliteralstest001 - \n    Does the treatment of literals conform to charmod ? Test for\nsuccess of legal Normal Form C literal\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-charmod-literals/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-charmod-literals/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[103]",
                    "displayName": "xmlcanontest002 - \n    Canonicalization of XMLLiterals with reification.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xml-canon/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xml-canon/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[104]",
                    "displayName": "rdfmspara196test001 - \n    test case showing that the 2nd URI in M Paragraph 196 is\npermitted as a namespace URI (and any namespace URI starting\nwith that URI)\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-para196/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-para196/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[105]",
                    "displayName": "rdfnsprefixconfusiontest0012 - \n    Non-prefixed RDF elements (NOT attributes) are allowed when a\ndefault XML element namespace is defined with an\nxmlns=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" attribute.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0012.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0012.nt"
                },
                {
                    "name": "rdf11XmlTests()[106]",
                    "displayName": "rdfnsprefixconfusiontest0013 - \n    Non-prefixed RDF elements (NOT attributes) are allowed when a\ndefault XML element namespace is defined with an\nxmlns=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" attribute.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0013.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0013.nt"
                },
                {
                    "name": "rdf11XmlTests()[107]",
                    "displayName": "rdfnsprefixconfusiontest0010 - \n    Non-prefixed RDF elements (NOT attributes) are allowed when a\ndefault XML element namespace is defined with an\nxmlns=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" attribute.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0010.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0010.nt"
                },
                {
                    "name": "rdf11XmlTests()[108]",
                    "displayName": "xmlcanontest001 - \n    Demonstrating the canonicalisation of XMLLiterals.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xml-canon/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xml-canon/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[109]",
                    "displayName": "rdfnsprefixconfusiontest0011 - \n    Non-prefixed RDF elements (NOT attributes) are allowed when a\ndefault XML element namespace is defined with an\nxmlns=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" attribute.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0011.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0011.nt"
                },
                {
                    "name": "rdf11XmlTests()[110]",
                    "displayName": "rdfnsprefixconfusiontest0014 - \n    Non-prefixed RDF elements (NOT attributes) are allowed when a\ndefault XML element namespace is defined with an\nxmlns=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" attribute.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0014.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-ns-prefix-confusion/test0014.nt"
                },
                {
                    "name": "rdf11XmlTests()[111]",
                    "displayName": "rdfmssyntaxincompleteerror006 - \n    Cannot have rdf:nodeID and rdf:resource.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/error006.rdf"
                },
                {
                    "name": "rdf11XmlTests()[112]",
                    "displayName": "rdfmsrdfnamesusetest019 - \n    Alt is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-019.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-019.nt"
                },
                {
                    "name": "rdf11XmlTests()[113]",
                    "displayName": "rdfmssyntaxincompleteerror004 - \n    Cannot have rdf:nodeID and rdf:ID.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/error004.rdf"
                },
                {
                    "name": "rdf11XmlTests()[114]",
                    "displayName": "rdfmssyntaxincompleteerror005 - \n    Cannot have rdf:nodeID and rdf:about.\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/error005.rdf"
                },
                {
                    "name": "rdf11XmlTests()[115]",
                    "displayName": "rdfmsrdfnamesusetest011 - \n    type is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-011.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-011.nt"
                },
                {
                    "name": "rdf11XmlTests()[116]",
                    "displayName": "rdfmsrdfnamesusetest012 - \n    value is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-012.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-012.nt"
                },
                {
                    "name": "rdf11XmlTests()[117]",
                    "displayName": "rdfnodeelementtest001 - \n    A node element that does not use rdf:Description creates a type.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-node-element/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdf-node-element/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[118]",
                    "displayName": "rdfmsrdfnamesusetest013 - \n    first is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-013.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-013.nt"
                },
                {
                    "name": "rdf11XmlTests()[119]",
                    "displayName": "rdfmsrdfnamesusetest014 - \n    rest is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-014.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-014.nt"
                },
                {
                    "name": "rdf11XmlTests()[120]",
                    "displayName": "rdfmsrdfnamesusetest015 - \n    _1 is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-015.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-015.nt"
                },
                {
                    "name": "rdf11XmlTests()[121]",
                    "displayName": "rdfsdomainandrangetest001 - \n    a RDF Property may have more than one domain property\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfs-domain-and-range/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfs-domain-and-range/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[122]",
                    "displayName": "rdfmsemptypropertyelementstest007 - \n    As test001.rdf; this uses an explicit closing tag.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test007.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test007.nt"
                },
                {
                    "name": "rdf11XmlTests()[123]",
                    "displayName": "rdfmssyntaxincompleteerror002 - \n    The value of rdf:nodeID must match the XML Name production,\n(as modified by XML Namespaces).\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/error002.rdf"
                },
                {
                    "name": "rdf11XmlTests()[124]",
                    "displayName": "rdfmsidentityanonresourcestest003 - \n    a RDF container (in this case a Bag) without an ID attribute\ndescribes an un-named resource, aka a bNode.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-identity-anon-resources/test003.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-identity-anon-resources/test003.nt"
                },
                {
                    "name": "rdf11XmlTests()[125]",
                    "displayName": "rdfmssyntaxincompleteerror003 - \n    The value of rdf:nodeID must match the XML Name production,\n(as modified by XML Namespaces).\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/error003.rdf"
                },
                {
                    "name": "rdf11XmlTests()[126]",
                    "displayName": "rdfmsrdfnamesusetest016 - \n    nil is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-016.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-016.nt"
                },
                {
                    "name": "rdf11XmlTests()[127]",
                    "displayName": "rdfmsidentityanonresourcestest004 - \n    a RDF container (in this case an Alt) without an ID attribute\ndescribes an un-named resource, aka a bNode.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-identity-anon-resources/test004.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-identity-anon-resources/test004.nt"
                },
                {
                    "name": "rdf11XmlTests()[128]",
                    "displayName": "rdfsdomainandrangetest002 - \n    a RDF Property may have more than one domain property\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfs-domain-and-range/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfs-domain-and-range/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[129]",
                    "displayName": "rdfmsemptypropertyelementstest008 - \n    As test002.rdf; this uses an explicit closing tag.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test008.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test008.nt"
                },
                {
                    "name": "rdf11XmlTests()[130]",
                    "displayName": "rdfmsidentityanonresourcestest005 - \n    a RDF container (in this case an Seq) without an ID attribute\ndescribes an un-named resource, aka a bNode.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-identity-anon-resources/test005.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-identity-anon-resources/test005.nt"
                },
                {
                    "name": "rdf11XmlTests()[131]",
                    "displayName": "rdfmsseqrepresentationtest001 - \n    rdf:parseType=\"Collection\" is parsed like the nonstandard\ndaml:collection.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-seq-representation/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-seq-representation/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[132]",
                    "displayName": "rdfmsrdfnamesusetest017 - \n    Seq is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-017.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-017.nt"
                },
                {
                    "name": "rdf11XmlTests()[133]",
                    "displayName": "rdfmsrdfnamesusetest018 - \n    Bag is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-018.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-018.nt"
                },
                {
                    "name": "rdf11XmlTests()[134]",
                    "displayName": "rdfmssyntaxincompleteerror001 - \n    The value of rdf:nodeID must match the XML Name production,\n(as modified by XML Namespaces).\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/error001.rdf"
                },
                {
                    "name": "rdf11XmlTests()[135]",
                    "displayName": "rdfmsseqrepresentationtest002 - \n    rdf:parseType=\"Collection\" and rdf:ID.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-seq-representation/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-seq-representation/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[136]",
                    "displayName": "rdfmsemptypropertyelementstest014 - \n    Test of the last alternative for production [6.12],\ninterpreted according to RDFMS paragraphs 229-234:\nhttp://lists.w3.org/Archives/Public/www-archive/2001Jun/att-0021/00-part#229\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test014.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test014.nt"
                },
                {
                    "name": "rdf11XmlTests()[137]",
                    "displayName": "rdfmsemptypropertyelementstest015 - \n    Test of the last alternative for production [6.12],\ninterpreted according to RDFMS paragraphs 229-234:\nhttp://lists.w3.org/Archives/Public/www-archive/2001Jun/att-0021/00-part#229\nHere we have an explicit closing tag. This does not match any\nof the productions in the original document, but is\nindistinguishable from test014 as far as XML is concerned.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test015.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test015.nt"
                },
                {
                    "name": "rdf11XmlTests()[138]",
                    "displayName": "rdfmsemptypropertyelementstest016 - \n    Like rdfms-empty-property-elements/test001.rdf but with a\nprocessing instruction as the only content of the otherwise\nempty element.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test016.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test016.nt"
                },
                {
                    "name": "rdf11XmlTests()[139]",
                    "displayName": "rdfmsemptypropertyelementstest017 - \n    Like rdfms-empty-property-elements/test001.rdf but with a\ncomment as the only content of the otherwise empty element.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test017.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test017.nt"
                },
                {
                    "name": "rdf11XmlTests()[140]",
                    "displayName": "rdfmsemptypropertyelementstest010 - \n    As test004.rdf; this uses an explicit closing tag.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test010.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test010.nt"
                },
                {
                    "name": "rdf11XmlTests()[141]",
                    "displayName": "rdfmsemptypropertyelementstest011 - \n    As test005.rdf; this uses an explicit closing tag.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test011.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test011.nt"
                },
                {
                    "name": "rdf11XmlTests()[142]",
                    "displayName": "rdfmsrdfnamesusetest020 - \n    Statement is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-020.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-020.nt"
                },
                {
                    "name": "rdf11XmlTests()[143]",
                    "displayName": "rdfmsemptypropertyelementstest012 - \n    As test006.rdf; this uses an explicit closing tag.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test012.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test012.nt"
                },
                {
                    "name": "rdf11XmlTests()[144]",
                    "displayName": "rdfmsemptypropertyelementstest013 - \n    Test of the last alternative for production [6.12],\ninterpreted according to RDFMS paragraphs 229-234:\nhttp://lists.w3.org/Archives/Public/www-archive/2001Jun/att-0021/00-part#229\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test013.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-empty-property-elements/test013.nt"
                },
                {
                    "name": "rdf11XmlTests()[145]",
                    "displayName": "rdfmsrdfnamesusetest021 - \n    Property is allowed as a property element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-021.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-021.nt"
                },
                {
                    "name": "rdf11XmlTests()[146]",
                    "displayName": "rdfmsrdfnamesusetest008 - \n    subject is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-008.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-008.nt"
                },
                {
                    "name": "rdf11XmlTests()[147]",
                    "displayName": "rdfmsreificationrequiredtest002 - \n    A parser must generate inside of other reifications\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-reification-required/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-reification-required/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[148]",
                    "displayName": "rdfmsrdfnamesusetest009 - \n    predicate is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-009.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-009.nt"
                },
                {
                    "name": "rdf11XmlTests()[149]",
                    "displayName": "rdfmsreificationrequiredtest001 - \n    A parser is not required to generate a bag of reified\nstatements for all description elements.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-reification-required/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-reification-required/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[150]",
                    "displayName": "rdfmssyntaxincompletetest002 - \n    rdf:nodeID can be used to label a blank node. These have file\nscope and are distinct from any unlabelled blank nodes.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[151]",
                    "displayName": "rdfmsrdfnamesusetest001 - \n    Description is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-001.nt"
                },
                {
                    "name": "rdf11XmlTests()[152]",
                    "displayName": "rdfmssyntaxincompletetest003 - \n    On an rdf:Description or typed node rdf:nodeID behaves\nsimilarly to an rdf:about.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/test003.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/test003.nt"
                },
                {
                    "name": "rdf11XmlTests()[153]",
                    "displayName": "rdfmsrdfnamesusetest002 - \n    Seq is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-002.nt"
                },
                {
                    "name": "rdf11XmlTests()[154]",
                    "displayName": "rdfmssyntaxincompletetest004 - \n    On a property element rdf:nodeID behaves similarly to\nrdf:resource.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/test004.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/test004.nt"
                },
                {
                    "name": "rdf11XmlTests()[155]",
                    "displayName": "rdfmsrdfnamesusetest003 - \n    Bag is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-003.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-003.nt"
                },
                {
                    "name": "rdf11XmlTests()[156]",
                    "displayName": "rdfmsrdfnamesusetest004 - \n    Alt is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-004.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-004.nt"
                },
                {
                    "name": "rdf11XmlTests()[157]",
                    "displayName": "rdfmsrdfnamesusetest005 - \n    Statement is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-005.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-005.nt"
                },
                {
                    "name": "rdf11XmlTests()[158]",
                    "displayName": "rdfmsrdfnamesusetest006 - \n    Property is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-006.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-006.nt"
                },
                {
                    "name": "rdf11XmlTests()[159]",
                    "displayName": "rdfmsrdfnamesusetest007 - \n    List is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-007.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-007.nt"
                },
                {
                    "name": "rdf11XmlTests()[160]",
                    "displayName": "rdfmssyntaxincompletetest001 - \n    rdf:nodeID can be used to label a blank node.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-syntax-incomplete/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[161]",
                    "displayName": "unrecognisedxmlattributestest001 - \n    Unrecognized attributes in the xml namespace should be\nignored.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/unrecognised-xml-attributes/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/unrecognised-xml-attributes/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[162]",
                    "displayName": "rdfmsidentityanonresourcestest001 - \n    a RDF Description with no ID or about attribute describes an\nun-named resource, aka a bNode.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-identity-anon-resources/test001.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-identity-anon-resources/test001.nt"
                },
                {
                    "name": "rdf11XmlTests()[163]",
                    "displayName": "rdfmsidentityanonresourcestest002 - \n    a RDF Description with no ID or about attribute describes an\nun-named resource, aka a bNode.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-identity-anon-resources/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-identity-anon-resources/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[164]",
                    "displayName": "unrecognisedxmlattributestest002 - \n    Unrecognized attributes in the xml namespace should be\nignored.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/unrecognised-xml-attributes/test002.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/unrecognised-xml-attributes/test002.nt"
                },
                {
                    "name": "rdf11XmlTests()[165]",
                    "displayName": "rdfmsdifferencebetweenidandabouterror1 - \n    two elements cannot use the same ID\n   [Xml Rdf/xml negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-difference-between-ID-and-about/error1.rdf"
                },
                {
                    "name": "rdf11XmlTests()[166]",
                    "displayName": "rdfmsrdfnamesusetest010 - \n    object is allowed as a node element name.\n   [Xml Rdf/xml positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-010.rdf",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/rdfms-rdf-names-use/test-010.nt"
                }
            ]
        },
        {
            "id": "rdf-canonical",
            "name": "RDFC-1.0 (Canonicalization)",
            "total": 86,
            "passed": 86,
            "failed": 0,
            "skipped": 0,
            "passRate": 100.0,
            "durationMs": 272,
            "tests": [
                {
                    "name": "rdfCanonicalTests()[1]",
                    "displayName": "blank_node__point_at_circle_of_3_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 42,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test030-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test030-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[2]",
                    "displayName": "dataset__isomorphic_default_and_iri_named_(map_test) - Isomorphic graphs in default and IRI named graph [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test070-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test070-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[3]",
                    "displayName": "same_literal_value_with_multiple_datatypes [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test062-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test062-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[4]",
                    "displayName": "blank_node__point_at_circle_of_3 [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test030-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test030-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[5]",
                    "displayName": "poison__clique_graph_(negative_test) - A 10-node Clique of blank node resources all inter-related. [RDF-Canonical Rdfc10negativeevaltest]",
                    "status": "PASSED",
                    "durationMs": 96,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test074-in.nq"
                },
                {
                    "name": "rdfCanonicalTests()[6]",
                    "displayName": "blank_node__self_link_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test018-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test018-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[7]",
                    "displayName": "dataset__isomorphic_default_and_iri_named - Isomorphic graphs in default and IRI named graph [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test070-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test070-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[8]",
                    "displayName": "bnode [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test003-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test003-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[9]",
                    "displayName": "deep_diff_(1) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test047-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test047-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[10]",
                    "displayName": "nquads_parsing [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test059-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test059-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[11]",
                    "displayName": "blank_node__double_circle_of_3_(120) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test027-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test027-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[12]",
                    "displayName": "reordered_4_bnodes,_reordered_2_properties_(2) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test039-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test039-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[13]",
                    "displayName": "literal_with_language [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test043-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test043-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[14]",
                    "displayName": "simple_reorder_(1) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test055-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test055-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[15]",
                    "displayName": "typecoerced_type [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test011-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test011-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[16]",
                    "displayName": "blank_node__double_circle_of_3_(120,_reversed) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test067-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test067-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[17]",
                    "displayName": "blank_node__circle_of_3 [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test023-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test023-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[18]",
                    "displayName": "reordered_w/strings_(1) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test035-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test035-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[19]",
                    "displayName": "blank_node__disjoint_self_links [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test019-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test019-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[20]",
                    "displayName": "@list_(map_test) - RDF Collections using rdf:first/rest ladders. [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test053-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test053-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[21]",
                    "displayName": "dataset__referencing_graph_name_(map_test) - Default graph with blank node shared with graph name [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test073-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test073-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[22]",
                    "displayName": "bnode_embed_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test005-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test005-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[23]",
                    "displayName": "same_literal_value_with_multiple_languages [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test061-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test061-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[24]",
                    "displayName": "dataset__referencing_graph_name - Default graph with blank node shared with graph name [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test073-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test073-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[25]",
                    "displayName": "blank_node__dual_link__nonembed_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test017-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test017-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[26]",
                    "displayName": "@list - RDF Collections using rdf:first/rest ladders. [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test053-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test053-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[27]",
                    "displayName": "unnamed_graph_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test057-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test057-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[28]",
                    "displayName": "unnamed_graph_with_blank_node_objects [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test058-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test058-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[29]",
                    "displayName": "check_types [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test014-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test014-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[30]",
                    "displayName": "blank_node__double_circle_of_3_(102) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test026-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test026-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[31]",
                    "displayName": "reordered_4_bnodes,_reordered_2_properties_(1) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test038-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test038-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[32]",
                    "displayName": "multiple_rdf_types [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test006-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test006-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[33]",
                    "displayName": "tgraph [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test054-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test054-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[34]",
                    "displayName": "type [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test010-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test010-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[35]",
                    "displayName": "blank_node__double_circle_of_3_(102,_reversed) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test066-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test066-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[36]",
                    "displayName": "blank_node__double_circle_of_2 [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test022-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test022-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[37]",
                    "displayName": "disjoint_identical_subgraphs_(2) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test034-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test034-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[38]",
                    "displayName": "poison_\u2013_evil_(3) - A poison graph which is computable given defined limits. [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 12,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test046-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test046-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[39]",
                    "displayName": "duplicate_property_iri_values [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test002-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test002-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[40]",
                    "displayName": "blank_node__self_link [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test018-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test018-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[41]",
                    "displayName": "blank_node__diamond_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test020-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test020-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[42]",
                    "displayName": "nquads_escaping_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test060-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test060-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[43]",
                    "displayName": "dataset__shared_blank_nodes_(map_test) - Blank nodes shared in default and named graph [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test072-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test072-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[44]",
                    "displayName": "dataset__shared_blank_nodes - Blank nodes shared in default and named graph [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test072-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test072-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[45]",
                    "displayName": "blank_node__dual_link__embed_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test016-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test016-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[46]",
                    "displayName": "reordered_6_bnodes_(1) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test040-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test040-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[47]",
                    "displayName": "blank_node__double_circle_of_3_(012,_reversed) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test064-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test064-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[48]",
                    "displayName": "blank_node__diamond [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test020-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test020-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[49]",
                    "displayName": "simple_reorder_(2)_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test056-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test056-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[50]",
                    "displayName": "bnode_plus_embed_w/subject_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test004-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test004-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[51]",
                    "displayName": "deep_diff_(2)_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test048-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test048-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[52]",
                    "displayName": "nquads_escaping [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test060-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test060-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[53]",
                    "displayName": "blank_node__double_circle_of_3_(201,_reversed) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test069-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test069-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[54]",
                    "displayName": "blank_node__double_circle_of_3_(021) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test025-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test025-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[55]",
                    "displayName": "bnode_embed [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test005-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test005-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[56]",
                    "displayName": "blank_node__dual_link__nonembed [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test017-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test017-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[57]",
                    "displayName": "blank_node__double_circle_of_3_(021,_reversed) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test065-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test065-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[58]",
                    "displayName": "blank_node__circle_of_2 [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test021-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test021-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[59]",
                    "displayName": "duplicate_triple_with_blank_node_in_input - The duplicate triples must be removed [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test077-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test077-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[60]",
                    "displayName": "disjoint_identical_subgraphs_(1) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test033-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test033-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[61]",
                    "displayName": "poison_\u2013_evil_(2) - A poison graph which is computable given defined limits. [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 13,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test045-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test045-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[62]",
                    "displayName": "simple_id [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test001-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test001-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[63]",
                    "displayName": "typecoerced_type,_cycle [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test013-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test013-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[64]",
                    "displayName": "unnamed_graph [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test057-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test057-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[65]",
                    "displayName": "blank_node__double_circle_of_3_(201) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test029-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test029-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[66]",
                    "displayName": "multiple_subjects__complex [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test009-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test009-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[67]",
                    "displayName": "blank_node__diamond_(with__:b)_(map_test) - This duplicates #test020, but uses _:b as a blank node prefix [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test063-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test063-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[68]",
                    "displayName": "blank_node__diamond_(uses_sha384)_(map_test) - Same as test020 except for using SHA-384 [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test075-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test075-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[69]",
                    "displayName": "simple_reorder_(1)_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test055-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test055-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[70]",
                    "displayName": "dataset__isomorphic_default_and_node_named_(map_test) - Isomorphic graphs in default and blank node named graph [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test071-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test071-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[71]",
                    "displayName": "blank_node__diamond_(with__:b) - This duplicates #test020, but uses _:b as a blank node prefix [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test063-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test063-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[72]",
                    "displayName": "blank_node__diamond_(uses_sha384) - Same as test020 except for using SHA-384 [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test075-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test075-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[73]",
                    "displayName": "bnode_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test003-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test003-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[74]",
                    "displayName": "deep_diff_(1)_(map_test) [RDF-Canonical Rdfc10maptest]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test047-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test047-rdfc10map.json"
                },
                {
                    "name": "rdfCanonicalTests()[75]",
                    "displayName": "dataset__isomorphic_default_and_node_named - Isomorphic graphs in default and blank node named graph [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test071-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test071-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[76]",
                    "displayName": "reordered_w/strings_(2) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test036-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test036-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[77]",
                    "displayName": "deep_diff_(2) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test048-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test048-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[78]",
                    "displayName": "bnode_plus_embed_w/subject [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test004-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test004-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[79]",
                    "displayName": "blank_node__dual_link__embed [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test016-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test016-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[80]",
                    "displayName": "blank_node__double_circle_of_3_(210) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test028-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test028-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[81]",
                    "displayName": "duplicate_ground_triple_in_input - The duplicate triples must be removed [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test076-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test076-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[82]",
                    "displayName": "poison_\u2013_evil_(1) - A poison graph which is computable given defined limits. [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 11,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test044-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test044-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[83]",
                    "displayName": "simple_reorder_(2) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test056-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test056-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[84]",
                    "displayName": "blank_node__double_circle_of_3_(210,_reversed) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test068-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test068-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[85]",
                    "displayName": "blank_node__double_circle_of_3_(012) [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test024-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test024-rdfc10.nq"
                },
                {
                    "name": "rdfCanonicalTests()[86]",
                    "displayName": "single_subject_complex [RDF-Canonical Rdfc10evaltest]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test008-in.nq",
                    "resultUri": "https://w3c.github.io/rdf-canon/tests/rdfc10/test008-rdfc10.nq"
                }
            ]
        },
        {
            "id": "rdfa-svg",
            "name": "RDFa 1.1 (SVG)",
            "total": 31,
            "passed": 30,
            "failed": 0,
            "skipped": 1,
            "passRate": 96.77,
            "durationMs": 47,
            "tests": [
                {
                    "name": "rdf11RDFaSVGTests()[1]",
                    "displayName": "test_0226:_confusion_between_multiple_implicit_collections_(resource) - Use of @inlist with implicit subject uses different list [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0226.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0226.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[2]",
                    "displayName": "test_0304:_embedded_chunks_of_rdf/xml - Tests that embedded RDF/XML is added to the same graph. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0304.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0304.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[3]",
                    "displayName": "test_0227:_confusion_between_multiple_implicit_collections_(about) - Use of @inlist with implicit subject uses different list [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0227.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0227.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[4]",
                    "displayName": "test_0290:_@href_becomes_subject_when_@property_and_@datatype_are_present - When @property and @datatype are present but @about, @rel and @rev are not, @href is used as subject and element content is used as an object literal. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0290.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0290.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[5]",
                    "displayName": "test_0293:_testing_the_':'_character_usage_in_a_curie - RDFa 1.1 CURIE allows the ':' to appear in the reference part of a CURIE. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0293.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0293.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[6]",
                    "displayName": "test_0291:_@href_as_subject_overridden_by_@about - When @property, @datatype, @href and @about are present but @rel and @rev are not, @about is used as subject. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0291.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0291.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[7]",
                    "displayName": "test_0292:_@about_overriding_@href_as_subject_is_used_as_parent_resource - When @property, @datatype, @href and @about are present but @rel and @rev are not, @about is used as subject and is also applied to nested descriptions. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0292.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0292.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[8]",
                    "displayName": "test_0297:_@about=[]_with_@typeof_does_not_create_a_new_subject - When the @about resolves to nothing, the typed resource should not create a new subject. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0297.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0297.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[9]",
                    "displayName": "test_0298:_@about=[]_with_@typeof_does_not_create_a_new_object - When the @about resolves to nothing, the typed resource should not create a new subject (chaining). [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0298.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0298.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[10]",
                    "displayName": "test_0295:_benchmark_test - Complex benchmark document. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "SKIPPED",
                    "durationMs": 0,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0295.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0295.ttl",
                    "skipReason": "UPSTREAM_FIXTURE: benchmark mixes HTML-only rules into SVG and compares concatenated markup with isolated-test results"
                },
                {
                    "name": "rdf11RDFaSVGTests()[11]",
                    "displayName": "test_0296:_@property_does_set_parent_object_without_@typeof - When @property is used with a resource attribute (@href, @resource, ...) it does not set parent object. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0296.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0296.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[12]",
                    "displayName": "test_0214:_root_element_has_implicit_@about=\"\" - All documents have an implicit @about=\"\"  [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0214.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0214.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[13]",
                    "displayName": "test_0299:_@resource=[]_with_@href_or_@src_uses_@href_or_@src_(@rel) - When the @resource resolves to nothing, @href or @src should be used (@rel case). [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0299.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0299.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[14]",
                    "displayName": "test_0311:_ensure_no_triples_are_generated_when_@property_is_empty - If no terms or CURIEs are present in @property, no triple should be generated from it. [RDFa+SVG Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0311.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0311.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[15]",
                    "displayName": "test_0234:_all_defined_html_link_relation_values - Tests to ensure that all defined linked relations expand [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0234.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0234.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[16]",
                    "displayName": "test_0218:_@inlist_to_create_empty_list - @inlist on @rel with no incomplete triples creates an empty list. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0218.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0218.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[17]",
                    "displayName": "test_0259:_xml+rdfa_initial_context - All processors must load the RDFa Core Initial Context. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0259.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0259.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[18]",
                    "displayName": "test_0219:_@inlist_with_literal - @inlist with @property creates a list having a literal as a single element. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0219.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0219.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[19]",
                    "displayName": "test_0220:_@inlist_with_iri - @inlist with @rel and @href creates a list having an IRI as a single element. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0220.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0220.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[20]",
                    "displayName": "test_0221:_@inlist_with_hetrogenious_membership - @inlist with @rel and @property creates a list with both IRI and Literal elements. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0221.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0221.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[21]",
                    "displayName": "test_0301:_@property_with_@typeof_creates_a_typed_resource_for_chaining - @property with @typeof creates a typed_resource for chaining. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0301.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0301.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[22]",
                    "displayName": "test_0224:_@inlist_hanging_@rel - Use of @rel and @inlist with decendent IRI elements creates list [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0224.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0224.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[23]",
                    "displayName": "test_0202:_tests_to_ensure_@xml:base_used_in_svg - Tests to make sure that @xml:base is used in SVG+RDFa, XML+RDFa. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0202.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0202.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[24]",
                    "displayName": "test_0203:_tests_to_ensure_@xml:base,_xml+rdfa_used_in_nonroot_elements_in_svg - Tests to make sure that @xml:base is used in non-root elements in SVG+RDFa, XML+RDFa. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0203.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0203.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[25]",
                    "displayName": "test_0302:_@typeof_with_different_content_types - Tests that @typof works with terms, CURIES or IRIs. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0302.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0302.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[26]",
                    "displayName": "test_0225:_@inlist_on_different_elements_with_same_subject - @inlist with same property and subject on different elements creates multiple lists [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0225.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0225.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[27]",
                    "displayName": "test_0222:_@inlist_with_multilevel_elements - @inlist with @property at different levels of descendence creates single list. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0222.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0222.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[28]",
                    "displayName": "test_0201:_expressing_an_attribute_using_@property - Tests @property to establish the predicate; literal object is in the content of the element. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0201.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0201.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[29]",
                    "displayName": "test_0223:_@inlist_with_nonlist_property - Use of predicate with @inlist and without @inlist creates both list and non-list triples. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0223.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0223.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[30]",
                    "displayName": "test_0289:_@href_becomes_subject_when_@property_and_@content_are_present - When @property and @content are present but @about, @rel and @rev are not, @href is used as subject. [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0289.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0289.ttl"
                },
                {
                    "name": "rdf11RDFaSVGTests()[31]",
                    "displayName": "test_0300:_@resource=[]_with_@href_or_@src_uses_@href_or_@src_(@property) - When the @resource resolves to nothing, @href or @src should be used (@property case). [RDFa+SVG Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0300.svg",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/svg/0300.ttl"
                }
            ]
        },
        {
            "id": "rdfa-xhtml",
            "name": "RDFa 1.1 (XHTML)",
            "total": 181,
            "passed": 180,
            "failed": 0,
            "skipped": 1,
            "passRate": 99.45,
            "durationMs": 666,
            "tests": [
                {
                    "name": "rdf11RDFaXHTMLTests()[1]",
                    "displayName": "test_0070:_relative_uri_in_@resource - Tests to ensure that relative URI is resolved correctly when used in @resource [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 22,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0070.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0070.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[2]",
                    "displayName": "test_0190:_test_term_case_insensitivity - Check to ensure a mixed case term matches a case insensitive definition [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 6,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0190.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0190.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[3]",
                    "displayName": "test_0074:_relative_uri_in_@href_(with_xhtml_base_in_head) - Tests to ensure that relative URIs are resolved correctly when used in @href with XHTML base set in head [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0074.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0074.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[4]",
                    "displayName": "test_0073:_relative_uri_in_@resource_(with_xhtml_base_in_head) - Tests to ensure that relative URIs are resolved correctly when used in @resource with XHTML base set in head [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0073.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0073.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[5]",
                    "displayName": "test_0072:_relative_uri_in_@about_(with_xhtml_base_in_head) - Tests to ensure that relative URIs are resolved correctly when used in @about with XHTML base set in head [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0072.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0072.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[6]",
                    "displayName": "test_0071:_no_explicit_@about - Tests to ensure that a triple is generated even if @typeof and @about is not specified anywhere in the document [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0071.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0071.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[7]",
                    "displayName": "test_0229:_img[@src]_test_with_omitted_@about - Tests if a @src (in img element) does not set the URIref object (with omitted @about) -- from 0042 [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0229.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0229.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[8]",
                    "displayName": "test_0108:_plain_literal_with_datatype=\"\"_and_xml:lang_preservation - Checks to make sure that the RDFa parser emits a plain literal when the datatype is specified as \"\" and preserves the xml:lang value. The text, with control characters and whitespace preserved, reads \"Greek\nwhite   space\n\". [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 6,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0108.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0108.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[9]",
                    "displayName": "test_0107:_no_garbage_collecting_bnodes - Checks to make sure that that while we shouldn't garbage collect bnodes no triples are generated. [RDFa+XHTML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0107.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0107.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[10]",
                    "displayName": "test_0228:_11_alternate_for_test_0040:_@rev__@src/@resource_test - @src is a lower priority than @resource [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0228.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0228.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[11]",
                    "displayName": "test_0227:_confusion_between_multiple_implicit_collections_(about) - Use of @inlist with implicit subject uses different list [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 8,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0227.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0227.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[12]",
                    "displayName": "test_0106:_chaining_with_empty_value_in_inner_@rel - Tests the behavior of triple generation in the case where the inner @rel is defined, but is blank, which halts chaining. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0106.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0106.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[13]",
                    "displayName": "test_0226:_confusion_between_multiple_implicit_collections_(resource) - Use of @inlist with implicit subject uses different list [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0226.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0226.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[14]",
                    "displayName": "test_0221:_@inlist_with_hetrogenious_membership - @inlist with @rel and @property creates a list with both IRI and Literal elements. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0221.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0221.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[15]",
                    "displayName": "test_0067:_@property_in_the_head - Test to make sure that @property in head uses the implied current document as the subject if no other subject is specified [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0067.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0067.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[16]",
                    "displayName": "test_0188:_@vocab_only_affects_predicates - Check that @vocab definitions on parent elements only affect predicate establishment. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0188.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0188.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[17]",
                    "displayName": "test_0187:_@vocab_redefinition - Check that a more deeply nested @vocab attribute overloads a previous @vocab definition. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0187.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0187.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[18]",
                    "displayName": "test_0220:_@inlist_with_iri - @inlist with @rel and @href creates a list having an IRI as a single element. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0220.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0220.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[19]",
                    "displayName": "test_0066:_@about_with_@typeof_in_the_head - Test to make sure that @about (with current document) is implied in the head, and the proper triples are generated using @typeof [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0066.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0066.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[20]",
                    "displayName": "test_0065:_@rel_with_safe_curie - Tests if @rel properly connects triples generated when safe CURIEs are used [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 12,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0065.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0065.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[21]",
                    "displayName": "test_0186:_@vocab_after_subject_declaration - Check that @vocab establishes a new default vocabulary when declared on the same element as a subject declaration via @about. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0186.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0186.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[22]",
                    "displayName": "test_0064:_@about_with_safe_curie - Tests if @about generates a proper triple when a safe CURIE is used [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0064.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0064.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[23]",
                    "displayName": "test_0104:_rdf:value - Tests rdf:value with blank nodes to give a value with a unit [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0104.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0104.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[24]",
                    "displayName": "test_0225:_@inlist_on_different_elements_with_same_subject - @inlist with same property and subject on different elements creates multiple lists [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0225.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0225.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[25]",
                    "displayName": "test_0224:_@inlist_hanging_@rel - Use of @rel and @inlist with decendent IRI elements creates list [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0224.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0224.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[26]",
                    "displayName": "test_0069:_relative_uri_in_@href - Tests to ensure that relative URI is resolved correctly when used in @href [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0069.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0069.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[27]",
                    "displayName": "test_0223:_@inlist_with_nonlist_property - Use of predicate with @inlist and without @inlist creates both list and non-list triples. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0223.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0223.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[28]",
                    "displayName": "test_0068:_relative_uri_in_@about - Tests to ensure that relative URI is resolved correctly when used in @about [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0068.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0068.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[29]",
                    "displayName": "test_0222:_@inlist_with_multilevel_elements - @inlist with @property at different levels of descendence creates single list. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0222.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0222.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[30]",
                    "displayName": "test_0189:_@vocab_overrides_default_term - \n    Check that @vocab changes a default term from XHV. Lookup checks default vocabulary before\n    local term mappings.\n    [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0189.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0189.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[31]",
                    "displayName": "test_0080:_@about_overrides_@resource_in_incomplete_triples - Tests if @about has a higher priority than @resource in handling incomplete triples [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0080.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0080.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[32]",
                    "displayName": "test_0085:_@resource_and_@href_in_completing_incomplete_triples - Tests the role of @resource and @href in completing incomplete triples (including their mutual priorities), but with an intermediate layer (ie, bNode) added [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0085.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0085.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[33]",
                    "displayName": "test_0084:_multiple_ways_of_handling_incomplete_triples,_this_time_with_both_@rel_and_@rev - Tests multiple ways of handling incomplete triples, this time with both @rel and @rev. There is an intermediate div that should be ignored by the process [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0084.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0084.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[34]",
                    "displayName": "test_0083:_multiple_ways_of_handling_incomplete_triples_(merged) - Tests multiple ways of handling incomplete triples; the first two triples should use the same bNode as subject ('merged'); the third case should use @about [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0083.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0083.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[35]",
                    "displayName": "test_0119:_\"[prefix:]\"_curie_format_is_valid - Checks to make sure that an RDFa processor expands CURIEs having only a prefix and a\n    colon if a prefix is properly defined using xmlns.\n     [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0119.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0119.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[36]",
                    "displayName": "test_0118:_empty_string_\"\"_is_not_equivalent_to_null__@about - Checks to make sure that the empty\n  string \"\" isn't considered as NULL in languages such as Javascript when\n  generating triples. This test sets the subject in a chain using @href\n  and then immediately changes the subject using @about and generates a\n  triple. A buggy parser may use the @href subject\n  (http://example.org/javascript.html) instead of the one defined by @about. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0118.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0118.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[37]",
                    "displayName": "test_0117:_fragment_identifiers_stripped_from_base - Checks to make sure that fragment identifiers are stripped from [base] when used to generate triples. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0117.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0117.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[38]",
                    "displayName": "test_0111:_two_bnodes_generated_after_three_levels_of_nesting - Tests to make sure that two bNodes are generated after three levels of nesting and that the last div does not generate a triple. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0111.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0111.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[39]",
                    "displayName": "test_0232:_@typeof_with_@rel_present,_no_@href,_@resource,_or_@about_(11_behavior_of_0046); - Tests @typeof with @rel present, no @href, @resource, or @about creates a BNode object [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0232.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0232.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[40]",
                    "displayName": "test_0110:_bnode_generated_even_though_no_nested_@about_exists - Tests to make sure that a bNode is generated even though no nested @about exists. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 6,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0110.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0110.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[41]",
                    "displayName": "test_0231:_set_image_license_information - Tests new behavior of @src in 1.1 [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 7,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0231.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0231.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[42]",
                    "displayName": "test_0077:_all_reserved_xhtml_@rev_values - Tests to ensure that all reserved XHTML words are supported in @rev [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 9,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0077.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0077.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[43]",
                    "displayName": "test_0198:_datatype_xmlliteral_with_other_embedded_rdfa - Checks to ensure that when datatype is the default the parser generates triples for embedded content. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 8,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0198.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0198.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[44]",
                    "displayName": "test_0230:_@src_does_not_set_a_new_subject_(@rel/@href) - Tests to ensure that @src does not set a new subject (oposite of 0090 for 1.0). [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0230.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0230.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[45]",
                    "displayName": "test_0197:_test_termorcurieorabsuri_requires_an_absolute_uri - TERMorCURIEorAbsURI requires an absolute URI [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 74,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0197.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0197.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[46]",
                    "displayName": "test_0076:_all_reserved_xhtml_@rel_values - Tests to ensure that all reserved XHTML words are supported in @rel [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0076.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0076.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[47]",
                    "displayName": "test_0075:_reserved_word_'license'_in_@rel_with_no_explicit_@about - Tests to ensure that the XHTML+RDFa reserved word 'license' when used in @rel (with no @about) generates the proper triple [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0075.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0075.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[48]",
                    "displayName": "test_0196:_test_process_explicit_xmlliteral - XMLLiteral must be explicitly specified, otherwise a normal untyped literal is created [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0196.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0196.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[49]",
                    "displayName": "test_0115:_xml_entities_must_be_supported_by_rdfa_parser - Checks to make sure that XML Entities are treated properly by the RDFa parser. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0115.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0115.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[50]",
                    "displayName": "test_0114:_relative_uri_dotsegment_removal - Checks to make sure that a relative URI is resolved correctly according to RFC3986, section 5 (even when the relative URI is invalid, in this case). [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 8,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0114.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0114.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[51]",
                    "displayName": "test_0113:_element_with_@property_and_no_child_nodes_generates__empty_plain_literal - Checks to make sure that an element with @property and no child nodes generates empty plain literal. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0113.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0113.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[52]",
                    "displayName": "test_0234:_all_defined_html_link_relation_values - Tests to ensure that all defined linked relations expand [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0234.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0234.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[53]",
                    "displayName": "test_0079:_@resource_and_@href_in_completing_incomplete_triples - Tests role of @resource and @href in completing incomplete triples (including their mutual priorities) [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0079.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0079.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[54]",
                    "displayName": "test_0233:_@typeof_with_@rel_and_@resource_present,_no_@about_(11_behavior_of_0047) - Tests @typeof with @rel and @resource present, no @about adds type to object [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0233.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0233.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[55]",
                    "displayName": "test_0112:_plain_literal_with_datatype=\"\" - Checks to make sure that the RDFa parser emits a plain literal when the datatype is specified as \"\". [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0112.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0112.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[56]",
                    "displayName": "test_0091:_nonreserved,_unprefixed_curie_in_@property - Tests to ensure that non-reserved, un-prefixed CURIEs, when used in @property, generate triples. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0091.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0091.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[57]",
                    "displayName": "test_0250:_checking_the_right_behaviour_of_@typeof_with_@about,_in_presence_of_@property - Tests that @typeof is clearly bound to @about, and @property therefore creates a Literal object [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0250.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0250.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[58]",
                    "displayName": "test_0093:_tests_xmlliteral_content_with_explicit_@datatype_(userdatatyped_literal) - Tests the explicit specification of an RDF XMLLiteral with @datatype using a non-RDF namespace, yielding a user-data-typed literal [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0093.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0093.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[59]",
                    "displayName": "test_0009:_@rev - Tests @rev. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0009.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0009.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[60]",
                    "displayName": "test_0008:_empty_string_@about - Tests empty @about. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0008.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0008.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[61]",
                    "displayName": "test_0249:_multiple_ways_of_handling_incomplete_triples_(with_@rel_and_@rev);_rdfa_11_version - Tests multiple ways of handling incomplete triples, this time with both @rel and @rev [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0249.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0249.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[62]",
                    "displayName": "test_0007:_@rel,_@rev,_@property,_@content - Tests @rel, @rev, @property, and @content together to generate several RDF triples. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0007.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0007.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[63]",
                    "displayName": "test_0006:_@rel_and_@rev - Tests @rev and @rel together, with the object being specified by @href, ignoring content [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0006.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0006.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[64]",
                    "displayName": "test_0248:_multiple_ways_of_handling_incomplete_triples_(with_@rev);_rdfa_11_version - Tests multiple ways of handling incomplete triples, this time with @rev [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0248.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0248.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[65]",
                    "displayName": "test_0001:_predicate_establishment_with_@property - Tests @property to establish the predicate; literal object is in the content of the element. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0001.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0001.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[66]",
                    "displayName": "test_0122:_resource=\"[]\"_does_not_set_the_object - Checks to make sure that resource=\"[]\" does not set the object since RDFa does not allow non-prefixed CURIEs.\n [RDFa+XHTML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0122.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0122.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[67]",
                    "displayName": "test_0089:_@src_sets_a_new_subject_(@typeof) - Tests to ensure that @src sets a new subject (focuses on @typeof). [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0089.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0089.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[68]",
                    "displayName": "test_0088:_interpretation_of_the_curie_\"_:\" - Test the interpretation of the CURIE \"_:\"  [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0088.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0088.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[69]",
                    "displayName": "test_0121:_\"[]\"_is_a_valid_safe_curie - Checks to make sure RDFa processors resolve the empty CURIE correctly. Note that this is not valid HTML due to recursive <p> elements. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0121.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0121.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[70]",
                    "displayName": "test_0087:_all_reserved_xhtml_@rel_values_(with_:xxx) - Tests to ensure that all reserved XHTML words are supported in @rel (with :xxx) [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0087.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0087.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[71]",
                    "displayName": "test_0120:_\"[:]\"_curie_format_is_valid - Checks to make sure that an RDFa processor expands CURIEs having only a colon to the\n  default prefix \"http://www.w3.org/1999/test-cases/vocab#\".\n [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0120.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0120.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[72]",
                    "displayName": "test_0247:_multiple_incomplete_triples,_rdfa_11version - Tests multiple ways of handling incomplete triples; the first two triples should use the same bnode as subject ('merged'). The third should have a separate bNode. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0247.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0247.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[73]",
                    "displayName": "test_0126:_multiple_@typeof_values - Checks to ensure that multiple (white space separated) values in @typeof trigger multiple rdf:type triples. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0126.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0126.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[74]",
                    "displayName": "test_0246:_hanging_@rel_creates_multiple_triples,_@typeof_permutation;_rdfa_11_version - Tests if hanging @rel creates multiple triples with @typeof permutation [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0246.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0246.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[75]",
                    "displayName": "test_0140:_blank_nodes_identifiers_are_not_allowed_as_predicates - The RDF data model does not allow blank node identifiers in predicates. This test ensures that RDFa processors do not emit invalid triples. [RDFa+XHTML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0140.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0140.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[76]",
                    "displayName": "test_0261:_white_space_preservation_in_xmlliteral - Whitespace must be maintained in an XMLLiteral, too [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0261.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0261.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[77]",
                    "displayName": "test_0260:_xhtml+rdfa_initial_context - XHTML+RDFa initial context. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0260.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0260.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[78]",
                    "displayName": "test_0019:_@about_for_subject - Tests @about to establish subject. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0019.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0019.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[79]",
                    "displayName": "test_0018:_@rel_for_predicate - Tests @rel to establish predicate. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0018.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0018.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[80]",
                    "displayName": "test_0017:_related_blanknodes - Tests creation of statements involving explicitly created blank nodes. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0017.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0017.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[81]",
                    "displayName": "test_0259:_xml+rdfa_initial_context - All processors must load the RDFa Core Initial Context. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 9,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0259.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0259.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[82]",
                    "displayName": "test_0012:_@xml:lang - Tests @xml:lang [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0012.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0012.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[83]",
                    "displayName": "test_0254:_@datatype=\"\"_generates_plain_literal_in_presence_of_child_nodes - Checks to ensure that when @datatype=\"\" is used on an element that contains child nodes, that the literal that is generated is a plain literal. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0254.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0254.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[84]",
                    "displayName": "test_0099:_preservation_of_white_space_in_literals - Tests the preservation of white space in literals. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0099.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0099.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[85]",
                    "displayName": "test_0253:_plain_literal_with_datatype=\"\"_and_lang_preservation - Checks to make sure that the RDFa parser emits a plain literal when the datatype is specified as \"\" and preserves the xml:lang value. The text, with control characters and whitespace preserved, reads \"Greek\nwhite   space\n\". [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0253.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0253.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[86]",
                    "displayName": "test_0252:_lang_inheritance - Tests lang inheritance [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0252.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0252.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[87]",
                    "displayName": "test_0131:_whitespace_alternatives_in_attributes - Ensures that multiple whitespace alternatives in attributes are allowed. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0131.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0131.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[88]",
                    "displayName": "test_0010:_@rel,_@rev,_@href - Tests @rel, @rev, and @href to generate two RDF triples. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0010.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0010.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[89]",
                    "displayName": "test_0251:_lang - Tests lang [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0251.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0251.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[90]",
                    "displayName": "test_0258:_the_underscore_character_is_not_allowed_as_a_prefix_or_in_xmlns - Ensures that a prefix cannot start with an underscore character when specified using xmlns or prefix. [RDFa+XHTML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0258.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0258.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[91]",
                    "displayName": "test_0257:_element_with_@property_and_no_child_nodes_generates__empty_plain_literal_(html5_version_of_0113) - Checks to make sure that an element with @property and no child nodes generates empty plain literal. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0257.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0257.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[92]",
                    "displayName": "test_0015:_meta_and_link - Tests meta and link with no parent @about [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0015.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0015.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[93]",
                    "displayName": "test_0256:_lang_and_xml:lang_on_the_same_element - Tests @xml:lang and @lang on the same element with different values; @xml:lang should prevail. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0256.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0256.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[94]",
                    "displayName": "test_0014:_@datatype,_xsd:integer - Tests setting the @datatype to xsd:integer [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0014.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0014.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[95]",
                    "displayName": "test_0013:_@xml:lang_inheritance - Tests @xml:lang inheritance [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0013.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0013.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[96]",
                    "displayName": "test_0134:_uppercase_reserved_words - Ensures that mixed-case reserved words generate triples. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0134.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0134.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[97]",
                    "displayName": "test_0255:_lang=\"\"_clears_language_setting - Checks to ensure that when lang=\"\" is used that any parent element language setting is cleared and a language-less literal is generated. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0255.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0255.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[98]",
                    "displayName": "test_0030:_omitted_@about - Tests omitted @about. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0030.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0030.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[99]",
                    "displayName": "test_0271:_use_of_@property_in_head_with_explicit_parent_subject_via_@about - @property appearing on the head element gets the subject from parent, also with @content and explicit @about at the top [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0271.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0271.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[100]",
                    "displayName": "test_0029:_markup_stripping_with_@datatype - Tests markup stripping from a span element with @datatype=xsd:string [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0029.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0029.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[101]",
                    "displayName": "test_0023:_@id_does_not_generate_subjects - Tests that @id does not generate subjects [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0023.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0023.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[102]",
                    "displayName": "test_0265:_@property_appearing_on_the_head_element_gets_the_subject_from_<html>,_ie,_parent - @property appearing on the head element gets the subject from <html>, ie, parent; in this case the parent subject is explicitly set via @about [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0265.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0265.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[103]",
                    "displayName": "test_0264:_@property_appearing_on_the_head_element_gets_the_subject_from_<html>,_ie,_parent - @property appearing on the head element gets the subject from <html>, ie, parent [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0264.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0264.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[104]",
                    "displayName": "test_0263:_@property_appearing_on_the_html_element_yields_the_base_as_the_subject - @property appearing on the html element without @content or @datatype yields the base as the subject [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0263.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0263.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[105]",
                    "displayName": "test_0021:_subject_inheritance_with_no_@about - Tests inheritance of subject when no @about can be found [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0021.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0021.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[106]",
                    "displayName": "test_0262:_predicate_establishment_with_@property,_with_white_spaces_before_and_after_the_attribute_value - Tests @property to establish the predicate; literal object is in the content of the element. There are extra whitespaces before and after the property attribute value which should be ignored [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0262.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0262.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[107]",
                    "displayName": "test_0020:_inheriting_@about_for_subject - Tests @about inheritance to establish subject. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0020.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0020.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[108]",
                    "displayName": "test_0302:_@typeof_with_different_content_types - Tests that @typof works with terms, CURIES or IRIs. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 6,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0302.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0302.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[109]",
                    "displayName": "test_0027:_@content,_ignore_element_content - Tests @content for literal object, overriding element content. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0027.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0027.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[110]",
                    "displayName": "test_0269:_use_of_@property_in_head_without_explicit_subject - @property appearing on the html element without @content or @datatype yields the base as the subject, also with @content [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0269.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0269.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[111]",
                    "displayName": "test_0147:_xmlns_prefix_'xmlzzz'_(reserved) - Ensures that RDFa processors allow the prefix 'xmlzzz', even though it is a reserved prefix in XML. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0147.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0147.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[112]",
                    "displayName": "test_0301:_@property_with_@typeof_creates_a_typed_resource_for_chaining - @property with @typeof creates a typed_resource for chaining. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0301.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0301.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[113]",
                    "displayName": "test_0026:_@content - Tests @content for literal object [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0026.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0026.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[114]",
                    "displayName": "test_0268:_@property_without_@content_or_@datatype,_typed_object_set_by_@src_and_@typeof - @property without @content or @datatype, typed object set by @src and @typeof [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0268.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0268.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[115]",
                    "displayName": "test_0267:_@property_without_@content_or_@datatype,_typed_object_set_by_@resource_and_@typeof - @property without @content or @datatype, typed object set by @resource and @typeof [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0267.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0267.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[116]",
                    "displayName": "test_0025:_simple_chaining_test - Tests simple chaining with cascade of @resource and @property [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0025.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0025.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[117]",
                    "displayName": "test_0300:_@resource=[]_with_@href_or_@src_uses_@href_or_@src_(@property) - When the @resource resolves to nothing, @href or @src should be used (@property case). [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0300.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0300.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[118]",
                    "displayName": "test_0266:_@property_without_@content_or_@datatype,_typed_object_set_by_@href_and_@typeof - @property without @content or @datatype, typed object set by @href and @typeof [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0266.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0266.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[119]",
                    "displayName": "test_0041:_@rev__@src/@href/@resource_test - Tests if @resource overwrites both @href and @src correctly to set the URIref subject (due to @rev) [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0041.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0041.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[120]",
                    "displayName": "test_0039:_@rev__@src/@href_test - Tests if @href overwrites @src correctly to set the URIref subject (due to @rev) [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0039.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0039.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[121]",
                    "displayName": "test_0319:_relative_@profile - \n     Relative IRI's used with @prefix do not resolve against the document base; they are not processed in any way.\n     However, the returned document does have a base, so when queried, it will seem to have\n     the same base as the original document.\n     [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0319.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0319.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[122]",
                    "displayName": "test_0318:_setting_@vocab_to_empty_strings_removes_default_vocabulary - If the value (of @vocab) is empty, then the local default vocabulary must be reset to the Host Language defined default. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0318.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0318.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[123]",
                    "displayName": "test_0034:_simple_img[@src]_test - Tests if a @src (in img element) correctly sets the URIref object [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0034.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0034.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[124]",
                    "displayName": "test_0033:_simple_chaining_test_with_bnode - Tests simple chaining with cascade of bNode and @property [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0033.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0033.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[125]",
                    "displayName": "test_0032:_@resource_overrides_@href - Tests if @resource overrides @href to set the URIref object. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0032.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0032.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[126]",
                    "displayName": "test_0031:_simple_@resource - Tests if @resource sets URIref object correct. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0031.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0031.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[127]",
                    "displayName": "test_0038:_@rev__img[@src]_test - Tests if a @src (in img element) correctly sets the URIref subject (due to @rev) [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0038.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0038.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[128]",
                    "displayName": "test_0037:_@src/@href/@resource_test - Tests if @resource overwrites both @href and @src [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0037.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0037.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[129]",
                    "displayName": "test_0311:_ensure_no_triples_are_generated_when_@property_is_empty - If no terms or CURIEs are present in @property, no triple should be generated from it. [RDFa+XHTML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0311.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0311.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[130]",
                    "displayName": "test_0036:_@src/@resource_test - Tests if @resource overwrites @src [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0036.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0036.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[131]",
                    "displayName": "test_0035:_@src/@href_test - Tests if @href overwrites @src [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0035.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0035.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[132]",
                    "displayName": "test_0290:_@href_becomes_subject_when_@property_and_@datatype_are_present - When @property and @datatype are present but @about, @rel and @rev are not, @href is used as subject and element content is used as an object literal. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0290.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0290.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[133]",
                    "displayName": "test_0173:_@xml:lang=\"\"_clears_language_setting - Checks to ensure that when @xml:lang=\"\" is used that any parent element language setting is cleared and a language-less literal is generated. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0173.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0173.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[134]",
                    "displayName": "test_0052:_@typeof_with_@resource_and_nothing_else - Tests to ensure that @typeof does not apply to @resource [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0052.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0052.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[135]",
                    "displayName": "test_0051:_@typeof_with_a_single_@property - Tests @typeof with a single @property [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0051.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0051.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[136]",
                    "displayName": "test_0293:_testing_the_':'_character_usage_in_a_curie - RDFa 1.1 CURIE allows the ':' to appear in the reference part of a CURIE. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0293.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0293.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[137]",
                    "displayName": "test_0172:_@datatype=\"\"_generates_plain_literal_in_presence_of_child_nodes - Checks to ensure that when @datatype=\"\" is used on an element that contains child nodes, that the literal that is generated is a plain literal. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0172.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0172.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[138]",
                    "displayName": "test_0050:_@typeof_without_anything_else - Tests @typeof without anything else [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0050.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0050.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[139]",
                    "displayName": "test_0292:_@about_overriding_@href_as_subject_is_used_as_parent_resource - When @property, @datatype, @href and @about are present but @rel and @rev are not, @about is used as subject and is also applied to nested descriptions. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0292.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0292.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[140]",
                    "displayName": "test_0291:_@href_as_subject_overridden_by_@about - When @property, @datatype, @href and @about are present but @rel and @rev are not, @about is used as subject. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0291.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0291.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[141]",
                    "displayName": "test_0207:_vevent_using_@typeof - Tests Vevent using @typeof (inlc. dtstart, dtend, etc.) [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 14,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0207.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0207.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[142]",
                    "displayName": "test_0206:_usage_of_initial_context - Tests whether the default RDFa 1.1 context (which contains prefix definitions, among others, to the Semantic Web Standard vocabularies) is properly handled. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0206.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0206.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[143]",
                    "displayName": "test_0329:_recursive_triple_generation - Tests recursive triple generation for nested literals. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0329.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0329.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[144]",
                    "displayName": "test_0320:_@property_binds_to_@href - Given @property with @href and @src, @href is used as object and sets new subject. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0320.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0320.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[145]",
                    "displayName": "test_0049:_@typeof_with_@about,_no_@rel_or_@resource - Tests @typeof with @about, no @rel or @resource [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0049.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0049.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[146]",
                    "displayName": "test_0048:_@typeof_with_@about_and_@rel_present,_no_@resource - Tests @typeof with @about and @rel present, no @resource [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0048.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0048.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[147]",
                    "displayName": "test_0289:_@href_becomes_subject_when_@property_and_@content_are_present - When @property and @content are present but @about, @rel and @rev are not, @href is used as subject. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0289.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0289.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[148]",
                    "displayName": "test_0180:_test_@prefix_with_empty_mapping - Checks to make sure @prefix with empty prefix does not create a mapping. [RDFa+XHTML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0180.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0180.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[149]",
                    "displayName": "test_0063:_@rel_in_head_using_reserved_xhtml_value_and_emptyprefix_curie_syntax - Tests @rel in head using reserved XHTML value and empty-prefix CURIE syntax [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0063.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0063.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[150]",
                    "displayName": "test_0062:_@rev_in_head_using_reserved,_nonprefixed_xhtml_value - Tests @rev in head using reserved, non-prefixed XHTML value [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0062.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0062.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[151]",
                    "displayName": "test_0183:_test_@xmlns_redefines_@prefix - A new @xmlns definition should override a previous @prefix definition at this element. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0183.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0183.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[152]",
                    "displayName": "test_0182:_test_prefix_locality - Checks to be sure that prefixes are defined within the element hierarchy. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0182.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0182.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[153]",
                    "displayName": "test_0061:_@rel_in_head_using_reserved,_nonprefixed_xhtml_value - Tests @rel in head using reserved, non-prefixed XHTML value [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0061.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0061.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[154]",
                    "displayName": "test_0181:_test_default_xhtml_vocabulary - Checks Tests a CURIE with default namespace uses XHTML Vocabulary namespace. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0181.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0181.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[155]",
                    "displayName": "test_0060:_utf8_conformance - Tests conformance with UTF-8 encoding [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0060.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0060.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[156]",
                    "displayName": "test_0218:_@inlist_to_create_empty_list - @inlist on @rel with no incomplete triples creates an empty list. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0218.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0218.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[157]",
                    "displayName": "test_0217:_@vocab_causes_rdfa:usesvocabulary_triple_to_be_added - When encountering @vocab, a processor generates a triple with the base URI, rdfa:usesVocabulary and the IRI of the added vocabulary. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0217.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0217.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[158]",
                    "displayName": "test_0216:_proper_character_encoding_detection_in_spite_of_large_headers - Character encoding should work even in view of a large set of characters as attributes in the header, ie, when content sniffing may not work to establish encoding. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0216.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0216.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[159]",
                    "displayName": "test_0219:_@inlist_with_literal - @inlist with @property creates a list having a literal as a single element. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0219.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0219.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[160]",
                    "displayName": "test_0331:_@datatype_overrides_inherited_@lang,_with_@content - Tests @datatype is used instead of @lang when @datatype is not empty, and @content is used for the value (e.g. annotating a language with human and machine readable text). [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0331.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0331.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[161]",
                    "displayName": "test_0056:_@typeof_applies_to_@about_on_same_element_with_hanging_rel - Tests if @typeof applies to @about on same element with hanging @rel [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0056.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0056.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[162]",
                    "displayName": "test_0298:_@about=[]_with_@typeof_does_not_create_a_new_object - When the @about resolves to nothing, the typed resource should not create a new subject (chaining). [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0298.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0298.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[163]",
                    "displayName": "test_0177:_test_@prefix - Checks to make sure @prefix with a single entry creates a URI mapping [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0177.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0177.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[164]",
                    "displayName": "test_0176:_iri_for_@rel_and_@rev_is_allowed - Checks to make sure that a URI may be used as @rel and @rev values [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0176.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0176.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[165]",
                    "displayName": "test_0297:_@about=[]_with_@typeof_does_not_create_a_new_subject - When the @about resolves to nothing, the typed resource should not create a new subject. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0297.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0297.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[166]",
                    "displayName": "test_0055:_multiple_@rel - Tests multiple @rel separated by white spaces [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0055.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0055.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[167]",
                    "displayName": "test_0330:_@datatype_overrides_inherited_@lang - Tests @datatype is used instead of @lang when @datatype is not empty (e.g. annotating a date). [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0330.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0330.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[168]",
                    "displayName": "test_0054:_multiple_@property - Tests multiple @property separated by white spaces [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0054.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0054.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[169]",
                    "displayName": "test_0296:_@property_does_set_parent_object_without_@typeof - When @property is used with a resource attribute (@href, @resource, ...) it does not set parent object. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 7,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0296.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0296.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[170]",
                    "displayName": "test_0175:_iri_for_@property_is_allowed - Checks to make sure that a URI may be used as a @property value [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0175.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0175.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[171]",
                    "displayName": "test_0053:_@typeof_with_@resource_and_nothing_else,_with_a_subelement - Tests to make sure that @typeof does not apply to @resource, but @resource sets the subject for the next triple to be generated [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 6,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0053.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0053.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[172]",
                    "displayName": "test_0174:_support_single_character_prefix_in_curies - Checks to ensure that the RDFa processor correctly processes single character prefixes when processing CURIEs. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0174.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0174.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[173]",
                    "displayName": "test_0295:_benchmark_test - Complex benchmark document. [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "SKIPPED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0295.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0295.ttl",
                    "skipReason": "UPSTREAM_FIXTURE: benchmark concatenation changes RDFa list and context scope, while its expected graph is the union of isolated tests"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[174]",
                    "displayName": "test_0214:_root_element_has_implicit_@about=\"\" - All documents have an implicit @about=\"\"  [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0214.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0214.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[175]",
                    "displayName": "test_0059:_multiple_hanging_@rels_with_multiple_children - Tests multiple hanging @rels with multiple children [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0059.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0059.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[176]",
                    "displayName": "test_0213:_datatype_generation_for_a_literal_with_xml_content,_version_11 - In RDFa 1.1, even if a literal contains XML elements, and no explicit datatype is set, the result is plain literal [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0213.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0213.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[177]",
                    "displayName": "test_0179:_test_@prefix_vs_@xmlns_priority - Checks to make sure @prefix has a higher priority than @xmlns [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0179.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0179.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[178]",
                    "displayName": "test_0178:_test_@prefix_with_multiple_mappings - Checks to make sure @prefix with multiple entires creates multiple URI mappings [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0178.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0178.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[179]",
                    "displayName": "test_0299:_@resource=[]_with_@href_or_@src_uses_@href_or_@src_(@rel) - When the @resource resolves to nothing, @href or @src should be used (@rel case). [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0299.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0299.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[180]",
                    "displayName": "test_0332:_empty_@datatype_doesn't_override_inherited_@lang,_with_@content - Tests @lang is used instead of @datatype when @datatype is empty, and @content is used for the value (e.g. annotating a language with human and machine readable text). [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0332.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0332.ttl"
                },
                {
                    "name": "rdf11RDFaXHTMLTests()[181]",
                    "displayName": "test_0057:_hanging_@rel_creates_multiple_triples - Tests if hanging @rel creates multiple triples [RDFa+XHTML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0057.xhtml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/0057.ttl"
                }
            ]
        },
        {
            "id": "rdfa-xml",
            "name": "RDFa 1.1 (XML)",
            "total": 126,
            "passed": 125,
            "failed": 0,
            "skipped": 1,
            "passRate": 99.21,
            "durationMs": 152,
            "tests": [
                {
                    "name": "rdf11RDFaXMLTests()[1]",
                    "displayName": "test_0203:_tests_to_ensure_@xml:base,_xml+rdfa_used_in_nonroot_elements_in_svg - Tests to make sure that @xml:base is used in non-root elements in SVG+RDFa, XML+RDFa. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0203.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0203.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[2]",
                    "displayName": "test_0049:_@typeof_with_@about,_no_@rel_or_@resource - Tests @typeof with @about, no @rel or @resource [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0049.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0049.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[3]",
                    "displayName": "test_0048:_@typeof_with_@about_and_@rel_present,_no_@resource - Tests @typeof with @about and @rel present, no @resource [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0048.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0048.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[4]",
                    "displayName": "test_0202:_tests_to_ensure_@xml:base_used_in_svg - Tests to make sure that @xml:base is used in SVG+RDFa, XML+RDFa. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0202.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0202.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[5]",
                    "displayName": "test_0289:_@href_becomes_subject_when_@property_and_@content_are_present - When @property and @content are present but @about, @rel and @rev are not, @href is used as subject. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0289.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0289.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[6]",
                    "displayName": "test_0329:_recursive_triple_generation - Tests recursive triple generation for nested literals. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0329.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0329.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[7]",
                    "displayName": "test_0207:_vevent_using_@typeof - Tests Vevent using @typeof (inlc. dtstart, dtend, etc.) [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0207.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0207.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[8]",
                    "displayName": "test_0206:_usage_of_initial_context - Tests whether the default RDFa 1.1 context (which contains prefix definitions, among others, to the Semantic Web Standard vocabularies) is properly handled. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0206.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0206.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[9]",
                    "displayName": "test_0041:_@rev__@src/@href/@resource_test - Tests if @resource overwrites both @href and @src correctly to set the URIref subject (due to @rev) [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0041.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0041.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[10]",
                    "displayName": "test_0320:_@property_binds_to_@href - Given @property with @href and @src, @href is used as object and sets new subject. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0320.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0320.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[11]",
                    "displayName": "test_0319:_relative_@profile - \n     Relative IRI's used with @prefix do not resolve against the document base; they are not processed in any way.\n     However, the returned document does have a base, so when queried, it will seem to have\n     the same base as the original document.\n     [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0319.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0319.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[12]",
                    "displayName": "test_0039:_@rev__@src/@href_test - Tests if @href overwrites @src correctly to set the URIref subject (due to @rev) [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0039.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0039.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[13]",
                    "displayName": "test_0038:_@rev__img[@src]_test - Tests if a @src (in img element) correctly sets the URIref subject (due to @rev) [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0038.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0038.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[14]",
                    "displayName": "test_0037:_@src/@href/@resource_test - Tests if @resource overwrites both @href and @src [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0037.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0037.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[15]",
                    "displayName": "test_0311:_ensure_no_triples_are_generated_when_@property_is_empty - If no terms or CURIEs are present in @property, no triple should be generated from it. [RDFa+XML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0311.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0311.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[16]",
                    "displayName": "test_0036:_@src/@resource_test - Tests if @resource overwrites @src [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0036.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0036.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[17]",
                    "displayName": "test_0318:_setting_@vocab_to_empty_strings_removes_default_vocabulary - If the value (of @vocab) is empty, then the local default vocabulary must be reset to the Host Language defined default. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0318.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0318.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[18]",
                    "displayName": "test_0031:_simple_@resource - Tests if @resource sets URIref object correct. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0031.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0031.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[19]",
                    "displayName": "test_0030:_omitted_@about - Tests omitted @about. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0030.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0030.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[20]",
                    "displayName": "test_0271:_use_of_@property_in_head_with_explicit_parent_subject_via_@about - @property appearing on the head element gets the subject from parent, also with @content and explicit @about at the top [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0271.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0271.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[21]",
                    "displayName": "test_0035:_@src/@href_test - Tests if @href overwrites @src [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0035.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0035.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[22]",
                    "displayName": "test_0034:_simple_img[@src]_test - Tests if a @src (in img element) correctly sets the URIref object [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0034.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0034.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[23]",
                    "displayName": "test_0033:_simple_chaining_test_with_bnode - Tests simple chaining with cascade of bNode and @property [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0033.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0033.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[24]",
                    "displayName": "test_0032:_@resource_overrides_@href - Tests if @resource overrides @href to set the URIref object. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0032.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0032.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[25]",
                    "displayName": "test_0269:_use_of_@property_in_head_without_explicit_subject - @property appearing on the html element without @content or @datatype yields the base as the subject, also with @content [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0269.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0269.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[26]",
                    "displayName": "test_0302:_@typeof_with_different_content_types - Tests that @typof works with terms, CURIES or IRIs. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0302.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0302.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[27]",
                    "displayName": "test_0027:_@content,_ignore_element_content - Tests @content for literal object, overriding element content. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0027.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0027.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[28]",
                    "displayName": "test_0147:_xmlns_prefix_'xmlzzz'_(reserved) - Ensures that RDFa processors allow the prefix 'xmlzzz', even though it is a reserved prefix in XML. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0147.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0147.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[29]",
                    "displayName": "test_0301:_@property_with_@typeof_creates_a_typed_resource_for_chaining - @property with @typeof creates a typed_resource for chaining. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0301.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0301.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[30]",
                    "displayName": "test_0026:_@content - Tests @content for literal object [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0026.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0026.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[31]",
                    "displayName": "test_0268:_@property_without_@content_or_@datatype,_typed_object_set_by_@src_and_@typeof - @property without @content or @datatype, typed object set by @src and @typeof [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0268.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0268.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[32]",
                    "displayName": "test_0300:_@resource=[]_with_@href_or_@src_uses_@href_or_@src_(@property) - When the @resource resolves to nothing, @href or @src should be used (@property case). [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0300.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0300.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[33]",
                    "displayName": "test_0025:_simple_chaining_test - Tests simple chaining with cascade of @resource and @property [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0025.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0025.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[34]",
                    "displayName": "test_0267:_@property_without_@content_or_@datatype,_typed_object_set_by_@resource_and_@typeof - @property without @content or @datatype, typed object set by @resource and @typeof [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0267.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0267.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[35]",
                    "displayName": "test_0029:_markup_stripping_with_@datatype - Tests markup stripping from a span element with @datatype=xsd:string [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0029.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0029.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[36]",
                    "displayName": "test_0020:_inheriting_@about_for_subject - Tests @about inheritance to establish subject. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0020.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0020.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[37]",
                    "displayName": "test_0262:_predicate_establishment_with_@property,_with_white_spaces_before_and_after_the_attribute_value - Tests @property to establish the predicate; literal object is in the content of the element. There are extra whitespaces before and after the property attribute value which should be ignored [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0262.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0262.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[38]",
                    "displayName": "test_0140:_blank_nodes_identifiers_are_not_allowed_as_predicates - The RDF data model does not allow blank node identifiers in predicates. This test ensures that RDFa processors do not emit invalid triples. [RDFa+XML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0140.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0140.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[39]",
                    "displayName": "test_0261:_white_space_preservation_in_xmlliteral - Whitespace must be maintained in an XMLLiteral, too [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0261.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0261.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[40]",
                    "displayName": "test_0266:_@property_without_@content_or_@datatype,_typed_object_set_by_@href_and_@typeof - @property without @content or @datatype, typed object set by @href and @typeof [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0266.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0266.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[41]",
                    "displayName": "test_0023:_@id_does_not_generate_subjects - Tests that @id does not generate subjects [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0023.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0023.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[42]",
                    "displayName": "test_0265:_@property_appearing_on_the_head_element_gets_the_subject_from_<html>,_ie,_parent - @property appearing on the head element gets the subject from <html>, ie, parent; in this case the parent subject is explicitly set via @about [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0265.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0265.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[43]",
                    "displayName": "test_0264:_@property_appearing_on_the_head_element_gets_the_subject_from_<html>,_ie,_parent - @property appearing on the head element gets the subject from <html>, ie, parent [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0264.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0264.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[44]",
                    "displayName": "test_0263:_@property_appearing_on_the_html_element_yields_the_base_as_the_subject - @property appearing on the html element without @content or @datatype yields the base as the subject [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0263.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0263.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[45]",
                    "displayName": "test_0021:_subject_inheritance_with_no_@about - Tests inheritance of subject when no @about can be found [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0021.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0021.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[46]",
                    "displayName": "test_0017:_related_blanknodes - Tests creation of statements involving explicitly created blank nodes. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0017.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0017.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[47]",
                    "displayName": "test_0259:_xml+rdfa_initial_context - All processors must load the RDFa Core Initial Context. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 5,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0259.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0259.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[48]",
                    "displayName": "test_0258:_the_underscore_character_is_not_allowed_as_a_prefix_or_in_xmlns - Ensures that a prefix cannot start with an underscore character when specified using xmlns or prefix. [RDFa+XML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0258.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0258.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[49]",
                    "displayName": "test_0015:_meta_and_link - Tests meta and link with no parent @about [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0015.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0015.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[50]",
                    "displayName": "test_0014:_@datatype,_xsd:integer - Tests setting the @datatype to xsd:integer [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0014.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0014.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[51]",
                    "displayName": "test_0019:_@about_for_subject - Tests @about to establish subject. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0019.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0019.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[52]",
                    "displayName": "test_0018:_@rel_for_predicate - Tests @rel to establish predicate. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0018.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0018.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[53]",
                    "displayName": "test_0250:_checking_the_right_behaviour_of_@typeof_with_@about,_in_presence_of_@property - Tests that @typeof is clearly bound to @about, and @property therefore creates a Literal object [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0250.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0250.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[54]",
                    "displayName": "test_0013:_@xml:lang_inheritance - Tests @xml:lang inheritance [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0013.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0013.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[55]",
                    "displayName": "test_0012:_@xml:lang - Tests @xml:lang [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0012.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0012.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[56]",
                    "displayName": "test_0099:_preservation_of_white_space_in_literals - Tests the preservation of white space in literals. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0099.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0099.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[57]",
                    "displayName": "test_0010:_@rel,_@rev,_@href - Tests @rel, @rev, and @href to generate two RDF triples. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0010.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0010.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[58]",
                    "displayName": "test_0093:_tests_xmlliteral_content_with_explicit_@datatype_(userdatatyped_literal) - Tests the explicit specification of an RDF XMLLiteral with @datatype using a non-RDF namespace, yielding a user-data-typed literal [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0093.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0093.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[59]",
                    "displayName": "test_0091:_nonreserved,_unprefixed_curie_in_@property - Tests to ensure that non-reserved, un-prefixed CURIEs, when used in @property, generate triples. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0091.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0091.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[60]",
                    "displayName": "test_0006:_@rel_and_@rev - Tests @rev and @rel together, with the object being specified by @href, ignoring content [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0006.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0006.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[61]",
                    "displayName": "test_0248:_multiple_ways_of_handling_incomplete_triples_(with_@rev);_rdfa_11_version - Tests multiple ways of handling incomplete triples, this time with @rev [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0248.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0248.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[62]",
                    "displayName": "test_0126:_multiple_@typeof_values - Checks to ensure that multiple (white space separated) values in @typeof trigger multiple rdf:type triples. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0126.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0126.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[63]",
                    "displayName": "test_0247:_multiple_incomplete_triples,_rdfa_11version - Tests multiple ways of handling incomplete triples; the first two triples should use the same bnode as subject ('merged'). The third should have a separate bNode. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0247.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0247.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[64]",
                    "displayName": "test_0246:_hanging_@rel_creates_multiple_triples,_@typeof_permutation;_rdfa_11_version - Tests if hanging @rel creates multiple triples with @typeof permutation [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0246.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0246.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[65]",
                    "displayName": "test_0009:_@rev - Tests @rev. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0009.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0009.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[66]",
                    "displayName": "test_0008:_empty_string_@about - Tests empty @about. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0008.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0008.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[67]",
                    "displayName": "test_0249:_multiple_ways_of_handling_incomplete_triples_(with_@rel_and_@rev);_rdfa_11_version - Tests multiple ways of handling incomplete triples, this time with both @rel and @rev [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0249.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0249.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[68]",
                    "displayName": "test_0007:_@rel,_@rev,_@property,_@content - Tests @rel, @rev, @property, and @content together to generate several RDF triples. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0007.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0007.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[69]",
                    "displayName": "test_0085:_@resource_and_@href_in_completing_incomplete_triples - Tests the role of @resource and @href in completing incomplete triples (including their mutual priorities), but with an intermediate layer (ie, bNode) added [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0085.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0085.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[70]",
                    "displayName": "test_0084:_multiple_ways_of_handling_incomplete_triples,_this_time_with_both_@rel_and_@rev - Tests multiple ways of handling incomplete triples, this time with both @rel and @rev. There is an intermediate div that should be ignored by the process [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0084.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0084.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[71]",
                    "displayName": "test_0083:_multiple_ways_of_handling_incomplete_triples_(merged) - Tests multiple ways of handling incomplete triples; the first two triples should use the same bNode as subject ('merged'); the third case should use @about [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0083.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0083.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[72]",
                    "displayName": "test_0089:_@src_sets_a_new_subject_(@typeof) - Tests to ensure that @src sets a new subject (focuses on @typeof). [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0089.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0089.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[73]",
                    "displayName": "test_0122:_resource=\"[]\"_does_not_set_the_object - Checks to make sure that resource=\"[]\" does not set the object since RDFa does not allow non-prefixed CURIEs.\n [RDFa+XML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0122.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0122.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[74]",
                    "displayName": "test_0001:_predicate_establishment_with_@property - Tests @property to establish the predicate; literal object is in the content of the element. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0001.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0001.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[75]",
                    "displayName": "test_0121:_\"[]\"_is_a_valid_safe_curie - Checks to make sure RDFa processors resolve the empty CURIE correctly. Note that this is not valid HTML due to recursive <p> elements. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0121.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0121.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[76]",
                    "displayName": "test_0088:_interpretation_of_the_curie_\"_:\" - Test the interpretation of the CURIE \"_:\"  [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0088.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0088.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[77]",
                    "displayName": "test_0087:_all_reserved_xhtml_@rel_values_(with_:xxx) - Tests to ensure that all reserved XHTML words are supported in @rel (with :xxx) [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0087.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0087.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[78]",
                    "displayName": "test_0120:_\"[:]\"_curie_format_is_valid - Checks to make sure that an RDFa processor expands CURIEs having only a colon to the\n  default prefix \"http://www.w3.org/1999/test-cases/vocab#\".\n [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0120.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0120.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[79]",
                    "displayName": "test_0080:_@about_overrides_@resource_in_incomplete_triples - Tests if @about has a higher priority than @resource in handling incomplete triples [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0080.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0080.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[80]",
                    "displayName": "test_0115:_xml_entities_must_be_supported_by_rdfa_parser - Checks to make sure that XML Entities are treated properly by the RDFa parser. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0115.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0115.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[81]",
                    "displayName": "test_0113:_element_with_@property_and_no_child_nodes_generates__empty_plain_literal - Checks to make sure that an element with @property and no child nodes generates empty plain literal. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0113.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0113.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[82]",
                    "displayName": "test_0119:_\"[prefix:]\"_curie_format_is_valid - Checks to make sure that an RDFa processor expands CURIEs having only a prefix and a\n    colon if a prefix is properly defined using xmlns.\n     [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0119.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0119.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[83]",
                    "displayName": "test_0118:_empty_string_\"\"_is_not_equivalent_to_null__@about - Checks to make sure that the empty\n  string \"\" isn't considered as NULL in languages such as Javascript when\n  generating triples. This test sets the subject in a chain using @href\n  and then immediately changes the subject using @about and generates a\n  triple. A buggy parser may use the @href subject\n  (http://example.org/javascript.html) instead of the one defined by @about. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0118.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0118.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[84]",
                    "displayName": "test_0196:_test_process_explicit_xmlliteral - XMLLiteral must be explicitly specified, otherwise a normal untyped literal is created [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0196.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0196.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[85]",
                    "displayName": "test_0112:_plain_literal_with_datatype=\"\" - Checks to make sure that the RDFa parser emits a plain literal when the datatype is specified as \"\". [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0112.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0112.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[86]",
                    "displayName": "test_0079:_@resource_and_@href_in_completing_incomplete_triples - Tests role of @resource and @href in completing incomplete triples (including their mutual priorities) [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0079.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0079.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[87]",
                    "displayName": "test_0071:_no_explicit_@about - Tests to ensure that a triple is generated even if @typeof and @about is not specified anywhere in the document [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0071.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0071.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[88]",
                    "displayName": "test_0104:_rdf:value - Tests rdf:value with blank nodes to give a value with a unit [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0104.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0104.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[89]",
                    "displayName": "test_0108:_plain_literal_with_datatype=\"\"_and_xml:lang_preservation - Checks to make sure that the RDFa parser emits a plain literal when the datatype is specified as \"\" and preserves the xml:lang value. The text, with control characters and whitespace preserved, reads \"Greek\nwhite   space\n\". [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0108.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0108.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[90]",
                    "displayName": "test_0229:_img[@src]_test_with_omitted_@about - Tests if a @src (in img element) does not set the URIref object (with omitted @about) -- from 0042 [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0229.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0229.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[91]",
                    "displayName": "test_0107:_no_garbage_collecting_bnodes - Checks to make sure that that while we shouldn't garbage collect bnodes no triples are generated. [RDFa+XML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0107.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0107.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[92]",
                    "displayName": "test_0106:_chaining_with_empty_value_in_inner_@rel - Tests the behavior of triple generation in the case where the inner @rel is defined, but is blank, which halts chaining. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0106.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0106.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[93]",
                    "displayName": "test_0064:_@about_with_safe_curie - Tests if @about generates a proper triple when a safe CURIE is used [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0064.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0064.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[94]",
                    "displayName": "test_0063:_@rel_in_head_using_reserved_xhtml_value_and_emptyprefix_curie_syntax - Tests @rel in head using reserved XHTML value and empty-prefix CURIE syntax [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0063.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0063.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[95]",
                    "displayName": "test_0068:_relative_uri_in_@about - Tests to ensure that relative URI is resolved correctly when used in @about [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0068.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0068.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[96]",
                    "displayName": "test_0067:_@property_in_the_head - Test to make sure that @property in head uses the implied current document as the subject if no other subject is specified [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0067.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0067.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[97]",
                    "displayName": "test_0065:_@rel_with_safe_curie - Tests if @rel properly connects triples generated when safe CURIEs are used [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0065.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0065.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[98]",
                    "displayName": "test_0181:_test_default_xhtml_vocabulary - Checks Tests a CURIE with default namespace uses XHTML Vocabulary namespace. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0181.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0181.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[99]",
                    "displayName": "test_0060:_utf8_conformance - Tests conformance with UTF-8 encoding [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0060.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0060.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[100]",
                    "displayName": "test_0180:_test_@prefix_with_empty_mapping - Checks to make sure @prefix with empty prefix does not create a mapping. [RDFa+XML Rdfa negative evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0180.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0180.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[101]",
                    "displayName": "test_0214:_root_element_has_implicit_@about=\"\" - All documents have an implicit @about=\"\"  [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0214.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0214.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[102]",
                    "displayName": "test_0213:_datatype_generation_for_a_literal_with_xml_content,_version_11 - In RDFa 1.1, even if a literal contains XML elements, and no explicit datatype is set, the result is plain literal [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0213.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0213.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[103]",
                    "displayName": "test_0059:_multiple_hanging_@rels_with_multiple_children - Tests multiple hanging @rels with multiple children [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0059.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0059.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[104]",
                    "displayName": "test_0295:_benchmark_test - Complex benchmark document. [RDFa+XML Rdfa positive evaluation]",
                    "status": "SKIPPED",
                    "durationMs": 0,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0295.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0295.ttl",
                    "skipReason": "UPSTREAM_FIXTURE: benchmark mixes HTML-only rules into XML and compares concatenated markup with isolated-test results"
                },
                {
                    "name": "rdf11RDFaXMLTests()[105]",
                    "displayName": "test_0053:_@typeof_with_@resource_and_nothing_else,_with_a_subelement - Tests to make sure that @typeof does not apply to @resource, but @resource sets the subject for the next triple to be generated [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0053.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0053.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[106]",
                    "displayName": "test_0174:_support_single_character_prefix_in_curies - Checks to ensure that the RDFa processor correctly processes single character prefixes when processing CURIEs. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0174.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0174.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[107]",
                    "displayName": "test_0052:_@typeof_with_@resource_and_nothing_else - Tests to ensure that @typeof does not apply to @resource [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0052.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0052.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[108]",
                    "displayName": "test_0051:_@typeof_with_a_single_@property - Tests @typeof with a single @property [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0051.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0051.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[109]",
                    "displayName": "test_0293:_testing_the_':'_character_usage_in_a_curie - RDFa 1.1 CURIE allows the ':' to appear in the reference part of a CURIE. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0293.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0293.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[110]",
                    "displayName": "test_0050:_@typeof_without_anything_else - Tests @typeof without anything else [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0050.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0050.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[111]",
                    "displayName": "test_0292:_@about_overriding_@href_as_subject_is_used_as_parent_resource - When @property, @datatype, @href and @about are present but @rel and @rev are not, @about is used as subject and is also applied to nested descriptions. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0292.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0292.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[112]",
                    "displayName": "test_0299:_@resource=[]_with_@href_or_@src_uses_@href_or_@src_(@rel) - When the @resource resolves to nothing, @href or @src should be used (@rel case). [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0299.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0299.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[113]",
                    "displayName": "test_0332:_empty_@datatype_doesn't_override_inherited_@lang,_with_@content - Tests @lang is used instead of @datatype when @datatype is empty, and @content is used for the value (e.g. annotating a language with human and machine readable text). [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0332.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0332.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[114]",
                    "displayName": "test_0057:_hanging_@rel_creates_multiple_triples - Tests if hanging @rel creates multiple triples [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0057.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0057.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[115]",
                    "displayName": "test_0298:_@about=[]_with_@typeof_does_not_create_a_new_object - When the @about resolves to nothing, the typed resource should not create a new subject (chaining). [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0298.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0298.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[116]",
                    "displayName": "test_0056:_@typeof_applies_to_@about_on_same_element_with_hanging_rel - Tests if @typeof applies to @about on same element with hanging @rel [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0056.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0056.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[117]",
                    "displayName": "test_0331:_@datatype_overrides_inherited_@lang,_with_@content - Tests @datatype is used instead of @lang when @datatype is not empty, and @content is used for the value (e.g. annotating a language with human and machine readable text). [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0331.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0331.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[118]",
                    "displayName": "test_0330:_@datatype_overrides_inherited_@lang - Tests @datatype is used instead of @lang when @datatype is not empty (e.g. annotating a date). [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0330.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0330.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[119]",
                    "displayName": "test_0055:_multiple_@rel - Tests multiple @rel separated by white spaces [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0055.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0055.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[120]",
                    "displayName": "test_0176:_iri_for_@rel_and_@rev_is_allowed - Checks to make sure that a URI may be used as @rel and @rev values [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0176.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0176.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[121]",
                    "displayName": "test_0297:_@about=[]_with_@typeof_does_not_create_a_new_subject - When the @about resolves to nothing, the typed resource should not create a new subject. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0297.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0297.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[122]",
                    "displayName": "test_0175:_iri_for_@property_is_allowed - Checks to make sure that a URI may be used as a @property value [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0175.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0175.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[123]",
                    "displayName": "test_0054:_multiple_@property - Tests multiple @property separated by white spaces [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0054.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0054.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[124]",
                    "displayName": "test_0296:_@property_does_set_parent_object_without_@typeof - When @property is used with a resource attribute (@href, @resource, ...) it does not set parent object. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0296.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0296.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[125]",
                    "displayName": "test_0291:_@href_as_subject_overridden_by_@about - When @property, @datatype, @href and @about are present but @rel and @rev are not, @about is used as subject. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0291.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0291.ttl"
                },
                {
                    "name": "rdf11RDFaXMLTests()[126]",
                    "displayName": "test_0290:_@href_becomes_subject_when_@property_and_@datatype_are_present - When @property and @datatype are present but @about, @rel and @rev are not, @href is used as subject and element content is used as an object literal. [RDFa+XML Rdfa positive evaluation]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0290.xml",
                    "resultUri": "http://rdfa.info/test-suite/test-cases/rdfa1.1/xml/0290.ttl"
                }
            ]
        },
        {
            "id": "trig",
            "name": "TriG (RDF 1.1)",
            "total": 357,
            "passed": 357,
            "failed": 0,
            "skipped": 0,
            "passRate": 100.0,
            "durationMs": 191,
            "tests": [
                {
                    "name": "rdf11TrigTests()[1]",
                    "displayName": "trigsyntaxbadkw05 - 'true' cannot be used as object (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 7,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-kw-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[2]",
                    "displayName": "numeric_with_leading_0 - numeric with leading 0 [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/numeric_with_leading_0.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/numeric_with_leading_0.nq"
                },
                {
                    "name": "rdf11TrigTests()[3]",
                    "displayName": "localname_with_leading_digit - localName with leading digit (p:_) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_leading_digit.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_leading_digit.nq"
                },
                {
                    "name": "rdf11TrigTests()[4]",
                    "displayName": "trigsyntaxbadblanklabeldotend - Blank node label must not end in dot [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-blank-label-dot-end.trig"
                },
                {
                    "name": "rdf11TrigTests()[5]",
                    "displayName": "empty_collection - empty collection () [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/empty_collection.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/empty_collection.nq"
                },
                {
                    "name": "rdf11TrigTests()[6]",
                    "displayName": "number_sign_following_localname - number sign following localName [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/number_sign_following_localName.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/number_sign_following_localName.nq"
                },
                {
                    "name": "rdf11TrigTests()[7]",
                    "displayName": "literal_with_escaped_carriage_return - literal with escaped CARRIAGE RETURN [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_escaped_CARRIAGE_RETURN.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_CARRIAGE_RETURN.nq"
                },
                {
                    "name": "rdf11TrigTests()[8]",
                    "displayName": "trigsyntaxbadkw03 - 'a' cannot be used as object (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-kw-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[9]",
                    "displayName": "trigsyntaxbadkw04 - 'true' cannot be used as subject (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-kw-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[10]",
                    "displayName": "trigsyntaxbadnsdotstart - Prefix must not start with dot [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-ns-dot-start.trig"
                },
                {
                    "name": "rdf11TrigTests()[11]",
                    "displayName": "two_literal_long2s - two LITERAL_LONG2s testing quote delimiter overrun [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/two_LITERAL_LONG2s.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/two_LITERAL_LONG2s.nq"
                },
                {
                    "name": "rdf11TrigTests()[12]",
                    "displayName": "trigsyntaxbadkw01 - 'A' is not a keyword (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-kw-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[13]",
                    "displayName": "trigsyntaxbadkw02 - 'a' cannot be used as subject (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-kw-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[14]",
                    "displayName": "literal_long1_ascii_boundaries - LITERAL_LONG1_ascii_boundaries '\\x00\\x26\\x28...' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG1_ascii_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG1_ascii_boundaries.nq"
                },
                {
                    "name": "rdf11TrigTests()[15]",
                    "displayName": "trigsyntaxnumber13 - decimal literal no leading zero [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-13.trig"
                },
                {
                    "name": "rdf11TrigTests()[16]",
                    "displayName": "blanknodepropertylist_with_multiple_triples - blankNodePropertyList with multiple triples [ <s> <p> ; <s2> <p2> ] [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_with_multiple_triples.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_with_multiple_triples.nq"
                },
                {
                    "name": "rdf11TrigTests()[17]",
                    "displayName": "iri_with_all_punctuation - IRI with all punctuation [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_with_all_punctuation.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_with_all_punctuation.nq"
                },
                {
                    "name": "rdf11TrigTests()[18]",
                    "displayName": "trigsyntaxbadmissingnsdotend - Prefix must not end in dot (error in triple, not prefix directive like trig-syntax-bad-ns-dot-end) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-missing-ns-dot-end.trig"
                },
                {
                    "name": "rdf11TrigTests()[19]",
                    "displayName": "trigkwgraph02 - Trailing . not necessary inside {} [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-kw-graph-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[20]",
                    "displayName": "trigkwgraph03 - Named graph may be empty [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-kw-graph-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[21]",
                    "displayName": "trigkwgraph01 - Named graphs can be proceeded by GRAPH [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-kw-graph-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[22]",
                    "displayName": "trigkwgraph06 [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-kw-graph-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[23]",
                    "displayName": "trigkwgraph07 - Named graph may be named with BNode _:a [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-kw-graph-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[24]",
                    "displayName": "trigkwgraph04 [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-kw-graph-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[25]",
                    "displayName": "prefix_with_pn_chars_base_character_boundaries - prefix with PN CHARS BASE character boundaries (prefix: AZaz\u00c0\u00d6\u00d8\u00f6\u00f8...:) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/prefix_with_PN_CHARS_BASE_character_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[26]",
                    "displayName": "trigkwgraph05 - Use of empty prefix inside named graph [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-kw-graph-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[27]",
                    "displayName": "trigsyntaxbaduri05 - Bad IRI : character escapes not allowed (2) (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-uri-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[28]",
                    "displayName": "trigsyntaxbaduri04 - Bad IRI : character escapes not allowed (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-uri-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[29]",
                    "displayName": "trigsyntaxbnode09 - bnode property list [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bnode-09.trig"
                },
                {
                    "name": "rdf11TrigTests()[30]",
                    "displayName": "trigsyntaxbaduri03 - Bad IRI : bad long escape (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-uri-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[31]",
                    "displayName": "trigsyntaxbaduri02 - Bad IRI : bad escape (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-uri-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[32]",
                    "displayName": "trigkwgraph08 - Named graph may be named with BNode [] [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-kw-graph-08.trig"
                },
                {
                    "name": "rdf11TrigTests()[33]",
                    "displayName": "trigsyntaxbaduri01 - Bad IRI : space (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-uri-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[34]",
                    "displayName": "trigkwgraph09 - Named graph may be named with PNAME [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-kw-graph-09.trig"
                },
                {
                    "name": "rdf11TrigTests()[35]",
                    "displayName": "trigsyntaxbaduriescape02 - Bad IRI : hex 3C is < (negative evaluation test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-uri-escape-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[36]",
                    "displayName": "trigsyntaxbnode06 - labeled bnode subject [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bnode-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[37]",
                    "displayName": "trigsyntaxbaduriescape01 - Bad IRI : good escape, bad character (negative evaluation test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-uri-escape-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[38]",
                    "displayName": "trigsyntaxbnode05 - bnode property list subject [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bnode-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[39]",
                    "displayName": "literal1_ascii_boundaries - LITERAL1_ascii_boundaries '\\x00\\x09\\x0b\\x0c\\x0e\\x26\\x28...' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1_ascii_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1_ascii_boundaries.nq"
                },
                {
                    "name": "rdf11TrigTests()[40]",
                    "displayName": "trigsyntaxbnode08 - bare bnode property list [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bnode-08.trig"
                },
                {
                    "name": "rdf11TrigTests()[41]",
                    "displayName": "trigsyntaxbnode07 - labeled bnode subject and object [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bnode-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[42]",
                    "displayName": "trigsyntaxbnode02 - bnode object [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bnode-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[43]",
                    "displayName": "trigsyntaxbnode01 - bnode subject [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bnode-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[44]",
                    "displayName": "trigsyntaxbnode04 - bnode property list object (2) [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bnode-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[45]",
                    "displayName": "trigsyntaxbnode03 - bnode property list object [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bnode-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[46]",
                    "displayName": "trigsyntaxbadnum05 - Bad number format (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-LITERAL2_with_langtag_and_datatype.trig"
                },
                {
                    "name": "rdf11TrigTests()[47]",
                    "displayName": "trigkwgraph10 - Named graph with PNAME and empty graph [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-kw-graph-10.trig"
                },
                {
                    "name": "rdf11TrigTests()[48]",
                    "displayName": "percent_escaped_localname - percent-escaped local name [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/percent_escaped_localName.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/percent_escaped_localName.nq"
                },
                {
                    "name": "rdf11TrigTests()[49]",
                    "displayName": "trigkwgraph11 - Named graph with IRI and empty graph [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-kw-graph-11.trig"
                },
                {
                    "name": "rdf11TrigTests()[50]",
                    "displayName": "blanknodepropertylist_as_object_containing_objectlist - blankNodePropertyList as object containing objectList <s> <p> [ <p2> <o>,<o2> ] . [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_as_object_containing_objectList.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_as_object_containing_objectList.nq"
                },
                {
                    "name": "rdf11TrigTests()[51]",
                    "displayName": "trigsyntaxuri03 - IRIs with long Unicode escape [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-uri-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[52]",
                    "displayName": "trigsyntaxuri04 - Legal IRIs [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-uri-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[53]",
                    "displayName": "trigsyntaxuri01 - Only IRIs [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-uri-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[54]",
                    "displayName": "trigsyntaxuri02 - IRIs with Unicode escape [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-uri-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[55]",
                    "displayName": "iri_with_eight_digit_numeric_escape - IRI with eight digit numeric escape (\\U) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_with_eight_digit_numeric_escape.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[56]",
                    "displayName": "number_sign_following_pname_ns - number sign following PNAME_NS [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/number_sign_following_PNAME_NS.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/number_sign_following_PNAME_NS.nq"
                },
                {
                    "name": "rdf11TrigTests()[57]",
                    "displayName": "iri_subject - IRI subject [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_subject.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[58]",
                    "displayName": "trigsyntaxstring10 - long langString literal with embedded newline [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-string-10.trig"
                },
                {
                    "name": "rdf11TrigTests()[59]",
                    "displayName": "trigsyntaxstring11 - squote long langString literal with embedded newline [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-string-11.trig"
                },
                {
                    "name": "rdf11TrigTests()[60]",
                    "displayName": "trigsyntaxbadn3extras08 - @keywords is not TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-08.trig"
                },
                {
                    "name": "rdf11TrigTests()[61]",
                    "displayName": "trigsyntaxbadn3extras09 - => is not TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-09.trig"
                },
                {
                    "name": "rdf11TrigTests()[62]",
                    "displayName": "trigsyntaxbaduriescape04 - Bad IRI : {abc} (negative evaluation test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-uri-escape-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[63]",
                    "displayName": "trigsyntaxbaduriescape03 - Bad IRI : hex 3E is  (negative evaluation test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-uri-escape-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[64]",
                    "displayName": "trigsyntaxbadn3extras04 - N3 paths not in TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[65]",
                    "displayName": "trigsyntaxbadn3extras05 - N3 is...of not in TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[66]",
                    "displayName": "trigsyntaxbadn3extras06 - N3 paths not in TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[67]",
                    "displayName": "trigsyntaxbadn3extras07 - @keywords is not TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[68]",
                    "displayName": "literal_with_line_feed - literal with LINE FEED [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_LINE_FEED.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_LINE_FEED.nq"
                },
                {
                    "name": "rdf11TrigTests()[69]",
                    "displayName": "literal_with_reverse_solidus - literal with REVERSE SOLIDUS [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_REVERSE_SOLIDUS.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_REVERSE_SOLIDUS.nq"
                },
                {
                    "name": "rdf11TrigTests()[70]",
                    "displayName": "trigsyntaxbadn3extras01 - {} fomulae not in TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[71]",
                    "displayName": "trigsyntaxbadn3extras02 - = is not TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[72]",
                    "displayName": "labeled_blank_node_object - labeled blank node object [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_object.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_object.nq"
                },
                {
                    "name": "rdf11TrigTests()[73]",
                    "displayName": "trigsyntaxbadn3extras03 - N3 paths not in TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[74]",
                    "displayName": "trigsyntaxstring03 - langString literal with region [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-string-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[75]",
                    "displayName": "trigsyntaxstring02 - langString literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-string-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[76]",
                    "displayName": "trigsyntaxstring05 - squote langString literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-string-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[77]",
                    "displayName": "trigsyntaxstring04 - squote string literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-string-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[78]",
                    "displayName": "trigsyntaxbadn3extras10 - <= is not TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-10.trig"
                },
                {
                    "name": "rdf11TrigTests()[79]",
                    "displayName": "trigsyntaxstring07 - long string literal with embedded single- and double-quotes [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-string-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[80]",
                    "displayName": "trigturtle04 - TriG can parse Turtle (blankNodePropertyList subject) [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-turtle-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[81]",
                    "displayName": "trigturtle03 - TriG can parse Turtle (blankNodePropertyList subject) [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-turtle-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[82]",
                    "displayName": "trigsyntaxstring06 - squote langString literal with region [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-string-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[83]",
                    "displayName": "trigsyntaxstring09 - squote long string literal with embedded single- and double-quotes [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-string-09.trig"
                },
                {
                    "name": "rdf11TrigTests()[84]",
                    "displayName": "trigturtle06 - TriG can parse Turtle (collection subject and object) [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-turtle-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[85]",
                    "displayName": "trigturtle05 - TriG can parse Turtle (bare blankNodePropertyList) [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-turtle-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[86]",
                    "displayName": "trigsyntaxstring08 - long string literal with embedded newline [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-string-08.trig"
                },
                {
                    "name": "rdf11TrigTests()[87]",
                    "displayName": "trigsyntaxstring01 - string literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-string-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[88]",
                    "displayName": "repeated_semis_not_at_end - repeated semis not at end <s> <p> <o> ;;. [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/repeated_semis_not_at_end.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/repeated_semis_not_at_end.nq"
                },
                {
                    "name": "rdf11TrigTests()[89]",
                    "displayName": "trigsyntaxblanklabel - Characters allowed in blank node labels [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-blank-label.trig"
                },
                {
                    "name": "rdf11TrigTests()[90]",
                    "displayName": "trigsyntaxbadnumberdotinanon - Dot delimeter may not appear in anonymous nodes [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-number-dot-in-anon.trig"
                },
                {
                    "name": "rdf11TrigTests()[91]",
                    "displayName": "double_lower_case_e - double lower case e [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/double_lower_case_e.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/double_lower_case_e.nq"
                },
                {
                    "name": "rdf11TrigTests()[92]",
                    "displayName": "trigturtle02 - TriG can parse Turtle (repeated PREFIX) [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-turtle-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[93]",
                    "displayName": "trigturtle01 - TriG can parse Turtle [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-turtle-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[94]",
                    "displayName": "last - last, not first, non-empty nested collection [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/last.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/last.nq"
                },
                {
                    "name": "rdf11TrigTests()[95]",
                    "displayName": "trigsyntaxbadn3extras11 - @forSome is not TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-11.trig"
                },
                {
                    "name": "rdf11TrigTests()[96]",
                    "displayName": "trigsyntaxbadn3extras12 - @forAll is not TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-12.trig"
                },
                {
                    "name": "rdf11TrigTests()[97]",
                    "displayName": "trigsyntaxnsdots - Dots in namespace names [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-ns-dots.trig"
                },
                {
                    "name": "rdf11TrigTests()[98]",
                    "displayName": "trigsyntaxbadn3extras13 - @keywords is not TriG (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-n3-extras-13.trig"
                },
                {
                    "name": "rdf11TrigTests()[99]",
                    "displayName": "literal_with_form_feed - literal with FORM FEED [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_FORM_FEED.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_FORM_FEED.nq"
                },
                {
                    "name": "rdf11TrigTests()[100]",
                    "displayName": "trigsubm19 - positive integer, decimal and doubles [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-19.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-19.nq"
                },
                {
                    "name": "rdf11TrigTests()[101]",
                    "displayName": "trigsyntaxbadstring06 - Long literal with extra quote (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-string-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[102]",
                    "displayName": "trigsyntaxbadstring07 - Long literal with extra squote (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-string-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[103]",
                    "displayName": "bareword_integer - bareword integer [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/bareword_integer.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRIREF_datatype.nq"
                },
                {
                    "name": "rdf11TrigTests()[104]",
                    "displayName": "trigsyntaxbadstring04 - mismatching long string literal open/close (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-string-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[105]",
                    "displayName": "trigsubm16 - long literals with escapes [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-16.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-16.nq"
                },
                {
                    "name": "rdf11TrigTests()[106]",
                    "displayName": "trigsubm15 - simple long literal [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-15.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-15.nq"
                },
                {
                    "name": "rdf11TrigTests()[107]",
                    "displayName": "trigsyntaxbadstring05 - Long literal with missing end (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-string-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[108]",
                    "displayName": "trigsyntaxbadstring02 - mismatching string literal open/close (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-string-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[109]",
                    "displayName": "trigsubm18 - empty literals, normal and long variant [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-18.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-18.nq"
                },
                {
                    "name": "rdf11TrigTests()[110]",
                    "displayName": "trigsyntaxbadstring03 - mismatching string literal long/short (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-string-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[111]",
                    "displayName": "trigsubm17 - floating point number [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-17.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-17.nq"
                },
                {
                    "name": "rdf11TrigTests()[112]",
                    "displayName": "trigsyntaxbadstruct17 - labeled bnode as predicate (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-17.trig"
                },
                {
                    "name": "rdf11TrigTests()[113]",
                    "displayName": "lantag_with_subtag - lantag with subtag \"x\"@en-us [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/lantag_with_subtag.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/lantag_with_subtag.nq"
                },
                {
                    "name": "rdf11TrigTests()[114]",
                    "displayName": "trigsyntaxbadstruct13 - subject, predicate, no object (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-13.trig"
                },
                {
                    "name": "rdf11TrigTests()[115]",
                    "displayName": "trigsyntaxbadstruct14 - literal as subject (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-14.trig"
                },
                {
                    "name": "rdf11TrigTests()[116]",
                    "displayName": "trigsyntaxbadstruct15 - literal as predicate (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-15.trig"
                },
                {
                    "name": "rdf11TrigTests()[117]",
                    "displayName": "trigsyntaxbadstruct16 - bnode as predicate (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-16.trig"
                },
                {
                    "name": "rdf11TrigTests()[118]",
                    "displayName": "literal1_all_controls - LITERAL1_all_controls '\\x00\\x01\\x02\\x03\\x04...' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1_all_controls.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1_all_controls.nq"
                },
                {
                    "name": "rdf11TrigTests()[119]",
                    "displayName": "trigsyntaxbadstruct10 - extra '.' (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-10.trig"
                },
                {
                    "name": "rdf11TrigTests()[120]",
                    "displayName": "hyphen_minus_in_localname - HYPHEN-MINUS in local name [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/HYPHEN_MINUS_in_localName.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/HYPHEN_MINUS_in_localName.nq"
                },
                {
                    "name": "rdf11TrigTests()[121]",
                    "displayName": "trigsyntaxbadstruct12 - subject, predicate, no object (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-12.trig"
                },
                {
                    "name": "rdf11TrigTests()[122]",
                    "displayName": "trigsubm23 - comments [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-23.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-23.nq"
                },
                {
                    "name": "rdf11TrigTests()[123]",
                    "displayName": "trigsyntaxbadstring01 - mismatching string literal open/close (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-string-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[124]",
                    "displayName": "trigsubm22 - boolean literals [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-22.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-22.nq"
                },
                {
                    "name": "rdf11TrigTests()[125]",
                    "displayName": "localname_with_assigned_nfc_bmp_pn_chars_base_character_boundaries - localName with assigned, NFC-normalized, basic-multilingual-plane PN CHARS BASE character boundaries (p:AZaz\u00c0\u00d6\u00d8\u00f6\u00f8...) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_assigned_nfc_bmp_PN_CHARS_BASE_character_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_assigned_nfc_bmp_PN_CHARS_BASE_character_boundaries.nq"
                },
                {
                    "name": "rdf11TrigTests()[126]",
                    "displayName": "trigsubm25 - repeating a @prefix changes pname definition [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-25.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-25.nq"
                },
                {
                    "name": "rdf11TrigTests()[127]",
                    "displayName": "trigsubm24 - no final mewline [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-24.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-24.nq"
                },
                {
                    "name": "rdf11TrigTests()[128]",
                    "displayName": "literal2_ascii_boundaries - LITERAL2_ascii_boundaries '\\x00\\x09\\x0b\\x0c\\x0e\\x21\\x23...' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL2_ascii_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL2_ascii_boundaries.nq"
                },
                {
                    "name": "rdf11TrigTests()[129]",
                    "displayName": "sole_blanknodepropertylist - sole blankNodePropertyList [ <p> <o> ] . [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/sole_blankNodePropertyList.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/sole_blankNodePropertyList.nq"
                },
                {
                    "name": "rdf11TrigTests()[130]",
                    "displayName": "trigsubm21 - long literal ending in double quote [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-21.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-21.nq"
                },
                {
                    "name": "rdf11TrigTests()[131]",
                    "displayName": "trigsubm20 - negative integer, decimal and doubles [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-20.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-20.nq"
                },
                {
                    "name": "rdf11TrigTests()[132]",
                    "displayName": "literal_long2_ascii_boundaries - LITERAL_LONG2_ascii_boundaries '\\x00\\x21\\x23...' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG2_ascii_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG2_ascii_boundaries.nq"
                },
                {
                    "name": "rdf11TrigTests()[133]",
                    "displayName": "trigsubm27 - Repeating @base changes base for relative IRI lookup [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-27.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-27.nq"
                },
                {
                    "name": "rdf11TrigTests()[134]",
                    "displayName": "trigsubm26 - Variations on decimal canonicalization [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-26.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-26.nq"
                },
                {
                    "name": "rdf11TrigTests()[135]",
                    "displayName": "labeled_blank_node_subject - labeled blank node subject [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_subject.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_subject.nq"
                },
                {
                    "name": "rdf11TrigTests()[136]",
                    "displayName": "trigsyntaxbadstruct06 - Turtle does not allow bnodes-as-predicates (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[137]",
                    "displayName": "literal_with_escaped_form_feed - literal with escaped FORM FEED [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_escaped_FORM_FEED.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_FORM_FEED.nq"
                },
                {
                    "name": "rdf11TrigTests()[138]",
                    "displayName": "labeled_blank_node_graph - labeled blank node graph [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_graph.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_graph.nq"
                },
                {
                    "name": "rdf11TrigTests()[139]",
                    "displayName": "trigsyntaxbadstruct07 - Turtle does not allow labeled bnodes-as-predicates (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[140]",
                    "displayName": "trigsyntaxbadstruct09 - extra '.' (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-09.trig"
                },
                {
                    "name": "rdf11TrigTests()[141]",
                    "displayName": "trigsyntaxbadstruct02 - Turtle is not N3 (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[142]",
                    "displayName": "trigsyntaxbadstruct03 - Turtle is not NQuads (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[143]",
                    "displayName": "trigsyntaxbadstruct04 - Turtle does not allow literals-as-subjects (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[144]",
                    "displayName": "trigsyntaxbadstruct05 - Turtle does not allow literals-as-predicates (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-struct-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[145]",
                    "displayName": "collection_object - collection object [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/collection_object.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/collection_object.nq"
                },
                {
                    "name": "rdf11TrigTests()[146]",
                    "displayName": "labeled_blank_node_with_leading_underscore - labeled blank node with_leading_underscore (_:_) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_with_leading_underscore.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_object.nq"
                },
                {
                    "name": "rdf11TrigTests()[147]",
                    "displayName": "sparql_style_prefix - SPARQL-style prefix [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/SPARQL_style_prefix.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[148]",
                    "displayName": "collection_subject - collection subject [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/collection_subject.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/collection_subject.nq"
                },
                {
                    "name": "rdf11TrigTests()[149]",
                    "displayName": "localname_with_leading_underscore - localName with leading underscore (p:_) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_leading_underscore.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_leading_underscore.nq"
                },
                {
                    "name": "rdf11TrigTests()[150]",
                    "displayName": "trigsyntaxstresc01 - string literal with escaped newline [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-str-esc-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[151]",
                    "displayName": "literal_long2_with_reverse_solidus - REVERSE SOLIDUS at end of LITERAL_LONG2 [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG2_with_REVERSE_SOLIDUS.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG2_with_REVERSE_SOLIDUS.nq"
                },
                {
                    "name": "rdf11TrigTests()[152]",
                    "displayName": "literal_long1_with_utf8_boundaries - LITERAL_LONG1_with_UTF8_boundaries '\\x80\\x7ff\\x800\\xfff...' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG1_with_UTF8_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_with_UTF8_boundaries.nq"
                },
                {
                    "name": "rdf11TrigTests()[153]",
                    "displayName": "literal2 - LITERAL2 \"x\" [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL2.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1.nq"
                },
                {
                    "name": "rdf11TrigTests()[154]",
                    "displayName": "prefixed_iri_predicate - prefixed IRI predicate [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/prefixed_IRI_predicate.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[155]",
                    "displayName": "trigsyntaxstresc02 - string literal with Unicode escape [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-str-esc-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[156]",
                    "displayName": "trigsyntaxstresc03 - string literal with long Unicode escape [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-str-esc-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[157]",
                    "displayName": "anonymous_blank_node_object - anonymous blank node object [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/anonymous_blank_node_object.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/anonymous_blank_node_object.nq"
                },
                {
                    "name": "rdf11TrigTests()[158]",
                    "displayName": "sparql_style_base - SPARQL-style base [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/SPARQL_style_base.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[159]",
                    "displayName": "literal2_with_utf8_boundaries - LITERAL2_with_UTF8_boundaries '\\x80\\x7ff\\x800\\xfff...' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL2_with_UTF8_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_with_UTF8_boundaries.nq"
                },
                {
                    "name": "rdf11TrigTests()[160]",
                    "displayName": "underscore_in_localname - underscore in local name [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/underscore_in_localName.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/underscore_in_localName.nq"
                },
                {
                    "name": "rdf11TrigTests()[161]",
                    "displayName": "trigsyntaxbadmissingnsdotstart - Prefix must not start with dot (error in triple, not prefix directive like trig-syntax-bad-ns-dot-end) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-missing-ns-dot-start.trig"
                },
                {
                    "name": "rdf11TrigTests()[162]",
                    "displayName": "blanknodepropertylist_containing_collection - blankNodePropertyList containing collection [ <p1> ( \u2026 ) ] [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_containing_collection.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_containing_collection.nq"
                },
                {
                    "name": "rdf11TrigTests()[163]",
                    "displayName": "literal1 - LITERAL1 'x' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1.nq"
                },
                {
                    "name": "rdf11TrigTests()[164]",
                    "displayName": "old_style_prefix - old-style prefix [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/old_style_prefix.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[165]",
                    "displayName": "trigsyntaxbadlnescapestart - Bad hex escape at start of local name [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-ln-escape-start.trig"
                },
                {
                    "name": "rdf11TrigTests()[166]",
                    "displayName": "trigsyntaxkw01 - boolean literal (true) [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-kw-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[167]",
                    "displayName": "trigsyntaxkw02 - boolean literal (false) [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-kw-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[168]",
                    "displayName": "trigsyntaxbadlndashstart - Local name must not begin with dash [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-ln-dash-start.trig"
                },
                {
                    "name": "rdf11TrigTests()[169]",
                    "displayName": "trigsyntaxkw03 - 'a' as keyword [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-kw-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[170]",
                    "displayName": "trigsyntaxdatatypes02 - integer as xsd:string [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-datatypes-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[171]",
                    "displayName": "trigcollectiongraphbad01 - A graph may not be named with an empty collection [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-collection-graph-bad-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[172]",
                    "displayName": "literal1_all_punctuation - LITERAL1_all_punctuation '!\"#$%&()...' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1_all_punctuation.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1_all_punctuation.nq"
                },
                {
                    "name": "rdf11TrigTests()[173]",
                    "displayName": "trigsyntaxdatatypes01 - xsd:byte literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-datatypes-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[174]",
                    "displayName": "trigturtlebad01 - Trailing dot required in Turtle block [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-turtle-bad-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[175]",
                    "displayName": "anonymous_blank_node_graph - anonymous blank node graph [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/anonymous_blank_node_graph.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_graph.nq"
                },
                {
                    "name": "rdf11TrigTests()[176]",
                    "displayName": "trigturtlebad02 - TriG is not N-Quads [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-turtle-bad-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[177]",
                    "displayName": "iriref_datatype - IRIREF datatype \"\"^^<t> [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRIREF_datatype.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRIREF_datatype.nq"
                },
                {
                    "name": "rdf11TrigTests()[178]",
                    "displayName": "trigcollectiongraphbad02 - A graph may not be named with a collection [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-collection-graph-bad-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[179]",
                    "displayName": "trigsyntaxbase02 - BASE [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-base-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[180]",
                    "displayName": "trigsyntaxbase03 - @base with relative IRIs [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-base-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[181]",
                    "displayName": "trigsyntaxbase04 - base with relative IRIs [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-base-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[182]",
                    "displayName": "default_namespace_iri - default namespace IRI (:ln) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/default_namespace_IRI.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[183]",
                    "displayName": "trigsyntaxpnameesc02 - pname with back-slash escapes (2) [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-pname-esc-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[184]",
                    "displayName": "first - first, not last, non-empty nested collection [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/first.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/first.nq"
                },
                {
                    "name": "rdf11TrigTests()[185]",
                    "displayName": "trigsyntaxpnameesc03 - pname with back-slash escapes (3) [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-pname-esc-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[186]",
                    "displayName": "trigsyntaxpnameesc01 - pname with back-slash escapes [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-pname-esc-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[187]",
                    "displayName": "trigsyntaxbase01 - @base [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-base-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[188]",
                    "displayName": "triggraphbad04 - GRAPH needs {} [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-graph-bad-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[189]",
                    "displayName": "triggraphbad03 - GRAPH needs {} [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-graph-bad-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[190]",
                    "displayName": "triggraphbad02 - GRAPH not followed by DOT [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-graph-bad-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[191]",
                    "displayName": "triggraphbad01 - GRAPH but no name - GRAPH is not used with the default graph [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-graph-bad-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[192]",
                    "displayName": "trigsyntaxbadprefix04 - @prefix without prefix name (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-prefix-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[193]",
                    "displayName": "trigsyntaxbadprefix03 - @prefix without URI (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-prefix-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[194]",
                    "displayName": "trigsyntaxbadprefix06 - @prefix inside graph (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-prefix-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[195]",
                    "displayName": "trigsyntaxbadprefix05 - @prefix without ':' (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-prefix-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[196]",
                    "displayName": "trigsyntaxbadprefix07 - PREFIX inside graph (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-prefix-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[197]",
                    "displayName": "trigsyntaxbadnumericescape01 - Surrogates not allowed in STRING_LITERAL_QUOTE [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-numeric-escape-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[198]",
                    "displayName": "literal_with_escaped_line_feed - literal with escaped LINE FEED [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_escaped_LINE_FEED.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_LINE_FEED.nq"
                },
                {
                    "name": "rdf11TrigTests()[199]",
                    "displayName": "negative_numeric - negative numeric [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/negative_numeric.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/negative_numeric.nq"
                },
                {
                    "name": "rdf11TrigTests()[200]",
                    "displayName": "trigsyntaxbadprefix02 - No prefix (2) (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-prefix-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[201]",
                    "displayName": "trigsyntaxbadprefix01 - No prefix (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-prefix-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[202]",
                    "displayName": "langtagged_long - langtagged LONG \"\"\"x\"\"\"@en [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/langtagged_LONG.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/langtagged_non_LONG.nq"
                },
                {
                    "name": "rdf11TrigTests()[203]",
                    "displayName": "triggraphbad08 - @graph is not a keyword [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-graph-bad-08.trig"
                },
                {
                    "name": "rdf11TrigTests()[204]",
                    "displayName": "triggraphbad07 - GRAPH may not include a GRAPH [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-graph-bad-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[205]",
                    "displayName": "triggraphbad06 - GRAPH - Must close {} [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-graph-bad-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[206]",
                    "displayName": "triggraphbad05 - GRAPH and a name, not several [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-graph-bad-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[207]",
                    "displayName": "triggraphbad09 - Directives not allowed inside GRAPH [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-graph-bad-09.trig"
                },
                {
                    "name": "rdf11TrigTests()[208]",
                    "displayName": "literal_long2_with_1_squote - LITERAL_LONG2 with 1 squote \"\"\"a\"b\"\"\" [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG2_with_1_squote.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG2_with_1_squote.nq"
                },
                {
                    "name": "rdf11TrigTests()[209]",
                    "displayName": "trigsyntaxprefix06 - colon is a legal pname character [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-prefix-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[210]",
                    "displayName": "literal_with_character_tabulation - literal with CHARACTER TABULATION [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_CHARACTER_TABULATION.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_CHARACTER_TABULATION.nq"
                },
                {
                    "name": "rdf11TrigTests()[211]",
                    "displayName": "trigsyntaxprefix05 - @prefix with no suffix [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-prefix-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[212]",
                    "displayName": "trigsyntaxprefix04 - Empty @prefix with % escape [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-prefix-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[213]",
                    "displayName": "trigsyntaxprefix03 - Empty PREFIX [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-prefix-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[214]",
                    "displayName": "trigsyntaxprefix09 - percents in pnames [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-prefix-09.trig"
                },
                {
                    "name": "rdf11TrigTests()[215]",
                    "displayName": "trigsyntaxprefix08 - underscore is a legal pname character [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-prefix-08.trig"
                },
                {
                    "name": "rdf11TrigTests()[216]",
                    "displayName": "trigsyntaxprefix07 - dash is a legal pname character [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-prefix-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[217]",
                    "displayName": "literal_long2_with_utf8_boundaries - LITERAL_LONG2_with_UTF8_boundaries '\\x80\\x7ff\\x800\\xfff...' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG2_with_UTF8_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_with_UTF8_boundaries.nq"
                },
                {
                    "name": "rdf11TrigTests()[218]",
                    "displayName": "reserved_escaped_localname - reserved-escaped local name [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/reserved_escaped_localName.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/reserved_escaped_localName.nq"
                },
                {
                    "name": "rdf11TrigTests()[219]",
                    "displayName": "labeled_blank_node_with_non_leading_extras - labeled blank node with_non_leading_extras (_:a\u00b7\u0300\u036f\u203f.\u2040) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_with_non_leading_extras.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_object.nq"
                },
                {
                    "name": "rdf11TrigTests()[220]",
                    "displayName": "trigsyntaxbadlnescape - Bad hex escape in local name [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-ln-escape.trig"
                },
                {
                    "name": "rdf11TrigTests()[221]",
                    "displayName": "trigsyntaxprefix02 - PreFIX [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-prefix-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[222]",
                    "displayName": "trigsyntaxprefix01 - @prefix [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-prefix-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[223]",
                    "displayName": "prefixed_iri_object - prefixed IRI object [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/prefixed_IRI_object.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[224]",
                    "displayName": "trigsyntaxbadnumericescape10 - Surrogates not allowed in IRIREF [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-numeric-escape-10.trig"
                },
                {
                    "name": "rdf11TrigTests()[225]",
                    "displayName": "nested_collection - nested collection (()) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/nested_collection.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/nested_collection.nq"
                },
                {
                    "name": "rdf11TrigTests()[226]",
                    "displayName": "trigsyntaxbadnumericescape02 - Surrogates not allowed in STRING_LITERAL_QUOTE [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-numeric-escape-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[227]",
                    "displayName": "trigsyntaxbadnumericescape03 - Surrogates not allowed in STRING_LITERAL_SINGLE_QUOTE [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-numeric-escape-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[228]",
                    "displayName": "trigsyntaxbadnumericescape04 - Surrogates not allowed in STRING_LITERAL_SINGLE_QUOTE [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-numeric-escape-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[229]",
                    "displayName": "trigsyntaxbadlist02 - Free-standing list of zero-elements outside {} : bad syntax [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-list-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[230]",
                    "displayName": "trigsyntaxbadnumericescape05 - Surrogates not allowed in STRING_LITERAL_LONG_SINGLE_QUOTE [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-numeric-escape-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[231]",
                    "displayName": "trigsyntaxbadlist01 - Free-standing list outside {} : bad syntax [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-list-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[232]",
                    "displayName": "trigsyntaxbadlist04 - Free-standing list of zero elements : bad syntax [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-list-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[233]",
                    "displayName": "trigsyntaxbadnumericescape06 - Surrogates not allowed in STRING_LITERAL_LONG_SINGLE_QUOTE [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-numeric-escape-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[234]",
                    "displayName": "trigsyntaxbadnumericescape07 - Surrogates not allowed in STRING_LITERAL_LONG_QUOTE [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-numeric-escape-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[235]",
                    "displayName": "trigsyntaxbadlist03 - Free-standing list inside {} : bad syntax [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-list-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[236]",
                    "displayName": "trigsyntaxbadnumericescape08 - Surrogates not allowed in STRING_LITERAL_LONG_QUOTE [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-numeric-escape-08.trig"
                },
                {
                    "name": "rdf11TrigTests()[237]",
                    "displayName": "predicateobjectlist_with_two_objectlists - predicateObjectList with two objectLists \u2026 <o1>,<o2> [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/predicateObjectList_with_two_objectLists.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/predicateObjectList_with_two_objectLists.nq"
                },
                {
                    "name": "rdf11TrigTests()[238]",
                    "displayName": "trigsyntaxbadnumericescape09 - Surrogates not allowed in IRIREF [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-numeric-escape-09.trig"
                },
                {
                    "name": "rdf11TrigTests()[239]",
                    "displayName": "literal_with_backspace - literal with BACKSPACE [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_BACKSPACE.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_BACKSPACE.nq"
                },
                {
                    "name": "rdf11TrigTests()[240]",
                    "displayName": "nested_blanknodepropertylists - nested blankNodePropertyLists [ <p1> [ <p2> <o2> ] ; <p3> <o3> ] [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/nested_blankNodePropertyLists.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/nested_blankNodePropertyLists.nq"
                },
                {
                    "name": "rdf11TrigTests()[241]",
                    "displayName": "prefix_only_iri - prefix-only IRI (p:) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/prefix_only_IRI.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[242]",
                    "displayName": "localname_with_assigned_nfc_pn_chars_base_character_boundaries - localName with assigned, NFC-normalized PN CHARS BASE character boundaries (p:AZaz\u00c0\u00d6\u00d8\u00f6\u00f8...) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_assigned_nfc_PN_CHARS_BASE_character_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_assigned_nfc_PN_CHARS_BASE_character_boundaries.nq"
                },
                {
                    "name": "rdf11TrigTests()[243]",
                    "displayName": "trigsyntaxfile02 - Only comment [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-file-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[244]",
                    "displayName": "trigsyntaxfile01 - Empty file [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-file-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[245]",
                    "displayName": "trigsyntaxfile03 - One comment, one empty line [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-file-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[246]",
                    "displayName": "prefix_reassigned_and_used - prefix reassigned and used [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/prefix_reassigned_and_used.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/prefix_reassigned_and_used.nq"
                },
                {
                    "name": "rdf11TrigTests()[247]",
                    "displayName": "labeled_blank_node_with_pn_chars_base_character_boundaries - labeled blank node with PN_CHARS_BASE character boundaries (_:AZaz\u00c0\u00d6\u00d8\u00f6\u00f8...) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_with_PN_CHARS_BASE_character_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_object.nq"
                },
                {
                    "name": "rdf11TrigTests()[248]",
                    "displayName": "localname_with_colon - localname with COLON [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localname_with_COLON.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localname_with_COLON.nq"
                },
                {
                    "name": "rdf11TrigTests()[249]",
                    "displayName": "trigsyntaxminimalwhitespace01 - tests absense of whitespace in various positions [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-minimal-whitespace-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[250]",
                    "displayName": "trigsyntaxbadesc01 - Bad string escape (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-esc-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[251]",
                    "displayName": "trigsubm01 - Blank subject [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-01.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-01.nq"
                },
                {
                    "name": "rdf11TrigTests()[252]",
                    "displayName": "trigsubm03 - , operator [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-03.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-03.nq"
                },
                {
                    "name": "rdf11TrigTests()[253]",
                    "displayName": "trigsubm02 - @prefix and qnames [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-02.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-02.nq"
                },
                {
                    "name": "rdf11TrigTests()[254]",
                    "displayName": "trigsyntaxbadesc03 - Bad string escape (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-esc-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[255]",
                    "displayName": "trigsyntaxbadesc02 - Bad string escape (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-esc-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[256]",
                    "displayName": "trigsyntaxbadesc04 - Bad string escape (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-esc-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[257]",
                    "displayName": "trigsyntaxlncolons - Colons in pname local names [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-ln-colons.trig"
                },
                {
                    "name": "rdf11TrigTests()[258]",
                    "displayName": "trigsubm09 - empty collection [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-09.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-09.nq"
                },
                {
                    "name": "rdf11TrigTests()[259]",
                    "displayName": "trigsubm08 - simple collection [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-08.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-08.nq"
                },
                {
                    "name": "rdf11TrigTests()[260]",
                    "displayName": "trigsubm05 - empty [] as subject and object [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-05.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-05.nq"
                },
                {
                    "name": "rdf11TrigTests()[261]",
                    "displayName": "trigsubm04 - ; operator [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-04.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-04.nq"
                },
                {
                    "name": "rdf11TrigTests()[262]",
                    "displayName": "trigsubm07 - 'a' as predicate [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-07.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-07.nq"
                },
                {
                    "name": "rdf11TrigTests()[263]",
                    "displayName": "trigsubm06 - non-empty [] as subject and object [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-06.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-06.nq"
                },
                {
                    "name": "rdf11TrigTests()[264]",
                    "displayName": "trigsyntaxbadbase01 - @base without URI (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-base-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[265]",
                    "displayName": "bareword_a_predicate - bareword a predicate [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/bareword_a_predicate.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/bareword_a_predicate.nq"
                },
                {
                    "name": "rdf11TrigTests()[266]",
                    "displayName": "trigsyntaxlndots - Dots in pname local names [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-ln-dots.trig"
                },
                {
                    "name": "rdf11TrigTests()[267]",
                    "displayName": "trigbnodeplistgraphbad01 - A graph may not be named with a blankNodePropertyList [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-bnodeplist-graph-bad-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[268]",
                    "displayName": "trigsyntaxbadbase03 - BASE without URI (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-base-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[269]",
                    "displayName": "trigsyntaxbadbase02 - @base in wrong case (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-base-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[270]",
                    "displayName": "trigsyntaxbadbase05 - BASE inside graph (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-base-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[271]",
                    "displayName": "alternating_iri_graphs - alternating graphs with IRI names [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/alternating_iri_graphs.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/alternating_iri_graphs.nq"
                },
                {
                    "name": "rdf11TrigTests()[272]",
                    "displayName": "literal_long2_with_2_squotes - LITERAL_LONG2 with 2 squotes \"\"\"a\"\"b\"\"\" [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG2_with_2_squotes.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG2_with_2_squotes.nq"
                },
                {
                    "name": "rdf11TrigTests()[273]",
                    "displayName": "trigsyntaxbadbase04 - @base inside graph (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-base-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[274]",
                    "displayName": "trigsubm12 - - and _ in names and qnames [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-12.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-12.nq"
                },
                {
                    "name": "rdf11TrigTests()[275]",
                    "displayName": "literal_false - literal false [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_false.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_false.nq"
                },
                {
                    "name": "rdf11TrigTests()[276]",
                    "displayName": "trigsubm11 - decimal integer canonicalization [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-11.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-11.nq"
                },
                {
                    "name": "rdf11TrigTests()[277]",
                    "displayName": "trigsubm14 - bare : allowed [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-14.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-14.nq"
                },
                {
                    "name": "rdf11TrigTests()[278]",
                    "displayName": "trigsubm13 - tests for rdf:_<numbers> and other qnames starting with _ [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-13.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-13.nq"
                },
                {
                    "name": "rdf11TrigTests()[279]",
                    "displayName": "trigevalstruct01 - triple with IRIs [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-eval-struct-01.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-eval-struct-01.nq"
                },
                {
                    "name": "rdf11TrigTests()[280]",
                    "displayName": "trigevalstruct02 - triple with IRIs and embedded whitespace [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-eval-struct-02.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-eval-struct-02.nq"
                },
                {
                    "name": "rdf11TrigTests()[281]",
                    "displayName": "trigsubm10 - integer datatyped literal [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-10.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-subm-10.nq"
                },
                {
                    "name": "rdf11TrigTests()[282]",
                    "displayName": "literal_long1_with_2_squotes - LITERAL_LONG1 with 2 squotes '''a''b''' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG1_with_2_squotes.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG1_with_2_squotes.nq"
                },
                {
                    "name": "rdf11TrigTests()[283]",
                    "displayName": "prefix_with_non_leading_extras - prefix with_non_leading_extras (_:a\u00b7\u0300\u036f\u203f.\u2040) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/prefix_with_non_leading_extras.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[284]",
                    "displayName": "trigsyntaxbadnum02 - Bad number format (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-num-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[285]",
                    "displayName": "trigsyntaxstruct06 - missing '.' [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-struct-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[286]",
                    "displayName": "literal_true - literal true [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_true.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_true.nq"
                },
                {
                    "name": "rdf11TrigTests()[287]",
                    "displayName": "trigsyntaxbadnum01 - Bad number format (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-num-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[288]",
                    "displayName": "trigsyntaxstruct07 - trailing ';' no '.' [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-struct-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[289]",
                    "displayName": "trigsyntaxstruct04 - predicate list with multiple ;; [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-struct-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[290]",
                    "displayName": "trigsyntaxbadnum04 - Bad number format (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-num-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[291]",
                    "displayName": "trigsyntaxbadnum03 - Bad number format (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-num-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[292]",
                    "displayName": "trigsyntaxstruct05 - predicate list with multiple ;; [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-struct-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[293]",
                    "displayName": "trigsyntaxstruct02 - predicate list with object list [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-struct-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[294]",
                    "displayName": "trigsyntaxstruct03 - predicate list with object list and dangling ';' [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-struct-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[295]",
                    "displayName": "trigsyntaxbadnum05 - Bad number format (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-num-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[296]",
                    "displayName": "trigsyntaxstruct01 - object list [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-struct-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[297]",
                    "displayName": "predicateobjectlist_with_blanknodepropertylist_as_object - predicateObjectList_with_blankNodePropertyList_as_object <s> <p> [ <p2> <o> ] ; <p3> [ <p4> <o2> , <o3> ]  [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/predicateObjectList_with_blankNodePropertyList_as_object.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/predicateObjectList_with_blankNodePropertyList_as_object.nq"
                },
                {
                    "name": "rdf11TrigTests()[298]",
                    "displayName": "blanknodepropertylist_as_object - blankNodePropertyList as object <s> <p> [ \u2026 ] . [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_as_object.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_as_object.nq"
                },
                {
                    "name": "rdf11TrigTests()[299]",
                    "displayName": "trigsyntaxbadbnode01 - Colon in bnode label not allowed (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-bnode-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[300]",
                    "displayName": "trigsyntaxbadbnode02 - Colon in bnode label not allowed (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-bnode-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[301]",
                    "displayName": "comment_following_localname - comment following localName [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/comment_following_localName.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[302]",
                    "displayName": "alternating_bnode_graphs - alternating graphs with BNode names [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/alternating_bnode_graphs.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/alternating_bnode_graphs.nq"
                },
                {
                    "name": "rdf11TrigTests()[303]",
                    "displayName": "old_style_base - old-style base [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/old_style_base.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[304]",
                    "displayName": "literal_with_escaped_backspace - literal with escaped BACKSPACE [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_escaped_BACKSPACE.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_BACKSPACE.nq"
                },
                {
                    "name": "rdf11TrigTests()[305]",
                    "displayName": "positive_numeric - positive numeric [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/positive_numeric.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/positive_numeric.nq"
                },
                {
                    "name": "rdf11TrigTests()[306]",
                    "displayName": "anonymous_blank_node_subject - anonymous blank node subject [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/anonymous_blank_node_subject.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/anonymous_blank_node_subject.nq"
                },
                {
                    "name": "rdf11TrigTests()[307]",
                    "displayName": "iri_with_four_digit_numeric_escape - IRI with four digit numeric escape (\\u) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_with_four_digit_numeric_escape.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI_spo.nq"
                },
                {
                    "name": "rdf11TrigTests()[308]",
                    "displayName": "langtagged_non_long - langtagged non-LONG \"x\"@en [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/langtagged_non_LONG.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/langtagged_non_LONG.nq"
                },
                {
                    "name": "rdf11TrigTests()[309]",
                    "displayName": "blanknodepropertylist_as_object_containing_objectlist_of_two_objects - blankNodePropertyList as object containing objectList of two objects <s> <p> [ <p2 <o> ] , <o2> . [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_as_object_containing_objectList_of_two_objects.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_as_object_containing_objectList_of_two_objects.nq"
                },
                {
                    "name": "rdf11TrigTests()[310]",
                    "displayName": "blanknodepropertylist_as_subject - blankNodePropertyList as subject [ \u2026 ] <p> <o> . [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_as_subject.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/blankNodePropertyList_as_subject.nq"
                },
                {
                    "name": "rdf11TrigTests()[311]",
                    "displayName": "literal_with_numeric_escape4 - literal with numeric escape4 \\u [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_numeric_escape4.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_numeric_escape4.nq"
                },
                {
                    "name": "rdf11TrigTests()[312]",
                    "displayName": "localname_with_non_leading_extras - localName with_non_leading_extras (_:a\u00b7\u0300\u036f\u203f.\u2040) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_non_leading_extras.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_non_leading_extras.nq"
                },
                {
                    "name": "rdf11TrigTests()[313]",
                    "displayName": "labeled_blank_node_with_leading_digit - labeled blank node with_leading_digit (_:0) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_with_leading_digit.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/labeled_blank_node_object.nq"
                },
                {
                    "name": "rdf11TrigTests()[314]",
                    "displayName": "literal_with_numeric_escape8 - literal with numeric escape8 \\U [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_numeric_escape8.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_numeric_escape4.nq"
                },
                {
                    "name": "rdf11TrigTests()[315]",
                    "displayName": "trigsyntaxlists03 - isomorphic list as subject and object [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-lists-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[316]",
                    "displayName": "trigsyntaxlists02 - mixed list [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-lists-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[317]",
                    "displayName": "trigsyntaxlists05 - mixed lists with embedded lists [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-lists-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[318]",
                    "displayName": "trigsyntaxnumber01 - integer literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[319]",
                    "displayName": "trigsyntaxlists04 - lists of lists [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-lists-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[320]",
                    "displayName": "prefixed_name_datatype - prefixed name datatype \"\"^^p:t [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/prefixed_name_datatype.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRIREF_datatype.nq"
                },
                {
                    "name": "rdf11TrigTests()[321]",
                    "displayName": "literal_long2 - LITERAL_LONG2 \"\"\"x\"\"\" [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG2.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1.nq"
                },
                {
                    "name": "rdf11TrigTests()[322]",
                    "displayName": "literal_long1 - LITERAL_LONG1 '''x''' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG1.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1.nq"
                },
                {
                    "name": "rdf11TrigTests()[323]",
                    "displayName": "trigsyntaxbadlang01 - langString with bad lang (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-lang-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[324]",
                    "displayName": "comment_following_pname_ns - comment following PNAME_NS [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/comment_following_PNAME_NS.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/comment_following_PNAME_NS.nq"
                },
                {
                    "name": "rdf11TrigTests()[325]",
                    "displayName": "localname_with_nfc_pn_chars_base_character_boundaries - localName with nfc-normalize PN CHARS BASE character boundaries (p:AZaz\u00c0\u00d6\u00d8\u00f6\u00f8...) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_nfc_PN_CHARS_BASE_character_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/localName_with_nfc_PN_CHARS_BASE_character_boundaries.nq"
                },
                {
                    "name": "rdf11TrigTests()[326]",
                    "displayName": "trigsyntaxbnode10 - mixed bnode property list and triple [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bnode-10.trig"
                },
                {
                    "name": "rdf11TrigTests()[327]",
                    "displayName": "trigsyntaxbadpname02 - Bad %-sequence in pname (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-pname-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[328]",
                    "displayName": "trigsyntaxbadpname03 - Bad unicode escape in pname (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-pname-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[329]",
                    "displayName": "trigsyntaxbadpname01 - '~' must be escaped in pname (negative test) [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-pname-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[330]",
                    "displayName": "bareword_decimal - bareword decimal [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/bareword_decimal.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/bareword_decimal.nq"
                },
                {
                    "name": "rdf11TrigTests()[331]",
                    "displayName": "langtagged_long_with_subtag - langtagged LONG with subtag \"\"\"Cheers\"\"\"@en-UK [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/langtagged_LONG_with_subtag.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/langtagged_LONG_with_subtag.nq"
                },
                {
                    "name": "rdf11TrigTests()[332]",
                    "displayName": "repeated_semis_at_end - repeated semis at end <s> <p> <o> ;; <p2> <o2> . [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/repeated_semis_at_end.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/predicateObjectList_with_two_objectLists.nq"
                },
                {
                    "name": "rdf11TrigTests()[333]",
                    "displayName": "triggraphbad11 - A graph may not be named with a collection [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-graph-bad-11.trig"
                },
                {
                    "name": "rdf11TrigTests()[334]",
                    "displayName": "triggraphbad10 - A graph may not be named with an empty collection [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-graph-bad-10.trig"
                },
                {
                    "name": "rdf11TrigTests()[335]",
                    "displayName": "literal1_with_utf8_boundaries - LITERAL1_with_UTF8_boundaries '\\x80\\x7ff\\x800\\xfff...' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL1_with_UTF8_boundaries.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_with_UTF8_boundaries.nq"
                },
                {
                    "name": "rdf11TrigTests()[336]",
                    "displayName": "trigsyntaxnumber10 - negative double literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-10.trig"
                },
                {
                    "name": "rdf11TrigTests()[337]",
                    "displayName": "trigsyntaxnumber12 - double literal no leading zero [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-12.trig"
                },
                {
                    "name": "rdf11TrigTests()[338]",
                    "displayName": "trigsyntaxnumber11 - double literal no fraction [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-11.trig"
                },
                {
                    "name": "rdf11TrigTests()[339]",
                    "displayName": "literal_with_carriage_return - literal with CARRIAGE RETURN [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_CARRIAGE_RETURN.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_CARRIAGE_RETURN.nq"
                },
                {
                    "name": "rdf11TrigTests()[340]",
                    "displayName": "iriresolution07 - IRI resolution (RFC3986 using base IRI with file path) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 4,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI-resolution-07.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI-resolution-07.nq"
                },
                {
                    "name": "rdf11TrigTests()[341]",
                    "displayName": "iriresolution08 - IRI resolution (miscellaneous cases) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI-resolution-08.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI-resolution-08.nq"
                },
                {
                    "name": "rdf11TrigTests()[342]",
                    "displayName": "trigsyntaxbadnsdotend - Prefix must not end in dot [Trig Trig negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-bad-ns-dot-end.trig"
                },
                {
                    "name": "rdf11TrigTests()[343]",
                    "displayName": "iriresolution01 - IRI resolution (RFC3986 original cases) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI-resolution-01.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI-resolution-01.nq"
                },
                {
                    "name": "rdf11TrigTests()[344]",
                    "displayName": "iriresolution02 - IRI resolution (RFC3986 using base IRI with trailing slash) [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI-resolution-02.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/IRI-resolution-02.nq"
                },
                {
                    "name": "rdf11TrigTests()[345]",
                    "displayName": "literal_long1_with_1_squote - LITERAL_LONG1 with 1 squote '''a'b''' [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG1_with_1_squote.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/LITERAL_LONG1_with_1_squote.nq"
                },
                {
                    "name": "rdf11TrigTests()[346]",
                    "displayName": "bareword_double - bareword double [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/bareword_double.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/bareword_double.nq"
                },
                {
                    "name": "rdf11TrigTests()[347]",
                    "displayName": "trigsyntaxnumber03 - positive integer literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-03.trig"
                },
                {
                    "name": "rdf11TrigTests()[348]",
                    "displayName": "trigsyntaxnumber02 - negative integer literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-02.trig"
                },
                {
                    "name": "rdf11TrigTests()[349]",
                    "displayName": "trigsyntaxlists01 - empty list [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-lists-01.trig"
                },
                {
                    "name": "rdf11TrigTests()[350]",
                    "displayName": "trigsyntaxnumber05 - decimal literal (no leading digits) [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-05.trig"
                },
                {
                    "name": "rdf11TrigTests()[351]",
                    "displayName": "trigsyntaxnumber04 - decimal literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-04.trig"
                },
                {
                    "name": "rdf11TrigTests()[352]",
                    "displayName": "literal_with_escaped_character_tabulation - literal with escaped CHARACTER TABULATION [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_escaped_CHARACTER_TABULATION.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/literal_with_CHARACTER_TABULATION.nq"
                },
                {
                    "name": "rdf11TrigTests()[353]",
                    "displayName": "trigsyntaxnumber07 - positive decimal literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-07.trig"
                },
                {
                    "name": "rdf11TrigTests()[354]",
                    "displayName": "trigsyntaxnumber06 - negative decimal literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-06.trig"
                },
                {
                    "name": "rdf11TrigTests()[355]",
                    "displayName": "trigsyntaxnumber09 - double literal [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-09.trig"
                },
                {
                    "name": "rdf11TrigTests()[356]",
                    "displayName": "objectlist_with_two_objects - objectList with two objects \u2026 <o1>,<o2> [Trig Trig positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/objectList_with_two_objects.trig",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/objectList_with_two_objects.nq"
                },
                {
                    "name": "rdf11TrigTests()[357]",
                    "displayName": "trigsyntaxnumber08 - integer literal with decimal lexical confusion [Trig Trig positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/trig-syntax-number-08.trig"
                }
            ]
        },
        {
            "id": "turtle",
            "name": "Turtle (RDF 1.1)",
            "total": 313,
            "passed": 313,
            "failed": 0,
            "skipped": 0,
            "passRate": 100.0,
            "durationMs": 119,
            "tests": [
                {
                    "name": "rdf11TurtleTests()[1]",
                    "displayName": "turtlesyntaxbadstring01 - mismatching string literal open/close (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-string-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[2]",
                    "displayName": "turtlesyntaxbadstruct17 - labeled bnode as predicate (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-17.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[3]",
                    "displayName": "turtlesyntaxnumber13 - decimal literal no leading zero [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-13.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[4]",
                    "displayName": "blanknodepropertylist_as_object_containing_objectlist - blankNodePropertyList as object containing objectList <s> <p> [ <p2> <o>,<o2> ] . [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_as_object_containing_objectList.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_as_object_containing_objectList.nt"
                },
                {
                    "name": "rdf11TurtleTests()[5]",
                    "displayName": "localname_with_leading_underscore - localName with leading underscore (p:_) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_leading_underscore.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_leading_underscore.nt"
                },
                {
                    "name": "rdf11TurtleTests()[6]",
                    "displayName": "turtlesyntaxbadkw05 - 'true' cannot be used as object (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-kw-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[7]",
                    "displayName": "localname_with_assigned_nfc_pn_chars_base_character_boundaries - localName with assigned, NFC-normalized PN CHARS BASE character boundaries (p:AZaz\u00c0\u00d6\u00d8\u00f6\u00f8...) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_assigned_nfc_PN_CHARS_BASE_character_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_assigned_nfc_PN_CHARS_BASE_character_boundaries.nt"
                },
                {
                    "name": "rdf11TurtleTests()[8]",
                    "displayName": "turtlesyntaxbadnsdotstart - Prefix must not start with dot [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-ns-dot-start.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[9]",
                    "displayName": "turtlesyntaxbadstruct12 - subject, predicate, no object (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-12.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[10]",
                    "displayName": "literal_long2_with_utf8_boundaries - LITERAL_LONG2_with_UTF8_boundaries '\\x80\\x7ff\\x800\\xfff...' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG2_with_UTF8_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_with_UTF8_boundaries.nt"
                },
                {
                    "name": "rdf11TurtleTests()[11]",
                    "displayName": "turtlesyntaxbadstruct11 - trailing ';' no '.' (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-11.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[12]",
                    "displayName": "turtlesyntaxbadbnode01 - Colon in bnode label not allowed (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-bnode-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[13]",
                    "displayName": "turtlesyntaxbadstruct10 - extra '.' (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-10.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[14]",
                    "displayName": "turtlesyntaxbadstring06 - Long literal with extra quote (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-string-06.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[15]",
                    "displayName": "turtlesyntaxbadstring07 - Long literal with extra squote (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-string-07.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[16]",
                    "displayName": "turtlesyntaxbadbnode02 - Colon in bnode label not allowed (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-bnode-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[17]",
                    "displayName": "turtlesyntaxbadstruct16 - bnode as predicate (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-16.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[18]",
                    "displayName": "turtlesyntaxbadstring04 - mismatching long string literal open/close (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-string-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[19]",
                    "displayName": "turtlesyntaxbadkw02 - 'a' cannot be used as subject (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-kw-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[20]",
                    "displayName": "turtlesyntaxbadkw01 - 'A' is not a keyword (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-kw-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[21]",
                    "displayName": "turtlesyntaxbadstruct15 - literal as predicate (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-15.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[22]",
                    "displayName": "turtlesyntaxbadstring05 - Long literal with missing end (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-string-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[23]",
                    "displayName": "literal_long2_with_1_squote - LITERAL_LONG2 with 1 squote \"\"\"a\"b\"\"\" [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG2_with_1_squote.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG2_with_1_squote.nt"
                },
                {
                    "name": "rdf11TurtleTests()[24]",
                    "displayName": "literal2_with_utf8_boundaries - LITERAL2_with_UTF8_boundaries '\\x80\\x7ff\\x800\\xfff...' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL2_with_UTF8_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_with_UTF8_boundaries.nt"
                },
                {
                    "name": "rdf11TurtleTests()[25]",
                    "displayName": "turtlesyntaxbadstring02 - mismatching string literal open/close (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-string-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[26]",
                    "displayName": "turtlesyntaxbadkw04 - 'true' cannot be used as subject (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-kw-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[27]",
                    "displayName": "turtlesyntaxbadstruct14 - literal as subject (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-14.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[28]",
                    "displayName": "turtlesyntaxbadstring03 - mismatching string literal long/short (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-string-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[29]",
                    "displayName": "turtlesyntaxbadkw03 - 'a' cannot be used as object (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-kw-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[30]",
                    "displayName": "turtlesyntaxbadstruct13 - subject, predicate, no object (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-13.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[31]",
                    "displayName": "turtlesyntaxbadstruct09 - extra '.' (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-09.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[32]",
                    "displayName": "turtlesyntaxbaduri04 - Bad IRI : character escapes not allowed (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-uri-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[33]",
                    "displayName": "turtlesyntaxbaduri03 - Bad IRI : bad long escape (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-uri-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[34]",
                    "displayName": "turtlesyntaxbadstruct08 - missing '.' (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-08.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[35]",
                    "displayName": "turtlesyntaxbaduri02 - Bad IRI : bad escape (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-uri-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[36]",
                    "displayName": "turtlesyntaxbadstruct07 - Turtle does not allow labeled bnodes-as-predicates (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-07.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[37]",
                    "displayName": "turtlesyntaxbadstruct06 - Turtle does not allow bnodes-as-predicates (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-06.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[38]",
                    "displayName": "turtlesyntaxbaduri01 - Bad IRI : space (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-uri-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[39]",
                    "displayName": "turtlesyntaxbaduri05 - Bad IRI : character escapes not allowed (2) (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-uri-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[40]",
                    "displayName": "blanknodepropertylist_as_object - blankNodePropertyList as object <s> <p> [ \u2026 ] . [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_as_object.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_as_object.nt"
                },
                {
                    "name": "rdf11TurtleTests()[41]",
                    "displayName": "literal_long1_with_utf8_boundaries - LITERAL_LONG1_with_UTF8_boundaries '\\x80\\x7ff\\x800\\xfff...' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG1_with_UTF8_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_with_UTF8_boundaries.nt"
                },
                {
                    "name": "rdf11TurtleTests()[42]",
                    "displayName": "repeated_semis_not_at_end - repeated semis not at end <s> <p> <o> ;;. [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/repeated_semis_not_at_end.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/repeated_semis_not_at_end.nt"
                },
                {
                    "name": "rdf11TurtleTests()[43]",
                    "displayName": "labeled_blank_node_with_pn_chars_base_character_boundaries - labeled blank node with PN_CHARS_BASE character boundaries (_:AZaz\u00c0\u00d6\u00d8\u00f6\u00f8...) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_with_PN_CHARS_BASE_character_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_object.nt"
                },
                {
                    "name": "rdf11TurtleTests()[44]",
                    "displayName": "turtlesyntaxbadstruct01 - Turtle is not TriG (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[45]",
                    "displayName": "turtlesyntaxbadstruct05 - Turtle does not allow literals-as-predicates (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[46]",
                    "displayName": "turtlesyntaxbadstruct04 - Turtle does not allow literals-as-subjects (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[47]",
                    "displayName": "old_style_base - old-style base [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/old_style_base.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[48]",
                    "displayName": "turtlesyntaxbadstruct03 - Turtle is not NQuads (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[49]",
                    "displayName": "turtlesyntaxbadstruct02 - Turtle is not N3 (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-struct-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[50]",
                    "displayName": "turtlesyntaxbadn3extras03 - N3 paths not in Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[51]",
                    "displayName": "turtlesyntaxbadn3extras02 - = is not Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[52]",
                    "displayName": "turtlesyntaxbadn3extras01 - {} fomulae not in Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[53]",
                    "displayName": "turtleevalstruct02 - triple with IRIs and embedded whitespace [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-struct-02.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-struct-02.nt"
                },
                {
                    "name": "rdf11TurtleTests()[54]",
                    "displayName": "turtleevalstruct01 - triple with IRIs [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-struct-01.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-struct-01.nt"
                },
                {
                    "name": "rdf11TurtleTests()[55]",
                    "displayName": "turtlesyntaxbadn3extras07 - @keywords is not Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-07.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[56]",
                    "displayName": "turtlesyntaxbadn3extras06 - N3 paths not in Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-06.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[57]",
                    "displayName": "turtlesyntaxbadn3extras05 - N3 is...of not in Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[58]",
                    "displayName": "turtlesyntaxbadlang01 - langString with bad lang (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-lang-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[59]",
                    "displayName": "turtlesyntaxbadn3extras04 - N3 paths not in Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[60]",
                    "displayName": "turtlesyntaxbadn3extras09 - => is not Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-09.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[61]",
                    "displayName": "turtlesyntaxbadn3extras08 - @keywords is not Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-08.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[62]",
                    "displayName": "turtlesyntaxbadpname01 - '~' must be escaped in pname (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-pname-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[63]",
                    "displayName": "underscore_in_localname - underscore in local name [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/underscore_in_localName.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/underscore_in_localName.nt"
                },
                {
                    "name": "rdf11TurtleTests()[64]",
                    "displayName": "turtlesyntaxbadpname03 - Bad unicode escape in pname (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-pname-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[65]",
                    "displayName": "turtlesyntaxbadpname02 - Bad %-sequence in pname (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-pname-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[66]",
                    "displayName": "literal1_ascii_boundaries - LITERAL1_ascii_boundaries '\\x00\\x09\\x0b\\x0c\\x0e\\x26\\x28...' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1_ascii_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1_ascii_boundaries.nt"
                },
                {
                    "name": "rdf11TurtleTests()[67]",
                    "displayName": "turtleevallists05 - mixed lists with embedded lists [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-05.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-05.nt"
                },
                {
                    "name": "rdf11TurtleTests()[68]",
                    "displayName": "turtleevallists06 - list containing blank node with abbreviated term [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-06.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-06.nt"
                },
                {
                    "name": "rdf11TurtleTests()[69]",
                    "displayName": "literal_true - literal true [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_true.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_true.nt"
                },
                {
                    "name": "rdf11TurtleTests()[70]",
                    "displayName": "turtleevallists03 - isomorphic list as subject and object [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-03.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-03.nt"
                },
                {
                    "name": "rdf11TurtleTests()[71]",
                    "displayName": "turtleevallists04 - lists of lists [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-04.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-04.nt"
                },
                {
                    "name": "rdf11TurtleTests()[72]",
                    "displayName": "blanknodepropertylist_with_multiple_triples - blankNodePropertyList with multiple triples [ <s> <p> ; <s2> <p2> ] [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_with_multiple_triples.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_with_multiple_triples.nt"
                },
                {
                    "name": "rdf11TurtleTests()[73]",
                    "displayName": "turtlesyntaxlndots - Dots in pname local names [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-ln-dots.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[74]",
                    "displayName": "numeric_with_leading_0 - numeric with leading 0 [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/numeric_with_leading_0.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/numeric_with_leading_0.nt"
                },
                {
                    "name": "rdf11TurtleTests()[75]",
                    "displayName": "collection_object - collection object [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/collection_object.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/collection_object.nt"
                },
                {
                    "name": "rdf11TurtleTests()[76]",
                    "displayName": "anonymous_blank_node_object - anonymous blank node object [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/anonymous_blank_node_object.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_object.nt"
                },
                {
                    "name": "rdf11TurtleTests()[77]",
                    "displayName": "turtleevallists01 - empty list [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-01.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-01.nt"
                },
                {
                    "name": "rdf11TurtleTests()[78]",
                    "displayName": "turtlesyntaxstring10 - long langString literal with embedded newline [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-string-10.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[79]",
                    "displayName": "turtleevallists02 - mixed list [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-02.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-eval-lists-02.nt"
                },
                {
                    "name": "rdf11TurtleTests()[80]",
                    "displayName": "turtlesyntaxkw03 - 'a' as keyword [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-kw-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[81]",
                    "displayName": "turtlesyntaxkw02 - boolean literal (false) [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-kw-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[82]",
                    "displayName": "turtlesyntaxstring11 - squote long langString literal with embedded newline [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-string-11.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[83]",
                    "displayName": "turtlesyntaxkw01 - boolean literal (true) [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-kw-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[84]",
                    "displayName": "labeled_blank_node_with_non_leading_extras - labeled blank node with_non_leading_extras (_:a\u00b7\u0300\u036f\u203f.\u2040) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_with_non_leading_extras.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_object.nt"
                },
                {
                    "name": "rdf11TurtleTests()[85]",
                    "displayName": "literal1_all_controls - LITERAL1_all_controls '\\x00\\x01\\x02\\x03\\x04...' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1_all_controls.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1_all_controls.nt"
                },
                {
                    "name": "rdf11TurtleTests()[86]",
                    "displayName": "turtlesyntaxdatatypes02 - integer as xsd:string [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-datatypes-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[87]",
                    "displayName": "turtlesyntaxbadn3extras13 - @keywords is not Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-13.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[88]",
                    "displayName": "turtlesyntaxbadn3extras12 - @forAll is not Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-12.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[89]",
                    "displayName": "turtlesyntaxbadn3extras11 - @forSome is not Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-11.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[90]",
                    "displayName": "turtlesyntaxdatatypes01 - xsd:byte literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-datatypes-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[91]",
                    "displayName": "collection_subject - collection subject [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/collection_subject.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/collection_subject.nt"
                },
                {
                    "name": "rdf11TurtleTests()[92]",
                    "displayName": "sparql_style_prefix - SPARQL-style prefix [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/SPARQL_style_prefix.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[93]",
                    "displayName": "turtlesyntaxstring02 - langString literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-string-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[94]",
                    "displayName": "turtlesyntaxstring03 - langString literal with region [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-string-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[95]",
                    "displayName": "turtlesyntaxstring04 - squote string literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-string-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[96]",
                    "displayName": "turtlesyntaxstring05 - squote langString literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-string-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[97]",
                    "displayName": "turtlesyntaxpnameesc02 - pname with back-slash escapes (2) [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-pname-esc-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[98]",
                    "displayName": "turtlesyntaxstring06 - squote langString literal with region [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-string-06.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[99]",
                    "displayName": "turtlesyntaxpnameesc03 - pname with back-slash escapes (3) [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-pname-esc-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[100]",
                    "displayName": "turtlesyntaxstring07 - long string literal with embedded single- and double-quotes [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-string-07.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[101]",
                    "displayName": "turtlesyntaxstring08 - long string literal with embedded newline [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-string-08.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[102]",
                    "displayName": "literal_with_carriage_return - literal with CARRIAGE RETURN [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_CARRIAGE_RETURN.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_CARRIAGE_RETURN.nt"
                },
                {
                    "name": "rdf11TurtleTests()[103]",
                    "displayName": "turtlesyntaxstring09 - squote long string literal with embedded single- and double-quotes [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-string-09.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[104]",
                    "displayName": "turtlesyntaxpnameesc01 - pname with back-slash escapes [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-pname-esc-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[105]",
                    "displayName": "labeled_blank_node_object - labeled blank node object [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_object.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_object.nt"
                },
                {
                    "name": "rdf11TurtleTests()[106]",
                    "displayName": "literal_with_escaped_backspace - literal with escaped BACKSPACE [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_escaped_BACKSPACE.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_BACKSPACE.nt"
                },
                {
                    "name": "rdf11TurtleTests()[107]",
                    "displayName": "iri_with_all_punctuation - IRI with all punctuation [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_with_all_punctuation.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_with_all_punctuation.nt"
                },
                {
                    "name": "rdf11TurtleTests()[108]",
                    "displayName": "nested_blanknodepropertylists - nested blankNodePropertyLists [ <p1> [ <p2> <o2> ] ; <p3> <o3> ] [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/nested_blankNodePropertyLists.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/nested_blankNodePropertyLists.nt"
                },
                {
                    "name": "rdf11TurtleTests()[109]",
                    "displayName": "turtlesyntaxbadn3extras10 - <= is not Turtle (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-n3-extras-10.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[110]",
                    "displayName": "negative_numeric - negative numeric [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/negative_numeric.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/negative_numeric.nt"
                },
                {
                    "name": "rdf11TurtleTests()[111]",
                    "displayName": "bareword_integer - bareword integer [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/bareword_integer.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRIREF_datatype.nt"
                },
                {
                    "name": "rdf11TurtleTests()[112]",
                    "displayName": "turtlesyntaxstring01 - string literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-string-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[113]",
                    "displayName": "iriresolution01 - IRI resolution (RFC3986 original cases) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 2,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI-resolution-01.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI-resolution-01.nt"
                },
                {
                    "name": "rdf11TurtleTests()[114]",
                    "displayName": "iriresolution02 - IRI resolution (RFC3986 using base IRI with trailing slash) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI-resolution-02.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI-resolution-02.nt"
                },
                {
                    "name": "rdf11TurtleTests()[115]",
                    "displayName": "turtlesyntaxbadlndashstart - Local name must not begin with dash [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-ln-dash-start.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[116]",
                    "displayName": "iriresolution07 - IRI resolution (RFC3986 using base IRI with file path) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI-resolution-07.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI-resolution-07.nt"
                },
                {
                    "name": "rdf11TurtleTests()[117]",
                    "displayName": "iriresolution08 - IRI resolution (miscellaneous cases) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI-resolution-08.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI-resolution-08.nt"
                },
                {
                    "name": "rdf11TurtleTests()[118]",
                    "displayName": "localname_with_nfc_pn_chars_base_character_boundaries - localName with nfc-normalize PN CHARS BASE character boundaries (p:AZaz\u00c0\u00d6\u00d8\u00f6\u00f8...) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_nfc_PN_CHARS_BASE_character_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_nfc_PN_CHARS_BASE_character_boundaries.nt"
                },
                {
                    "name": "rdf11TurtleTests()[119]",
                    "displayName": "turtlesyntaxbadnum04 - Bad number format (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-num-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[120]",
                    "displayName": "turtlesyntaxbadnum03 - Bad number format (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-num-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[121]",
                    "displayName": "turtlesyntaxbadnum05 - Bad number format (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-num-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[122]",
                    "displayName": "turtlesyntaxstruct03 - predicate list with object list and dangling ';' [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-struct-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[123]",
                    "displayName": "turtlesyntaxstruct02 - predicate list with object list [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-struct-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[124]",
                    "displayName": "turtlesyntaxbadnum02 - Bad number format (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-num-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[125]",
                    "displayName": "turtlesyntaxstruct05 - predicate list with multiple ;; [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-struct-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[126]",
                    "displayName": "turtlesyntaxstruct04 - predicate list with multiple ;; [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-struct-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[127]",
                    "displayName": "turtlesyntaxbadnum01 - Bad number format (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-num-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[128]",
                    "displayName": "turtlesyntaxstruct01 - object list [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-struct-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[129]",
                    "displayName": "localname_with_colon - localname with COLON [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localname_with_COLON.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localname_with_COLON.nt"
                },
                {
                    "name": "rdf11TurtleTests()[130]",
                    "displayName": "turtlesyntaxfile02 - Only comment [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-file-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[131]",
                    "displayName": "turtlesyntaxfile01 - Empty file [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-file-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[132]",
                    "displayName": "anonymous_blank_node_subject - anonymous blank node subject [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/anonymous_blank_node_subject.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_subject.nt"
                },
                {
                    "name": "rdf11TurtleTests()[133]",
                    "displayName": "turtlesyntaxfile03 - One comment, one empty line [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-file-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[134]",
                    "displayName": "literal_with_character_tabulation - literal with CHARACTER TABULATION [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_CHARACTER_TABULATION.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_CHARACTER_TABULATION.nt"
                },
                {
                    "name": "rdf11TurtleTests()[135]",
                    "displayName": "turtlesyntaxbaduriescape04 - Bad IRI : {abc} (negative evaluation test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-uri-escape-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[136]",
                    "displayName": "turtlesyntaxbaduriescape03 - Bad IRI : hex 3E is  (negative evaluation test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-uri-escape-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[137]",
                    "displayName": "turtlesyntaxbaduriescape02 - Bad IRI : hex 3C is < (negative evaluation test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-uri-escape-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[138]",
                    "displayName": "turtlesyntaxbaduriescape01 - Bad IRI : good escape, bad character (negative evaluation test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-uri-escape-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[139]",
                    "displayName": "comment_following_pname_ns - comment following PNAME_NS [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/comment_following_PNAME_NS.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/comment_following_PNAME_NS.nt"
                },
                {
                    "name": "rdf11TurtleTests()[140]",
                    "displayName": "literal_false - literal false [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_false.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_false.nt"
                },
                {
                    "name": "rdf11TurtleTests()[141]",
                    "displayName": "turtlesyntaxbase02 - BASE [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-base-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[142]",
                    "displayName": "turtlesyntaxbase03 - @base with relative IRIs [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-base-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[143]",
                    "displayName": "turtlesyntaxbase04 - base with relative IRIs [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-base-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[144]",
                    "displayName": "percent_escaped_localname - percent-escaped local name [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/percent_escaped_localName.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/percent_escaped_localName.nt"
                },
                {
                    "name": "rdf11TurtleTests()[145]",
                    "displayName": "blanknodepropertylist_as_object_containing_objectlist_of_two_objects - blankNodePropertyList as object containing objectList of two objects <s> <p> [ <p2 <o> ] , <o2> . [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_as_object_containing_objectList_of_two_objects.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_as_object_containing_objectList_of_two_objects.nt"
                },
                {
                    "name": "rdf11TurtleTests()[146]",
                    "displayName": "turtlesyntaxnumber01 - integer literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[147]",
                    "displayName": "localname_with_leading_digit - localName with leading digit (p:_) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_leading_digit.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_leading_digit.nt"
                },
                {
                    "name": "rdf11TurtleTests()[148]",
                    "displayName": "bareword_double - bareword double [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/bareword_double.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/bareword_double.nt"
                },
                {
                    "name": "rdf11TurtleTests()[149]",
                    "displayName": "turtlesyntaxbase01 - @base [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-base-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[150]",
                    "displayName": "empty_collection - empty collection () [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/empty_collection.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/empty_collection.nt"
                },
                {
                    "name": "rdf11TurtleTests()[151]",
                    "displayName": "lantag_with_subtag - lantag with subtag \"x\"@en-us [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/lantag_with_subtag.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/lantag_with_subtag.nt"
                },
                {
                    "name": "rdf11TurtleTests()[152]",
                    "displayName": "turtlesyntaxnumber02 - negative integer literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[153]",
                    "displayName": "turtlesyntaxnumber03 - positive integer literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[154]",
                    "displayName": "turtlesyntaxnumber04 - decimal literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[155]",
                    "displayName": "turtlesyntaxnumber05 - decimal literal (no leading digits) [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[156]",
                    "displayName": "turtlesyntaxnumber06 - negative decimal literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-06.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[157]",
                    "displayName": "turtlesyntaxnumber07 - positive decimal literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-07.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[158]",
                    "displayName": "turtlesyntaxnumber08 - integer literal with decimal lexical confusion [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-08.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[159]",
                    "displayName": "turtlesyntaxnumber09 - double literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-09.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[160]",
                    "displayName": "repeated_semis_at_end - repeated semis at end <s> <p> <o> ;; <p2> <o2> . [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/repeated_semis_at_end.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/predicateObjectList_with_two_objectLists.nt"
                },
                {
                    "name": "rdf11TurtleTests()[161]",
                    "displayName": "turtlesyntaxnumber10 - negative double literal [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-10.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[162]",
                    "displayName": "iri_with_eight_digit_numeric_escape - IRI with eight digit numeric escape (\\U) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_with_eight_digit_numeric_escape.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[163]",
                    "displayName": "turtlesyntaxnumber11 - double literal no fraction [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-11.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[164]",
                    "displayName": "prefix_with_pn_chars_base_character_boundaries - prefix with PN CHARS BASE character boundaries (prefix: AZaz\u00c0\u00d6\u00d8\u00f6\u00f8...:) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/prefix_with_PN_CHARS_BASE_character_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[165]",
                    "displayName": "turtlesyntaxnumber12 - double literal no leading zero [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-number-12.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[166]",
                    "displayName": "nested_collection - nested collection (()) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/nested_collection.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/nested_collection.nt"
                },
                {
                    "name": "rdf11TurtleTests()[167]",
                    "displayName": "turtlesyntaxbadnumericescape10 - Surrogates not allowed in IRIREF [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-numeric-escape-10.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[168]",
                    "displayName": "sole_blanknodepropertylist - sole blankNodePropertyList [ <p> <o> ] . [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/sole_blankNodePropertyList.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_subject.nt"
                },
                {
                    "name": "rdf11TurtleTests()[169]",
                    "displayName": "turtlesyntaxbadlnescapestart - Bad hex escape at start of local name [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-ln-escape-start.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[170]",
                    "displayName": "prefixed_name_datatype - prefixed name datatype \"\"^^p:t [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/prefixed_name_datatype.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRIREF_datatype.nt"
                },
                {
                    "name": "rdf11TurtleTests()[171]",
                    "displayName": "turtlesubm19 - positive integer, decimal and doubles [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-19.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-19.nt"
                },
                {
                    "name": "rdf11TurtleTests()[172]",
                    "displayName": "last - last, not first, non-empty nested collection [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/last.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/last.nt"
                },
                {
                    "name": "rdf11TurtleTests()[173]",
                    "displayName": "literal_with_escaped_form_feed - literal with escaped FORM FEED [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_escaped_FORM_FEED.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_FORM_FEED.nt"
                },
                {
                    "name": "rdf11TurtleTests()[174]",
                    "displayName": "turtlesubm17 - floating point number [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-17.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-17.nt"
                },
                {
                    "name": "rdf11TurtleTests()[175]",
                    "displayName": "turtlesubm18 - empty literals, normal and long variant [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-18.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-18.nt"
                },
                {
                    "name": "rdf11TurtleTests()[176]",
                    "displayName": "turtlesubm15 - simple long literal [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-15.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-15.nt"
                },
                {
                    "name": "rdf11TurtleTests()[177]",
                    "displayName": "turtlesubm16 - long literals with escapes [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-16.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-16.nt"
                },
                {
                    "name": "rdf11TurtleTests()[178]",
                    "displayName": "turtlesyntaxbnode06 - labeled bnode subject [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bnode-06.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[179]",
                    "displayName": "turtlesubm24 - no final mewline [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-24.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-24.nt"
                },
                {
                    "name": "rdf11TurtleTests()[180]",
                    "displayName": "literal_with_reverse_solidus - literal with REVERSE SOLIDUS [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_REVERSE_SOLIDUS.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_REVERSE_SOLIDUS.nt"
                },
                {
                    "name": "rdf11TurtleTests()[181]",
                    "displayName": "prefixed_iri_predicate - prefixed IRI predicate [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/prefixed_IRI_predicate.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[182]",
                    "displayName": "turtlesubm25 - repeating a @prefix changes pname definition [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-25.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-25.nt"
                },
                {
                    "name": "rdf11TurtleTests()[183]",
                    "displayName": "turtlesyntaxbnode05 - bnode property list subject [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bnode-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[184]",
                    "displayName": "turtlesyntaxbnode08 - bare bnode property list [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bnode-08.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[185]",
                    "displayName": "turtlesubm22 - boolean literals [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-22.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-22.nt"
                },
                {
                    "name": "rdf11TurtleTests()[186]",
                    "displayName": "turtlesubm23 - comments [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-23.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-23.nt"
                },
                {
                    "name": "rdf11TurtleTests()[187]",
                    "displayName": "turtlesyntaxbnode07 - labeled bnode subject and object [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bnode-07.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[188]",
                    "displayName": "turtlesyntaxbnode02 - bnode object [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bnode-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[189]",
                    "displayName": "turtlesubm20 - negative integer, decimal and doubles [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-20.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-20.nt"
                },
                {
                    "name": "rdf11TurtleTests()[190]",
                    "displayName": "turtlesyntaxbnode01 - bnode subject [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bnode-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[191]",
                    "displayName": "turtlesubm21 - long literal ending in double quote [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-21.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-21.nt"
                },
                {
                    "name": "rdf11TurtleTests()[192]",
                    "displayName": "turtlesyntaxbnode04 - bnode property list object (2) [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bnode-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[193]",
                    "displayName": "turtlesyntaxbnode03 - bnode property list object [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bnode-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[194]",
                    "displayName": "turtlesyntaxbadnumericescape02 - Surrogates not allowed in STRING_LITERAL_QUOTE [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-numeric-escape-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[195]",
                    "displayName": "turtlesyntaxbadnumericescape03 - Surrogates not allowed in STRING_LITERAL_SINGLE_QUOTE [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-numeric-escape-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[196]",
                    "displayName": "turtlesyntaxbadnumericescape04 - Surrogates not allowed in STRING_LITERAL_SINGLE_QUOTE [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-numeric-escape-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[197]",
                    "displayName": "turtlesyntaxbadnumericescape05 - Surrogates not allowed in STRING_LITERAL_LONG_SINGLE_QUOTE [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-numeric-escape-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[198]",
                    "displayName": "turtlesyntaxbadnumericescape06 - Surrogates not allowed in STRING_LITERAL_LONG_SINGLE_QUOTE [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-numeric-escape-06.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[199]",
                    "displayName": "turtlesyntaxnsdots - Dots in namespace names [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-ns-dots.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[200]",
                    "displayName": "turtlesyntaxbadnumericescape07 - Surrogates not allowed in STRING_LITERAL_LONG_QUOTE [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-numeric-escape-07.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[201]",
                    "displayName": "turtlesyntaxbnode09 - bnode property list [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bnode-09.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[202]",
                    "displayName": "turtlesyntaxbadnumericescape08 - Surrogates not allowed in STRING_LITERAL_LONG_QUOTE [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-numeric-escape-08.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[203]",
                    "displayName": "turtlesyntaxbadnumericescape09 - Surrogates not allowed in IRIREF [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-numeric-escape-09.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[204]",
                    "displayName": "literal_with_backspace - literal with BACKSPACE [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_BACKSPACE.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_BACKSPACE.nt"
                },
                {
                    "name": "rdf11TurtleTests()[205]",
                    "displayName": "literal1 - LITERAL1 'x' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1.nt"
                },
                {
                    "name": "rdf11TurtleTests()[206]",
                    "displayName": "prefix_with_non_leading_extras - prefix with_non_leading_extras (_:a\u00b7\u0300\u036f\u203f.\u2040) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/prefix_with_non_leading_extras.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[207]",
                    "displayName": "turtlesyntaxbadnumericescape01 - Surrogates not allowed in STRING_LITERAL_QUOTE [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-numeric-escape-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[208]",
                    "displayName": "langtagged_long - langtagged LONG \"\"\"x\"\"\"@en [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/langtagged_LONG.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/langtagged_non_LONG.nt"
                },
                {
                    "name": "rdf11TurtleTests()[209]",
                    "displayName": "turtlesubm26 - Variations on decimal canonicalization [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 3,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-26.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-26.nt"
                },
                {
                    "name": "rdf11TurtleTests()[210]",
                    "displayName": "turtlesubm27 - Repeating @base changes base for relative IRI lookup [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-27.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-27.nt"
                },
                {
                    "name": "rdf11TurtleTests()[211]",
                    "displayName": "turtlesyntaxprefix05 - @prefix with no suffix [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-prefix-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[212]",
                    "displayName": "turtlesyntaxprefix06 - colon is a legal pname character [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-prefix-06.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[213]",
                    "displayName": "turtlesyntaxprefix03 - Empty PREFIX [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-prefix-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[214]",
                    "displayName": "turtlesyntaxprefix04 - Empty @prefix with % escape [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-prefix-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[215]",
                    "displayName": "turtlesyntaxprefix09 - percents in pnames [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-prefix-09.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[216]",
                    "displayName": "bareword_decimal - bareword decimal [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/bareword_decimal.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/bareword_decimal.nt"
                },
                {
                    "name": "rdf11TurtleTests()[217]",
                    "displayName": "turtlesyntaxprefix07 - dash is a legal pname character [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-prefix-07.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[218]",
                    "displayName": "turtlesyntaxprefix08 - underscore is a legal pname character [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-prefix-08.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[219]",
                    "displayName": "objectlist_with_two_objects - objectList with two objects \u2026 <o1>,<o2> [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/objectList_with_two_objects.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/objectList_with_two_objects.nt"
                },
                {
                    "name": "rdf11TurtleTests()[220]",
                    "displayName": "literal2 - LITERAL2 \"x\" [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL2.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1.nt"
                },
                {
                    "name": "rdf11TurtleTests()[221]",
                    "displayName": "turtlesyntaxprefix01 - @prefix [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-prefix-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[222]",
                    "displayName": "turtlesyntaxprefix02 - PreFIX [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-prefix-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[223]",
                    "displayName": "literal_long2_ascii_boundaries - LITERAL_LONG2_ascii_boundaries '\\x00\\x21\\x23...' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG2_ascii_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG2_ascii_boundaries.nt"
                },
                {
                    "name": "rdf11TurtleTests()[224]",
                    "displayName": "prefix_reassigned_and_used - prefix reassigned and used [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/prefix_reassigned_and_used.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/prefix_reassigned_and_used.nt"
                },
                {
                    "name": "rdf11TurtleTests()[225]",
                    "displayName": "literal_with_escaped_character_tabulation - literal with escaped CHARACTER TABULATION [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_escaped_CHARACTER_TABULATION.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_CHARACTER_TABULATION.nt"
                },
                {
                    "name": "rdf11TurtleTests()[226]",
                    "displayName": "turtlesyntaxbadmissingnsdotstart - Prefix must not start with dot (error in triple, not prefix directive like turtle-syntax-bad-ns-dot-end) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-missing-ns-dot-start.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[227]",
                    "displayName": "predicateobjectlist_with_blanknodepropertylist_as_object - predicateObjectList_with_blankNodePropertyList_as_object <s> <p> [ <p2> <o> ] ; <p3> [ <p4> <o2> , <o3> ]  [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/predicateObjectList_with_blankNodePropertyList_as_object.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/predicateObjectList_with_blankNodePropertyList_as_object.nt"
                },
                {
                    "name": "rdf11TurtleTests()[228]",
                    "displayName": "turtlesyntaxbadesc01 - Bad string escape (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-esc-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[229]",
                    "displayName": "turtlesyntaxbadesc02 - Bad string escape (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-esc-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[230]",
                    "displayName": "turtlesyntaxbadesc03 - Bad string escape (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-esc-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[231]",
                    "displayName": "turtlesyntaxbadesc04 - Bad string escape (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-esc-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[232]",
                    "displayName": "literal_with_escaped_carriage_return - literal with escaped CARRIAGE RETURN [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_escaped_CARRIAGE_RETURN.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_CARRIAGE_RETURN.nt"
                },
                {
                    "name": "rdf11TurtleTests()[233]",
                    "displayName": "turtlesyntaxbadnumberdotinanon - Dot delimeter may not appear in anonymous nodes [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-number-dot-in-anon.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[234]",
                    "displayName": "literal_long2_with_reverse_solidus - REVERSE SOLIDUS at end of LITERAL_LONG2 [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG2_with_REVERSE_SOLIDUS.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG2_with_REVERSE_SOLIDUS.nt"
                },
                {
                    "name": "rdf11TurtleTests()[235]",
                    "displayName": "turtlesyntaxbadnum05 - Bad number format (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-LITERAL2_with_langtag_and_datatype.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[236]",
                    "displayName": "langtagged_non_long - langtagged non-LONG \"x\"@en [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/langtagged_non_LONG.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/langtagged_non_LONG.nt"
                },
                {
                    "name": "rdf11TurtleTests()[237]",
                    "displayName": "first - first, not last, non-empty nested collection [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/first.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/first.nt"
                },
                {
                    "name": "rdf11TurtleTests()[238]",
                    "displayName": "labeled_blank_node_with_leading_underscore - labeled blank node with_leading_underscore (_:_) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_with_leading_underscore.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_object.nt"
                },
                {
                    "name": "rdf11TurtleTests()[239]",
                    "displayName": "turtlesyntaxlncolons - Colons in pname local names [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-ln-colons.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[240]",
                    "displayName": "turtlesyntaxbadnsdotend - Prefix must not end in dot [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-ns-dot-end.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[241]",
                    "displayName": "literal_long1_with_2_squotes - LITERAL_LONG1 with 2 squotes '''a''b''' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG1_with_2_squotes.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG1_with_2_squotes.nt"
                },
                {
                    "name": "rdf11TurtleTests()[242]",
                    "displayName": "positive_numeric - positive numeric [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/positive_numeric.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/positive_numeric.nt"
                },
                {
                    "name": "rdf11TurtleTests()[243]",
                    "displayName": "prefix_only_iri - prefix-only IRI (p:) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/prefix_only_IRI.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[244]",
                    "displayName": "labeled_blank_node_with_leading_digit - labeled blank node with_leading_digit (_:0) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_with_leading_digit.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_object.nt"
                },
                {
                    "name": "rdf11TurtleTests()[245]",
                    "displayName": "turtlesyntaxbadmissingnsdotend - Prefix must not end in dot (error in triple, not prefix directive like turtle-syntax-bad-ns-dot-end) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-missing-ns-dot-end.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[246]",
                    "displayName": "turtlesyntaxbadprefix03 - @prefix without URI (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-prefix-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[247]",
                    "displayName": "turtlesyntaxbadprefix04 - @prefix without prefix name (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-prefix-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[248]",
                    "displayName": "turtlesyntaxbadprefix05 - @prefix without ':' (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-prefix-05.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[249]",
                    "displayName": "literal_with_line_feed - literal with LINE FEED [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_LINE_FEED.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_LINE_FEED.nt"
                },
                {
                    "name": "rdf11TurtleTests()[250]",
                    "displayName": "turtlesyntaxbadblanklabeldotend - Blank node label must not end in dot [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-blank-label-dot-end.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[251]",
                    "displayName": "literal_long1 - LITERAL_LONG1 '''x''' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG1.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1.nt"
                },
                {
                    "name": "rdf11TurtleTests()[252]",
                    "displayName": "literal_long2 - LITERAL_LONG2 \"\"\"x\"\"\" [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG2.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1.nt"
                },
                {
                    "name": "rdf11TurtleTests()[253]",
                    "displayName": "iri_subject - IRI subject [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_subject.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[254]",
                    "displayName": "double_lower_case_e - double lower case e [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/double_lower_case_e.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/double_lower_case_e.nt"
                },
                {
                    "name": "rdf11TurtleTests()[255]",
                    "displayName": "comment_following_localname - comment following localName [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/comment_following_localName.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[256]",
                    "displayName": "blanknodepropertylist_containing_collection - blankNodePropertyList containing collection [ <p1> ( \u2026 ) ] [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_containing_collection.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_containing_collection.nt"
                },
                {
                    "name": "rdf11TurtleTests()[257]",
                    "displayName": "two_literal_long2s - two LITERAL_LONG2s testing quote delimiter overrun [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/two_LITERAL_LONG2s.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/two_LITERAL_LONG2s.nt"
                },
                {
                    "name": "rdf11TurtleTests()[258]",
                    "displayName": "bareword_a_predicate - bareword a predicate [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/bareword_a_predicate.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/bareword_a_predicate.nt"
                },
                {
                    "name": "rdf11TurtleTests()[259]",
                    "displayName": "turtlesyntaxbadprefix01 - No prefix (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-prefix-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[260]",
                    "displayName": "turtlesyntaxbadprefix02 - No prefix (2) (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-prefix-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[261]",
                    "displayName": "literal_with_numeric_escape8 - literal with numeric escape8 \\U [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_numeric_escape8.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_numeric_escape4.nt"
                },
                {
                    "name": "rdf11TurtleTests()[262]",
                    "displayName": "turtlesyntaxuri03 - IRIs with long Unicode escape [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-uri-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[263]",
                    "displayName": "turtlesyntaxuri04 - Legal IRIs [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-uri-04.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[264]",
                    "displayName": "turtlesyntaxuri01 - Only IRIs [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-uri-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[265]",
                    "displayName": "turtlesyntaxuri02 - IRIs with Unicode escape [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-uri-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[266]",
                    "displayName": "literal_with_numeric_escape4 - literal with numeric escape4 \\u [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_numeric_escape4.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_numeric_escape4.nt"
                },
                {
                    "name": "rdf11TurtleTests()[267]",
                    "displayName": "turtlesyntaxbadlnescape - Bad hex escape in local name [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-ln-escape.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[268]",
                    "displayName": "literal_long1_with_1_squote - LITERAL_LONG1 with 1 squote '''a'b''' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG1_with_1_squote.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG1_with_1_squote.nt"
                },
                {
                    "name": "rdf11TurtleTests()[269]",
                    "displayName": "hyphen_minus_in_localname - HYPHEN-MINUS in local name [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/HYPHEN_MINUS_in_localName.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/HYPHEN_MINUS_in_localName.nt"
                },
                {
                    "name": "rdf11TurtleTests()[270]",
                    "displayName": "literal_long1_ascii_boundaries - LITERAL_LONG1_ascii_boundaries '\\x00\\x26\\x28...' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG1_ascii_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG1_ascii_boundaries.nt"
                },
                {
                    "name": "rdf11TurtleTests()[271]",
                    "displayName": "literal2_ascii_boundaries - LITERAL2_ascii_boundaries '\\x00\\x09\\x0b\\x0c\\x0e\\x21\\x23...' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL2_ascii_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL2_ascii_boundaries.nt"
                },
                {
                    "name": "rdf11TurtleTests()[272]",
                    "displayName": "localname_with_assigned_nfc_bmp_pn_chars_base_character_boundaries - localName with assigned, NFC-normalized, basic-multilingual-plane PN CHARS BASE character boundaries (p:AZaz\u00c0\u00d6\u00d8\u00f6\u00f8...) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_assigned_nfc_bmp_PN_CHARS_BASE_character_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_assigned_nfc_bmp_PN_CHARS_BASE_character_boundaries.nt"
                },
                {
                    "name": "rdf11TurtleTests()[273]",
                    "displayName": "old_style_prefix - old-style prefix [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/old_style_prefix.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[274]",
                    "displayName": "sparql_style_base - SPARQL-style base [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/SPARQL_style_base.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[275]",
                    "displayName": "turtlesyntaxblanklabel - Characters allowed in blank node labels [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-blank-label.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[276]",
                    "displayName": "literal_with_form_feed - literal with FORM FEED [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_FORM_FEED.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_FORM_FEED.nt"
                },
                {
                    "name": "rdf11TurtleTests()[277]",
                    "displayName": "turtlesyntaxstresc02 - string literal with Unicode escape [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-str-esc-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[278]",
                    "displayName": "localname_with_non_leading_extras - localName with_non_leading_extras (_:a\u00b7\u0300\u036f\u203f.\u2040) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_non_leading_extras.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/localName_with_non_leading_extras.nt"
                },
                {
                    "name": "rdf11TurtleTests()[279]",
                    "displayName": "turtlesyntaxstresc03 - string literal with long Unicode escape [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-str-esc-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[280]",
                    "displayName": "turtlesyntaxbadbase02 - @base in wrong case (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-base-02.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[281]",
                    "displayName": "turtlesyntaxbadbase03 - BASE without URI (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-base-03.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[282]",
                    "displayName": "turtlesyntaxstresc01 - string literal with escaped newline [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-str-esc-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[283]",
                    "displayName": "literal1_all_punctuation - LITERAL1_all_punctuation '!\"#$%&()...' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1_all_punctuation.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1_all_punctuation.nt"
                },
                {
                    "name": "rdf11TurtleTests()[284]",
                    "displayName": "literal_with_escaped_line_feed - literal with escaped LINE FEED [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_escaped_LINE_FEED.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/literal_with_LINE_FEED.nt"
                },
                {
                    "name": "rdf11TurtleTests()[285]",
                    "displayName": "turtlesubm02 - @prefix and qnames [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-02.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-02.nt"
                },
                {
                    "name": "rdf11TurtleTests()[286]",
                    "displayName": "turtlesubm03 - , operator [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-03.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-03.nt"
                },
                {
                    "name": "rdf11TurtleTests()[287]",
                    "displayName": "turtlesyntaxbadbase01 - @base without URI (negative test) [Turtle Turtle negative syntax test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bad-base-01.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[288]",
                    "displayName": "turtlesubm01 - Blank subject [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-01.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-01.nt"
                },
                {
                    "name": "rdf11TurtleTests()[289]",
                    "displayName": "predicateobjectlist_with_two_objectlists - predicateObjectList with two objectLists \u2026 <o1>,<o2> [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/predicateObjectList_with_two_objectLists.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/predicateObjectList_with_two_objectLists.nt"
                },
                {
                    "name": "rdf11TurtleTests()[290]",
                    "displayName": "iriref_datatype - IRIREF datatype \"\"^^<t> [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRIREF_datatype.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRIREF_datatype.nt"
                },
                {
                    "name": "rdf11TurtleTests()[291]",
                    "displayName": "number_sign_following_localname - number sign following localName [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/number_sign_following_localName.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/number_sign_following_localName.nt"
                },
                {
                    "name": "rdf11TurtleTests()[292]",
                    "displayName": "langtagged_long_with_subtag - langtagged LONG with subtag \"\"\"Cheers\"\"\"@en-UK [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/langtagged_LONG_with_subtag.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/langtagged_LONG_with_subtag.nt"
                },
                {
                    "name": "rdf11TurtleTests()[293]",
                    "displayName": "blanknodepropertylist_as_subject - blankNodePropertyList as subject [ \u2026 ] <p> <o> . [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_as_subject.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/blankNodePropertyList_as_subject.nt"
                },
                {
                    "name": "rdf11TurtleTests()[294]",
                    "displayName": "number_sign_following_pname_ns - number sign following PNAME_NS [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/number_sign_following_PNAME_NS.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/number_sign_following_PNAME_NS.nt"
                },
                {
                    "name": "rdf11TurtleTests()[295]",
                    "displayName": "literal1_with_utf8_boundaries - LITERAL1_with_UTF8_boundaries '\\x80\\x7ff\\x800\\xfff...' [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL1_with_UTF8_boundaries.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_with_UTF8_boundaries.nt"
                },
                {
                    "name": "rdf11TurtleTests()[296]",
                    "displayName": "turtlesubm08 - simple collection [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-08.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-08.nt"
                },
                {
                    "name": "rdf11TurtleTests()[297]",
                    "displayName": "default_namespace_iri - default namespace IRI (:ln) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/default_namespace_IRI.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[298]",
                    "displayName": "turtlesubm09 - empty collection [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-09.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-09.nt"
                },
                {
                    "name": "rdf11TurtleTests()[299]",
                    "displayName": "turtlesyntaxbnode10 - mixed bnode property list and triple [Turtle Turtle positive syntax test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-syntax-bnode-10.ttl"
                },
                {
                    "name": "rdf11TurtleTests()[300]",
                    "displayName": "turtlesubm06 - non-empty [] as subject and object [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-06.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-06.nt"
                },
                {
                    "name": "rdf11TurtleTests()[301]",
                    "displayName": "turtlesubm07 - 'a' as predicate [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-07.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-07.nt"
                },
                {
                    "name": "rdf11TurtleTests()[302]",
                    "displayName": "turtlesubm04 - ; operator [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-04.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-04.nt"
                },
                {
                    "name": "rdf11TurtleTests()[303]",
                    "displayName": "turtlesubm05 - empty [] as subject and object [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-05.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-05.nt"
                },
                {
                    "name": "rdf11TurtleTests()[304]",
                    "displayName": "turtlesubm13 - tests for rdf:_<numbers> and other qnames starting with _ [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-13.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-13.nt"
                },
                {
                    "name": "rdf11TurtleTests()[305]",
                    "displayName": "turtlesubm14 - bare : allowed [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-14.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-14.nt"
                },
                {
                    "name": "rdf11TurtleTests()[306]",
                    "displayName": "turtlesubm11 - decimal integer canonicalization [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-11.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-11.nt"
                },
                {
                    "name": "rdf11TurtleTests()[307]",
                    "displayName": "turtlesubm12 - - and _ in names and qnames [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-12.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-12.nt"
                },
                {
                    "name": "rdf11TurtleTests()[308]",
                    "displayName": "turtlesubm10 - integer datatyped literal [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-10.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/turtle-subm-10.nt"
                },
                {
                    "name": "rdf11TurtleTests()[309]",
                    "displayName": "literal_long2_with_2_squotes - LITERAL_LONG2 with 2 squotes \"\"\"a\"\"b\"\"\" [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG2_with_2_squotes.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/LITERAL_LONG2_with_2_squotes.nt"
                },
                {
                    "name": "rdf11TurtleTests()[310]",
                    "displayName": "labeled_blank_node_subject - labeled blank node subject [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_subject.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/labeled_blank_node_subject.nt"
                },
                {
                    "name": "rdf11TurtleTests()[311]",
                    "displayName": "reserved_escaped_localname - reserved-escaped local name [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/reserved_escaped_localName.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/reserved_escaped_localName.nt"
                },
                {
                    "name": "rdf11TurtleTests()[312]",
                    "displayName": "prefixed_iri_object - prefixed IRI object [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 1,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/prefixed_IRI_object.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                },
                {
                    "name": "rdf11TurtleTests()[313]",
                    "displayName": "iri_with_four_digit_numeric_escape - IRI with four digit numeric escape (\\u) [Turtle Turtle positive evaluation test]",
                    "status": "PASSED",
                    "durationMs": 0,
                    "actionUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_with_four_digit_numeric_escape.ttl",
                    "resultUri": "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/IRI_spo.nt"
                }
            ]
        }
    ]
};
