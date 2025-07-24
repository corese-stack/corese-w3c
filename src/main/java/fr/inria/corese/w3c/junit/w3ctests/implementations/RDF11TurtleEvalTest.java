package fr.inria.corese.w3c.junit.w3ctests.implementations;

import java.net.URI;

public class RDF11TurtleEvalTest extends AbstractRDFEvalTest {

    public RDF11TurtleEvalTest(String testUri, String name, String comment, URI actionUri, URI resultUri) {
        super(testUri, name, comment, actionUri, resultUri, "turtle", "ntriples");
    }

}
