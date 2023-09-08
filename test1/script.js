document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".category-option");
  const coffeeItems = document.querySelectorAll(".menu-item");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");

      coffeeItems.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const tabs = document.querySelectorAll(".category-option");
//   const coffeeItems = document.querySelectorAll(".menu-item");

//   // Fungsi untuk menampilkan gambar sesuai dengan filter
//   function applyFilter(filter) {
//     tabs.forEach((t) => t.classList.remove("active"));
//     tabs.forEach((t) => {
//       if (t.getAttribute("data-filter") === filter) {
//         t.classList.add("active");
//       }
//     });

//     coffeeItems.forEach((item) => {
//       const category = item.getAttribute("data-category");

//       if (filter === "all" || category === filter) {
//         item.style.display = "block";
//       } else {
//         item.style.display = "none";
//       }
//     });
//   }

//   // Event untuk mengaktifkan filter saat mouse mendekati tab
//   tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//       const filter = tab.getAttribute("data-filter");
//       applyFilter(filter);
//     });

//     tab.addEventListener("mouseenter", () => {
//       const filter = tab.getAttribute("data-filter");
//       applyFilter(filter);
//     });

//     tab.addEventListener("mouseleave", () => {
//       // Reset filter saat mouse meninggalkan tab
//       applyFilter("all");
//     });
//   });
// });
