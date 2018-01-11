// pro tip: use nodemon instead of node
var assert = require('assert');

// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ['sub', 5, 1],
  ['mult', 8, 8],
  ['sleep', 0, 10],
  ['mult', '5', 5]
]

let outputs = [
  30,
  undefined,
  4,
  64,
  undefined,
  undefined
]

/*
Use the operation argument to decide what this function will return. 
If it's "add", return the sum of the two numbers. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f("add", 10, 20); // 30
f("mult", 2, 3); // 6
f("spoof", 10, 10); // undefined

*/
function f(arr) {
    var final;
    if (typeof arr[1] !== 'number' || typeof arr[2] !== 'number') {return undefined;}
    if (arr[0] === 'add') {final = arr[1]+arr[2]; return final;}
    else if (arr[0] === 'mult') {final = arr[1]*arr[2]; return final;}
    else if (arr[0] === 'sub') {final = arr[1]-arr[2]; return final;}
    else {return undefined;}
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
runTest(5);
