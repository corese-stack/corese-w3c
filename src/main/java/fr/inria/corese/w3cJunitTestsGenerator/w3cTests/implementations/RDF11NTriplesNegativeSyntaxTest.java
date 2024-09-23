package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations;

import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.IW3cTest;

import java.net.URI;
import java.util.Set;

public class RDF11NTriplesNegativeSyntaxTest implements IW3cTest {

    private String test;
    private String name;
    private String comment;

    private URI actionFile;

    public RDF11NTriplesNegativeSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        this.test = testUri.split("#")[1];
        this.name = name;
        this.comment = comment;
        this.actionFile = actionUri;
    }

    @Override
    public Set<String> getImports() {
        return Set.of("java.io.IOException");
    }

    @Override
    public String generate() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'generate'");
    }
    
}
