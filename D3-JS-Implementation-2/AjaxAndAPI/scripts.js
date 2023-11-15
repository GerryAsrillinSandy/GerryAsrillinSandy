$(document).ready(function () {
  $("#getDataBtn").on("click", function () {
    // Panggil API menggunakan AJAX
    $.ajax({
      url: "https://dummyjson.com/quotes/1",
      method: "GET",
      success: function (data) {
        // Tampilkan hasil dari API di div dengan id "result"
        $("#result").html(
          "<p>Quote: " + data.quote + "</p><p>Author: " + data.author + "</p>"
        );
      },
      error: function (error) {
        console.log("Error:", error);
      },
    });
  });
});
