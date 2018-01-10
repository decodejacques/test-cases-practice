var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "you are nice",
  "welcome to my country",
  "hello mate",
  "how are you going",
  ""
]

let outputs = [
  "nice",
  "welcome",
  "hello",
  "going",
  ""
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(string) {
    if (string === "") return "";
    var str = string.split(" ");
    var longest = 0;
    var word = "";
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

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

