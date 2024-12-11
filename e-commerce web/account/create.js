// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlF1zKO1jPlWP4ipb1qJxRxAEXZehT7XE",
  authDomain: "myjsproject-71498.firebaseapp.com",
  projectId: "myjsproject-71498",
  storageBucket: "myjsproject-71498.firebasestorage.app",
  messagingSenderId: "1014573952258",
  appId: "1:1014573952258:web:aaea2da3bc2a71519ba61b",
  measurementId: "G-1J640JVN4X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);
export { auth, onAuthStateChanged };

// createUserWithEmailAndPassword
const userName = document.getElementById("name");
const password = document.getElementById("password");
const email = document.getElementById("email");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
