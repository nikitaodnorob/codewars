# Exes and Ohs

### Instructions
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
The string can contain any char.


##### Examples 
```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```

### Sample tests
```csharp
namespace Solution {
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void ExampleTests()
    {
      Assert.AreEqual(true, Kata.XO("xo"));
      Assert.AreEqual(true, Kata.XO("xxOo"));
      Assert.AreEqual(false, Kata.XO("xxxm"));
      Assert.AreEqual(false, Kata.XO("Oo"));
      Assert.AreEqual(false, Kata.XO("ooom"));
    }
  }
}
```