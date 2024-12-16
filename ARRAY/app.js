// // Basic Array Creation and Access

// // How do you create an array with elements 1, 2, 3, 4, 5?
// // How do you access the first and last elements of an array?
// // How can you find the length of an array?
// // Array Methods

// // How do you add an element to the end of an array? What method would you use?
// // How do you remove an element from the beginning of an array?
// // Describe how the map method works. Can you give an example of its use?
// // What is the difference between forEach and map?
// // Array Iteration

// // Write a function that doubles each element in an array.
// // How can you use the reduce method to find the sum of all elements in an array?
// // Describe how you would filter out only even numbers from an array.
// // Array Manipulation

// // How would you find the index of a particular element in an array?
// // Explain how to remove an element from a specific position in an array.
// // How do you merge two arrays?
// // Advanced Array Operations

// // Explain how to use find and findIndex. How are they different from filter?
// // Write a function that flattens a nested array (e.g., [[1, 2], [3, 4]] to [1, 2, 3, 4]).
// // How do you use sort to arrange an array of numbers in descending order?
// // Describe how slice and splice differ in their function.
// // Array of Objects

// // Given an array of objects, write a function to find an object by a specific property value.
// // How can you sort an array of objects based on a specific property?
// // Write a function to add a new property to each object in an array.
// // Would you like detailed explanations or examples for any of these questions?

// let arr3 = [1,2,3,4]
// let lastvlu = arr3.at(-1)
// // console.log(lastvlu);

// let arryy = ["F","G"]
// let newARRAY = arryy.map((ele)=>{
//   return ele +"add"
// })
// // console.log(newARRAY);

// // Describe how you would filter out only even numbers from an array.
// let herValue = [1,2,3,45,,6,7,8,89,0,]
// const valueIwant = herValue.filter((data)=>data % 2 ===0)
// // console.log(valueIwant);

// const people = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 16 },
//   { name: "Charlie", age: 18 },
//   { name: "Diana", age: 25 }
// ];

// const haveFilter = people.filter((person)=> person.age <=18)
// // console.log(haveFilter);

// const items = [
//   { id: 1, name: "Apple" },
//   { id: 2, name: "Banana" },
//   { id: 3, name: "Grape" },
//   { id: 4, name: "Orange" },
// ];
//  let searched = "ap"
//  let storedData = items.filter((product)=>product.name.toLowerCase().includes(searched.toLowerCase()) && product.id == "1")
// // console.log(storedData);

// // const input = document.getElementById('input')
// // const btn = document.getElementById('btn')
// // let arrOfNames = ["faiz","umair","kaashif"]
// // btn.addEventListener('click',()=>{
// //   let inputarr = []
// //   inputarr.push(input.value)
// //   let v = arrOfNames.filter((vlue)=> vlue.toLowerCase().includes(inputarr))
// // console.log(v);

// // input.value=""
// // })

// //push() adds an element at the end of an array and returns new length
// const arr = [1, 2, 3, 4, 5];
// const vlu = arr.push("clock");
// // console.log(vlu);

// //returning first element from an array
// const arry = [1, 2, 3, 45];
// const arry2 = arry[0];
// // console.log(arry2);

// // returning last element of the array using at()

// const ary = [1, 2, 3, 44, 5, 6, 7];
// const vl = ary.at(-1);
// // console.log(vl);

// function fun(sumVlues) {
//   let res = 0;
//   sumVlues.forEach((data) => {
//     if (data > 0) {
//       res += data;
//     }
//   });
//   return res;
// }
// // console.log("results=> " + fun([1, 1, 1, 1, -5]));

// function myfun(number, secNum) {
//   return number.find((num) => {
//     return num === secNum;
//   });
// }

// // console.log(myfun([1, 2, 3, 4, 5], 5));

// const obj1 = {
//   Name: "faiz",
//   experience: "3 Years",
// };
// const obj2 = {
//   uname: "Habib ALi",
//   profession: " Senior Developer",
// };
// const obj3 = {
//   Username: "umair",
//   workedAs: "Trainer",
// };
// const result = {
//   created: "10/18/2024",
//   ...obj1,
//   ...obj2,
//   ...obj3,
// };
// // console.log(result);

// function yourFun(){
// // console.log(arguments);

// }
// // console.log(yourFun(12,"faiz"));

// const array = [2, 5, 9];

// console.log(array);

// const index = array.indexOf(5);
// // if (index > -1) { // only splice array when item is found
//   array.splice(index, 1); // 2nd parameter means remove one item only
// // }

// // array = [2, 9]
// // console.log(array);

// function vlueSum(value){
//   // console.log(value);
//   value.forEach((singleValue)=>{
//    let nm = 0;
//   if(singleValue > 0  ){
//      nm+=singleValue

//     }
//     return nm
//     // console.log(nm);

//  })

// }

// // console.log(vlueSum([1,2,3,4]));

// // let aryOfNames = ["faiz","ali"]
// // // let uuu = arrOfNames.findIndex((name)=>{
// //   return name =="faiz"
// // })

// console.log(uuu);

// //Flat method concates nested array in a single one,it does not modify the original array!

// let nestedArr = ["faiz",["mahmood"]]
// console.log(nestedArr.flat());

// let flag  = false
// let hhh = [1,2,3,4,6,7]
// for(let i = 0;i< hhh.length;i++){
// if(hhh[i]===4){
//   flag = true
//   console.log('value is found in the array!');
//   break
// }
// else{
//   console.log("not found");
// }
// }

// function Hrarr(arr){
//   // console.log(Math.max(...arr));
//   let mYARR =Math.max(...arr)
//   console.log("max",mYARR);

// let myarr =arr[0]

// arr.forEach((data)=>{
// if(myarr > data){
//   myarr = data

// }
// })
// return myarr

// }
// console.log("my greatest value",Hrarr([1,2,3,4,7,6,5]));

// let arr1 = [1,2,3,4,5,6]
// let ind = Math.floor(arr1.length / 2)
// console.log(ind);

// function compareFun(arr){
//  let arr2 = []
//  arr.forEach((data)=>{
//   if(Array.isArray(data)){
//     data.forEach((val)=>{
//       if(Array.isArray(val)){
//         val.forEach((final)=>{
//           arr2.push(final)
//         })
//       }else{
//         arr2.push(val)
//       }
//     })

//   }else{
//     arr2.push(data)
//   }

//  })
//  console.log("arr",arr2);

// }
// console.log(compareFun([1,2,3,[4,5,[0,9,8]]]));

// //  Array.isArray :Method to check whether the data is an array
// // or not ,return true if the condition satisfies, false otherwise
// let arrrr = []
// console.log(Array.isArray(arrrr));

// // find()
// // Purpose: Returns the first element in an array that satisfies a given condition.
// // Syntax:
// // javascript
// // Copy code
// // array.find(callback(element[, index[, array]])[, thisArg])
// // Key Points:
// // Returns only one element (the first match).
// // Returns undefined if no element satisfies the condition.
// // Example:
// // javascript
// // Copy code
// // const numbers = [10, 20, 30, 40];
// // const result = numbers.find(num => num > 25);
// // console.log(result); // Output: 30
// // filter()
// // Purpose: Returns a new array with all elements that satisfy the given condition.
// // Syntax:
// // javascript
// // Copy code
// // array.filter(callback(element[, index[, array]])[, thisArg])
// // Key Points:
// // Returns all matching elements in an array.
// // If no elements match, it returns an empty array.
// // Example:
// // javascript
// // Copy code
// // const numbers = [10, 20, 30, 40];
// // const result = numbers.filter(num => num > 25);
// // console.log(result); // Output: [30, 40]
// // Differences Between find() and filter()
// // Feature	find()	filter()
// // Output	Single element or undefined	Array of matching elements
// // Use Case	When you need only one matching element	When you need all matches
// // Return Type	Single value	Array
// // Related Questions for Practice
// // find() Questions:

// // Write a function to find the first even number in an array.
// // How do you use find() to locate a student with a specific ID from a list of objects?
// const obj = [
//   {student:"faiz",id:123},
//   {student:"umair",id:123},
//   {student:"ali",id:123},
//   {student:"jaffer",id:123}
// ]
// let findObj = obj.find((item)=> item.id=="123")
// console.log(findObj);

// // Can find() return undefined? Demonstrate this with an example.
// // filter() Questions:

// // Write a function to filter out odd numbers from an array.
// // How can you use filter() to extract users above the age of 25 from a list of user objects?
// // Use filter() to get all strings from an array containing mixed data types.
// // Combo Questions:

// // How would you use both find() and filter() to find a specific object and filter all objects matching a condition?
// // Given an array of products, find the first product that costs more than $50 and filter all products that cost less than $100.
// // What's the difference between find() and filter()? Explain with practical examples.
// // Performance-related Questions:

// // Is find() more efficient than filter() for finding the first match? Why?
// // What happens when the callback function in filter() returns false for all elements in the array?
// // Code Debugging Questions:

// // Debug the following code:
// // javascript
// // Copy code
// // const numbers = [1, 2, 3, 4];
// // const firstOdd = numbers.filter(num => num % 2 !== 0);
// // console.log(firstOdd); // Expected: 1, Actual: ?
// // What's wrong and how to fix it?
// // Feel free to pick any question for deeper exploration!

// const arrt = [1234,4,5,6.1]
// const newArr = [...arrt,12,3,4,45,]
// console.log(arrt,`sdkdj`);
// console.log(newArr,`newarry`);

// const numbers = [1, 2, 3, 4];
// const firstOdd = numbers.filter(num => num % 2 !== 0);
// console.log(firstOdd);

// const arryyyy = arrt.pop("hello")
// console.log(arryyyy);

// // function findgreatest(arr){
// //   let greatest = arr[0]
// //  arr.forEach((item)=>{
// // if(item > greatest){
// //  greatest = item

// // }
// // })
// // return greatest
// // }
// // console.log(findgreatest([1,2,3,4,5,6]));

// function find2ndgreatest(arr) {
//   if (arr.length < 2) {
//     return null;
//   }

//   let greatest = -Infinity;
//   let secondGreatest = -Infinity;
//   console.log(greatest);

//   arr.forEach((item) => {
//     if (item > greatest) {
//       secondGreatest = greatest;
//       console.log(secondGreatest);

//       greatest = item;
//     } else if (item > secondGreatest && item < greatest) {
//       secondGreatest = item;
//     }
//   });

//   return secondGreatest;
// }

// console.log(find2ndgreatest([1, 2, 3, 4, 5, 6]));
//  // Output: 5

//  function ways(arr){
// if(arr.length < 2){
//   return null
// }
// let sorted = arr.slice().sort((a,b)=> b-a)
// // console.log(sorted[1]);
// return `the 2nd gre is ${sorted[1]}`

//  }
//  console.log(ways([1,2,3,4,5,6,7,65,]));

function sumValueOfArr(arr) {
  let storeSum = 0;
  arr.forEach((data) => {
    storeSum += data;
  });
  return storeSum;
}
console.log(sumValueOfArr([1, 2, 3, 4, 5, 6]));


const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 18 },
  { name: "Diana", age: 25 }
];

const haveFilter = people.filter((person)=> person.age <=18)
// console.log(haveFilter);


const herfun =(arr)=>{
let herARR = []
arr.forEach((value)=>{
  if(!herARR.includes(value)){
    herARR.push(value)
  }
})
return herARR
}
console.log(herfun([1,1,1,1,2,3,4,5]));
