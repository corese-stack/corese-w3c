package fr.inria.corese.w3cJunitTestsGenerator.w3cTests.factory;

import fr.inria.corese.core.kgram.core.Mapping;
import fr.inria.corese.core.kgram.core.Mappings;
import fr.inria.corese.core.print.TripleFormat;
import fr.inria.corese.core.print.rdfc10.HashingUtility.HashAlgorithm;
import fr.inria.corese.core.query.QueryProcess;
import fr.inria.corese.core.sparql.exceptions.EngineException;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.IW3cTest;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestFileManager;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.TestUtils;
import fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.HashSet;
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
            Map.entry("http://www.w3.org/ns/rdftest#TestTurtleNegativeEval", TestType.RDF11TurtleNegativeEvalTest),
            Map.entry("http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#PositiveSyntaxTest", TestType.SPARQL10PositiveSyntaxTest),
            Map.entry("http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#PositiveSyntaxTest11", TestType.SPARQL11PositiveSyntaxTest),
            Map.entry("http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#PositiveUpdateSyntaxTest11", TestType.SPARQL11UpdatePositiveSyntaxTest),
            Map.entry("http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#NegativeSyntaxTest", TestType.SPARQL10NegativeSyntaxTest),
            Map.entry("http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#NegativeSyntaxTest11", TestType.SPARQL11NegativeSyntaxTest),
            Map.entry("http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#NegativeUpdateSyntaxTest11", TestType.SPARQL11UpdateNegativeSyntaxTest),
            Map.entry("http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#QueryEvaluationTest", TestType.SPARQLQueryEvaluationTest),
            Map.entry("http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#CSVResultFormatTest", TestType.SPARQL11CSVResultFormatTest),
            Map.entry("http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#UpdateEvaluationTest", TestType.SPARQLUpdateEvaluationTest),
            Map.entry("http://www.w3.org/ns/shacl-test#Validate", TestType.SHACLValidateTest)
    );

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
        RDF11XMLEvalTest,
        SPARQL10PositiveSyntaxTest,
        SPARQL11PositiveSyntaxTest,
        SPARQL11UpdatePositiveSyntaxTest,
        SPARQL10NegativeSyntaxTest,
        SPARQL11NegativeSyntaxTest,
        SPARQL11UpdateNegativeSyntaxTest,
        SPARQL11CSVResultFormatTest,
        SPARQLQueryEvaluationTest,
        SPARQLUpdateEvaluationTest,
        SHACLValidateTest
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
        logger.info("createW3cTest {} {} {}", test, typeUri, manifestUri.toString());
        String query = buildTestDetailQuery(test);
        Mappings mappings = executeQuery(queryProcess, query)
                .orElseThrow(() -> new TestCreationException("Failed to retrieve test details for: " + test));

        if(mappings.size() == 0) {
            logger.info(query);
            String debugQuery = "CONSTRUCT WHERE { ?s ?p ?o }";
            try {
                TripleFormat.create(queryProcess.query(debugQuery)).write("src/main/resources/debug.ttl");

            } catch (EngineException | IOException e) {
                logger.error("Error during debug dump", e);
            }
            throw new TestCreationException("No test description found in "+  manifestUri.toString());
        }

        TestType type = typeMap.get(typeUri);
        if (type == null) {
            throw new TestCreationException("Unsupported test type URI: " + typeUri);
        }

        String name = mappings.getValue("?name") != null ? mappings.getValue("?name").getLabel() : TestUtils.extractLongTestName(test);
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
            case SPARQL10NegativeSyntaxTest:
            case SPARQL11NegativeSyntaxTest:
            case SPARQL11UpdateNegativeSyntaxTest:
                URI actionPathSPARQLNegativeSyntaxTest = URI.create(mappings.getValue("?action").getLabel());
                return new SPARQLNegativeSyntaxTest(
                        test,
                        name,
                        comment,
                        actionPathSPARQLNegativeSyntaxTest);
            case SPARQL10PositiveSyntaxTest:
            case SPARQL11PositiveSyntaxTest:
            case SPARQL11UpdatePositiveSyntaxTest:
                URI actionPathSPARQLPositiveSyntaxTest = URI.create(mappings.getValue("?action").getLabel());
                return new SPARQLPositiveSyntaxTest(
                        test,
                        name,
                        comment,
                        actionPathSPARQLPositiveSyntaxTest);
            case SPARQL11CSVResultFormatTest:
            case SPARQLQueryEvaluationTest:
                URI resultPathSPARQLQueryEvaluationTest = URI.create(mappings.getValue("?result").getLabel());
                URI queryPathSPARQLQueryEvaluationTest = URI.create(mappings.getValue("?query").getLabel());
                if(mappings.getValue("?data") != null) {
                    URI dataPathSPARQLQueryEvaluationTest = URI.create(mappings.getValue("?data").getLabel());
                    return new SPARQLQueryEvaluationTest(
                            test,
                            name,
                            comment,
                            dataPathSPARQLQueryEvaluationTest,
                            resultPathSPARQLQueryEvaluationTest,
                            queryPathSPARQLQueryEvaluationTest);
                } else {
                    return new SPARQLQueryEvaluationTest(
                            test,
                            name,
                            comment,
                            resultPathSPARQLQueryEvaluationTest,
                            queryPathSPARQLQueryEvaluationTest);
                }
            case SHACLValidateTest:
                URI dataGraphUri = URI.create(mappings.getValue("?dataGraph").getLabel());
                URI shapeGraphUri = URI.create(mappings.getValue("?shapesGraph").getLabel());
                if(mappings.getValue("?conformity") != null) {
                    String referenceConformity = mappings.getValue("?conformity").getLabel();
                    return new SHACLValidateTest(
                            manifestUri,
                            test,
                            name,
                            comment,
                            dataGraphUri,
                            shapeGraphUri,
                            referenceConformity
                    );
                } else {
                    return new SHACLValidateTest(
                            manifestUri,
                            test,
                            name,
                            comment,
                            dataGraphUri,
                            shapeGraphUri
                    );
                }
            case SPARQLUpdateEvaluationTest:
                String updateQueryTestDetailString = buildUpdateTestDetailQuery(test);
                Mappings updateQueryTestMappings = executeQuery(queryProcess, updateQueryTestDetailString).orElseThrow();

                HashSet<String> actionDataFileList = new HashSet<>();
                HashSet<String> requestFileList = new HashSet<>();
                HashMap<String, String> actionDataGraphMap = new HashMap<>();
                HashSet<String> resultDataFileList = new HashSet<>();
                HashMap<String, String> resultDataGraphMap = new HashMap<>();
                for(Mapping mapping : updateQueryTestMappings.getMappingList()) {
                    String actionDataFile = mapping.getValue("?actionDataFile").getLabel();
                    actionDataFileList.add(actionDataFile);
                    String resultDataFile = mapping.getValue("?resultDataFile").getLabel();
                    resultDataFileList.add(resultDataFile);
                    String requestFile = mapping.getValue("?request").getLabel();
                    requestFileList.add(requestFile);

                    if((mapping.getValue("?actionGraphDataFile") != null)
                            && (mapping.getValue("?actionGraphName") != null) ) {
                        String actionGraphName = mapping.getValue("?actionGraphName").getLabel();
                        String actionGraphDataFile = mapping.getValue("?actionGraphDataFile").getLabel();
                        actionDataGraphMap.put(actionGraphName, actionGraphDataFile);
                    }
                    if((mapping.getValue("?resultGraphDataFile") != null) && (mapping.getValue("?resultGraphName") != null)) {
                        String resultGraphDataFile = mapping.getValue("?resultGraphDataFile").getLabel();
                        String resultGraphName = mapping.getValue("?resultGraphName").getLabel();
                        resultDataGraphMap.put(resultGraphName, resultGraphDataFile);
                    }
                }
                if(actionDataGraphMap.size() == 0 && resultDataGraphMap.size() == 0) {
                    return new UpdateEvaluationTest(
                            manifestUri,
                            test,
                            actionDataFileList,
                            resultDataFileList);
                } else {
                    return new UpdateEvaluationTest(
                            manifestUri,
                            test,
                            actionDataFileList,
                            resultDataFileList,
                            actionDataGraphMap,
                            resultDataGraphMap);
                }
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
        Path localTestFilePath = TestFileManager.getLocalFilePath(URI.create(test));
        StringBuilder sb = new StringBuilder();
        sb.append("PREFIX mf: <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#>\n");
        sb.append("PREFIX rdfc: <https://w3c.github.io/rdf-canon/tests/vocab#>\n");
        sb.append("PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n");
        sb.append("PREFIX qt: <http://www.w3.org/2001/sw/DataAccess/tests/test-query#>\n");
        sb.append("PREFIX sht: <http://www.w3.org/ns/shacl-test#>\n");
        sb.append("SELECT DISTINCT ?name ?comment ?action ?result ?query ?data ?dataGraph ?shapesGraph ?conformity ?hashAlgorithm WHERE {\n");
        sb.append("    ?test mf:action ?action .\n");
        sb.append("    OPTIONAL { ?test mf:name ?name . }\n");
        sb.append("    OPTIONAL { ?action qt:query ?query . }\n");
        sb.append("    OPTIONAL { ?action qt:data ?data . }\n");
        sb.append("    OPTIONAL { ?action sht:dataGraph ?dataGraph ; \n");
        sb.append("                       sht:shapesGraph ?shapesGraph . }\n");
        sb.append("    OPTIONAL { ?test mf:result ?result } .\n");
        sb.append("    OPTIONAL { ?test mf:result ?result .");
        sb.append("        ?result sh:conforms ?conformity .");
        sb.append("        FILTER(isBlank(?result))");
        sb.append("    } .\n");
        sb.append("    OPTIONAL { ?test rdfs:comment ?comment } .\n");
        sb.append("    OPTIONAL { ?test rdfc:hashAlgorithm ?hashAlgorithm } .\n");
        sb.append("    VALUES ?test { <").append(test).append("> <").append(localTestFilePath).append("> }\n");
        sb.append("}");
        return sb.toString();
    }

    private static String buildUpdateTestDetailQuery(String test) {
        Path localTestFilePath = TestFileManager.getLocalFilePath(URI.create(test));
        StringBuilder sb = new StringBuilder();
        sb.append("PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n");
        sb.append("PREFIX mf: <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#>\n");
        sb.append("PREFIX ut:    <http://www.w3.org/2009/sparql/tests/test-update#>\n");
        sb.append("SELECT DISTINCT ?request ?actionDataFile ?resultDataFile ?actionGraphDataFile ?actionGraphName ?resultGraphDataFile ?resultGraphName {\n");
        sb.append("    ?test a mf:UpdateEvaluationTest ;\n");
        sb.append("            mf:action ?action ;\n");
        sb.append("            mf:result ?result .\n");
        sb.append("    ?action ut:data ?actionDataFile ;\n");
        sb.append("            ut:request ?request .\n");
        sb.append("    ?result ut:data ?resultDataFile .\n");
        sb.append("    OPTIONAL {\n");
        sb.append("        ?action ut:graphData ?actionGraph .\n");
        sb.append("        ?actionGraph ut:graph ?actionGraphDataFile ;\n");
        sb.append("                rdfs:label ?actionGraphName .\n");
        sb.append("    }\n");
        sb.append("    OPTIONAL {\n");
        sb.append("        ?result ut:graphData ?resultGraph .\n");
        sb.append("        ?resultGraph ut:graph ?resultGraphDataFile ;\n");
        sb.append("                rdfs:label ?resultGraphName .\n");
        sb.append("    }\n");
        sb.append("    VALUES ?test { <").append(test).append("> <").append(localTestFilePath).append("> }\n");
        sb.append("}\n");
        return sb.toString();
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
