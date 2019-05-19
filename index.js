var taskContent //contenido de cada task
var allTasks = [] //Array de las tasks como objects
var listPending //lista de tareas pendientes
var listComplete //lista de tareas completadas
var textPending
var textComplete
var deleteBtn 
var completeBtn


var printTask = function(){
    var textInput = document.getElementById('textInput')
    taskContent = textInput.value 
    var newTask = document.createElement('li')
    newTask.innerText = taskContent
    allTasks.unshift({
        text: taskContent,
        isPending: true,
        isDeleted: false,
    })
    
    appendBtn(deleteBtn, 'delete', newTask)
    appendBtn(completeBtn, 'complete', newTask)

    listPending = document.getElementById('listPending')
    listComplete = document.getElementById('listComplete')
    arrangeLists(newTask)
    textInput.value = ''


    
    textPending = document.getElementById('textPending')
    hideInstructions(textPending)
    textComplete = document.getElementById('textComplete')
    hideInstructions(textComplete)
    
}


//esconde "no hay tareas pendientes" o "no hay tareas completadas"
var hideInstructions = function(node){
    node.classList.add('hide')
}

//crea y pega botones en los li
var appendBtn = function(nameBtn, textBtn, appendNode){
    var nameBtn = document.createElement('button')
    nameBtn.innerText = textBtn
    appendNode.appendChild(nameBtn)
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


    




