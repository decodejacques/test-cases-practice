var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 1, 5],
  [5, 2, 3],
  [5, 'a', 0],
  ['x', 7, 6],
  [2, 9, 'a'],

]

let outputs = [
  8,
  10,
  5,
  13,
  11
]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
  var notNum = []
  var num = []
  var total = 0;

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      num.push(arr[i])
    } else {
      notNum.push(arr[i]);
    }
  }
  console.log(num);

  for (var j = 0; j < num.length; j++) {
    total += num[j];
    console.log(total);
  }
  console.log(total);
  return total
}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  var expected = outputs[i];
  var actual = f(inputs[i]);
  assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

