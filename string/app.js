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