document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // forms and inputs set variables 
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
  // attach the event listener 
  newTaskForm.addEventListener("submit", createNewTask);
  // prevent form from submission
  // reset event 
  function createNewTask(event) {
    console.log (event)
    event.preventDefault();
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    taskList.appendChild(newTask);
    event.target.reset();
  };
});
