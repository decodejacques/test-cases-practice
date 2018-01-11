// SOLVED!

var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [[1, 2, 3], [4, 5, 6]],
    [[1, 2, 3, 4, 5, 6], [4, 5, 6]],
    [[1, 2, 3], [1, 2, 3, 4, 5, 6]],
    [[1, 3, 4], [1, 2, 3]],
    [[1, 2, 3, 5], [2, 4, 5, 6]]
]

let outputs = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3],
    [4, 5, 6],
    [4, 2],
    [1, 3, 4, 6]
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays
*/
function f(arr) {
    var newArr = !Array.isArray(arr[0]) && !Array.isArray(arr[1]) ? undefined : arr[0].concat(arr[1]).filter(e => arr[0].includes(e) && !arr[1].includes(e) || !arr[0].includes(e) && arr[1].includes(e));
    return newArr;
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

