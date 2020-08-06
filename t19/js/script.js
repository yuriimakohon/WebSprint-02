function clearBracketsPair(str) {
  while (str.search(/\(.*\)/) != -1) {
    let idxOpen = str.search(/\(.*\)/);
    let idxClose = (str.slice(idxOpen)).search(/\)/) + idxOpen;

    str = str.slice(0, idxOpen)
      + str.slice(idxOpen + 1, idxClose)
      + str.slice(idxClose + 1, str.length);
  }
  return str;
}

function checkBrackets(str) {
  let unclosedBracketsCounter = 0;

  if (typeof str != "string") {
    return 0;
  }
  str = clearBracketsPair(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '\(' || str[i] == '\)') {
      unclosedBracketsCounter++;
    }
  }
  return unclosedBracketsCounter;
}
