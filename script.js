let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function updateTaskList(){

const taskList=document.getElementById("taskList");

if(!taskList) return;

taskList.innerHTML="";

let completed=0;

tasks.forEach((task,index)=>{

const card=document.createElement("div");

card.className="task-card";

if(task.completed) card.classList.add("completed");

card.innerHTML=`
<div>
<p>${task.name}</p>
<p>Due: ${task.deadline}</p>
</div>

<div>
<button onclick="toggleComplete(${index})">✔</button>
<button onclick="deleteTask(${index})">🗑</button>
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

const name=document.getElementById("taskName").value;

const deadline=document.getElementById("taskDeadline").value;

if(!name || !deadline){
alert("Enter task and deadline");
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

updateTaskList();
