var assert = require('assert');

// we need 5 test cases.
let inputs = [
    'hello',
    'world',
    'send',
    'nudes',
    'blag6'

]

let outputs = [
    'o',
    'd',
    'd',
    's',
    undefined
]

// Make this function return the last letter of the string that is passed to it. 
// If the string does not have a last letter, return undefined
function f(str) {
    if (isNaN(str[str.length-1])) {
        console.log(str[str.length-1]);
        return str[str.length-1]
    }
    return undefined;
}

function runTest(i) {
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
