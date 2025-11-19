let tasks = [];

console.log("hello world");

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Étape 6 : Fonctions dédiées
function ajouterTache(taskText) {
  if (taskText.trim() === "") {
    alert("Veuillez entrer une tâche");
    return;
  }

  let newTask = {
    texte: taskText,
    terminee: false,
  };

  tasks.push(newTask);
  afficherTaches();
  taskInput.value = "";
  console.log(tasks);
  sauvegarderTaches();
}

function supprimerTache(index) {
  tasks.splice(index, 1);
  afficherTaches();
  sauvegarderTaches();
}

function terminerTache(index) {
  tasks[index].terminee = !tasks[index].terminee;
  afficherTaches();
  sauvegarderTaches();
}

// Étape 7 : Tableaux & boucles
function afficherTaches() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <span class="${task.terminee ? "completed" : ""}">${task.texte}</span>
      <div>
        <button onclick="terminerTache(${index})">Terminer</button>
        <button onclick="supprimerTache(${index})">Supprimer</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Étape 9 : LocalStorage
function sauvegarderTaches() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function chargerTaches() {
  let data = localStorage.getItem("tasks");
  if (data) {
    tasks = JSON.parse(data);
    afficherTaches();
  }
}
window.onload = chargerTaches;

// Lier les événements aux nouvelles fonctions
addTaskButton.addEventListener("click", () => {
  ajouterTache(taskInput.value);
});

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    ajouterTache(taskInput.value);
  }
});
