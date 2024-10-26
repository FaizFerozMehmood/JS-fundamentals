// function myFun(vlu){
//     let h = ""
//     const cvrtVal = vlu.trim().split(" ");
//     console.log(cvrtVal);
    
//     cvrtVal.forEach((val, index)=>{
//        console.log(val, index);
//        if(index > 0){
//         h += val.at(0).toUpperCase() + val.slice(1).toLowerCase()
//        }else{
//         h += val
//        }
       
//     })
//    console.log(h);

   
    
// }
// myFun('hello world hello kahsn kkk ovvv')



// let arr = [12,12,13,13,14,14]
// const respose = arr.filter((e)=>{
// console.log(e);
// if(e)
// })


// const vlu = "faiz"
// localStorage.setItem("vlu",vlu)

// console.log(localStorage.getItem("vlu",vlu));


// const obj = {
//     name:"faiz",
//     age:23,
//     isStudent :true
// }

// localStorage.setItem('userInfo',JSON.stringify(obj))

// const storedObj = localStorage.getItem('userInfo')
// if(storedObj){
//     const userData = JSON.parse(storedObj)
//     console.log(userData);
    
// }else{
//     console.log("there is might be something wrong!");
    
// }

//Coding Question 1: Write a function in JavaScript called roundNumber() 
// that takes a number as input and returns the number
//  rounded to the nearest integer.


function roundNumber(number){
let calculate = Math.round(number)
return calculate

}
console.log(roundNumber(2.4));

