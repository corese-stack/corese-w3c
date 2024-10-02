package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import java.net.URI;

public class RDF11TurtleNegativeSyntaxTest extends AbstractRDFNegativeLoadSyntaxTest {

    public RDF11TurtleNegativeSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        super(testUri, name, comment, actionUri, "turtle");
    }
}
