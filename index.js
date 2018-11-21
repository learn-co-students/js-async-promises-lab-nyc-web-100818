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

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time)
    .then(
      removeQuestion
    )
    .catch(
      function(error) {
        console.log(error);
      }
    );
}

function askQuestionThen(time) { 
  question = questions[0]; 
  appendQuestion(question);

  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve();
      console.log('delayed')
    }, time );
  });
};

function removeQuestion() {
  console.log('remove Q')
  return new Promise(
    function(resolve) {
      
      const container = document.querySelector('.question-container')
      container.innerHTML = ""
      console.log(container)
      resolve()
    }
  );
}

function trueAndFalseButtons() {
  return document.querySelectorAll('.true-false-list .btn')
}

function toggleTrueAndFalseButtons() {
  const buttons = trueAndFalseButtons()
  buttons.forEach(button => {
    button.classList.toggle('hide')
  })
}

function displayQuestionOnClick() {
  const askButton = document.querySelector('a.btn')
  askButton.addEventListener('click', function() {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(10000) // 10 seconds
  })
}

displayQuestionOnClick();
