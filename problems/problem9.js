var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  'hello worlds',
  'I am a computer',
  'Zero Dark Qwerty',
  '',
  'abcd efgh ijkl'
]

let outputs = [
  'worlds',
  'computer',
  'Qwerty',
  '',
  'ijkl'
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
        if(str === '') {
          return '';
        } else { 
         return str.split(" ").sort((a, b) => b.length >= a.length)[0];
    } 
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

