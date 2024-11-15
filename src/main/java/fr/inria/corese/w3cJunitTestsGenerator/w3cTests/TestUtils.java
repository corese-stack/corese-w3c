package fr.inria.corese.w3cJunitTestsGenerator.w3cTests;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import fr.inria.corese.core.Graph;
import fr.inria.corese.core.GraphStore;
import fr.inria.corese.core.kgram.core.Mapping;
import fr.inria.corese.core.kgram.core.Mappings;
import fr.inria.corese.core.load.Load;
import fr.inria.corese.core.print.CanonicalRdf10Format;
import fr.inria.corese.core.query.QueryProcess;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;

public class TestUtils {

    private static final Logger logger = LoggerFactory.getLogger(TestUtils.class);

    public static final String SAMPLE_DATA_FILE_PATH_STRING = "src/test/resources/meta/sampleData.ttl";
    public static final String BASIC_SPARQL_SELECT_QUERY_PATH_STRING = "src/test/resources/meta/sparqlSelectBasic.rq";

    private TestUtils() {}

    /**
     * Remove seen name structure that are incompatible with the format of a java function name.
     * @param originalTestName
     * @return sanitized test name
     */
    public static String sanitizeTestName(String originalTestName) {
        return originalTestName.trim().toLowerCase(Locale.ROOT).replace("-","").replace(" ", "_").replace("#", "").replace(".", "");
    }

    /**
     * Created because of tests in the same category but from different manifests and with the same name.
     * @param testUri
     * @return a name for tests that is prefixed by parts of its URI path
     */
    public static String extractLongTestName(String testUri) {
        String[] decomposedTestUri = testUri.split("/");
        String[] hashtagSplitUri = testUri.split("#");
        String endName = hashtagSplitUri.length > 1 ? hashtagSplitUri[1] : "";
        StringBuilder namePrefix = new StringBuilder();
        int earliestSubstringIt = 0;
        if(decomposedTestUri.length > 3) {
            earliestSubstringIt = 3;
        } else if(decomposedTestUri.length > 2) {
            earliestSubstringIt = 2;
        }
        for(int endIt = earliestSubstringIt; endIt > 0; endIt--) {
            namePrefix.append(decomposedTestUri[decomposedTestUri.length - endIt]);
        }

        return sanitizeTestName(namePrefix + endName);
    }

    /**
     * Removes some characters that trigger compilation errors in comment of java files
     * @param comment String object of the rdfs:comment property
     * @return safer comment
     */
    public static String sanitizeComment(String comment) {
        return comment
                .replaceAll("\\\\[uU]", "'slash'u")
                .trim()
                .replaceAll("\n", " ");
    }

    /**
     * Compare the content of two text files line by lines. Created to be used to compare two canonicalized files
     * @param filePath1
     * @param filePath2
     * @return true if the files are identical
     * @throws IOException
     */
    public static boolean compareFilesLineByLine(Path filePath1, Path filePath2) throws IOException {
        try (
                BufferedReader reader1 = new BufferedReader(new FileReader(filePath1.toString()));
                BufferedReader reader2 = new BufferedReader(new FileReader(filePath2.toString()))
        ) {
            String line1;
            String line2;

            // Read and compare lines one by one
            while ((line1 = reader1.readLine()) != null & (line2 = reader2.readLine()) != null) {
                if (!line1.equals(line2)) {
                    return false;
                }
            }

            // Check if one file has extra lines
            if (reader1.readLine() != null || reader2.readLine() != null) {
                return false;
            }
        }

        return true; // Files are identical
    }

    /**
     * Compare two files containing SPARQL results in XML format. Created to compare the ".srx" files used in W3C SPARQL tests
     * @param resultFile1
     * @param resultFile2
     * @return true if identical
     * @throws ParserConfigurationException
     * @throws IOException
     * @throws SAXException
     * @throws XPathExpressionException
     */
    public static boolean compareXMLSparqlResultFiles(Path resultFile1, Path resultFile2) throws ParserConfigurationException, IOException, SAXException, XPathExpressionException {
            // Load and parse the two SRX files
            File file1 = resultFile1.toFile();
            File file2 = resultFile2.toFile();

            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc1 = dBuilder.parse(file1);
            Document doc2 = dBuilder.parse(file2);

            doc1.getDocumentElement().normalize();
            doc2.getDocumentElement().normalize();

            // Extract SPARQL query results (assuming results are within <result> tags)
            List<String> results1 = extractXMLResults(doc1);
            List<String> results2 = extractXMLResults(doc2);

            return compareXMLResults(results1, results2);
    }

    public static boolean jsonFilesAreEqual(Path filePath1, Path filePath2) throws IOException {
        ObjectMapper mapper = new ObjectMapper();

        JsonNode jsonFile1 = mapper.readTree(filePath1.toFile());
        JsonNode jsonFile2 = mapper.readTree(filePath2.toFile());

        return jsonFile1.equals(jsonFile2);
    }

    // Method to extract SPARQL query results from the XML Document
    private static List<String> extractXMLResults(Document doc) throws XPathExpressionException {
        XPath xPath = XPathFactory.newInstance().newXPath();
        NodeList resultNodes = (NodeList) xPath.evaluate("//result", doc, XPathConstants.NODESET);
        List<String> results = new ArrayList<>();

        for (int i = 0; i < resultNodes.getLength(); i++) {
            Node resultNode = resultNodes.item(i);
            results.add(xmlNodeToString(resultNode)); // Convert result node to string
        }

        // Sort the results for comparison (optional, depending on whether order matters)
        Collections.sort(results);
        return results;
    }

    // Method to convert a Node (result) to a String for comparison
    private static String xmlNodeToString(Node node) {
        StringBuilder sb = new StringBuilder();
        NodeList childNodes = node.getChildNodes();
        for (int i = 0; i < childNodes.getLength(); i++) {
            sb.append(childNodes.item(i).getTextContent().trim());
        }
        return sb.toString();
    }

    // Method to compare two lists of results
    private static boolean compareXMLResults(List<String> results1, List<String> results2) {
        return results1.equals(results2);
    }

    public static String generateSHACLCheckIfRefAreInResultSPARQLQuery() {
        StringBuilder sb = new StringBuilder();

        sb.append("PREFIX sh: <http://www.w3.org/ns/shacl#> \n");
        sb.append("SELECT DISTINCT * {\n");
        sb.append("    GRAPH <http://corese.inria.fr/reference> {\n");
        sb.append("        ?validationReportReference a sh:ValidationReport ;\n");
        sb.append("            sh:conforms ?conformity ;\n");
        sb.append("            sh:result ?validationResultReference .\n");
        sb.append("        ?validationResultReference a sh:ValidationResult ;\n");
        sb.append("            sh:focusNode ?focusNode ;\n");
        sb.append("            sh:resultSeverity ?severity ;\n");
        sb.append("            sh:sourceConstraintComponent ?constraintComponent .\n");
        sb.append("    }\n");
        sb.append("    FILTER(\n");
        sb.append("        EXISTS {\n");
        sb.append("            GRAPH <http://corese.inria.fr/result> {\n");
        sb.append("                ?validationReportResult a sh:ValidationReport ;\n");
        sb.append("                    sh:conforms ?conformity ;\n");
        sb.append("                    sh:result ?validationResultResult .\n");
        sb.append("                ?validationResultResult a sh:ValidationResult ;\n");
        sb.append("                    sh:focusNode ?focusNode ;\n");
        sb.append("                    sh:resultSeverity ?severity ;\n");
        sb.append("                    sh:sourceConstraintComponent ?constraintComponent .\n");
        sb.append("            }\n");
        sb.append("        }\n");
        sb.append("    )\n");
        sb.append("    GRAPH <http://corese.inria.fr/reference> {\n");
        sb.append("        ?validationResultReference sh:sourceShape ?shape .\n");
        sb.append("    }\n");
        sb.append("    FILTER(IF(IsIRI(?shape), EXISTS { GRAPH <http://corese.inria.fr/result> { ?validationResultResult sh:sourceShape ?shape } }, true ) )\n");
        sb.append("    OPTIONAL {\n");
        sb.append("        GRAPH <http://corese.inria.fr/reference> {\n");
        sb.append("            ?validationResultReference sh:resultPath ?path .\n");
        sb.append("        }\n");
        sb.append("        FILTER( EXISTS { GRAPH <http://corese.inria.fr/result> { ?validationResultResult sh:resultPath ?path } } )\n");
        sb.append("    }\n");
        sb.append("    OPTIONAL {\n");
        sb.append("        GRAPH <http://corese.inria.fr/reference> {\n");
        sb.append("            ?validationResultReference sh:value ?value .\n");
        sb.append("        }\n");
        sb.append("        FILTER( EXISTS { GRAPH <http://corese.inria.fr/result> { ?validationResultResult sh:value ?value } } )\n");
        sb.append("    }\n");
        sb.append("}");

        return sb.toString();
    }

    public static String generateSHACLCheckIfResultsAreInRefSPARQLQuery() {
        StringBuilder sb = new StringBuilder();

        sb.append("PREFIX sh: <http://www.w3.org/ns/shacl#> \n");
        sb.append("SELECT DISTINCT * {\n");
        sb.append("    GRAPH <http://corese.inria.fr/result> {\n");
        sb.append("        ?validationReportResult a sh:ValidationReport ;\n");
        sb.append("            sh:conforms ?conformity ;\n");
        sb.append("            sh:result ?validationResultResult .\n");
        sb.append("        ?validationResultResult a sh:ValidationResult ;\n");
        sb.append("            sh:focusNode ?focusNode ;\n");
        sb.append("            sh:resultSeverity ?severity ;\n");
        sb.append("            sh:sourceConstraintComponent ?constraintComponent .\n");
        sb.append("    }\n");
        sb.append("    FILTER(\n");
        sb.append("        EXISTS {\n");
        sb.append("            GRAPH <http://corese.inria.fr/reference> {\n");
        sb.append("                ?validationReportReference a sh:ValidationReport ;\n");
        sb.append("                    sh:conforms ?conformity ;\n");
        sb.append("                    sh:result ?validationResultReference .\n");
        sb.append("                ?validationResultReference a sh:ValidationResult ;\n");
        sb.append("                    sh:focusNode ?focusNode ;\n");
        sb.append("                    sh:resultSeverity ?severity ;\n");
        sb.append("                    sh:sourceConstraintComponent ?constraintComponent .\n");
        sb.append("            }\n");
        sb.append("        }\n");
        sb.append("    )\n");
        sb.append("    GRAPH <http://corese.inria.fr/result> {\n");
        sb.append("        ?validationResultResult sh:sourceShape ?shape .\n");
        sb.append("    }\n");
        sb.append("    FILTER( IF( IsIRI(?shape), EXISTS { GRAPH <http://corese.inria.fr/reference> { ?validationResultReference sh:sourceShape ?shape . } } , true ) )\n");
        sb.append("    OPTIONAL {\n");
        sb.append("        GRAPH <http://corese.inria.fr/result> {\n");
        sb.append("            ?validationResultResult sh:value ?value .\n");
        sb.append("        }\n");
        sb.append("        FILTER( EXISTS { GRAPH <http://corese.inria.fr/reference> { ?validationResultReference sh:value ?value } } )\n");
        sb.append("    }\n");
        sb.append("    OPTIONAL {\n");
        sb.append("        GRAPH <http://corese.inria.fr/result> {\n");
        sb.append("            ?validationResultResult sh:resultPath ?path .\n");
        sb.append("        }\n");
        sb.append("        FILTER( EXISTS { GRAPH <http://corese.inria.fr/reference> { ?validationResultReference sh:resultPath ?path } } )\n");
        sb.append("    }\n");
        sb.append("}");

        return sb.toString();
    }

    public static String generateSHACLCheckIfResultsAreNotInRefSPARQLQuery() {
        StringBuilder sb = new StringBuilder();

        sb.append("PREFIX sh: <http://www.w3.org/ns/shacl#> \n");
        sb.append("SELECT DISTINCT * {\n");
        sb.append("    GRAPH <http://corese.inria.fr/result> {\n");
        sb.append("        ?validationReportResult a sh:ValidationReport ;\n");
        sb.append("            sh:conforms ?conformity ;\n");
        sb.append("            sh:result ?validationResultResult .\n");
        sb.append("        ?validationResultResult a sh:ValidationResult ;\n");
        sb.append("            sh:focusNode ?focusNode ;\n");
        sb.append("            sh:resultSeverity ?severity ;\n");
        sb.append("            sh:sourceConstraintComponent ?constraintComponent .\n");
        sb.append("    }\n");
        sb.append("    FILTER(\n");
        sb.append("        NOT EXISTS {");
        sb.append("            GRAPH <http://corese.inria.fr/reference> {\n");
        sb.append("                ?validationReportReference a sh:ValidationReport ;\n");
        sb.append("                    sh:conforms ?conformity ;\n");
        sb.append("                    sh:result ?validationResultReference .\n");
        sb.append("                ?validationResultReference a sh:ValidationResult ;\n");
        sb.append("                    sh:focusNode ?focusNode ;\n");
        sb.append("                    sh:resultSeverity ?severity ;\n");
        sb.append("                    sh:sourceConstraintComponent ?constraintComponent .\n");
        sb.append("            }\n");
        sb.append("        }\n");
        sb.append("    )\n");
        sb.append("    GRAPH <http://corese.inria.fr/result> {\n");
        sb.append("        ?validationResultResult sh:sourceShape ?shape .\n");
        sb.append("    }\n");
        sb.append("    FILTER( IF( IsIRI(?shape), NOT EXISTS { GRAPH <http://corese.inria.fr/reference> { ?validationResultReference sh:sourceShape ?shape . } }, true ) )\n");
        sb.append("    OPTIONAL {\n");
        sb.append("        GRAPH <http://corese.inria.fr/result> {\n");
        sb.append("            ?validationResultResult sh:resultPath ?path .\n");
        sb.append("        }\n");
        sb.append("        FILTER(NOT EXISTS { GRAPH <http://corese.inria.fr/reference> { ?validationResultReference sh:resultPath ?path } } )\n");
        sb.append("    }\n");
        sb.append("    OPTIONAL {\n");
        sb.append("        GRAPH <http://corese.inria.fr/result> {\n");
        sb.append("            ?validationResultResult sh:value ?value .\n");
        sb.append("        }\n");
        sb.append("        FILTER( NOT EXISTS { GRAPH <http://corese.inria.fr/reference> { ?validationResultReference sh:value ?value } } )\n");
        sb.append("    }\n");
        sb.append("}");

        return sb.toString();
    }

    public static String generateSHACLCheckIfRefAreNotInResultSPARQLQuery() {
        StringBuilder sb = new StringBuilder();

        sb.append("PREFIX sh: <http://www.w3.org/ns/shacl#> \n");
        sb.append("SELECT DISTINCT * {\n");
        sb.append("    GRAPH <http://corese.inria.fr/reference> {\n");
        sb.append("        ?validationReportReference a sh:ValidationReport ;\n");
        sb.append("            sh:conforms ?conformity ;\n");
        sb.append("            sh:result ?validationResultReference .\n");
        sb.append("        ?validationResultReference a sh:ValidationResult ;\n");
        sb.append("            sh:focusNode ?focusNode ;\n");
        sb.append("            sh:resultSeverity ?severity ;\n");
        sb.append("            sh:sourceConstraintComponent ?constraintComponent ;\n");
        sb.append("    }\n");
        sb.append("    FILTER(\n");
        sb.append("        NOT EXISTS {");
        sb.append("            GRAPH <http://corese.inria.fr/result> {\n");
        sb.append("                ?validationReportResult a sh:ValidationReport ;\n");
        sb.append("                    sh:conforms ?conformity ;\n");
        sb.append("                    sh:result ?validationResult .\n");
        sb.append("                ?validationResultResult a sh:ValidationResult ;\n");
        sb.append("                    sh:focusNode ?focusNode ;\n");
        sb.append("                    sh:resultSeverity ?severity ;\n");
        sb.append("                    sh:sourceConstraintComponent ?constraintComponent .\n");
        sb.append("            }\n");
        sb.append("        }\n");
        sb.append("    )\n");
        sb.append("    GRAPH <http://corese.inria.fr/reference> {\n");
        sb.append("        ?validationResultReference sh:sourceShape ?shape .\n");
        sb.append("    }\n");
        sb.append("    FILTER(IF(IsIRI(?shape), NOT EXISTS { GRAPH <http://corese.inria.fr/result> { ?validationResultResult sh:sourceShape ?shape } }, true ) )\n");
        sb.append("    OPTIONAL {\n");
        sb.append("        GRAPH <http://corese.inria.fr/reference> {\n");
        sb.append("            ?validationResultReference sh:value ?value .\n");
        sb.append("        }\n");
        sb.append("        FILTER( NOT EXISTS { GRAPH <http://corese.inria.fr/result> { ?validationResultResult sh:value ?value } } )\n");
        sb.append("    }\n");
        sb.append("    OPTIONAL {\n");
        sb.append("        GRAPH <http://corese.inria.fr/reference> {\n");
        sb.append("            ?validationResultReference sh:resultPath ?path .\n");
        sb.append("        }\n");
        sb.append("        FILTER( NOT EXISTS { GRAPH <http://corese.inria.fr/result> { ?validationResultResult sh:resultPath ?path } } )\n");
        sb.append("    }\n");
        sb.append("}");

        return sb.toString();
    }

    public static String generateSHACLSuccessfullValidationReport() {
        StringBuilder sb = new StringBuilder();

        sb.append("PREFIX sh: <http://www.w3.org/ns/shacl#>\n");
        sb.append("ASK {\n");
        sb.append("    ?report a sh:ValidationReport ;\n");
        sb.append("        sh:conforms true .\n");
        sb.append("}");

        return sb.toString();
    }

    public static Graph loadManifest(URI manifestUri) {
        Graph graph = Graph.create();
        graph.init();
        Load loader = Load.create(graph);
        TestUtils.loadManifest(manifestUri, graph, loader);
        return graph;
    }

    /**
     * Loads recursively the manifest and its included files in the given Graph using the given loader
     * @param manifestUri
     * @param graph
     * @param loader
     */
    public static void loadManifest(URI manifestUri, Graph graph, Load loader) {
        logger.info("Loading manifest file: {}", manifestUri);

        try {
            TestFileManager.loadFile(manifestUri);
            loader.parse(manifestUri.toString());
        } catch (Exception e) {
            logger.error("Error loading manifest file: {}", manifestUri, e);
            System.exit(1);
        }

        QueryProcess inclusionQueryExec = QueryProcess.create(graph);
        String inclusionQuery = buildInclusionQuery(manifestUri);
        try {
            Mappings inclusionMappings = inclusionQueryExec.query(inclusionQuery);
            for (Mapping mapping : inclusionMappings) {
                String inclusion = mapping.getValue("?inclusion").getLabel();
                loadManifest(URI.create(inclusion), graph, loader);
            }
        } catch (Exception e) {
            logger.error("Error executing inclusion query.", e);
        }
    }

    /**
     * Generated the SPARQL query that retrieves the list of manifests files listed as inclusions.
     * @param manifestUri If not null, only the inclusion linked to the provided URI will be listed
     * @return SPARQL query string
     */
    private static String buildInclusionQuery(URI manifestUri) {
        StringBuilder sb = new StringBuilder();
        sb.append("PREFIX mf: <http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#>\n");
        sb.append("PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n");
        sb.append("SELECT DISTINCT ?inclusion WHERE {\n");
        sb.append("    ?manifest a mf:Manifest .\n");
        sb.append("    { ?manifest mf:include/rdf:rest*/rdf:first ?inclusion . }\n");
        sb.append("    UNION { ?manifest mf:include ?inclusion . FILTER(isIRI(?inclusion)) }\n");
        if(manifestUri != null) {
            sb.append("    FILTER(?manifest = <").append(manifestUri.toString()).append(">)\n");
        }
        sb.append("}");
        return sb.toString();
    }

    private static String buildInclusionQuery() {
        return buildInclusionQuery(null);
    }

    /**
     * Compare the canonical representation of two knowledge bases
     * @param kb1
     * @param kb2
     * @return the result of the string comparison of the conversion of kb1 against kb2
     */
    public static int graphStoreContentCompare(GraphStore kb1, GraphStore kb2) {
        CanonicalRdf10Format kb1Printer = CanonicalRdf10Format.create(kb1);
        CanonicalRdf10Format kb2Printer = CanonicalRdf10Format.create(kb2);

        return kb1Printer.toString().compareTo(kb2Printer.toString());
    }

    public static String getFileTextContent(String filePathString) throws IOException {
        Path filePath = Paths.get(filePathString);

        byte[] fileBytes = Files.readAllBytes(filePath);
        String content = new String(fileBytes);
        return content;
    }
}
