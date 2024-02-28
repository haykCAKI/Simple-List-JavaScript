
function addTask() {
    const takeInput = document.getElementById("tasksInput");
    const tasksContainer = document.getElementById("tasks-container");

    if (takeInput.value.trim() === "") {
        alert("Please enter a task")
        return;
    }

    const taksDiv = document.createElement("div");
    taksDiv.className = "task";

    const taskText = document.createElement("span");
    taskText.innerText = takeInput.value;
    taksDiv.appendChild(taskText);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
        tasksContainer.removeChild(taksDiv);
    });

    taksDiv.appendChild(deleteButton);

    tasksContainer.appendChild(taksDiv);

    takeInput.value = "";
}

function clearTasks(){
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = " ";
}
