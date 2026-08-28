package fr.inria.corese.w3c.junit.dynamic.utils;

import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.model.Statement;
import fr.inria.corese.core.next.data.api.term.BNode;
import fr.inria.corese.core.next.data.api.term.IRI;
import fr.inria.corese.core.next.data.api.term.Literal;
import fr.inria.corese.core.next.data.api.term.Resource;
import fr.inria.corese.core.next.data.api.term.Value;
import fr.inria.corese.core.next.data.Values;

import java.io.FileReader;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

/**
 * Parses SPARQL result files that use the W3C result-set vocabulary (rs:)
 * rather than SPARQL XML Results format (.srx).
 *
 * <p>Supports Turtle (.ttl) and RDF/XML (.rdf) encodings of
 * {@code http://www.w3.org/2001/sw/DataAccess/tests/result-set#}.
 *
 * <p>The result-set vocabulary layout:
 * <pre>
 *   [] a rs:ResultSet ;
 *      rs:resultVariable "x", "y" ;
 *      rs:solution [ rs:binding [ rs:variable "x" ; rs:value &lt;...&gt; ] ;
 *                    rs:binding [ rs:variable "y" ; rs:value "foo" ] ] .
 * </pre>
 */
public class RsVocabResultParser {

    private static final String RS = "http://www.w3.org/2001/sw/DataAccess/tests/result-set#";
    private static final String RS_RESULT_SET      = RS + "ResultSet";
    private static final String RS_RESULT_VARIABLE = RS + "resultVariable";
    private static final String RS_SOLUTION        = RS + "solution";
    private static final String RS_BINDING         = RS + "binding";
    private static final String RS_VARIABLE        = RS + "variable";
    private static final String RS_VALUE           = RS + "value";
    private static final String RS_INDEX           = RS + "index";
    private static final String RDF_TYPE           = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";

    private RsVocabResultParser() {
    }

    /**
     * Parses a SELECT result encoded in Turtle or RDF/XML using the rs: vocabulary.
     *
     * @param resultUri URI of the result file
     * @return list of result rows; each row maps variable names to canonical value strings
     */
    public static List<Map<String, String>> parse(URI resultUri) throws Exception {
        Model model = RDFTestUtils.createModel();
        String filePath = RDFTestUtils.loadFile(resultUri);
        String ext = RDFTestUtils.getFileExtension(resultUri.toString()).toLowerCase(Locale.ROOT);
        RDFFormat fmt = ext.equals("rdf") ? RDFFormat.RDFXML : RDFFormat.TURTLE;

        try (FileReader reader = new FileReader(filePath, StandardCharsets.UTF_8)) {
            RDFTestUtils.createParser(fmt, model).parse(reader, resultUri.toString());
        }

        // Find the rs:ResultSet node (subject with rdf:type rs:ResultSet)
        IRI typeIri = Values.factory().createIRI(RDF_TYPE);
        IRI resultSetIri = Values.factory().createIRI(RS_RESULT_SET);
        Resource resultSetNode = null;
        for (Statement stmt : model.filter(null, typeIri, resultSetIri)) {
            resultSetNode = stmt.getSubject();
            break;
        }
        if (resultSetNode == null) {
            throw new AssertionError("No rs:ResultSet node found in result file: " + resultUri);
        }

        // Collect solutions (order by rs:index if present, otherwise insertion order)
        IRI solutionIri = Values.factory().createIRI(RS_SOLUTION);
        IRI bindingIri  = Values.factory().createIRI(RS_BINDING);
        IRI variableIri = Values.factory().createIRI(RS_VARIABLE);
        IRI valueIri    = Values.factory().createIRI(RS_VALUE);
        IRI indexIri    = Values.factory().createIRI(RS_INDEX);

        List<Map.Entry<Integer, Map<String, String>>> indexedRows = new ArrayList<>();

        for (Statement solStmt : model.filter(resultSetNode, solutionIri, null)) {
            Value solNode = solStmt.getObject();
            if (!(solNode instanceof Resource solRes)) continue;

            Map<String, String> row = new LinkedHashMap<>();
            int index = Integer.MAX_VALUE;

            for (Statement solProp : model.filter(solRes, null, null)) {
                String pred = solProp.getPredicate().stringValue();

                if (RS_INDEX.equals(pred) && solProp.getObject() instanceof Literal idxLit) {
                    try {
                        index = Integer.parseInt(idxLit.getLabel());
                    } catch (NumberFormatException ignored) {
                        // keep MAX_VALUE
                    }
                } else if (RS_BINDING.equals(pred)) {
                    Value bindNode = solProp.getObject();
                    if (!(bindNode instanceof Resource bindRes)) continue;

                    String varName = null;
                    String varValue = null;

                    for (Statement bindProp : model.filter(bindRes, null, null)) {
                        String bpred = bindProp.getPredicate().stringValue();
                        if (RS_VARIABLE.equals(bpred) && bindProp.getObject() instanceof Literal varLit) {
                            varName = varLit.getLabel();
                        } else if (RS_VALUE.equals(bpred)) {
                            varValue = toCanonical(bindProp.getObject());
                        }
                    }

                    if (varName != null && varValue != null) {
                        row.put(varName, varValue);
                    }
                }
            }

            indexedRows.add(Map.entry(index, row));
        }

        // Sort by rs:index when present; otherwise keep insertion order
        indexedRows.sort(Map.Entry.comparingByKey());
        List<Map<String, String>> rows = new ArrayList<>();
        for (Map.Entry<Integer, Map<String, String>> e : indexedRows) {
            rows.add(e.getValue());
        }
        return rows;
    }

    /**
     * Converts an RDF value to the same canonical string form used by
     * {@link SparqlQueryEvaluationTestExecutor#valueToCanonical}.
     */
    static String toCanonical(Value value) {
        if (value instanceof IRI iri) {
            return "<" + iri.stringValue() + ">";
        }
        if (value instanceof BNode bNode) {
            return "_:b_" + bNode.stringValue();
        }
        if (value instanceof Literal literal) {
            String label = literal.getLabel();
            if (literal.getLanguage().isPresent()) {
                return "\"" + label + "\"@" + literal.getLanguage().get().toLowerCase(Locale.ROOT);
            }
            if (literal.getDatatype() != null) {
                return "\"" + label + "\"^^<" + literal.getDatatype().stringValue() + ">";
            }
            return "\"" + label + "\"^^<http://www.w3.org/2001/XMLSchema#string>";
        }
        return value.stringValue();
    }
}
