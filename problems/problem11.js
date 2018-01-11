var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [2, 7, 10],
    [2, 9, 1, 18],
    [5, 6, 7],
    [-2, 22, -3],
    [],
]

let outputs = [
  19,
  30,
  18,
  17,
  0
]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
    if(arr.length === 0) return 0;
    var result=0;
    for (var i = 0; i < arr.length; i++) {
         if(!isNaN(arr[i])) {
            result += arr[i]
         }
      
    }
    return result;
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

