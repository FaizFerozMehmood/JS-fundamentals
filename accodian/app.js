const faq = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a versatile programming language commonly used to create interactive and dynamic content on web pages.",
  },
  {
    id: 2,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, particularly single-page applications.",
  },
  {
    id: 3,
    question: "What is Node.js?",
    answer:
      "Node.js is a runtime environment that allows developers to run JavaScript on the server-side.",
  },
  {
    id: 4,
    question: "What is the purpose of CSS?",
    answer:
      "CSS (Cascading Style Sheets) is used to style and layout web pages, including colors, fonts, and spacing.",
  },
  {
    id: 5,
    question: "What is MongoDB?",
    answer:
      "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON.",
  },
];
let container = document.getElementById("container");

faq?.map((data) => {

  let ele = `<div>
  <h3  onclick="handleClick(${data.id})" >${data.question}</h3>
  <div><p>${data.answer}</p></div>
</div>`;
  container.innerHTML += ele;
});

function handleClick(currentId){
  console.log(faq[currentId -1]);
  
  
}