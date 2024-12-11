const email = document.getElementById('email')
const password = document.getElementById('password')
const btn = document.getElementById('btn')
// btn.addEventListener('click',()=>{
//     console.log(email.value);
//     console.log(password.value);
//     email.value ="";
//     password.value ="";
    
// })
import {auth,signInWithEmailAndPassword} from "../account/create.js"
btn.addEventListener('click',()=>{
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       console.log("loggedin",user);
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

})