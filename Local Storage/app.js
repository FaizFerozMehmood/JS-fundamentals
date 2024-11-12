// What is localStorage in JavaScript, and how does it differ from sessionStorage?
// How can you store a simple string in localStorage?
// What data types can you store directly in localStorage?
// Explain how to retrieve an item from localStorage.
// How do you remove a specific item from localStorage?
// What is the command to clear all data in localStorage?
// Describe the key-value structure of localStorage.
// Can you store objects directly in localStorage? If not, how would you do it?
// Explain the purpose of JSON.stringify() and JSON.parse() in relation to localStorage.
// How can you check if a specific item exists in localStorage?
// What happens if you try to retrieve a key that doesn’t exist in localStorage?
// Is localStorage data accessible across different tabs in the same browser?
// Explain a practical use case for localStorage in a web application.
// Can localStorage store functions or classes? Why or why not?
// How can you update a value in localStorage?
// What is the maximum storage capacity of localStorage in most browsers?
// What security risks are associated with using localStorage?
// How can you iterate over all keys in localStorage?
// Explain how localStorage can be used to remember user preferences in a web application.
// Is localStorage synchronous or asynchronous, and what impact does that have on performance?
let str = "faiz";
localStorage.setItem("myvalue", str);
localStorage.removeItem('myvalue')
let getValue = localStorage.getItem("myvalue");
console.log(getValue);
// arr//
let arr = ["faiz", "umair"];
localStorage.setItem("myarr", arr);
let getarr = localStorage.getItem("myarr") || [];
console.log(getarr);

// object
let obj = {
    name: "faiz",
    age: "24",
    isStudent: true,
};

localStorage.setItem("myObj", JSON.stringify(obj));
let getObj = JSON.parse(localStorage.getItem("myObj"));
console.log(getObj);

let arrOfObj = [
    {
        name: "faiz",
        age: "24",
        isStudent: true,
    },
    {a:"b",c:"d"}
];
localStorage.setItem("arrofobj",JSON.stringify(arrOfObj))
let get = JSON.parse(localStorage.getItem('arrofobj'))

localStorage.clear()
console.log(get);
console.log(localStorage);

