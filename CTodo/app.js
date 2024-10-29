const input = document.getElementById("input");
const add = document.getElementById("add");
const content = document.getElementById("content");
const deleteAll = document.getElementById('deleteAll')

const displayItem = () => {
  let savedValue = JSON.parse(localStorage.getItem("inputvalue")) || [];
  content.innerHTML = "";
 

  savedValue.forEach((item, index) => {
    let listitem = document.createElement("li");
    listitem.textContent = item;
    listitem.addEventListener("click", () => {
      listitem.remove();
      savedValue.splice(index, 1);
      localStorage.setItem("inputvalue", JSON.stringify(savedValue));
    });
    content.appendChild(listitem);
  });
};
add.addEventListener("click", () => {
  let inputvalue = input.value.trim();
  if (!inputvalue) alert('enter something!')
  if (inputvalue) {
    let storeditems = JSON.parse(localStorage.getItem("inputvalue")) || [];
    storeditems.push(inputvalue);
    localStorage.setItem("inputvalue", JSON.stringify(storeditems));
    displayItem();
    input.value = "";
  }
});
window.addEventListener("DOMContentLoaded", () => {
  displayItem();
});
deleteAll.addEventListener('click',()=>{

  if(content.innerText  ===""){
    return Swal.fire({
      title: 'No items to delete',
      text: "There are no items in the list to delete!",
      icon: 'info',
   
    });





    alert("Nothing no delete!")
  }
  localStorage.clear()
  content.innerText  =""
})






// function myFunction(index,savedValue){
//     console.log(index);
//     let filtered = savedValue.filter((_,targeted)=> targeted!==index)
//     console.log("targeted=>",filtered);

// }

// add.addEventListener('click',()=>{

//     console.log(input.value);
//     if(input.value.trim()){

//         localStorage.setItem("Inputvalue",input.value)
//         const storedValue = localStorage.getItem('Inputvalue')
//         console.log(storedValue);

//         let display = `<li>${storedValue}</li>`
//         content.innerHTML +=display
//         input.value =""
//     }
// })
// window.addEventListener('DOMContentLoaded',()=>{
//     const savedValue = localStorage.getItem('Inputvalue')
//     if(savedValue){
//         input.value = savedValue
//     }
// })
