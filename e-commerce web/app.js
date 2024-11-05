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

  //   data.map((res)=>{
  //   console.log(res);

    
  // })
    


  } catch (error) {
    console.log("error fetching data",error);
    
  }
  
}
function processData(data){
  console.log("processData=>",data);
  data.map((singleData)=>{
    console.log(singleData);  
    
  })
  

}
getData()
// console.log("dataa",data);

