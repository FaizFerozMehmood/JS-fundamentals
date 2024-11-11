const container = document.querySelector('.container')
async function getData() {

  const loader = document.createElement('h3')
    loader.innerText="Loading...";
    loader.id = "loader"
    document.body.appendChild(loader)
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if(!response.ok){
      console.log("error fetching data with the respone of something went wrong!");
    
    }
   else{
    const data = await response.json()
    
    hendleData(data)
   }
  } catch (error) {
    console.log("error fetching data");
  }
  finally{
    Document.body.removeChild(loader)
  }
}


getData()

function hendleData(data){
  
  data.forEach(element => {
  const ele = `<div class="shopping-card">
    <img src=${element.image} alt="Product Image" class="product-image">
    <div class="card-content">
        <h2 class="product-title">${element.title}</h2>
        <p class="product-description">${element.description}.</p>
        <p class="product-price">$${element.price}</p>
<button onclick="addtocart(${element.price}, '${element.title}')" class="add-to-cart">Add to Cart</button>
    </div>
</div>
`
container.innerHTML+= ele
});
}
function addtocart(th,title){
  console.log("clicked",th,title);
  
}








































































//  const header = document.querySelector('.header')
 
// async function getData() {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products')
//     if(!response.ok){
//      throw new Error(`HTTP ERROR ${response.status}`)
//     }
//  else{
//   const data = await response.json()
//   processData(data)
//  }
//  //two ways to handle data; one is to pass call 
// //  a function created outside the scope;

// // 1=> call and pass respone as an arrgument.
// //and hendle the created function where you need.
// // 2=> another option is to handle respone inside the "try" scope


//   //   data.map((res)=>{
//   //   console.log(res);

    
//   // })
    


//   } catch (error) {
//     console.log("error fetching data",error);
    
//   }
  
// }
// function processData(data){
//   const container = document.querySelector('.container')
//   data.forEach((items)=>{
//     const img = document.createElement('img')
//     img.setAttribute('src',items.image)
//     img.classList.add('image')
//     container.appendChild(img)
//     // price==============>
//       const price = document.createElement('p')
//     price.textContent = `Price : ${items.price}`
//     container.appendChild(price)

//     // title===========>
//       const title = document.createElement('p')
//     title.textContent = items.title
//     container.appendChild(title)


// button
//     const btn = document.createElement('button')
//     btn.innerText = 'Add to card'
//     container.appendChild(btn)
//     btn.addEventListener('click',()=> seeWhatInBag(items.price, items.image))
//   })

// }
//Cart

// function addToCard(price,image){
// const cardItemDiv = document.querySelector('.cardItemDiv')
// const subDiv = document.createElement('div');
// const cardItemImage = document.createElement('img')
// cardItemImage.classList.add('.cardImage')
// cardItemImage.setAttribute('src',image)
// subDiv.appendChild(cardItemImage)

// const cardItemPrice = document.createElement('p')
// cardItemPrice.textContent = price
// const deleteicon = document.createElement('i');
// deleteicon.classList.add('fas', 'fa-trash')
// deleteicon.style.cursor = "pointer";
// subDiv.appendChild(deleteicon)

// deleteicon.addEventListener('click',()=>{
//   subDiv.remove()
// })


// subDiv.appendChild(cardItemPrice)
// cardItemDiv.appendChild(subDiv)
// }
// function seeWhatInBag(price,title){
 

  
// }

// getData()

