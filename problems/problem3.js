var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [4, 8],
  [5, 1],
  ["a", 5],
  [4],
  [2, 5]
]

let outputs = [
  6,
  0,
  12,
  6,
  undefined,
  undefined,
  7
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x, y) {
  let sum = x + y;
  if (isNaN(x) || isNaN(y)){
    return undefined;
  }
    return sum;
}

function runTest(i) {
    var expected = outputs[i];
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
