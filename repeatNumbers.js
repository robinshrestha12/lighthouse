const repeatNumbers = function (data) {
  let stringData = "";
  for (let i = 0; i < data.length; i++) {
    let arrayString = "";
    for (let k = 0; k < data[i][1]; k++) {
      arrayString += data[i][0];
    }
    if (i === 0) {
      stringData = arrayString;
    } else {
      stringData += ", " + arrayString;
    }
  }
  return stringData;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
