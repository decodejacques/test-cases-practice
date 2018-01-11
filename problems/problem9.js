var assert = require('assert');

// we need 5 test cases. 
let inputs = ["testing this", "will it work", "we shall find out", "looks like it works", ""]

let outputs = ["testing","work","shall","works",""
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    var split = str.split(" ");
    var longestWord = "";
    if (split == "") {
        return "";
    }
    for (var i = 0; i < split.length; i++) {
        if (split[i].length >= longestWord.length) {
            longestWord = split[i];
        }
    }
    return longestWord;
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

