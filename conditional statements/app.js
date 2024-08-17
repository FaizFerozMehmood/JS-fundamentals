const textInput = document.getElementById("textInput")

textInput.addEventListener('change',()=>{
    // console.log(textInput.value);
    let vl=textInput.value
    if(vl.length > 10){
        console.log(vl.substring(0,10)+"...") 
        
    }
    else{
        console.log("length is less than 10");
        
    }
    textInput.value=""
})
// ++++++++++++++++++     substring(1,4) eg :(hello)   => ell, takes two parameter,starting and ending excluding and one perameter  eg:2 to end     ++++++++++++++++++++
