var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "This is the shortest I can go for",
    "",
    0,
    "Hello",
    "This is going to be funky" // since 'going' (5) is the first longest and 'funky' (5) the last -- the 'sort' function won't return 'funky' by default / without a bit of tweaking.
]

let outputs = [
    "shortest",
    "",
    undefined,
    "Hello",
    "funky"
]

/*
Make this function return the longest word in the input string.
If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/

// Pushing my limits with methods I don't often use & ternary operators. :) 
// There was likely a more simple/readable way of doing this.

const f = str => typeof str !== "string" 
    ? undefined 
    : str.includes(" ") 
        ? str.split(' ').sort((a, b) => a.length === b.length 
            ? b.length + a.length 
            : b.length - a.length)[0] 
        : str;

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