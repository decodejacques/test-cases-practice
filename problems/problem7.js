var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ['blue', 2],
  ['na na na ', 3],
  ['sa', 8],
  ['asdasd', 3],
  ['true', 'bark'],
  [undefined, 4],
  ['armor', 0]
]

let outputs = [
  'blueblue',
  'na na na na na na na na na ',
  'sasasasasasasasa',
  'asdasdasdasdasdasd',
  undefined,
  undefined,
  ''
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f("foo", 3) // "foofoofoo"
f("fo", 3) // "fofofo"
f("foo", -1) // undefined
*/
function f(str) {
    var word = str[0];
    var num = str[1];
    var empty = '';
    if (typeof word !== 'string') {
        return undefined;
    } else if (isNaN(num)) {
        return undefined;
    } else if (num <= 0) {
        return empty;
    } else if (num > 0) {
        return word.repeat(num);
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
runTest(5);
runTest(6);

