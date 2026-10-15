package fr.inria.corese.w3c.junit.dynamic.utils;

import fr.inria.corese.core.next.data.Values;
import fr.inria.corese.core.next.storage.api.model.StatementPattern;
import org.junit.jupiter.api.Test;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class W3cStoragesTest {
    @Test
    void selectedManagerActuallyExecutesMutationsAndIsAttestedInReport() {
        String expectedClass = "fr.inria.corese.core.next.storage.impl.memory.MemoryStorageManager";
        try (var storage = W3cStorages.create()) {
            assertEquals(expectedClass, storage.getClass().getName());
            var factory = Values.factory();
            var statement = factory.createStatement(factory.createIRI("urn:witness:s"),
                    factory.createIRI("urn:witness:p"), factory.createLiteral("witness"));
            assertTrue(storage.mutations().add(statement));
            assertEquals(1, storage.queries().count(StatementPattern.of(statement.getSubject(), null, null)));
            assertEquals("memory", W3cStorages.reportMetadata().get("type"));
            assertTrue(((Set<?>) W3cStorages.reportMetadata().get("managerClasses")).contains(expectedClass));
        }
    }

    @Test
    void unsupportedStorageTypeThrowsIllegalArgumentException() {
        String original = System.getProperty("w3c.storage.type");
        try {
            System.setProperty("w3c.storage.type", "nonexistent-backend");
            org.junit.jupiter.api.Assertions.assertThrows(
                    IllegalArgumentException.class, W3cStorages::create);
        } finally {
            if (original != null) {
                System.setProperty("w3c.storage.type", original);
            } else {
                System.clearProperty("w3c.storage.type");
            }
        }
    }
}
