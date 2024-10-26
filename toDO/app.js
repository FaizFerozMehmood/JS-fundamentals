const input = document.getElementById('input');
const add = document.getElementById('add');
const content = document.getElementById('content');


add.addEventListener('click',()=>{
    console.log(input.value);
    let display = `<li>${input.value}</li>`
    content.innerHTML +=display
    input.value =""
})