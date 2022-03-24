const checkCashRegister = (price, cash, cid) => {
  const legend = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }  
  let overall = 0;
  for (let element of cid) {
    overall += element[1];
  }
  overall = overall.toFixed(2);  
  let changeRequired = cash - price;
  const change = [];
  if (changeRequired > overall) {
    return { status: "INSUFFICIENT_FUNDS", change: change };
  } else if (changeRequired.toFixed(2) === overall) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let i of cid) {
      let temp = [i[0], 0];
      while (changeRequired >= legend[i[0]] && i[1] > 0) {
        temp[1] += legend[i[0]];
        i[1] -= legend[i[0]];
        changeRequired -= legend[i[0]];
        changeRequired = changeRequired.toFixed(2);
      }      if (temp[1] > 0) {
        change.push(temp);
      }
    }
  }  if (changeRequired > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }  return { status: "OPEN", change: change};
}
