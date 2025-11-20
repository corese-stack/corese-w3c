package fr.inria.corese.w3c.junit.dynamic.utils;

import fr.inria.corese.core.next.api.IRI;
import fr.inria.corese.core.next.impl.common.BasicIRI;
import fr.inria.corese.core.next.impl.common.vocabulary.Vocabulary;

public enum JLD implements Vocabulary {
    OPTION("option"),
    BASE("base"),
    SPECVERSION("specVersion"),
    USENATIVETYPES("useNativeTypes"),
    USERDFTYPE("useRdfType");

    private final IRI iri;

    public static final String NS = "https://w3c.github.io/json-ld-api/tests/vocab#";

    JLD(String localName) {
        this.iri = new BasicIRI(getNamespace(), localName);
    }

    @Override
    public IRI getIRI() {
        return this.iri;
    }

    @Override
    public String getNamespace() {
        return NS;
    }

    @Override
    public String getPreferredPrefix() {
        return "jld";
    }
}
