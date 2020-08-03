function solver(a, b, c, d, e) {
  let result = ((a ** 2) - (5 * b * c) + (d / 3) + e).toFixed(2);
  return Number.isNaN(+result) ? "Wrong input" : result;
}
