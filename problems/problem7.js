var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ["foo", 3],
    ["fo", 3],
    ["foo", -1],
    ["bar", -1],
    ["lel", 3],
    ["hue", 3],
    ["fa", 3],
]

let outputs = [
    "foofoofoo",
    "fofofo",
    "",
    "",
    "lellellel",
    "huehuehue",
    "fafafa"
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f("foo", 3) //  "foofoofoo"
f("fo", 3) // "fofofo"
f("foo", -1) // undefined
*/
function f(array) {
    var append = "";
    if (array[1] < 0 || array[1] == 0) {
        return "";
    } else {
        for (var i = 0; i < array[1]; i++) {
            append = append + array[0];
        }
    }
    return append;
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
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

