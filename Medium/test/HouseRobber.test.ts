import { assertEquals } from '../../test_deps.ts';

import rob from '../HouseRobber.ts';

// RUN: deno test medium/test/HouseRobber.test.ts

//---------------------------------------------------------------------
// ----------                  UNIT TESTS                    ----------
//---------------------------------------------------------------------

Deno.test({
    name: "[1,2,3,1] -> 4",
    fn() {
        let neighborhood = [1,2,3,1];
        assertEquals(rob(neighborhood), 4);
    }
});



Deno.test({
    name: "[2,7,9,3,1] -> 12",
    fn() {
        let neighborhood = [2,7,9,3,1];
        assertEquals(rob(neighborhood), 12);
    }
});