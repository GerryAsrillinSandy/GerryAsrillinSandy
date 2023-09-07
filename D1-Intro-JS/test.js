// Ini Array
// var arrHewan = ["Ayam", "Sapi", "Kambing", "Kucing", "Ular"];

// console.info("List Array = " + arrHewan);
// console.log("Isi Array = " + arrHewan[1]);
// console.log("Panjang Array = " + arrHewan.length);

// for (let i = 0; i > arrHewan.length; i++) {
//   console.log(arrHewan[i]);
// }

// for (let i = 0; i < arrHewan.length; i++) {
//   console.log(arrHewan[i]);
// }

// for (let index in arrHewan) {
//   console.log(arrHewan[index]);
// }

//Ini Object
var myString = ""; //Variabel akan menyimpan Data String
var myNumber = 0; // Variable Akan menyimpan data number
var myArray = []; // variable akan menyimpan Array
var myObject = {}; // Variabel akan menyimpan Object
// console.log("Ini sebelum diisi = " + myArray);

// myArray = [1, 2, 3, 4];
// console.log("Ini sesudah diisi = " + myArray);
// console.log("Ini sesudah diisi dan mengambil index ke 1 = " + myArray[1]);

// var objOrang = {};

// objOrang = {
//   nama: "Andi",
//   umur: 30,
//   profesi: "Developer",
// };

var arrObject = [];

arrObject = [
  { nama: "Andi", umur: 30, profesi: "Developer" },
  { nama: "Mira", umur: 22, profesi: "Accounting" },
  { nama: "Raka", umur: 20, profesi: "Freelance Writer" },
  { nama: "Sandy", umur: 33, profesi: "Designer" },
];

//menggunakan fungsi map
var arrNamaObject = arrObject.map(function (namaObject) {
  return namaObject.nama;
});

console.log(arrNamaObject);
console.log(arrNamaObject[1]);
