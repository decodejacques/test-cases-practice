var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "helo world",
  "ALL YOUR BASE ARE BELONG",
  "MaMa sita",
  "Noé provost",
  "b a d de"

]

let outputs = [
  "Helo World",
  "All Your Base Are Belong",
  "Mama Sita",
  "Noé Provost",
  "B A D De"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/

   
function f(str) {
    var words = str.split(" ")
    var ret = "";
    for(var i = 0; i < words.length; i++) {
         ret = ret + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()+" "
        
        }
        return ret;
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

