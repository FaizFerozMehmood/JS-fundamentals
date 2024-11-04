// // How do you select an HTML element by its ID and change its text content?

// const h1 = document.getElementById("hello");
// h1.innerText = "HELLO JS!";
// h1.remove()

// // What method would you use to add a new class to an HTML element?
// const cls = document.getElementById("class");
// const btn = document.querySelector(".btn");
// console.log(btn);

// btn.addEventListener("click", () => {
//   cls.classList.add("newClass");
// });

// How do you select an HTML element by its ID and change its text content?
// What method would you use to add a new class to an HTML element?
// How can you remove an existing class from an HTML element?
// How do you create a new HTML element and add it to the DOM?
// What’s the difference between innerText, textContent, and innerHTML?
// How can you toggle a class on an HTML element?
// How would you access the value of an input field in JavaScript?
// How can you change the src attribute of an image using JavaScript?
// What’s the best way to attach a click event listener to a button?
// How do you prevent the default action of a form submission in JavaScript?
// How can you change the style (e.g., color, font-size) of an element in JavaScript?
// How would you find all elements with a specific class name?
// How can you remove an element from the DOM?
// What’s the purpose of event.stopPropagation() and when would you use it?
// How can you add multiple classes to an element at once?
// What method can you use to replace one element with another in the DOM?
// How do you insert an element before another existing element?
// How can you make an element’s visibility toggle on and off with a button click?
// How do you get and set data attributes of an HTML element?
// What’s the difference between using addEventListener and setting an onclick property?

// How do you create a new HTML element and add it to the DOM?
// let arr = ["ab", "cd", "ef"];
// let NewHtmlEle = document.createElement("ul");
// NewHtmlEle.classList.add("unOrderedList");
// arr.map((vlu) => {
//   let list = document.createElement("li");
//   list.textContent = vlu;
//   NewHtmlEle.appendChild(list);
// });
// document.body.appendChild(NewHtmlEle);


  // const img = document.querySelector('.imageThatIsGoingToBeChange');
  // console.log(img);
  
//   img.src ="https://images.unsplash.com/photo-1728901863101-9d82fe7f4276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
  // img.setAttribute('src',"https://images.unsplash.com/photo-1728901863101-9d82fe7f4276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D")


//   const form = document.getElementById('formm')
//   console.log(form);
// form.addEventListener('submit', (e) => {
//   console.log(e);
//   e.preventDefault();
// });
// const container = document.getElementById('container').addEventListener('click',function(){
//   console.log('hello container');
  
  
  
// })
// console.log(container);
// const clickbtn = document.getElementById('btn').addEventListener('click',function(e){
//   console.log('btn clicked');
//   e.stopPropagation() //prevents the event from reaching the container
  
// })
// console.log(clickbtn);

// const toggleBtn = document.getElementById('toggleBtn')
// const box = document.querySelector('.box')


// toggleBtn.addEventListener('click',()=>{
// if(box.style.display ==='none') {
//   box.style.display = 'block'
// } else{
//   box.style.display = 'none'
// }
// })


const container = document.createElement('div')
// compact version
Object.assign(container.style,{
  backgroundColor :"black",
  height :"100px",
  width:"100px",
  display :"none"
})

// container.style.backgroundColor="black";
// container.style.height="100px"
// container.style.width="100px"
// container.style.display="none"
document.body.appendChild(container);

 const btn = document.createElement('button')
 btn.textContent = "toggle"
 btn.style.color = "black"
 document.body.appendChild(btn)
 btn.addEventListener('click',()=>{
// if(container.style.display === 'none'){
//   container.style.display = 'block'
// }
// else{
//   container.style.display = 'none'
// }
container.style.display = container.style.display === "none" ? "block" : "none"
 })
const onj = {
  name:"faiz",
  age:"21"
}
// const obj = Object.assign(onj,{
//    profession:"umair",
//   year:"20"
// })
const obj = {
...onj,
profession:"umair",
  year:"20"
}
console.log(obj)