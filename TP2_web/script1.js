let tasks = [];

console.log("hello world");

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // ajout dans la liste
  tasks.push(taskText);

  // Créer un élément <li>
  let li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button onclick="completeTask(this)">Terminer</button>
      <button onclick="deleteTask(this)">Supprimer</button>
    </div>
  `;

  taskList.appendChild(li);

  // vider le champ de saisie
  taskInput.value = "";

  console.log(tasks);
}

// Étape 4 : Gestion des événements
addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Étape 5 : Fonctions pour terminer et supprimer les tâches
function completeTask(button) {
  let li = button.parentElement.parentElement;
  li.classList.toggle("completed");
  console.log(tasks);
}

function deleteTask(button) {
  let li = button.parentElement.parentElement;
  let taskText = li.querySelector("span").innerText;
  tasks = tasks.filter((task) => task !== taskText);
  li.remove();
  console.log(tasks);
}
