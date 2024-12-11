 function useLoop(ele){
 ele.forEach(function(ele){
    console.log(ele);
    
 })
 }
 useLoop([1,2,3,4,5,6])



//  Sum grades 

// Complete the function sumGrades such that it
//  returns the sum of all the grades it receives as
//   a parameter. We haven't seen reduce yet, so try to
//    solve it using what you have learned so far.

function sumGrades(grades){
   let sum = 0;
   grades.forEach(function(grade){
      sum+=grade

   })
   return sum

}
sumGrades([1,2,3,4,6])

// Complete the function sumOddNumbers such that it 
// returns the sum of all the odd numbers from the numbers parameter it receives.
// The function should also work for negative numbers.
function myFunction(numbers){
   let vl = 0
   numbers.forEach((data) => {
      data % 2!==0? vl += data :"nodata"
   //   
   })
   return vl
}
console.log("results =>>>>>   ",myFunction([-2, -3, 4, 5, 6]));


function getNumbersOfStrings(strings){
     return strings.map((str)=>{
      return str.length
     })
}

console.log(getNumbersOfStrings(["abc","dfrcjdjds"]));

// for (let i = 0; i <= 10;i++){
//    console.log(i);
   
// }


function herFun(stri){
   return stri.map((stri)=>{
      return stri.length
   })


}
// console.log(herFun(["faiz","andHisPartner"]));


for(let i = 1; i <= 10; i++){
   // console.log(`i = ${i}, ${i} * 2 = ${i * 2}`);
}


// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
 // Take table number input from the user
// let tableNumber = parseInt(prompt("Enter the number to print the multiplication table for:"));

// // Take length of the table from the user
// let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// // Print the multiplication table using a for loop
// console.log(`Multiplication Table of ${tableNumber}:`);
// for(let i = 1; i <= tableLength; i++) {
//     console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
// }


// finding the intersection of two objects 
function handleObj(obj){
return Object.keys(obj).length
}
const myObj = {1:"a",2:"b"}
console.log(handleObj(myObj));

function intersection(obj1, obj2) {
   const result = {};
   for (let key in obj1) {
     if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
       result[key] = obj1[key];
     }
   }
   return result;
 }
 
 const obj1 = { a: 1, b: 2, c: 3 };
 const obj2 = { a: 1, c: 3, d: 4 };
 console.log(intersection(obj1, obj2)); // Output: { a: 1, c: 3 }
 
let arr = [1, 2, 3, 4, 5, 7, 8, 9];
let res =[]
arr.forEach((data,index)=>{
   res.push(data +index+1) 
   
   
})
console.log(res);
