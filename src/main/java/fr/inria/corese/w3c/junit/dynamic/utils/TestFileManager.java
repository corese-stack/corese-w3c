package fr.inria.corese.w3c.junit.dynamic.utils;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Manages test files, including downloading, loading, and comparing them.
 * This utility class provides methods to handle local storage of remote test
 * resources,
 * ensuring they are up-to-date and providing utility functions for file path
 * manipulation.
 */
public class TestFileManager {

    /**
     * The base path string for test resources. Files downloaded or accessed by this
     * manager
     * will typically reside in this directory.
     */
    public static final String RESOURCE_PATH_STRING = "src/test/resources/";
    /**
     * Path string for the corese command line executable JAR.
     */
    public static final String CORESE_COMMAND_PATH_STRING = RESOURCE_PATH_STRING + "corese-command.jar";

    /**
     * Flag indicating whether to check and update outdated cached files.
     * When enabled, the manager compares local and remote file hashes.
     */
    private static boolean updateModeFlag = false;

    /**
     * Private constructor to prevent instantiation of this utility class.
     */
    private TestFileManager() {
    }

    /**
     * Checks if the TestFileManager is currently in update mode.
     *
     * @return {@code true} if update mode is enabled, {@code false} otherwise.
     */
    public static boolean isInUpdateMode() {
        return updateModeFlag;
    }

    /**
     * Loads a file from the given URI, downloading it from W3C if necessary.
     *
     *
     * @param fileUri the URI of the file to load (can be a local file:// URI or remote http(s):// URI)
     * @throws IOException if an I/O error occurs during file operations
     * @throws NoSuchAlgorithmException if SHA-256 hashing algorithm is unavailable
     */
    public static void loadFile(URI fileUri) throws IOException, NoSuchAlgorithmException {
        String localFileFolder = getPrefixedFilename(fileUri); // Use getPrefixedFilename for consistency
        Path localFilePath = Paths.get(RESOURCE_PATH_STRING, localFileFolder); // Combine RESOURCE_PATH_STRING and
                                                                               // prefixed filename

        if ((!Files.exists(localFilePath)) || (isInUpdateMode() && isRemoteFileDifferent(fileUri, localFilePath))) {
            downloadFile(fileUri, localFilePath);
        }

        return null;
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
     * Compares two files to check if they are different based on their SHA-256
     * hash.
     * A temporary file is downloaded for the remote URI to perform the hash
     * comparison.
     *
     * @param remoteUri the remote file URI
     * @param localFilePath the local cached file path
     * @return {@code true} if the files differ, {@code false} if they are identical
     * @throws IOException if an I/O error occurs
     * @throws NoSuchAlgorithmException if SHA-256 algorithm is unavailable
     */
    private static boolean isRemoteFileDifferent(URI remoteUri, Path localFilePath)
            throws IOException, NoSuchAlgorithmException {
        String localFileHash = hashFile(localFilePath);

        Path tempFile = Files.createTempFile("remote_file", ".tmp");
        try {
            downloadFile(remoteUri, tempFile);
            String remoteFileHash = hashFile(tempFile);

            return !localFileHash.equals(remoteFileHash);
        } finally {
            Files.delete(tempFile);
        }
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
        Files.createDirectories(localFilePath.getParent());

        try (InputStream in = remoteUri.toURL().openStream()) {
            Files.copy(in, localFilePath, StandardCopyOption.REPLACE_EXISTING);
        }
    }

    /**
     * Computes the SHA-256 hash of a file.
     *
     * @param filePath the path to the file
     * @return the SHA-256 hash in hexadecimal format
     * @throws NoSuchAlgorithmException if SHA-256 algorithm is unavailable
     * @throws IOException if an I/O error occurs while reading the file
     */
    private static String hashFile(Path filePath) throws NoSuchAlgorithmException, IOException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");

        try (InputStream fis = Files.newInputStream(filePath)) {
            byte[] buffer = new byte[8192];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                digest.update(buffer, 0, bytesRead);
            }
        }

        return bytesToHex(digest.digest());
    }

    /**
     * Converts a byte array to a hexadecimal string.
     *
     * @param bytes the byte array
     * @return the hexadecimal representation
     */
    private static String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder(bytes.length * 2);
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
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

        // Special handling for rdf11 test patterns
        // Look for rdf11 in the path and extract accordingly
        for (int i = 0; i < segments.length - 2; i++) {
            if ("rdf11".equals(segments[i])) {
                // Found rdf11, extract from this point to the end (excluding filename)
                StringBuilder result = new StringBuilder();
                for (int j = i; j < segments.length - 1; j++) {
                    if (result.length() > 0) {
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