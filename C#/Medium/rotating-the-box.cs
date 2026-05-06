// Rotating the Box
public class Solution {
    public char[][] RotateTheBox(char[][] boxGrid) {
        int ROWS = boxGrid.Length, COLS = boxGrid[0].Length;
        var res = new char[COLS][];
        for (int c = 0; c < COLS; c++) {
            res[c] = new char[ROWS];
            for (int r = 0; r < ROWS; r++) {
                res[c][r] = '.';
            }
        }

        for (int r = 0; r < ROWS; r++) {
            int i = COLS - 1;
            for (int c = COLS - 1; c >= 0; c--) {
                if (boxGrid[r][c] == '#') {
                    res[i][ROWS - r - 1] = '#';
                    i--;
                } else if (boxGrid[r][c] == '*') {
                    res[c][ROWS - r - 1] = '*';
                    i = c - 1;
                }
            }
        }
        return res;
    }
}