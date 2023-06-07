const form = document.querySelector("form");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTaskInput = document.querySelector("#new-task");
  const newTaskText = newTaskInput.value.trim();
  if (newTaskText) {
    const newTask = document.createElement("li");
    newTask.innerHTML = `
			<span class="task-text">${newTaskText}</span>
			<span class="delete-task">X</span>
		`;
    taskList.appendChild(newTask);
    newTaskInput.value = "";
  }
});

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-task")) {
    event.target.parentNode.remove();
  }
});
