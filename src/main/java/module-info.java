module fr.inria.corese.corese_w3c {
    requires fr.inria.corese.corese_core;
    requires java.logging;
    requires java.xml;
    requires transitive org.apache.jena.core;
    requires transitive org.apache.jena.tdb;
    requires transitive org.apache.jena.arq;
    requires transitive org.apache.jena.base;
    requires transitive org.apache.jena.iri;
    requires org.slf4j;
    requires org.apache.logging.log4j;
}