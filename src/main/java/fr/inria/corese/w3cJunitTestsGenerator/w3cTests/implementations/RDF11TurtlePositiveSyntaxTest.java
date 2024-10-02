package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import java.net.URI;

public class RDF11TurtlePositiveSyntaxTest extends AbstractRDFPositiveLoadSyntaxTest {

    public RDF11TurtlePositiveSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        super(testUri, name, comment, actionUri, "turtle");
    }
}
