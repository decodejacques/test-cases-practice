var assert = require('assert');

// we need 5 test cases.
let inputs = [
"123",
"abc",
"",
"0chsf1",
"0b5b!"
]

let outputs = [
  "3",
  "c",
  undefined,
  "1",
  "!"
]

// Make this function return the last letter of the string that is passed to it. If the string does not have a last letter, return undefined
function f(str) {
    var lastchar = str[str.length-1];
    return lastchar;
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
