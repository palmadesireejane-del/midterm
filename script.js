let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function updateTaskList(){

const taskList=document.getElementById("taskList");

if(!taskList) return;

taskList.innerHTML="";

let completed=0;

let today=new Date().toISOString().split("T")[0];

tasks.forEach((task,index)=>{

const card=document.createElement("div");

card.className="task-card";

if(task.completed) card.classList.add("completed");

let warning="";

if(task.deadline < today){

warning="<p style='color:red'>⚠ Deadline passed</p>";

}

card.innerHTML=`

<div>

<p>${task.name}</p>

<p>Due: ${task.deadline}</p>

${warning}

</div>

<div>

<button onclick="toggleComplete(${index})">✔</button>

<button onclick="editTask(${index})">✏️</button>

<button class="delete-btn" onclick="deleteTask(${index})">🗑</button>

</div>

`;

taskList.appendChild(card);

if(task.completed) completed++;

});

const progressBar=document.getElementById("progressBar");

const percent=tasks.length?(completed/tasks.length)*100:0;

if(progressBar) progressBar.style.width=percent+"%";

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function addTask(){

const name=document.getElementById("taskName").value.trim();

const deadline=document.getElementById("taskDeadline").value;

if(!name || !deadline){

alert("Please enter task and deadline");

return;

}

tasks.push({

name:name,

deadline:deadline,

completed:false

});

document.getElementById("taskName").value="";

document.getElementById("taskDeadline").value="";

updateTaskList();

}

function toggleComplete(index){

tasks[index].completed=!tasks[index].completed;

updateTaskList();

}

function deleteTask(index){

tasks.splice(index,1);

updateTaskList();

}

function editTask(index){

let newName=prompt("Edit task name:",tasks[index].name);

if(newName){

tasks[index].name=newName;

updateTaskList();

}

}

function searchTask(){

let input=document.getElementById("searchInput").value.toLowerCase();

let cards=document.querySelectorAll(".task-card");

cards.forEach(card=>{

if(card.textContent.toLowerCase().includes(input)){

card.style.display="flex";

}else{

card.style.display="none";

}

});

}

updateTaskList();
