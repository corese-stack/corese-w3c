package fr.inria.corese.w3c.junit.dynamic.utils;

import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.data.api.exception.ParsingException;
import fr.inria.corese.core.next.data.api.io.format.RDFFormat;
import fr.inria.corese.core.next.data.api.model.Model;
import fr.inria.corese.core.next.data.api.model.Statement;
import fr.inria.corese.core.next.data.api.term.IRI;
import fr.inria.corese.core.next.data.api.term.Literal;
import fr.inria.corese.core.next.data.api.term.Resource;
import fr.inria.corese.core.next.data.api.term.Value;

import java.io.FileReader;
import java.io.IOException;
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
    private static final String RS_BOOLEAN         = RS + "boolean";
    private static final String RDF_TYPE           = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";

    private RsVocabResultParser() {
    }

    /**
     * Parses an ASK result encoded in Turtle or RDF/XML using rs:boolean.
     *
     * @param resultUri URI of the result file
     * @return boolean result
     */
    public static boolean parseBoolean(URI resultUri) throws IOException, ParsingException {
        Model model = RDFTestUtils.createModel();
        String filePath = RDFTestUtils.loadFile(resultUri);
        String ext = RDFTestUtils.getFileExtension(resultUri.toString()).toLowerCase(Locale.ROOT);
        RDFFormat fmt = ext.equals("rdf") ? RDFFormat.RDFXML : RDFFormat.TURTLE;

        try (FileReader reader = new FileReader(filePath, StandardCharsets.UTF_8)) {
            RDFTestUtils.createParser(fmt, model).parse(reader, resultUri.toString());
        }

        IRI boolIri = Values.factory().createIRI(RS_BOOLEAN);
        for (Statement stmt : model.filter(null, boolIri, null)) {
            Value obj = stmt.getObject();
            if (obj instanceof Literal lit) {
                return Boolean.parseBoolean(lit.getLabel());
            }
        }
        throw new AssertionError("No rs:boolean found in result file: " + resultUri);
    }

    /**
     * Parses a SELECT result encoded in Turtle or RDF/XML using the rs: vocabulary.
     *
     * @param resultUri URI of the result file
     * @return parsed SPARQL results with declared variables and rows
     */
    public static SparqlResultParser.SparqlResults parse(URI resultUri) throws IOException, ParsingException {
        Model model = RDFTestUtils.createModel();
        String filePath = RDFTestUtils.loadFile(resultUri);
        String ext = RDFTestUtils.getFileExtension(resultUri.toString()).toLowerCase(Locale.ROOT);
        RDFFormat fmt = ext.equals("rdf") ? RDFFormat.RDFXML : RDFFormat.TURTLE;

        try (FileReader reader = new FileReader(filePath, StandardCharsets.UTF_8)) {
            RDFTestUtils.createParser(fmt, model).parse(reader, resultUri.toString());
        }

        IRI typeIri = Values.factory().createIRI(RDF_TYPE);
        IRI resultSetIri = Values.factory().createIRI(RS_RESULT_SET);
        Resource resultSetNode = model.filter(null, typeIri, resultSetIri)
                .stream()
                .map(Statement::getSubject)
                .findFirst()
                .orElseThrow(() -> new AssertionError("No rs:ResultSet node found in result file: " + resultUri));

        IRI resultVarIri = Values.factory().createIRI(RS_RESULT_VARIABLE);
        List<String> variables = new ArrayList<>();
        for (Statement varStmt : model.filter(resultSetNode, resultVarIri, null)) {
            if (varStmt.getObject() instanceof Literal lit) {
                variables.add(lit.getLabel());
            }
        }

        IRI solutionIri = Values.factory().createIRI(RS_SOLUTION);
        List<Map.Entry<Integer, Map<String, String>>> indexedRows = new ArrayList<>();

        for (Statement solStmt : model.filter(resultSetNode, solutionIri, null)) {
            if (solStmt.getObject() instanceof Resource solRes) {
                indexedRows.add(parseSolution(model, solRes));
            }
        }

        indexedRows.sort(Map.Entry.comparingByKey());
        List<Map<String, String>> rows = new ArrayList<>();
        for (Map.Entry<Integer, Map<String, String>> e : indexedRows) {
            rows.add(e.getValue());
        }
        return new SparqlResultParser.SparqlResults(false, false, variables, rows);
    }

    private static Map.Entry<Integer, Map<String, String>> parseSolution(Model model, Resource solRes) {
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
            } else if (RS_BINDING.equals(pred) && solProp.getObject() instanceof Resource bindRes) {
                parseBinding(model, bindRes, row);
            }
        }
        return Map.entry(index, row);
    }

    private static void parseBinding(Model model, Resource bindRes, Map<String, String> row) {
        String varName = null;
        String varValue = null;
        for (Statement bindProp : model.filter(bindRes, null, null)) {
            String bpred = bindProp.getPredicate().stringValue();
            if (RS_VARIABLE.equals(bpred) && bindProp.getObject() instanceof Literal varLit) {
                varName = varLit.getLabel();
            } else if (RS_VALUE.equals(bpred)) {
                varValue = RDFTestUtils.toCanonical(bindProp.getObject());
            }
        }
        if (varName != null && varValue != null) {
            row.put(varName, varValue);
        }
    }
}
