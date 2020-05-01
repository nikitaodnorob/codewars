# Ones and Zeros

### Instructions
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: `[0, 0, 0, 1]` is treated as `0001` which is the binary representation of `1`.

##### Examples
```
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
```

However, the arrays can have varying lengths, not just limited to `4`

### Sample Tests
```csharp
namespace Solution {
  using NUnit.Framework;
  using System;
  [TestFixture]
  public class SolutionTest
  {
    int[] Test1 = new int[] {0,0,0,0};
    int[] Test2 = new int[] {1,1,1,1};
    int[] Test3 = new int[] {0,1,1,0};
    int[] Test4 = new int[] {0,1,0,1};
    [Test]
    public void BasicTesting()
    {
      Assert.AreEqual(0 , Kata.binaryArrayToNumber(Test1));
      Assert.AreEqual(15 , Kata.binaryArrayToNumber(Test2));
      Assert.AreEqual(6 , Kata.binaryArrayToNumber(Test3));
      Assert.AreEqual(5 , Kata.binaryArrayToNumber(Test4));
    }
  }
}
```