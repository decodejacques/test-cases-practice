var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [2, 2],
  [1, 1],
  [5, 5],
  [4, 4],
  ['a', 'b']

]

let outputs = [
  6,
  0,
  4,
  2,
  10,
  8,
  undefined
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
    let sum = arr[0] + arr[1]
    return typeof sum === 'number' ? arr[0] + arr[1] : undefined;
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
