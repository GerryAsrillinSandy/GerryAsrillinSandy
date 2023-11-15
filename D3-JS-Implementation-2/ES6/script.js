document.addEventListener("DOMContentLoaded", async () => {
  const todoTableBody = document.querySelector("#todoTable tbody");
  const completedTableBody = document.querySelector("#completedTable tbody");

  try {
    // Mengambil data dari dummy API
    const response = await fetch("https://dummyjson.com/todos"); // Ganti 'URL_DUMMY_API' dengan URL sebenarnya dari dummy API
    const data = await response.json();

    // Menampilkan data pada tabel HTML
    data.todos.forEach((todo) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${todo.id}</td>
          <td>${todo.todo}</td>
          <td><input type="checkbox" ${
            todo.completed ? "checked" : ""
          } data-id="${todo.id}"></td>
        `;
      if (todo.completed) {
        completedTableBody.appendChild(row);
        // Menonaktifkan checkbox di tabel yang sudah selesai
        const checkbox = row.querySelector('input[type="checkbox"]');
        if (checkbox) {
          checkbox.disabled = true;
        }
      } else {
        todoTableBody.appendChild(row);
      }
    });

    // Menambahkan event listener untuk checkbox di tabel tugas belum selesai
    document
      .querySelectorAll('#todoTable tbody input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
          const row = event.target.closest("tr");
          if (row) {
            if (event.target.checked) {
              completedTableBody.appendChild(row);
              // Menonaktifkan checkbox di tabel yang sudah selesai
              const checkbox = row.querySelector('input[type="checkbox"]');
              if (checkbox) {
                checkbox.disabled = true;
              }
            } else {
              todoTableBody.appendChild(row);
            }
          }
        });
      });

    // Menambahkan event listener untuk checkbox di tabel tugas selesai
    document
      .querySelectorAll('#completedTable tbody input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
          const row = event.target.closest("tr");
          if (row) {
            if (event.target.checked) {
              todoTableBody.appendChild(row);
            } else {
              completedTableBody.appendChild(row);
            }
          }
        });
      });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
