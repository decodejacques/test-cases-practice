var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ["to", 2],
  ["bon", 2],
  ["tic ", 4],
  ["Zero", 0],
  ["Negative", -3],
  ["", 6],
  ["Hello", "World"]
]

let outputs = [
  "toto",
  "bonbon",
  "tic tic tic tic ",
  "",
  "",
  "",
  undefined
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
    var str = arr[0];
    var num = arr[1];
    if (typeof str == 'string' && typeof num == 'number') {
        if (str.length > 0 && num > 0) {
            return str.repeat(num);
        }
        else {
            return "";
        }
    }
}

f(["foo", 3])

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