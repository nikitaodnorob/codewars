// Getting along with Integer Partitions

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

struct Partition
{
  public long prod, first;
  public long? second;
  public bool firstLess;
}

public class IntPart
{
  static IEnumerable<Partition> Prods(long n)
  {
    if (n == 1)
    {
      yield return new Partition { prod = 1, first = 1 };
      yield break;
    }
    foreach (var item in Prods(n - 1))
    {
      //first option is [1] + Partition(n-1)
      yield return new Partition
      {
        prod = item.prod,
        first = 1,
        second = item.first,
        firstLess = item.first > 1
      };

      //second option is [a1 + 1, a2, ..., ak] if a1 < a2 or k = 1
      if (item.firstLess || item.second == null) yield return new Partition
      {
        prod = item.prod / item.first * (item.first + 1),
        first = item.first + 1,
        second = item.second,
        firstLess = item.first + 1 < item.second,
      };
    }
  }

  static void CalcProps(IEnumerable<long> arr, out long min, out long max, out long sum, out int cnt)
  {
    min = long.MaxValue; max = long.MinValue; sum = 0; cnt = 0;
    foreach (var v in arr)
    {
      if (v < min) min = v;
      if (v > max) max = v;
      sum += v;
      cnt++;
    }
  }

  public static string Part(long n)
  {
    Thread.CurrentThread.CurrentCulture = new System.Globalization.CultureInfo("en-US");

    var prods = Prods(n).Select(p => p.prod).Distinct().OrderBy(v => v);
    CalcProps(prods, out long min, out long max, out long sum, out int len);

    double median = len % 2 != 0
      ? prods.ElementAt(len / 2)
      : prods.Skip(len / 2 - 1).Take(2).Sum() / 2.0;

    return string.Format("Range: {0} Average: {1:f2} Median: {2:f2}", max - min, sum * 1.0 / len, median);
  }
}
