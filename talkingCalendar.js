const talkingCalendar = function (date) {
  // Your code here
  let output = "";
  let monthMain = "";
  let dateArray = date.split("/");
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let i = 0; i < month.length; i++) {
    if (dateArray[1] - 1 === i) {
      monthMain = month[i];
    }
  }
  var day = parseInt(dateArray[2]);
  let suffix = "";
  switch (day) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    case 21:
      suffix = "st";
      break;
    case 22:
      suffix = "nd";
      break;
    case 23:
      suffix = "rd";
      break;
    case 1:
      suffix = "st";
      break;
    case 31:
      suffix = "st";
      break;
    default:
      suffix = "th";
      break;
  }
  output = monthMain + " " + day + suffix + ", " + dateArray[0];
  return output;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
