package fr.inria.corese.w3c.junit.dynamic.utils;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

class CsvTsvResultParserTest {

    @TempDir
    Path temporaryDirectory;

    @Test
    void csvPreservesAnAllUnboundResultRow() throws Exception {
        Path results = temporaryDirectory.resolve("results.csv");
        Files.writeString(results, "value\n\n");

        assertEquals(List.of(Map.of("value", "")), CsvTsvResultParser.parseCsvRaw(results.toString()));
    }

    @Test
    void tsvPreservesAnAllUnboundResultRow() throws Exception {
        Path results = temporaryDirectory.resolve("results.tsv");
        Files.writeString(results, "?value\n\n");

        assertEquals(List.of(Map.of()), CsvTsvResultParser.parseTsvToCanonical(results.toString()));
    }

    @Test
    void tsvRetainsWhitespaceInsideAQuotedLiteral() throws Exception {
        Path results = temporaryDirectory.resolve("results.tsv");
        Files.writeString(results, "?value\n\" text \"\n");

        assertEquals(List.of(Map.of("value", "\" text \"^^<http://www.w3.org/2001/XMLSchema#string>")),
                CsvTsvResultParser.parseTsvToCanonical(results.toString()));
    }
}
