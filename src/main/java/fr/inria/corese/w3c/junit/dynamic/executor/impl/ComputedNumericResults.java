package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.query.impl.sparql.ast.LiteralAst;
import fr.inria.corese.core.next.query.impl.sparql.ast.IriAst;
import fr.inria.corese.core.next.query.impl.sparql.ast.SelectQueryAst;
import fr.inria.corese.core.next.query.impl.sparql.ast.TermAst;
import fr.inria.corese.core.next.query.impl.sparql.ast.constraint.CoalesceAst;
import fr.inria.corese.core.next.query.impl.sparql.ast.constraint.FunctionCallAst;
import fr.inria.corese.core.next.query.impl.sparql.ast.constraint.NumericExpressionAst;
import fr.inria.corese.core.next.query.impl.sparql.ast.constraint.UnaryPlusAst;
import fr.inria.corese.core.next.query.impl.sparql.bridge.SparqlTermResolver;
import fr.inria.corese.core.next.query.impl.sparql.parser.SparqlParser;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Pattern;

/**
 * Value comparison only for numeric SELECT expressions, never for stored RDF terms.
 * See https://github.com/w3c/rdf-tests/issues/58#issuecomment-493670079.
 * The parser classifies provenance; numeric comparison is independent of the engine's value API.
 * Unknown provenance (including BIND/subqueries and STRDT) deliberately stays strict.
 */
final class ComputedNumericResults {
    private static final String XSD = "http://www.w3.org/2001/XMLSchema#";
    private static final String DECIMAL = XSD + "decimal";
    private static final Set<String> TYPES = Set.of(DECIMAL, XSD + "float", XSD + "double");
    private static final Pattern NUMERIC_CHARACTERS = Pattern.compile("[+\\-0-9.eE]+");

    private ComputedNumericResults() {}

    static Set<String> columns(String queryText, String baseIri) {
        var query = (SelectQueryAst) new SparqlParser().parse(queryText, baseIri);
        var resolver = new SparqlTermResolver(query.prologue());
        Set<String> result = new HashSet<>();
        query.projection().expressionTerms().forEach((name, expression) -> {
            if (computed(expression, resolver)) result.add(name.replaceFirst("^[?$]", ""));
        });
        return Set.copyOf(result);
    }

    private static boolean computed(TermAst expression, SparqlTermResolver resolver) {
        if (expression instanceof UnaryPlusAst) return false; // May return the original RDF term.
        if (expression instanceof NumericExpressionAst) return true;
        if (expression instanceof FunctionCallAst function) {
            return function.functionName() instanceof IriAst(var iri) && TYPES.contains(resolver.resolveIri(iri));
        }
        if (expression instanceof CoalesceAst coalesce) {
            // Literal fallbacks are allowed only when they cannot be one of the normalized types.
            return !coalesce.arguments().isEmpty() && coalesce.arguments().stream().allMatch(argument ->
                    computed(argument, resolver) || nonNormalizedLiteral(argument, resolver));
        }
        return false;
    }

    private static boolean nonNormalizedLiteral(TermAst expression, SparqlTermResolver resolver) {
        return expression instanceof LiteralAst literal
                && (literal.datatype() == null || !TYPES.contains(resolver.resolveIri(literal.datatype())));
    }

    static String normalize(String term) {
        if (term == null || !term.startsWith("\"")) return term;
        int separator = term.indexOf("\"^^<");
        if (separator < 0 || !term.endsWith(">")) return term;
        String datatype = term.substring(separator + 4, term.length() - 1);
        if (!TYPES.contains(datatype)) return term;
        String lexical = term.substring(1, separator);
        if (!NUMERIC_CHARACTERS.matcher(lexical).matches()) return term;
        if (datatype.equals(DECIMAL) && (lexical.contains("e") || lexical.contains("E"))) return term;
        try {
            BigDecimal value = new BigDecimal(lexical);
            String normalized = value.stripTrailingZeros().toString();
            if (value.signum() == 0 && lexical.startsWith("-") && !datatype.equals(DECIMAL)) {
                normalized = "-0"; // Signed floating-point zero remains distinguishable.
            }
            return '"' + normalized + "\"^^<" + datatype + ">";
        } catch (NumberFormatException invalidLexicalForm) {
            return term; // Never turn ill-typed literals into a valid numeric value.
        }
    }
}
