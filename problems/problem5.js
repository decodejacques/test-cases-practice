var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5]
]

let outputs = [
  14,
  2,
  6,
  12,
  20
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
  var x = arr[0];
  var y = arr[1];
  var result = x*y;
  if (isNaN(result)) {
    return undefined;
  } else {
    return result;
  }

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
