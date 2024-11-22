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
console.log(palindrome("maaM"));

