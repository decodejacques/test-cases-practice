// pro tip: use nodemon instead of node
var assert = require('assert');

// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["mult", 10, 20],
  ["sub", 10, 20],
  ["hello", 6, 6]
  ["sub", 10, {}]
]

let outputs = [
  30,
  undefined,
  200,
  -10,
  undefined,
  undefined

]

/*
Use the operation argument to decide what this function will return. 
If it's "add", return the sum of the two numbers. "sub" return their difference. 
"mult" return their product.  
Anything else return undefined. 
For example:
f("add", 10, 20); // 30
f("mult", 2, 3); // 6
f("spoof", 10, 10); // undefined

*/
function f(operation, firstArgument, secondArgument) {
  if (typeof firstArgument !== "number"|| typeof secondArgument !== "number"){
    return undefined
  }else if (operation === "add"){
    return firstArgument + secondArgument
  }else if (operation === "sub"){
    return firstArgument - secondArgument
  }else if (operation === "mult"){
    return firstArgument * secondArgument
  }
  else {
    return undefined
  }
  }
    
  function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]);
    assert.deepEqual(actual, expected);
}



runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
