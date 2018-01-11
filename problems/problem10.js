var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hello WORLD",
  "YOU have NO chance TO survive MAKE your TIME",
  {},
  [],
  0
]

let outputs = [
  "Hello World",
  "You Have No Chance To Survive Make Your Time",
  undefined,
  undefined,
  undefined
]

/*
Make this function return the input string, capitalized.
You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/

// Gotta use a for loop... again. :(

const f = str => {
    if (typeof str === "string") {
        if (str.includes(" ")) {
            str = str.toLowerCase().split(" "); // 'str' now "cast" (sic) as an array.
            const resArr = [];
            for (i = 0; i < str.length; i++) {
                resArr.push(str[i][0].toUpperCase() + str[i].slice(1, str[i].length));
            }
            return resArr.join(" ");
        } else {
            return str.length > 0 ? str[0].toUpperCase() + str.slice(1, str.length - 1).toLowerCase() : "" ;
        }
    } else {
        return undefined;
    }
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

