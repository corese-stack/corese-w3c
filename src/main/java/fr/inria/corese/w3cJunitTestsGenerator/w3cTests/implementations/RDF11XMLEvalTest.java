package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import java.net.URI;

public class RDF11XMLEvalTest extends AbstractRDFEvalTest {

    public RDF11XMLEvalTest(String testUri, String name, String comment, URI actionUri, URI resultUri) {
        super(testUri, name, comment, actionUri, resultUri, "rdfxml", "ntriples");
    }

}
