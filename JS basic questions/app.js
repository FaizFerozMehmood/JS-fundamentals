// //  function myFun(e){
// //     //  console.log(e);
// //     chnge.reduce((acc,vlu){
// //       return acc - vlu
// //       console.log(chnge);

// //     })

//     //   console.log(chnge.slice(0).length);
//     function myFun(){
//       let chnge = e.split(' ')

//         console.log(chnge);
//    for(let i = 0;i<chnge.length;i++){
//       let lng = [1,2,3,4,5,65]

//       console.log(chnge[i].length);
//       if(chnge[i].length > lng.length){
//           console.log(chnge[i]);
//     }

//     }}

// // }

// // }

// function myFun(e){
//   let convert = e.split(" ")
// let largestword = ""
// for(var i = 0; i < convert.length;i++){
//   console.log(convert[i]);
//   if(convert[i].length > largestword.length){
//     largestword = convert[i]

//   }

//   console.log(largestword);
// }

// }
// myFun('hello skfhdjfjkfslfds')

//   console.log(chnge[0].length);
//   if(chnge[0].length > chnge[1].length){
//     console.log(chnge[0]);

//   }
//   else{
//     console.log(chnge[1]);

//   //   }
//   function myFun(e) {
//     let chnge = e.split(' ');
//     let largestWord = '';

//     for (let i = 0; i < chnge.length; i++) {
//         if (chnge[i].length > largestWord.length) {
//             largestWord = chnge[i]; // Update the largest word
//         }
//     }

//     console.log("The largest word is:", largestWord);
// }

// myFun('hello faiz javascript skfhdjfjkfslfds');

function myfun(e) {
  let convert = e.split(" ");
  let largestWord = "";
  for (var i = 0; i < convert.length; i++) {
    if (convert[i].length > largestWord.length) {
      largestWord = convert[i];
    }
  }
  // console.log(largestWord);
}
// myfun("abchdhdhdh g hdg");

let oddNum = "";
let evenNum = "";
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    let result = evenNum + i;
    // console.log(`Even number  :${result}`);
  } else {
    let oddres = oddNum + i;
    // console.log(`Odd number  :${oddres}`);
  }
}

function myFun(e) {
  //  console.log(e.toString().includes("k"));
}
// myFun(["faiz","mahmood"])

// function isContains(valu){

//      console.log(valu);
//      let myNum =["9"]
//      let findOut = valu.includes("4")
//      console.log(findOut);

// }
// isContains(["123","4","56","7"])

// const myfUnction =(e) =>{
// let arr = e.split(" ")
// let res = arr.map((word)=>{
//  return word[0].toUpperCase()+word.slice(1).toLowerCase()
// })
// let result ="#"+ res.join("")
// return result

// }
// console.log(myfUnction("Hello i am faiz"))

// function getResult(vl1,vl2,vl3){
// if(vl1===vl2 && vl2 === vl3) return "elquilteral"
// if(vl1 === vl2 || vl2 ===vl3 || vl1 === vl3) return "Isocelese"
// return "scalene"
// }
// console.log(getResult(3,3,3));
// console.log(getResult(3,4,3));
// console.log(getResult(6,9,7));

// function fn(e){
//   // console.log(e.split());
//   let convert = e.split()
//  convert.map((word)=>{
//   return word[0].toUpperCase()+word.slice(1).toLowerCaseCase()
//   console.log(res);
//   })

// }

// console.log(fn("hello javascript"));

// function getlength(e){
//   console.log(e.split());
//   let count=0
//   let convert =  e.split("")
//   convert.map((alpha)=>{
//     // console.log(alpha);
//     if(alpha==="L"|| alpha ==='l'){
//       count +=  alpha.length

//     }

//   })
//   return count
//   console.log(count);

// }
// console.log(getlength("HelLo world"));

// Getting Data In Ascending Order using Sort Method

function getNumberInAscendingOrder(data) {
  let sorted = data;
  sorted.sort((a, b) => a - b);
  return sorted;
}
//  console.log(getNumberInAscendingOrder([10,9,3,4,5,7]));

//Descending Order

function getNumberInDesendingOrder(data) {
  let descenting = data;
  return descenting.sort((a, b) => b - a);
}
//  console.log(getNumberInDesendingOrder([12,3,4,5,6,8,9,0]));
function myFunn(e) {
  let index1 = e[0];
  let index2 = e[1];
  if (index1.length < index2) {
    return index2;
  }

  console.log([, , index2]);
}
// console.log(myFunn(["hello", "javscript"]));

let arr = ["a", "b", "c"];
let [, , indexOne] = arr;
console.log(indexOne);



function UrFunction(arr){
// console.log(arr);
const filteredarr = arr.filter((data)=>{
  console.log(data);
  let arr2 = ["ali"]
  return data.toLowerCase().includes(arr2)
  
})
return filteredarr
}

// console.log(UrFunction(["faiz","mahmood","umair"]));









// For most use cases, (Math.max with the spread operator) is the simplest and most efficient.
const myfunctionToGetMax = (e) =>{
return Math.max(...e)

}
console.log(myfunctionToGetMax([1,2,3,4,5,1000]));
