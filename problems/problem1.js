var assert = require('assert');

// we need 5 test cases. I provided 1 input
let inputs = [
  "hhgh",
  "hh",
  "we",
  "asd",
  "as"
  
  
]

let outputs = [
  "h",
  "h",
  "w",
  "a",
  "a"
]

// Make this function return the first letter of the string that is passed to it. If the string does not have a first letter, return undefined
function f(str) {
  var arr = str.split("");
  return arr[0];
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
