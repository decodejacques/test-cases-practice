var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "radar",
  "alla",
  "non",
  "fafrea",
  "abc"
]

let outputs = [
  true,
  true,
  true,
  false,
  false
]

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {

    var characters  = str.split('');
   
   var  firstLetter = characters.shift();

    var lastLetter  = characters.pop();
   
    if (firstLetter !== lastLetter) {
        return false;
    }

    if (characters.length < 2) {
        return true;
    }

    return f(characters.join(''));

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

