// Select the button
var button = document.getElementById("colorButton");

// Add event listener for clicks
button.addEventListener("click", function () {
  // Generate a random color
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Change the background color of the page
  document.body.style.backgroundColor = randomColor;
});
