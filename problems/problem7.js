var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ['abc', 3],
    [' defg ', 5],
    ['abc', -10],
    ['abc', 'abc'],
    ['abc', -4],
    ['choo-choo', 5],
    ['cha cha cha ', 6]
];

let outputs = [
    'abcabcabc',
    ' defg  defg  defg  defg  defg ',
    '',
    undefined,
    '',
    'choo-choochoo-choochoo-choochoo-choochoo-choo',
    'cha cha cha cha cha cha cha cha cha cha cha cha cha cha cha cha cha cha '
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
function f(arr) {
        switch (true) {
            case arr[1] < 1:
              return "";
              break;
            case Number.isInteger(arr[1]) === false:
              return undefined;
              break;
            case Number.isInteger(arr[1]) === true:
              return arr[0].repeat(arr[1]);
              break;             
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

