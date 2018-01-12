var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  
]

let outputs = [
  
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

/*
member(x,lst) returns true if and only if x is an element of lst
*/
function f(arr1, arr2) {
    uniArr=[];
    for (i=0; i < arr1.length; i ++){
        for (j=0; j<arr2.length; j ++){
            if (arr1[i]!== arr2[j]){
                uniArr.push(arr1[i]);

            }
        }
    }
    return uniArr
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

