// SOLVED!

var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "01234567890123456789012345678901234567890123456789012345678901234567890123456789",
    "0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789",
    "0123456789012345678901234567890123456789 0123456789012345678901234567890123456789",
    "                                         Second row",
    "                               First row and Second row"
]

let outputs = [
    "0123456789012345678901234567890123456789\n0123456789012345678901234567890123456789",
    "0123456789 0123456789 0123456789 0123456\n789 0123456789 0123456789 0123456789",
    "0123456789012345678901234567890123456789\n0123456789012345678901234567890123456789",
    "Second row",
    "First row and Second row"
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
    console.log("\nFunction Start\n" + str + "\n");
    var newStr = str.trim();
    console.log(newStr);
    var arr = [];
    var endLoop = true;
    var i = 0;
    
    if (newStr.length > 40) {
        while (endLoop === true) {
            console.log("LOOP");
            if (newStr.length > 40 * i) {
                arr[i] = newStr.slice(40 * i, 40 * (i + 1)).trimLeft();
                console.log(arr[i]);
            }

            else {
                endLoop = false;
            }
            ++i;

            if (str.length === 40 * i) endLoop = false;
        }
        return arr.join("\n");
    }
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

