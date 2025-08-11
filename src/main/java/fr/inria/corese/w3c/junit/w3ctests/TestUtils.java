package fr.inria.corese.w3c.junit.w3ctests;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import fr.inria.corese.core.Graph;
import fr.inria.corese.core.GraphStore;
import fr.inria.corese.core.kgram.core.Mapping;
import fr.inria.corese.core.kgram.core.Mappings;
import fr.inria.corese.core.load.Load;
import fr.inria.corese.core.next.api.Model;
import fr.inria.corese.core.next.api.ValueFactory;
import fr.inria.corese.core.next.api.io.parser.RDFParser ;
import fr.inria.corese.core.next.api.base.io.RDFFormat;
import fr.inria.corese.core.next.api.io.serialization.RDFSerializer;
import fr.inria.corese.core.next.impl.io.parser.ParserFactory;
import fr.inria.corese.core.next.impl.temp.CoreseAdaptedValueFactory;
import fr.inria.corese.core.next.impl.temp.CoreseModel;
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
import java.io.*;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;

/**
 * Utility class providing helper methods for W3C test generation and execution.
 * This includes file format conversions, test name sanitization, file comparison,
 * and SPARQL query generation for SHACL validation checks.
 */
public class TestUtils {

    private static final Logger logger = LoggerFactory.getLogger(TestUtils.class);

    /**
     * Path to a sample data file in Turtle format, used as a default data source for some SPARQL tests.
     */
    public static final String SAMPLE_DATA_FILE_PATH_STRING = "src/test/resources/meta/sampleData.ttl";
    /**
     * Path to a basic SPARQL SELECT query file, used as a default query for some SPARQL tests.
     */
    public static final String BASIC_SPARQL_SELECT_QUERY_PATH_STRING = "src/test/resources/meta/sparqlSelectBasic.rq";

    /**
     * Private constructor to prevent instantiation of this utility class.
     */
    private TestUtils() {}

    /**
     * Converts a string representation of an RDF file format (as used in corese-command)
     * to its corresponding {@link RDFFormat} enumeration object.
     *
     * @param rdfCommandFileFormat The string name of the RDF format (e.g., "ntriples", "turtle", "rdfxml").
     * @return The corresponding {@link RDFFormat} enumeration value.
     * @throws IllegalArgumentException If the provided format string has no known equivalent in corese-core.
     */
    public static RDFFormat commandStringFormatToRDFFormat(String rdfCommandFileFormat) {
        switch (rdfCommandFileFormat) {
            case "ntriples":
                return RDFFormat.NTRIPLES;
            case "nquads":
                return RDFFormat.NQUADS;
            case "turtle":
                return RDFFormat.TURTLE;
            case "trig":
                return RDFFormat.TRIG;
            case "rdfxml":
                return  RDFFormat.RDFXML;
            default:
                throw new IllegalArgumentException("Format " + rdfCommandFileFormat + " has no know equivalent in corese-core");
        }
    }

    /**
     * Creates an {@link RDFParser} using the given {@link Model} and converting the string format
     * into the corresponding {@link RDFFormat} if it exists.
     *
     * @param rdfCommandFileFormat RDF format name as used in corese-command (e.g., "ntriples").
     * @param model The model that will contain the parsed statements.
     * @return A parser of the expected format.
     */
    public static RDFParser getRDFParser(String rdfCommandFileFormat, Model model) {
        RDFFormat format = TestUtils.commandStringFormatToRDFFormat(rdfCommandFileFormat);
        return getRDFParser(format, model);
    }

    /**
     * Creates an {@link RDFParser} using the given {@link Model}.
     *
     * @param format The {@link RDFFormat} for which to create the parser.
     * @param model The model that will contain the parsed statements.
     * @return A parser of the expected format.
     */
    public static RDFParser getRDFParser(RDFFormat format, Model model) {
        ParserFactory parserFactory = new ParserFactory();
        ValueFactory valueFactory = new CoreseAdaptedValueFactory();
        return parserFactory.createRDFParser(format, model, valueFactory);
    }

    /**
     * Creates an {@link RDFParser} by first converting the string format into the corresponding {@link RDFFormat}.
     * A new {@link CoreseModel} is created internally for the parser.
     *
     * @param rdfCommandFileFormat RDF format name as used in corese-command.
     * @return A parser of the expected format.
     */
    public static RDFParser getRDFParser(String rdfCommandFileFormat) {
        Model model = new CoreseModel();
        return getRDFParser(rdfCommandFileFormat, model);
    }

    /**
     * Creates an {@link RDFParser} for the given {@link RDFFormat}.
     * A new {@link CoreseModel} is created internally for the parser.
     *
     * @param format The {@link RDFFormat} for which to create the parser.
     * @return A parser of the expected format.
     */
    public static RDFParser getRDFParser(RDFFormat format) {
        Model model = new CoreseModel();
        return getRDFParser(format, model);
    }

    /**
     * Parses an RDF file specified by its format and path into a new {@link CoreseModel}.
     *
     * @param rdfCommandFileFormat The RDF format name as used in corese-command (e.g., "ntriples").
     * @param filePath The path to the RDF file to parse.
     * @throws FileNotFoundException If the specified file does not exist.
     */
    public static void parseFile(String rdfCommandFileFormat, String filePath) throws FileNotFoundException {
        Model model = new CoreseModel();
        parseFile(rdfCommandFileFormat, filePath, model);
    }

    /**
     * Parses an RDF file specified by its format and path into a given {@link Model}.
     *
     * @param rdfCommandFileFormat The RDF format name as used in corese-command (e.g., "ntriples").
     * @param filePath The path to the RDF file to parse.
     * @param model The {@link Model} into which the parsed statements will be added.
     * @throws FileNotFoundException If the specified file does not exist.
     */
    public static void parseFile(String rdfCommandFileFormat, String filePath, Model model) throws FileNotFoundException {
        RDFParser parser = TestUtils.getRDFParser(rdfCommandFileFormat, model);
        String localFilePath = TestFileManager.getLocalFilePath(URI.create(filePath)).toString();
        Reader reader = new FileReader(localFilePath);
        parser.parse(reader);
    }

    /**
     * Sanitizes an original test name to make it compatible with Java function naming conventions.
     * It converts the name to lowercase, replaces hyphens and spaces with underscores, and removes hash and dot characters.
     *
     * @param originalTestName The original name of the test, potentially containing invalid characters.
     * @return A sanitized test name suitable for use as a Java function name.
     */
    public static String sanitizeTestName(String originalTestName) {
        return originalTestName.trim().toLowerCase(Locale.ROOT).replace("-","").replace(" ", "_").replace("#", "").replace(".", "");
    }

    /**
     * Extracts a longer, more unique test name from a test URI by incorporating parts of its URI path.
     * This is useful for distinguishing tests that might have the same short name but originate from different manifests or sections.
     *
     * @param testUri The URI of the test.
     * @return A name for the test that is prefixed by parts of its URI path, making it more unique.
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
     * Removes certain characters from a comment string that could cause compilation errors in Java files.
     * Specifically, it replaces double quotes with "'quote'", backslashes followed by 'u' or 'x' with "'slash'u" or "'slash'x",
     * trims leading/trailing whitespace, and replaces newlines with spaces.
     *
     * @param comment The string object of the rdfs:comment property.
     * @return A safer comment string suitable for embedding in Java code.
     */
    public static String sanitizeComment(String comment) {
        return comment
                .replaceAll("\"", "'quote'")
                .replaceAll("\\\\[uU]", "'slash'u")
                .replaceAll("\\\\[xX]", "'slash'x")
                .trim()
                .replaceAll("\n", " ");
    }

    /**
     * Compares the content of two text files line by line.
     * This method is designed to be used for comparing two canonicalized files,
     * where the order and exact content of each line are significant.
     *
     * @param filePath1 The {@link Path} to the first file to compare.
     * @param filePath2 The {@link Path} to the second file to compare.
     * @return {@code true} if the files are identical line by line, {@code false} otherwise.
     * @throws IOException If an I/O error occurs while reading the files.
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
     * Compares two files containing SPARQL query results in XML format.
     * This method is specifically designed to compare ".srx" files used in W3C SPARQL tests,
     * normalizing their content and comparing the extracted results.
     *
     * @param resultFile1 The {@link Path} to the first SPARQL XML result file.
     * @param resultFile2 The {@link Path} to the second SPARQL XML result file.
     * @return {@code true} if the XML results are identical, {@code false} otherwise.
     * @throws ParserConfigurationException If a DocumentBuilder cannot be created.
     * @throws IOException If an I/O error occurs during file reading.
     * @throws SAXException If any parse errors occur.
     * @throws XPathExpressionException If an XPath expression cannot be compiled or evaluated.
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

    /**
     * Compares two JSON files for equality.
     * This method reads both JSON files into {@link JsonNode} objects and
     * performs a deep comparison to determine if their content is identical.
     *
     * @param filePath1 The {@link Path} to the first JSON file.
     * @param filePath2 The {@link Path} to the second JSON file.
     * @return {@code true} if the JSON files are structurally and semantically equal, {@code false} otherwise.
     * @throws IOException If an I/O error occurs during file reading or JSON parsing.
     */
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

    /**
     * Generates a SPARQL query to check if all validation results found in the "reference" graph
     * are also present in the "result" graph. This is used in SHACL validation tests.
     *
     * @return A SPARQL SELECT query string.
     */
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

    /**
     * Generates a SPARQL query to check if all validation results found in the "result" graph
     * are also present in the "reference" graph. This is used in SHACL validation tests.
     *
     * @return A SPARQL SELECT query string.
     */
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

    /**
     * Generates a SPARQL query to check if there are any validation results in the "result" graph
     * that are NOT present in the "reference" graph. This is used in SHACL validation tests to
     * identify unexpected validation errors.
     *
     * @return A SPARQL SELECT query string.
     */
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

    /**
     * Generates a SPARQL query to check if there are any validation results in the "reference" graph
     * that are NOT present in the "result" graph. This is used in SHACL validation tests to
     * identify missing validation errors.
     *
     * @return A SPARQL SELECT query string.
     */
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

    /**
     * Generates a SPARQL ASK query to check if a SHACL validation report indicates successful conformity.
     * This query looks for a validation report that asserts `sh:conforms true`.
     *
     * @return A SPARQL ASK query string.
     */
    public static String generateSHACLSuccessfullValidationReport() {
        StringBuilder sb = new StringBuilder();

        sb.append("PREFIX sh: <http://www.w3.org/ns/shacl#>\n");
        sb.append("ASK {\n");
        sb.append("    ?report a sh:ValidationReport ;\n");
        sb.append("        sh:conforms true .\n");
        sb.append("}");

        return sb.toString();
    }

    /**
     * Loads a manifest file into a new Corese {@link Graph}.
     * This method recursively loads the main manifest and any included sub-manifests.
     *
     * @param manifestUri The URI of the manifest file to load.
     * @return A {@link Graph} containing the loaded manifest data.
     */
    public static Graph loadManifest(URI manifestUri) {
        Graph graph = Graph.create();
        graph.init();
        Load loader = Load.create(graph);
        TestUtils.loadManifest(manifestUri, graph, loader);
        return graph;
    }

    /**
     * Loads recursively the manifest and its included files into the given {@link Graph} using the given {@link Load}er.
     * This method handles the parsing of RDF data from the manifest URI and any manifests included via `mf:include`.
     *
     * @param manifestUri The URI of the manifest file to load.
     * @param graph The {@link Graph} into which the manifest data will be loaded.
     * @param loader The {@link Load}er instance to use for parsing the manifest files.
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
     * Generates a SPARQL query that retrieves the list of manifests files listed as inclusions.
     * This query looks for `mf:include` properties within the manifest.
     *
     * @param manifestUri If not null, the query will filter to only list inclusions linked to the provided URI.
     * @return A SPARQL query string to retrieve manifest inclusions.
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

    /**
     * Generates a SPARQL query that retrieves the list of manifests files listed as inclusions.
     * This overloaded method calls {@link #buildInclusionQuery(URI)} with a null manifest URI,
     * effectively querying for all inclusions without filtering by a specific manifest.
     *
     * @return A SPARQL query string to retrieve all manifest inclusions.
     */
    private static String buildInclusionQuery() {
        return buildInclusionQuery(null);
    }

    /**
     * Compares the canonical representation of two knowledge bases (GraphStores).
     * This method converts both {@link GraphStore} instances to their canonical RDF 1.0 format
     * and then performs a string comparison of the resulting canonical forms.
     *
     * @param kb1 The first {@link GraphStore} to compare.
     * @param kb2 The second {@link GraphStore} to compare.
     * @return The result of the string comparison (0 if identical, negative if kb1's canonical form is lexicographically less than kb2's, positive otherwise).
     */
    public static int graphStoreContentCompare(GraphStore kb1, GraphStore kb2) {
        CanonicalRdf10Format kb1Printer = CanonicalRdf10Format.create(kb1);
        CanonicalRdf10Format kb2Printer = CanonicalRdf10Format.create(kb2);

        return kb1Printer.toString().compareTo(kb2Printer.toString());
    }

    /**
     * Reads the entire content of a file into a single string.
     *
     * @param filePathString The string representation of the path to the file.
     * @return A {@code String} containing the entire text content of the file.
     * @throws IOException If an I/O error occurs while reading the file.
     */
    public static String getFileTextContent(String filePathString) throws IOException {
        Path filePath = Paths.get(filePathString);

        byte[] fileBytes = Files.readAllBytes(filePath);
        String content = new String(fileBytes);
        return content;
    }
}
