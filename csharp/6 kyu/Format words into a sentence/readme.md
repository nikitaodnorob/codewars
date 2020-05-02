# Format words into a sentence

### Instructions
Complete the method so that it formats the words into a single comma separated value. The last word should be separated 
by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. 
Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an 
empty string being returned.

##### Examples
```csharp
Kata.FormatWords(new string[] {"ninja", "samurai", "ronin"}) => "ninja, samurai and ronin"
Kata.FormatWords(new string[] {"ninja", "", "ronin"}) => "ninja and ronin"
Kata.FormatWords(new string[] {}) => ""
```

### Sample Tests
```csharp
namespace Solution 
{
  using NUnit.Framework;
  using System;
  using System.Collections.Generic;

  [TestFixture]
  public class Sample_Tests
  {
    private static IEnumerable<TestCaseData> testCases
    {
      get
      {
        yield return new TestCaseData(new[] {new string[] {"one", "two", "three", "four"}})
                         .Returns("one, two, three and four")
                         .SetDescription("{\"one\", \"two\", \"three\", \"four\"} should return \"one, two, three and four\"");
        yield return new TestCaseData(new[] {new string[] {"one"}})
                         .Returns("one")
                         .SetDescription("{\"one\"} should return \"one\"");
        yield return new TestCaseData(new[] {new string[] {"one", "", "three"}})
                         .Returns("one and three")
                         .SetDescription("{\"one\", \"\", \"three\"} should return \"one and three\"");
        yield return new TestCaseData(new[] {new string[] {"", "", "three"}})
                         .Returns("three")
                         .SetDescription("{\"\", \"\", \"three\"} should return \"three\"");
        yield return new TestCaseData(new[] {new string[] {"one", "two", ""}})
                         .Returns("one and two")
                         .SetDescription("{\"one\", \"two\", \"\"} should return \"one and two\"");
        yield return new TestCaseData(new[] {new string[] {}})
                         .Returns("")
                         .SetDescription("{} should return \"\"");
        yield return new TestCaseData(null)
                         .Returns("")
                         .SetDescription("null should return \"\"");
        yield return new TestCaseData(new[] {new string[] {""}})
                         .Returns("")
                         .SetDescription("{\"\"} should return \"\"");
      }
    }
  
    [Test, TestCaseSource("testCases")]
    public string Test(string[] words) => Kata.FormatWords(words);
  }
}
```