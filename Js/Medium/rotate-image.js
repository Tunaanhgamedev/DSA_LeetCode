// Rotate Image
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // Reverse the matrix vertically
        matrix.reverse();

        // Transpose the matrix
        for (let i = 0; i < matrix.length; i++) {
            for (let j = i; j < matrix[i].length; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
};
