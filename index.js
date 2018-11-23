const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
function askQuestion(){
  return questions[0]
}

// appends the question to the "question-container" in the index.html file
function appendQuestion(question){
  let container = document.querySelector('.question-container')
  container.innerHTML = question.questionText;
}

// this assigns a global variable question to equal the first question; it also returns a promise that is resolved after a specified amount of time (so that we can expire the question after 5 seconds); the amount of time to wait is provided as an argument to the function
function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

// removes the question from the "question-container"; it returns a promise so that the function is "thennable", meaning we can do something after the question
function removeQuestion(){
  return new Promise(function(){
    let container = document.querySelector('.question-container')
    container.innerHTML = ''
    toggleTrueAndFalseButtons()
  })
}

 // it appends the question to the "question-container" and after a specified amount of time removes the question; it takes an argument of "time" indicating the amount of time the question will be displayed
 function askQuestionThenRemoveQuestion(time){
   return askQuestionThen(time).then(removeQuestion)
 }

// it returns the collection of true and false buttons already provided in the index.html file
function trueAndFalseButtons(){
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

// it adds the hide class if not on the buttons, and removes the hide class if it is on the buttons
function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(button){
    button.classList.toggle("hide")
  })
}

function checkQuestion(question, answer){
  question.questionAnswer == answer
}

// it adds both the true and false buttons and the question for five seconds, and then hides both of the true and false questions and removes the text of the question
function displayQuestionOnClick(){
  let button = document.querySelector('a')
  return button.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
