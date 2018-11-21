const questions = [
  { questionText: "Lightning never strikes in the same place twice", answer: false },
  { questionText: "Humans can distinguish between over one trillion different smells", answer: true },
  { questionText: "Goldfish only have a memory of about three seconds", answer: false }
]

let question;

let questionContainer = document.getElementsByClassName('question-container')[0]

function appendQuestion(q) {
  questionContainer.innerText = q['questionText']
}

function askQuestionThen(t) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve, reject) {
    setTimeout(resolve.bind('Finished askQuestionThen'), t)
  })
}

function removeQuestion(qMessage) {
  questionContainer.innerText = ''
}

function askQuestionThenRemoveQuestion(t) {
  askQuestionThen(t).then(() => { removeQuestion() })
}

function trueAndFalseButtons() {
    const a = document.getElementsByClassName('true-false-list')[0]
    return Array.from(a.children)
}

function toggleTrueAndFalseButtons() {
  if (trueAndFalseButtons()[0].classList.contains('hide')) {
    trueAndFalseButtons()[0].classList.remove('hide')
    trueAndFalseButtons()[1].classList.remove('hide')
  } else {
    trueAndFalseButtons()[0].classList.add('hide')
    trueAndFalseButtons()[1].classList.add('hide')
  }
}

function displayQuestionOnClick() {
  toggleTrueAndFalseButtons()
  askQuestionThenRemoveQuestion(10000)
}

document.getElementsByClassName('waves-light')[0].addEventListener('click', () => {displayQuestionOnClick()})
