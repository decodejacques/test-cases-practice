var assert = require('assert');

// we need 5 test cases. 
let inputs = [ [[0,1,2,3],[1,3,4,5]] ];

let outputs = [[0,2,4,5]]

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
    var newArray = [];
    var found = false;
       for( var i=0; i < arr1.length; i++){
          found = false;
          
          for (var j=0; j< arr2.length; j++){
              if(arr1[i] === arr2[j]){
                found = true;
              }
          }
          if(found === false){
            newArray.push(arr1[i]);
          }
       }
       return newArray;
       
  }
  
  function uniqueElements(arr1,arr2){
     return [].concat(f(arr1,arr2),f(arr2,arr1));
  }

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = uniqueElements(...inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);

