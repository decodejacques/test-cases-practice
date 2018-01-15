var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [3, 1],
  [6, 2],
  [4, 'p'],
  [8, 4]
]

let outputs = [
  14,
  3,
  12,
  undefined,
  32
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
  var x = arr[0] * arr[1];
  if (isNaN(x) ) {
    return undefined;
  }
  return x;
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
