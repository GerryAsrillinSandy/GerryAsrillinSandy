// Contoh array
var array = ["apel", "jeruk", "pisang"];

function tambahElemenArray() {
  var buahBaru = prompt("Masukkan nama buah baru:", "Mangga");
  if (buahBaru != null) {
    array.push(buahBaru);
    document.getElementById("demoArray").innerHTML = array.join(", ");
  }
}

// Contoh objek
var objek = {
  nama: "John Doe",
  umur: 30,
};

function tambahPropertiObjek() {
  var propertiBaru = prompt("Masukkan nama properti baru:", "alamat");
  var nilaiPropertiBaru = prompt("Masukkan nilai properti baru:", "Jl. Contoh");
  if (propertiBaru != null && nilaiPropertiBaru != null) {
    objek[propertiBaru] = nilaiPropertiBaru;
    document.getElementById("demoObjek").innerHTML = JSON.stringify(objek);
  }
}
