var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  ["a", 4],
  [1, 2],
  [10, -10],
  ["a", 3],
  [1, 2]

]

let outputs = [
  6,
  0,
  undefined,
  3,
  0,
  undefined,
  3
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x) {
  if (isNaN(parseInt(x[0])) || isNaN(parseInt(x[1]))) {
    return undefined;
  }

  else {
    return (x[1] + x[0]);
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
