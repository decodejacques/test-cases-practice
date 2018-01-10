var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [2, 21],
  [3, 4],
  ["Something", 3],
  ["A", "b"]
]

let outputs = [
  14,
  42,
  12,
  undefined,
  undefined
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x) {
    if (!isNaN(x[0]) & !isNaN(x[1])) {
      return x[0] * x[1];
    }
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
