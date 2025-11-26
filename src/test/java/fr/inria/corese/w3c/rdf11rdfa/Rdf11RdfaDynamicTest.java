package fr.inria.corese.w3c.rdf11rdfa;

import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

public class Rdf11RdfaDynamicTest extends BaseRdf11DynamicTest {

    private static final String MANIFEST_URL =
            "https://www.w3.org/2006/07/SWD/RDFa/testsuite/xhtml1-testcases-20080731/rdfa-xhtml1-test-manifest.rdf";

    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return RDFFormat.RDFa.getName();
    }

    @TestFactory
    Stream<DynamicTest> rdf11RdfaTests() {
        return createDynamicTests();
    }
}
