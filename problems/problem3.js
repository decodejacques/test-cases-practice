var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [4, 9],
  [2, 6],
  [9, 2],
  [1, 3],
  [2, '']
]

let outputs = [
  6,
  0,
  13,
  8,
  11,
  4,
  undefined

]

/*
Make this function return the sum of the two numbers that are passed to it. 
If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {

  var firstNum = arr[0];
  var secondNum = arr[1];
    
    if (typeof (firstNum) !== 'number' || typeof (secondNum) !== 'number'){
      return undefined
    }else {
      return firstNum + secondNum;
    };
   
   
   
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
