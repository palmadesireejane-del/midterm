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