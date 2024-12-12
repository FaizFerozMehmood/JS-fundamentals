const btn = document.getElementById("btn");
const orderBtn = document.getElementById("orderBtn");
let cardContainerInHomePage = document.getElementById("cardContainerInHomePage");
const cartData = JSON.parse(localStorage.getItem("products-cart")) || [];
import { auth, onAuthStateChanged } from "../account/create.js";


btn.addEventListener("click", () => {
  window.location.href = "./index.html";
});

function getCartData() {
  cardContainerInHomePage.innerHTML = ""; 
  cartData.forEach((element, index) => {
    const card = `
      <div class="product-card">
        <img src="${element.image}" alt="product image">
        <p class="title">${element.title}</p>
        <p class="price">${element.price}</p>
        <p id="quantity-${index}" class="quantity">Quantity: ${element.quantity || 0}</p>
        
        <button onclick="deleteItem(${index})" class="delete-btn">Delete</button>
        <button onclick="increment(${index})" class="increment-btn">+</button>
        <button onclick="decrement(${index})" class="decrement-btn">-</button>
      </div>
    `;
    cardContainerInHomePage.innerHTML += card; 
  });
}

function deleteItem(ind) {
  cartData.splice(ind, 1); 
  localStorage.setItem("products-cart", JSON.stringify(cartData)); 
  getCartData(); 
}

function increment(index) {
  cartData[index].quantity = (cartData[index].quantity || 0) + 1;
  localStorage.setItem("products-cart", JSON.stringify(cartData)); 
  getCartData()
}

function decrement(index) {
  if (cartData[index].quantity > 0) {
    cartData[index].quantity -= 1; 
    localStorage.setItem("products-cart", JSON.stringify(cartData)); 
    getCartData(); 
  }
}

getCartData();

orderBtn.addEventListener('click',()=>{
  window.location.href=""
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/auth.user
  //     // const uid = user.uid;
  //     window.location.pathname ="./login/login.html"
  //     // ...
  //   } else {
  //     window.location.pathname = "./index.html"
  //   }
  // });
  
})