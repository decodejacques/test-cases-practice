var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "Lorem ipsum si meliora dies",
  "Alpha beta delta",
  12345,
  "",
  "111 222 333"
]

let outputs = [
  "meliora",
  "delta",
  undefined,
  "",
  "333"
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    if (typeof str == 'string') {
        var words = str.split(" ");
        var longest = "";

        var findLongest = function(word){
            if (word.length >= longest.length) {
                longest = word;
            }
        }
        words.forEach(findLongest);
    }
    return longest;
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

