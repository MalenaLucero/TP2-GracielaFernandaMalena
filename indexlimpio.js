var counterPending = 1 //contador de tareas pendientes
var counterComplete = 1//contador de tareas completas
var taskContent //contenido de cada task
var allTasks = [] //Array de las tasks como objects
var listPending //lista de tareas pendientes
var listComplete //lista de tareas completadas
var textPending
var textComplete
var deleteBtn 
var completeBtn
var checkBtn
var removeSimple


var printTask = function(){
    var textInput = document.getElementById('textInput')
    taskContent = textInput.value 
    var newTask = document.createElement('li')
    newTask.innerText = taskContent
    newTask.classList.add('itemPending')
    allTasks.unshift({
        text: taskContent,
        isPending: true,
        isDeleted: false,
    })

    listPending = document.getElementById('listPending')
    removeSimple = document.getElementById('trashIconSimple')
    checkSimple = document.getElementById('checkIconSimple')

    deleteBtn = document.createElement('a')
    newTask.appendChild(deleteBtn)
    deleteBtn.appendChild(removeSimple)

    listPending.appendChild(newTask)

    textInput.value = ''
}