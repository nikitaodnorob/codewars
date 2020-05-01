# Ten-Pin Bowling

### Instructions
In the game of ten-pin bowling, a player rolls a bowling ball down a lane to knock over pins. There are ten pins set at 
the end of the bowling lane. Each player has 10 frames to roll a bowling ball down a lane and knock over as many pins 
as possible. The first nine frames are ended after two rolls or when the player knocks down all the pins. The last 
frame a player will receive an extra roll every time they knock down all ten pins; up to a maximum of three total rolls.

In this challenge you will be given a string representing a player's ten frames. It will look something like this: 
`'X X 9/ 80 X X 90 8/ 7/ 44'` (in Java: `"X X 9/ 80 X X 90 8/ 7/ 44"`), where each frame is space-delimited, `'X'` 
represents strikes, and `'/'` represents spares. Your goal is take in this string of frames into a function called 
`bowlingScore` and return the players total score.

### Sample Tests
```js
// maybe this bowler should put bumpers on
Test.assertEquals(bowlingScore('11 11 11 11 11 11 11 11 11 11'), 20);
// woah! Perfect game!
Test.assertEquals(bowlingScore('X X X X X X X X X XXX'), 300);
```