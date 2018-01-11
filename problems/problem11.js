var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [0, 5, 15],
  [2, -3],
  [1, 'plus', 1],
  ['ok', 6, 15, 'ok'],
  [] //what should we do if ALL elements are not numbers? Treat as empty?
]

let outputs = [
  20,
  -1,
  2,
  21,
  0
]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
    var sum = 0;
    if (arr.length === 0) {return 0;}
    for (var i=0; i<arr.length; i++) {
        if (typeof arr[i] == 'number') {sum += arr[i];}
    }
    return sum;
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

