// SOLVED!

var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "01234567890123456789012345678901234567890123456789012345678901234567890123456789",
    "0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789",
    "0123456789012345678901234567890123456789 0123456789012345678901234567890123456789",
    "                                         Second row",
    "                               First rowSecond row"
]

let outputs = [
    "0123456789012345678901234567890123456789\n0123456789012345678901234567890123456789",
    "0123456789 0123456789 0123456789 0123456\n789 0123456789 0123456789 0123456789",
    "0123456789012345678901234567890123456789\n0123456789012345678901234567890123456789",
    "\nSecond row",
    "First row\nSecond row"
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
    str.trim();
    if (str.length > 40) {
        var firStr = str.slice(0, 40);
        var secStr = str.slice(40);
        var newStr = [firStr.trim(), "\n", secStr.trim()].join("");
        return newStr;
    }
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

