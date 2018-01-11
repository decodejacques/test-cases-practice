var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "A Santa Lived As a Devil At NASA",
  "Laravel",
  0,
  {},
  []
]

let outputs = [
  true,
  false,
  undefined,
  undefined,
  undefined
]

/*
Make this function return true if the input string is a palindrome, and false otherwise.
A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
const f = str => typeof str === 'string' ? str.replace(/\s/g, '').toLowerCase() === str.replace(/\s/g, '').toLowerCase().split('').reverse().join('') : undefined;

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