var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [-10,2],
  [-3, 9],
  [-5, 6],
  [4,13],
  [1, 3]
]

let outputs = [
  6,
  0,
  -8,
  6,
  1,
  17,
  4
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
    if(arr[0] == undefined || arr[1] == undefined || arr[0] == NaN || arr[1] == NaN) return undefined;
    return arr[0]+arr[1];
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
