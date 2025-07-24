package fr.inria.corese.w3c.junit.w3ctests.implementations;

import java.net.URI;

public class RDF11NTriplesNegativeSyntaxTest extends AbstractRDFNegativeLoadSyntaxTest {

    public RDF11NTriplesNegativeSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        super(testUri, name, comment, actionUri, "ntriples");
    }
}
