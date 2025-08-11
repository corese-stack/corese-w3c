package fr.inria.corese.w3c.junit.w3ctests.implementations;

import java.net.URI;

/**
 * Represents a W3C RDF 1.1 Turtle Evaluation Test.
 * This test evaluates the conversion of a Turtle file and compares its canonicalized
 * output against a canonicalized N-Triples result file. It extends {@link AbstractRDFEvalTest},
 * specifically setting the action format to "turtle" and the result format for canonicalization to "ntriples".
 */
public class RDF11TurtleEvalTest extends AbstractRDFEvalTest {

    /**
     * Constructs a new RDF11TurtleEvalTest.
     *
     * @param testUri The URI of the test, used to extract a sanitized test name.
     * @param name The name of the test.
     * @param comment A descriptive comment for the test.
     * @param actionUri The URI of the action RDF file in Turtle format.
     * @param resultUri The URI of the expected result RDF file, which will be canonicalized as N-Triples.
     */
    public RDF11TurtleEvalTest(String testUri, String name, String comment, URI actionUri, URI resultUri) {
        super(testUri, name, comment, actionUri, resultUri, "turtle", "ntriples");
    }

}
