var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ['hi', 4],
  ['hey', 1],
  ['.', 3],
  ['', 15],
  ['hello', -4],
  ['hola', 'aloha'],
  ['salut', 0]
]

let outputs = [
  'hihihihi',
  'hey',
  '...',
  '',
  '',
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
function f(arr) {
    if (arr[1] === 0 || arr[1] < 0) {return '';}
    if (typeof arr[0] !== 'string' || typeof arr[1] !== 'number' ) {return undefined;}
    return arr[0].repeat(arr[1]);
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

