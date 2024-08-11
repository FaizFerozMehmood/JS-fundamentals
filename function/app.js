//  default parameters in function
 function buyProducts(name1 = "milk",name2 = "aalo",name3 = "channy k daal"){
    console.log(`remember to buy ${name1}`);
    console.log(`remember to buy ${name2}`);
    console.log(`remember to buy ${name3}`);
 }
buyProducts()

//++++++++++++++RETURN++++
function sayHello(firstName,lastName){
    return firstName +" "+ lastName

}
 const fulName = sayHello("faiz","ali")
 console.log(fulName);

        // ++++++++++++++++++

 function multiplyByNineFifths(number) {
    return number * (9/5);

  };
  
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
  
 console.log(getFahrenheit(15));
 