const organizeInstructors = function (instructors) {
  // Put your solution here
  let organizedOutput = {}; //create returning object
  for (let i = 0; i < instructors.length; i++) {
    //if the course is not present add in new object
    if (!organizedOutput[instructors[i].course]) {
      organizedOutput[instructors[i].course] = [];
    }
    //add the names
    organizedOutput[instructors[i].course].push(instructors[i].name);
  }
  return organizedOutput;
};
console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
