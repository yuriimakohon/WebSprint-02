let num = prompt("Enter number from 1 to 4:");
let result;

if (num == 1) {
  result = (num * 2) / 'a';
} else if (num == 2) {
  result = (num - num) / 0;
} else if (num == 3) {
  result = 0 / Infinity;
} else if (num == 4) {
  result = (num * 40000000) == Infinity;
} else {
  result = "Wrong input";
}

alert(result);
