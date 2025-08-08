package fr.inria.corese.w3c.junit.w3ctests.implementations;

import java.net.URI;

/**
 * Represents a W3C RDF 1.1 Trig Evaluation Test.
 * This test evaluates the conversion of a Trig file and compares its canonicalized
 * output against a canonicalized N-Quads result file. It extends {@link AbstractRDFEvalTest},
 * specifically setting the action format to "trig" and the result format for canonicalization to "nquads".
 */
public class RDF11TrigEvalTest extends AbstractRDFEvalTest {

    /**
     * Constructs a new RDF11TrigEvalTest.
     *
     * @param testUri The URI of the test, used to extract a sanitized test name.
     * @param name The name of the test.
     * @param comment A descriptive comment for the test.
     * @param actionUri The URI of the action RDF file in Trig format.
     * @param resultUri The URI of the expected result RDF file, which will be canonicalized as N-Quads.
     */
    public RDF11TrigEvalTest(String testUri, String name, String comment, URI actionUri, URI resultUri) {
        super(testUri, name, comment, actionUri, resultUri, "trig", "nquads");
    }

}
