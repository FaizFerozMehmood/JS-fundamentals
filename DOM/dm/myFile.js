const ul = document.getElementById('ul')
const btn = document.getElementById('btn')
const input = document.getElementById('input')

btn.addEventListener('click',myfun)
function myfun(){
console.log(input.value);
// input.value= input.value
// ul.innerHTML =`<li>${input.value}</li>`
ul.innerHTML+=`
<li>
<span id ="span">${input.value} </span>
<button onclick="editFun(this)">edit</button>
    <button onclick="delFun(this)">del</button>
</li>
`
input.value =""
}
function delFun(elememt){
    console.log(elememt);
    elememt.parentElement.remove()
 
    
}
function editFun(elememt){
    console.log(elememt);
   const pre =span.innerText
   const updateValue = prompt("update todo ",pre)
    console.log(updateValue);
    pre.textContent=updateValue
    
 
    
}