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

    testImplementation("junit:junit:4.13.2")

    implementation(files("corese-core/build/libs/corese-core-jar-with-dependencies.jar")) // Will look for the compiled version of corese-core
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
    run {
        group = "application"
        description = "Runs this project as a JVM application"
    }
    test {
        useJUnit()
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

tasks.register("getCoreseCore") {
    group = "corese"
    description = "Publish the latest corese-core version to local Maven repository"
    doFirst {
        // If the corese-core directory does not exist, clone the corese-core repository
        if (!File("corese-core").exists()) {
            exec {
                commandLine("git", "clone", "https://github.com/corese-stack/corese-core.git")
            }
        }
        // Checkout the latest commit of the feature/corese-next branch of corese-core
        exec {
            commandLine("git", "checkout", "feature/corese-next")
            workingDir = File("corese-core")
        }
        // in the corese-core directory, run the command ./gradlew clean, build
        exec {
            commandLine("./gradlew", "clean", "build", "-x", "test")
            workingDir = File("corese-core")
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

// clean the corese-core directory after the build
tasks.named("clean") {
    dependsOn(tasks.named("cleanCoreseCore"))
}

java {
    withJavadocJar()
    withSourcesJar()
    sourceCompatibility = JavaVersion.VERSION_21
}