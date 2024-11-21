  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth,
    createUserWithEmailAndPassword 
    } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAlF1zKO1jPlWP4ipb1qJxRxAEXZehT7XE",
    authDomain: "myjsproject-71498.firebaseapp.com",
    projectId: "myjsproject-71498",
    storageBucket: "myjsproject-71498.firebasestorage.app",
    messagingSenderId: "1014573952258",
    appId: "1:1014573952258:web:aaea2da3bc2a71519ba61b",
    measurementId: "G-1J640JVN4X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  console.log(auth);

// createEmailwithEmailAndPassword
const userName = document.getElementById('name')
const password = document.getElementById('password')
const email = document.getElementById('email')
const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });

})
