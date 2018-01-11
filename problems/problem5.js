var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [2, 18],
  [5, 7],
  [-2, 22],
  [2,6],
]

let outputs = [
  14,
  36,
  35,
  -44,
  12
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
  if(arr[0] == undefined || arr[1] == undefined || arr[0] == NaN || arr[1] == NaN) return undefined;
  return arr[0]*arr[1]; 
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
