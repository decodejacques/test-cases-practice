 var assert = require('assert');

// we need 5 test cases. 
let inputs = [
"hello WORLD",
"hi there",
'BONJOUR',
"what THE F",
"ok OK OK"
  
]

let outputs = [
    "Hello World",
    "Hi There",
    "Bonjour",
    "What The F",
    "Ok Ok Ok"
  
]

/*
Make this function return the input string, capitalized. You must use 
a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str){
    tempArray= str.toLowerCase().split(' ');
    for (let i=0; i <tempArray.length; i ++){
        tempArray[i] = tempArray[i].split('');
        tempArray[i][0]=tempArray[i][0].toUpperCase();
        tempArray[i]= tempArray[i].join('');
    }
    return  tempArray.join(' ');
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

