function printTriangle(length) {
  let triangle = '';

  for (i = 1; i <= length; i++) {
    for (j = 1; j <= i; j++) {
      triangle += '*';
    }
    triangle += '\n';
  }
  alert(triangle);
}

printTriangle(6);
