var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "This is string num one",
    "I'm another dang string",
    "Short and sweeeeet",
    "Very looooooooooong string, that I am",
    ""
]

let outputs = [
    "string",
    "another",
    "sweeeeet",
    "looooooooooong",
    ""
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    // if (str = "") {
    //     return str;
    // } else {
        let arr = str.split(" ");
        let sortedArr = arr.sort(function (a, b) {
            return a.length < b.length;
        });
        return sortedArr[0]
    
}



function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    console.log("runTest Log:", expected, actual);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);