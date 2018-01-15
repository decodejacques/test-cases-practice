// pro tip: use nodemon instead of node
var assert = require('assert');

// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  [{}, 2, 3],
  ["mult", "a", 5],
  [["sub"],4, 3],
  []
]

let outputs = [
  30,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined
]

/*
Use the operation argument to decide what this function will return. 
If it's "add", return the sum of the two numbers.
"sub" return their difference.
"mult" return their product.  
Anything else return undefined. 
For example:
f("add", 10, 20); // 30
f("mult", 2, 3); // 6
f("spoof", 10, 10); // undefined

*/
const f = (operation, firstArgument, secondArgument) => {
  if (typeof operation === "string" 
      && typeof firstArgument === "number" 
      && typeof secondArgument === "number") {
    return operation === "add" ? firstArgument + secondArgument : operation === "sub" 
    ? firstArgument - secondArgument : operation === "mult" 
    ? firstArgument * secondArgument : undefined; 
  } else {
    return undefined;
  }
}

/*
function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}*/

function runTest(i) {
  var expected = outputs[i];
  var input = inputs[i];
  var actual = f(input[0], input[1], input[2]);
  assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);