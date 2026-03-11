let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(){

let list = document.getElementById("taskList");

if(!list) return;

list.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

li.innerHTML=
task.name+" ("+task.date+") "+
`<button onclick="deleteTask(${index})">Delete</button>`;

list.appendChild(li);

});

}

function addTask(){

let taskInput=document.getElementById("taskInput");
let dateInput=document.getElementById("dateInput");

if(taskInput.value=="" || dateInput.value==""){
alert("Please fill all fields");
return;
}

tasks.push({
name:taskInput.value,
date:dateInput.value
});

localStorage.setItem("tasks",JSON.stringify(tasks));

taskInput.value="";
dateInput.value="";

displayTasks();

}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

function searchTask(){

let input=document.getElementById("searchInput").value.toLowerCase();

let items=document.querySelectorAll("#taskList li");

items.forEach(item=>{

if(item.textContent.toLowerCase().includes(input)){
item.style.display="flex";
}else{
item.style.display="none";
}

});

}

displayTasks();