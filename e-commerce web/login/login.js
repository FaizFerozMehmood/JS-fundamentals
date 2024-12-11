const email = document.getElementById('email')
const password = document.getElementById('password')
const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    console.log(email.value);
    console.log(password.value);
    email.value ="";
    password.value ="";
    
})