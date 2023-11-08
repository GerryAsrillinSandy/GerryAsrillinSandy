//Array
var array = ["Apel", "Jeruk", "Semangka"];

function tambahElemenArray() {
  var buahBaru = prompt("Masukkan nama buah yang ingin ditambahkan : ");
  if (buahBaru != null) {
    array.push(buahBaru);
    document.getElementById("demoArray").innerHTML = array.join(", ");
  }
}

//Objek
var objek = {
  Nama: "Gerry",
  Umur: 32,
};

function tambahPropertiObjek() {
  var propertiBaru = prompt(
    "Masukkan nama properti object yang baru : ",
    "Contoh : Alamat, No.Telp, dsb."
  );
  var nilaiPropertiBaru = prompt(
    "Masukkan nilai properti baru",
    "Contoh : Jl.AB, 08xxxx"
  );

  if (propertiBaru != null && nilaiPropertiBaru != null) {
    objek[propertiBaru] = nilaiPropertiBaru;
    document.getElementById("demoObjek").innerHTML = JSON.stringify(objek);
  }
}
