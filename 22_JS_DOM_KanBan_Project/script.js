let draggedCard = null;
let rightClickedCard = null;
document.addEventListener("DOMContentLoaded", loadTaskFromLocalStorage);

function addTask(columnId) {
  const input = document.getElementById(`${columnId}-input`);
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  const taskDate = new Date().toLocaleString();
  // console.log(taskDate);

  const taskElement = createTaskElement(taskText, taskDate);

  document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
  updateTasksCount(columnId);
  saveTaskToLocalStorage(columnId, taskText, taskDate);
  input.value = "";
}

function createTaskElement(taskText, taskDate) {
  const taskElement = document.createElement("div");
  taskElement.innerHTML = `<span>${taskText}</span><br><small class="time">${taskDate}</small>`;

  // taskElement.textContent = taskText;
  taskElement.classList.add("card");

  taskElement.draggable = true;
  taskElement.addEventListener("dragstart", dragStart);
  taskElement.addEventListener("dragend", dragEnd);

  taskElement.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    rightClickedCard = this;
    showContextMenu(event.pageX, event.pageY);
  });
  return taskElement;
}

function dragStart() {
  this.classList.add("dragging");
  draggedCard = this;
}

function dragEnd() {
  this.classList.remove("dragging");
  // draggedCard = null;

  ["todo", "doing", "done"].forEach((columnId) => {
    updateTasksCount(columnId);
    updateLocalStorage();
  });
}

const columns = document.querySelectorAll(".column .tasks");
columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
});

function dragOver(event) {
  event.preventDefault();
  //   const draggedCard = document.querySelectorAll(".dragging");
  this.appendChild(draggedCard);
}

const contextmenu = document.querySelector(".context-menu");
function showContextMenu(x, y) {
  contextmenu.style.left = `${x}px`;
  contextmenu.style.top = `${y}px`;
  contextmenu.style.display = "block";
}

document.addEventListener("click", () => {
  contextmenu.style.display = "none";
});

function editTask() {
  if (rightClickedCard !== null) {
    const newTaskText = prompt("Edit task - ", rightClickedCard.textContent);
    if (newTaskText !== "") {
      rightClickedCard.textContent = newTaskText;
      updateLocalStorage();
    }
  }
}

function deleteTask() {
  if (rightClickedCard !== null) {
    const columnId = rightClickedCard.parentElement.id.replace("-tasks", "");

    rightClickedCard.remove();
    updateLocalStorage();
    updateTasksCount(columnId);
  }
}

function updateTasksCount(columnId) {
  const count = document.querySelectorAll(`#${columnId}-tasks .card`).length;
  document.getElementById(`${columnId}-count`).textContent = count;
}

function saveTaskToLocalStorage(columnId, taskDate, taskText) {
  const tasks = JSON.parse(localStorage.getItem(columnId)) || [];
  tasks.push({ text: taskText, date: taskDate });
  localStorage.setItem(columnId, JSON.stringify(tasks));
}

function loadTaskFromLocalStorage() {
  ["todo", "doing", "done"].forEach((columnId) => {
    const tasks = JSON.parse(localStorage.getItem(columnId)) || [];
    tasks.forEach(({ text, date }) => {
      const taskElement = createTaskElement(text, date);
      document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
    });
    updateTasksCount(columnId);
  });
}

function updateLocalStorage() {
  ["todo", "doing", "done"].forEach((columnId) => {
    const tasks = [];
    document.querySelectorAll(`#${columnId}-tasks .card`).forEach((card) => {
      const taskText = card.querySelector("span").textContent;
      const taskDate = card.querySelector("small").textContent;
      tasks.push({ text: taskText, date: taskDate });
    });
    localStorage.setItem(columnId, JSON.stringify(tasks));
  });
}
