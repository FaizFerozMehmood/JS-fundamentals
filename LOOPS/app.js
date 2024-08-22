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

