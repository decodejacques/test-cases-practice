// SOLVED! 

var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [3, 3],
  ["ifjew", 5],
  [5, 10],
  [4, '']
]

let outputs = [
  14,
  9,
  undefined,
  50,
  undefined
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x) {
  if ((!isNaN(x[0]) && !isNaN(x[1])) && (x[0] !== ("" || '') && x[1] !== ("" || ''))) {
    var result = x[0] * x[1];
    return result;
  }
  return undefined;
}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  var expected = outputs[i];
  var actual = f(inputs[i]);
  assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
