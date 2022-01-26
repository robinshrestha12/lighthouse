let randomNumber = Math.floor(Math.random() * 100);
//console.log(randomNumber);
let prompt = require("prompt-sync")();

// code below (replace this example)
let answer = prompt("Guess a number: ");
let answerCollection = [];
answerCollection.push(answer);

do {
  checkEquality(answer);
  if (!isNaN(answer)) {
    guessNumber(answer);
    answerCollection.push(answer);
    let answer2 = prompt("Guess a number: ");
    checkEquality(answer2);
    answer = answer2;
  } else {
    isNotANumber(answer);
    answer = prompt("Guess a number: ");
  }
} while (randomNumber !== answer);

function isNotANumber(answer) {
  console.log("Not a number! Try again!");
}

function guessNumber(answer) {
  if (answer < randomNumber) {
    console.log("Too low!");
  } else if (answer > randomNumber) {
    console.log("Too high!");
  }
}

function checkEquality(answer) {
  //console.log(answer);
  if (randomNumber.toString() === answer) {
    return console.log(
      "You got it! You took " + answerCollection.length + " attempts!"
    );
  }
}
