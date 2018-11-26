const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const questionContainer = document.querySelector('.question-container');

function appendQuestion(){
  questionContainer.innerHTML = questions[0].questionText
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion(){
  const questionCont = document.getElementsByClassName('question-container')
  questionCont[0].innerHTML = ''
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time)
    .then(removeQuestion)
}


function trueAndFalseButtons() {
  const tFButtons = document.querySelector('.true-false-list').querySelectorAll('.btn')
  tFButtons[0].innerText = "TRUE"
  tFButtons[1].innerText = "FALSE"
  return tFButtons;
}

function toggleTrueAndFalseButtons() {
    trueAndFalseButtons().forEach(function(button) {
      button.classList.toggle("hide");
    })
}



function displayQuestionOnClick(){
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
