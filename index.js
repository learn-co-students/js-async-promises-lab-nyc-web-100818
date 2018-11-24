const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;


function appendQuestion(question) {
  const questionCont = document.getElementsByClassName('question-container')
  questionCont[0].innerHTML = question.questionText
}
// alternative using querySelector:
// const questionCont = document.querySelector('.question-container')
// questionCont.innerHTML = question.questionText

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  // removes the question in the questionCont
  const questionCont = document.getElementsByClassName('question-container')
  questionCont[0].innerHTML = '' // just reassign the text to empty string
}

function askQuestionThenRemoveQuestion() {
  return new Promise(function(resolve, reject) {
    return appendQuestion(question), 1000
  })
}

function trueAndFalseButtons() {
  const tFButtons = document.querySelector('.true-false-list').querySelectorAll('.btn')
  tFButtons[0].innerText = "TRUE"
  tFButtons[1].innerText = "FALSE"
  return tFButtons;
}

function toggleTrueAndFalseButtons() {
// can use the function above since it returns both buttons
// iterate over each button to toggle their hidden setting
    trueAndFalseButtons().forEach(function(button) {
      button.classList.toggle("hide");
    })
}

function displayQuestionOnClick() {
  const askAway = document.querySelector('a');
  // click event - going to need .addEventListener
  // when we click askAway we want to do something... so called addEventListener on the askAway button
  return askAway.addEventListener('click', function() {
    toggleTrueAndFalseButtons(); // call above fn
    askQuestionThenRemoveQuestion(5000);
  })
}
























// function appendQuestion(question) {
//   const questionContainer = document.querySelector('.question-container')
//   // questionContainer.innerHTML = question.questionText;
// }
//
// function askQuestionThen(time){
//   question = questions[0]
//   appendQuestion(question)
//   return new Promise(function(resolve){
//     setTimeout(function(){
//       resolve(question)
//     }, time)
//   })
// }
//
// function removeQuestion() {
//   const questionContainer = document.querySelector('.question-container')
//   questionContainer.innerHTML = '' // TODO: why not remove()???
// }
//
// function askQuestionThenRemoveQuestion(time) {
//   return askQuestionThen(time).then(removeQuestion);
// }
//
// function trueAndFalseButtons() {
//   return document.querySelector('.true-false-list').querySelectorAll('.btn')
// }
