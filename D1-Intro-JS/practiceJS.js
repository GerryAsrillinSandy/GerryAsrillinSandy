//Practice test 1
let x = 5;
if (x > 3) {
  console.log("x is greater than 3");
} else {
  console.log("x is less than or equal to 3");
}

//Practice test 2
let y = 10;
while (y > 0) {
  console.log(y);
  y--;
}

// 1. Practice - Write a JavaScript program to check whether a given number is even or odd.
//    Display an alert box with the result.

const num = Number(prompt("Silahkan masukkan angka : "));

if (num % 2 == 0) console.log(num + " Adalah Angka Genap");
else console.log(num + " Ini adalah angka ganjil");

// 2. Practice - Write a JavaScript program to find the sum of all the numbers from 1 to 100 using a for loop.

const num1 = Number(prompt("Silahkan masukkan angka : "));

let sum = 0;
for (let i = 0; i <= num1; i++) {
  sum += i;
}

console.log("Hasil sum = " + sum);

// 3. Practice - Write a JavaScript program to generate the multiplication table of a number using a for loop.
const num2 = Number(prompt("Silahkan masukkan angka : "));

for (let i = 1; i <= 10; i++) {
  const result = i * num2;

  console.log(`${num2} * ${i} = ${result}`);
}

// // 4. Practice membuat kalkulator sederhana menggunakan function
function penambahan(a, b) {
  return a + b;
}

function pengurangan(a, b) {
  return a - b;
}

function perkalian(a, b) {
  return a * b;
}

function pembagian(a, b) {
  return a / b;
}

var angkaPertama = Number(prompt("Masukkan Angka Pertama : "));
var angkaKedua = Number(prompt("Masukkan Angka Kedua : "));

console.log("Hasil Penambahan  = " + penambahan(angkaPertama, angkaKedua));
console.log("Hasil Pengurangan = " + pengurangan(angkaPertama, angkaKedua));
console.log("Hasil Perkalian   = " + perkalian(angkaPertama, angkaKedua));
console.log("Hasil Pembagian   = " + pembagian(angkaPertama, angkaKedua));

// // 5. Practice membuat segitiga
let num3 = parseInt(prompt("Berapa banyak baris bintang yang ingin dibuat?"));

function buatSegitiga(length) {
  var garis = "";

  for (var i = 1; i <= length; i++) {
    for (var j = 1; j <= i; j++) {
      garis += "*";
    }

    garis += "\n";
  }
  return garis + "\n";
}

console.log(buatSegitiga(`${num3}`));
