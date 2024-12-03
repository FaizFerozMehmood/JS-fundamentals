const faq = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer: "JavaScript is a versatile programming language commonly used to create interactive and dynamic content on web pages.",
  },
  {
    id: 2,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, particularly single-page applications.",
  },
  {
    id: 3,
    question: "What is Node.js?",
    answer: "Node.js is a runtime environment that allows developers to run JavaScript on the server-side.",
  },
  {
    id: 4,
    question: "What is the purpose of CSS?",
    answer: "CSS (Cascading Style Sheets) is used to style and layout web pages, including colors, fonts, and spacing.",
  },
  {
    id: 5,
    question: "What is MongoDB?",
    answer: "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON.",
  },
];

const container = document.getElementById("container");

// Function to render FAQ items
faq.forEach((data) => {
  const faqItem = document.createElement("div");

  // Create question element
  const question = document.createElement("h3");
  question.innerText = data.question;
  question.style.cursor = "pointer";
  question.addEventListener("click", () => handleClick(data.id));

  // Create answer element
  const answer = document.createElement("div");
  answer.style.display = "none"; // Initially hidden
  answer.innerHTML = `<p>${data.answer}</p>`;
  answer.id = `answer-${data.id}`; // Unique ID for each answer

  // Append question and answer to the FAQ item
  faqItem.appendChild(question);
  faqItem.appendChild(answer);
  container.appendChild(faqItem);
});

// Function to handle question click
function handleClick(currentId) {
  faq.forEach((item) => {
    const answerDiv = document.getElementById(`answer-${item.id}`);
    if (item.id === currentId) {
      // Toggle visibility of the clicked answer
      answerDiv.style.display = answerDiv.style.display === "none" ? "block" : "none";
    } else {
      // Hide all other answers
      answerDiv.style.display = "none";
    }
  });
}
