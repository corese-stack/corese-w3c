package fr.inria.corese.w3c.junit.dynamic.executor.impl;

import fr.inria.corese.core.next.query.impl.sparql.ast.ASTConstants.OrderDirection;
import fr.inria.corese.core.next.query.impl.sparql.ast.SelectQueryAst;
import fr.inria.corese.core.next.query.impl.sparql.ast.OrderConditionAst;
import fr.inria.corese.core.next.query.impl.sparql.ast.VarAst;
import fr.inria.corese.core.next.query.impl.sparql.parser.SparqlParser;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

/**
 * Independent partial ORDER BY check, before result rows are compared as a bag.
 * SPARQL 1.1 §15.1 leaves ties and some pairs of RDF terms unordered.
 * Only projected variable keys and the term comparisons below are checked;
 * arbitrary expressions, hidden keys and other datatypes remain coverage limits.
 */
final class SelectResultOrder {
    private static final String XSD = "http://www.w3.org/2001/XMLSchema#";
    private static final Set<String> EXACT_NUMERIC = Set.of("integer", "decimal");

    private SelectResultOrder() {}

    static void verify(String queryText, String baseIri, List<String> projected,
                       List<Map<String, String>> rows) {
        var query = (SelectQueryAst) new SparqlParser().parse(queryText, baseIri);
        var conditions = query.solutionModifier().orderBy();
        if (conditions.isEmpty()) return;
        // Check every pair: an incomparable term between two ordered terms must not hide an inversion.
        for (int i = 0; i < rows.size(); i++) {
            for (int j = i + 1; j < rows.size(); j++) {
                for (var condition : conditions) {
                    if (!verifyCondition(condition, projected, rows, i, j)) break;
                }
            }
        }
    }

    // Only identical RDF terms allow advancing to the next condition (§15.1).
    private static boolean verifyCondition(OrderConditionAst condition, List<String> projected,
                                           List<Map<String, String>> rows, int i, int j) {
        if (!(condition.expression() instanceof VarAst(String variableName))) return false;
        String name = variableName.replaceFirst("^[?$]", "");
        if (!projected.contains(name)) return false;
        String left = rows.get(i).get(name);
        String right = rows.get(j).get(name);
        if (Objects.equals(left, right)) return true;
        Integer comparison = compare(left, right);
        if (comparison != null) {
            int directed = condition.orderDirection() == OrderDirection.DESC ? -comparison : comparison;
            if (directed > 0) throw new AssertionError("ORDER BY inversion on ?" + name
                    + " between result rows " + (i + 1) + " and " + (j + 1)
                    + ": " + left + " / " + right);
        }
        return false;
    }

    private static int rank(String term) {
        if (term == null) return 0;
        if (term.startsWith("_:b_")) return 1;
        if (term.startsWith("<")) return 2;
        return 3;
    }

    private static Integer compare(String left, String right) {
        int leftRank = rank(left);
        int rightRank = rank(right);
        if (leftRank != rightRank) return Integer.compare(leftRank, rightRank);
        if (leftRank == 2) return codepointCompare(left, right);
        if (leftRank != 3) return null;
        String leftType = datatype(left);
        String rightType = datatype(right);
        String leftLexical = lexical(left);
        String rightLexical = lexical(right);
        if (leftType.equals("string") && rightType.equals("string")) {
            return codepointCompare(leftLexical, rightLexical);
        }
        if (EXACT_NUMERIC.contains(leftType) && EXACT_NUMERIC.contains(rightType)) {
            return compareExactNumbers(leftLexical, leftType, rightLexical, rightType);
        }
        if (leftType.equals("boolean") && rightType.equals("boolean")) {
            var a = bool(leftLexical);
            var b = bool(rightLexical);
            return a == null || b == null ? null : Boolean.compare(a, b);
        }
        return null;
    }

    private static Integer compareExactNumbers(String left, String leftType, String right, String rightType) {
        // Exponents are not legal decimal/integer lexical forms.
        if (!validExactNumber(left, leftType) || !validExactNumber(right, rightType)) return null;
        try {
            return new BigDecimal(left).compareTo(new BigDecimal(right));
        } catch (NumberFormatException invalid) {
            return null;
        }
    }

    private static boolean validExactNumber(String lexical, String datatype) {
        return lexical.matches(datatype.equals("integer") ? "[+-]?[0-9]+"
                : "[+-]?(?:[0-9]+(?:[.][0-9]*)?|[.][0-9]+)");
    }

    private static Boolean bool(String lexical) {
        return switch (lexical) {
            case "true", "1" -> true;
            case "false", "0" -> false;
            default -> null;
        };
    }

    private static String datatype(String term) {
        int separator = term.lastIndexOf("\"^^<" + XSD);
        return separator < 0 || !term.endsWith(">") ? ""
                : term.substring(separator + 4 + XSD.length(), term.length() - 1);
    }

    private static String lexical(String term) {
        int separator = term.lastIndexOf("\"^^<");
        return separator < 0 ? term : term.substring(1, separator);
    }

    private static int codepointCompare(String left, String right) {
        return Arrays.compare(left.codePoints().toArray(), right.codePoints().toArray());
    }
}
