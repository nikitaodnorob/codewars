// Ones and Zeros

namespace Solution
{
  using System;
  class Kata
    {
      public static int binaryArrayToNumber(int[] BinaryArray)
      {
        return Convert.ToInt32(string.Join("", BinaryArray), 2);
      }
    }
}