var counterPending //contador de tareas pendientes
var counterComplete//contador de tareas completas
var allTasks = [
    //{text: 'uno', isPending: true, isDeleted: false},
    //{text: 'dos', isPending: true, isDeleted: false},
    //{text: 'tres', isPending: false, isDeleted: false},
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
var numberPending //para mostrar la cantidad de tareas pendientes
var numberComplete
var taskCounter
var spanPending
var spanComplete
var anchorContainer //div que contiene los iconos de cada lista


var loadedPage = function(){
    listPending = document.getElementById('listPending')
    listPending.innerHTML = ''
    listComplete = document.getElementById('listComplete')
    listComplete.innerHTML = ''
    textPending = document.getElementById('textPending')
    textComplete = document.getElementById('textComplete')
    counterPending = 0
    counterComplete = 0
    spanPending = document.getElementById('counterPending')
    console.log(spanPending)
    spanComplete = document.getElementById('counterComplete')
    console.log(spanComplete)
    allTasks.map(function(item, index){
        var newTask = document.createElement('li')
        newTask.innerText = item.text
        newTask.classList.add('itemPending')
        anchorContainer = document.createElement('div')
        anchorContainer.classList.add('anchorContainer')
        newTask.appendChild(anchorContainer)
        //appendRemoveIconSimple(newTask)
        //appendCheckIconSimple(newTask)

        deleteBtn = document.createElement('a')
        deleteBtn.classList.add('deleteBtn')
        removeSimple = document.createElement('img')
        removeSimple.classList.add('removeSimple')
        removeSimple.src = 'assets/delete_purple.png'
        removeSimple.classList.add('removeIcon')
        anchorContainer.appendChild(deleteBtn)
        deleteBtn.appendChild(removeSimple)
        deleteBtn.id = index
        deleteBtn.onclick = function(){ deleteItem(this) }

        checkBtn = document.createElement('a')
        checkBtn.classList.add('checkBtn')
        checkSimple = document.createElement('img')
        checkSimple.src = 'assets/checkmark_purple.png'
        checkSimple.classList.add('checkIcon')
        checkBtn.id = index
        
        checkBtn.onclick = function(){toggle(this.id)}

        anchorContainer.appendChild(checkBtn)
        checkBtn.appendChild(checkSimple)
        
        if(item.isPending){
            listPending.appendChild(newTask)
            counterPending ++
            newTask.classList.replace('itemComplete', 'itemPending')
        }else{
            listComplete.appendChild(newTask)
            counterComplete ++
            checkSimple.src = 'assets/checkmark_circle_purple.png'
            newTask.classList.replace('itemPending', 'itemComplete')
        }
    })
    //pone y saca "no hay tareas pendientes"
    if(counterPending !== 0){
        textPending.classList.add('hide')
    }else{
        textPending.classList.remove('hide')
    }
    //pone y saca "no hay tareas completadas"
    if(counterComplete !== 0){
        textComplete.classList.add('hide')
    }else{
        textComplete.classList.remove('hide')
    }
    spanPending.innerText = counterPending
    spanComplete.innerText = counterComplete

}

var handleKeyPress = function(event){
    if(event.code === 'Enter'){
        printTask()
    }
}

var toggle = function(id){
    allTasks[id].isPending = !allTasks[id].isPending
    loadedPage()
}

var deleteItem = function(btn){
    allTasks.splice(btn.id, 1)
    loadedPage()
}

var printTask = function(){
    var textInput = document.getElementById('textInput')
    //no entra si el input esta vacio
    if(textInput.value !== ''){
        allTasks.unshift({
        text: textInput.value,
        isPending: true,
        isDeleted: false,
        })
        textInput.value = ''
        loadedPage()
    }
}

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
    deleteBtn.classList.add('deleteBtn')
    removeSimple = document.createElement('img')
    removeSimple.classList.add('removeSimple')
    removeSimple.src = 'assets/remove_icon.svg'
    removeSimple.classList.add('removeIcon')
    task.appendChild(deleteBtn)
    deleteBtn.appendChild(removeSimple)
    deleteBtn.onclick = function(){ deleteItem(this) }
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