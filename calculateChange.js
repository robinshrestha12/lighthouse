const calculateChange = function (total, cash) {
  // Your code here
  const bills = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };
  let remaining = cash - total;
  while (remaining > 0) {
    if (remaining > 2000) {
      bills.twentyDollar += 1;
      remaining -= 2000;
    } else if (remaining > 1000) {
      bills.tenDollar += 1;
      remaining -= 1000;
    } else if (remaining > 500) {
      bills.fiveDollar += 1;
      remaining -= 500;
    } else if (remaining > 200) {
      bills.twoDollar += 1;
      remaining -= 200;
    } else if (remaining > 100) {
      bills.oneDollar += 1;
      remaining -= 100;
    } else if (remaining > 25) {
      bills.quarter += 1;
      remaining -= 25;
    } else if (remaining > 10) {
      bills.dime += 1;
      remaining -= 10;
    } else if (remaining > 5) {
      bills.nickel += 1;
      remaining -= 5;
    } else {
      bills.penny += 1;
      remaining -= 1;
    }
  }
  for (let itemName in bills) {
    if (bills[itemName] === 0) {
      delete bills[itemName];
    }
  }
  return bills;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
