const arr = [12,324,45,6,5767,8]
const even = arr.filter((data,index)=>data %2 ===0)
const odd = arr.filter((data,index )=>{
    return data<10
    
})
console.log(odd);

var zero = []

let vlue = [1,0,6,0,0]
vlue.forEach((data,index)=>{
       if(data === 0){
        // console.log(data);
        // zero.push("data",data)
        
        
        
    }
    
})

function returnOdd(numbers){
   return numbers.filter((number)=>{
        return number % 2 ===1
    })

}
console.log(returnOdd([12,23,,34,54,61,11,12,13]));

 
let findValue = (...rst)=>{
     let vlu = rst.filter((vl)=> vl < 5)

     console.log(vlu);
  return vlu
  
    
}
console.log(findValue(2,3,4,6,7,8,9));


// function filters(first,sec,thrd){
// console.log(first);
// return first

// }
// console.log(filters([
//     {id :1,name: "faiz"},
//     {id :1,name: "umair"},
//     {id :1,name: "ali"}
// )]);




function findData(vl){
 return vl.find((data)=> data > 2)
}

console.log("your data =>",findData([1,2,3,4]));

// summmary
// filter fun return all the element that matches the condition in an array 

// while

// find fun returns the first one that matches the condition


function findEven(number){
    return number.find((n)=> n % 2 ===0)
}
console.log(findEven([1,23,4,5,6,7,65,5,5,443,3,3,3,3,3,,223,43]))

function filterAllOddNums(numbers){
    return numbers.filter((n)=> n % 2 !==0)
}
console.log(filterAllOddNums([1,23,4,5,6,7,65,5,5,443,3,3,3,3,3,,223,43]))

