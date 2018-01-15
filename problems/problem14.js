var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "This is my first test string that I'm trying to split and break into more than one line",
  "This is a shorter string with no break",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisl justo.",
  "String number four out of five that wraps after 40 characters",
  "Very short string no break"

]

let outputs = [
  "This is my first test string that I'm \n
  trying to split and break into more than \n
  one line",
  "This is a shorter string with no break",
  "Lorem ipsum dolor sit amet, consectetur \n
  adipiscing elit. Sed non nisl justo.",
  "String number four out of five that \n
  wraps after 40 characters",
  "Very short string no break"
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

