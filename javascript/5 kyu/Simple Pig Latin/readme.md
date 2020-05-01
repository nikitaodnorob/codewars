# Simple Pig Latin

### Instructions

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks 
untouched.

##### Examples

```js
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```

### Sample tests

```js
Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay');
Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay');
```