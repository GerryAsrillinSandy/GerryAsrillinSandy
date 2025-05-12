document.addEventListener("DOMContentLoaded", function () {
  // Prompt untuk mengganti nama
  const name = window.prompt("Masukkan nama Anda:", "Harfi");
  if (name) {
    const span = document.querySelector(".highlight");
    if (span) span.textContent = name;
  }
})