package fr.inria.corese.w3c.junit.dynamic.model;

import java.net.URI;
import java.util.Objects;

/**
 * Represents a named graph fixture with its target graph name and RDF file URI.
 */
public record NamedGraphData(URI name, URI file) {
    public NamedGraphData {
        Objects.requireNonNull(name, "Graph name URI must not be null");
        Objects.requireNonNull(file, "Graph file URI must not be null");
    }

    public static NamedGraphData parse(String entry) {
        if (entry == null) {
            return null;
        }
        String[] parts = entry.split("\\|", 2);
        if (parts.length == 2 && !parts[0].isBlank() && !parts[1].isBlank()) {
            try {
                return new NamedGraphData(URI.create(parts[0]), URI.create(parts[1]));
            } catch (IllegalArgumentException ignored) {
                return null;
            }
        }
        return null;
    }

    @Override
    public String toString() {
        return name + "|" + file;
    }
}
