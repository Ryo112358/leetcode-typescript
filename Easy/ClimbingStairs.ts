/*
 * Problem: 70. Climbing Stairs
 * Acceptance Rate: 49.1%
 * URL: https://leetcode.com/problems/climbing-stairs/
 *
 * Runtime: 76 ms, faster than 79.27% of TypeScript online submissions for Climbing Stairs.
 * Memory Usage: 40.3 MB, less than 49.45% of TypeScript online submissions for Climbing Stairs.
 */

export function climbStairsBF(steps: number): number {
    return Solution.countWaysToClimbBF(steps);
}

export function climbStairsDP(steps: number): number {
    return Solution.countWaysToClimbDP(steps);
}

export function climbStairsBU(steps: number): number {
    return Solution.countWaysToClimbBU(steps);
}

class Solution {
    private static numWaysToClimb = 0;
    private static waysToDescendFromNthStep = [0,1,2];

    static countWaysToClimbDP(steps: number): number {
        return Solution.climbDP(steps);
    }

    static countWaysToClimbBU(steps: number): number {
        return Solution.climbBU(steps);
    }

    //#region DynamicProgramming

    private static climbDP(stairCount: number): number {
        if(Solution.waysToDescendFromNthStep[stairCount] !== undefined) return Solution.waysToDescendFromNthStep[stairCount];    // Check cache

        // if(stairCount===2) return 2;
        // if(stairCount===1) return 1;

        let countLeft = Solution.climbDP(stairCount-1);
        let countRight = stairCount-2 < 1 ? 0 : Solution.climbDP(stairCount-2);

        let numWaysToDescend = countLeft + countRight;
        Solution.waysToDescendFromNthStep[stairCount] = numWaysToDescend;   //Memoize

        return numWaysToDescend;
    }

    private static climbBU(stairCount: number): number {

        for(let i=3; i <= stairCount; ++i) {
            Solution.waysToDescendFromNthStep[i] = Solution.waysToDescendFromNthStep[i-1] + Solution.waysToDescendFromNthStep[i-2];
        }

        return Solution.waysToDescendFromNthStep[stairCount];        
    }

    //#endregion

    //#region BruteForce

    static countWaysToClimbBF(steps: number): number {
        Solution.climbBF(steps);
        
        let result = Solution.numWaysToClimb;

        Solution.numWaysToClimb = 0;    // Reset state for next call

        return result;
    }

    private static climbBF(stairCount: number) {
        if(stairCount===0) {
            Solution.numWaysToClimb += 1;
        } else {
            Solution.climbBF(stairCount-1);
            if(stairCount-2 >= 0) Solution.climbBF(stairCount-2);
        }
    }

    //#endregion
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if(import.meta.main) {

    console.log("2 Steps:", climbStairsBF(2));  // 2
    console.log("4 Steps:", climbStairsBF(4));  // 5
    console.log("8 Steps:", climbStairsBF(8));  // 34

    console.log("8 Steps:", climbStairsDP(8));  // Dynamic programming approach

    console.log("8 Steps:", climbStairsBU(8));  // Bottom up approach

    // RUN: deno run Easy/ClimbingStairs.ts
}

// --------------------------- Terminal Output: ---------------------------
// 2 Steps: 2
// 4 Steps: 5
// 8 Steps: 34
// 8 Steps: 34
// 8 Steps: 34