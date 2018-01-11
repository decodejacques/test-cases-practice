var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  ["a", -5],
  [0, 0],
  [3, {}],
  [4, ["3"]],
  []
]

let outputs = [
  6,
  0,
  undefined,
  0,
  undefined,
  undefined,
  undefined
]

/*
Make this function return the sum of the two numbers that are passed to it.
If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
const f = (x, y) => typeof x === "number" && typeof y === "number" ? x + y : undefined;

function runTest(i) {
    var expected = outputs[i];
    // originally : var actual = f(inputs[i]) -- spread operator was missing;
    var actual = f(...inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);