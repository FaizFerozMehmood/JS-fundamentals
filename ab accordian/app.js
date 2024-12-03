
const qA = [
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

const container = document.getElementById("container");

// Function to render qA items
qA.forEach((data) => {
  const qAItem = document.createElement("div");
  qAItem.className = "qA-item";

  // Create question element
  const question = document.createElement("h3");
  question.innerText = data.question;
  question.addEventListener("click", () => handleClick(data.id));

  // Create answer element
  const answer = document.createElement("div");
  answer.className = "answer";
  answer.innerHTML = `<p>${data.answer}</p>`;
  answer.id = `answer-${data.id}`;

  // Append question and answer to the qA item
  qAItem.appendChild(question);
  qAItem.appendChild(answer);
  container.appendChild(qAItem);
});

// Function to handle question click
function handleClick(currentId) {
  qA.forEach((item) => {
    const answerDiv = document.getElementById(`answer-${item.id}`);
    if (item.id === currentId) {
      answerDiv.style.display =
        answerDiv.style.display === "block" ? "none" : "block";
    } else {
      answerDiv.style.display = "none";
    }
  });
}