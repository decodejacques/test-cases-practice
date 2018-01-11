var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [3, 3],
  [-5, 6],
  [2, 0],
  [2, 'polkadots'],
]

let outputs = [
  14,
  9,
  -30,
  0,
  undefined
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x) {
  var product = x[0]*x[1];
    if (isNaN(product)) {return undefined;}
    return product;
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
