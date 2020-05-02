// Playing with digits

using System;
using System.Linq;

public class DigPow {

  public static long digPow(int n, int p) {
    var sum = (long)n.ToString()
      .ToCharArray()
      .Select((c, i) => Math.Pow(int.Parse(c.ToString()), p + i))
      .Sum();
    return sum % n == 0 ? sum / n : -1;
  }
}
