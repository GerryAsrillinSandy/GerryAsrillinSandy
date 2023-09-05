//variable
var string = "Hello";
let number = 5;
const boolean = true;

console.log("var string" + string);
console.log("var number" + number);
console.log("var boolean" + boolean);

//contoh array & object
let array = [0, 1, 2, 3, 4, 5];
console.log("var array : " + array);

let object = {
  name: "Alvian",
  age: 31,
  isMarried: true,
};

console.log("Nama : " + object.name);
console.log("Age : " + object.age);
console.log("Married Status " + object.isMarried);

//Contoh Operator
let myNumber = "100";
let myLet = 100;

let isEqual = (myLet = myNumber); // equal to
console.log(typeof isEqual + " " + isEqual);

let isEqual2 = myNumber == myLet; // equal to
console.log(typeof isEqual2 + " " + isEqual2);

let isEqual3 = myNumber === myLet; // equal to
console.log(typeof isEqual3 + " " + isEqual3);

let isNotEqual = myNumber != myLet; // not equal to
console.log(isNotEqual);

let isGreaterThan = myNumber > myLet; // greater than
console.log(isGreaterThan);

let isLessThan = myNumber < myLet; // less than
console.log(isLessThan);

let isGreaterThanOrEqual = myNumber >= myLet; // greater than or equal to
console.log(isGreaterThanOrEqual);

let isLessThanOrEqual = myNumber <= myLet; // less than or equal to
console.log(isLessThanOrEqual);

// test variable let
let namaBelakang = "El Hakim";
namaBelakang = "Cahyadi";

if (true) {
  let namaBelakang = "Cahyadi";

  console.log(namaBelakang); // Akan menghasilkan 'Cahyadi'
}

console.log(namaBelakang); // Akan menghasilkan 'El Hakim'

//Control Flow
// Conditional Statements
let x = 5;

if (x > 5) {
  console.log("x is greater than 5");
} else if (x < 5) {
  console.log("x is less than 5");
} else {
  console.log("x is equal to 5");
}

// For loop
for (let i = 0; i < 10; i++) {
  console.log("for loop - the value of index is : " + i);
}

// While Loop
let j = 7;

while (j < 5) {
  console.log("while loop - the value of index is : " + j);
  j++;
}
