async function getData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if(!response.ok){
     console.log();
     throw new Error(`HTTP ERROR ${response.status}`)
    }
    const data = await response.json()
    data.map((res)=>{
    console.log(res);
    
  })
    

  
  } catch (error) {
    console.log("error fetching data",error);
    
  }
  
}
getData()
// console.log(data);
// 