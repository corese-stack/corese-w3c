# Notes on SHACL tests

## Failing tests

### core/misc/severity002

In this test the shapes are not detected by Corese. This is because they are not explicitly declared as `sh:NodeShape` in the file, as seen here:

```
ex:TestShape1  
  sh:nodeKind sh:BlankNode ;  
  sh:property ex:TestShape2 ;  
  sh:severity ex:MySeverity ;  
  sh:targetNode ex:InvalidResource1 ;  
.  
ex:TestShape2  
  sh:path ex:property ;  
  sh:datatype xsd:integer ;  
  sh:severity sh:Info ;
```
As the SHACL standard [does not require RDFS entailments](https://www.w3.org/TR/shacl/#shacl-rdfs) to be applied to shape graphs, the type of shape in the test file is not detected.