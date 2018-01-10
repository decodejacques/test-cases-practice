var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  'hello',
  'world',
  'six',
  'seven',
  'eight',
]

let outputs = [
  'olleh',
  'dlrow',
  'xis',
  'neves',
  'thgie'
]

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use a for loop for this exercise.
*/
function f(str) {
    let newStr = []
    for (let i = str.length;i >= 0; i--) {
        newStr.push(str[i]);
            }
    return newStr.join('');
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

