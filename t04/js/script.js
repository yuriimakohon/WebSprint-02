function solver(a, b, c, d, e) {
  let result;

  if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)
    && Number.isInteger(d) && Number.isInteger(e)) {
    result = ((a ** 2) - (5 * b * c) + (d / 3) + e).toFixed(2);
  }
  return Number.isNaN(+result) ? "Wrong input" : result;
}

alert(solver(3, 2, 2, 2, 2));
