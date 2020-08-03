var animal;
var gender;
var age;
var heroName;
var regAnimal = /^[a-zA-Z]{1,20}$/;
var regGender = /^(male|female|)$/i;
var regAge = /^[1-9]\d{0,4}$/;

function heroGen() {
  animal = prompt("What animal is the superhero most similar to?");
  if (!regAnimal.test(animal)) {
    return "Not valid value!";
  }
  gender = prompt("Is the superhero male or female? " +
    "Leave blank if unknown or other.");
  if (!regGender.test(gender)) {
    return "Not valid value!";
  }
  age = prompt("How old is superhero?");
  if (!regAge.test(age)) {
    return "Not valid value!";
  }
  heroName = `${animal}-`;
  if (gender == "male") {
    if (age < 18) {
      heroName += "boy";
    } else {
      heroName += "man";
    }
  } else {
    if (age < 18) {
      heroName += "girl";
    } else {
      heroName += "woman";
    }
  }
  return `The superhero name is: ${heroName}!`;
}

alert(heroGen());
