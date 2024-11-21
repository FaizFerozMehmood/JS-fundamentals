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



