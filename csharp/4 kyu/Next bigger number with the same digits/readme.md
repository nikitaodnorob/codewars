# Next bigger number with the same digits

### Instructions
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging 
its digits. For example:
```
12 ==> 21
513 ==> 531
2017 ==> 2071
```
If the digits can't be rearranged to form a bigger number, return `-1` (or `nil` in Swift):
```
9 ==> -1
111 ==> -1
531 ==> -1
```

### Sample Tests
```csharp
using System;
using NUnit.Framework;
    [TestFixture]
    public class NextBiggerNumberTests
    {
        [Test]
        public void Test1()
        {
            Console.WriteLine("****** Small Number");
            Assert.AreEqual(21, Kata.NextBiggerNumber(12));
            Assert.AreEqual(531, Kata.NextBiggerNumber(513));
            Assert.AreEqual(2071, Kata.NextBiggerNumber(2017));
            Assert.AreEqual(441, Kata.NextBiggerNumber(414));
            Assert.AreEqual(414, Kata.NextBiggerNumber(144));
        }
    }
```