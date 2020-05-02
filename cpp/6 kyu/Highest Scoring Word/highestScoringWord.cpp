// Highest Scoring Word

#include <string>

std::string highestScoringWord(const std::string &str)
{
  int curSum = 0; std::string curWord = "";
  int maxSum = -1; std::string res;
  for (int i = 0; i < str.size(); i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      curWord += str[i];
      curSum += str[i] - 'a' + 1;
    }
    if (i == str.size()-1 || str[i] < 'a' || str[i] > 'z') {
      if (curSum > maxSum) {
        res = curWord;
        maxSum = curSum;
      }
      curSum = 0;
      curWord = "";
    }
  }
  return res;
}
