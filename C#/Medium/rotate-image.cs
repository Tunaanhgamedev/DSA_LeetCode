// Rotate Image
public class Solution {
    public void Rotate(int[][] matrix) {
        // Reverse the matrix vertically
        Array.Reverse(matrix);

        // Transpose the matrix
        for (int i = 0; i < matrix.Length; i++) {
            for (int j = i; j < matrix[i].Length; j++) {
                (matrix[i][j], matrix[j][i]) = (matrix[j][i], matrix[i][j]);
            }
        }
    }
}