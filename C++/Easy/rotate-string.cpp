// Rotate String
#include <bits/stdc++.h>
using namespace std;

class Solution {
    vector<int> findLPS(string& patt){
        int n=patt.size();
        vector<int> lps(n);
        
        int i=1;
        int j=0;
        while(i<n){
            if(patt[i]==patt[j]){
                lps[i]=j+1;
                i++;
                j++;
            }else if(j>0){
                j=lps[j-1];
            }else{
                lps[i]=0;
                i++;
            }
        }
        return lps;
    }
    bool KMP(string& text,string& patt,vector<int>& lps){
        int m=text.size();
        int n=patt.size();

        int i=0,j=0;
        while(i<m){
            if(text[i]==patt[j]){
                i++;
                j++;
            }
            if(j==n)
                return true;
            if(i<m and text[i]!=patt[j]){
                if(j>0)
                    j=lps[j-1];
                else
                    i++;
            }
        }
        return false;
    }
public:
    bool rotateString(string s, string goal) {
        if(s.size()!=goal.size())   return false;

        string text = s + s;
        vector<int> lps = findLPS(goal);
        return KMP(text,goal,lps);
    }
};