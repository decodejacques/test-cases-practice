var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [-6,-3],
  [0, -5],
  [5],
  {}
]

let outputs = [
  14,
  18,
  0,
  undefined,
  undefined
]

/*
Make this function return the product of the two numbers that are passed to it.
If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/

const f = (x, y) => typeof x === 'number' && typeof y === 'number' ? x * y : undefined;

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    // Fixed Assertion Args (next 2 lines) :
    var input = inputs[i];
    var actual = f(input[0], input[1]);
    // Previous Assertion Args (which were not originally functional) :
    // var actual = f(inputs[i]); */
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
