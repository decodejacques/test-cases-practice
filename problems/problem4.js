var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["", 2],
  ["world", 3],
  ["hello", 5],
  ["hello", 1],
  ["javascript", 7],
  ["javascript", 11],
  ["javascript", 0]
]

let outputs = [
  "o",
  undefined,
  "l",
  undefined,
  "e",
  "i",
  undefined,
  "j"
]

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(str, index) {
    return str[index]
    if (str[index] === undefined) return undefined
}

function runTest(i) {
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input[0], input[1]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
