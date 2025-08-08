package fr.inria.corese.w3c.junit.w3ctests.implementations;

import java.net.URI;

/**
 * Represents a W3C RDF 1.1 Turtle Positive Syntax Test.
 * This test verifies that a given Turtle file, which is expected to be syntactically correct,
 * loads or parses successfully. It extends {@link AbstractRDFPositiveLoadSyntaxTest},
 * specifically setting the expected format to "turtle".
 */
public class RDF11TurtlePositiveSyntaxTest extends AbstractRDFPositiveLoadSyntaxTest {

    /**
     * Constructs a new RDF11TurtlePositiveSyntaxTest.
     *
     * @param testUri The URI of the test, used to extract a sanitized test name.
     * @param name The name of the test.
     * @param comment A descriptive comment for the test.
     * @param actionUri The URI of the action RDF file which is expected to be syntactically correct.
     */
    public RDF11TurtlePositiveSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        super(testUri, name, comment, actionUri, "turtle");
    }
}
