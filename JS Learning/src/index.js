let text = "Hello! I am an alert box!";

//function when click
function functionClick() {
  //result giving alert
  alert(text);

  //after click will write result
  //into body page
  text = "Hello! I am write on page now!";
  document.writeln(text);

  //result write into console
  text = "Hello! I am the console note!";
  console.log(text);
}

//
const tambahan = ["Domba", "Sapi", "Kura - Kura"];
const kebunBinatang = ["Ayam", " Babi", "Cacing"];

kebunBinatang.push("Domba");

console.log(kebunBinatang);
