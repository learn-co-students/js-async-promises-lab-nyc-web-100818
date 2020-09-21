const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const questionContainer = document.querySelector(".question-container")
const buttons = document.querySelectorAll('.true-false-list .btn')
const askAwayBtn = document.querySelector("a.btn")

function appendQuestion(question){
  return questionContainer.innerHTML = question.questionText
}


function askQuestionThen(time){
  return new Promise(function(resolve) {
    question = questions[0]
    appendQuestion(question)
    setTimeout(function() {
      resolve(question)
    },time)
  })
}

function removeQuestion() {
  questionContainer.innerHTML = "";
}

function askQuestionThenRemoveQuestion() {
  return new Promise(function(resolve){
    return appendQuestion(question)
  },1000)
}

function trueAndFalseButtons() {
  buttons[0].innerText = "TRUE"
  buttons[1].innerText = "FALSE"
  return buttons
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle('hide')
  })
}

function displayQuestionOnClick() {
  return askAwayBtn.addEventListener("click", function(){
    return toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000)
  })
}
displayQuestionOnClick()
