// Rotate String
using System;
using System.Collections.Generic;

public class Solution {
    private int[] FindLPS(string patt) {
        int n = patt.Length;
        int[] lps = new int[n];
        
        int i = 1;
        int j = 0;
        while (i < n) {
            if (patt[i] == patt[j]) {
                lps[i] = j + 1;
                i++;
                j++;
            } else if (j > 0) {
                j = lps[j - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
        return lps;
    }

    private bool KMP(string text, string patt, int[] lps) {
        int m = text.Length;
        int n = patt.Length;

        int i = 0, j = 0;
        while (i < m) {
            if (text[i] == patt[j]) {
                i++;
                j++;
            }
            if (j == n) return true;

            if (i < m && text[i] != patt[j]) {
                if (j > 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
        return false;
    }

    public bool RotateString(string s, string goal) {
        if (s.Length != goal.Length) return false;
        if (s.Length == 0) return true;

        string text = s + s;
        int[] lps = FindLPS(goal);
        return KMP(text, goal, lps);
    }
}