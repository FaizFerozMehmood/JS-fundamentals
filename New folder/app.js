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

// Coding Question 5: Develop a JavaScript function named formatNumber(num, decimalPlaces)
//  that formats a number num to a string 
//  representation with the specified number of decimal places decimalPlaces.
//   Ensure that the function returns a string even if the input is not a valid number.
// Hint: Use the .toFixed() method to control 
// the number of decimal places. Remember to
//  handle non-numeric inputs gracefully
//   to prevent errors.
function formatNumber(num,decimalPlaces){
    if(isNaN(num)){
        return "NaN";

    }
    return Number(num).toFixed(decimalPlaces)
}

console.log(formatNumber(3.14159, 2))
console.log(formatNumber("3.14159, 2"))
console.log(formatNumber("abc", 2))
let nmbr = "0"
let nmbr2 = "1"
const btn = document.createElement('button')
btn.innerText = "click here"
document.body.appendChild(btn)
btn.addEventListener('click',()=>{
let respose = Number(nmbr) + Number(nmbr2)
const p = document.createElement('p')
nmbr = respose
p.innerText = nmbr
document.body.appendChild(p)

})

let strvalue = "maan"
 let reverse = strvalue.split('').reverse().join('')
 
// let isPalindrome = true;
if(strvalue === reverse){
  console.log(`${strvalue} is palindrome`);
  
}
else{
  console.log(`${strvalue} is not palindrome`);

}
//descending order
let sortt  = [1,2,3,4,56,]
let newone = sortt.sort((a,b)=>{
  return b-a
})
console.log(newone);

// ascending oder
let ascending = [0,39,3,45,6,7,7]

let getAscending = ascending.sort((a,b)=>{
  return a-b
})
console.log(getAscending);


let fruits = ["orange","apple"]
fruits.sort()
console.log(fruits);  // ['apple', 'orange']

// reverse//
let rev = [0,39,3,45,6,7,7]
rev.reverse()
console.log(rev);


let ind = ['faiz',"umaiar","ali"]
let getValue = ind.indexOf("ali")
if(getValue !==-1){
  ind.splice(getValue,1)
}
console.log(ind);

let indd = ['faiz',"umaiar","ali"]
let getInd = indd.indexOf('faiz')
console.log(getInd);
if(getInd !==-1){
  indd.splice(getInd,1)
}
console.log(indd);




