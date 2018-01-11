var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hello",
  "!hello",
  "",
  "514-555",
  "byebye"
]

let outputs = [
  "olleh",
  "olleh!",
  "",
  "555-415",
  "eybeyb"
]

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use a for loop for this exercise.
*/
function f(str) {
    var rev = str.split('');
    var n = 0;
    for (var i = str.length-1; i > -1; i--) {
        rev[n] = str[i];
        n++;
    }
    rev = rev.join('');
    return rev;
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

