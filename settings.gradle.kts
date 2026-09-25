rootProject.name = "corese-w3c"

includeBuild("../corese-core") {
    dependencySubstitution {
        substitute(module("fr.inria.corese:corese-core")).using(project(":"))
    }
}