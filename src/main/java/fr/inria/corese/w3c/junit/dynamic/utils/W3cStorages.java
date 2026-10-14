package fr.inria.corese.w3c.junit.dynamic.utils;

import fr.inria.corese.core.next.storage.Storages;
import fr.inria.corese.core.next.storage.api.StorageManager;

import java.util.Map;
import java.util.Set;
import java.util.TreeSet;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

/** System-under-test storage provider using canonical MemoryStorageManager. */
public final class W3cStorages {
    private static final String TYPE_MEMORY = "memory";
    private static final Set<String> CLASSES = ConcurrentHashMap.newKeySet();
    private static final AtomicLong INSTANCES = new AtomicLong();
    private W3cStorages() { }

    public static StorageManager create() {
        String type = System.getProperty("w3c.storage.type", TYPE_MEMORY);
        if (!TYPE_MEMORY.equalsIgnoreCase(type)) {
            throw new IllegalArgumentException(
                    "Unsupported w3c.storage.type: '" + type + "'. Only 'memory' is supported.");
        }
        StorageManager storage = Storages.create();
        CLASSES.add(storage.getClass().getName());
        INSTANCES.incrementAndGet();
        return storage;
    }

    public static Map<String, Object> reportMetadata() {
        return Map.of("type", TYPE_MEMORY,
                "managerClasses", new TreeSet<>(CLASSES), "instancesCreated", INSTANCES.get(),
                "scope", "Executor models and evaluation repositories; manifests and EARL use separate infrastructure");
    }
}
