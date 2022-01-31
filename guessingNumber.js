let randomNumber = Math.floor(Math.random() * 100);
//console.log(randomNumber);
let prompt = require("prompt-sync")();

// code below (replace this example)

//let answer2 = prompt("Guess a number: ");
let answerCollection = [];

let answer;
do {
  answer = prompt("Guess a number: ");
  answerCollection.push(answer);
  if (isNaN(answer)) {
    console.log("Not a number! Try again!");
  }
} while (checkEquality(answer) !== true);

function checkEquality(answer) {
  if (randomNumber.toString() === answer) {
    console.log(
      "You got it! You took " + answerCollection.length + " attempts!"
    );
    return true;
  }
  else if (answer < randomNumber) {
    console.log("Too low!");
  } else if (answer > randomNumber) {
    console.log("Too high!");
  }
  return false;
}
