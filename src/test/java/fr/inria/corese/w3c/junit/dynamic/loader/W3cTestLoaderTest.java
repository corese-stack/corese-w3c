package fr.inria.corese.w3c.junit.dynamic.loader;

import fr.inria.corese.w3c.junit.dynamic.model.TestType;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class W3cTestLoaderTest {

    private static final String RDF_TEST_VOCABULARY = "http://www.w3.org/ns/rdftest#";

    @TempDir
    Path directory;

    private static final String PREFIXES = """
            @prefix mf: <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#> .
            @prefix rt: <http://www.w3.org/ns/rdftest#> .
            """;

    @Test
    void mapsStandardNegativeTestTypes() {
        assertEquals(TestType.NTRIPLES_NEGATIVE_SYNTAX,
                map("TestNTriplesNegativeSyntax"));
        assertEquals(TestType.NQUADS_NEGATIVE_SYNTAX,
                map("TestNQuadsNegativeSyntax"));
        assertEquals(TestType.TRIG_NEGATIVE_SYNTAX,
                map("TestTrigNegativeSyntax"));
        assertEquals(TestType.TRIG_NEGATIVE_EVAL,
                map("TestTrigNegativeEval"));
    }

    @Test
    void rejectsUnknownTestTypes() {
        Set<String> unknownType = Set.of(RDF_TEST_VOCABULARY + "UnknownTestType");

        assertThrows(IllegalArgumentException.class,
                () -> W3cTestLoader.mapTestType(unknownType));
    }

    @Test
    void loadsOnlySelectedEntriesIncludingChildManifests() throws IOException {
        Path child = writeManifest("child.ttl", """
                <> a mf:Manifest; mf:entries ( <#selected> ) .
                <#selected> a rt:TestTurtlePositiveSyntax; mf:name "selected" .
                <#unselected> a rt:TestTurtlePositiveSyntax; mf:name "unselected" .
                <#metadata> a <urn:NotATest> .
                """);
        Path root = writeManifest("manifest.ttl", """
                <> a mf:Manifest; mf:entries ( <#root> ); mf:include ( <child.ttl> ) .
                <#root> a rt:TestTurtlePositiveSyntax; mf:name "root" .
                """);

        var tests = W3cTestLoader.loadTestsFromManifest(root.toUri());
        assertEquals(Set.of(root.toUri() + "#root", child.toUri() + "#selected"),
                tests.stream().map(W3cTestCase::getTestUri).collect(Collectors.toSet()));
        var selected = tests.stream().filter(t -> t.getTestUri().endsWith("#selected"))
                .findFirst().orElseThrow();
        assertEquals(child.toUri(), selected.getManifestUri());
    }

    @Test
    void anonymousManifestsAlsoSelectEntries() throws IOException {
        writeManifest("child.ttl", """
                [] a mf:Manifest; mf:entries ( <#selected> ) .
                <#selected> a rt:TestTurtlePositiveSyntax; mf:name "selected" .
                <#unselected> a rt:TestTurtlePositiveSyntax .
                """);
        Path root = writeManifest("manifest.ttl", """
                <> a mf:Manifest; mf:include ( <child.ttl> ) .
                """);
        var tests = W3cTestLoader.loadTestsFromManifest(root.toUri());
        assertEquals(1, tests.size());
        assertEquals(directory.resolve("child.ttl").toUri() + "#selected", tests.getFirst().getTestUri());
    }

    @Test
    void emptyEntriesDoNotFallBackToTypedDefinitions() throws IOException {
        Path manifest = writeManifest("empty.ttl", """
                <> a mf:Manifest; mf:entries () .
                <#unselected> a rt:TestTurtlePositiveSyntax .
                """);
        assertEquals(List.of(), W3cTestLoader.loadTestsFromManifest(manifest.toUri()));
    }

    @Test
    void retainsTypeBasedDiscoveryForSuitesWithoutEntries() throws IOException {
        Path manifest = writeManifest("legacy.ttl", """
                <#test> a <http://www.w3.org/2006/03/test-description#TestCase> .
                """);
        var tests = W3cTestLoader.loadTestsFromManifest(manifest.toUri());
        assertEquals(1, tests.size());
        assertEquals(TestType.ASK_BASED_EVAL, tests.getFirst().getType());
    }

    private Path writeManifest(String name, String body) throws IOException {
        return Files.writeString(directory.resolve(name), PREFIXES + body);
    }

    private static TestType map(String localName) {
        return W3cTestLoader.mapTestType(Set.of(RDF_TEST_VOCABULARY + localName));
    }
}
