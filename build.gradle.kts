import java.io.ByteArrayOutputStream
import org.gradle.api.tasks.JavaExec

plugins {
    `java-library`
    id("com.gradleup.shadow") version "8.3.1"
    application
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
project.setProperty("mainClassName","fr.inria.corese.w3c.Main")


tasks.withType<JavaCompile>() {
    options.encoding = "UTF-8"
}

tasks.withType<Javadoc>() {
    options.encoding = "UTF-8"
}

tasks {
    named<JavaExec>("run") {
        group = "application"
        description = "Runs this project as a JVM application"

        doFirst {
            val w3cStandardsFromGradleJVM = System.getProperty("w3cStandards")
            val w3cStandardsFromGradle = project.findProperty("w3cStandards") as String?

            if (w3cStandardsFromGradleJVM != null) {
                systemProperties["w3cStandards"] = w3cStandardsFromGradleJVM
            } else if (w3cStandardsFromGradle != null) {
                systemProperties["w3cStandards"] = w3cStandardsFromGradle
            } else {
                systemProperties["w3cStandards"] = "all"
            }
        }
    }
    test {
        useJUnitPlatform()
    }
    shadowJar {
        manifest {
            attributes(
                "Main-Class" to "fr.inria.corese.w3c.Main"
            )
        }
        this.archiveClassifier = "app"
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

    doFirst {
        var needsBuild = false
        var buildReason = ""

        if (!coreseCoreDir.exists()) {
            logger.lifecycle("Corese-core directory missing. Initial cloning...")
            val coreseCoreBranch = project.findProperty("coreseCoreBranch") as String? ?: "feature/corese-next"

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

    doFirst {
        if (!coreseCoreDir.exists()) {
            logger.lifecycle("Corese-core directory missing. Initial cloning...")
            val coreseCoreBranch = project.findProperty("coreseCoreBranch") as String? ?: "feature/corese-next"

            exec {
                commandLine("git", "clone", "https://github.com/corese-stack/corese-core.git")
            }

            // Checkout the specified branch
            exec {
                commandLine("git", "checkout", coreseCoreBranch)
                workingDir = coreseCoreDir
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
