// Next bigger number with the same digits

using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
    public static long NextBiggerNumber(long n)
    {
      Console.WriteLine(n);
      var number = n.ToString().ToCharArray().Select(c => int.Parse(c.ToString())).ToList();
      var indexes = Enumerable.Range(0, number.Count).ToList();

      int leftDigitInd = indexes.FindLastIndex(
        i => indexes.Any(j => i < j && number[i] < number[j])
      );

      if (leftDigitInd == -1) return -1;

      int rightDigitInd = indexes
        .Where(j => leftDigitInd < j && number[leftDigitInd] < number[j])
        .OrderBy(j => number[j])
        .ThenBy(j => j)
        .First();

      (number[leftDigitInd], number[rightDigitInd]) = (number[rightDigitInd], number[leftDigitInd]);

      return long.Parse(string.Join(
        "",
        number.Take(leftDigitInd + 1).Concat(number.Skip(leftDigitInd + 1).OrderBy(d => d))
      ));
    }
}
