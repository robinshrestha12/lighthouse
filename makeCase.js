const makeCase = function (input, case1) {
  // Put your solution here
  let splitInput = [];
  let result = "";
  splitInput = input.split(" ");
  for (let i = 0; i < splitInput.length; i++) {
    if (case1 === "camel") {
      if (i === 0) {
        result += splitInput[i][0].toLowerCase() + splitInput[i].slice(1);
      } else {
        result += splitInput[i][0].toUpperCase() + splitInput[i].slice(1);
      }
    } else if (case1 === "pascal") {
      result += splitInput[i][0].toUpperCase() + splitInput[i].slice(1);
    } else if (case1 === "snake") {
      if (i < splitInput.length - 1) {
        result += splitInput[i] + "_";
      } else {
        result += splitInput[i];
      }
    } else if (case1 === "kebab") {
      if (i < splitInput.length - 1) {
        result += splitInput[i] + "-";
      } else {
        result += splitInput[i];
      }
    } else if (case1 === "title") {
      if (i < splitInput.length - 1) {
        result += splitInput[i][0].toUpperCase() + splitInput[i].slice(1) + " ";
      } else {
        result += splitInput[i][0].toUpperCase() + splitInput[i].slice(1);
      }
    } else if (case1 === "vowel") {
      let word = "";
      for (let j = 0; j < splitInput[i].length; j++) {
        if (
          splitInput[i][j] === "a" ||
          splitInput[i][j] === "e" ||
          splitInput[i][j] === "i" ||
          splitInput[i][j] === "o" ||
          splitInput[i][j] === "u"
        ) {
          word += splitInput[i][j].toUpperCase();
        } else {
          word += splitInput[i][j].toLowerCase();
        }
      }
      if (i < splitInput.length - 1) {
        result += word + " ";
      } else {
        result += word;
      }
    } else if (case1 === "consonant") {
      let word = "";
      for (let j = 0; j < splitInput[i].length; j++) {
        if (
          splitInput[i][j] === "a" ||
          splitInput[i][j] === "e" ||
          splitInput[i][j] === "i" ||
          splitInput[i][j] === "o" ||
          splitInput[i][j] === "u"
        ) {
          word += splitInput[i][j].toLowerCase();
        } else {
          word += splitInput[i][j].toUpperCase();
        }
      }
      if (i < splitInput.length - 1) {
        result += word + " ";
      } else {
        result += word;
      }
    } else if ((case1 = ["upper", "snake"])) {
      let word = "";
      for (let j = 0; j < splitInput[i].length; j++) {
        word += splitInput[i][j].toUpperCase();
      }
      if (i < splitInput.length - 1) {
        result += word + "_";
      } else {
        result += word;
      }
    }
  }
  return result;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
