var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [10, 3, 5, 3, 2],
    [4, 3, 1, 6, 4, 2, 4],
    [5, 3, 7, 9, 5, 6],
    ["hi", 4, 6, 3, 2, "", 5],
    []
]

let outputs = [
    23,
    24,
    35,
    20,
    0
]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
    if (0 === arr.length) return 0;

    for (var i = 0; i < arr.length; ++i) {
        if ((isNaN(arr[i]) || arr[i] === ("" || ''))) {
            arr.splice(i, 1, 0);
        }
    }

    return arr.reduce(function (a, b) {
        return a + b;
    });
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

