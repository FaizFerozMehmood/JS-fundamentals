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

function palindrome(value){
let str = value.toLowerCase()
console.log(str);

let rev = value.split('').reverse().join('')
return str ==rev.toLowerCase()

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



function FINDLARGESTVALUE(arr){
  let res = Math.max(...arr)
  console.log(res);
  
}
console.log(FINDLARGESTVALUE([6,2,3,4,5]));



function removeDUplicate(arr){
let myarr = [0]

arr.forEach(element => {
  if(!myarr.includes(element)){
    myarr.push(element)
    
  }
});
return myarr
  
}
console.log(removeDUplicate([1,2,3,4,56,1,1,1]));




function sum(arr){
return arr.reduce((a,b)=> a + b,0)
}
console.log(sum([1,2,3]));

// Advanced Level
// Flatten a Nested Array
// Write a function to flatten a nested array.
let arrr =[[1, 2], [3, [4, 5]]]
//  → [1, 2, 3, 4, 5]
console.log(arrr.flat().flat());


// Anagrams
// Write a function that checks if two strings are anagrams of each other.
// Example: "listen" and "silent" → true

// Find the First Non-Repeated Character
// Write a function that returns the first non-repeated character in a string.
// Example: "swiss" → "w"

// Sum of Digits in a Number
// Write a function to calculate the sum of digits of a number.
// Example: 123 → 6

// Longest Word in a Sentence
// Write a function to find the longest word in a sentence.
// Example: "I love programming" → "programming"

