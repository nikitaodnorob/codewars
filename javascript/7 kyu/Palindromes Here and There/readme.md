# Palindromes Here and There

### Instructions
An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from 
a reversed order. For example `122` is not a palindromic number, but `202` is one.

Your task is to write a function that returns an array with only `1`s and `0`s, where all palindromic numbers are 
replaced with a `1` and all non-palindromic numbers are replaced with a `0`.

##### Example
```
[101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
[45, 21, 303, 56]        ==>  [0, 0, 1, 0]
```


### Sample Tests
```js
Test.describe("Example Tests", function() {
  Test.it('should return [1, 1, 0, 0, 0] on [22, 303, 76, 411, 89]', function(){
      Test.assertSimilar(convertPalindromes([22, 303, 76, 411, 89]), [1, 1, 0, 0, 0]);
  });
  Test.it('should return [0, 0, 1] on [653, 808, 5]', function(){
      Test.assertSimilar(convertPalindromes([653, 808, 5]), [0, 1, 1]);
  });
  Test.it('should return [1, 0, 0, 1, 0, 1] on [4, 23, 441, 565, 19, 818]', function(){
      Test.assertSimilar(convertPalindromes([4, 23, 441, 565, 19, 818]), [1, 0, 0, 1, 0, 1]);
  });
});
```