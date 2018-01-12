var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam",
  "Handshake backing conversion android traction angel investor analytics low hanging fruit ecosystem",
  "a b c d e f g h i j k l m n o p q r s t u v w x y z",
  "0123456789012345678901234567890123456789",
  "This string is too short."
]

/*To make sure I had the right position of \n in the expected output*/
/*var z = "Handshake backing conversion android traction angel investor analytics low hanging fruit ecosystem";
console.log("39eme = " + z.charAt(38));
console.log("40eme = " + z.charAt(39));
console.log("41eme = " + z.charAt(40));
console.log("79eme = " + z.charAt(78));
console.log("80eme = " + z.charAt(79));
console.log("81eme = " + z.charAt(80)); */

let outputs = [
  "Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam",
  "Handshake backing conversion android tra\nction angel investor analytics low hangi\nng fruit ecosystem",
  "a b c d e f g h i j k l m n o p q r s t \nu v w x y z",
  "0123456789012345678901234567890123456789",
  "This string is too short."
]

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

 even though there is a space before the a in adipisicing
*/
function f(str) {
    var myString = str;
    ans = [];
    while (myString.length > 40) {
        ans.push(myString.slice(0,40) + "\n");
        myString = myString.slice(40);

        if (myString.charAt(0) == " ") {
            myString = myString.slice(1);
        }
    }

    ans.push(myString);
    return ans.join("");
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

