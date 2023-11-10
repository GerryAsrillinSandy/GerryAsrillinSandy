// JavaScript code here
const createElementButton = document.getElementById("createElementButton");
const removeElementButton = document.getElementById("removeElementButton");
const parentElement = document.getElementById("parent");

createElementButton.addEventListener("click", function () {
  const newElement = document.createElement("div");
  newElement.textContent = "This is a new element";
  newElement.id = "elementToRemove"; // Assign an ID for removal
  parentElement.appendChild(newElement);
});

removeElementButton.addEventListener("click", function () {
  const elementToRemove = document.getElementById("elementToRemove");
  if (elementToRemove) {
    elementToRemove.remove();
  } else {
    console.log("Element not found for removal.");
  }
});
