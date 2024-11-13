// Basic Array Creation and Access

// How do you create an array with elements 1, 2, 3, 4, 5?
// How do you access the first and last elements of an array?
// How can you find the length of an array?
// Array Methods

// How do you add an element to the end of an array? What method would you use?
// How do you remove an element from the beginning of an array?
// Describe how the map method works. Can you give an example of its use?
// What is the difference between forEach and map?
// Array Iteration

// Write a function that doubles each element in an array.
// How can you use the reduce method to find the sum of all elements in an array?
// Describe how you would filter out only even numbers from an array.
// Array Manipulation

// How would you find the index of a particular element in an array?
// Explain how to remove an element from a specific position in an array.
// How do you merge two arrays?
// Advanced Array Operations

// Explain how to use find and findIndex. How are they different from filter?
// Write a function that flattens a nested array (e.g., [[1, 2], [3, 4]] to [1, 2, 3, 4]).
// How do you use sort to arrange an array of numbers in descending order?
// Describe how slice and splice differ in their function.
// Array of Objects

// Given an array of objects, write a function to find an object by a specific property value.
// How can you sort an array of objects based on a specific property?
// Write a function to add a new property to each object in an array.
// Would you like detailed explanations or examples for any of these questions?


let arr3 = [1,2,3,4]
let lastvlu = arr3.at(-1)
// console.log(lastvlu);


let arryy = ["F","G"]
let newARRAY = arryy.map((ele)=>{
  return ele +"add"
})
// console.log(newARRAY);

// Describe how you would filter out only even numbers from an array.
let herValue = [1,2,3,45,,6,7,8,89,0,]
const valueIwant = herValue.filter((data)=>data % 2 ===0)
// console.log(valueIwant);

const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 18 },
  { name: "Diana", age: 25 }
];

const haveFilter = people.filter((person)=> person.age <=18)
// console.log(haveFilter);


const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Grape" },
  { id: 4, name: "Orange" },
];
 let searched = "ap"
 let storedData = items.filter((product)=>product.name.toLowerCase().includes(searched.toLowerCase()) && product.id == "1")
// console.log(storedData);

const input = document.getElementById('input')
const btn = document.getElementById('btn')
let arrOfNames = ["faiz","umair","kaashif"]
btn.addEventListener('click',()=>{
  let inputarr = []
  inputarr.push(input.value)
  let v = arrOfNames.filter((vlue)=> vlue.toLowerCase().includes(inputarr))
console.log(v);

input.value=""
})





//push() adds an element at the end of an array and returns new length
const arr = [1, 2, 3, 4, 5];
const vlu = arr.push("clock");
// console.log(vlu);

//returning first element from an array
const arry = [1, 2, 3, 45];
const arry2 = arry[0];
// console.log(arry2);

// returning last element of the array using at()

const ary = [1, 2, 3, 44, 5, 6, 7];
const vl = ary.at(-1);
// console.log(vl);

function fun(sumVlues) {
  let res = 0;
  sumVlues.forEach((data) => {
    if (data > 0) {
      res += data;
    }
  });
  return res;
}
// console.log("results=> " + fun([1, 1, 1, 1, -5]));

function myfun(number, secNum) {
  return number.find((num) => {
    return num === secNum;
  });
}

// console.log(myfun([1, 2, 3, 4, 5], 5));

const obj1 = {
  Name: "faiz",
  experience: "3 Years",
};
const obj2 = {
  uname: "Habib ALi",
  profession: " Senior Developer",
};
const obj3 = {
  Username: "umair",
  workedAs: "Trainer",
};
const result = {
  created: "10/18/2024",
  ...obj1,
  ...obj2,
  ...obj3,
};
// console.log(result);


function yourFun(){
// console.log(arguments);

}
// console.log(yourFun(12,"faiz"));



const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
// if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
// }

// array = [2, 9]
// console.log(array);



function vlueSum(value){
  // console.log(value);
  value.forEach((singleValue)=>{
   let nm = 0;
  if(singleValue > 0  ){
     nm+=singleValue
     
    }
    return nm
    // console.log(nm);
  
 })
  

}

// console.log(vlueSum([1,2,3,4]));

let aryOfNames = ["faiz","ali"]
let uuu = arrOfNames.findIndex((name)=>{
  return name =="faiz"
})

console.log(uuu);

//Flat method concates nested array in a single array,it does not modify the original array!

let nestedArr = ["faiz",["mahmood"]]
console.log(nestedArr.flat());


let flag  = false 
let hhh = [1,2,3,4,6,7]
for(let i = 0;i< hhh.length;i++){
if(hhh[i]===4){
  flag = true
  console.log('value is found in the array!');
  break
  
}
else{
  console.log("not found");
  
}
}

