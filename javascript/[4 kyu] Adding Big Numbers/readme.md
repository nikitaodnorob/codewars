# Adding Big Numbers

### Instructions
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a 
string.

##### Example
```
add("123", "321"); -> "444"
add("11", "99");   -> "110"
```

##### Notes
* The input numbers are _big_.
* The input is a string of only digits
* The numbers are positives

### Sample Tests
```js
describe("Add two numbers", function(){
  it("should pass basic tests", function() {
    Test.assertEquals(add("1", "1"), "2");
    Test.assertEquals(add("123", "456"), "579");
    Test.assertEquals(add("888", "222"), "1110");
    Test.assertEquals(add("1372", "69"), "1441");
    Test.assertEquals(add("12", "456"), "468");
    Test.assertEquals(add("101", "100"), "201");
    Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
  });
});
```