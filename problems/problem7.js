var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ["foo", 3],
  ["bo", 6],
  ["", 3],
  ["foo", -1],
  ["hooo", 2],
  ["foo", -3],
  ["b", 5]
]

let outputs = [
  "foofoofoo",
  "bobobobobobo",
  undefined,
  undefined,
  "hooohooo",
  undefined,
  "bbbbb"
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f("foo", 3) // "foofoofoo"
f("fo", 3) // "fofofo"
f("foo", -1) // undefined
*/
function f(str,n) {
    if(n <= 0 || str === "") return undefined;
    var newStr = "";
    for (var i=0; i < n; i++) {
      newStr += str
    }
    return newStr;
}


function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i][0],inputs[i][1]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);

