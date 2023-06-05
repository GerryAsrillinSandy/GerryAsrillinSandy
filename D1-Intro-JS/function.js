// function getMinLength(a, k) {
//   var arr = [];
//   for (var i = 0; i < a.length; i++) {
//     let number = a[i];
//     while (arr.length > 0 && number * arr[arr.length - 1] <= k) {
//       number = number * arr.pop();
//     }
//     arr.push(number);
//   }
//   return arr.length;
// }

// console.log(getMinLength(a, k));

///////////////////////////////////////////////////////////////////////

// let message = prompt("Write Your Name: ");

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greet(message));

///////////////////////////////////////////////////////////////////////

// function addNumbers(a, b) {
//   return a + b;
// }
// const sum = addNumbers(2, 3);
// console.log(sum); // Output: 5

///////////////////////////////////////////////////////////////////////
// const a = parseInt(prompt("Input a value: "));
// const b = parseInt(prompt("Input b Value: "));

// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(a, b));

/////////////////////////////////////////////////////////////////////
// const multiply = (a, b) => a * b;
// console.log(multiply(2, 3)); // Output: 6

////////////////////////////////////////////////////////////////////
// greet("Alice"); // Output: "Hello, Alice!"
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

//////////////////////////////////////////////////////////////////
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

const num1 = Number(prompt("Enter first number:"));
const num2 = Number(prompt("Enter second number:"));

console.log(`Sum: ${add(num1, num2)}`);
console.log(`Difference: ${subtract(num1, num2)}`);
console.log(`Product: ${multiply(num1, num2)}`);
console.log(`Quotient: ${divide(num1, num2)}`);

// let num = parseInt(prompt("How much line do you want to make?"));

// function makeLine(length) {
//   var line = "";
//   for (var i = 1; i <= length; i++) {
//     for (var j = 1; j <= i; j++) {
//       line += "*";
//     }
//     line += "\n";
//   }
//   return line + "\n";
// }
// console.log(makeLine(`${num}`));
