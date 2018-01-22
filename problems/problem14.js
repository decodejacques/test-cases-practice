var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hello people of the world, today is a great day!",
  "Who runs the world? Those behind the scenes...",
  "DECODEMTL is making coders out of no-ders",
  "Canada has a number of provinces within its borders",
  "WeWork is a modern office solution for modern businesses"
]

let outputs = [
  "hello people of the world, today is a gr\neat day!",
  "Who runs the world? Those behind the sce\nnes...",
  "DECODEMTL is making coders out of no-der\ns",
  "Canada has a number of provinces within \nits borders",
  "WeWork is a modern office solution for m\nodern businesses"
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

