var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "heLLo wOrld",
    "APPLES and oRAnges",
    "quick BROWN fOX",
    "JUMPS OVER THE",
    "lazy dog"
]

let outputs = [
    "Hello World",
    "Apples And Oranges",
    "Quick Brown Fox",
    "Jumps Over The",
    "Lazy Dog"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
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