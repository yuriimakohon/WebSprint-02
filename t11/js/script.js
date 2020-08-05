function multiTable (number) {
  let factor = 2;
  let table = '';

  while (factor <= 9) {
    table += `${number} x ${factor} = ${number * factor}\n`;
    factor++;
  }
  return table;
}

alert(multiTable(9));
