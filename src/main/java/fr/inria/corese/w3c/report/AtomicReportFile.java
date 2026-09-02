package fr.inria.corese.w3c.report;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.AtomicMoveNotSupportedException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

/** UTF-8 atomic replacement used by public report artifacts. */
public final class AtomicReportFile {
    private AtomicReportFile() {
    }

    public static void write(Path destination, String content) throws IOException {
        Path absolute = destination.toAbsolutePath();
        Path directory = absolute.getParent();
        if (directory == null) {
            throw new IllegalArgumentException("Report destination has no parent directory: " + destination);
        }
        Files.createDirectories(directory);
        Path temporary = Files.createTempFile(directory, "." + absolute.getFileName(), ".tmp");
        boolean moved = false;
        try {
            Files.writeString(temporary, content, StandardCharsets.UTF_8);
            try {
                Files.move(temporary, absolute, StandardCopyOption.ATOMIC_MOVE,
                        StandardCopyOption.REPLACE_EXISTING);
            } catch (AtomicMoveNotSupportedException exception) {
                Files.move(temporary, absolute, StandardCopyOption.REPLACE_EXISTING);
            }
            moved = true;
        } finally {
            if (!moved) {
                Files.deleteIfExists(temporary);
            }
        }
    }
}
