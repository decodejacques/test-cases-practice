// SOLVED!

var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "Hello world",
    "Bonjour le monde",
    "ola sénorita",
    "hELLO eVERYONE iN tHE wORLD",
    "Koalas are cool"
]

let outputs = [
    "Hello World",
    "Bonjour Le Monde",
    "Ola Sénorita",
    "Hello Everyone In The World",
    "Koalas Are Cool"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    var arr = str.toLowerCase().split(" ");
    var firstChar = "";
    var capWord = "";
    var newArr = [];

    for (var i = 0; i < arr.length; ++i) {
        firstChar = arr[i].toUpperCase().charAt(0);
        capWord = firstChar + arr[i].substring(1, arr[i].length);
        newArr.push(capWord);
    }

    var newStr = newArr.join(" ");
    return newStr;
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

