// Quiz Data
var quizData = [
  {
    question: "Apa Ibukota Negara Indonesia Saat Ini?",
    choices: ["Bandung", "Yogya", "Jakarta"],
    answer: "Jakarta",
  },
  {
    question: "Pilih Minuman Yang Rasanya Pahit?",
    choices: ["Kopi", "Susu", "Juice"],
    answer: "Kopi",
  },
  {
    question: "Apa Materi Lecture Hari Ini?",
    choices: ["HTML", "JS", "CSS"],
    answer: "JS",
  },
];

// Deklarasi Variables
var quizContainer = document.getElementById("quiz");
var questionContainer = document.getElementById("question");
var choicesContainer = document.getElementById("choices");
var submitButton = document.getElementById("submitButton");
var resultContainer = document.getElementById("results");
var currentQuestion = 0;
var score = 0;

// Menampilkan pertanyaan dan pilihan jawaban
function displayQuestion() {
  var currentQuiz = quizData[currentQuestion];
  console.log(currentQuiz);
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

// Check jawaban dan menampilkan hasil
function checkAnswer() {
  var selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (!selectedOption) {
    alert("Silahkan pilih Jawaban");
    return;
  }

  var answer = selectedOption.value;
  if (answer == quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion === quizData.length) {
    quizContainer.style.display = "none";
    resultContainer.textContent =
      "Score yang kamu dapatkan adalah " +
      score +
      " dari " +
      quizData.length +
      " pertanyaan.";
  } else {
    displayQuestion();
  }
}

// Event Listener ketika klik button submit
submitButton.addEventListener("click", checkAnswer);
console.log(checkAnswer);

// Setiap reload menampilkan pertanyaan
displayQuestion();
