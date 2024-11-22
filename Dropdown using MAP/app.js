const select = document.createElement('select')
document.body.appendChild(select)
let arrayOfStudents = ["Faiz","Umair","Habib","kashif"]
arrayOfStudents.map((student,index)=>{
    const option = document.createElement('option')
    option.innerText = student
    select.appendChild(option)
return option.innerText
    
    
})
