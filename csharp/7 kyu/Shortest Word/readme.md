# Shortest Word

### Instructions
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

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
      Assert.AreEqual(3, Kata.FindShort("bitcoin take over the world maybe who knows perhaps"));
      Assert.AreEqual(3, Kata.FindShort("turns out random test cases are easier than writing out basic ones"));      
    }
  }
}
```