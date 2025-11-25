package fr.inria.corese.w3c.rdfcanonical;

import fr.inria.corese.w3c.BaseRdf11DynamicTest;
import fr.inria.corese.w3c.junit.dynamic.executor.TestExecutor;
import fr.inria.corese.w3c.junit.dynamic.executor.impl.RdfCanonicalEvaluationTestExecutor;
import fr.inria.corese.w3c.junit.dynamic.executor.impl.RdfCanonicalMapTestExecutor;
import fr.inria.corese.w3c.junit.dynamic.executor.impl.RdfCanonicalNegativeTestExecutor;
import fr.inria.corese.w3c.junit.dynamic.model.W3cTestCase;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

/**
 * Dynamic test suite for RDF Dataset Canonicalization (RDFC-1.0).
 * This test factory loads the official W3C RDF Canonicalization test manifest
 * and dynamically creates test cases for each test definition. Test cases are
 * routed to the appropriate executor based on their type:
 */
public class RdfCanonicalDynamicTest extends BaseRdf11DynamicTest {

    private static final String MANIFEST_URL = "https://w3c.github.io/rdf-canon/tests/manifest.ttl";

    @Override
    protected String getManifestUrl() {
        return MANIFEST_URL;
    }

    @Override
    protected String getFormatName() {
        return "RDF-Canonical";
    }

    @TestFactory
    Stream<DynamicTest> rdfCanonicalTests() {
        return createDynamicTests();
    }
}