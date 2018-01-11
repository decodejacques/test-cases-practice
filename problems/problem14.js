var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
    'Hi there, my name is Jimmy. I am writing a 40 character test.',
    'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
    'Hi there, my name is Jimmy. I am writing a 40 character test.',
    'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam'
]

let outputs = [
    'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
    "Hi there, my name is Jimmy. I am writing\na 40 character test.",
    'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
    'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
    "Hi there, my name is Jimmy. I am writing\na 40 character test."
]

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

 even though there is a space before the a in adipisicing
*/
function f(str) {
    var n = Math.floor(str.length / 40);
    var newStr = str.split('');
    for (var i = 1; i <= n; i++) {
        if (newStr[i * 40] !== ' ') {
            newStr.splice(i * 40, 0, '\n');

        }
        else if (newStr[i * 40] == ' ') { newStr.splice(i * 40, 1, '\n'); }
    }
    return newStr.join('');
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

