// Are the numbers in order?

using System.Linq;

public class Kata
{
  public static bool IsAscOrder(int[] arr) =>
    Enumerable.Range(0, arr.Length - 1).Count(i => arr[i] > arr[i + 1]) == 0;
}