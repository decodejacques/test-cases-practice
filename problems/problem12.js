var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [[0,1,2,3], [1,3,4,5]],
    [[1,2,3], [1,2,3]],
    (2,3),
    [[1,5,7,9], [2,3,4,6,8]],
    [[1,2,3,4], [3,4,5,6]]
 ]

let outputs = [
  [0,2,4,5,],
  [],
  undefined,
  [1,2,3,4,5,6,7,8,9],
  [1,2,5,6]
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
function isExisting(x, list){
    for (var i = 0; i < list.length; i++) {
        if (x == list[i]) {
            return true;
        }
    }
     return false;
    
}

function f(arr) {
    var firstArray = arr[0];
    var secondArray = arr[1];
    var result = [];

    if (Array.isArray(arr) && Array.isArray(firstArray) && Array.isArray(secondArray)) {
        for (var i = 0; i < firstArray.length; i++) {
            if (!isExisting(firstArray[i], secondArray) 
            && !isExisting(firstArray[i], result)) {
                result.push(firstArray[i]);
            }
        }

        for (var j = 0; j < secondArray.length; j++) {
            if (!isExisting(secondArray[j], firstArray) 
            && !isExisting(secondArray[j], result)) {
                result.push(secondArray[j]);
            }
        }

        return result;
    }
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

// runTest(0);
runTest(1);
// runTest(2);
// runTest(3);
// runTest(4);
