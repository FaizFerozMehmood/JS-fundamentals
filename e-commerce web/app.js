async function getData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if(!response.ok){
     throw new Error(`HTTP ERROR ${response.status}`)
    }
 else{
  const data = await response.json()
  processData(data)
 }
 //two ways to handle data; one is to pass call 
//  a function created outside the scope;

// 1=> call and pass respone as an arrgument.
//and hendle the created function where you need.
// 2=> another option is to handle respone inside the "try" scope


  //   data.map((res)=>{
  //   console.log(res);

    
  // })
    


  } catch (error) {
    console.log("error fetching data",error);
    
  }
  
}
function processData(data){
  const container = document.querySelector('.container')
  data.forEach((items)=>{
    const img = document.createElement('img')
    img.setAttribute('src',items.image)
    img.classList.add('image')
    container.appendChild(img)
    // price==============>
      const price = document.createElement('p')
    price.textContent = `Price : ${items.price}`
    container.appendChild(price)

    // title===========>
      const title = document.createElement('p')
    title.textContent = items.title
    container.appendChild(title)

// button
    const btn = document.createElement('button')
    btn.innerText = 'Add to card'
    container.appendChild(btn)
    btn.addEventListener('click',()=> addToCard(items.price, items.image))
  })

}
//Cart

function addToCard(price,image){
const cardItemDiv = document.querySelector('.cardItemDiv')
const subDiv = document.createElement('div');
const cardItemImage = document.createElement('img')
cardItemImage.classList.add('.cardImage')
cardItemImage.setAttribute('src',image)
subDiv.appendChild(cardItemImage)

const cardItemPrice = document.createElement('p')
cardItemPrice.textContent = price
const deleteicon = document.createElement('i');
deleteicon.classList.add('fas', 'fa-trash')
deleteicon.style.cursor = "pointer";
subDiv.appendChild(deleteicon)
deleteicon.addEventListener('click',()=>{
  console.log("item deleted");

  subDiv.remove()
  
})

// if(price){
// const numberOfaddedPrice = document.createElement('p')
// numberOfaddedPrice.innerText =price + price
// console.log(numberOfaddedPrice);

//   cardItemDiv.appendChild(numberOfaddedPrice)
// }
subDiv.appendChild(cardItemPrice)
cardItemDiv.appendChild(subDiv)
}

getData()

