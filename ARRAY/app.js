//push() adds an element at the end of an array and returns new length
const arr = [1,2,3,4,5]
const vlu = arr.push("clock")
console.log(vlu);



//returning first element from an array
const arry = [1,2,3,45,]
const arry2 = arry[0]
console.log(arry2);

// returning last element of the array using at()

const ary = [1,2,3,44,5,6,7]
const vl = ary.at(-1)
console.log(vl);



function fun(sumVlues){
    let res = 0
    sumVlues.forEach((data) => {
        if(data >0){
          res += data
        }
    })
    return res

}
console.log("results=> "+fun([1,1,1,1,-5]));



function myfun(number,secNum){
      return number.find((num)=>{
        return num ===secNum
      })
}

console.log(myfun([1,2,3,4,5],5));
