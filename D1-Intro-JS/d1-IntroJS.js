// variable declaration using var, let, const
var myVar = "Hello";
let myLet = 5;
const myConst = true;

console.log(myVar);
console.log(myLet);
console.log(myConst);

console.log("//////////////////////////////////////////////////////////");

// primitive data types
let myString = "This is a string";
let myNumber = 10;
let myBoolean = true;

console.log(myString);
console.log(myNumber);
console.log(myBoolean);

// non-primitive data types
let array = [1, 2, 3, 4]; // array
let object = {
  name: "Alvian",
  age: 31,
  isMarried: true,
}; // object

let a = 1;
let b = 2;
let func = function (a, b) {
  return a + b;
}; // function

console.log(array[0]);
console.log(
  "Name : " + object.name,
  "Age : " + object.age,
  "Married? : " + object.isMarried
);
console.log(func(a, b));

console.log("//////////////////////////////////////////////////////////");

// comparison operators

let isEqual = myNumber == myLet; // equal to
let isNotEqual = myNumber != myLet; // not equal to
let isGreaterThan = myNumber > myLet; // greater than
let isLessThan = myNumber < myLet; // less than
let isGreaterThanOrEqual = myNumber >= myLet; // greater than or equal to
let isLessThanOrEqual = myNumber <= myLet; // less than or equal to

console.log("isEqual = " + isEqual);
console.log("isNotEqual = " + isNotEqual);
console.log("isGreaterThan = " + isGreaterThan);
console.log("isLessThan = " + isLessThan);
console.log("isGreaterThanOrEqual = " + isGreaterThanOrEqual);
console.log("isLessThanOrEqual = " + isLessThanOrEqual);

console.log("//////////////////////////////////////////////////////////");

let x = 3;

if (x > 5) {
  console.log("x is greater than 5");
} else if (x < 5) {
  console.log("x is less than 5");
} else {
  console.log("x is equal to 5");
}

console.log("//////////////////////////////////////////////////////////");

// for loop
for (let i = 0; i < 5; i++) {
  console.log("The value of i is: " + i);
}

// while loop
let j = 0;
while (j < 5) {
  console.log("The value of j is: " + j);
  j++;
}
