import { fail } from 'assert';

var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [4, 5],
  ["d", 7],
  ["a", 7],
  ["", 3]
]

let outputs = [
  14,
  20,
  undefined,
  undefined,
  undefined
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x, y) {
  if(isNaN(parseInt(x)) === true ||isNaN(parseInt(y)) === true ) {
    return undefined;
  }
  else {
    return (x*y);
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
