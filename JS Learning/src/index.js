// let text = "Hello! I am an alert box!";

// //function when click
// function functionClick() {
//   //result giving alert
//   alert(text);

//   //after click will write result
//   //into body page
//   text = "Hello! I am write on page now!";
//   document.writeln(text);

//   //result write into console
//   text = "Hello! I am the console note!";
//   console.log(text);
// }

//Map and Set
const contohArray = [1, "Dua", true];
const contohObject = {
  satu: "1",
  dua: 2,
  tiga: true,
};

const contohMap = new Map();
contohMap.set("satu", 1);
contohMap.set("tiga", 3);

// console.log(contohMap.get("satu"));
// console.log(contohMap.size);
// console.log(contohMap.delete("tiga"));
// console.log(contohMap.has("tiga"));
// console.log(contohMap.clear());
// console.log(contohMap.get("satu"));
// console.log(contohMap);

const contohMap2 = new Map([
  ["gorengan", 500],
  ["sate", 1000],
  ["tempe", 2000],
]);

for (let makanan of contohMap2.entries()) {
  console.log(makanan);
}

const contohSet = new Set();
contohSet.add("joni").add("siti");
console.log(contohSet.has("joni"));
// contohSet.clear
contohSet.delete("joni");
console.log(contohSet.size);
