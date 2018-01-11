var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [3, 2],
  [1, 8],
  [7, 3],
  ["a", 4]
]

let outputs = [
  14,
  6,
  8,
  21,
  undefined
]

/*
Make this function return the product of the two numbers that are passed to it.
If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x, y) {
  let product = x * y;
  if (isNaN(x) || isNaN(y)) {
    return undefined;
  }
  return product;
}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  var expected = outputs[i];
  var actual = f(...inputs[i]);
  assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);