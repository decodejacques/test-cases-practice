// SOLVED!

var assert = require('assert');

let inputs = [
    10,
    23,
    45,
    99,
    19
]

let outputs = [
    01,
    5,
    9,
    18,
    10
]

function f(digit) {
    return digit % 10 + (digit - digit % 10) / 10;
}

function runTest(i) {
    assert.deepEqual(f(inputs[i]), outputs[i]);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
