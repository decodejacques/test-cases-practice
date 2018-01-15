var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [[2, 5, 6],[2, 7, 1]],
  [[1],[1]],
  ["abc"],
  [[2,2,3],[3,5,5]],
  [[7,8],[8,9]]
]

let outputs = [
  [5,6,7,1],
  [],
  undefined,
  [3,5],
  [7,9]
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

// function f(arr1, arr2) {
//     let newArr = [];
//     for (var i = 0; i < arr1.length; i++){
//     }
// }

function member(x, lst) {
  for (var i = 0; i < lst.length; i++) {
      if (x == lst[i]) return true;
  }
  return false;
}
function f(arr) {
  var arr1 = arr[0];
  var arr2 = arr[1];
  var ret = [];
  for (var i = 0; i < arr1.length; i++) {
      if (!member(arr1[i], arr2) && !member(arr1[i], ret)) {
          ret.push(arr1[i]);
      }
  }
  for (var i = 0; i < arr2.length; i++) {
      if (!member(arr2[i], arr1) && !member(arr2[i], ret)) {
          ret.push(arr2[i]);
      }
  }
  return ret;
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

