const input = document.getElementById('input');
const add = document.getElementById('add');
const content = document.getElementById('content');



const displayItem = ()=>{
    let savedValue = JSON.parse(localStorage.getItem("inputvalue")) || [];
    content.innerHTML = "";

    savedValue.forEach((item,index) => {
        // let displayItem = `<li onclick="myFunction(${index},savedValue)">${item}</li>`
        let listitem = document.createElement('li')
        listitem.textContent=item
       listitem.addEventListener('click',()=>{
        listitem.remove()
        savedValue.splice(index,1)
        localStorage.setItem('inputvalue',JSON.stringify(savedValue))
       })        
       content.appendChild(listitem)
    });
}
function myFunction(index,savedValue){
    console.log(index);
    let filtered = savedValue.filter((_,targeted)=> targeted!==index)
    console.log("targeted=>",filtered);
    
    
}
add.addEventListener('click',()=>{
let inputvalue  = input.value.trim()
if(inputvalue){
    let storeditems = JSON.parse(localStorage.getItem("inputvalue")) || [];
    storeditems.push(inputvalue)
    localStorage.setItem('inputvalue',JSON.stringify(storeditems));
    displayItem();
        input.value = '';
}
})
window.addEventListener('DOMContentLoaded',()=>{
    displayItem()
})

// add.addEventListener('click',()=>{

//     console.log(input.value);
//     if(input.value.trim()){

//         localStorage.setItem("Inputvalue",input.value)
//         const storedValue = localStorage.getItem('Inputvalue')
//         console.log(storedValue);
        
//         let display = `<li>${storedValue}</li>`
//         content.innerHTML +=display
//         input.value =""
//     }
// })
// window.addEventListener('DOMContentLoaded',()=>{
//     const savedValue = localStorage.getItem('Inputvalue')
//     if(savedValue){
//         input.value = savedValue
//     }
// })