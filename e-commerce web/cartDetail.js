const btn = document.getElementById("btn");
let cardContainerInHomePage = document.getElementById(
  "cardContainerInHomePage"
);
const cartData = JSON.parse(localStorage.getItem("products-cart")) || [];
console.log(cartData);

btn.addEventListener('click',()=>{
    window.location.href = "index.html"
})
function getCartData() {
  cartData.forEach((element,index) => {
    let ele = `<div class="product-card">
    <img src="${element.image}" alt="product image">
    <p class="title">${element.title}</p>
    <p class="price">${element.price}</p>
    <button class="delete-btn">Delete</button>
</div>`;
    cardContainerInHomePage.innerHTML += ele;
  });
}
getCartData();
