const textInput = document.getElementById("textInput")

textInput.addEventListener('change',()=>{
    // console.log(textInput.value);
    // textInput.value=""
    let vl=textInput.value
    if(vl.length > 10){
       console.log(vl.substring(0,10)+"...") 
      
    }
    else{
    console.log("length is less than 10");
    
    }
})
