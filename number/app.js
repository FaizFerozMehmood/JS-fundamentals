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
