var counterPending = 1 //contador de tareas pendientes
var counterComplete = 1//contador de tareas completas
var taskContent //texto de cada task
var allTasks = [] //Array de las tasks como objects
var listPending //lista de tareas pendientes
var listComplete //lista de tareas completadas
var textPending //texto "no hay tareas pendientes"
var textComplete //texto "no hay tareas completadas"
var deleteBtn //anchor que contiene al icono removeSimple
var completeBtn 
var checkBtn //anchor que contiene al icono checkSimple
var removeSimple //icono del tacho de basura sin hover
var checkSimple //icono del tick sin checkear


var printTask = function(){
    listPending = document.getElementById('listPending')
    //listPending.innerHTML = ''
    listComplete = document.getElementById('listComplete')
    //listComplete = ''

    var textInput = document.getElementById('textInput')
    taskContent = textInput.value 
    var newTask = document.createElement('li')
    newTask.innerText = taskContent
    newTask.classList.add('itemPending')
    newTask.classList.add('itemComplete')
    allTasks.unshift({
        text: taskContent,
        isPending: false,
        isDeleted: false,
    })

    appendRemoveIconSimple(newTask)
    appendCheckIconSimple(newTask)
 
    arrangeLists(newTask)
    
    textInput.value = ''
}

//ubica el li en la lista correspondiente
var arrangeLists = function(task){
    if(allTasks[0].isPending){
        listPending.appendChild(task)
    }else{
        listComplete.appendChild(task)
    }
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