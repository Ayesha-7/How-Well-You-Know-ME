//adding readlinesync
var readlineSync = require("readline-sync");
//adding or importing CHALK for that Style
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
    question: "1) Initial of my middle name?  ",
    answer: "R"
  },

  {
    question: "2) What will I prefer, Coffee or Tea?  ",
    answer: "Coffee"
  },

  {
    question: "3) My favorite season of the year?  ",
    answer: "Winter"
  },

  {
    question: "4) What ice cream flavour I love the most?  ",
    answer: "butterscotch"
  },

  {
    question: "5) Cat person OR Dog person?  ",
    answer: "both"
  },

  {
    question: "6) My fav color Blue OR Red?  ",
    answer: "Blue"
  },

  {
    question: "7) Am I a Pizza or a Pasta Person?  ",
    answer: "Pizza"
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

var scoreDB = [
  {name: "Mrunal", score: 10},
  {name: "Ruchi", score: 10},
  {name: "Muskan", score: 9}
]
//Final score
console.log()
console.log("Your final score is " + score)
console.log()
if(score === scoreDB[0].score ){
  console.log(chalk.magentaBright("Yay!! You've beaten the HighScore!!!"))
  console.log(Q("Congratulations!"))
  console.log(Q("Take a screenshot and send it to me I'll update the scorenoard."))
  console.log()
}
if (score >= 7) {
  console.log("🎊🎉🎉🎉🎉🎉🎊")
  console.log(R("You are the best one!!💛 "))
}
else if (score <= 6 && score > 3) {
  console.log(R("Hey there friend!😊 "))
} else {
  console.log(R(":-("))
}



console.log("Score Board")
for(var i = 0; i < scoreDB.length; i++){
  console.log(scoreDB[i].name + ": "+ scoreDB[i].score);
}
