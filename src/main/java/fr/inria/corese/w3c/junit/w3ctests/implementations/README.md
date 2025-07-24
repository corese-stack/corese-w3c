# How to add new standard tests

1. Retrieve the manifest file of the standard tests you want to add.
2. Add the manifest file to the `src/test/resources` directory.
3. Add the standard tests to the list of implemented tests in the README.md file.
4. Retrieve the list of type of tests present in the manifest file.
   1. Use corese-command to retrieve the list of tests from the manifest with the query `SELECT DISTINCT ?type WHERE { ?test a ?type }`.
   2. All types except `mf:Manifest` are type of tests that must be implemented.
5. Implement each type of test in the `fr.inria.corese.w3cJunitTestsGenerator.w3cTests.implementations` package.
6. Add the implementation to the `fr.inria.corese.w3cJunitTestsGenerator.w3cTests.factory.W3CTestFactory` class.

## Best practices

- Generated test should work as launches of the Corese application in their release version when possible.