var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  'hello there',
  'alOha',
  '',
  'bOnjOur aMIGO',
  'h3ll0'
]

let outputs = [
  'Hello There',
  'Aloha',
  '',
  'Bonjour Amigo',
  'H3ll0'
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    str = str.toLowerCase().split(' ');
    for (var i=0; i<str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
    }
    str = str.join(' ');
    return str;
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

