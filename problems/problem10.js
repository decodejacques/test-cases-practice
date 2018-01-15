var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "we are one", "the three musquaqueers", 'true gods of what?', 'power user', 'POP POP LOL'
]

let outputs = [
  'We Are One', 'The Three Musquaqueers', 'True Gods Of What?', 'Power User', 'Pop Pop Lol'
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    var lower = str.toLowerCase();
    var splitStr = lower.split(" ");
    var toUpper = [];
    for (var i= 0; i < splitStr.length; i++) {
        var firstLetter = splitStr[i][0];                               
        firstLetter = firstLetter.toUpperCase();                              // ALWAYS ASSIGN THE NEW VALUE TO THE VARIABLE!!!
        splitStr[i] = firstLetter + splitStr[i].substring(1);
        toUpper.push(splitStr[i]);
    }
    return toUpper.join(" ");
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

