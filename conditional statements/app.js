const textInput = document.getElementById("textInput");

textInput.addEventListener("change", () => {
  // console.log(textInput.value);
  let vl = textInput.value;
  if (vl.length > 10) {
    console.log(vl.substring(0, 10) + "...");
  } else {
    console.log("length is less than 10");
  }
  textInput.value = "";
});

// textInput.addEventListener("change",()=>{
//   let valu = textInput.value
//   return valu
// })
// function show(valu){
//   console.log(valu);

//   if(valu.length > 10){
//   let store= valu.substring(0,10)+"..."
//   console.log(store);

//   }
// }
// show(valu)

// ++++++++++++++++++     substring(1,4) eg :(hello)   => ell, takes two parameter,starting and ending excluding and one perameter  eg:2 to end     ++++++++++++++++++++

let vlu = "1,2,3,4,5,6,7";

if (vlu.length > 5) {
  let res = vlu.substring(0, 6) + "...";
  console.log(res);
} else {
  console.log(vlu);
}
//indexOf()
let words = ["faiz", "hello"];
let ind = words.indexOf("hello");
console.log(ind);

//++++++++++++++++++++++++++=IF ELSE +++++++++++++++++
let number = [1, 23, 4, 5, 6, 67, 8];
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

function checkIsEleg(score){
return score > 60
}
if(checkIsEleg(70)){
console.log("logged");

}
