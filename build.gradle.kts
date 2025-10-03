import java.io.ByteArrayOutputStream

plugins {
    `java-library`
    signing
}

repositories {
    mavenLocal()
    mavenCentral()
}

configurations.all {
    resolutionStrategy {
        force(
            "org.slf4j:jcl-over-slf4j:1.8.0-beta4",
            "org.slf4j:slf4j-api:1.8.0-beta4",
            "org.slf4j:slf4j-log4j12:1.8.0-beta4",
            "org.apache.logging.log4j:log4j-slf4j18-impl:2.18.0")
    }
}

dependencies {
    implementation("fr.com.hp.hpl.jena.rdf.arp:arp:2.2.b")

    implementation("org.apache.jena:jena-arq:5.1.0")
    implementation("org.apache.jena:jena-tdb:4.10.0")
    implementation("org.apache.jena:jena-core:5.1.0")

    implementation("org.apache.commons:commons-lang3:3.17.0")
    implementation("org.apache.httpcomponents.client5:httpclient5:5.3.1")
    implementation("org.apache.httpcomponents:httpcore-osgi:4.4.16")

    implementation("org.javassist:javassist:3.30.2-GA")

    implementation("org.glassfish.hk2:osgi-resource-locator:2.4.0")

    implementation("org.jspecify:jspecify:1.0.0")

    implementation("com.ibm.icu:icu4j:75.1")

    implementation("com.github.jsonld-java:jsonld-java:0.13.6")
    implementation("com.fasterxml.jackson.core:jackson-databind:2.18.0")

    implementation("xerces:xercesImpl:2.12.2")

    implementation("commons-logging:commons-logging:1.3.4")

    val lo4j_version = "2.18.0"
    implementation("org.apache.logging.log4j:log4j-api:${lo4j_version}")
    implementation("org.apache.logging.log4j:log4j-core:${lo4j_version}")
    implementation("org.slf4j:slf4j-api:1.8.0-beta2")
    testImplementation("org.apache.logging.log4j:log4j-api:${lo4j_version}")
    testImplementation("org.apache.logging.log4j:log4j-core:${lo4j_version}")
    testImplementation("org.slf4j:slf4j-api:1.8.0-beta2")

    implementation("jakarta.activation:jakarta.activation-api:2.1.3")

    testImplementation("org.junit.jupiter:junit-jupiter-api:5.9.2")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.9.2")

    implementation(files(project.findProperty("coreseCorePath")?.let { "$it/build/libs/corese-core-jar-with-dependencies.jar" } ?: "corese-core/build/libs/corese-core-jar-with-dependencies.jar"))
}

group = "fr.inria.corese"
version = "5.0.0-SNAPSHOT"
description = "corese-w3c"
java.sourceCompatibility = JavaVersion.VERSION_21
// No main class needed - this is a test-only project


tasks.withType<JavaCompile>() {
    options.encoding = "UTF-8"
}

tasks.withType<Javadoc>() {
    options.encoding = "UTF-8"
}

tasks {
    test {
        useJUnitPlatform()
        
        // Configuration d'affichage détaillé des tests 
        testLogging {
            events("started", "passed", "skipped", "failed")
            showExceptions = true
            showCauses = true
            showStackTraces = false
            exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.SHORT
            displayGranularity = 2
            showStandardStreams = false
        }
        
        // Force l'affichage des statistiques de test
        finalizedBy("displayTestResults")
    }
}

// Task personnalisé pour afficher un résumé propre des tests
tasks.register("displayTestResults") {
    doLast {
        val testTask = tasks.getByName("test") as Test
        val testResults = testTask.reports.junitXml.outputLocation.get().asFile
        
        if (testResults.exists()) {
            val xmlFiles = testResults.listFiles()?.filter { it.name.startsWith("TEST-") && it.name.endsWith(".xml") }
            
            var totalTests = 0
            var passedTests = 0
            var failedTests = 0
            var skippedTests = 0
            
            xmlFiles?.forEach { xmlFile ->
                val content = xmlFile.readText()
                val testsMatch = "tests=\"(\\d+)\"".toRegex().find(content)
                val failuresMatch = "failures=\"(\\d+)\"".toRegex().find(content)
                val errorsMatch = "errors=\"(\\d+)\"".toRegex().find(content)
                val skippedMatch = "skipped=\"(\\d+)\"".toRegex().find(content)
                
                val tests = testsMatch?.groupValues?.get(1)?.toIntOrNull() ?: 0
                val failures = failuresMatch?.groupValues?.get(1)?.toIntOrNull() ?: 0
                val errors = errorsMatch?.groupValues?.get(1)?.toIntOrNull() ?: 0
                val skipped = skippedMatch?.groupValues?.get(1)?.toIntOrNull() ?: 0
                
                totalTests += tests
                failedTests += failures + errors
                skippedTests += skipped
                passedTests += (tests - failures - errors - skipped)
            }
            
            val percentage = if (totalTests > 0) {
                String.format("%.1f", (passedTests.toDouble() / totalTests.toDouble()) * 100)
            } else "0.0"
            
            println()
            println("╔═══════════════════════════════════════════════════════════════╗")
            println("║                       TEST RESULTS                            ║")
            println("╠═══════════════════════════════════════════════════════════════╣")
            
            // Format with precise alignment
            val totalLine = String.format("║ Total Tests     : %4d                                        ║", totalTests)
            val passedLine = String.format("║ ✅ Passed       : %4d (%5s%%)                               ║", passedTests, percentage)
            val failedLine = String.format("║ ❌ Failed       : %4d                                        ║", failedTests)
            val skippedLine = String.format("║ ⏭️  Skipped      : %4d                                        ║", skippedTests)
            
            println(totalLine)
            println(passedLine)
            println(failedLine)
            println(skippedLine)
            
            println("╠═══════════════════════════════════════════════════════════════╣")
            val statusIcon = if (failedTests > 0) "❌" else "✅"
            val statusText = if (failedTests > 0) "FAILURE" else "SUCCESS"
            val statusLine = String.format("║ FINAL STATUS    : %s %-8s                                 ║", statusIcon, statusText)
            println(statusLine)
            println("╚═══════════════════════════════════════════════════════════════╝")
            println()
        } else {
            println()
            println("═══════════════════════════════════════════════════════════════")
            println("                   NO TEST RESULTS FOUND")
            println("═══════════════════════════════════════════════════════════════")
            println()
        }
    }
}

// Helper function to get current commit hash from a git repository (local only)
fun getLocalCommitHash(repoDir: File): String? {
    return try {
        val output = ByteArrayOutputStream()
        exec {
            commandLine("git", "rev-parse", "HEAD")
            workingDir = repoDir
            standardOutput = output
        }
        output.toString().trim()
    } catch (e: Exception) {
        null
    }
}

// Helper function to check if there are uncommitted changes
fun hasUncommittedChanges(repoDir: File): Boolean {
    return try {
        val output = ByteArrayOutputStream()
        exec {
            commandLine("git", "status", "--porcelain")
            workingDir = repoDir
            standardOutput = output
        }
        output.toString().trim().isNotEmpty()
    } catch (e: Exception) {
        false
    }
}

tasks.register("getCoreseCore") {
    group = "corese"
    description = "Build corese-core only if local commits have changed (no remote interaction)"

    // Using layout.buildDirectory for the lastCommitHashFile path
    val lastCommitHashFile = layout.buildDirectory.file("corese-core-last-commit-hash.txt").get().asFile

    // Allow custom corese-core path via project property, otherwise use local directory
    val coreseCorePath = project.findProperty("coreseCorePath") as String? ?: "corese-core"
    val coreseCoreDir = File(coreseCorePath)
    val coreseCoreJar = File(coreseCoreDir, "build/libs/corese-core-jar-with-dependencies.jar")
    
    // Validate custom corese-core path if provided by user
    if (project.hasProperty("coreseCorePath")) {
        val customPath = project.findProperty("coreseCorePath") as String
        if (!File(customPath).exists()) {
            throw GradleException("ERROR: Custom corese-core path '$customPath' does not exist!")
        } else if (!File(customPath, ".git").exists()) {
            throw GradleException("ERROR: Custom corese-core path '$customPath' is not a git repository!")
        }
    }

    doFirst {
        var needsBuild = false
        var buildReason = ""

        if (!coreseCoreDir.exists()) {
            logger.lifecycle("Corese-core directory missing. Initial cloning...")
            val coreseCoreBranch = System.getProperty("coreseCoreBranch") 
                ?: project.findProperty("coreseCoreBranch") as String? 
                ?: "feature/corese-next"

            exec {
                commandLine("git", "clone", "https://github.com/corese-stack/corese-core.git")
            }

            // Checkout the specified branch
            exec {
                commandLine("git", "checkout", coreseCoreBranch)
                workingDir = coreseCoreDir
            }

            needsBuild = true
            buildReason = "Initial cloning"
        }

        val gitDir = File(coreseCoreDir, ".git")
        if (!gitDir.exists()) {
            logger.lifecycle("WARNING: corese-core is not a git repository. Building anyway...")
            needsBuild = true
            buildReason = "Not a git repository"
        } else {
            // Always ensure we're on the correct branch
            val requestedBranch = System.getProperty("coreseCoreBranch") 
                ?: project.findProperty("coreseCoreBranch") as String? 
                ?: "feature/corese-next" // Default branch
            
            // Get current branch
            val currentBranch = try {
                val output = ByteArrayOutputStream()
                exec {
                    commandLine("git", "branch", "--show-current")
                    workingDir = coreseCoreDir
                    standardOutput = output
                }
                output.toString().trim()
            } catch (e: Exception) {
                null
            }
            
            // Switch branch if needed
            if (currentBranch != requestedBranch) {
                // Validate that the requested branch/commit exists
                try {
                    exec {
                        commandLine("git", "fetch", "origin")
                        workingDir = coreseCoreDir
                    }
                    
                    // Check if it's a valid branch or commit
                    val checkOutput = ByteArrayOutputStream()
                    val checkResult = exec {
                        commandLine("git", "rev-parse", "--verify", requestedBranch)
                        workingDir = coreseCoreDir
                        standardOutput = checkOutput
                        isIgnoreExitValue = true
                    }
                    
                    if (checkResult.exitValue != 0) {
                        // Try with origin/ prefix for remote branches
                        val remoteCheckOutput = ByteArrayOutputStream()
                        val remoteCheckResult = exec {
                            commandLine("git", "rev-parse", "--verify", "origin/$requestedBranch")
                            workingDir = coreseCoreDir
                            standardOutput = remoteCheckOutput
                            isIgnoreExitValue = true
                        }
                        
                        if (remoteCheckResult.exitValue != 0) {
                            throw GradleException("ERROR: Branch/commit '$requestedBranch' does not exist in corese-core repository!")
                        }
                    }
                } catch (e: GradleException) {
                    throw e // Re-throw our validation errors
                } catch (e: Exception) {
                    throw GradleException("ERROR: Failed to validate branch/commit '$requestedBranch': ${e.message}")
                }
                
                try {
                    logger.lifecycle("Switching to branch/commit: $requestedBranch (currently on: $currentBranch)")
                    exec {
                        commandLine("git", "fetch", "origin")
                        workingDir = coreseCoreDir
                    }
                    exec {
                        commandLine("git", "checkout", requestedBranch)
                        workingDir = coreseCoreDir
                    }
                    exec {
                        commandLine("git", "pull", "origin", requestedBranch)
                        workingDir = coreseCoreDir
                        isIgnoreExitValue = true // Ignore failure for commits/detached HEAD
                    }
                    needsBuild = true
                    buildReason = "Branch/commit switched to $requestedBranch"
                } catch (e: Exception) {
                    throw GradleException("ERROR: Failed to switch to branch/commit '$requestedBranch': ${e.message}")
                }
            }
            
            logger.lifecycle("Checking local commits in corese-core...")

            // Get current local commit hash
            val currentCommitHash = getLocalCommitHash(coreseCoreDir)

            if (currentCommitHash == null) {
                logger.lifecycle("WARNING: Could not get commit hash. Building anyway...")
                needsBuild = true
                buildReason = "Could not get commit hash"
            } else {
                // Read last built commit hash if exists
                val lastCommitHash = if (lastCommitHashFile.exists()) {
                    lastCommitHashFile.readText().trim()
                } else {
                    null
                }

                logger.lifecycle("Current local commit: $currentCommitHash")
                logger.lifecycle("Last compiled commit: $lastCommitHash")

                // Check for uncommitted changes
                val hasChanges = hasUncommittedChanges(coreseCoreDir)
                if (hasChanges) {
                    logger.lifecycle("Uncommitted changes detected in corese-core")
                }

                // Determine if we need to build
                when {
                    lastCommitHash == null -> {
                        needsBuild = true
                        buildReason = "First compilation"
                    }
                    currentCommitHash != lastCommitHash -> {
                        needsBuild = true
                        buildReason = "New local commit detected"
                    }
                    hasChanges -> {
                        needsBuild = true
                        buildReason = "Uncommitted changes detected"
                    }
                    !coreseCoreJar.exists() -> {
                        needsBuild = true
                        buildReason = "JAR missing"
                    }
                    else -> {
                        logger.lifecycle("No changes detected. Compilation skipped.")
                    }
                }
            }
        }

        if (needsBuild) {
            logger.lifecycle("Corese-core compilation needed: $buildReason")

            // Build corese-core
            val osName = System.getProperty("os.name").lowercase()
            if (osName.contains("win")) {
                exec {
                    commandLine("gradlew.bat", "clean", "build", "-x", "test")
                    workingDir = coreseCoreDir
                }
            } else {
                exec {
                    commandLine("./gradlew", "clean", "build", "-x", "test")
                    workingDir = coreseCoreDir
                }
            }

            // Save the commit hash we just built (if available)
            val currentCommitHash = getLocalCommitHash(coreseCoreDir)
            if (currentCommitHash != null) {
                layout.buildDirectory.get().asFile.mkdirs()
                lastCommitHashFile.writeText(currentCommitHash)
                logger.lifecycle("Compilation finished. Commit hash saved: $currentCommitHash")
            } else {
                logger.lifecycle("Compilation finished. (Commit hash not available)")
            }
        }
    }
}

// Force rebuild task for development
tasks.register("forceBuildCoreseCore") {
    group = "corese"
    description = "Force rebuild of corese-core (ignoring commit checks)"

    val lastCommitHashFile = layout.buildDirectory.file("corese-core-last-commit-hash.txt").get().asFile

    val coreseCorePath = project.findProperty("coreseCorePath") as String? ?: "corese-core"
    val coreseCoreDir = File(coreseCorePath)
    
    // Validate custom corese-core path if provided by user
    if (project.hasProperty("coreseCorePath")) {
        val customPath = project.findProperty("coreseCorePath") as String
        if (!File(customPath).exists()) {
            throw GradleException("ERROR: Custom corese-core path '$customPath' does not exist!")
        } else if (!File(customPath, ".git").exists()) {
            throw GradleException("ERROR: Custom corese-core path '$customPath' is not a git repository!")
        }
    }

    doFirst {
        if (!coreseCoreDir.exists()) {
            logger.lifecycle("Corese-core directory missing. Initial cloning...")
            val coreseCoreBranch = System.getProperty("coreseCoreBranch") 
                ?: project.findProperty("coreseCoreBranch") as String? 
                ?: "feature/corese-next"

            exec {
                commandLine("git", "clone", "https://github.com/corese-stack/corese-core.git")
            }

            // Validate that the requested branch/commit exists before checkout
            try {
                exec {
                    commandLine("git", "fetch", "origin")
                    workingDir = coreseCoreDir
                }
                
                // Check if it's a valid branch or commit
                val checkOutput = ByteArrayOutputStream()
                val checkResult = exec {
                    commandLine("git", "rev-parse", "--verify", coreseCoreBranch)
                    workingDir = coreseCoreDir
                    standardOutput = checkOutput
                    isIgnoreExitValue = true
                }
                
                if (checkResult.exitValue != 0) {
                    // Try with origin/ prefix for remote branches
                    val remoteCheckOutput = ByteArrayOutputStream()
                    val remoteCheckResult = exec {
                        commandLine("git", "rev-parse", "--verify", "origin/$coreseCoreBranch")
                        workingDir = coreseCoreDir
                        standardOutput = remoteCheckOutput
                        isIgnoreExitValue = true
                    }
                    
                    if (remoteCheckResult.exitValue != 0) {
                        throw GradleException("ERROR: Branch/commit '$coreseCoreBranch' does not exist in corese-core repository!")
                    }
                }
            } catch (e: GradleException) {
                throw e // Re-throw our validation errors
            } catch (e: Exception) {
                throw GradleException("ERROR: Failed to validate branch/commit '$coreseCoreBranch': ${e.message}")
            }

            // Checkout the specified branch
            try {
                exec {
                    commandLine("git", "checkout", coreseCoreBranch)
                    workingDir = coreseCoreDir
                }
            } catch (e: Exception) {
                throw GradleException("ERROR: Failed to checkout branch/commit '$coreseCoreBranch': ${e.message}")
            }
        }

        logger.lifecycle("Forcing corese-core compilation...")

        // Build corese-core
        val osName = System.getProperty("os.name").lowercase()
        if (osName.contains("win")) {
            exec {
                commandLine("gradlew.bat", "clean", "build", "-x", "test")
                workingDir = coreseCoreDir
            }
        } else {
            exec {
                commandLine("./gradlew", "clean", "build", "-x", "test")
                workingDir = coreseCoreDir
            }
        }

        // Update the commit hash
        val currentCommitHash = getLocalCommitHash(coreseCoreDir)
        if (currentCommitHash != null) {
            layout.buildDirectory.get().asFile.mkdirs()
            lastCommitHashFile.writeText(currentCommitHash)
            logger.lifecycle("Forced compilation finished. Commit hash saved: $currentCommitHash")
        } else {
            logger.lifecycle("Forced compilation finished. (Commit hash not available)")
        }
    }
}

// getCoreseCore must be executed before compilation
tasks.named("compileJava") {
    dependsOn(tasks.named("getCoreseCore"))
}

tasks.register<Delete>("cleanCoreseCore") {
    group = "corese"
    description = "Delete the directory of the cloned corese-core repository"
    delete(File("corese-core"))
}

tasks.register<Delete>("cleanCoreseCoreCommitHash") {
    group = "corese"
    description = "Delete the stored commit hash file"
    delete(layout.buildDirectory.file("corese-core-last-commit-hash.txt").get().asFile)
}

tasks.named("clean") {
    dependsOn(tasks.named("cleanCoreseCore"))
    dependsOn(tasks.named("cleanCoreseCoreCommitHash"))
}

java {
    withJavadocJar()
    withSourcesJar()
    sourceCompatibility = JavaVersion.VERSION_21
}
