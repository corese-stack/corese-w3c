package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import java.net.URI;

public class RDF11NTriplesNegativeSyntaxTest extends AbstractRDFNegativeLoadSyntaxTest {

    public RDF11NTriplesNegativeSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        super(testUri, name, comment, actionUri, "nquads");
    }
}
