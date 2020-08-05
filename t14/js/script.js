function total(addCount, addPrice, currentTotal = 0) {
  return +((addCount * addPrice) + currentTotal);
}

console.log(total(2, 5));
