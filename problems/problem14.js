var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum elit in vehicula tempus. Suspendisse iaculis, sapien aliquam rhoncus ornare, tortor mauris molestie sapien.",
  0,
  {},
  [],
  null
]

let outputs = [
    "Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam\n",
    "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Nulla rutrum elit in ve\nhicula tempus. Suspendisse iaculis, sapi\nen aliquam rhoncus ornare, tortor mauris\nmolestie sapien.\n",
    undefined,
    undefined,
    undefined,
    undefined
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

// not as robust as I'd like, due to the trimming... 
// as a result of the trim, some characters are cut at char 39 instead of 40.

const f = str => { 
    if (typeof str !== "string") { return undefined }
    const strArr = [];
    for (i = 0, j = 1; i < str.length; i += 40, j++) {
            strArr.push((str.slice(i, j * 40).trim())+"\n");
        } 
    return strArr.join('');
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