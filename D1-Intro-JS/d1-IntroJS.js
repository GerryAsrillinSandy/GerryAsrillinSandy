//variable
var string = "Hello";
var number = 5;
var boolean = true;

console.log("var string" + string);
console.log("var number" + number);
console.log("var boolean" + boolean);

//loop

for (let i = 0; i < 5; i++) {
  console.log("for loop - the value of index is : " + i);
}

//while

let j = 0;

while (j < 5) {
  console.log("while loop - the value of index is : " + j);
  j++;
}

//contoh array & object
let array = [0, 1, 2, 3, 4, 5];
console.log("var array" + array);

let object = {
  angka: array[5],
};

console.log("var object" + object);
