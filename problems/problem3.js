var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  ["a", 8],
  ["x", "z"],
  [21, 21],
  [3, 39],
  [8, 5]
]

let outputs = [
  6,
  0,
  undefined,
  undefined,
  42,
  42,
  13
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x) {
  console.log(x)
  if (!isNaN(x[0]) & !isNaN(x[1])) {
    return x[0] + x[1];
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
