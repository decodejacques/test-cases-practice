var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 5],
  [3, 3],
  [2, NaN],
  [2, ' '],
  ['a', 4],
  [20, 40],
  [200, 200]
];

let outputs = [
  7,
  6,
  undefined,
  undefined,
  undefined,
  60,
  400
];

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x) {
    if (Number.isInteger(x[0]) && Number.isInteger(x[1])) {
      return x[0] + x[1]; 
    } else {
      return undefined; 
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
