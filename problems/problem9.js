// SOLVED!

var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "hi",
    "",
    "Hello my anticonstitutionnalisationnable people",
    "One two three",
    "Racecar up side down is racecar"
]

let outputs = [
    "hi",
    "",
    "anticonstitutionnalisationnable",
    "three",
    "racecar"
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    str.split(" ").toLowerCase();
    var lgStr = "";
    for (var i = 0; i < str.length; ++i) {
        if (lgStr.length <= str[i].length) lgStr = str[i];
    }
    return lgStr;
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

