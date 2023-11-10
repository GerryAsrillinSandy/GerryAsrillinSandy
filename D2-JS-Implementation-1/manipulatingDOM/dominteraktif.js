document.addEventListener("DOMContentLoaded", function () {
  const heading = document.getElementById("heading");
  const inputField = document.getElementById("inputField");
  const changeTextBtn = document.getElementById("changeTextBtn");

  changeTextBtn.addEventListener("click", function () {
    const inputValue = inputField.value;
    if (inputValue !== "") {
      heading.style.color = "blue";
      heading.style.transform = "scale(1.1)";
      setTimeout(function () {
        heading.textContent = inputValue;
        heading.style.color = "black";
        heading.style.transform = "scale(1)";
      }, 300);
    } else {
      heading.style.color = "red";
      setTimeout(function () {
        heading.textContent = "Judul Utama";
        heading.style.color = "black";
      }, 300);
    }
    inputField.value = "";
  });
});
