plugins {
    `java-library`
    signing
}

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies {
    // Corese Engine (Resolved via Composite Build in settings.gradle.kts)
    implementation("fr.inria.corese:corese-core:5.0.0-SNAPSHOT")

    // W3C JSON-LD 1.1 Engine & Standard Jakarta JSON-P
    implementation("com.apicatalog:titanium-json-ld:1.6.0")
    implementation("com.apicatalog:titanium-rdf-api:1.0.0")
    implementation("org.eclipse.parsson:parsson:1.1.7")
    implementation("jakarta.json:jakarta.json-api:2.1.3")

    // Report generation & JSON serialization
    implementation("com.fasterxml.jackson.core:jackson-databind:2.18.0")

    // Logging & Diagnostics
    implementation("org.slf4j:slf4j-api:2.0.17")

    // Testing Framework (JUnit 5 Platform)
    val log4jVersion = "2.24.3"
    testImplementation(platform("org.junit:junit-bom:5.11.3"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    testImplementation("org.junit.platform:junit-platform-launcher")
    runtimeOnly("org.apache.logging.log4j:log4j-core:$log4jVersion")
    runtimeOnly("org.apache.logging.log4j:log4j-slf4j2-impl:$log4jVersion")
}

group = "fr.inria.corese"
version = "5.0.0-SNAPSHOT"
description = "corese-w3c"
java.sourceCompatibility = JavaVersion.VERSION_21

tasks.withType<JavaCompile> {
    options.encoding = "UTF-8"
}

tasks.withType<Javadoc> {
    options.encoding = "UTF-8"
}

tasks.test {
    useJUnitPlatform()
    maxHeapSize = "2g"
    jvmArgs("--enable-native-access=ALL-UNNAMED")

    fun commandOutput(vararg command: String): String {
        val process = ProcessBuilder(command.toList())
            .directory(rootDir)
            .redirectErrorStream(true)
            .start()
        val output = process.inputStream.bufferedReader(Charsets.UTF_8).use { it.readText().trim() }
        if (process.waitFor() != 0 || output.isBlank()) {
            throw GradleException("Command failed while resolving report metadata: ${command.joinToString(" ")}\n$output")
        }
        return output
    }

    val coreCheckout = rootDir.resolve("../corese-core")
    val coreBuildFile = coreCheckout.resolve("build.gradle.kts")
    val configuredCoreVersion = providers.environmentVariable("CORESE_CORE_VERSION").orNull
        ?: Regex("""const\s+val\s+version\s*=\s*"([^"]+)"""")
            .find(coreBuildFile.readText(Charsets.UTF_8))
            ?.groupValues
            ?.get(1)
        ?: throw GradleException("Cannot determine corese-core version from $coreBuildFile")
    val configuredHarnessCommit = providers.environmentVariable("CORESE_W3C_COMMIT").orNull
        ?: commandOutput("git", "rev-parse", "HEAD")
    val configuredCoreCommit = providers.environmentVariable("CORESE_CORE_COMMIT").orNull
        ?: commandOutput("git", "-C", coreCheckout.absolutePath, "rev-parse", "HEAD")
    val configuredRunId = providers.environmentVariable("GITHUB_RUN_ID").orNull
    val configuredRunUrl = providers.environmentVariable("GITHUB_RUN_URL").orNull
    val ci = providers.environmentVariable("GITHUB_ACTIONS").orNull == "true"

    systemProperty("w3c.report.harnessVersion", project.version.toString())
    systemProperty("w3c.report.harnessCommit", configuredHarnessCommit)
    systemProperty("w3c.report.coreVersion", configuredCoreVersion)
    systemProperty("w3c.report.coreCommit", configuredCoreCommit)
    systemProperty("w3c.report.outputDir", layout.buildDirectory.dir("reports").get().asFile.absolutePath)
    systemProperty("w3c.report.ci", ci.toString())
    systemProperty("junit.platform.listeners.autodetection.enabled", "true")
    if (!configuredRunId.isNullOrBlank()) {
        systemProperty("w3c.report.runId", configuredRunId)
    }
    if (!configuredRunUrl.isNullOrBlank()) {
        systemProperty("w3c.report.runUrl", configuredRunUrl)
    }

    doFirst {
        delete(
            layout.buildDirectory.file("reports/w3c-report.json"),
            layout.buildDirectory.file("reports/earl-report.ttl"),
            layout.buildDirectory.file("reports/report-generation.failure")
        )
    }
    doLast {
        val failureMarker = layout.buildDirectory.file("reports/report-generation.failure").get().asFile
        if (failureMarker.isFile) {
            throw GradleException("W3C report generation or validation failed: ${failureMarker.readText(Charsets.UTF_8).trim()}")
        }
    }
}

val syncW3cReports by tasks.registering {
    group = "verification"
    description = "Copies validated W3C JSON and EARL reports into the dashboard data directory."
    val jsonReport = layout.buildDirectory.file("reports/w3c-report.json")
    val earlReport = layout.buildDirectory.file("reports/earl-report.ttl")
    inputs.files(jsonReport, earlReport)
    outputs.files(
        layout.projectDirectory.file("site/data/w3c-report.json"),
        layout.projectDirectory.file("site/data/earl-report.ttl"),
        layout.projectDirectory.file("site/data/report-data.js")
    )
    onlyIf { jsonReport.get().asFile.isFile && earlReport.get().asFile.isFile }
    doLast {
        val dataDirectory = layout.projectDirectory.dir("site/data").asFile
        dataDirectory.mkdirs()
        jsonReport.get().asFile.copyTo(dataDirectory.resolve("w3c-report.json"), overwrite = true)
        earlReport.get().asFile.copyTo(dataDirectory.resolve("earl-report.ttl"), overwrite = true)
        val jsonText = jsonReport.get().asFile.readText(Charsets.UTF_8)
        dataDirectory.resolve("report-data.js")
            .writeText("window.__CORESE_W3C_DATA__ = $jsonText;\n", Charsets.UTF_8)
    }
}

tasks.test {
    finalizedBy(syncW3cReports)
}

tasks.register<JavaExec>("validateEarlReport") {
    group = "verification"
    description = "Validates the generated EARL Turtle with Corese SPARQL."
    dependsOn(tasks.classes)
    classpath = sourceSets.main.get().runtimeClasspath
    mainClass.set("fr.inria.corese.w3c.report.earl.EarlReportValidator")
    args(
        layout.buildDirectory.file("reports/earl-report.ttl").get().asFile.absolutePath,
        layout.buildDirectory.file("reports/w3c-report.json").get().asFile.absolutePath
    )
}

apply(from = "gradle/test-reporter.gradle.kts")
