const inputAge = prompt("How old are you?");
const myAge = Number(inputAge); //Convert string to number

function isAgeOlderThan18(age) {
  if (age > 18) return true;
  else return false;
}

function checkAllowance(age) {
  const isOldEnough = isAgeOlderThan18(age);
  if (isOldEnough) return "You are allowed";
  else return "You are not allowed";
}

function canHaveNationalID(age) {
  const isOldEnough = isAgeOlderThan18(age);
  if (isOldEnough) return "You can have national ID";
  else return "You can not have national ID yet";
}

const isAllowed = checkAllowance(myAge);
const canHaveID = canHaveNationalID(myAge);

document.writeln("My age is : " + myAge + " years old");
document.writeln("</br>");
document.writeln("Am I allowed? " + isAllowed);
document.writeln("</br>");
document.writeln("Can I have National ID? " + canHaveID);

console.log("My age is", myAge, "years old");
console.log("Am I allowed?", isAllowed);
console.log("Can I have National ID?", canHaveID);
