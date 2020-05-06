// Validate Sudoku with size `NxN`

using System;
using System.Linq;
using System.Collections.Generic;

class Sudoku
{
  int[][] sudoku;
  int n, sqrtN;
  IEnumerable<int> allNumbers, allIndexes;

  public Sudoku(int[][] sudokuData)
  {
    sudoku = sudokuData;
    n = sudokuData.Length;
    sqrtN = (int)Math.Sqrt(n);
    allNumbers = Enumerable.Range(1, n);
    allIndexes = Enumerable.Range(0, n);
  }

  public bool IsValid()
  {
    //check sizes
    if (allIndexes.Any(i => sudoku[i].Length != n)) return false;

    //check lines
    foreach (var i in allIndexes)
      if (allNumbers.Any(d => !allIndexes.Any(j => sudoku[i][j] == d))) return false;

    //check columns
    foreach (var j in allIndexes)
      if (allNumbers.Any(d => !allIndexes.Any(i => sudoku[i][j] == d))) return false;

    //check squares
    foreach (var k in allIndexes) {
      var (startRow, startCol) = (k / sqrtN * sqrtN, k % sqrtN * sqrtN);
      if (allNumbers.Any(d => !allIndexes.Any(
        z => sudoku[startRow + z / sqrtN][startRow + z % sqrtN] == d
      ))) return false;
    }

    return true;
  }
}
