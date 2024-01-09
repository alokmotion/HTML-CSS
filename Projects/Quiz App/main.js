const questions = [
  {
    question: "Who is known as Hermit of Shimla?",
    answer: [
      { text: "George Yule", correct: false },
      { text: "William Wedderburn", correct: false },
      { text: "Rabindranath Tagore", correct: false },
      { text: "Allan Octavian Hume", correct: true },
    ],
  },

  {
    question: "Grand Central Terminal, Park Avenue, New York is the world's?",
    answer: [
      { text: "largest railway station", correct: true },
      { text: "highest railway station", correct: false },
      { text: "longest railway station", correct: false },
      { text: "None of the above", correct: false },
    ],
  },

  {
    question: "Entomology is the science that studies?",
    answer: [
      { text: "Behavior of human beings", correct: false },
      { text: "Insects", correct: true },
      {
        text: "The origin and history of technical and scientific terms",
        correct: false,
      },
      { text: "The formation of rocks", correct: false },
    ],
  },

  {
    question: "Who is known as Hermit of Shimla?",
    answer: [
      { text: "George Yule", correct: false },
      { text: "William Wedderburn", correct: false },
      { text: "Rabindranath Tagore", correct: false },
      { text: "Allan Octavian Hume", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("inCorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
