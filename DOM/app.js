// How do you select an HTML element by its ID and change its text content?

const h1 = document.getElementById('hello')
h1.innerText="HELLO JS!"

// What method would you use to add a new class to an HTML element?
const cls = document.getElementById('class')
const btn = document.querySelector('.btn')
console.log(btn);

btn.addEventListener('click',()=>{

    cls.classList.add("newClass")
   
    
})

