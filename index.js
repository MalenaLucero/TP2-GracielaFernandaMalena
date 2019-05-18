var taskContent //The text content of each task
var allTasks = [] //Array that stores new tasks as objects
var listPending
var listCompleted


var printTask = function(){
    var textInput = document.getElementById('textInput')
    taskContent = textInput.value 
    var newTask = document.createElement('li')
    newTask.innerText = taskContent
    allTasks.unshift({
        text: taskContent,
        isCompleted: false,
        isDeleted: false
    })
    //console.log(allTasks)
    listPending = document.getElementById('listPending')
    listPending.appendChild(newTask)
    //console.log(listPending)
    textInput.value = ''
    
    var textPending = document.getElementById('textPending')
    textPending.classList.add('hide')
}



    




