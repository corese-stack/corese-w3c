plugins {
    `java-library`
    signing
}

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies {
    implementation("fr.inria.corese:corese-core:5.0.0-SNAPSHOT")

    implementation("org.slf4j:slf4j-api:2.0.17")
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
    implementation("jakarta.activation:jakarta.activation-api:2.1.3")

    val log4jVersion = "2.24.3"
    testImplementation(platform("org.junit:junit-bom:5.11.3"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
    testRuntimeOnly("org.apache.logging.log4j:log4j-core:$log4jVersion")
    testRuntimeOnly("org.apache.logging.log4j:log4j-slf4j2-impl:$log4jVersion")
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
}

apply(from = "gradle/test-reporter.gradle.kts")
