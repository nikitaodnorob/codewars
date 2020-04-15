# Path Finder #1: can you reach the exit?

### Instructions
You are at position `[0, 0]` in maze NxN and you can only move in one of the four cardinal directions (i.e. North, 
East, South, West). Return `true` if you can reach position `[N-1, N-1]` or `false` otherwise.

Empty positions are marked `.`. Walls are marked `W`. Start and exit positions are empty in all test cases.

### Sample Tests
```js
function testMaze(expected, maze){
  let actual = pathFinder(maze);
  Test.assertEquals(actual, expected, maze);
}

describe("Basic tests", function() {

    testMaze(true,
    `.W.
    .W.
    ...`);
    
    testMaze(false,
    `.W.
    .W.
    W..`);
    
    testMaze(true,
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