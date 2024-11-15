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


function checkData(){
  let counter = '0'
  
  // console.log(counter);
  // if(counter){
  //   console.log("counter he bhai");
    
  // }
  // else{
  //   console.log("nahi he");
    
  // }
  
}
checkData()


const input = document.getElementById('input');
let container = document.querySelector('.container')
const arry = ["faiz","mahmood","kurovi"];
function renderBar(data){
  container.innerHTML = ""
  data.forEach((item)=>{
  let ele = `<p>${item}</p>`
  
  container.innerHTML += ele
    
  })
}
renderBar(arry)
  
  input.addEventListener('input',(e)=>{
    let inputValue = e.target.value;
    let filterVal = arry.filter((val)=> val.includes(inputValue))
    console.log(filterVal);
    setTimeout(()=>{
      renderBar(filterVal)
    },1000)
    
  
  
    
   
    
  })

// }