package fr.inria.corese.w3c.junit.dynamic.utils;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

class RsVocabResultParserTest {

    @TempDir
    Path temporaryDirectory;

    @Test
    void parsesTrueBooleanResultInTurtle() throws Exception {
        Path resultFile = temporaryDirectory.resolve("result-true.ttl");
        Files.writeString(resultFile, """
                @prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
                @prefix rs:   <http://www.w3.org/2001/sw/DataAccess/tests/result-set#> .
                @prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

                []  rdf:type    rs:ResultSet ;
                    rs:boolean  "true"^^xsd:boolean .
                """);

        URI resultUri = resultFile.toUri();
        assertTrue(RsVocabResultParser.parseBoolean(resultUri));
    }

    @Test
    void parsesFalseBooleanResultInTurtle() throws Exception {
        Path resultFile = temporaryDirectory.resolve("result-false.ttl");
        Files.writeString(resultFile, """
                @prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
                @prefix rs:   <http://www.w3.org/2001/sw/DataAccess/tests/result-set#> .
                @prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

                []  rdf:type    rs:ResultSet ;
                    rs:boolean  "false"^^xsd:boolean .
                """);

        URI resultUri = resultFile.toUri();
        assertFalse(RsVocabResultParser.parseBoolean(resultUri));
    }
}
