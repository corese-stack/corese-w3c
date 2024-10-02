package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.factory;

import fr.inria.corese.core.kgram.core.Mappings;
import fr.inria.corese.core.print.rdfc10.HashingUtility.HashAlgorithm;
import fr.inria.corese.core.query.QueryProcess;
import fr.inria.corese.core.sparql.exceptions.EngineException;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.IW3cTest;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.util.Map;
import java.util.Optional;

/**
 * Factory for creating W3C tests.
 */
public class W3cTestFactory {

    private static final Logger logger = LoggerFactory.getLogger(W3cTestFactory.class);

    /**
     * Map of test type URIs to test types.
     */
    private static final Map<String, TestType> typeMap = Map.ofEntries(
            Map.entry("https://w3c.github.io/rdf-canon/tests/vocab#RDFC10EvalTest", TestType.RDFC10EvalTest),
            Map.entry("https://w3c.github.io/rdf-canon/tests/vocab#RDFC10MapTest", TestType.RDFC10MapTest),
            Map.entry("https://w3c.github.io/rdf-canon/tests/vocab#RDFC10NegativeEvalTest", TestType.RDFC10NegativeEvalTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestNQuadsPositiveSyntax", TestType.RDF11NQuadsPositiveSyntaxTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestNQuadsNegativeSyntax", TestType.RDF11NQuadsNegativeSyntaxTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestNTriplesNegativeSyntax", TestType.RDF11NTriplesNegativeSyntaxTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestNTriplesPositiveSyntax", TestType.RDF11NTriplesPositiveSyntaxTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestTrigNegativeSyntax", TestType.RDF11TrigNegativeSyntaxTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestTrigPositiveSyntax", TestType.RDF11TrigPositiveSyntaxTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestTurtleNegativeSyntax", TestType.RDF11TurtleNegativeSyntaxTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestTurtlePositiveSyntax", TestType.RDF11TurtlePositiveSyntaxTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestXMLNegativeSyntax", TestType.RDF11XMLNegativeSyntaxTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestXMLEval", TestType.RDF11XMLEvalTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestTrigEval", TestType.RDF11TrigEvalTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestTrigNegativeEval", TestType.RDF11TrigNegativeEvalTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestTurtleEval", TestType.RDF11TurtleEvalTest),
            Map.entry("http://www.w3.org/ns/rdftest#TestTurtleNegativeEval", TestType.RDF11TurtleNegativeEvalTest));

    /**
     * Enumeration of test types.
     */
    public enum TestType {
        RDFC10EvalTest,
        RDFC10MapTest,
        RDFC10NegativeEvalTest,
        RDF11NQuadsPositiveSyntaxTest,
        RDF11NQuadsNegativeSyntaxTest,
        RDF11NTriplesNegativeSyntaxTest,
        RDF11NTriplesPositiveSyntaxTest,
        RDF11TrigNegativeSyntaxTest,
        RDF11TrigPositiveSyntaxTest,
        RDF11TurtleNegativeSyntaxTest,
        RDF11TurtlePositiveSyntaxTest,
        RDF11TrigEvalTest,
        RDF11TrigNegativeEvalTest,
        RDF11TurtleEvalTest,
        RDF11TurtleNegativeEvalTest,
        RDF11XMLNegativeSyntaxTest,
        RDF11XMLEvalTest
    }

    /**
     * Creates a W3C test from the specified test name, type URI, and query process.
     * 
     * @param test         The name of the test.
     * @param typeUri      The URI of the test type.
     * @param queryProcess The query process.
     * @param manifestUri  Manifest URI used to resolve the relative address of action and result files
     * @return The W3C test.
     * @throws TestCreationException If an error occurs while creating the test.
     */
    public static IW3cTest createW3cTest(String test, String typeUri, QueryProcess queryProcess, URI manifestUri)
            throws TestCreationException {
        String query = buildTestDetailQuery(test);
        Mappings mappings = executeQuery(queryProcess, query)
                .orElseThrow(() -> new TestCreationException("Failed to retrieve test details for: " + test));

        TestType type = typeMap.get(typeUri);
        if (type == null) {
            throw new TestCreationException("Unsupported test type URI: " + typeUri);
        }

        String name = mappings.getValue("?name").getLabel();
        String comment = mappings.getValue("?comment") != null ? mappings.getValue("?comment").getLabel() : "";

        HashAlgorithm hashAlgorithm = null;

        if (mappings.getValue("?hashAlgorithm") != null) {
            switch (mappings.getValue("?hashAlgorithm").getLabel()) {
                case "SHA256":
                    hashAlgorithm = HashAlgorithm.SHA_256;
                    break;
                case "SHA384":
                    hashAlgorithm = HashAlgorithm.SHA_384;
                    break;
                default:
                    throw new TestCreationException(
                            "Unsupported hash algorithm: " + mappings.getValue("?hashAlgorithm").getLabel());
            }
        }

        logger.info(mappings.getValue("?action").getLabel());
        logger.info(manifestUri.toString());
        switch (type) {
            case RDFC10EvalTest:
                return new RDFC10EvalTest(
                        test,
                        name,
                        comment,
                        URI.create(mappings.getValue("?action").getLabel()),
                        URI.create(mappings.getValue("?result").getLabel()),
                        hashAlgorithm);
            case RDFC10MapTest:
                return new RDFC10MapTest(
                        test,
                        name,
                        comment,
                        URI.create(mappings.getValue("?action").getLabel()),
                        URI.create(mappings.getValue("?result").getLabel()),
                        hashAlgorithm);
            case RDFC10NegativeEvalTest:
                return new RDFC10NegativeEvalTest(
                        test,
                        name,
                        comment,
                        URI.create(mappings.getValue("?action").getLabel()));
            case RDF11NQuadsPositiveSyntaxTest:
                URI actionPathRDF11NQuadsPositiveSyntaxTest = URI.create(mappings.getValue("?action").getLabel());
                return new RDF11NQuadsPositiveSyntaxTest(
                    test,
                    name,
                    comment,
                    actionPathRDF11NQuadsPositiveSyntaxTest);
            case RDF11NQuadsNegativeSyntaxTest:
                URI actionPathRDF11NQuadsNegativeSyntaxTest = URI.create(mappings.getValue("?action").getLabel());
                return new RDF11NQuadsNegativeSyntaxTest(
                        test,
                        name,
                        comment,
                        actionPathRDF11NQuadsNegativeSyntaxTest);
            case RDF11NTriplesNegativeSyntaxTest:
                URI actionPathRDF11NTriplesNegativeSyntaxTest = URI.create(mappings.getValue("?action").getLabel());
                return new RDF11NTriplesNegativeSyntaxTest(
                        test,
                        name,
                        comment,
                        actionPathRDF11NTriplesNegativeSyntaxTest);
            case RDF11NTriplesPositiveSyntaxTest:
                URI actionPathRDF11NTriplesPositiveSyntaxTest = URI.create(mappings.getValue("?action").getLabel());
                return new RDF11NTriplesPositiveSyntaxTest(
                        test,
                        name,
                        comment,
                        actionPathRDF11NTriplesPositiveSyntaxTest);
            case RDF11XMLNegativeSyntaxTest:
                URI actionPathRDF11XMLNegativeSyntaxTest = URI.create(mappings.getValue("?action").getLabel());
                return new RDF11XMLNegativeSyntaxTest(
                        test,
                        name,
                        comment,
                        actionPathRDF11XMLNegativeSyntaxTest);
            case RDF11XMLEvalTest:
                URI actionPathRDF11XMLEvalTest = URI.create(mappings.getValue("?action").getLabel());
                URI resultPathRDF11XMLEvalTest = URI.create(mappings.getValue("?result").getLabel());
                return new RDF11XMLEvalTest(
                        test,
                        name,
                        comment,
                        actionPathRDF11XMLEvalTest,
                        resultPathRDF11XMLEvalTest);
            case RDF11TrigNegativeEvalTest:
            case RDF11TrigNegativeSyntaxTest:
                URI actionPathRDF11TrigNegativeSyntaxTest = URI.create(mappings.getValue("?action").getLabel());
                return new RDF11TrigNegativeSyntaxTest(
                        test,
                        name,
                        comment,
                        actionPathRDF11TrigNegativeSyntaxTest);
            case RDF11TrigPositiveSyntaxTest:
                URI actionPathRDF11TrigPositiveSyntaxTest = URI.create(mappings.getValue("?action").getLabel());
                return new RDF11TrigPositiveSyntaxTest(
                        test,
                        name,
                        comment,
                        actionPathRDF11TrigPositiveSyntaxTest);
            case RDF11TrigEvalTest:
                URI actionPathRDF11TrigEvalTest = URI.create(mappings.getValue("?action").getLabel());
                URI resultPathRDF11TrigEvalTest = URI.create(mappings.getValue("?result").getLabel());
                return new RDF11TrigEvalTest(
                        test,
                        name,
                        comment,
                        actionPathRDF11TrigEvalTest,
                        resultPathRDF11TrigEvalTest);
            case RDF11TurtleNegativeEvalTest:
            case RDF11TurtleNegativeSyntaxTest: // There are no functional differences between syntax and eval tests
                URI actionPathRDF11NTurtleNegativeSyntaxTest = URI.create(mappings.getValue("?action").getLabel());
                return new RDF11TurtleNegativeSyntaxTest(
                        test,
                        name,
                        comment,
                        actionPathRDF11NTurtleNegativeSyntaxTest);
            case RDF11TurtlePositiveSyntaxTest:
                URI actionPathRDF11NTurtlePositiveSyntaxTest = URI.create(mappings.getValue("?action").getLabel());
                return new RDF11TurtlePositiveSyntaxTest(
                        test,
                        name,
                        comment,
                        actionPathRDF11NTurtlePositiveSyntaxTest);
            case RDF11TurtleEvalTest:
                URI actionPathRDF11TurtleEvalTest = URI.create(mappings.getValue("?action").getLabel());
                URI resultPathRDF11TurtleEvalTest = URI.create(mappings.getValue("?result").getLabel());
                return new RDF11TurtleEvalTest(
                        test,
                        name,
                        comment,
                        actionPathRDF11TurtleEvalTest,
                        resultPathRDF11TurtleEvalTest);
            default:
                throw new TestCreationException("Unsupported test type: " + type);
        }
    }

    /**
     * Builds a query to retrieve the test details from the manifest file.
     * 
     * @return The query to retrieve the test details.
     */
    private static String buildTestDetailQuery(String test) {
        return "PREFIX mf: <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#>\n"
                + "PREFIX rdfc: <https://w3c.github.io/rdf-canon/tests/vocab#>\n"
                + "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n"
                + "SELECT ?name ?comment ?action ?result WHERE {"
                + " <" + test + "> mf:name ?name ;"
                + " mf:action ?action ."
                + " optional { <" + test + "> mf:result ?result } ."
                + " optional { <" + test + "> rdfs:comment ?comment } ."
                + " optional { <" + test + "> rdfc:hashAlgorithm ?hashAlgorithm } ."
                + "}";
    }

    /**
     * Executes the specified query using the specified query process.
     * 
     * @param queryProcess The query process.
     * @param query        The query to execute.
     * @return The mappings resulting from the query execution, or an empty optional
     *         if an error occurs.
     */
    private static Optional<Mappings> executeQuery(QueryProcess queryProcess, String query) {
        try {
            return Optional.ofNullable(queryProcess.query(query));
        } catch (EngineException e) {
            logger.error("Error executing query.", e);
            return Optional.empty();
        }
    }

    /**
     * Exception thrown when an error occurs while creating a test.
     */
    public static class TestCreationException extends Exception {
        public TestCreationException(String message) {
            super(message);
        }
    }
}
