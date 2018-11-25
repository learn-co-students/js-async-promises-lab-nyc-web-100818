const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;


function appendQuestion(question){
  let qContainer = document.querySelector('.question-container');
  qContainer.innerHTML = question.questionText;
}

function askQuestionThen(time){
  question = questions[0];
  return new Promise(function(resolve, reject){
    resolve('asked question!')
  });
}

function removeQuestion(){
  let qContainer = document.querySelector('.question-container');
  qContainer.innerHTML = '';
}

function askQuestionThenRemoveQuestion(time){
  return new Promise(function(resolve, reject) {
    return appendQuestion(question), 100;
  });
}

// function trueAndFalseButtons() {
//   const buttons = document.querySelectorAll(".true-false-list .btn")
//   return buttons;
// }

function trueAndFalseButtons() {
  const tFButtons = document.querySelector('.true-false-list').querySelectorAll('.btn')
  tFButtons[0].innerText = "TRUE"
  tFButtons[1].innerText = "FALSE"
  return tFButtons;
}

function toggleTrueAndFalseButtons() {
    trueAndFalseButtons().forEach(function(button) {
      button.classList.toggle("hide");
    });
}

function displayQuestionOnClick(){
  const askQuestionBtn = document.querySelector('a');
  return askQuestionBtn.addEventListener('click', function(){
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000);
  });
}
