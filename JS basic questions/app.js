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
  console.log(largestWord);
}
myfun("abchdhdhdh g hdg");


let oddNum = ""
let evenNum = ""
for(var i = 0; i < 10; i++){
if(i % 2 ===0){
  let result = evenNum + i;
  console.log(`Even number  :${result}`);
  
  
}  
else{
  let oddres = oddNum + i
  console.log(`Odd number  :${oddres}`);
  
}
}