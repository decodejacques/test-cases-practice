var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "how are you",
    "",
    "murder for a jar of red rum",
    [],
    {}
]

let outputs = [
  "uoy era woh",
  undefined,
  "mur der fo raj a rof redrum",
  undefined,
  undefined
]

/*
Make this function return the input string, reversed. 
For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use a for loop for this exercise.
*/

/* More elegant... but no loop.
const f = str => {
    return str.split('').reverse().join('');
}
*/

const f = str => {
    if (typeof str === "string" && str.length > 0) {
        let result = "";
        for (i = str.length-1; i >= 0; i--) {
            result += str[i];
        }
        return result;
    } else {
        return undefined;
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

