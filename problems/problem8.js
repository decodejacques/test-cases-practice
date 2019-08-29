var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "hello",
    "what are",
    "find",
    "the",
    "last"
  
]

let outputs = [
  "olleh",
  "era tahw",
  "dnif",
  "eht",
  "tsal"
]

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use a for loop for this exercise.
*/
function f(x) {
    var reversed = ""
    for (var i = x.length-1; i >= 0; i--) {
        reversed += x[i];
    }
        return reversed;
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

