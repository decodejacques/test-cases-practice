var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [[0,1,2,3], [1,3,4,5]],
    [[],[]],
    [[1],[1]],
    [['blue']],
    [[4,4,5,"a"], [1,4,5]]
]

let outputs = [
  [0,2,4,5], [], [], undefined, ["a", 1]
  
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

// function f(arr) {
//     const arr1 = arr[0];
//     const arr2 = arr[1];
//     let arr3 = [];
//     for(let i = 0;i < arr1.length; i++) {
//         let 
//     }
// }
[[0,1,2,3], [1,3,4,5]]

function f(arr) {
    var arr1 = arr[0];
    var arr2 = arr[1];
    var ret = [];
    for (var i = 0; i<arr1.length; i++) {
        var inArray2 = false;
        var array1Element = arr1[i];
        for (var j=0;j < arr2.length; j++) {
            var array2Element = arr2[j];
            if (array1Element == array2Element) inArray2 = true;
        }
        if(!inArray2) {
            ret.push(arr1[i]);
        }
    }
    return ret;

// function f(arr) {
//     const arr1 = arr[0];
//     const arr2 = arr[1];
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         let check = false;

//     }
//}


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



// function memeber (x,lst) {
//     for (var i =0; i<lst.length;i++) {
//         if(x == lst[i]) return true;
//     }
//     return false
// }

// function f(arr) {
//     var arr1 = arr[0];
//     var arr2 = arr[1];
//     var ret = [];
//     for (var i = 0; i<arr1.length; i++) {
//         if(!member((arr1[i], arr2) && !member(arr1[i], ret)) {
//             ret.push(arr1[i]);
//         }
//     }
//     return ret;
// }

// function f(arr) {
//     var arr1 = arr[0];
//     var arr2 = arr[1];
//     var ret = [];
//     for (var i = 0; i<arr1.length; i++) {
//         var inArray2 = false;
//         var array1Element = arr1[i];
//         for (var j=0;j < arr2.length; j++) {
//             var array2Element = arr2[j];
//             if (array1Element == array2Element) inArray2 = true;
//         }
//         if(!inArray2) {
//             ret.push(arr1[i]);
//         }
//     }
//     return ret;
}