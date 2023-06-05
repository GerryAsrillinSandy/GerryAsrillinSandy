// 1. Write a JavaScript program to check whether a given number is positive or negative.
//    Display an alert box with the result.

// const number = parseInt(prompt("Enter a number: "));

// // check if number is greater than 0
// if (number > 0) {
//   alert("The number is positive");
// }

// // check if number is 0
// else if (number == 0) {
//   alert("The number is zero");
// }

// // if number is less than 0
// else {
//   alert("The number is negative");
// }

//////////////////////////////////////////////////////////////////

// 2. Write a JavaScript program to check whether a given number is even or odd.
//    Display an alert box with the result.

// const num = parseInt(prompt("Enter a number: "));
// if (num % 2 == 0) alert(num + " is an Even Number");
// else alert(num + " is an Odd Number");

//////////////////////////////////////////////////////////////////

// 3. Write a JavaScript program to find the sum of all the numbers from 1 to 100 using a for loop.
// const number = parseInt(prompt("Enter a positive integer: "));

// let sum = 0;
// for (let i = 1; i <= number; i++) {
//   sum += i;
// }

// console.log("The sum of natural numbers:", sum);

/////////////////////////////////////////////////////////////////

// 4. Write a JavaScript program to generate the multiplication table of a number using a for loop.

// const number = parseInt(prompt("Enter an integer: "));

// // creating a multiplication table
// for (let i = 1; i <= 10; i++) {
//   // multiply i with number
//   const result = i * number;

//   // display the result
//   console.log(`${number} * ${i} = ${result}`);
// }

/////////////////////////////////////////////////////////////////

// 5. Write a JavaScript program to find the factorial of a number using a for loop.

// const number = parseInt(prompt("Enter an integer: "));

// const factorialOf = (integer) => {
//   let factorial = 1;

//   for (let i = 1; i <= integer; i++) {
//     factorial *= i;
//   }

//   return factorial;
// };

// console.log("Factorial of " + number + " = " + factorialOf(`${number}`));

/////////////////////////////////////////////////////////////////
// 6. Write a JavaScript program to check whether a given number is prime or not using a for loop.

// program to check if a number is prime or not
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//   console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {
//   // looping through 2 to number-1
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is a not prime number`);
//   }
// }

// // check if number is less than 1
// else {
//   console.log("The number is not a prime number.");
// }

/////////////////////////////////////////////////////////////////
// 7. Write a JavaScript program to find the Fibonacci series up to a given number using a for loop.

// program to generate fibonacci series up to n terms
// take input from the user
// const number = parseInt(prompt("Enter the number of terms: "));
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= number; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

/////////////////////////////////////////////////////////////////
// 8. Write a JavaScript program to display the first 10 Fibonacci numbers using a while loop.

// program to generate fibonacci series up to a certain number
// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log("Fibonacci Series:");
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {
//   // print the next term
//   console.log(nextTerm);

//   n1 = n2;
//   n2 = nextTerm;
//   nextTerm = n1 + n2;
// }

/////////////////////////////////////////////////////////////////
// 9. Write a JavaScript program to print all the odd numbers between 1 and 100 using a while loop.

// let i = parseInt(prompt("Enter a first number: "));
// let a = parseInt(prompt("Enter a second number: "));
// let count = 0;
// console.log("count of All odd numbers from " + i + " to " + a);
// for (i = 1; i <= a; i++) {
//   if (i % 2 != 0) {
//     count++;
//   }
// }
// console.log(count);

/////////////////////////////////////////////////////////////////

// 10. Write a JavaScript program to find the FPB / GCD (Greatest Common Divisor) of two numbers
//     using a while loop.

// function gcd(a, b) {
//   while (a != b) {
//     if (a > b) {
//       a -= b;
//     } else {
//       b -= a;
//     }
//   }
//   return a;
// }

// var result = gcd(20, 30);
// console.log(result); // output: 10

/////////////////////////////////////////////////////////////////

// let y = 10;
// while (y > 0) {
//   console.log(y);
//   y--;
// }

/////////////////////////////////////////////////////////////////

// console.log("//////////////////////////////");
// let x = 5;
// if (x > 3) {
//   console.log("x is greater than 3");
// } else {
//   console.log("x is less than or equal to 3");
// }
