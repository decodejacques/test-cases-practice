var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "hey listen",
    "ALL YOUR BASE ARE BELONG TO US",
    "the cake is a lie",
    "sTAY a wHILE aND lISTEN",
    "FOR THE EMPEROR"
]

let outputs = [
  "Hey Listen",
  "All Your Base Are Belong To Us",
  "The Cake Is A Lie",
  "Stay A While And Listen",
  "For The Emperor"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    var words = str.split(" ");
    var answer = [];

    for (var i = 0; i < words.length; i++) {
        var capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        answer.push(capitalizedWord);
    }

    return answer.join(" ");

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

