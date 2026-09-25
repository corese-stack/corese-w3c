package fr.inria.corese.w3c.junit.dynamic.model;

import org.junit.jupiter.api.Test;

import java.net.URI;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class W3cTestCaseTest {

    private static final URI MANIFEST_URI = URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/manifest.ttl");

    @Test
    void resolvesRelativeDataUriAgainstManifest() {
        W3cTestCase testCase = new W3cTestCase(
                "http://example.org/test1",
                "test1",
                "Test 1",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("data", "data.ttl")
        );

        assertEquals(
                URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/data.ttl"),
                testCase.getDataFileUri()
        );
    }

    @Test
    void rejectsEmptyOrBlankDataUriWithoutResolvingToManifest() {
        W3cTestCase emptyTest = new W3cTestCase(
                "http://example.org/test-empty",
                "test-empty",
                "Empty test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("data", "")
        );
        assertNull(emptyTest.getDataFileUri(), "Empty data URI must not resolve to manifest URI");

        W3cTestCase whitespaceTest = new W3cTestCase(
                "http://example.org/test-blank",
                "test-blank",
                "Blank test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("data", "   ")
        );
        assertNull(whitespaceTest.getDataFileUri(), "Whitespace data URI must not resolve to manifest URI");

        W3cTestCase dotTest = new W3cTestCase(
                "http://example.org/test-dot",
                "test-dot",
                "Dot test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("data", ".")
        );
        assertNull(dotTest.getDataFileUri(), "Self dot URI must not resolve to manifest URI");
    }

    @Test
    void rejectsBlankNodesInDataUri() {
        W3cTestCase bnodeTest = new W3cTestCase(
                "http://example.org/test-bnode",
                "test-bnode",
                "BNode test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("data", "_:b0")
        );
        assertNull(bnodeTest.getDataFileUri(), "Blank node must not be accepted as data file URI");
    }

    @Test
    void extractsDataUriFromNamedGraphData() {
        NamedGraphData ngd = new NamedGraphData(URI.create("http://example.org/g1"), URI.create("data-graph.ttl"));
        W3cTestCase testCase = new W3cTestCase(
                "http://example.org/test-graph",
                "test-graph",
                "Graph test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("graphData", List.of(ngd))
        );

        assertEquals(
                URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/data-graph.ttl"),
                testCase.getDataFileUri()
        );
    }

    @Test
    void resolvesFallbackDataProperties() {
        W3cTestCase updateDataTest = new W3cTestCase(
                "http://example.org/test-update",
                "test-update",
                "Update test",
                "comment",
                TestType.SPARQL11_UPDATE_EVAL,
                MANIFEST_URI,
                Map.of("updateData", "initial.ttl")
        );
        assertEquals(
                URI.create("https://w3c.github.io/rdf-tests/sparql/sparql11/cast/initial.ttl"),
                updateDataTest.getDataFileUri()
        );
    }

    @Test
    void handlesNullEmptyAndInvalidGraphDataGracefully() {
        W3cTestCase emptyListTest = new W3cTestCase(
                "http://example.org/empty-list",
                "empty-list",
                "Empty list test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("graphData", List.of())
        );
        assertNull(emptyListTest.getDataFileUri(), "Empty graphData list must produce null dataUri");

        W3cTestCase nullElementTest = new W3cTestCase(
                "http://example.org/null-elem",
                "null-elem",
                "Null element test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                java.util.Collections.singletonMap("graphData", java.util.Collections.singletonList(null))
        );
        assertNull(nullElementTest.getDataFileUri(), "List with null element must produce null dataUri");

        W3cTestCase emptyStringListTest = new W3cTestCase(
                "http://example.org/empty-str-list",
                "empty-str-list",
                "Empty string list test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("graphData", List.of(""))
        );
        assertNull(emptyStringListTest.getDataFileUri(), "List with empty string must produce null dataUri");

        W3cTestCase whitespaceListTest = new W3cTestCase(
                "http://example.org/whitespace-list",
                "whitespace-list",
                "Whitespace list test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("graphData", List.of("   "))
        );
        assertNull(whitespaceListTest.getDataFileUri(), "List with whitespace must produce null dataUri");

        W3cTestCase bnodeListTest = new W3cTestCase(
                "http://example.org/bnode-list",
                "bnode-list",
                "Bnode list test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("graphData", List.of("_:b0"))
        );
        assertNull(bnodeListTest.getDataFileUri(), "List with bnode must produce null dataUri");

        W3cTestCase dotListTest = new W3cTestCase(
                "http://example.org/dot-list",
                "dot-list",
                "Dot list test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("graphData", List.of("."))
        );
        assertNull(dotListTest.getDataFileUri(), "List with '.' must produce null dataUri");

        NamedGraphData invalidNgd = new NamedGraphData(URI.create("http://example.org/g1"), URI.create(""));
        W3cTestCase invalidNgdTest = new W3cTestCase(
                "http://example.org/invalid-ngd",
                "invalid-ngd",
                "Invalid NGD test",
                "comment",
                TestType.SPARQL11_QUERY_EVAL,
                MANIFEST_URI,
                Map.of("graphData", List.of(invalidNgd))
        );
        assertNull(invalidNgdTest.getDataFileUri(), "NamedGraphData with empty file URI must produce null dataUri");
    }
}
