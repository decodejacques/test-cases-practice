var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [1, 5, 3, 7, 9, "c", {}, [], 24, 1],
  [],
  ["a", 2, null, "c", 0, [], 45, 16, 0],
  ["a", "b", "c", undefined, null, {}, [], "z"],
  {}
]

let outputs = [
  50,
  0,
  63,
  0,
  0
]

/*
Make this function return the sum of all the numbers in the input array. 
If any element in the array is not a number, skip it. 
If the array is empty, return zero.
*/

// No mention of other input types having to return "undefined"; so returning "0" in those instances, too (as seen in the last test case).

const f = arr => { 
    return Array.isArray(arr) || arr.length > 0 ? arr.reduce((t, c) => { return typeof c !== "number" ? t + 0 : t + c }, 0) : 0;
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);