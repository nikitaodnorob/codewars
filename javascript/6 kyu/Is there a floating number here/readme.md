# Is there a floating number here?

### Instructions
You will be given input data `n`. Determine whether it is/contains a floating number. Return `true` or `false`.

A valid `n` can be a number, a string, an array, or an object. If `n` is other data type, should return `false`.

* If `n` is a number, determine whether it is a floating number.
* If `n` is a string, determine whether it can be converted to a floating number.
* If `n` is an array, determine whether it contains at least one element is/can be converted to a floating number.
* If `n` is an object, determine whether it contains at least one value is/can be converted to a floating number.
* Arrays and objects are allowed to be nested and mixed.

##### Examples
```
isFloat(1) === false
isFloat(1.1) === true

isFloat("1") === false
isFloat("1.1") === true

isFloat([1]) === false
isFloat([1.1]) === true
isFloat([[[1.1]],1]) === true

isFloat({a:1}) === false
isFloat({a:1.1}) === true
isFloat({a:[1]}) === false
isFloat({a:[1.1]}) === true
isFloat({a:["1"]}) === false
isFloat({a:["1.1"]}) === true

isFloat({a:[{b:[[1.1]]},1]}) === true
isFloat({ a: [ 1, 2, { b: "3.14" } ] }) === true

isFloat(null) === false
isFloat(true) === false
isFloat(undefined) === false
isFloat(x=>1.1) === false
isFloat(/1.1/) === false
```

### Sample Tests
```js
describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

 Test.assertEquals(isFloat(1) , false);
 Test.assertEquals(isFloat(1.1) , true);
 Test.assertEquals(isFloat(1.0) , false);

 Test.assertEquals(isFloat("1") , false);
 Test.assertEquals(isFloat("1.1") , true);
 Test.assertEquals(isFloat(" 1.1 ") , true);
 Test.assertEquals(isFloat(" 1 . 1 ") , false);
 Test.assertEquals(isFloat("1.0") , false);
 Test.assertEquals(isFloat("1.") , false);
 Test.assertEquals(isFloat(".1") , true);
 Test.assertEquals(isFloat("=1.1") , false);
 Test.assertEquals(isFloat("1+0.1") , false);
 Test.assertEquals(isFloat("1.1.1") , false);
 Test.assertEquals(isFloat("11111111111111111111111111111111111111111111111111.1") , false);

 Test.assertEquals(isFloat([1]) , false);
 Test.assertEquals(isFloat([1.1]) , true);
 Test.assertEquals(isFloat([1.0]) , false);
 Test.assertEquals(isFloat(["1"]) , false);
 Test.assertEquals(isFloat(["1.1"]) , true);
 Test.assertEquals(isFloat(["1.0"]) , false);
 Test.assertEquals(isFloat([[[1.1]],1]) , true);

 Test.assertEquals(isFloat({a:1}) , false);
 Test.assertEquals(isFloat({a:1.1}) , true);
 Test.assertEquals(isFloat({a:1.0}) , false);
 Test.assertEquals(isFloat({a:"1"}) , false);
 Test.assertEquals(isFloat({a:"1.1"}) , true);
 Test.assertEquals(isFloat({a:"1.0"}) , false);

 Test.assertEquals(isFloat({a:[1]}) , false);
 Test.assertEquals(isFloat({a:[1.1]}) , true);
 Test.assertEquals(isFloat({a:[1.0]}) , false);
 Test.assertEquals(isFloat({a:["1"]}) , false);
 Test.assertEquals(isFloat({a:["1.1"]}) , true);
 Test.assertEquals(isFloat({a:["1.0"]}) , false);

 Test.assertEquals(isFloat({a:[{b:[[1.1]]},1]}) , true);
 
 Test.assertEquals(isFloat(null) , false);
 Test.assertEquals(isFloat(true) , false);
 Test.assertEquals(isFloat(undefined) , false);
 Test.assertEquals(isFloat(x=>1.1) , false);
 Test.assertEquals(isFloat(/1.1/) , false);
 
})})
```