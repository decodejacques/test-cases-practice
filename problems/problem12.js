var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [[1, 2, 3, 4, 5],[1, 2, 5]]
]

let outputs = [
  [3, 4]
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
function f(arr1, arr2) {
    if (arr1 instanceof Array && arr2 instanceof Array) {
        var newArr = [];
        var deleteflag = 0;
        for (var i=0; i<arr1.length; i++) {
        deleteflag = 0;
            for (var j=0; j<arr2.length; j++) {
                if (arr2[j] == arr1[i]) {
                    arr2.splice(j, 1);
                    deleteflag++;
                    j--;
                }
            }
        if (deleteflag !== 0) {arr1.splice(i, 1); i--;}
        }
        newArr = arr1.concat(arr2);
        return newArr;
    }
    return undefined;
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
// runTest(1);
// runTest(2);
// runTest(3);
// runTest(4);

