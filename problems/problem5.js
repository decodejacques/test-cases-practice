var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  ['abc', 7],
  [2, ""],
  [6, 20],
  [5, 30]
]

let outputs = [
  14,
  undefined,
  undefined,
  120,
  150
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x, y) {
  if (Number.isInteger(x) && Number.isInteger(y)) {
    return x * y; 
  } else {
    return undefined; 
  }
}


function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
