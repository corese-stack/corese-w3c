package fr.inria.corese.w3c;

import fr.inria.corese.w3c.junit.W3cTestsGenerator;
import fr.inria.corese.w3c.junit.w3ctests.TestFileManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

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
         * Private constructor to prevent instantiation of this utility class.
         */
        private Main() {
                // This class is not meant to be instantiated.
        }

        /**
         * Main method to execute the application.
         * It creates and runs a W3cTestsGenerator with specified directories and
         * manifest file.
         *
         * @param args Command line arguments (not used)
         */
        public static void main(String[] args) {
                // Download the latest corese-command jar
                try {
                        TestFileManager.downloadFile(URI.create("https://github.com/corese-stack/corese-command/releases/latest/corese-command.jar"), Path.of("src/test/resources/corese-command.jar")); // FIXME replace me to automatically call corese-command in its latest version
                } catch (IOException e) {
                        logger.error("Could not download corese-command", e);
                }

                // Retrieve the list of standards to test from system properties (passed by Gradle)
                // Defaults to "all" if the property is not defined
                String standardsToTestProp = System.getProperty("w3cStandards", "all");
                List<String> standards = Arrays.asList(standardsToTestProp.split(","));

                // Log the received w3cStandards property and the parsed list
                logger.info("Received w3cStandards property: '{}'", standardsToTestProp);
                logger.info("Parsed standards list: {}", standards);

                // Conditionally generates tests based on the 'w3cStandards' property
                if (standards.contains("all") || standards.contains("nquads")) {
                        logger.info("Generating tests for rdf11nquads...");
                        generateW3cTests("rdf11nquads", "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/manifest.ttl");
                }
                if (standards.contains("all") || standards.contains("ntriples")) {
                        logger.info("Generating tests for rdf11ntriples...");
                        generateW3cTests("rdf11ntriples", "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/manifest.ttl");
                }
                if (standards.contains("all") || standards.contains("xml")) {
                        logger.info("Generating tests for rdf11xml...");
                        generateW3cTests("rdf11xml", "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/manifest.ttl");
                }
                if (standards.contains("all") || standards.contains("trig")) {
                        logger.info("Generating tests for rdf11trig...");
                        generateW3cTests("rdf11trig", "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/manifest.ttl");
                }
                if (standards.contains("all") || standards.contains("turtle")) {
                        logger.info("Generating tests for rdf11turtle...");
                        generateW3cTests("rdf11turtle", "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/manifest.ttl");
                }
                // Uncomment and add 'if' conditions for other standards if necessary:
                // if (standards.contains("all") || standards.contains("canonicalRdf")) {
                // generateW3cTests("canonicalRdf", "https://w3c.github.io/rdf-canon/tests/manifest.ttl");
                // }
                // if (standards.contains("all") || standards.contains("sparql10")) {
                // generateW3cTests("sparql10", "https://w3c.github.io/rdf-tests/sparql/sparql10/manifest.ttl");
                // }
                // if (standards.contains("all") || standards.contains("shacl")) {
                // generateW3cTests("shacl", "https://raw.githubusercontent.com/w3c/data-shapes/refs/heads/gh-pages/data-shapes-test-suite/tests/manifest.ttl");
                // }
                // if (standards.contains("all") || standards.contains("sparql11")) {
                // generateW3cTests("sparql11", "https://w3c.github.io/rdf-tests/sparql/sparql11/manifest.ttl");
                // }
                logger.info("W3C test generation process completed.");
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
