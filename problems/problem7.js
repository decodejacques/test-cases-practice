// SOLVED! 

var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    [24, 4],
    ["hubba", 3],
    ["boots and cats ", 10],
    ["racecar", 3],
    ["lol", ""],
    ["yolo", 0],
    ["BLARGH!", -2]
]

let outputs = [
    undefined,
    "hubbahubbahubba",
    "boots and cats boots and cats boots and cats boots and cats boots and cats boots and cats boots and cats boots and cats boots and cats boots and cats ",
    "racecarracecarracecar",
    undefined,
    "",
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
    var str = "";

    if ((!isNaN(arr[0])) || (arr[1] === ("" || ''))) return undefined;

    else if ((arr[1] <= 0) && !isNaN(arr[1])) return str;

    else if ((isNaN(arr[0]) && arr[0] !== ("" || '')) && !isNaN(arr[1])) {
        str = arr[0].repeat(arr[1]);
        return str;
    }

    return undefined;
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
