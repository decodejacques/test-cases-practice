var assert = require('assert');

// we need 5 test cases. I provided 1 input
let inputs = [
  "",
  "hello",
  "abc",
  "123",
  "cat"
]

let outputs = [
  undefined,
  "h",
  "a",
  "1",
  "c"
  
]

// Make this function return the first letter of the string that is passed to it.
//  If the string does not have a first letter, return undefined

function f(str) {
  if (typeof str !== "string"){
    return undefined;
  }
    else {
      return str[0];
    }
  };


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
