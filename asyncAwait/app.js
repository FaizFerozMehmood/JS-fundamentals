// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));



async function myfun(){
try {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  console.log("data",data);
} catch (error) {
  console.log(error);
  
}
}
myfun()

