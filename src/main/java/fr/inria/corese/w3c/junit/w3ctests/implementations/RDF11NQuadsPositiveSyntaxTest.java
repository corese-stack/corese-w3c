package fr.inria.corese.w3c.junit.w3ctests.implementations;

import java.net.URI;

public class RDF11NQuadsPositiveSyntaxTest extends AbstractRDFPositiveLoadSyntaxTest {

    public RDF11NQuadsPositiveSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        super(testUri, name, comment, actionUri, "nquads");
    }
}
