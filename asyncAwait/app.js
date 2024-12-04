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

const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
}
const {name,age,address} = person
let {city,country} = address
console.log(name,age);
console.log(city);
