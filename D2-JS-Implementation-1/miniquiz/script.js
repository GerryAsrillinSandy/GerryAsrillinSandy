// Buat list Object Pertanyaan
var quizData = [
  {
    question: "Apa itu JS?",
    choices: ["Makanan Ringan", "Minuman Bersoda", "Bahasa Pemrograman"],
    answer: "Bahasa Pemrograman",
  },
  {
    question: "Menurut Kamu Ngoding Menyenangkan Atau gak?",
    choices: ["Menyenangkan", "Biasa Aja", "Menyenangkan Tapi Pusing"],
    answer: "Menyenangkan Tapi Pusing",
  },
  {
    question: "Minuman Pahit Tapi Suka",
    choices: ["Susu", "Teh", "Kopi Susu"],
    answer: "Teh",
  },
];

// Deklarasi Variabel
var quizContainer = document.getElementById("quiz");
var questionContainer = document.getElementById("question");
var choicesContainer = document.getElementById("choices");
var submitButton = document.getElementById("submitButton");
var resultContainer = document.getElementById("results");
var currentQuestion = 0;
var score = 0;

// Menampilkan pertanyaan
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

// Check Jawaban
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

//Event Listener
submitButton.addEventListener("click", checkAnswer);
console.log(checkAnswer);

displayQuestion();
