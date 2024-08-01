// specify the button element

function showAlert() {
  alert("You clicked the alert button!");
}
const alertButton = document.getElementsByClassName("click-button")[0];
alertButton.addEventListener("click", showAlert);

function showConsole() {
  console.log("You clicked the console button!");
}
const consoleButton = document.getElementsByClassName("click-button")[1];
consoleButton.addEventListener("click", showConsole);

// document.getElementById("click-button")[0].addEventListener("click", function (){
//     alert("You clicked the alert button!");
// }

// document.getElementById("click-button")[1].addEventListener("click", function (){
// console.log(You clicked the console button!)};

console.log(document.getElementsByClassName("click-button"));

const showButton = document.getElementById("show-button");
const hideButton = document.getElementById("hide-button");

showButton.addEventListener("click", function () {
  document.getElementById("text").innerHTML = "Hello World!";
});
hideButton.addEventListener("click", function () {
  document.getElementById("text").innerHTML = "";
});
//  innerHTML to change <p></p>
// add.EventListener ni click awahad vzvvleh hariu vildel

const taskuud = [];
let task = "";

const toDoInput = document.getElementById("to-do-input");
toDoInput.addEventListener("input", function () {
  task = event.target.value;
});

const toDoButton = document.getElementById("to-do-button");
toDoButton.addEventListener("click", addTask);

function addTask() {
  if (task.length === 0) {
    alert = "Please enter a task!";
  }

  taskuud.push(task);
  toDoInput.value = "";
  task = "";

  clearTasks();
  displayTasks();
}

function clearTasks() {
  const toDoList = document.getElementById("to-do-list");
  toDoList.innerHTML = "";
}

function displayTasks() {
  for (let i = 0; i < taskuud.length; i++) {
    const taskItem = document.createElement("li"); // <li></li>
    taskItem.innerHTML = taskuud[i]; // <li>wash</li>
    document.getElementById("to-do-list").appendChild(taskItem); // <ul><li>wash</li></ul>
  }
}
