//first letter capital rest of the letter in lowerCase
function capitalize(word) {
return word[0].toUpperCase()+word.substring(1).toLowerCase()
}

console.log(capitalize("sam")); 
console.log(capitalize("ALEX"));
console.log(capitalize("chARLie"));

 function getNumberOfChars(name) {
//     // number of characters in: name
return name.length

}


 function getFirstChar(name) {
    // first character of: name
    return name[name.length-1]

}


//  function getLastChar(name) {
//     // last character of: name

// }

//  function getLower(name) {
//     // name all in lower case (example: "ABC" becomes "abc
// /** @param {string} name */
//  function getUpper(name) {
//     // name all in upper case (example: "abc" becomes "ABC")

// }

//  function getCapitalized(name) {
//     // capitalized version of name (example: "alEX" becomes "Alex")

// }


function herFun(str){
    console.log(str);
    
   return str.map((vlu)=>{
    return vlu.length
   })
}
console.log(herFun(["abc","fef"]));

const input = document.getElementById('input')
const btn  = document.getElementById('btn')
btn.addEventListener('click',()=>{
let userValue = input.value    
if(isPalindrome(userValue)){
    console.log(`${userValue} is palindrome`);
    
}
else{
    console.log(`${userValue} is not palindrome`);
}
})
function isPalindrome(value){
    let str = value.toLowerCase()
    let reversed = str.split('').reverse().join('')
    return str === reversed
}


let arr1 = ["faiz","umair","ali"]
let arr2 = ["faiz","umair","ali"]
if(arr1[0]==arr2[0]){
    console.log("yes");
    
}


const arrobj = [{userName:"faiz",age:"21"},
    {userName:"umair",age:"31"}
]

function findValue (obj){
  let myarr = [{userName:"faiz",age:"31"},
    {userName:"ali",age:"31"},
    {userName:"kashif",age:"31"}
  ]
 myarr.map((dta)=> {
console.log(dta.userName==obj.userName);

})

}
console.log(findValue(arrobj));
