# Path Finder #2: shortest path

### Instructions
You are at position `[0, 0]` in maze NxN and you can only move in one of the four cardinal directions (i.e. North, 
East, South, West). Return the minimal number of steps to exit position `[N-1, N-1]` if it is possible to reach the 
exit from the starting position. Otherwise, return `false` in **JavaScript/Python** and `-1` in **C++/C#/Java**.

Empty positions are marked `.`. Walls are marked `W`. Start and exit positions are guaranteed to be empty in all test 
cases.

### Sample Tests
```js
function testMaze(expected, maze){
  let actual = pathFinder(maze);
  Test.assertEquals(actual, expected, maze);
}

describe("Basic tests", function(){

    testMaze(4,
    `.W.
    .W.
    ...`);
    
    testMaze(false,
    `.W.
    .W.
    W..`);
    
    testMaze(10,
    `......
    ......
    ......
    ......
    ......
    ......`);
    
    testMaze(false,
    `......
    ......
    ......
    ......
    .....W
    ....W.`);

});
```