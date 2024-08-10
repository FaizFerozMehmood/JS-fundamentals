
function capitalize(word) {
    return word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase()

}

console.log(capitalize("sam")); 
console.log(capitalize("ALEX"));
console.log(capitalize("chARLie"));

/** @param {string} name */
export function getNumberOfChars(name) {
    // number of characters in: name
    return name.length

}


/** @param {string} name */
export function getFirstChar(name) {
    // first character of: name
    return name.at(0)

}

/** @param {string} name */
export function getLastChar(name) {
    return name[name.length-1]
    // last character of: name

}

/** @param {string} name */
export function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLowerCase()

}

/** @param {string} name */
export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toLocaleUpperCase()

}

/** @param {string} name */
export function getCapitalized(name) {
    return name[0].toUpperCase()+name.substring(1).toLowerCase()
    // capitalized version of name (example: "alEX" becomes "Alex")

}