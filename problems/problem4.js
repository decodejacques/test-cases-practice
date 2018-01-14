var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ['world', 3],
  ['cheese', 5],
  ['sausage', 2],
  ['mushroom', 6],
  ['onion', 3],
  [9, 2],
  ["", 2]
]

let outputs = [
  "o",
  'l',
  'e',
  'u',
  'o',
  'o',
  undefined,
  undefined
]

/*
Make this function return the letter at the specified position in the string. 
If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr, num) {

  console.log(num)
    if (typeof (arr[arr[1]]) !== 'string') {
      return undefined;
    } else {
      return arr[arr[1]];
    };
}

function runTest(i) {
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input[[0], input[1]]);
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
