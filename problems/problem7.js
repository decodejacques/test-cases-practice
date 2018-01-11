

var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ["hello",3],
    [3, "hello"],
    ["hello",-1 ],
    ["hello", 0],
    [{},3],
    ["hello",{}],
    ["bye",2]
    
  
]

let outputs = [
    "hellohellohello",
    undefined,
    "",
    "",
    undefined,
    undefined,
    "byebye",
    
  
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. 
If any invalid parameters are supplied return undefined.

For example:

f("foo", 3) // "foofoofoo"
f("fo", 3) // "fofofo"
f("foo", -1) // undefined
*/
function f(str, n) {
    if(typeof n !== "number" || typeof str !== "string"){
        return undefined
    }else if (n<=0 === true){
        return ""
    }else    
    {let temp = "";
    for (let i =0; i<n; i ++){
        temp += str
    }return temp
 };}

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
runTest(5);
runTest(6);

