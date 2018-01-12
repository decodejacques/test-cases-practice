
// var x = 'hello wORLD';

// function f(str) {
//     tempArray = str.split(' ');
//     for (let i=0; i>tempArray.length; i ++){
//         newArr = str.split("")
        
//         }
        
//     }
 


    
// function f(str){
//     tempArray= str.toLowerCase().split(' ');
//     for (let i=0; i <tempArray.length; i ++){
//         tempArray[i] = tempArray[i].split('');
//         tempArray[i][0]=tempArray[i][0].toUpperCase();
//         tempArray[i]= tempArray[i].join('');
//     }
//     return  tempArray.join(' ');
// }
 
// console.log(f(x));


/*
Make this function return the sum of all the numbers in the input array. 
If any element in the array is not a number, skip it. 
If the array is empty, return zero.
*/
// var x = [];


// function f(arr) {
//     var sum =0;
//     for (let i=0; i< arr.length; i ++){
//         if (typeof arr[i] === "number"){
//             sum += arr[i];
//         }
//     }
//    return sum;
// }

// console.log(f(x));


// function f(arr) {
//     var numArr=[];
//     for (let i=0; i< arr.length; i ++){
//         if (typeof arr[i] === "number"){
//             numArr.push(arr[i]);
//         }
//     }
//    return numArr;
// }

// console.log(f(x));


// var x = "RaCEcar";

// var newString = x.toLowerCase().split('').reverse().join('');

// console.log(newString);

// console.log(x.toLocaleLowerCase());




// function f(str) {
//     var lowStr = str.toLowerCase();
//     if(lowStr === lowStr.split('').reverse().join('')){
//         return true
//     }else {return false};
    
// }

// // console.log(f(x));
// uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
// uniqueElements([1,2,3], [1,2,3]); // []

// function f(arr1, arr2) {
//     uniArr=[];
//     for (i=0; i < arr1.length; i ++){
//         for (j=0; j< arr2.length; j ++){
//             if (arr1[i] === arr2[j]){
//                 continue}
//                 else {push}

                

               

//             }
//         }
//     }
//     return uniArr
// }

// console.log(f([0,1,2,3], [1,3,4,5]));

function f(array1, array2) {	
var unique = [];
for(var i = 0; i < array1.length; i++){
    var found = false;

    for(var j = 0; j < array2.length; j++){ // j < is missed;
     if(array1[i] == array2[j]){
      found = true;
      break; 
    }
   }
   if(found == false){
   unique.push(array1[i]);
  }
}
}

console.log(f([0,1,2,3], [1,3,4,5]));