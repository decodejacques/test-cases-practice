var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "say hello",
  "hello",
  "",
  "4344 32 2 52",
  "I am 56 years old"
]

let outputs = [
  'hello',
  'hello',
  '',
  '4344',
  'years'
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    var long = '';
    if (str == "") {return "";}
    str = str.split(' ');
    for (var i=0; i<str.length; i++) {
        if (str[i].length >= long.length) {long = str[i];}
    }
    return long;
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

