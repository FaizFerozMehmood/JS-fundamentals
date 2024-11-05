async function getData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if(!response.ok){
     console.log();
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
  // console.log("processData=>",data);
  const container = document.querySelector('.container')
  data.map((singleData)=>{
    console.log(singleData);  
    const img = document.createElement('img')
    img.setAttribute('src',singleData.image)
    container.appendChild(img)

    // title===========>
      const title = document.createElement('p')
    title.textContent = singleData.title
    container.appendChild(title)
    

    // price==============>
      const price = document.createElement('p')
    price.textContent = `Price : $${singleData.price}`
    container.appendChild(price)
    
  })
  

}
getData()
// console.log("dataa",data);

