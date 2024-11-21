  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
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
  const analytics = getAnalytics(app);