var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [1, 2],
  [0, 0],
  ["a",8],
  [0,"r"],
  [1, 2]
]

let outputs = [
  6,
  0,
  3,
  0,
  undefined,
  undefined,
  3
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x) {
  var results = x[0] + x[1];

  if (isNaN(results)) {
    return undefined;
  } else {
    return results;
  }
}


function runTest(i) {
  var expected = outputs[i];
  var actual = f(inputs[i]);
  assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
