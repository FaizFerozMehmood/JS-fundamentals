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

// const fizzObj = localStorage.getItem('userInfo')
// if(fizzObj){
//     const userData = JSON.parse(fizzObj)
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
function formatNumber(num, decimalPlaces) {
  if (isNaN(num)) {
    return "NaN";
  }
  return Number(num).toFixed(decimalPlaces);
}

console.log(formatNumber(3.14159, 2));
console.log(formatNumber("3.14159, 2"));
console.log(formatNumber("abc", 2));
let nmbr = "0";
let nmbr2 = "1";
const btn = document.createElement("button");
btn.innerText = "click here";
document.body.appendChild(btn);
btn.addEventListener("click", () => {
  let respose = Number(nmbr) + Number(nmbr2);
  const p = document.createElement("p");
  nmbr = respose;
  p.innerText = nmbr;
  document.body.appendChild(p);
});

let strvalue = "maan";
let reverse = strvalue.split("").reverse().join("");

// let isPalindrome = true;
if (strvalue === reverse) {
  console.log(`${strvalue} is palindrome`);
} else {
  console.log(`${strvalue} is not palindrome`);
}
//descending order
let sortt = [1, 2, 3, 4, 56];
let newone = sortt.sort((a, b) => {
  return b - a;
});
console.log(newone);

// ascending oder
let ascending = [0, 39, 3, 45, 6, 7, 7];

let getAscending = ascending.sort((a, b) => {
  return a - b;
});
console.log(getAscending);

let fruits = ["orange", "apple"];
fruits.sort();
console.log(fruits); // ['apple', 'orange']

// reverse//
let rev = [0, 39, 3, 45, 6, 7, 7];
rev.reverse();
console.log(rev);

let ind = ["faiz", "umaiar", "ali"];
let getValue = ind.indexOf("ali");
if (getValue !== -1) {
  ind.splice(getValue, 1);
}
console.log(ind);

let indd = ["faiz", "umaiar", "ali"];
let getInd = indd.indexOf("faiz");
if (getInd !== -1) {
  indd.splice(getInd, 1);
}
console.log(getInd);
console.log(indd);

let numAr = [0, 2, 3, 4];
let count = 0;
numAr.forEach((num) => {
  if (num) {
    count++;
  }
});
console.log(count);

// remove removeDuplictate
// let arry = [2,2,3,4,4,5,7,7]
function removeDuplictate(abc) {
  let unique = [];
  for (let i = 0; i < abc.length; i++) {
    if (!unique.includes(abc[i])) unique.push(abc[i]);
  }

  return unique;
}
console.log(removeDuplictate([1, 1, 2, 2, 3, 3]));
console.log(removeDuplictate([1, 1, 3, 2, 3, 3]));

function pali(vl) {
  let pre = vl.toLowerCase().replace(/[^a-z0-9]/g, "");
  let res = pre.split("").reverse().join("").toLowerCase();
  console.log(res, ",,,,,", pre);
  return pre === res;
}
console.log(pali("A man, a plan, a canal, Panama"));

function counteOccurence(arr, num) {
  let leng = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      leng++;
    }
  }
  console.log("times of occurence of the 5 character  is =>", leng);
}
console.log(counteOccurence([1, 2, 2, 4, 5, 5, 5, 5], 5));

// NESTED ARRAY INTO SINGLE-LEVEL ARRAY
const nestedARRY=(arg)=>{
console.log(arg);
return arg.flat()

}
console.log(nestedARRY([1,2,3,4,[5,6],[7]]));


// Write a function fizzBuzz that prints numbers from 1 to 100. For multiples of 3, print "Fizz";
//  for multiples of 5, print "Buzz"; and for multiples
//   of both 3 and 5, print "FizzBuzz".

function printNumbers(vlue){
  let fizz = 0
// console.log(vlue,"vlue");
if(vlue % 3 ==0){
  console.log("fizz",vlue);
}
if(vlue % 3 ==0 && vlue % 5 ==0){
  console.log("fizzbuzz",vlue);
}
if(vlue % 5 ==0){
  console.log("buzz",vlue);
}
}


for(let i = 0; i<=100; i++){
  let value = i
  printNumbers(value)
}