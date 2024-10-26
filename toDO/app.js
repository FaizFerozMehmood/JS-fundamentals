const input = document.getElementById('input');
const add = document.getElementById('add');
const content = document.getElementById('content');


add.addEventListener('click',()=>{
    console.log(input.value);
    if(input.value.trim()){

        localStorage.setItem("Inputvalue",input.value)
        const storedValue = localStorage.getItem('Inputvalue')
        console.log(storedValue);
        
        let display = `<li>${storedValue}</li>`
        content.innerHTML +=display
        input.value =""
    }
})
window.addEventListener('DOMContentLoaded',()=>{
    const savedValue = localStorage.getItem('Inputvalue')
    if(savedValue){
        input.value = savedValue
    }
})