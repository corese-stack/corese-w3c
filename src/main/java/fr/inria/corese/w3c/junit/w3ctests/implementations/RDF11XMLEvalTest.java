package fr.inria.corese.w3c.junit.w3ctests.implementations;

import java.net.URI;

/**
 * Represents a W3C RDF 1.1 XML Evaluation Test.
 * This test evaluates the conversion of an RDF/XML file and compares its canonicalized
 * output against a canonicalized N-Triples result file. It extends {@link AbstractRDFEvalTest},
 * specifically setting the action format to "rdfxml" and the result format for canonicalization to "ntriples".
 */
public class RDF11XMLEvalTest extends AbstractRDFEvalTest {

    /**
     * Constructs a new RDF11XMLEvalTest.
     *
     * @param testUri The URI of the test, used to extract a sanitized test name.
     * @param name The name of the test.
     * @param comment A descriptive comment for the test.
     * @param actionUri The URI of the action RDF file in RDF/XML format.
     * @param resultUri The URI of the expected result RDF file, which will be canonicalized as N-Triples.
     */
    public RDF11XMLEvalTest(String testUri, String name, String comment, URI actionUri, URI resultUri) {
        super(testUri, name, comment, actionUri, resultUri, "rdfxml", "ntriples");
    }

}
