var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  'hello world',
  'go',
  'away',
  'FaT',
  'man'
]

let outputs = [
  'Hello World',
  'Go',
  'Away',
  'Fat',
  'Man'
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
  var lower = str.toLowerCase()
  console.log(lower)
  var words = lower.split(' ')
  console.log(words)
  
  
  
  for (var i=0; i<words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  
  }
  
  return words.join(' ')
   
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

