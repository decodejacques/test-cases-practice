// SOLVED!

var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "01234567890123456789012345678901234567890123456789012345678901234567890123456789",
    "0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789",
    "0123456789012345678901234567890123456789 0123456789012345678901234567890123456789",
    "                                         Second row",
    "0123456789012345678901234567890123456789                                       9"
]

let outputs = [
    "0123456789012345678901234567890123456789\n0123456789012345678901234567890123456789",
    "0123456789 0123456789 0123456789 0123456\n789 0123456789 0123456789 0123456789",
    "0123456789012345678901234567890123456789\n0123456789012345678901234567890123456789",
    "Second row",
    "0123456789012345678901234567890123456789\n9"
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

// 1- Verifies is loop is necessary
// 2- Loop to change line at every 40 characters
// 3- Verifies if there is more text modify
// 4- Verifies if the first character of a new line would be an empty character
// 5- If that happens, it simply skips it and verifies the next character
// 6- No risk of this never ending or going to the end of the string because of str.trim() at beginning
// 7- Extracts 40 characters strating from the first index and then places the extracted string into the array's next position

function f(str) {
    var newStr = str.trim();
    if (newStr.length < 40) return newStr; // *1
    var i = 0;
    var j = 0;
    var arr = [];
    var endLoop = true;
    while (endLoop === true) { // *2
        if (newStr.length > (40 * i) + j) { // *3
            if (newStr.charAt((40 * i) + j) === " ") while (newStr.charAt((40 * i) + j) === " ")++j; // *4*5*6
            arr[i] = newStr.slice((40 * i) + j, (40 * (i + 1)) + j); // *7
        }
        else endLoop = false;
        ++i;
    } return arr.join("\n");
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