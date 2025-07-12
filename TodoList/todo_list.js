// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const searchInput = document.getElementById("searchInput");
const taskCount = document.getElementById("taskCount");
const completedCount = document.getElementById("completedCount");

// Task Array
let tasks = [];

// Add Task Function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({
            text: taskText,
            completed: false,
            createdAt: new Date()
        });
        taskInput.value = "";
        saveTasks();
        displayTasks();
        taskInput.focus();
    }
}

// Display Tasks Function
function displayTasks() {
    // Filter tasks based on search input
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTasks = tasks.filter(task => 
        task.text.toLowerCase().includes(searchTerm)
    );
    
    // Clear task list
    taskList.innerHTML = "";
    
    // Add filtered tasks to the list
    filteredTasks.forEach((task, index) => {
        const li = document.createElement("li");
        if (task.completed) {
            li.classList.add("completed");
        }
        
        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>
            <span class="task-date">${formatDate(task.createdAt)}</span>
        `;
        
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
    
    // Update stats
    updateStats();
}

// Toggle Task Completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

// Clear Completed Tasks
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    displayTasks();
}

// Clear All Tasks
function clearAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        tasks = [];
        saveTasks();
        displayTasks();
    }
}

// Update Statistics
function updateStats() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    
    taskCount.textContent = `${totalTasks} ${totalTasks === 1 ? 'task' : 'tasks'}`;
    completedCount.textContent = `${completedTasks} completed`;
}

// Format Date
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Save Tasks to Local Storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load Tasks from Local Storage
function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    displayTasks();
}

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);
searchInput.addEventListener("input", displayTasks);

// Initialize the app
loadTasks();