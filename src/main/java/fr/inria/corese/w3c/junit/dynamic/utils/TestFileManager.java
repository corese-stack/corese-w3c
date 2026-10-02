package fr.inria.corese.w3c.junit.dynamic.utils;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

/**
 * Caches downloaded test fixtures locally. Existing files are reused until removed.
 */
public class TestFileManager {

    /**
     * The base path string for test resources. Files downloaded or accessed by this
     * manager
     * will typically reside in this directory.
     */
    public static final String RESOURCE_PATH_STRING = "src/test/resources/";
    /**
     * Private constructor to prevent instantiation of this utility class.
     */
    private TestFileManager() {
    }

    /**
     * Loads a file from the given URI, downloading it from W3C if necessary.
     *
     *
     * @param fileUri the URI of the file to load (can be a local file:// URI or remote http(s):// URI)
     * @throws IOException if an I/O error occurs during file operations
     */
    public static void loadFile(URI fileUri) throws IOException {
        String localFileFolder = getPrefixedFilename(fileUri);
        Path localFilePath = Paths.get(RESOURCE_PATH_STRING, localFileFolder);

        if (!Files.exists(localFilePath)) {
            downloadFile(fileUri, localFilePath);
        }
    }

    /**
     * Extracts the relative path portion after a pattern match.
     * Handles both Windows and Unix path separators.
     *
     * @param remoteFileUri The remote URI that can be used to determine the local
     *                      path of the file.
     * @return The {@link Path} to the local copy of the file.
     */
    public static Path getLocalFilePath(URI remoteFileUri) {
        String localFileFolder = getPrefixedFilename(remoteFileUri);
        return Paths.get(RESOURCE_PATH_STRING, localFileFolder);
    }

    /**
     * Downloads a file from a remote URI to a local path.
     * Creates parent directories if they don't exist.
     *
     * @param remoteUri the URI of the file to download
     * @param localFilePath the destination path for the downloaded file
     * @throws IOException if an I/O error occurs during download
     */
    private static void downloadFile(URI remoteUri, Path localFilePath) throws IOException {
        if (localFilePath.getParent() != null) {
            Files.createDirectories(localFilePath.getParent());
        }

        IOException lastException = null;
        for (int attempt = 1; attempt <= 3; attempt++) {
            try {
                if (downloadAttempt(remoteUri, localFilePath)) return;
            } catch (IOException e) {
                lastException = e;
                try {
                    Thread.sleep(500L * attempt);
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    throw new IOException("Download interrupted for " + remoteUri, ie);
                }
            }
        }

        throw lastException != null ? lastException : new IOException("Failed to download: " + remoteUri);
    }

    private static boolean downloadAttempt(URI remoteUri, Path localFilePath) throws IOException {
        URL url = remoteUri.toURL();
        for (int redirectCount = 0; redirectCount < 5; redirectCount++) {
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setInstanceFollowRedirects(true);
            conn.setConnectTimeout(15000);
            conn.setReadTimeout(20000);
            conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)");
            int status = conn.getResponseCode();

            if (isRedirect(status)) {
                String location = conn.getHeaderField("Location");
                conn.disconnect();
                if (location != null && !location.isBlank()) {
                    url = URI.create(location).isAbsolute() ? URI.create(location).toURL() : remoteUri.resolve(location).toURL();
                    continue;
                }
            }

            if (status >= 400) {
                conn.disconnect();
                throw new IOException("HTTP " + status + " error while downloading: " + remoteUri);
            }

            try (InputStream in = conn.getInputStream()) {
                Files.copy(in, localFilePath, StandardCopyOption.REPLACE_EXISTING);
            } finally {
                conn.disconnect();
            }
            sanitizeIfTtlManifest(localFilePath);
            return true;
        }
        return false;
    }

    private static boolean isRedirect(int status) {
        return status == HttpURLConnection.HTTP_MOVED_PERM || status == HttpURLConnection.HTTP_MOVED_TEMP
                || status == HttpURLConnection.HTTP_SEE_OTHER || status == 307 || status == 308;
    }

    private static void sanitizeIfTtlManifest(Path localFilePath) {
        if (localFilePath.toString().endsWith("manifest.ttl")) {
            try {
                String content = Files.readString(localFilePath);
                if (content.contains("\\\"\"\"\"")) {
                    String sanitized = content.replace("\\\"\"\"\"", "\\\" \"\"\"");
                    Files.writeString(localFilePath, sanitized);
                }
            } catch (IOException e) {
                // Ignore if unable to read/write
            }
        }
    }

    /**
     * Extracts the file name from a URI.
     *
     * @param fileUri the URI
     * @return the file name
     */
    private static String getFileName(URI fileUri) {
        try {
            return Paths.get(fileUri).getFileName().toString();
        } catch (Exception e) {
            String path = fileUri.getPath();
            int lastSlash = path.lastIndexOf('/');
            return lastSlash >= 0 ? path.substring(lastSlash + 1) : path;
        }
    }

    /**
     * Extracts the relevant segments from the URI path to create local folder
     * structure. This is used to create a prefixed folder structure for local caching.
     *
     * @param uri The URI from which to extract segments.
     * @return A string representing the last relevant path segments, or an empty
     *         string if not enough segments.
     */
    private static String extractLastURISegments(URI uri) {
        String path = uri.getPath(); // Get the path of the URI
        String[] segments = path.split("/"); // Split the path by slashes

        // Special handling for rdf11 and sparql test patterns
        // Look for rdf11 or sparql in the path and extract accordingly
        for (int i = 0; i < segments.length - 2; i++) {
            if ("rdf11".equals(segments[i]) || "sparql".equals(segments[i])) {
                // Found rdf11 or sparql, extract from this point to the end (excluding filename)
                StringBuilder result = new StringBuilder();
                for (int j = i; j < segments.length - 1; j++) {
                    if (!result.isEmpty()) {
                        result.append("/");
                    }
                    result.append(segments[j]);
                }
                return result.toString();
            }
        }

        // Fallback: original two-segment logic for other tests
        if (segments.length >= 3) {
            String lastSegment = segments[segments.length - 2];
            String secondLastSegment = segments[segments.length - 3];

            return secondLastSegment + "/" + lastSegment;
        } else if (segments.length >= 2) {
            return segments[segments.length - 2];
        } else {
            return "";
        }
    }

    /**
     * Generates a prefixed filename for local storage based on the remote file's
     * URI.
     * This method combines relevant path segments from the URI with the actual
     * filename
     * to create a unique and organized local file path.
     *
     * @param fileUri The URI of the remote file.
     * @return A {@code String} representing the prefixed filename for local storage.
     */
    private static String getPrefixedFilename(URI fileUri) {
        String lastSegments = extractLastURISegments(fileUri);
        String filename = getFileName(fileUri);
        return lastSegments + "/" + filename;
    }
}