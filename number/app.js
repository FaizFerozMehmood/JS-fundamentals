// function getDivisionRemainderBy2(number) {
//     return number % 2
//     }
function handleData(){
        let input1  = document.getElementById('num1').value;
        let input2  = document.getElementById('num2').value;
        let result = Number(input1) +Number(input2)
        console.log(result);
        
    }


    // Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

const getReverse =()=>{
let number = 32243
let vlu  = Number(number.toString().split("").reverse().join(''))

return vlu


}
console.log(getReverse());



// removing duplicates using foreach
let arrrr = [12,3,4,5,4,5,5,5]
let uniqueValue = []
arrrr.forEach((item)=>{
if(!uniqueValue.includes(item))
    uniqueValue.push(item)
})
console.log("value",uniqueValue);

// removing duplicates using for loop
let ary =[7,7,7,7,7,7,7,1]
let removeDuplicate =[]
for(let i = 0; i <= ary.length;i++){
    if(!removeDuplicate.includes(ary[i])){
        removeDuplicate.push(ary[i])
    }
}
console.log(removeDuplicate);

function getcount(vlue,checkValue){
    let count = []
vlue.forEach((data)=>{
    if(data==checkValue){
     count.push(data)
    }
})
return count
}
// console.log(getcount([1,2,3,3,3,3],3));
let fun = getcount([1,2,3,3,3,3],3)
console.log(fun);



let numm = '1'
let numPlus =   Number(numm) + Number("2")
console.log(numPlus);

function defaul(vlu){
if(!vlu){
// console.log("value mad");
return "value mad "

}
return vlu
}
console.log(defaul());

// Find the Largest Number: Create a function that takes
//  an array of numbers and returns the largest one.

function getGreatest(args){
let greatest = args[0]
args.forEach((arg)=>{
    if(arg > greatest){
      greatest = arg    
    }
})
return greatest;
}
console.log(getGreatest([1,2,3,4,5]));



 let myNum = parseInt("12")
 console.log(typeof myNum);
//  it can be converted into number like this 
let num4 = +"23"
console.log(typeof num4);



const herArr = [1,2,3,4,5,6,7,3,3,3,3]
function herFunction(arr){
console.log(arr);
let unique = []
arr.forEach((data)=>{
    if(!unique.includes(data)){
       unique.push(data)
    }
})
return unique
}
console.log(herFunction(herArr));

const myFun=(arr)=>{
 if(arr.length){
    return [
        {name :"faiz"},
        {age :"21"},
        {status :"single"},
    ]
    
 }
 else{
    return [
        {message :"sorry no data found"}
    ]
 }
}

console.log(myFun([1]));
console.log(myFun([]));


function getrev(num){
  const rev = num.toString().split("").reverse().join("")
  console.log("rev",rev);
  
}
getrev(12334)


function remove(){
    let arr = [1,2,3,4,4,5,6,6,6,7,7]
    let newarr = []
    arr.forEach((data)=>{
      if(!newarr.includes(data)){
        return newarr.push(data)
      }
    })
return newarr
}
console.log(remove())


function removeDupByForLoop(){
    let arrrrr = [1,2,3,4,4,5,6,6,6,7,7]
    let newarrr = []
    for(let i = 0; i < arrrrr.length;i++){
        if(!newarrr.includes(arrrrr[i])){
            newarrr.push(arrrrr[i])
        }
        
    }
    console.log("new arr after..",newarrr);
    return newarrr

}

console.log(removeDupByForLoop())

