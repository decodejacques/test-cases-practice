var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [4, 5],
  [2, 7],
  [3, -2],
  [8, 'p'],
  [5, undefined]
]

let outputs = [
  6,
  0,
  9,
  9,
  1,
  undefined,
  undefined
]


/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
  var x = arr[0]+arr[1];
  console.log(x);
  if (isNaN(x) ) {
    return undefined;
  }
  return x;
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
