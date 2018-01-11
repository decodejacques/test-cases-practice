var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hello world",
  "ALL YOUR BASE ARE BELONG",
  "jAvAscrIpt is FuN",
  "ABBBaaach nbxjHH",
  "wELComE"
]

let outputs = [
    "Hello World",
    "All Your Base Are Belong",
    "Javascript Is Fun",
    "Abbbaaach Nbxjhh",
    "Welcome"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
  var arr = str.toLowerCase().split(" ");
  var newStr = "";
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1);
  }
  return newStr += arr.join(" "); 
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

