// // questions object, containing sample questions
// const questions = [{
//     questionText: "Lightning never strikes in the same place twice",
//     answer: false
//   },
//   {
//     questionText: "Humans can distinguish between over one trillion different smells",
//     answer: true
//   },
//   {
//     questionText: "Goldfish only have a memory of about three seconds",
//     answer: false
//   }
// ]

// let question;

// function askQuestion() {
//   return questions[0];
// }

// // appendQuestion - appends the question to the "question-container" in the index.html file
// const appendQuestion = function (question) {
//   const questionContainer = document.querySelector(`.question-container`);
//   questionContainer.innerHTML = question.questionText;
// };

// // askQuestionThen(time) - this assigns a global variable question to equal the first question i.e. question[0];
// // it also returns a promise that is resolved after a specified amount of time (so that we can expire the question after 5 seconds); the amount of time to wait is provided as an argument to the function
// const askQuestionThen = function (time) {
//   return new Promise(function (resolve) {
//     return question = questions[0];
//     appendQuestion(question);
//     setTimeout(function () {
//       resolve();
//     }, time);
//   });
// };


// // removeQuestion - removes the question from the "question-container"; it returns a promise so that the function is "thennable", meaning we can do something after the question
// const removeQuestion = function () {
//   return new Promise(function (resolve) {
//     const questionContainer = document.querySelector(`.question-container`);
//     questionContainer.innerHTML = '';
//     resolve();
//   });
// };

// // askQuestionThenRemoveQuestion(time) - it appends the question to the "question-container"and after a specified amount of time removes the question;
// // it takes an argument of "time" indicating the amount of time the question will be displayed

// function askQuestionThenRemoveQuestion(time) {
//   return askQuestionThen(time).then(removeQuestion)
// }

// // trueAndFalseButtons - it returns the collection of true and false buttons already provided in the index.html file

// const trueAndFalseButtons = function () {
//   return document.querySelector('.true-false-list').querySelectorAll('.btn');
// };

// // toggleTrueAndFalseButtons
// // it adds the hide class if not on the buttons,
// //  and removes the hide class if it is on the buttons

// const toggleTrueAndFalseButtons = function () {
//   trueAndFalseButtons().forEach(function (button) {
//     button.classList.toggle('hide')
//   });
// };

// // displayQuestionOnClick - it adds both the true and false buttons and the question
// // for five seconds, and then hides both of the true and false questions and removes the text of the question

// const displayQuestionOnClick = function () {
//   let button = document.querySelector('a')

//   return button.addEventListener('click', function () {
//     return toggleTrueAndFalseButtons()
//     askQuestionThenRemoveQuestion(5000)
//   });
// };


// LEARN.CO VERSION

const questions = [{
    questionText: "Lightning never strikes in the same place twice",
    answer: false
  },
  {
    questionText: "Humans can distinguish between over one trillion different smells",
    answer: true
  },
  {
    questionText: "Goldfish only have a memory of about three seconds",
    answer: false
  }
]

let question;

function askQuestion() {
  return questions[0]
}

function displayQuestionOnClick() {
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}

function trueAndFalseButtons() {
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function (btn) {
    btn.classList.toggle("hide")
  })
}

function checkQuestion(question, answer) {
  question.questionAnswer == answer
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(question)
    }, time)
  })
}

function appendQuestion(question) {
  let container = document.querySelector('.question-container')
  container.innerHTML = question.questionText;
}

function removeQuestion() {
  return new Promise(function () {
    let container = document.querySelector('.question-container')
    container.innerHTML = ''
    toggleTrueAndFalseButtons()
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}
