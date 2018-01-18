var assert = require('assert');

// we need 5 test cases. 
let inputs = ["hello my name is jimmy",
"I like to ride bicyces",
"have you ever heard the owl call your name",
"I don't know why I swallowed the fly",
"sweet dreams are made of these"
  
]

let outputs = [
  "jimmy",
  "bicycles",
  "heard",
  "swallowed",
  "dreams"

]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/

var newArr = []

function f(str) {
    var splitStr = str.split()
    var ret = "";
    for(var i = 0; i < splitStr.length; i++) {
        var theString = word[i];
        if(theString.length >= ret.length) {
            ret = theString;
        }
    }
    return ret;
}
// control d
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

