var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + " to DO YOU KNOW Eshaan?");

var highScores = [
  {
    name: "Coder",
    score: 3,
  },

  {
    name: "Geek",
    score: 3,
  },
]
var questions = [{
  question: "Where do I live? ",
  answer: "Bangalore"
}, {
  question: "My favorite cartoon character would be? ",
  answer: "Doraemon"
},
{
  question: "Which is my favourite TV Series? ",
  answer: "Mr.Robot"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) 
  {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")