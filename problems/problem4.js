var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["", 2],
  [1, 'hello'],
  ["bonjour", 8],
  [4,1],
  [["abv"], 4],
  ["hamburger", 5],
  ['cat', -1]

]

let outputs = [
  "o",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "r",
  undefined


]

/*
Make this function return the letter at the specified position in the string. 
If no such letter exists, it should return undefined.

For example:
f("hello", 1); // e
f("", 4); // undefined
f("abc", 0); // a

*/
function f(str, index) {
  if (typeof str !== "string" || typeof index !== "number"){
    return undefined
  }else if ((index < str.length === false) || (index < 0 === true)){
    return undefined
  }else {
    return str[index];
  }
}

    

function runTest(i) {
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input[0], input[1]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
