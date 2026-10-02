package fr.inria.corese.w3c.junit.dynamic.utils;

import fr.inria.corese.core.next.data.RdfCanonicalization;
import fr.inria.corese.core.next.data.api.model.Model;
import java.util.stream.Collectors;

/** Dataset comparison and diagnostics using RDF Dataset Canonicalization 1.0. */
public final class ModelIsomorphism {
    private ModelIsomorphism() {
    }

    public static boolean areModelsIsomorphic(Model left, Model right) {
        return left.size() == right.size() && canonicalize(left).equals(canonicalize(right));
    }

    /** Preserves RDF terms, graph names and blank-node sharing in diagnostics. */
    public static String canonicalize(Model model) {
        return RdfCanonicalization.canonicalize(model).stream()
                .map(RdfCanonicalization::toNQuad)
                .sorted()
                .collect(Collectors.joining("\n"));
    }
}
