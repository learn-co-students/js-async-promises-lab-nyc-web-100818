const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  const questionContainer = document.querySelector(".question-container");
  questionContainer.innerText = question.questionText;
}

function askQuestionThen(time) {
  return new Promise((resolve) => {
    question = questions[0];
    appendQuestion(question);
    setTimeout(() => {
      resolve()
    }, time)
  })
}

function removeQuestion() {
  return new Promise((resolve) => {
    const questionContainer = document.querySelector(".question-container");
    questionContainer.innerText = ""
  })
}

function askQuestionThenRemoveQuestion(time) {
  askQuestionThen(time).then(removeQuestion)
  return new Promise((resolve) => resolve());
}

function trueAndFalseButtons() {
  const buttons = document.querySelectorAll(".true-false-list .btn")
  return buttons;
}

function toggleTrueAndFalseButtons() {
  const buttons = trueAndFalseButtons();
  buttons.forEach(b => b.classList.toggle('hide'))
}

function displayQuestionOnClick() {
  const askButton = document.querySelector('a')
  askButton.addEventListener('click', () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(10000);
  })
}
displayQuestionOnClick()
