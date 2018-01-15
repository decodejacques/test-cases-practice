var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  'Welcome to coding',
  'blue is true',
  'hello worlds',
  'beautiful line alignment',
  ''
]

let outputs = [
  'Welcome',
  'true',
  'worlds',
  'alignment',
  ''
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    let words = str.split(" ");
    let ret = "";
    for(var i =0; i< words.length;i++){
      let longest = words[i];
      if (longest.length >= ret.length) {
        ret = longest;
      }
    }
    return ret;
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

