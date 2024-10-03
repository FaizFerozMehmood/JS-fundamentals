
// let arr1 = []
// let arr = "abcdef"
// // let random = Math.floor(Math.random()*22)
// // console.log(random);
// for(let i = 0; i<arr.length;i++){
//     // console.log(arr[i]);
//     let check =Math.floor(Math.random()+arr[i])
//     console.log(check);
<button class="btn">Click Me</button>

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let name = 'Jni';
  console.log(name.toUpperCase())
})

    
// }
 const content = document.querySelector(".box")
 const generate = document.querySelector(".generate")



 console.log(content);
 generate.addEventListener("click", () =>{

let str = "Abcdefghijqlmnopqrstuvxzwy"+"ABCDEFGHIJQLMNPRSTUVWXYZ"+"1234056789"+"!@#$%^&*()"
let len = str.length = 12
res = ""
for(let i = 0 ; i < len; i++){
    res+= str.charAt(Math.floor(Math.random()*str.length))
}
console.log(res);
content.innerHTML=res
 })

//  ield
//  var copyText = document.getElementById("myInput");

//  // Select the text field
//  copyText.select();
//  copyText.setSelectionRange(0, 99999); // For mobile devices

//  // Copy the text inside the text field
//  navigator.clipboard.writeText(copyText.value);
function copyText(){
    content.select()
    content.setSelectionRange(0, 99999)
     navigator.clipboard.writeText(content.innerText);
alert(content.innerText)
}