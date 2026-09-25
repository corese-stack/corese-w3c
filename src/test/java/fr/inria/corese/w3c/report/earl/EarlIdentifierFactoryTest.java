package fr.inria.corese.w3c.report.earl;

import fr.inria.corese.w3c.report.ReportTestFixtures;
import fr.inria.corese.w3c.report.model.ReportRunMetadata;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.time.Instant;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class EarlIdentifierFactoryTest {
    private static final URI OFFICIAL_TEST = URI.create(
            "https://w3c.github.io/rdf-canon/tests/manifest#test001c");

    @Test
    void refusesShortNonHexAndUnknownProvenance() {
        String invalidHex = "z".repeat(40);
        String shortHex = "f".repeat(39);
        assertThrows(IllegalArgumentException.class, () -> metadata("abc123", ReportTestFixtures.CORE_SHA, "4.6.4"));
        assertThrows(IllegalArgumentException.class, () -> metadata(invalidHex, ReportTestFixtures.CORE_SHA, "4.6.4"));
        assertThrows(IllegalArgumentException.class, () -> metadata(ReportTestFixtures.HARNESS_SHA, shortHex, "4.6.4"));
        assertThrows(IllegalArgumentException.class, () -> metadata(
                ReportTestFixtures.HARNESS_SHA, ReportTestFixtures.CORE_SHA, "unknown"));
    }

    @Test
    void keyIsFullLowercaseSha256AndUsesSuiteAndOfficialUriOnly() {
        String key = EarlIdentifierFactory.testKey("rdf-canonical", OFFICIAL_TEST);
        assertTrue(key.matches("[0-9a-f]{64}"));
        assertEquals(key, EarlIdentifierFactory.testKey("rdf-canonical", OFFICIAL_TEST));
        assertNotEquals(key, EarlIdentifierFactory.testKey("another-suite", OFFICIAL_TEST));
        assertNotEquals(key, EarlIdentifierFactory.testKey("rdf-canonical",
                URI.create("https://w3c.github.io/rdf-canon/tests/manifest#test002c")));
    }

    @Test
    void differentRunsProduceDifferentReportAssertionAndResultIris() {
        URI firstBase = URI.create("urn:uuid:123e4567-e89b-12d3-a456-426614174000#");
        URI secondBase = URI.create("urn:uuid:123e4567-e89b-12d3-a456-426614174001#");
        assertNotEquals(
                EarlIdentifierFactory.assertionIri(firstBase, "rdf-canonical", OFFICIAL_TEST),
                EarlIdentifierFactory.assertionIri(secondBase, "rdf-canonical", OFFICIAL_TEST));
        assertNotEquals(
                EarlIdentifierFactory.resultIri(firstBase, "rdf-canonical", OFFICIAL_TEST),
                EarlIdentifierFactory.resultIri(secondBase, "rdf-canonical", OFFICIAL_TEST));
    }

    @Test
    void humanTitlesAndPunctuationCannotAffectIdentifiers() {
        String before = EarlIdentifierFactory.testKey("turtle", OFFICIAL_TEST);
        String titleWithUnicodeAndPunctuation = "Été / # ? % : spaces";
        assertEquals(before, EarlIdentifierFactory.testKey("turtle", OFFICIAL_TEST),
                titleWithUnicodeAndPunctuation);
    }

    private static ReportRunMetadata metadata(String harnessSha, String coreSha, String coreVersion) {
        return new ReportRunMetadata(
                URI.create("urn:uuid:123e4567-e89b-12d3-a456-426614174000#"),
                "123e4567-e89b-12d3-a456-426614174000",
                Instant.parse("2026-08-28T15:29:00Z"),
                Instant.parse("2026-08-28T15:31:00Z"),
                "5.0.0-SNAPSHOT", harnessSha, coreVersion, coreSha,
                "21.0.8+9", "Linux", "amd64", null);
    }
}
