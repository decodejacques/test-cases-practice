var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["a", 2],
  ['', 2],
  ['abc', "as"],
  ['abc', 2],
  ['abc', 2],
  ['abc', 2],
  ['abc', 2],
]

let outputs = [
  "o",
  undefined,
  undefined,
  undefined,
  'c',
  'c',
  'c',
  'c',
]

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f("hello", 1); // e
f("", 4); // undefined
f("abc", 0); // a

*/
function f(arr) {
    let index = arr[1]
    return typeof arr[0] === 'string' ||
    typeof index === 'number' ||
    index <= arr[0].length -1 ? arr[0][index] : undefined;
}

function runTest(i) {
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input);
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
