var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 5],
  [2, ''],
  [2, 7, 9],
  [2, 11, 13],
  []
]

let outputs = [
  7,
  2,
  18,
  26,
  0
]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
//     let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//  if (arr[i] === Number.isNaN()) {
//     i++; 
//     } else if 
//     (arr.length === 0) {
//         return 0;
//     } else 
//         (sum = sum += arr[i]); 
         
//         }
//         return sum;

    switch (true) {
        case arr.length === 0:
          return 0;
            break;
        case arr.filter(x => x === (Number.isInteger === false)):
          i++;
            break;  
            default: 
            return arr.reduce((a, b) => a + b, 0);
              break;
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
