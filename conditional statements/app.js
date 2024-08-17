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
// ++++++++++++++++++     substring(1,4) eg :(hello)   => ell, takes two parameter,starting and ending excluding and one perameter  eg:2 to end     ++++++++++++++++++++

let vlu = "1,2,3,4,5,6,7"

if(vlu.length>5){
  let res = vlu.substring(0,6)+"..."
    console.log(res);
    
}
else{
    console.log(vlu);
    
}
//indexOf()
let words = ["faiz","hello"]
let ind = words.indexOf("hello")
console.log(ind);
