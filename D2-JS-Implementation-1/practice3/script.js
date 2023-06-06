// Quiz data
var quizData = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean in the world?",
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "Pacific Ocean",
  },
];

// Variables
var quizContainer = document.getElementById("quiz");
var questionContainer = document.getElementById("question");
var choicesContainer = document.getElementById("choices");
var submitButton = document.getElementById("submitButton");
var resultsContainer = document.getElementById("results");
var currentQuestion = 0;
var score = 0;

// Display question and answer choices
function displayQuestion() {
  var currentQuiz = quizData[currentQuestion];
  questionContainer.textContent = currentQuiz.question;

  choicesContainer.innerHTML = "";

  currentQuiz.choices.forEach(function (choice) {
    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.value = choice;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(choice));
    choicesContainer.appendChild(label);
  });
}

// Check user's answers and display results
function checkAnswers() {
  var selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (!selectedOption) {
    alert("Please select an answer.");
    return;
  }

  var answer = selectedOption.value;
  if (answer === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion === quizData.length) {
    quizContainer.style.display = "none";
    resultsContainer.textContent =
      "You scored " + score + " out of " + quizData.length + ".";
    resultsContainer.style.display = "block";
  } else {
    displayQuestion();
  }
}

// Event listener for submit button
submitButton.addEventListener("click", checkAnswers);

// Display first question
displayQuestion();
