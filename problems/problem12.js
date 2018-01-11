var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [[0,1,2,3], [1,3,4,5]],
    [[0,3], [1,3,4,5]],
    [[0,1,2,3], [4,5]],
    [[0,1,2,5], [1,5]],
    [[0,3,6], [1,3,4,5,6]]
]

let outputs = [
    [0,2,4,5],
    [0,1,4,5],
    [],
    [0,2],
    [0,1,4,5]
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
    var arr3 = [];
    for(var i = 0; i < arr1.length; i++){
      var match = false;
      console.log(arr1[i])
      for(var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          match = true;
        }
      }
      if (!match) {
        arr3.push(arr1[i])
      }
    }
    return arr3;
  }
  
  function ff(arr1, arr2) {
    var out1 = f(arr1, arr2);
    var out2 = f(arr2, arr1);
    return out1.concat(out2)
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

