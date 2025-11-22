<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Dynamic To-Do List</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>The To-Do List</h1>
  <input type="text" id="taskInput" placeholder="Enter your task..." />
  <button id="addBtn">Add Task</button>
  <ul id="taskList"></ul>

  <script src="script.js"></script>
</body>
</html>
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


window.onload = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTaskToDOM(task));
};

addBtn.onclick = () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTaskToDOM(taskText);
    saveTask(taskText);
    taskInput.value = "";
  }
};

function addTaskToDOM(taskText) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const btns = document.createElement("div");
  btns.className = "btns";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "editBtn";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      updateTask(span.textContent, newText.trim());
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
    deleteTask(span.textContent);
  };

  btns.appendChild(editBtn);
  btns.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(btns);
  taskList.appendChild(li);
}

function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTask(oldText, newText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const index = tasks.indexOf(oldText);
  if (index !== -1) {
    tasks[index] = newText;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  padding: 30px;
  text-align: center;
}

h1 {
  color: #333;
}

#taskInput {
  padding: 10px;
  width: 250px;
  font-size: 16px;
}

#addBtn {
  padding: 10px 15px;
  font-size: 16px;
  background: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  background: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btns button {
  margin-left: 5px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

.editBtn {
  background: #ffc107;
  color: black;
}

.deleteBtn {
  background: #dc3545;
  color: white;
}

