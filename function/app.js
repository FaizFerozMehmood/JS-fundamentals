// //  default parameters in function
//  function buyProducts(name1 = "milk",name2 = "aalo",name3 = "channy k daal"){
//     console.log(`remember to buy ${name1}`);
//     console.log(`remember to buy ${name2}`);
//     console.log(`remember to buy ${name3}`);
//  }
// buyProducts()

// //++++++++++++++RETURN++++
// function sayHello(firstName,lastName){
//     return firstName +" "+ lastName

// }
//  const fulName = sayHello("faiz","ali")
//  console.log(fulName);

//         // ++++++++++++++++++

//  function multiplyByNineFifths(number) {
//     return number * (9/5);

//   };

//   function getFahrenheit(celsius) {
//     return multiplyByNineFifths(celsius) + 32;
//   };

//  console.log(getFahrenheit(15));
//  const obj = {
//   name :"faiz",
//   age:24,
//   isStudent :true,
//  }
// let h2 = document.getElementById("heading")
//  function herFun(obj){
//   console.log(obj.isStudent||obj.name);

//  }

//  herFun(obj)

// const input = document.getElementById('input')
// const btn = document.getElementById('btn')
// const todoList = document.getElementById('Ulist')
// let todos = [];

// btn.addEventListener('click', () => {
//   const task = input.value
//   if(!task) return alert("plzz enter todos")

//   if (task) {
//     todos.push(task)
//     input.value = ''
//     renderTodos()
//   }
// });

// function renderTodos() {
//   todoList.innerHTML = ''

//   todos.forEach((task, index) => {
//     const listItem = document.createElement('li')
//     listItem.innerText = task

//     const deleteBtn = document.createElement('button')
//     deleteBtn.innerText = 'Delete'
//     deleteBtn.addEventListener('click', () => deleteTask(index))

//     listItem.appendChild(deleteBtn)
//     todoList.appendChild(listItem);
//   });
// }

// function deleteTask(index) {
//   todos.splice(index, 1);
//   renderTodos();
// }

// function checkData(){
//   let counter = 0
//   let arrOfNumBer = [0,false,3,4,5]
//   arrOfNumBer.forEach((item)=>{
//     if(!item){
// counter = counter + 1
//     }
//   })

//   console.log("counter",counter);

// }
// checkData()

// const input = document.getElementById('input');
// const btn = document.getElementById('btn');
// let container = document.querySelector('.container')
// const arry = ["faiz","mahmood","kurovi"];
// function renderBar(data){
//   container.innerHTML = ""
//   data.forEach((item)=>{
//   let ele = `<p>${item}</p>`

//   container.innerHTML += ele

//   })
// }
// renderBar(arry)

//   btn.addEventListener('click',()=>{
//     let inputValue = input.value
//     console.log(inputValue);

//     let filterVal = arry.filter((val)=> {
//      return val.includes(inputValue)
//     })
//     console.log(filterVal);
//     setTimeout(()=>{
//       renderBar(filterVal)
//     },1000)
//   })
// getTotalPrice(): Calculate and return the total price of items in the cart (price × quantity).
// addItem(newItem): Add a new item to the cart. If the item already exists (based on id), increase its quantity.
// removeItem(itemId): Remove an item from the cart based on its id.
// saveCart(): Save the cart back to localStorage.
// let arr = [

//   {id: 1, name: 'Laptop', price: 800, quantity: 1},

//   {id: 2, name: 'Phone', price: 500, quantity: 2}
// ]
// // console.log(arr)
// let get = JSON.parse(localStorage.getItem('data'))
// let store = localStorage.setItem("data",JSON.stringify(arr))
// console.log(get);

// function getTotalPrice(){

// }

// function reverseStr (str){
// let stin = str.split("").reverse().join("")
// return stin
// }
// console.log(reverseStr("hello"));

function palindrome(value) {
  let str = value.toLowerCase();
  console.log(str);

  let rev = value.split("").reverse().join("");
  return str == rev.toLowerCase();
}
console.log(palindrome("maam"));
console.log(palindrome("maam"));
console.log(palindrome("mAAM"));

// FINDLARGESTVALUE

// function FindLargest(arr){
// let solve = arr[0]
// arr.forEach(element => {
//   if(element > solve ){
// solve = element
//   }
// });
// return solve
// }
// console.log(FindLargest([6,2,3,4,5]));

function FINDLARGESTVALUE(arr) {
  let res = Math.max(...arr);
  console.log(res);
}
console.log(FINDLARGESTVALUE([6, 2, 3, 4, 5]));

function removeDUplicate(arr) {
  let myarr = [0];

  arr.forEach((element) => {
    if (!myarr.includes(element)) {
      myarr.push(element);
    }
  });
  return myarr;
}
console.log(removeDUplicate([1, 2, 3, 4, 56, 1, 1, 1]));

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
console.log(sum([1, 2, 3])); //6

// Advanced Level
// Flatten a Nested Array
// Write a function to flatten a nested array.
let arrr = [
  [1, 2],
  [3, [4, 5]],
];
//  → [1, 2, 3, 4, 5]
console.log(arrr.flat().flat());

// Anagrams
// Write a function that checks if two strings are anagrams of each other.
// Example: "listen" and "silent" → true
// function MyFun(arr){
//   let arrr = arr.split('')
//   let mystr = "silent".split('')

// }
// console.log(MyFun("listen"));

// Find the First Non-Repeated Character
// Write a function that returns the first non-repeated character in a string.
// Example: "swiss" → "w"
function NoNrEP() {
  let myarr = [];
  let str = "swiss".split("");
  str.find((ele) => {
    if (!myarr.includes(ele)) {
      myarr.push(ele);
    }
  });
  return myarr;
}
console.log(NoNrEP());

// Sum of Digits in a Number
// Write a function to calculate the sum of digits of a number.
// Example: 123 → 6
function sumofD() {
  let numarr = [1, 2, 3];
  return numarr.reduce((a, b) => a + b);
}
console.log(sumofD());

// Longest Word in a Sentence
// Write a function to find the longest word in a sentence.
// Example: "I love programming" → "programming"

function FindLargestValue(arr) {
  // console.log(arr.split(' '));
  let split = arr.split(" ");
  let largest = "";
  split.forEach((word) => {
    if (word.length > largest.length) {
      largest = word;
    }
  });
  return largest;
}
console.log(FindLargestValue("I love programming"));

async function getData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    mydata(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
let Ulist = document.getElementById("Ulist");
let btn = document.getElementById("btn");
function mydata(data) {
  let categories = [];
  categories = data.map((item) => item.category);
  console.log(categories);
  input.addEventListener("input", (e) => {
    let inputvalue = e.target.value;
    const res = categories.filter((value) =>
      value.toLowerCase().includes(inputvalue.toLowerCase())
    );
    console.log(res);
  });
}

// let Ulist = document.getElementById('Ulist')
// let btn = document.getElementById('btn')
// let input = document.getElementById('input')
// let categories =[]
// function mydata(data){
//   categories = data.map((product)=> product.categories)
//   console.log(categories);

// data.forEach((product)=>{

//   const category = `<li> ${product.category}</li>`
// Ulist.innerHTML+=category
// })

// }
// // btn.addEventListener('click',()=>{
// //   console.log(input.value);

// // })
// function compareFun(category){
// console.log(typeof category);
// btn.addEventListener('click',()=>{
//   console.log(input.value);
//  const res = category?.filter((data,index)=>data.toLowerCase().includes(input.value))
//   console.log(res);

// })
// }
function checkDataa() {
  const value = [];
  if (value.length === 0 || undefined) return "no data";
}

console.log(checkDataa());

let arr = [1, 2, 3, 4, 5];
function gettingData(arr) {
  return arr.filter((data) => data <= 4);
}
console.log(gettingData(arr));
const getValue = gettingData(arr);
console.log("getValue", getValue);

getValue.length > 2
  ? console.log("value is greater than 2")
  : console.log("runing else");

// function flatFun(flatAarr) {
//   let arrtoStore = [];
//   let getactualValue = [];
//   let getvl = [];
//   flatAarr.forEach((data) => {
//     if (!Array.isArray(data)) {
//       console.log("true");
//       let convertDta = data.toString();
//       console.log(convertDta);

//       arrtoStore.push(convertDta);
//     }
//     if (data) {
//       // console.log("true");
//       let convertDta2 = data;
//       for (let i = 0; i < convertDta2.length; i++) {
//         console.log(convertDta2[1]);
        
//         getvl.push(convertDta2[1]);
//       }
//       getactualValue.push(convertDta2);
//     }
//   });
//   console.log(getvl, "getva");

//   console.log("getactualValue", getactualValue);

//   return arrtoStore;
// }

// // console.log(flatFun());
// let storeReturn = flatFun([1, 2, 3, [4, 5], [6, 7, [8, 9]]]);
