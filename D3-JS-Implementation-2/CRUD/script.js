document.addEventListener("DOMContentLoaded", async () => {
  const todoTableBody = document.querySelector("#todoTable tbody");

  // Mengambil data dari API dan Tampilkan ke table
  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();

      // Mengosongkan rows
      todoTableBody.innerHTML = "";

      // Menampilkan data pada table
      data.todos.forEach((todo) => {
        const row = createTableRow(todo);
        todoTableBody.appendChild(row);
      });

      console.log("Data fetched successfully.");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Membuat Todo Baru
  async function createTodo(todoText) {
    try {
      const response = await fetch("https://dummyjson.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: todoText,
          completed: false,
        }),
      });
      const newTodo = await response.json();

      const newRow = createTableRow(newTodo);
      todoTableBody.appendChild(newRow);

      console.log("Todo created successfully.");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  }

  // Update a todo
  async function updateTodo(id, todo, completed) {
    try {
      await fetch(`https://dummyjson.com/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: todo,
          completed: completed,
        }),
      });

      console.log("Todo updated successfully.");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }

  // Delete a todo
  async function deleteTodo(id) {
    try {
      await fetch(`https://dummyjson.com/todos/${id}`, {
        method: "DELETE",
      });

      // Remove the corresponding row from the table
      const row = document.querySelector(
        `#todoTable tbody tr[data-id="${id}"]`
      );
      if (row) {
        row.remove();
        console.log("Todo deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  // Enable editing for a todo
  function enableEdit(row) {
    const titleCell = row.querySelector("td:nth-child(2)");
    const originalTitle = titleCell.textContent;

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = originalTitle;

    titleCell.textContent = "";
    titleCell.appendChild(editInput);

    // Add event listener for the Enter key to save changes
    editInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        const completedCheckbox = row.querySelector('input[type="checkbox"]');
        updateTodo(row.dataset.id, editInput.value, completedCheckbox.checked);

        // Revert to non-edit mode
        disableEdit(row);

        console.log("Todo edited and updated successfully.");
      }
    });

    // Focus on the input
    editInput.focus();
  }

  // Disable editing for a todo
  function disableEdit(row) {
    const titleCell = row.querySelector("td:nth-child(2)");
    const editInput = titleCell.querySelector('input[type="text"]');

    if (editInput) {
      titleCell.removeChild(editInput);
      titleCell.textContent = editInput.value;
    }
  }

  // Helper function to create a table row
  function createTableRow(todo) {
    const row = document.createElement("tr");
    row.setAttribute("data-id", todo.id);
    row.innerHTML = `
        <td>${todo.id}</td>
        <td>${todo.todo}</td>
        <td>
          <input type="checkbox" ${todo.completed ? "checked" : ""} data-id="${
      todo.id
    }">
        </td>
        <td>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </td>
      `;

    // Add event listeners for edit and delete buttons
    const editBtn = row.querySelector(".edit-btn");
    const deleteBtn = row.querySelector(".delete-btn");

    editBtn.addEventListener("click", () => {
      enableEdit(row);
    });

    deleteBtn.addEventListener("click", () => {
      deleteTodo(todo.id);
    });

    return row;
  }

  // Fetch initial data
  fetchData();

  // Event listener for Create Todo button
  const createTodoBtn = document.getElementById("createTodoBtn");
  createTodoBtn.addEventListener("click", () => {
    const todoText = prompt("Enter a new todo:");
    if (todoText) {
      createTodo(todoText);
    }
  });
});
