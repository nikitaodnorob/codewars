# Highest Scoring Word

### Instructions
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: `a = 1`, `b = 2`, `c = 3` etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

### Sample Tests
```cpp
Describe(Basic_Tests)
{
    It(Example_Tests)
    {
        Assert::That(highestScoringWord("man i need a taxi up to ubud"), Equals("taxi"));
        Assert::That(highestScoringWord("what time are we climbing up the volcano"), Equals("volcano"));
        Assert::That(highestScoringWord("take me to semynak"), Equals("semynak"));
        Assert::That(highestScoringWord("massage yes massage yes massage"), Equals("massage"));
        Assert::That(highestScoringWord("take two bintang and a dance please"), Equals("bintang"));
    }
};
```