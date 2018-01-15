var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "abba aa b bba",
    "x yy zzz",
    "a cd b",
    "multiple words",
    ""
]

let outputs = [
    "abba",
    "zzz",
    "cd",
    "multiple",
    ""
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    ////////// Need to revise 
    // if (str = "") {
    //     return str;
    // } else {
    let arr = str.split(" ");

    let sortedArr = arr.sort(function (a, b) {
        return a.length < b.length;
    });
    return sortedArr[0]
}


function f(str) {
    var words = str.split(" ")
    var ret = "";
    for(var i = 0; i < words.length; i++) {
        var theString = words[i];
        if(theString.length >= ret.length) {
            ret = theString;
        }
    }
    return ret;
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