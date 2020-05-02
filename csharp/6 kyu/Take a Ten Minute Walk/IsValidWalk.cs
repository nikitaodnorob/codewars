// Take a Ten Minute Walk

public class Kata
{
  public static bool IsValidWalk(string[] walk)
  {
    if (walk.Length != 10) return false;
    int x = 0, y = 0;
    foreach (var d in walk) {
      x += d == "w" ? 1 : d == "e" ? -1 : 0;
      y += d == "n" ? 1 : d == "s" ? -1 : 0;
    }
    return x == 0 && y == 0;
  }
}
