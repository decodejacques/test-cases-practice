var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ["foo", 3],
  ["foo", 4],
  ["foo", 5],
  ["foo", 6],
  ["foo", 7],
  ["foo", "er"],
  ["foo", -1]
]

let outputs = [
  "foofoofoo",
  "foofoofoofoo",
  "foofoofoofoofoo",
  "foofoofoofoofoofoo",
  "foofoofoofoofoofoofoo",
  undefined,
  "",
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/

function f(str) {
    var word = str[0];
    var mult = str[1];
    var emptyString = "";
    if  (typeof word !== 'string')    {
        return undefined;
    } else if   (isNaN(mult))   {
        return undefined;
    }   else if (mult >= 0)    {
        return word.repeat(mult);
    }   else  {
        return emptyString;
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

