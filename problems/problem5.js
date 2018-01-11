var assert = require('assert');

// we need 5 test cases. 
let inputs = [[2, 7], ["a","b"], [2,"a"],[-3,3],[4,5]]

let outputs = [14,undefined,undefined,-9,20]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(array) {
  var total = array[0] * array[1];
  if(isNaN(total)){
    return undefined;
  }else{
    return total;
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
