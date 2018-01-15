var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [[0,1,2,3],[1,3,4,5]],
    [[3,4,22],[22,6,4]],
    [[10,10,3],2],
    [[2,2,2],[2,2,2]],
    [[1,4,3],[1,3,3]]
  
];

let outputs = [
    [0,2,4,5],
    [3,4,6],
    [2,3],
    [],
    [4]
  
];

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

function member (x, lst){
    for (let i =0; i< lst.length; i ++ ){
        if (lst[i]=== x) {return true}
    } 
    return false
};
function f(arr1, arr2) {
    uniArr = [];
    for (let i = 0;i<arr1.length; i ++){
        if (member(arr1[i],arr2) === false && member(arr1,uniArr)===false) 
        {
            uniArr.push(arr1[i]);
        }  
    
    }return uniArr;
    for (let i = 0;i<arr2.length; i ++){
        if (member(arr2[i],arr1) === false && member(arr2,uniArr)===false) 
        {
            uniArr.push(arr2[i]);
        }  
    }
    return uniArr;

};
 

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input[0], input[1]);
    assert.deepEqual(actual, expected);
};

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

