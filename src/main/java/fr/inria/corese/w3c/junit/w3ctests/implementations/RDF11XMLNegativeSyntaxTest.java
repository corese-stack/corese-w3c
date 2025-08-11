package fr.inria.corese.w3c.junit.w3ctests.implementations;

import java.net.URI;

/**
 * Represents a W3C RDF 1.1 XML Negative Syntax Test.
 * This test verifies that a given RDF/XML file, which is expected to be syntactically incorrect,
 * fails to load or parse. It extends {@link AbstractRDFNegativeLoadSyntaxTest},
 * specifically setting the expected format to "rdfxml".
 */
public class RDF11XMLNegativeSyntaxTest extends AbstractRDFNegativeLoadSyntaxTest {

    /**
     * Constructs a new RDF11XMLNegativeSyntaxTest.
     *
     * @param testUri The URI of the test, used to extract a sanitized test name.
     * @param name The name of the test.
     * @param comment A descriptive comment for the test.
     * @param actionUri The URI of the action RDF file which is expected to be syntactically incorrect.
     */
    public RDF11XMLNegativeSyntaxTest(String testUri, String name, String comment, URI actionUri) {
        super(testUri, name, comment, actionUri, "rdfxml");
    }
}
