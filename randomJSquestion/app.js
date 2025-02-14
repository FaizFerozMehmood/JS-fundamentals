console.log("helllo");


const arr = [1,2,3,44,]

arr[100] = 200
// now the length of the array would be 101 as it sprase the array and it leaves empty indics betwwn 4 to 100
console.log(arr[6]);
// Accessing arr[6] returns undefined because it exists in the empty section.


console.log(typeof typeof "100");
// typeof always returns a string 
//so the typeof 100 = "number"  and typeof number will be string


const myar = [..."fazMahmood"]
const myNum = [...100]
const str = [...toString(100)]

console.log(myar);
console.log(myNum);
console.log(str);


//it splits the the string into character in an array as string are iterable so the result will be like this  ["f","a","z"] 
//if we try to use it on number if will throw an error as  it cannot be spread into individual digits or components.we will need to first convert into string then can apply

console.log(parseInt("10+2"));
console.log(parseInt("10m"))
console.log(parseInt("m1"))


function abc(){
    return "hello";
}
console.log("abc",abc());
