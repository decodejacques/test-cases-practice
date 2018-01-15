var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [1,2,3],
  [2,2],
  [1,1,1],
  [1,"a",1,2],
  [1]
]

let outputs = [
  6,
  4,
  3,
  4,
  1

]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
    var x = 0;
    for (i=0; i<= arr.length-1; i++) {
     
       if (isNaN(arr[i]) === true) {
         x= x+0;
       }
       else {
        x = x + arr[i];
       }
    }
    return x;
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

