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
var removeSimple //icono del tacho de basura sin hover
var checkSimple //icono del tick sin checkear


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

    appendRemoveIconSimple(newTask)
    appendCheckIconSimple(newTask)
    
    listPending.appendChild(newTask)
    textInput.value = ''
}

//crea el anchor con el tacho de basura y se lo inserta al li
//task es el li creado
var appendRemoveIconSimple = function(task){
    deleteBtn = document.createElement('a')
    removeSimple = document.createElement('img')
    removeSimple.src = 'assets/remove_icon.svg'
    removeSimple.classList.add('removeIcon')
    task.appendChild(deleteBtn)
    deleteBtn.appendChild(removeSimple)
}

//crea el anchor con el tick sin checkear
//task es el li creado
var appendCheckIconSimple = function(task){
    checkBtn = document.createElement('a')
    checkSimple = document.createElement('img')
    checkSimple.src = 'assets/done_icon.svg'
    checkSimple.classList.add('checkIcon')
    task.appendChild(checkBtn)
    checkBtn.appendChild(checkSimple)
}