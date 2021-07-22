/*
 * Problem: 5. Longest Palindromic Substring
 * Acceptance Rate: 31.0%
 * URL: https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Runtime: 96 ms, faster than 96.82% of TypeScript online submissions for Longest Palindromic Substring.
 * Memory Usage: 41.9 MB, less than 65.68% of TypeScript online submissions for Longest Palindromic Substring.
 */

export default function longestPalindromeIn(s: string): string {
    // let result = Solution.findLongestPalindrome(s);
    // console.log(s, "->", result);
    // return result;

    return Solution.findLongestPalindrome(s);
};

class Solution {

    private static startIndex: number;
    private static palindromeLength: number;

    public static findLongestPalindrome(s: string): string {
        if (s.length < 2) return s;

        Solution.startIndex = 0;
        Solution.palindromeLength = 0;

        for (let i = 0; i < s.length - 1; ++i) {
            Solution.extendPalindromeOddLength(s, i);
            Solution.extendPalindromeEvenLength(s, i);
        }

        return s.substring(Solution.startIndex, Solution.startIndex + Solution.palindromeLength);
    };

    private static extendPalindromeOddLength(s: string, startingIndex: number) {
        let left = startingIndex, right = startingIndex;
        Solution.extendPalindrome(s, left, right);
    }

    private static extendPalindromeEvenLength(s: string, startingIndex: number) {
        let left = startingIndex, right = startingIndex+1;
        Solution.extendPalindrome(s, left, right);
    }

    /* "w e l o v e r a c e c  a  r  s"  length=14 */
    /*  0 1 2 3 4 5 6 7 8 9 10 11 12 13 */

    private static extendPalindrome(s: string, left: number, right: number) {

        /* left, right = 9 */

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            --left;
            ++right;
        }
        
        /* left = 5, right = 13 */

        if (Solution.palindromeLength < right - left - 1) {
            Solution.startIndex = left + 1;
            Solution.palindromeLength = right - left - 1;
        }
    }

    public static isPalindrome(s: string): boolean {
        for (let i = 0; i < s.length / 2; ++i) {
            if (s[i] !== s[s.length - 1 - i]) return false;
        }

        return true;
    }
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if(import.meta.main) {

    longestPalindromeIn("babad");
    longestPalindromeIn("cbbd");
    longestPalindromeIn("weloveracecars");

    // RUN: deno run medium/LongestPalindromicSubstring.ts
}

// --------------------------- Terminal Output: ---------------------------
// babad -> bab
// cbbd -> bb
// weloveracecars -> racecar