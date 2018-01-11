var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [-1, 4],
  ["", 1],
  [5],
  [{}, 7]
]

let outputs = [
  14,
  -4,
  undefined,
  undefined,
  undefined
]

/*
Make this function return the product of the two numbers that are passed to it.
If one of the numbers is not passed, or if anything other than numbers are passed,
return undefined.
*/
function f(x, y) { 
  if (typeof x !== "number" || typeof y !== "number"){
    return undefined
  }else {
    return x*y
  }
    
}

// function runTest(i) {
//     if(i > inputs.length) throw new Error("You do not have enough test cases");
//     var expected = outputs[i];
//     var actual = f(inputs[i]);
//     assert.deepEqual(actual, expected);


// }

function runTest(i) {
  if(i > inputs.length) throw new Error("You do not have enough test cases");
  var expected = outputs[i];
  // Fixed Assertion Args (next 2 lines) :
  var input = inputs[i];
  var actual = f(input[0], input[1]);
  // Previous Assertion Args (which were not originally functional) :
  // var actual = f(inputs[i]); */
  assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);



