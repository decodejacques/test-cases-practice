const assert = require('assert');

// we need 7 test cases. I've provided 2.
  let inputs = [[2, 4], ["a","b"], [2,"a"],[-3,3],[4,5],[10,21],[3,4]]

let outputs = [6,undefined,undefined,0,9,31,7]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(array) {
  var total = array[0] + array[1];
  if( typeof total != 'number' ){
    return undefined;
  }
  return total;
    
}

function runTest(i) {
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
runTest(6);
