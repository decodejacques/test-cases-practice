var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ["foo", 3],
    ["fo", 3],
    ["foo", -1],
    [4 , 5],
    ["allo", 1],
    ["ca", 4],
    ["pi",0]

  
]

let outputs = [
    "foofoofoo",
    "fofofo",
    "",
    undefined,
    "allo",
    "cacacaca",
    ""
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
function f(arr) {
    function isString(x) {
      return Object.prototype.toString.call(x) === "[object String]"
    }
    
    if(isString(arr[0]) === false){
      return undefined;
    }
    else if (arr[1]<=0)
    return "";
    
    else {
        return (arr[0].repeat(arr[1]));
      }
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
runTest(5);
runTest(6);

