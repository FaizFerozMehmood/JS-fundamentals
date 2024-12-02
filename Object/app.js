

// const obj = {
//   name:"faiz",
//   email:"faiz@gmail.com",
//   password:"12345"
// }
const obj ={}
obj.UserName = "faiz"
obj.password = 23456
obj.email = "faiz@gmail.com"
console.log(obj);

// console.log(delete obj);
delete obj.email
console.log(obj);


const newObj = new Object()
newObj.name = "ali"
newObj.password = 23456
newObj.email = "faiz@gmail.com"
newObj["address"] = "karachi"
//You can access object properties in two way , dot notation and square barket
console.log(newObj["address"]);

const myobj = {
  name:"faiz",
  email:"faiz@gmail.com",
  password:"12345",
 greet : function(){
console.log(`welcome ${this.name } your email is ${this.email}`)
//this keyword refers to the curent execution context..

 }
}
myobj.greet();

let herobj = {
  name:"umaira",
  email:"umaira@gmail.com",
  herFun :function(){
  name:"faiz"
  console.log(`I welcome you ${this.name}`);
  
  }
}
;
herobj.herFun()