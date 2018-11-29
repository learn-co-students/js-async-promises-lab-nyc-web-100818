JS Async Promises Lab
--- 

## Objectives
1. Practice working with setTimeout and asynchronous code
2. Practice working with promises


## Introduction

In this lab we'll practice using promises, as well as our other JavaScript skills, to make a game that some of our passengers can play during their ride.  It's a quiz game with a series of true or false question that our passengers must answer.  The user clicks on the "Ask Away!" button and that displays the first question as well as the True and False buttons.  After five seconds, time is up and the question, and True and False buttons, disappear.   

## Your task

We have already done some of the work for you.  We have uploaded the "materialize.css" library, so that our game has some styling.  And if you look at the `index.html` file, you can see that we have provided a div "question-container" where the question should be displayed, and a div of "true false list" to hold the buttons.  

There are number of functions that we need to build to get this functionality to work.  

+ `appendQuestion` - appends the question to the "question-container" in the `index.html` file
+ `askQuestionThen(time)` - this assigns a global variable `question` to equal the first question; it also returns a promise that is resolved after a specified amount of time (so that we can expire the question after 5 seconds); the amount of time to wait is provided as an argument to the function
+ `removeQuestion` - removes the question from the "question-container"; it returns a promise so that the function is "thennable", meaning we can do something after the question
+ `askQuestionThenRemoveQuestion(time)` - it appends the question to the "question-container" and after a specified amount of time removes the question; it takes an argument of "time" indicating the amount of time the question will be displayed
+ `trueAndFalseButtons` - it returns the collection of true and false buttons already provided in the `index.html` file
+ `toggleTrueAndFalseButtons` - it adds the hide class if not on the buttons, and removes the hide class if it is on the buttons
+ `displayQuestionOnClick`  - it adds both the true and false buttons and the question for five seconds, and then hides both of the true and false questions and removes the text of the question

## Resources

- [Wikipedia: First-class function](https://en.wikipedia.org/wiki/First-class_function)
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [JavaScript is Sexy: Higher-Order Functions](http://javascriptissexy.com/tag/higher-order-functions/)
