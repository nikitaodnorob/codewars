// Sort the odd

using System.Linq;

public class Kata
{
  public static int[] SortArray(int[] array)
  {
    var odd = array.Where(x => x % 2 == 1).OrderBy(x => x);
    int ind = 0;
    return array.Select(x => x % 2 == 0 ? x : odd.ElementAt(ind++)).ToArray();
  }
}
