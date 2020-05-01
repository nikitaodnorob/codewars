# Sum of Digits / Digital Root

### Instructions

In this kata, you must create a `digital root` function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that 
value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only 
applicable to the natural numbers.

Here's how it works:

```
digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
```

### Sample tests

```js
Test.assertEquals( digital_root(16), 7 )
Test.assertEquals( digital_root(456), 6 )
```