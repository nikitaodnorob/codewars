# Snail

### Instructions
Given an `n x n` array, return the array elements arranged from outermost elements to the middle element, 
traveling clockwise.
```
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
```
For better understanding, please follow the numbers of the next array consecutively:
```
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
```
This image will illustrate things more clearly:
![img](http://www.haan.lu/files/2513/8347/2456/snail.png)

##### Notes 
* The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in 
a clockwise snailshell pattern.
* The 0x0 (empty matrix) is represented as en empty array inside an array `[[]]`.

### Sample Tests
```csharp
using NUnit.Framework;
using System;
using System.Linq;

public class SnailTest
{
   [Test]
   public void SnailTest1()
   {
       int[][] array =
       {
           new []{1, 2, 3},
           new []{4, 5, 6},
           new []{7, 8, 9}
       };
       var r = new[] { 1, 2, 3, 6, 9, 8, 7, 4, 5 };
       Test(array, r);
   }

   public string Int2dToString(int[][] a)
   {
       return $"[{string.Join("\n", a.Select(row => $"[{string.Join(",", row)}]"))}]";
   }

   public void Test(int[][] array, int[] result)
   {
       var text = $"{Int2dToString(array)}\nshould be sorted to\n[{string.Join(",", result)}]\n";
       Console.WriteLine(text);
       Assert.AreEqual(result, SnailSolution.Snail(array));
   }
}
```