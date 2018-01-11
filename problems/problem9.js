var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "hi hello",
    "",
    "hi yo",
    "bonjour hi",
    "oh hello megan"
  
]

let outputs = [
    "hello",
    "",
    "yo",
    "bonjour",
    "megan"
  
]

/*
Make this function return the longest word in the input string. 
If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/



function f(str) {
    if(typeof str !== "string"){
        return ""
    }
    var tempArray = str.split(' ');
    var bigLength =0;
    var longestWord = "";
  
    for (let i = tempArray.length-1; i>=0; i--){
        if (tempArray[i].length > bigLength){  
          bigLength= tempArray[i].length;
          longestWord = tempArray[i];
         
        }
    
    }return longestWord
    
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

