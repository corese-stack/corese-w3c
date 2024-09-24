plugins {
    `java-library`
    id("com.gradleup.shadow") version "8.3.1"
    id("org.gradlex.extra-java-module-info") version "1.8"
    application
    signing
}

repositories {
    mavenCentral()
    mavenLocal()
}

configurations.all {
    resolutionStrategy {
        force("org.slf4j:slf4j-api:1.8.0-beta4","org.apache.logging.log4j:log4j-slf4j18-impl:2.18.0")
    }
}

dependencies {
    api("fr.com.hp.hpl.jena.rdf.arp:arp:2.2.b")

    api("org.apache.jena:jena-arq:5.1.0")
    api("org.apache.jena:jena-tdb:4.10.0")
    api("org.apache.jena:jena-core:5.1.0")

    api("org.apache.commons:commons-lang3:3.17.0")
    api("org.apache.httpcomponents.client5:httpclient5:5.3.1")
    api("org.apache.httpcomponents:httpcore-osgi:4.4.16")

    api("org.javassist:javassist:3.30.2-GA")

    api("org.glassfish.hk2:osgi-resource-locator:2.4.0")

    api("org.jspecify:jspecify:1.0.0")

    api("com.ibm.icu:icu4j:75.1")

    api("com.github.jsonld-java:jsonld-java:0.13.6")

    api("xerces:xercesImpl:2.12.2")

    api("commons-logging:commons-logging:1.3.4")

    val lo4j_version = "2.18.0"
//    api("org.slf4j:slf4j-api:2.0.0-alpha0")
    api("org.apache.logging.log4j:log4j-api:${lo4j_version}")
    api("org.apache.logging.log4j:log4j-core:${lo4j_version}")
    api("org.slf4j:slf4j-api:1.8.0-beta2")

    testImplementation("junit:junit:4.13.2")

    api("fr.inria.corese:corese-core:5.0.0-SNAPSHOT") // To be changed for the release version
}

group = "fr.inria.corese"
version = "5.0.0-SNAPSHOT"
description = "corese-w3c"
java.sourceCompatibility = JavaVersion.VERSION_11
project.setProperty("mainClassName","fr.inria.corese.w3cJunitTestsGenerator.Main")


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
                "Main-Class" to "fr.inria.corese.w3cJunitTestsGenerator.Main"
            )
        }
        this.archiveClassifier = "app"
    }
}

java {
    withJavadocJar()
    withSourcesJar()
    sourceCompatibility = JavaVersion.VERSION_11
}

extraJavaModuleInfo {
    failOnMissingModuleInfo.set(false)
    automaticModule("fr.com.hp.hpl.jena.rdf.arp:arp", "arp")
    automaticModule("com.github.jsonld-java:jsonld-java", "jsonld.java")
    automaticModule("commons-lang:commons-lang", "commons.lang")
    automaticModule("fr.inria.lille.shexjava:shexjava-core", "shexjava.core")
    automaticModule("org.eclipse.rdf4j:rdf4j-model", "rdf4j.model")
}