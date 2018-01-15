var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 3, 4],
  [10, 5, 15, 20],
  ['a', 10,'c', 3, 'b'],
  [undefined, 11, 12 ],
  []

]

let outputs = [
  9, 50, 13, 23, 0
]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
    var sum = 0;
    for(var i=0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        } else if (isNaN(i)){ 
            i+=1;
        } 
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

