const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question = questions[0];

const questionContainer = document.querySelector(".question-container")

function appendQuestion(question){
  const newComment = document.createElement("p");
  newComment.innerText = (question.questionText)
  questionContainer.appendChild(newComment)
}

function askQuestionThen(time){
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      let value = appendQuestion
      resolve(value)
    }),time
  })
}

// function removeQuestion {
//
// }
