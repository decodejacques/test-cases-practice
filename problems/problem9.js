var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "one seven",
  "two five",
  "three two",
  "",
  "nineteen"
]

let outputs = [
  "one",
  "two",
  "three",
  "",
  "nineteen"

]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    var longestWord = '';
    var longest = 0;
    //slit sentence up into an array
    var splitString = str.split(" ");
console.log(splitString);
    for (var i = 0; i < splitString.length; i++)    {
        if (longest > splitString[i].length)    {
            longest = splitString[i].length;
            longestWord = splitString[i];
            return longestWord;
        }
    }
    
    //find length of each item
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

