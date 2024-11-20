const btn = document.getElementById("btn");
let cardContainerInHomePage = document.getElementById("cardContainerInHomePage");
const cartData = JSON.parse(localStorage.getItem("products-cart")) || [];

// Log initial cart data for debugging

// Button event to navigate to index.html
btn.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Function to render cart data on the page
function getCartData() {
  cardContainerInHomePage.innerHTML = ""; // Clear existing content
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
    cardContainerInHomePage.innerHTML += card; // Append card to the container
  });
}

// Function to delete an item from the cart
function deleteItem(ind) {
  cartData.splice(ind, 1); // Remove item from array
  localStorage.setItem("products-cart", JSON.stringify(cartData)); // Update local storage
  getCartData(); // Re-render cart
}

// Function to increment quantity
function increment(index) {
  // Ensure quantity property exists and increment it
  cartData[index].quantity = (cartData[index].quantity || 0) + 1;
  localStorage.setItem("products-cart", JSON.stringify(cartData)); // Update local storage
  getCartData(); // Re-render cart
}

// Function to decrement quantity
function decrement(index) {
  if (cartData[index].quantity > 0) {
    cartData[index].quantity -= 1; // Decrement quantity
    localStorage.setItem("products-cart", JSON.stringify(cartData)); // Update local storage
    getCartData(); // Re-render cart
  }
}

getCartData();
