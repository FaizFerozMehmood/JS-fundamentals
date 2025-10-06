// //first letter capital rest of the letter in lowerCase
// function capitalize(word) {
// return word[0].toUpperCase()+word.substring(1).toLowerCase()
// }

// console.log(capitalize("sam")); 
// console.log(capitalize("ALEX"));
// console.log(capitalize("chARLie"));

//  function getNumberOfChars(name) {
// //     // number of characters in: name
// return name.length

// }


//  function getFirstChar(name) {
//     // first character of: name
//     return name[name.length-1]

// }


// //  function getLastChar(name) {
// //     // last character of: name

// // }

// //  function getLower(name) {
// //     // name all in lower case (example: "ABC" becomes "abc
// // /** @param {string} name */
// //  function getUpper(name) {
// //     // name all in upper case (example: "abc" becomes "ABC")

// // }

// //  function getCapitalized(name) {
// //     // capitalized version of name (example: "alEX" becomes "Alex")

// // }


// function herFun(str){
//     console.log(str);
    
//    return str.map((vlu)=>{
//     return vlu.length
//    })
// }
// console.log(herFun(["abc","fef"]));

// const input = document.getElementById('input')
// const btn  = document.getElementById('btn')
// btn.addEventListener('click',()=>{
// let userValue = input.value    
// if(isPalindrome(userValue)){
//     console.log(`${userValue} is palindrome`);
    
// }
// else{
//     console.log(`${userValue} is not palindrome`);
// }
// })
// function isPalindrome(value){
//     let str = value.toLowerCase()
//     let reversed = str.split('').reverse().join('')
//     return str === reversed
// }


// let arr1 = ["faiz","umair","ali"]
// let arr2 = ["faiz","umair","ali"]
// if(arr1[0]==arr2[0]){
//     console.log("yes");
    
// }
// const arrobj = [
//     { userName: "faiz", age: "21" },
//     { userName: "umair", age: "31" },
//   ];
  
//   function findValue(objArray) {
//     const myarr = [
//       { userName: "faiz", age: "31" },
//       { userName: "ali", age: "31" },
//       { userName: "kashif", age: "31" },
//     ];
  
//     const intersection = myarr.filter((dta) =>
//       objArray.some((obj) => obj.userName === dta.userName)
//     );
  
//     return intersection;
//   }
  
//   console.log(findValue(arrobj));
  

//   function getvalue(arr){
//       console.log(arr.split(" ,"));

//   }
// console.log(getvalue("ksdj123"));


let strr = "faiz"
console.log(strr.split("").reverse().join(""))



function findLargest(numbers){
   let largest = numbers[0]
   numbers.forEach((number)=>{
    if(number > largest){
      largest = number
    }
   })
   return largest
}

console.log(findLargest([1,2,3,4,5,6,7,8]))

function countVowel(str){
  let vowel = "aeiou"
  let count = 0

  str.split("").forEach((vl)=>{
    if(vowel.includes(vl)){
      console.log("helooo");
      count = count++
      
    }
  })
  return count;
}
console.log(countVowel("javascript"))




function removeDups (numbers){
 let neww = []
 numbers.forEach((num)=>{
  if(!neww.includes(num)){
    neww.push(num)
  }
 })
 return neww
}
console.log(removeDups([1,2,3,3,3,4,5,65,6,5,5,5]))



function separateEvenOdd(arr){

  let even = []
  let odd =[]
  arr.forEach((num)=> {
    if(num % 2===0){
      even.push(num)
    }
    if(num % 2!==0){
      odd.push(num)
    }
  })
  return {even , odd}
}

console.log(separateEvenOdd([1,2,3,4,5,5,6,6,7]))