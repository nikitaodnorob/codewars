# Sort the odd

### Instructions
You have an array of numbers.

Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

##### Example
```
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
```

### Sample Tests
```csharp
namespace Solution 
{
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class KataTests
  {
    [Test]
    public void BasicTests()
    {
      Assert.AreEqual(new int[] { 1, 3, 2, 8, 5, 4 }, Kata.SortArray(new int[] { 5, 3, 2, 8, 1, 4 }));
      Assert.AreEqual(new int[] { 1, 3, 5, 8, 0 }, Kata.SortArray(new int[] { 5, 3, 1, 8, 0 }));
      Assert.AreEqual(new int[] { }, Kata.SortArray(new int[] { }));
    }
  }
}
```