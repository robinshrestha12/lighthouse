const squareCode = function (message) {
  // Put your solution here
  let spaceRemoved = message.replace(/ /g, "");
  firstArrayLine = [];
  finalArrayLine = [];

  let count = 0;
  for (i = 0; i < spaceRemoved.length; i++) {
    count++;
  }

  let squareRootCount = Math.ceil(Math.sqrt(count));
  let lineOne = "";

  for (let j = 0; j < spaceRemoved.length; j++) {
    if (lineOne.length === squareRootCount) {
      firstArrayLine.push(lineOne);
      lineOne = "";
    }
    lineOne += spaceRemoved[j];
  }
  firstArrayLine.push(lineOne);

  for (k = 0; k < squareRootCount; k++) {
    let textAdded = "";
    firstArrayLine.forEach((element) => {
      textAdded += element.substring(k, k + 1);
    });
    finalArrayLine.push(textAdded);
  }
  return finalArrayLine.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
