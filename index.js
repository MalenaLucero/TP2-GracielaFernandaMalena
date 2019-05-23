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
    newTask.classList.add('itemPending itemComplete')
    allTasks.unshift({
        text: taskContent,
        isPending: true,
        isDeleted: false,
    })

    removeSimple = document.getElementById('trashIconSimple')
    checkSimple = document.getElementById('checkIconSimple')

    appendBtn(deleteBtn, removeSimple, newTask)
    appendBtn(checkBtn, checkSimple, newTask)
    

    listPending = document.getElementById('listPending')
    listComplete = document.getElementById('listComplete')
    arrangeLists(newTask)
    textInput.value = ''


    
    textPending = document.getElementById('textPending')
    hideInstructions(counterPending, textPending)
    textComplete = document.getElementById('textComplete')
    hideInstructions(counterComplete, textComplete)
    
}


//esconde "no hay tareas pendientes" o "no hay tareas completadas"
var hideInstructions = function(counter, node){
    if(counter !== 0){
        node.classList.add('hide')
    }else{
        node.classList.remove('hide')
    }
}

//crea y pega botones en los li
var appendBtn = function(nameBtn, textBtn, appendNode){
    var nameBtn = document.createElement('a')
    appendNode.appendChild(nameBtn)
    nameBtn.appendChild(textBtn)
}

//ubica el li en la lista correspondiente
var arrangeLists = function(task){
    for(var i = 0; i < allTasks.length; i++){
        if(allTasks[i].isPending){
            listPending.appendChild(task)
        }else{
            listComplete.appendChild(task)
        }
    }
}


    




