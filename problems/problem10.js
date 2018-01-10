var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hello world",
  "HELLO world",
  "hello WORLD",
  "HELLO WORLD",
  "hElLo wOrLd"
]

let outputs = [
  "Hello World",
  "Hello World",
  "Hello World",
  "Hello World",
  "Hello World"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    let lowercase = str.toLowerCase();
    let arr = lowercase.split(' ');
        for (let i = 0; i < arr.length; i++) {
       arr[i] = arr[i].charAt(0).toUpperCase(0) + arr[i].substring(1);
    }
    return arr.join(' ');
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

