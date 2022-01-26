const blocksAway = function (directions) {
  // Put your solution here
  let finalPosition = { east: 0, north: 0 };
  let taxiDrivingAngle = 0;
  for (let i = 0; i < directions.length; i += 2) {
    if (i === 0) {
      if (directions[i] === "right") {
        taxiDrivingAngle = 0;
      } else if (directions[i] === "left") {
        taxiDrivingAngle = 180;
      }
    } else if (i > 0) {
      if (directions[i] === "right") {
        taxiDrivingAngle -= 90;
      } else if (directions[i] === "left") {
        taxiDrivingAngle += 90;
      }
    }

    if (taxiDrivingAngle < 0) {
      taxiDrivingAngle += 360;
    } else if (taxiDrivingAngle > 359) {
      taxiDrivingAngle -= 360;
    }

    if (taxiDrivingAngle === 0) {
      finalPosition.east += directions[i + 1];
    } else if (taxiDrivingAngle === 90) {
      finalPosition.north += directions[i + 1];
    } else if (taxiDrivingAngle === 180) {
      finalPosition.east -= directions[i + 1];
    } else if (taxiDrivingAngle === 270) {
      finalPosition.north -= directions[i + 1];
    }
  }
  //converting to positive values
  finalPosition.east = Math.abs(finalPosition.east);
  finalPosition.north = Math.abs(finalPosition.north);
  return finalPosition;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
