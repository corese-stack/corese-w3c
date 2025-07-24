package fr.inria.corese.w3c.junit.w3ctests.implementations;

import java.net.URI;

public class RDF11TurtleNegativeSyntaxTest extends AbstractRDFNegativeLoadSyntaxTest {

    public RDF11TurtleNegativeSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        super(testUri, name, comment, actionUri, "turtle");
    }
}
