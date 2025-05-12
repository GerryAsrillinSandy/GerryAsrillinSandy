document.addEventListener("DOMContentLoaded", function () {
  // Prompt untuk mengganti nama
  // Variable di JS = VAR, LET, CONST
  const name = window.prompt("Masukkan nama Anda:", "Harfi");
  if (name) {
    const span = document.querySelector(".highlight");
    if (span) span.textContent = name;
    console.log('name : '+ name)
  }
})