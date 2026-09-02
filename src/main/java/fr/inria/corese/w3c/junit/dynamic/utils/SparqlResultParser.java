package fr.inria.corese.w3c.junit.dynamic.utils;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.xml.parsers.ParserConfigurationException;
import org.xml.sax.SAXException;

/**
 * Parses SPARQL XML results files (.srx) as defined by
 * https://www.w3.org/TR/rdf-sparql-XMLres/
 */
public class SparqlResultParser {

    private static final String SPARQL_RESULTS_NS = "http://www.w3.org/2005/sparql-results#";

    private SparqlResultParser() {
    }

    /**
     * Holds the parsed content of a SPARQL results file.
     * Either represents a boolean result (ASK) or a tabular result (SELECT).
     */
    public record SparqlResults(
            boolean isBoolean,
            boolean booleanResult,
            List<String> variables,
            List<Map<String, String>> rows) {
    }

    /**
     * Parses a SPARQL XML results stream.
     *
     * @param input the input stream of a .srx file
     * @return parsed results
     */
    public static SparqlResults parse(InputStream input) throws IOException, ParserConfigurationException, SAXException {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        factory.setNamespaceAware(true);
        factory.setXIncludeAware(false);
        factory.setFeature(javax.xml.XMLConstants.FEATURE_SECURE_PROCESSING, true);
        // Disable external DTD/entity resolution for security
        factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", false);
        factory.setFeature("http://xml.org/sax/features/external-general-entities", false);
        factory.setFeature("http://xml.org/sax/features/external-parameter-entities", false);

        DocumentBuilder builder = factory.newDocumentBuilder();
        Document doc = builder.parse(input);
        doc.getDocumentElement().normalize();

        // Check for boolean result (ASK query)
        NodeList booleans = getElements(doc.getDocumentElement(), "boolean");
        if (booleans.getLength() > 0) {
            String val = booleans.item(0).getTextContent().trim();
            return new SparqlResults(true, "true".equalsIgnoreCase(val), List.of(), List.of());
        }

        // SELECT results: extract variable names from <head>
        List<String> variables = new ArrayList<>();
        NodeList varNodes = getElements(doc.getDocumentElement(), "variable");
        for (int i = 0; i < varNodes.getLength(); i++) {
            variables.add(((Element) varNodes.item(i)).getAttribute("name"));
        }

        // Extract result rows
        List<Map<String, String>> rows = new ArrayList<>();
        NodeList resultNodes = getElements(doc.getDocumentElement(), "result");
        for (int i = 0; i < resultNodes.getLength(); i++) {
            Element resultElem = (Element) resultNodes.item(i);
            Map<String, String> row = new LinkedHashMap<>();
            NodeList bindingNodes = getElements(resultElem, "binding");
            for (int j = 0; j < bindingNodes.getLength(); j++) {
                Element bindingElem = (Element) bindingNodes.item(j);
                String name = bindingElem.getAttribute("name");
                String value = extractValue(bindingElem);
                if (value != null) {
                    row.put(name, value);
                }
            }
            rows.add(row);
        }

        return new SparqlResults(false, false, variables, rows);
    }

    /**
     * Retrieves child elements by local name, trying namespace-aware lookup first.
     */
    private static NodeList getElements(Element parent, String localName) {
        NodeList ns = parent.getElementsByTagNameNS(SPARQL_RESULTS_NS, localName);
        if (ns.getLength() > 0) return ns;
        return parent.getElementsByTagName(localName);
    }

    /**
     * Extracts a canonical string value from a SPARQL XML {@code <binding>} element.
     * Returns:
     * <ul>
     *   <li>{@code <uri>} → {@code "<http://...>"}</li>
     *   <li>{@code <bnode>} → {@code "_:b_<id>"}</li>
     *   <li>{@code <literal>} → {@code "\"text\""}, {@code "\"text\"@lang"}, or
     *       {@code "\"text\"^^<datatype>"}</li>
     * </ul>
     */
    private static String extractValue(Element binding) {
        // URI
        NodeList uris = getElements(binding, "uri");
        if (uris.getLength() > 0) {
            return "<" + uris.item(0).getTextContent().trim() + ">";
        }
        // Blank node — keep the ID so cross-row correlations can be checked
        NodeList bnodes = getElements(binding, "bnode");
        if (bnodes.getLength() > 0) {
            return "_:b_" + bnodes.item(0).getTextContent().trim();
        }
        // Literal
        NodeList literals = getElements(binding, "literal");
        if (literals.getLength() > 0) {
            Element literal = (Element) literals.item(0);
            String text = literal.getTextContent();
            String lang = literal.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang");
            if (lang.isEmpty()) {
                lang = literal.getAttribute("xml:lang");
            }
            if (!lang.isEmpty()) {
                return "\"" + text + "\"@" + lang.toLowerCase(java.util.Locale.ROOT);
            }
            String datatype = literal.getAttribute("datatype");
            if (!datatype.isEmpty()) {
                return "\"" + text + "\"^^<" + datatype + ">";
            }
            // Plain literal — treat as xsd:string for canonical comparison
            return "\"" + text + "\"^^<http://www.w3.org/2001/XMLSchema#string>";
        }
        return null;
    }
}
