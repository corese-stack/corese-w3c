package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import java.net.URI;

public class RDF11NQuadsNegativeSyntaxTest extends AbstractRDFNegativeLoadSyntaxTest {

    public RDF11NQuadsNegativeSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        super(testUri, name, comment, actionUri, "nquads");
    }
}