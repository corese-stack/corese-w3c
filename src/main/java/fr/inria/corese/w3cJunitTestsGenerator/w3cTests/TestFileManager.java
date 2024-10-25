package fr.inria.corese.w3cJunitTestsGenerator.w3cTests;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class TestFileManager {

    private static final Logger logger = LoggerFactory.getLogger(TestFileManager.class);
    public static final String RESOURCE_PATH_STRING = "src/test/resources/";
    private static boolean updateModeFlag = false; // Indicates if the FileManager will try to update outdated files by dowloading them and comparing them to the existing ones

    private TestFileManager() {
    }

    public static void setUpdateMode(boolean updateMode) {
        updateModeFlag = updateMode;
    }

    public static boolean isInUpdateMode() {
        return updateModeFlag;
    }


    /**
     * Download a file from a URI to a local path and check if the local file is
     * identical to the remote file. Replace the local file if it is different.
     *
     * @param fileUri File URI
     * @throws IOException If an I/O error occurs
     */
    public static void loadFile(URI fileUri) throws IOException, NoSuchAlgorithmException {
        String localFileFolder = getLocalFilePath(fileUri).toString();
        Path localFilePath = Paths.get(localFileFolder);

        if(! Files.exists(localFilePath)) {
            downloadFile(fileUri, localFilePath);
        } else if( isInUpdateMode() && isRemoteFileDifferent(fileUri, localFilePath)) {
                downloadFile(fileUri, localFilePath);
        }
    }

    /**
     *
     * @param remoteFileUri Remote URI that can be used to determine the local path of the file
     * @return The path to the local copy of the file
     */
    public static Path getLocalFilePath(URI remoteFileUri) {
        String localFileFolder = RESOURCE_PATH_STRING + getPrefixedFilename(remoteFileUri);
        return Paths.get(localFileFolder);
    }

    /**
     * Compare two files to check if they are different according to their hash
     * 
     * @param fileUri       Remote file URI
     * @param localFilePath local file path
     * @return true if the files are different, false otherwise
     * @throws IOException If an I/O error occurs
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
     * Download a file from a URI to a local path
     * 
     * @param fileUri       The URI of the file to download
     * @param localFilePath The path to save the file
     * @throws IOException If an I/O error occurs
     */
    public static void downloadFile(URI fileUri, Path localFilePath) throws IOException {
        Files.createDirectories(localFilePath.getParent());
        try (InputStream in = fileUri.toURL().openStream()) {
            Files.copy(in, localFilePath, StandardCopyOption.REPLACE_EXISTING);
        }
    }

    /**
     * Generate a hash for a file
     * 
     * @param filePath Path to the file
     * @return Hash of the file in hexadecimal format
     * @throws NoSuchAlgorithmException If the SHA-256 algorithm is not available
     * @throws IOException If an I/O error occurs
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
     * Extracts the file name from a URI
     * 
     * @param fileUri URI of the file
     * @return file name
     */
    public static String getFileName(URI fileUri) {
        return Paths.get(fileUri.getPath()).getFileName().toString();
    }

    /**
     * Extracts the file name from a Path
     *
     * @param filePath URI of the file
     * @return file name
     */
    public static String getFileName(Path filePath) {
        return getFileName(filePath.toUri());
    }

    /**
     * Extracts the file name from a Path
     *
     * @param filePath URI of the file
     * @return file name
     */
    public static String getFileName(String filePath) {
        return getFileName(URI.create(filePath));
    }


    private static String extractLastURISegments(URI uri) {
        String path = uri.getPath(); // Get the path of the URI
        String[] segments = path.split("/"); // Split the path by slashes

        // Check if there are at least two segments
        if (segments.length >= 3) {
            String lastSegment = segments[segments.length - 2];
            String secondLastSegment = segments[segments.length - 3];

            return secondLastSegment + "/" + lastSegment;
        } else 
        if (segments.length >= 2) {
            return segments[segments.length - 2];
        } else {
            // If not enough segments, return the empty string
            return "";
        }
    }

    private static String getPrefixedFilename(URI fileUri) {
        String lastSegments = extractLastURISegments(fileUri);
        String filename = getFileName(fileUri);
        return lastSegments + "/" + filename;
    }

}