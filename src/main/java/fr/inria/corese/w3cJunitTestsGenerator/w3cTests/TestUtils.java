package fr.inria.corese.w3cJunitTestsGenerator.w3cTests;

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
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;

public class TestUtils {

    private static final Logger logger = LoggerFactory.getLogger(TestUtils.class);

    /**
     * Remove seen name structure that are incompatible with the format of a java function name.
     * @param originalTestName
     * @return sanitized test name
     */
    public static String sanitizeTestName(String originalTestName) {
        return originalTestName.trim().toLowerCase(Locale.ROOT).replace("-","");
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
                .replaceAll("\\\\u([0-9A-Fa-f]*)", "")
                .trim()
                .replace('\n', ' ');
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
}
