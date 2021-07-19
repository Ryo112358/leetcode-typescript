/*
 * Problem: 198. House Robber
 * Acceptance Rate: 43.8%
 * URL: https://leetcode.com/problems/house-robber/
 *
 * Runtime: 
 * Memory Usage: 
 */

export default function rob(houses: number[]): number {
    Solution.planHeist(houses);
    return Solution.rob(0, houses);
}

class Solution {
    private static moneyRobbed: number;
    private static neighborhood: number[];

    static planHeist(neighborhood: number[]) {
        Solution.neighborhood = neighborhood;
    }

    static rob(startingHouseIndex: number, neighborhood: number[]): number {
        Solution.moneyRobbed = neighborhood[0];

        for(let i=2; i < neighborhood.length; i+=2) {
        }

        return 0;
    }

    private static _moreValuableHouse(x: number, y: number): number {
        return Solution.neighborhood[x] > Solution.neighborhood[y] ? x : y;
    }

}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if(import.meta.main) {

    rob([1,2,3,1]);
    // rob([2,7,9,3,1]);

    // RUN: deno run medium/HouseRobber.ts
}

// --------------------------- Terminal Output: ---------------------------