const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const appendQuestion = function(question) {
  const container = document.querySelector('.question-container')
  container.innerHTML = question.questionText
}

const askQuestionThen = function(time) {
  return new Promise((resolve) => {
    question = questions[0]
    appendQuestion(question)
    setTimeout(function(){
      resolve()
    }, time)
  })
}

const removeQuestion = function() {
  return new Promise((resolve) => {
    const container = document.querySelector('.question-container')
    container.innerHTML = ""
    resolve()
  })
}

const askQuestionThenRemoveQuestion = function(time) {
  askQuestionThen(time).then(removeQuestion)
  return new Promise((resolve) => resolve())
}

const trueAndFalseButtons = function() {
  return document.querySelectorAll('.true-false-list .btn')
}

const toggleTrueAndFalseButtons = function() {
  const buttons = trueAndFalseButtons()
  buttons.forEach(button => {
    button.classList.toggle('hide')
  })
}

const checkAnswer = function() {
  
}

const displayQuestionOnClick = function() {
  const askButton = document.querySelector('a.btn')
  askButton.addEventListener('click', function() {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(10000) // 10 seconds
  })
}

displayQuestionOnClick() // call to attach button event listener