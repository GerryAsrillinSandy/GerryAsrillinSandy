var button = document.getElementById("submitButton");
var textInput = document.getElementById("textInput");
var result = document.getElementById("result");

button.addEventListener("click", function () {
  var inputValue = textInput.value;
  result.innerHTML = "You entered: " + inputValue;
});
