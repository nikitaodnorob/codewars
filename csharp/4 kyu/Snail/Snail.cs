// Snail
using System.Collections.Generic;

public class SnailSolution
{
   public static int[] Snail(int[][] array)
   {
       List<int> result = new List<int>();
       result.AddRange(array[0]);

       int x = 0, y = array.Length - 1, curStep = 0, curLen = array.Length - 1;
       List<(int,int)> dxdy = new List<(int,int)> { (1,0), (0,-1), (-1,0), (0,1) };

       while (curLen > 0) {
         var (dx, dy) = dxdy[curStep % 4];
         for (int i = 0; i < curLen; i++) {
           (x, y) = (x + dx, y + dy);
           result.Add(array[x][y]);
         }
         if (++curStep % 2 == 0) curLen--;
       }

       return result.ToArray();
   }
}
