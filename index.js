//adding readlinesync
var readlineSync = require("readline-sync");
//adding or importing CHALK for that extra charm
const chalk = require('chalk');
//Defining my styles
const h1 = chalk.bgBlackBright
const h2 = chalk.magentaBright
const Q = chalk.bold.blueBright
const RA = chalk.bold.greenBright
const WA = chalk.bold.redBright
const R = chalk.yellowBright
//user name input
var userName = readlineSync.question(R('Enter your name? '));
console.log();
console.log(h1('Hi ' + userName + '!'));
console.log();
console.log(h2("* * * Lets play a fun game ;-)* * *"));
console.log(h2("* * *HOW WELL YOU KNOW AYESHA * * *"));
console.log(chalk.white("------------------------------------"));
console.log(h2("Let's start"));

//Question Bank
var QB = [
  {
    question: "1) What is my middle name?  ",
    answer: "Rafique"
  },

  {
    question: "2) What was my name before Ayesha?  ",
    answer: "Anjum"
  },

  {
    question: "3) What is my birth month?  ",
    answer: "July"
  },

  {
    question: "4) What ice cream flavour I love the most?  ",
    answer: "butterscotch"
  },

  {
    question: "5) Am I an Android or iPhone person?  ",
    answer: "Android"
  },

  {
    question: "6) Blue OR Red?  ",
    answer: "Blue"
  },

  {
    question: "7) What's my favorite number?  ",
    answer: "Seven"
  },

  {
    question: "8) Where do I live?  ",
    answer: "Pune"
  },

  {
    question: "9) What is my zodiac sign?  " ,
    answer: "Cancer"
  },

  {
    question: "10) Do i believe in Horoscope?  ",
    answer: "No"
  }
]
//Global Score Variable
var score = 0
var scoreDB = [
  {name: "Ayesha", score: 10},
  {name: "Maheen", score: 10},
  {name: "Uzma", score: 9}
]

//Function play

function play(question, answer) {
  var userAnswer = readlineSync.question(Q(question));
  console.log()

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(RA("Right !!"))
    score = score + 1;
  } else {
    console.log(WA("Wrong :-("))
  }
console.log(chalk.white("-------------------------------------------"));
}

//for loop
for (var i = 0; i < QB.length; i++) {
  var currentQue = QB[i];
  play(currentQue.question, currentQue.answer);
}

//Final score
console.log()
console.log("Your final score is " + score)
console.log()
if(score === scoreDB[0].score ){
  console.log(chalk.magentaBright("Yay!! You beat the HighScore!!!"))
  console.log(Q("Congratulations!"))
  console.log()
}
if (score >= 7) {
  console.log(R("🎆Awwww you are the Goodest Friend!! :-) 🎆"))
}
else if (score <= 6 && score > 3) {
  console.log(R("Hey there friend. Lets meet soon."))
} else {
  console.log(R("Yaaar koi nahi.. Better Luck Next Time ("))
}