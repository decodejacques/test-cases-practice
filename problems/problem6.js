// pro tip: use nodemon instead of node
var assert = require('assert');

// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["add", 10, 30],
  ["sub", 10, 20],
  ["mult", 10, 20],
  ["add", 10, 20],
  ["chair", 20, 10]
]

let outputs = [
  30,
  40, -10,
  200,
  30,
  undefined,
]

/*
Use the operation argument to decide what this function will return. 
If it's "add", return the sum of the two numbers. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined
*/
function f(arr) {
  let add = arr[1] + arr[2],
    mult = arr[1] * arr[2],
    sub = arr[1] - arr[2];

  return arr[0] === 'add' && typeof arr[0] === 'string' && typeof arr[1] === 'number' && typeof arr[2] === 'number' ? add :
    arr[0] === 'mult' && typeof arr[0] === 'string' && typeof arr[1] === 'number' && typeof arr[2] === 'number' ? mult :
    arr[0] === 'sub' && typeof arr[0] === 'string' && typeof arr[1] === 'number' && typeof arr[2] === 'number' ? sub :
    undefined;
}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  var expected = outputs[i];
  var actual = f(inputs[i]);
  assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);