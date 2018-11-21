//TODO: took a while... need to redo and reclarify some stuf, too tired for comments =-\ ...


const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]


let question;
const questionDiv = document.querySelector('.question-container')


const appendQuestion = (question) => {
    questionDiv.innerHTML = question.questionText;
}


const askQuestionThen = () => {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}


const removeQuestion = () => {
  new Promise(function(){
    questionDiv.innerHTML = ''
    resolve()
  })
}


const trueAndFalseButtons = () => {
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}


function askQuestionThenRemoveQuestion (time) {
  return askQuestionThen(time).then(removeQuestion);
  trueAndFalseButtons ()
}


const toggleTrueAndFalseButtons = () => {
  trueAndFalseButtons().forEach(function (btn) {
    btn.classList.toggle("hide");
  })
}


const displayQuestionOnClick = () => {
  //display question = clicking on the link!('a')
  document.querySelector('a.btn').addEventListener('click', function() {
  toggleTrueAndFalseButtons()
  askQuestionThenRemoveQuestion(5000) //5sec
  });
}
