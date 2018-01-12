var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [3, 5],
    [],
    [6, "a", 4, 2],
    ["b", "s", 1],
    [10, -2, 3]
]

let outputs = [
    8,
    0,
    12,
    1,
    11
]

/*
Make this function return the sum of all the numbers in the input array. 
If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            continue;
        }
        sum += arr[i]; {}
    }
    return sum
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);