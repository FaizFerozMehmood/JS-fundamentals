const ul = document.createElement('ul')
document.body.appendChild(ul)
let arrayOfStudents = ["Faiz","Umair","Habib","kashif"]
arrayOfStudents.map((student,index)=>{
    const li = document.createElement('li')
    li.innerText = student
    ul.appendChild(li)
})