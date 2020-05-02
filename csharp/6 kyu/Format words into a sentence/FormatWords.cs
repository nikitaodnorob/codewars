// Format words into a sentence

using System.Linq;

public static class Kata
{
  public static string FormatWords(string[] words)
  {
    words = words?.Where(w => w != "").ToArray();
    return (words?.Length ?? 0) <= 1
      ? words?.FirstOrDefault() ?? ""
      : string.Join(", ", words.Take(words.Length - 1)) + " and " + words.Last();
  }
}
