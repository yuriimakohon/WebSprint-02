let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let greeting = "Hello, ";

if (firstName.search(/[^a-zA-Zа-яА-Я-].*/g, 0) == -1
    && lastName.search(/[^a-zA-Zа-яА-Я-].*/g, 0) == -1) {
  firstName = firstName[0].toUpperCase() + firstName.substring(1);
  lastName = lastName[0].toUpperCase() + lastName.substring(1);
  greeting += `${firstName} ${lastName}!`
  alert(greeting);
  console.log(greeting);
} else {
  alert("Wrong input!");
  console.log("Wrong input!");
}
