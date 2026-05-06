// Rotating the Box
/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    const ROWS = boxGrid.length,
            COLS = boxGrid[0].length;
        const res = Array.from({ length: COLS }, () => Array(ROWS).fill('.'));
        for (let r = 0; r < ROWS; r++) {
            let i = COLS - 1;
            for (let c = COLS - 1; c >= 0; c--) {
                if (boxGrid[r][c] === '#') {
                    res[i][ROWS - r - 1] = '#';
                    i--;
                } else if (boxGrid[r][c] === '*') {
                    res[c][ROWS - r - 1] = '*';
                    i = c - 1;
                }
            }
        }
        return res;
};