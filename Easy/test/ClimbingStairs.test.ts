import { assertEquals } from '../../test_deps.ts';

import { climbStairsBF, climbStairsDP, climbStairsBU } from '../ClimbingStairs.ts';


// RUN: deno test Easy/test/ClimbingStairs.test.ts

//---------------------------------------------------------------------
// ----------                  UNIT TESTS                    ----------
//---------------------------------------------------------------------

Deno.test({
    name: "BF: 3 steps -> 3 ways",
    fn() {
        assertEquals(climbStairsBF(3), 3);
    }
});

Deno.test({
    name: "BF: 4 steps -> 5 ways",
    fn() {
        assertEquals(climbStairsBF(4), 5);
    }
});

Deno.test({
    name: "BF: 8 steps -> 34 ways",
    fn() {
        assertEquals(climbStairsBF(8), 34);
    }
});

Deno.test({
    name: "DP: 8 steps -> 34 ways",
    fn() {
        assertEquals(climbStairsDP(8), 34);
    }
});

Deno.test({
    name: "BU: 8 steps -> 34 ways",
    fn() {
        assertEquals(climbStairsBU(8), 34);
    }
});

Deno.test({
    name: "DP: 44 steps -> 1,113,903,170 ways",
    fn() {
        assertEquals(climbStairsDP(44), 1_134_903_170);
    }
});

Deno.test({
    name: "BU: 44 steps -> 1,113,903,170 ways",
    fn() {
        assertEquals(climbStairsBU(44), 1_134_903_170);
    }
});