var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ["yo", 3],
  ["", "5"],
  [0, 9],
  [{}, 4],
  ["AA", [3]],
  ["1", 0],
  []
]

let outputs = [
  "yoyoyo",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined
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
const f = (str, n) => typeof str === "string" && typeof n === "number" && n > 0 ? str.repeat(n) : undefined;

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    // originally : var actual = f(inputs[i]);
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

