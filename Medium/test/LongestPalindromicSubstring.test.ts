import { assertEquals, assertNotEquals } from '../../test_deps.ts';

import longestPalindromeIn from "../LongestPalindromicSubstring.ts";


// RUN: deno test medium/test/LongestPalindromicSubstring.test.ts

//---------------------------------------------------------------------
// ----------                  UNIT TESTS                    ----------
//---------------------------------------------------------------------

Deno.test({
    name: "babad -> bab",
    fn() {
        assertEquals(longestPalindromeIn("babad"), "bab");
    }
});


Deno.test({
    name: "babad -> !aba",
    fn() {
        assertNotEquals(longestPalindromeIn("babad"), "aba");
    }
});

Deno.test({
    name: "cbbd -> bb",
    fn() {
        assertEquals(longestPalindromeIn("cbbd"), "bb");
    }
});

Deno.test({
    name: "weloveracecars -> racecar",
    fn() {
        assertEquals(longestPalindromeIn("weloveracecars"), "racecar");
    }
});