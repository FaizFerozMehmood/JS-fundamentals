// function myFun(vlu){
//     let h = ""
//     const cvrtVal = vlu.trim().split(" ");
//     console.log(cvrtVal);

//     cvrtVal.forEach((val, index)=>{
//        console.log(val, index);
//        if(index > 0){
//         h += val.at(0).toUpperCase() + val.slice(1).toLowerCase()
//        }else{
//         h += val
//        }

//     })
//    console.log(h);

// }
// myFun('hello world hello kahsn kkk ovvv')

// let arr = [12,12,13,13,14,14]
// const respose = arr.filter((e)=>{
// console.log(e);
// if(e)
// })

// const vlu = "faiz"
// localStorage.setItem("vlu",vlu)

// console.log(localStorage.getItem("vlu",vlu));

// const obj = {
//     name:"faiz",
//     age:23,
//     isStudent :true
// }

// localStorage.setItem('userInfo',JSON.stringify(obj))

// const storedObj = localStorage.getItem('userInfo')
// if(storedObj){
//     const userData = JSON.parse(storedObj)
//     console.log(userData);

// }else{
//     console.log("there is might be something wrong!");

// }

//Coding Question 1: Write a function in JavaScript called roundNumber()
// that takes a number as input and returns the number
//  rounded to the nearest integer.

function roundNumber(number) {
  let calculate = Math.round(number);
  return calculate;
}
console.log(roundNumber(2.4));

//Coding Question 2: Create a function called generateRandomInRange(min, max) that generates a
//  random integer between min and max (inclusive) in JavaScript.
// Hint: You can use Math.random() to generate a random
//  number between 0 and 1, then scale and shift it to
//  fit within the specified range.

function generateRandomInRange(min, max) {
  let generate = Math.round(Math.random(min, max) * 10);
  return generate;
}
console.log(generateRandomInRange(3, 6));

// Coding Question 3: Write a JavaScript function
// called convertToNumber(str) that takes a
// string as input and converts it into a number.
//  Ensure the function returns NaN if the string
//   cannot be converted into a valid number.
// Hint: Look into the parseInt() and parseFloat()
//  functions in JavaScript. Make sure to handle cases
//   where the string is not a valid number

function convertToNumber(str) {
  let vlu = parseFloat(str);
  if (isNaN(vlu)) {
    return NaN;
  }
  return vlu;
}
console.log(convertToNumber("20"));
console.log(convertToNumber("abc"));
console.log(convertToNumber(20));
console.log(convertToNumber(true));
