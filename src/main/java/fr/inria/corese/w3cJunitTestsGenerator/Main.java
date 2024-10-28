package fr.inria.corese.w3cJunitTestsGenerator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * The Main class serves as the entry point for the application.
 * It is responsible for initializing and executing the W3cTestsGenerator based
 * on predefined paths.
 */
public class Main {

        private static final Logger logger = LoggerFactory.getLogger(Main.class);

        // Define base directory using system's current directory
        private static final Path BASE_PATH = Paths.get(System.getProperty("user.dir"));

        // Specify paths for tests, resources, and the manifest within the project
        // structure
        private static final Path TESTS_PATH_DIR = BASE_PATH
                        .resolve("src/test/java/fr/inria/corese/w3c");

        /**
         * Main method to execute the application.
         * It creates and runs a W3cTestsGenerator with specified directories and
         * manifest file.
         *
         * @param args Command line arguments (not used)
         */
        public static void main(String[] args) {
                // Download the latest corese-command jar
                /*try {
                        TestFileManager.downloadFile(URI.create("https://github.com/corese-stack/corese-command/releases/latest/corese-command.jar"), Path.of("src/test/resources/corese-command.jar")); // FIXME replace me to automatically call corese-command in its latest version
                } catch (IOException e) {
                        logger.error("Could not download corese-command", e);
                }*/
                generateW3cTests("canonicalRdf", "https://w3c.github.io/rdf-canon/tests/manifest.ttl"); // Canonical RDF
                generateW3cTests("rdf11nquads", "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/manifest.ttl");  // RDF 1.1 nquads
                generateW3cTests("rdf11ntriples", "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/manifest.ttl"); // rdf 1.1 ntriples
                generateW3cTests("rdf11xml", "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/manifest.ttl"); // RDF 1.1 XML
                generateW3cTests("rdf11trig", "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/manifest.ttl"); // RDF 1.1 Trig
                generateW3cTests("rdf11turtle", "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/manifest.ttl"); // RDF 1.1 turtle
                generateW3cTests("sparql10", "https://w3c.github.io/rdf-tests/sparql/sparql10/manifest.ttl"); // SPARQL 1.0
                generateW3cTests("shacl", "https://raw.githubusercontent.com/w3c/data-shapes/refs/heads/gh-pages/data-shapes-test-suite/tests/manifest.ttl"); // SHACL
                generateW3cTests("sparql11", "https://w3c.github.io/rdf-tests/sparql/sparql11/manifest.ttl");
        }

        /**
         * Initializes and runs the W3cTestsGenerator for generating W3C tests.
         *
         * @param testName     The name of the test suite to generate tests for.
         * @param manifestUri The path to the manifest file.
         */
        private static void generateW3cTests(String testName, String manifestUri) {
                W3cTestsGenerator generator = new W3cTestsGenerator(testName, URI.create(manifestUri), TESTS_PATH_DIR);
                generator.generate();
        }
}
