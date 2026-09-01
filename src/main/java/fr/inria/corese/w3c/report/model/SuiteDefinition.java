package fr.inria.corese.w3c.report.model;

import java.net.URI;
import java.util.Objects;

/** Stable, explicit metadata for one official W3C test suite. */
public record SuiteDefinition(
        String suiteId,
        String displayName,
        Component component,
        URI specificationUri,
        URI manifestUri,
        Transport transport) {

    public SuiteDefinition {
        requireText(suiteId, "suiteId");
        requireText(displayName, "displayName");
        Objects.requireNonNull(component, "component");
        requireAbsolute(specificationUri, "specificationUri");
        requireAbsolute(manifestUri, "manifestUri");
        Objects.requireNonNull(transport, "transport");
    }

    private static void requireText(String value, String name) {
        Objects.requireNonNull(value, name);
        if (value.isBlank()) {
            throw new IllegalArgumentException(name + " must not be blank");
        }
    }

    private static void requireAbsolute(URI value, String name) {
        Objects.requireNonNull(value, name);
        if (!value.isAbsolute()) {
            throw new IllegalArgumentException(name + " must be absolute: " + value);
        }
    }
}
