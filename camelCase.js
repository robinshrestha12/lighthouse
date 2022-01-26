const camelCase = function (input) {
  // Your code here
  let splitInput = [];
  let result = "";
  splitInput = input.split(" ");
  for (let i = 0; i < splitInput.length; i++) {
    if (i === 0) {
      result += splitInput[i][0].toLowerCase() + splitInput[i].slice(1);
    } else {
      result += splitInput[i][0].toUpperCase() + splitInput[i].slice(1);
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
