function checkDivision(beginRange = 1, endRange = 100) {
  while (+beginRange <= +endRange) {
    let str = String(beginRange);

    if ((beginRange % 2 == 0)
        || (beginRange % 3 == 0)
        || (beginRange % 10 == 0)) {
      if (beginRange % 2 == 0) {
        str += " is even,";
      }
      if (beginRange % 3 == 0) {
        str += " is a multiple of 3,";
      }
      if (beginRange % 10 == 0) {
        str += " is divisible by 10";
      }
    } else {
      str += " -";
    }
    if (str.slice(-1) == ',') {
      str = str.replace(/,$/, '');
    }
    str += "\n";
    console.log(str);
    beginRange++;
  }
}

let beginNum = prompt("Enter the beginning number of range:");
let endNum = prompt("Enter the end number of range:");

checkDivision(beginNum, endNum);
