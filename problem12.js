var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [[],"allo"],
    [[1],[1]],
    [[1],[2]],
    [[1,2,3],[2,3,5]],
    [[1,4,2],[2,3,2]],
  
  ]
  
  let outputs = [
    undefined,
    [],
    [1,2],
    [1,5],
    [1,4,3]

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
 var count = 0;
   if( Array.isArray(arr1) === false || Array.isArray(arr2) === false ){
     return undefined;
   }
   for (i=0; i<= arr1.length-1 ;i++){
     count = 0;
     for (y=0; y<= arr2.length-1; y++){
       if(arr1[i]===arr2[y]){
         count = count + 1;
       } 
       else if(count === 0 && y === arr2.length-1){
        arr3= arr3 + arr1[i];
       }
       
     }
   }
     for (a=0; a<= arr2.length-1 ;a++){
     count = 0;
     for (b=0; b<= arr1.length-1; b++){
       if(arr2[a] ===arr1[b]){
         count = count + 1;
       } 
       else if(count === 0 && b === arr1.length-1){
        arr3= arr3 + arr2[a];
       }
       
     }
   }
   return arr3;
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

