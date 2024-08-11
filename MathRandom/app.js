
// let arr1 = []
// let arr = "abcdef"
// // let random = Math.floor(Math.random()*22)
// // console.log(random);
// for(let i = 0; i<arr.length;i++){
//     // console.log(arr[i]);
//     let check =Math.floor(Math.random()+arr[i])
//     console.log(check);
    

    
// }
 const content = document.querySelector(".box")
 const generate = document.querySelector(".generate")

 console.log(content);
 generate.addEventListener("click", () =>{

let str = "Abcdefgh"+"ABCDEFGHIJQLMNPRSTUVWXYZ"+"1234056789"+"!@#$%^&*()"
let len = str.length = 5
res = ""
for(let i = 0 ; i < len; i++){
    res+= str.charAt(Math.floor(Math.random()*str.length))
}
console.log(res);
content.innerHTML=res
 })

