// Shortest Word

using System.Linq;

public class Kata
{
  public static int FindShort(string s) => s.Split(' ').Min(w => w.Length);
}