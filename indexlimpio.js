var counterPending = 1 //contador de tareas pendientes
var counterComplete = 1//contador de tareas completas
var allTasks = [
    {text: 'uno', isPending: true, isDeleted: false},
    {text: 'dos', isPending: true, isDeleted: false},
    {text: 'tres', isPending: false, isDeleted: false},
] //Array de las tasks como objects
var listPending //lista de tareas pendientes
var listComplete //lista de tareas completadas
var textPending //texto "no hay tareas pendientes"
var textComplete //texto "no hay tareas completadas"
var deleteBtn //anchor que contiene al icono removeSimple
var completeBtn 
var checkBtn //anchor que contiene al icono checkSimple
var removeSimple //icono del tacho de basura sin hover
var checkSimple //icono del tick sin checkear

var loadedPage = function(){
    listPending = document.getElementById('listPending')
    listPending.innerHTML = ''
    listComplete = document.getElementById('listComplete')
    listComplete.innerHTML = ''
    allTasks.map(function(item, index){
        var newTask = document.createElement('li')
        newTask.innerText = item.text
        newTask.classList.add('itemPending')
        newTask.classList.add('itemComplete')
        //appendRemoveIconSimple(newTask)
        //appendCheckIconSimple(newTask)

        checkBtn = document.createElement('a')
        checkSimple = document.createElement('img')
        checkSimple.src = 'assets/done_icon.svg'
        checkSimple.classList.add('checkIcon')
        checkBtn.id = index
        
        checkBtn.onclick = function(){
            allTasks[checkBtn.id].isPending = !allTasks[checkBtn.id].isPending
            loadedPage()
        }

        newTask.appendChild(checkBtn)
        checkBtn.appendChild(checkSimple)

        if(item.isPending){
            listPending.appendChild(newTask)
        }else{
            listComplete.appendChild(newTask)
        }

        console.log(checkBtn)
    })

    
}

/*var printTask = function(){
    var textInput = document.getElementById('textInput')
    allTasks.unshift({
        text: textInput.value,
        isPending: true,
        isDeleted: false,
    })
    textInput.value = ''
    
}*/

//ubica el li en la lista correspondiente
var arrangeLists = function(isPending, task){
    if(isPending){
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
/*var appendCheckIconSimple = function(task){
    checkBtn = document.createElement('a')
    checkSimple = document.createElement('img')
    checkSimple.src = 'assets/done_icon.svg'
    checkSimple.classList.add('checkIcon')
    task.appendChild(checkBtn)
    checkBtn.appendChild(checkSimple)
}*/