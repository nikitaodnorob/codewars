// Exes and Ohs

using System.Linq;
using System;
public static class Kata
{
  public static bool XO (string input)
  {
    return input.ToLower().Count(c => c == 'o') == input.ToLower().Count(c => c == 'x');
  }
}