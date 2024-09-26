package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import java.net.URI;

public class RDF11NTriplesPositiveSyntaxTest extends AbstractRDFPositiveLoadSyntaxTest {

    public RDF11NTriplesPositiveSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        super(testUri, name, comment, actionUri, "ntriples");
    }
}
