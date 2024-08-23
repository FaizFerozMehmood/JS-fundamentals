const arr = [12,324,45,6,5767,8]
const even = arr.filter((data,index)=>data %2 ===0)
const odd = arr.filter((data,index )=>{
    return data<10
    
})
console.log(odd);
let zero = []

const vlue = [1,0,6,0,0]
vlue.forEach((data,index)=>{
    // console.log(data);
    if(data <1){
        vlue.push(zero)
        console.log(data);
        
    }
    
})
