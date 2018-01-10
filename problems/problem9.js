var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hello is what",
  "hello is whwewewewewewat",
  "hello is whasdasdat",
  "hello is wasdat",
  "hello is whasdasaat"
]

let outputs = [
  'hello',
  'whwewewewewewat',
  'whasdasdat',
  'wasdat',
  'whasdasaat'

]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    let arr = str.split(' ');
    let bigWord= '';
    for(let i = 0;i < arr.length; i++) {
        if(arr[i].length >= bigWord.length) {
            bigWord = arr[i];
            
        } 
    } return bigWord;
    
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

