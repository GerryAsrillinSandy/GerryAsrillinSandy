// Contoh function sederhana 1
const message = prompt("Silahkan masukkan nama anda :");

greet(message);
greet("Gerry");
greet("Bob");
greet("Andy");
greet("Sandy");

function greet(name) {
  console.log(`Hello ${name}`);
}

// Contoh function sederhana 2
var message1 = prompt("test : ");

function tulisan() {
  return message1;
}

console.log("Test Messages : " + tulisan(message1));

// Basic general function
function addNumber(a, b) {
  return a + b;
}

console.log("Basic function = " + addNumber(3, 4));

// Anonymous Function
const sum2 = function addNumber(a, b) {
  return a + b;
};
console.log("Anonymous function = " + sum2(3, 4));

// Arrow Function
const multiply = (a, b) => a + b;
console.log("Arrow Function = " + multiply(3, 4));

// Practice membuat kalkulator sederhana menggunakan function
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

//Practice membuat segitiga
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
