package fr.inria.corese.w3c.rdf11rdfa.xhtml;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF 1.1 RDFa+SVG tests.
 */
public class Rdf11RDFaXHTMLDynamicTest extends BaseRdf11DynamicTest {

    private static final String MANIFEST_URL =
            "https://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/manifest.ttl";

    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "RDFa+XHTML";
    }

    @TestFactory
    Stream<DynamicTest> rdf11RDFaXHTMLTests() {
        return createDynamicTests();
    }
}