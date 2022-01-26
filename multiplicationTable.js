const multiplicationTable = function (maxValue) {
  // Your code here
  let multiTable = "";
  for (i = 0; i < maxValue; i++) {
    let tableRows = "";
    for (j = 0; j < maxValue; j++) {
      tableRows += " " + (i + 1) * (j + 1) + " ";
    }
    tableRows += "\n";
    multiTable += tableRows;
  }
  return multiTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
