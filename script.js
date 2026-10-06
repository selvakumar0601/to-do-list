const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

// Store tasks in an array
let tasks = [];

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";

  emptyMessage.style.display = tasks.length === 0 ? "block" : "none";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
      <span class="task-text">${task}</span>
      <button class="delete-btn" data-index="${index}">
        Delete
      </button>
    `;

    taskList.appendChild(li);
  });
}

// Add task
function addTask() {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push(task);

  taskInput.value = "";
  taskInput.focus();

  renderTasks();
}

// Add button event
addTaskBtn.addEventListener("click", addTask);

// Press Enter to add task
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Event delegation for delete buttons
taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const index = event.target.dataset.index;

    tasks.splice(index, 1);

    renderTasks();
  }
});

// Initial rendering
renderTasks();