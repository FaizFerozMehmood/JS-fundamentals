 function useLoop(ele){
 ele.forEach(function(ele){
    console.log(ele);
    
 })
 }
 useLoop([1,2,3,4,5,6])



//  Sum grades 

// Complete the function sumGrades such that it
//  returns the sum of all the grades it receives as
//   a parameter. We haven't seen reduce yet, so try to
//    solve it using what you have learned so far.

function sumGrades(grades){
   let sum = 0;
   grades.forEach(function(grade){
      sum+=grade

   })
   return sum

}
sumGrades([1,2,3,4,6])

// Complete the function sumOddNumbers such that it 
// returns the sum of all the odd numbers from the numbers parameter it receives.
// The function should also work for negative numbers.
function myFunction(numbers){
   let vl = 0
   numbers.forEach((data) => {
      data % 2!==0? vl += data :"nodata"
   //   
   })
   return vl
}
console.log("results =>>>>>   ",myFunction([-2, -3, 4, 5, 6]));


function getNumbersOfStrings(strings){
     return strings.map((str)=>{
      return str.length
     })
}

console.log(getNumbersOfStrings(["abc","dfrcjdjds"]));

for (let i = 0; i <= 10;i++){
   console.log(i);
   
}


function herFun(stri){
   return stri.map((stri)=>{
      return stri.length
   })


}
console.log(herFun(["faiz","andHisPartner"]));
