var assert = require('assert');

// we need 5 test cases. I provided 1 input
let inputs = [
  "",
  "abc",
  "123",
  "'&?",
  {}
]

let outputs = [
  undefined,
  "a",
  "1",
  "'",
  undefined
]

// Make this function return the first letter of the string that is passed to it.
// If the string does not have a first letter, return undefined.
const f = str => str.length > 0 ? str[0] : undefined;

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