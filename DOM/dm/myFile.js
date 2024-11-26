const ul = document.getElementById("ul");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

btn.addEventListener("click", myfun);
function myfun() {
  console.log(input.value);
  const existing = JSON.parse(localStorage.getItem("inputValue")) || []
  existing.push(input.value)
  // input.value= input.value
  // ul.innerHTML =`<li>${input.value}</li>`
  ul.innerHTML += `
  <li>
  <span id ="span">${input.value} </span>
  <button onclick="editFun(this)">edit</button>
  <button onclick="delFun(this)">del</button>
  </li>
  `;
  localStorage.setItem("inputValue",JSON.stringify(existing))
  input.value = "";

}
function delFun(elememt) {
  console.log(elememt);
  console.log(elememt.previousElementSibling.previousElementSibling.innerText);
  let innerTXT = elememt.previousElementSibling.previousElementSibling.innerText
  
  elememt.parentElement.remove();

  // existing = existing.filter((item))
  let existing = JSON.parse(localStorage.getItem("inputValue")) || []
  existing = existing.filter((item)=> item!==innerTXT)
  localStorage.setItem("inputValue",JSON.stringify(existing))
}
function editFun(elememt) {
  console.log(elememt);
  const getEle = elememt.previousElementSibling;
  let curentValue = getEle.innerText;
  let updateValue = prompt("update todo ", curentValue);
  if (updateValue !== null) {
    getEle.innerText = curentValue;
  }
}
window.onload =()=>{
  let existing = JSON.parse(localStorage.getItem("inputValue")) || []
existing.forEach(element => {
  ul.innerHTML +=`
   <li>
        <span>${element}</span>
        <button onclick="editFun(this)">edit</button>
        <button onclick="delFun(this)">del</button>
      </li>
  `
});
}