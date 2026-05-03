// Rotate String
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;
    if (s.length === 0) return true;

    let text = s + s;
    let lps = findLPS(goal);
    return KMP(text, goal, lps);
};

function findLPS(patt) {
    let n = patt.length;
    let lps = new Array(n).fill(0);
    let i = 1, j = 0;
    while (i < n) {
        if (patt[i] === patt[j]) {
            lps[i++] = ++j;
        } else if (j > 0) {
            j = lps[j - 1];
        } else {
            lps[i++] = 0;
        }
    }
    return lps;
}

function KMP(text, patt, lps) {
    let m = text.length;
    let n = patt.length;
    let i = 0, j = 0;
    while (i < m) {
        if (text[i] === patt[j]) {
            i++; j++;
        }
        if (j === n) return true;
        if (i < m && text[i] !== patt[j]) {
            if (j > 0) j = lps[j - 1];
            else i++;
        }
    }
    return false;
}