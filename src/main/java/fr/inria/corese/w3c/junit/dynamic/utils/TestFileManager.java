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
     * Path string for the corse command line executable JAR.
     */
    public static final String CORESE_COMMAND_PATH_STRING = RESOURCE_PATH_STRING + "corese-command.jar";
    private static boolean updateModeFlag = false; // Indicates if the FileManager will try to update outdated files by
                                                   // dowloading them and comparing them to the existing ones

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
     * Downloads a file from a URI to a local path.
     * If the file already exists locally, and the update mode is enabled,
     * it checks if the local file is identical to the remote file based on their
     * hash.
     * If they are different (or the file doesn't exist locally), the local file is
     * replaced.
     *
     * @param fileUri The URI of the file to load.
     * @throws IOException              If an I/O error occurs during file
     *                                  operations (e.g., download, read, write).
     * @throws NoSuchAlgorithmException If the SHA-256 hashing algorithm is not
     *                                  available for file comparison.
     */
    public static void loadFile(URI fileUri) throws IOException, NoSuchAlgorithmException {
        String localFileFolder = getPrefixedFilename(fileUri); // Use getPrefixedFilename for consistency
        Path localFilePath = Paths.get(RESOURCE_PATH_STRING, localFileFolder); // Combine RESOURCE_PATH_STRING and
                                                                               // prefixed filename

        if ((!Files.exists(localFilePath)) || (isInUpdateMode() && isRemoteFileDifferent(fileUri, localFilePath))) {
            downloadFile(fileUri, localFilePath);
        }
    }

    /**
     * Returns the path to the local copy of a remote file.
     * The local path is constructed by combining the {@link #RESOURCE_PATH_STRING}
     * with a prefixed filename derived from the remote URI.
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
     * @param fileUri       Remote file URI.
     * @param localFilePath Local file path.
     * @return {@code true} if the files are different, {@code false} otherwise.
     * @throws IOException              If an I/O error occurs during file
     *                                  operations.
     * @throws NoSuchAlgorithmException If the SHA-256 algorithm is not available.
     */
    private static boolean isRemoteFileDifferent(URI fileUri, Path localFilePath)
            throws IOException, NoSuchAlgorithmException {
        String localFileHash = hashFile(localFilePath);

        Path tempFile = Files.createTempFile("remote_file", ".tmp");
        try {
            downloadFile(fileUri, tempFile);
            String remoteFileHash = hashFile(tempFile);

            return !localFileHash.equals(remoteFileHash);
        } finally {
            Files.delete(tempFile);
        }
    }

    /**
     * Downloads a file from a URI to a specified local path.
     * It ensures the parent directories of the local path exist before copying the
     * file.
     *
     * @param fileUri       The URI of the file to download.
     * @param localFilePath The {@link Path} where the file should be saved locally.
     * @throws IOException If an I/O error occurs during the download or file
     *                     writing.
     */
    private static void downloadFile(URI fileUri, Path localFilePath) throws IOException {
        Files.createDirectories(localFilePath.getParent());
        try (InputStream in = fileUri.toURL().openStream()) {
            Files.copy(in, localFilePath, StandardCopyOption.REPLACE_EXISTING);
        }
    }

    /**
     * Generates an SHA-256 hash for a given file.
     *
     * @param filePath The {@link Path} to the file.
     * @return The SHA-256 hash of the file in hexadecimal format.
     * @throws NoSuchAlgorithmException If the SHA-256 algorithm is not available.
     * @throws IOException              If an I/O error occurs during file reading.
     */
    private static String hashFile(Path filePath) throws NoSuchAlgorithmException, IOException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        try (InputStream fis = Files.newInputStream(filePath)) {
            byte[] byteArray = new byte[1024];
            int bytesCount;
            while ((bytesCount = fis.read(byteArray)) != -1) {
                digest.update(byteArray, 0, bytesCount);
            }
        }

        byte[] bytes = digest.digest();
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }

    /**
     * Extracts the file name from a URI.
     *
     * @param fileUri The URI of the file.
     * @return The file name as a {@code String}.
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
     * structure.
     * This is used to create a prefixed folder structure for local caching.
     * For rdf11 tests:
     * "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/xmlbase/test.rdf"
     * returns "rdf11/rdf-xml/xmlbase".
     * For other patterns, it falls back to two-segment extraction.
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
            // If not enough segments, return the empty string
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
     * @return A {@code String} representing the prefixed filename for local
     *         storage.
     */
    private static String getPrefixedFilename(URI fileUri) {
        String lastSegments = extractLastURISegments(fileUri);
        String filename = getFileName(fileUri);
        return lastSegments + "/" + filename;
    }

}